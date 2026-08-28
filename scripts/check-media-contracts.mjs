import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { discoverActiveVideoSources } from './build-media-variants.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = join(root, 'public');
const manifestModule = await import(`${pathToFileURL(join(root, 'src/data/video-variants.js')).href}?check=${Date.now()}`);
const { videoVariants, videoVariantsFor } = manifestModule;
const failures = [];
const deep = process.argv.includes('--deep');

const toolVersion = (command) => execFileSync(command, ['-version'], {
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
}).split('\n')[0];

if (deep) {
  for (const command of ['ffprobe', 'ffmpeg']) {
    try {
      console.log(`${command}: ${toolVersion(command)}`);
    } catch (error) {
      console.error(`Deep media validation requires ${command} on PATH: ${error.message}`);
      process.exit(1);
    }
  }
}

const probe = (path) => JSON.parse(execFileSync('ffprobe', [
  '-v', 'error', '-show_streams', '-show_format', '-of', 'json', path,
], { encoding: 'utf8' }));

const fps = (value) => {
  const [numerator, denominator = '1'] = value.split('/').map(Number);
  return denominator ? numerator / denominator : Infinity;
};

const fail = (condition, message) => { if (condition) failures.push(message); };
const active = discoverActiveVideoSources();
fail(JSON.stringify(Object.keys(videoVariants).sort()) !== JSON.stringify(active), 'Manifest keys do not exactly match active source references.');

for (const source of active) {
  const entry = videoVariantsFor(source);
  fail(!entry, `${source}: missing manifest entry.`);
  if (!entry) continue;
  fail(entry.original !== source, `${source}: original fallback is not preserved.`);

  for (const tier of ['mobile', 'desktop']) {
    for (const [format, expectedCodec] of [['mp4', 'h264'], ['webm', 'vp9']]) {
      const url = entry[tier]?.[format];
      const path = url ? join(publicRoot, url.replace(/^\//, '')) : '';
      if (!url || !existsSync(path)) {
        failures.push(`${source}: missing ${tier} ${format} variant.`);
        continue;
      }
      fail(statSync(path).size === 0, `${url}: generated variant is empty.`);
      if (format === 'mp4') {
        const bytes = readFileSync(path);
        fail(bytes.indexOf(Buffer.from('moov')) > bytes.indexOf(Buffer.from('mdat')), `${url}: MP4 is not faststart.`);
      }
      if (!deep) continue;
      const result = probe(path);
      const video = result.streams.filter((stream) => stream.codec_type === 'video');
      const audio = result.streams.filter((stream) => stream.codec_type === 'audio');
      fail(video.length !== 1, `${url}: expected exactly one video stream.`);
      fail(audio.length !== 0, `${url}: audio stream must be absent.`);
      if (!video[0]) continue;
      fail(video[0].codec_name !== expectedCodec, `${url}: expected ${expectedCodec}, got ${video[0].codec_name}.`);
      fail(video[0].pix_fmt !== 'yuv420p', `${url}: expected yuv420p, got ${video[0].pix_fmt}.`);
      fail(fps(video[0].avg_frame_rate) > 30.001, `${url}: exceeds 30fps (${video[0].avg_frame_rate}).`);
      fail(video[0].width % 2 !== 0 || video[0].height % 2 !== 0, `${url}: dimensions must be even.`);
      const maxPixels = tier === 'mobile' ? 1280 * 720 : 1920 * 1080;
      const maxrate = tier === 'mobile' ? 1600 : 3000;
      fail(video[0].width * video[0].height > maxPixels * 1.01, `${url}: exceeds ${tier} pixel-area budget.`);
      const duration = Number(result.format.duration);
      const overallKbps = statSync(path).size * 8 / duration / 1000;
      fail(!Number.isFinite(overallKbps) || overallKbps > maxrate * 1.05, `${url}: ${Math.round(overallKbps)}kbps exceeds the ${maxrate}kbps tier ceiling (plus mux tolerance).`);
      const frameProbe = JSON.parse(execFileSync('ffprobe', [
        '-v', 'error', '-select_streams', 'v:0',
        '-show_entries', 'frame=key_frame,best_effort_timestamp_time', '-of', 'json', path,
      ], { encoding: 'utf8' }));
      const keyframes = frameProbe.frames
        .filter((frame) => frame.key_frame === 1)
        .map((frame) => Number(frame.best_effort_timestamp_time));
      fail(!keyframes.some((time) => time <= 0.1), `${url}: no initial keyframe.`);
      fail(keyframes.some((time, index) => index && time - keyframes[index - 1] > 2.001), `${url}: keyframe interval exceeds two seconds.`);
      try {
        execFileSync('ffmpeg', ['-v', 'error', '-xerror', '-i', path, '-map', '0:v:0', '-f', 'null', '-'], { stdio: 'pipe' });
      } catch (error) {
        failures.push(`${url}: full decode failed: ${String(error.stderr || error.message).trim()}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`Media contract check failed (${failures.length}):\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}
console.log(`${deep ? 'Deep media' : 'Portable media'} contracts passed for ${active.length} sources and ${active.length * 4} generated variants.`);
