import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageVariants } from '../src/data/image-variants.js';
import { PROJECTS } from '../src/data/projects.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argumentsList = process.argv.slice(2);
const allowNoRange = argumentsList.includes('--allow-no-range');
const baseArgument = argumentsList.find((argument) => !argument.startsWith('--')) ?? 'http://127.0.0.1:8787';
const base = new URL(baseArgument.endsWith('/') ? baseArgument : `${baseArgument}/`);
const isPreview = base.hostname.endsWith('.workers.dev');
const productionOrigin = 'https://sakshat-goyal.com';
const socialImage = `${productionOrigin}/media/shared/homepage-social-preview.914a51567bd9.jpg`;
const socialImageAlt = 'Sākshāt Goyal’s portfolio homepage with his highlighted introduction and featured project cards';
const routes = [
  '/',
  ...PROJECTS.map(({ route }) => route),
];
const result = { base: base.href, routes: [], checks: {} };

for (const route of routes) {
  const response = await fetch(new URL(route, base), { redirect: 'error' });
  assert.equal(response.status, 200, `${route} must return 200`);
  const html = await response.text();
  const canonical = `${productionOrigin}${route}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`), `${route} has the wrong canonical URL`);
  assert.ok(html.includes(`<meta property="og:image" content="${socialImage}">`), `${route} is missing the Open Graph social image`);
  assert.ok(html.includes('<meta property="og:image:width" content="1320">'), `${route} has the wrong social image width`);
  assert.ok(html.includes('<meta property="og:image:height" content="990">'), `${route} has the wrong social image height`);
  assert.ok(html.includes('<meta property="og:image:type" content="image/jpeg">'), `${route} has the wrong social image type`);
  assert.ok(html.includes(`<meta property="og:image:alt" content="${socialImageAlt}">`), `${route} has the wrong Open Graph social image alt text`);
  assert.ok(html.includes(`<meta name="twitter:image" content="${socialImage}">`), `${route} is missing the X social image`);
  assert.ok(html.includes(`<meta name="twitter:image:alt" content="${socialImageAlt}">`), `${route} has the wrong X social image alt text`);
  assert.ok(!html.includes('/media/shared/social-card.jpg'), `${route} still references the previous social image`);
  const project = PROJECTS.find((entry) => entry.route === route);
  if (project) {
    assert.ok(html.includes(`<title>${project.metadata.title}</title>`), `${route} has the wrong metadata title`);
    assert.ok(html.includes(`<meta property="og:title" content="${project.metadata.title}">`), `${route} has the wrong Open Graph title`);
  }
  result.routes.push({ route, status: response.status, canonical });
}

for (const project of PROJECTS) {
  for (const legacyRoute of project.legacyRoutes) {
    for (const source of [legacyRoute, legacyRoute.slice(0, -1)]) {
      const response = await fetch(new URL(source, base), { redirect: 'manual' });
      assert.equal(response.status, 308, `${source} must return a direct 308 redirect`);
      assert.equal(new URL(response.headers.get('location'), base).pathname, project.route, `${source} must redirect directly to ${project.route}`);
    }
  }
}
result.checks.legacyRedirects = 6;

const slashRedirect = await fetch(new URL('/work/memory-lane', base), { redirect: 'manual' });
assert.ok([301, 302, 307, 308].includes(slashRedirect.status), '/work/memory-lane must redirect to its trailing-slash URL');
assert.equal(new URL(slashRedirect.headers.get('location'), base).pathname, '/work/memory-lane/');
result.checks.slashRedirect = slashRedirect.status;
for (const path of ['/about', '/about/']) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 404, 'The unpublished About page must not be available.');
}
result.checks.aboutUnpublished = true;

const missing = await fetch(new URL('/production-readiness-missing-route/', base));
assert.equal(missing.status, 404, 'unknown routes must return 404');
assert.ok((await missing.text()).includes('<meta name="robots" content="noindex, nofollow">'), 'the 404 page must be noindex');
result.checks.notFound = 404;

