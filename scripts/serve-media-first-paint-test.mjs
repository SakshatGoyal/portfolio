// Browser regression harness. Run after `npm run build`, then visit the printed
// URL in the built-in Browser. It samples the real rendered clip on every frame,
// including frames before deferred scripts and media metadata have arrived.
// SOURCE_URL=https://sakshat-goyal.com tests a cached copy of production bytes.
// DELAY_JS=2500 or DELAY_MEDIA=2500 reproduces independent delivery races.
// DELAY_JS=10000 exercises failed/late initialization. NO_JS=1 tests no script.
// Evidence is written locally; this harness is never included in the build.
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

const port = Number(process.env.PORT || 4401);
const source = process.env.SOURCE_URL;
const delayJS = Number(process.env.DELAY_JS || 0);
const delayMedia = Number(process.env.DELAY_MEDIA || 0);
const noJS = process.env.NO_JS === '1';
const reducedMotion = process.env.REDUCED_MOTION === '1';
const blockJS = process.env.BLOCK_JS === '1';
const evidence = resolve('.tmp/media-first-paint', String(port));
await mkdir(evidence, { recursive: true });
const cache = new Map();
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm', '.svg': 'image/svg+xml' };

const probe = `<script>
(() => {
  const frames = [];
  const started = performance.now();
  const run = new URL(location.href).searchParams.get('run') || 'visit';
  const sample = () => {
    const targets = [...document.querySelectorAll('[data-media-reveal]')];
    frames.push({ t: Math.round(performance.now() - started), root: document.documentElement.dataset.mediaMotionReady,
      targets: targets.map((target, index) => {
        const clip = target.querySelector('[data-media-reveal-clip]');
        const rect = target.getBoundingClientRect();
        const visual = target.querySelector('[data-media-visual]:not([aria-hidden="true"]),img:not([aria-hidden="true"]),video');
        return { index, clip: clip ? getComputedStyle(clip).clipPath : null, opacity: clip ? getComputedStyle(clip).opacity : null,
          active: target.classList.contains('media-reveal-active'), ready: target.dataset.mediaRevealReady === 'true',
          inView: rect.bottom > 0 && rect.top < innerHeight,
          loaded: visual instanceof HTMLImageElement ? visual.complete && visual.naturalWidth > 0 : visual instanceof HTMLVideoElement ? visual.readyState >= 1 : true };
      }) });
    if (performance.now() - started < 14000) requestAnimationFrame(sample);
    else {
      const first = frames.find(frame => frame.targets.length);
      const exposures = frames.flatMap(frame => frame.targets.filter(target => target.inView && !target.active && !['false','fallback'].includes(frame.root) && target.opacity !== '0' && target.clip !== 'inset(0px 100% 0px 0px)').map(target => ({t:frame.t,...target})));
      const summary = { run, url: location.href, viewport: {width:innerWidth,height:innerHeight}, first, prematureExposureFrames: exposures.length, firstExposure: exposures[0],
        revealed: [...new Set(frames.flatMap(frame => frame.targets.filter(target => target.active && target.clip === 'inset(0px)').map(target=>target.index)))],
        intermediateSwipeFrames: frames.filter(frame => frame.targets.some(target => target.active && target.clip?.startsWith('inset(') && target.clip !== 'inset(0px)' && target.clip !== 'inset(0px 100% 0px 0px)')).length };
      const report = document.createElement('pre'); report.id = 'first-paint-result'; report.textContent = JSON.stringify(summary); report.style.cssText = 'position:fixed;bottom:0;left:0;z-index:999999;background:white;color:black;font:12px monospace;max-width:100%;max-height:80px;overflow:auto'; document.body.append(report);
      fetch('/__evidence', {method:'POST',body:JSON.stringify({summary,frames})});
    }
  };
  requestAnimationFrame(sample);
})();
</script>`;

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://localhost:${port}`);
    if (url.pathname === '/__mobile') {
      res.setHeader('Content-Type', 'text/html');
      res.end('<!doctype html><title>390px mobile viewport test</title><style>body{margin:0}iframe{display:block;width:390px;height:844px;border:0}</style><iframe src="/?run=fixed-mobile-390"></iframe>'); return;
    }
    if (url.pathname === '/__evidence') {
      let body = ''; for await (const chunk of req) body += chunk;
      const report = JSON.parse(body);
      await writeFile(resolve(evidence, `${report.summary.run.replace(/[^a-z0-9-]/gi, '-')}.json`), JSON.stringify(report, null, 2));
      console.log(JSON.stringify(report.summary)); res.end('saved'); return;
    }
    let path = url.pathname;
    if (blockJS && path.endsWith('.js')) { res.writeHead(503); res.end('Deliberately blocked test bundle'); return; }
    let body, type;
    if (source) {
      if (!cache.has(path)) cache.set(path, (async () => {
        const response = await fetch(new URL(path, source));
        if (!response.ok) throw new Error(`${path}: ${response.status}`);
        return { body: Buffer.from(await response.arrayBuffer()), type: response.headers.get('content-type') };
      })());
      ({ body, type } = await cache.get(path));
    } else {
      if (path.endsWith('/')) path += 'index.html';
      const file = resolve('dist', `.${path}`);
      if (!file.startsWith(resolve('dist') + '/')) throw new Error('Invalid path');
      body = await readFile(file); type = types[extname(file)] || 'application/octet-stream';
    }
    if (reducedMotion && /text\/(html|css|javascript)/.test(type)) {
      // Exercise the same CSS and JS branches with an always-matching media
      // condition; this does not change the user's OS accessibility setting.
      body = Buffer.from(body.toString().replaceAll('prefers-reduced-motion: reduce', 'min-width: 0px').replaceAll('prefers-reduced-motion:reduce', 'min-width:0px'));
    }
    if (type?.includes('text/html')) {
      let html = body.toString();
      if (noJS) html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
      body = Buffer.from(html.replace('<head>', '<head>' + probe));
    }
    if (path.endsWith('.js') && delayJS) await new Promise(done => setTimeout(done, delayJS));
    if (/\.(mp4|webm)$/.test(path) && delayMedia) await new Promise(done => setTimeout(done, delayMedia));
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(body);
  } catch (error) { res.writeHead(404); res.end(String(error)); }
}).listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}/ — ${source || 'dist'}, JS delay ${delayJS}ms, media delay ${delayMedia}ms`));
