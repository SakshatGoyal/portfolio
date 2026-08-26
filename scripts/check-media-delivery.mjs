import { createHash } from 'node:crypto';
import { videoVariants } from '../src/data/video-variants.js';

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4322';
const urls = [...new Set(Object.values(videoVariants).flatMap(({ mobile, desktop }) => [
  mobile.mp4, mobile.webm, desktop.mp4, desktop.webm,
]))];
const failures = [];
const fail = (condition, message) => { if (condition) failures.push(message); };
const absolute = (path) => new URL(path, baseUrl).href;
const digest = (buffer) => createHash('sha256').update(buffer).digest('hex');

await Promise.all(urls.map(async (url) => {
  const expectedType = url.endsWith('.mp4') ? 'video/mp4' : 'video/webm';
  try {
    const head = await fetch(absolute(url), { method: 'HEAD' });
    fail(!head.ok, `${url}: HEAD returned ${head.status}.`);
    fail(!(head.headers.get('content-type') || '').startsWith(expectedType), `${url}: incorrect Content-Type.`);
    fail(!Number(head.headers.get('content-length')), `${url}: missing Content-Length.`);
    fail(!(head.headers.get('cache-control') || head.headers.get('etag') || head.headers.get('last-modified')), `${url}: missing cache policy or validator.`);

    const probes = await Promise.all(Array.from({ length: 3 }, () => fetch(absolute(url), {
      headers: { Range: 'bytes=0-1023' },
    })));
    const hashes = [];
    for (const response of probes) {
      fail(response.status !== 206, `${url}: byte range returned ${response.status}, expected 206.`);
      fail(!/^bytes 0-1023\//.test(response.headers.get('content-range') || ''), `${url}: invalid Content-Range.`);
      fail(response.status !== 206 && !/bytes/i.test(response.headers.get('accept-ranges') || ''), `${url}: byte-range delivery is unsupported.`);
      hashes.push(digest(Buffer.from(await response.arrayBuffer())));
    }
    fail(new Set(hashes).size !== 1, `${url}: concurrent byte-range responses differed.`);
  } catch (error) {
    failures.push(`${url}: ${error.message}`);
  }
}));

if (failures.length) {
  console.error(`Media delivery checks failed against ${baseUrl}:`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Media delivery checks passed for ${urls.length} variants against ${baseUrl}.`);