const home = await fetch(base);
const csp = home.headers.get('content-security-policy') ?? '';
assert.ok(csp.includes("script-src 'self' 'sha256-"), 'CSP must allow only same-origin and hashed inline scripts');
assert.equal(home.headers.get('x-content-type-options'), 'nosniff');
assert.equal(home.headers.get('x-frame-options'), 'DENY');
assert.equal(
  home.headers.get('x-robots-tag'),
  isPreview ? 'noindex, nofollow' : null,
  isPreview ? 'preview deployments must be noindex' : 'production must not inherit preview noindex headers',
);
assert.ok(home.headers.get('etag'), 'HTML must include an ETag');
result.checks.securityHeaders = true;

const conditional = await fetch(base, { headers: { 'If-None-Match': home.headers.get('etag') } });
assert.equal(conditional.status, 304, 'a matching HTML ETag must return 304');
result.checks.conditionalRequest = 304;

const robots = await fetch(new URL('/robots.txt', base));
assert.equal(robots.status, 200);
assert.ok((await robots.text()).includes('https://sakshat-goyal.com/sitemap-index.xml'));
const sitemap = await fetch(new URL('/sitemap-index.xml', base));
assert.equal(sitemap.status, 200);
assert.ok((await sitemap.text()).includes('https://sakshat-goyal.com/sitemap-0.xml'));
const sitemapDocument = await fetch(new URL('/sitemap-0.xml', base));
const sitemapXml = await sitemapDocument.text();
for (const project of PROJECTS) assert.ok(sitemapXml.includes(`${productionOrigin}${project.route}`), `sitemap is missing ${project.route}`);
for (const project of PROJECTS) {
  for (const legacyRoute of project.legacyRoutes) assert.ok(!sitemapXml.includes(`${productionOrigin}${legacyRoute}`), `sitemap must exclude ${legacyRoute}`);
}
result.checks.discoveryFiles = true;

const hashedImage = imageVariants['/media/projects/ai-research-architecture/images/hbs-cover.webp'].variants[0].src;
const hashedResponse = await fetch(new URL(hashedImage, base));
assert.equal(
  hashedResponse.headers.get('cache-control'),
  'public, max-age=31536000, immutable',
  'hashed assets must have one unambiguous immutable cache policy',
);
const unversionedResponse = await fetch(new URL('/media/projects/ai-research-architecture/images/hbs-cover.webp', base));
assert.equal(
  unversionedResponse.headers.get('cache-control'),
  'public, max-age=0, must-revalidate',
  'unversioned assets must revalidate without conflicting cache directives',
);
result.checks.caching = true;

const videoPath = '/media/generated/video/one-report/video/sc-01.mobile.mp4';
const videoUrl = new URL(videoPath, base);
const localVideo = await readFile(join(root, 'public', videoPath.slice(1)));
const videoSize = localVideo.byteLength;
const videoHead = await fetch(videoUrl, { method: 'HEAD' });
const videoEtag = videoHead.headers.get('etag');
const initialRange = await fetch(videoUrl, { headers: { Range: 'bytes=0-1023' } });
let initialBytes;
if (allowNoRange) {
  assert.ok([200, 206].includes(initialRange.status));
  initialBytes = (await initialRange.arrayBuffer()).byteLength;
} else {
  assert.equal(videoHead.status, 200, 'the deployed edge must serve the video');
  const headContentLength = videoHead.headers.get('content-length');
  if (headContentLength !== null) assert.equal(Number(headContentLength), videoSize, 'video Content-Length must match the local file');
  assert.ok(videoEtag && !videoEtag.startsWith('W/'), 'video delivery must include a strong ETag for If-Range');

  const assertRange = async (response, start, end, label) => {
    const body = Buffer.from(await response.arrayBuffer());
    assert.notEqual(response.status, 416, `valid ${label} must never return 416`);
    assert.ok([200, 206].includes(response.status), `${label} must use native 200 or 206 semantics`);
    if (response.status === 206) {
      assert.equal(response.headers.get('content-range'), `bytes ${start}-${end}/${videoSize}`, `${label} has the wrong Content-Range`);
      assert.match(response.headers.get('accept-ranges') ?? '', /bytes/i, `${label} must advertise byte ranges`);
      assert.deepEqual(body, localVideo.subarray(start, end + 1), `${label} bytes must match the requested local slice`);
    } else {
      assert.deepEqual(body, localVideo, `${label} full response must match the local video`);
    }
    return body.byteLength;
  };

  initialBytes = await assertRange(initialRange, 0, 1023, 'initial range');
  const middleStart = Math.floor(videoSize / 2);
  await assertRange(
    await fetch(videoUrl, { headers: { Range: `bytes=${middleStart}-${middleStart + 1023}` } }),
    middleStart,
    middleStart + 1023,
    'middle range',
  );
  const openStart = videoSize - 2048;
  await assertRange(
    await fetch(videoUrl, { headers: { Range: `bytes=${openStart}-` } }),
    openStart,
    videoSize - 1,
    'open-ended range',
  );
  await assertRange(
    await fetch(videoUrl, { headers: { Range: 'bytes=-1024' } }),
    videoSize - 1024,
    videoSize - 1,
    'suffix range',
  );
  await assertRange(
    await fetch(videoUrl, { headers: { Range: 'bytes=0-1023', 'If-Range': videoEtag } }),
    0,
    1023,
    'matching If-Range',
  );

  const notModifiedRange = await fetch(videoUrl, {
    headers: { Range: 'bytes=0-1023', 'If-None-Match': videoEtag },
  });
  assert.notEqual(notModifiedRange.status, 416, 'a valid range with matching If-None-Match must never return 416');
  assert.ok([200, 206, 304].includes(notModifiedRange.status), 'matching If-None-Match must use native 200, 206, or 304 semantics');
  const notModifiedBytes = Buffer.from(await notModifiedRange.arrayBuffer());
  if (notModifiedRange.status === 206) {
    assert.deepEqual(notModifiedBytes, localVideo.subarray(0, 1024), 'conditional range bytes must match the local video');
  } else if (notModifiedRange.status === 200) {
    assert.deepEqual(notModifiedBytes, localVideo, 'conditional full response must match the local video');
  } else {
    assert.equal(notModifiedBytes.byteLength, 0, '304 must not include a response body');
  }

  const invalidRange = await fetch(videoUrl, { headers: { Range: `bytes=${videoSize}-` } });
  const invalidBytes = Buffer.from(await invalidRange.arrayBuffer());
  assert.ok([200, 416].includes(invalidRange.status), 'an unsatisfiable video range must use native 200 or 416 semantics');
  if (invalidRange.status === 416) {
    assert.equal(invalidRange.headers.get('content-range'), `bytes */${videoSize}`, 'invalid range must report the complete video size');
    assert.equal(invalidBytes.byteLength, 0, '416 must not include a response body');
  } else {
    assert.deepEqual(invalidBytes, localVideo, 'an ignored invalid range must return the complete local video');
  }
}
result.checks.videoRanges = {
  status: initialRange.status,
  contentRange: initialRange.headers.get('content-range'),
  bytes: initialBytes,
  required: !allowNoRange,
};

if (!allowNoRange) {
  const scriptPath = [...(await (await fetch(base)).text()).matchAll(/src="([^\"]+\.js)"/g)][0]?.[1];
  assert.ok(scriptPath, 'a bundled script is required for compression verification');
  const compressed = await fetch(new URL(scriptPath, base), { headers: { 'Accept-Encoding': 'br, gzip' } });
  assert.ok(['br', 'gzip'].includes(compressed.headers.get('content-encoding')), 'the deployed edge must compress bundled scripts');
  result.checks.compression = compressed.headers.get('content-encoding');
}

console.log(JSON.stringify(result, null, 2));
