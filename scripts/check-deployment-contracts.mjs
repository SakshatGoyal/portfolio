import assert from 'node:assert/strict';
import { imageVariants } from '../src/data/image-variants.js';
import { PROJECTS } from '../src/data/projects.js';

const argumentsList = process.argv.slice(2);
const allowNoRange = argumentsList.includes('--allow-no-range');
const baseArgument = argumentsList.find((argument) => !argument.startsWith('--')) ?? 'http://127.0.0.1:8787';
const base = new URL(baseArgument.endsWith('/') ? baseArgument : `${baseArgument}/`);
const productionOrigin = 'https://sakshat-goyal.com';
const routes = [
  '/',
  '/about/',
  ...PROJECTS.map(({ route }) => route),
];
const result = { base: base.href, routes: [], checks: {} };

for (const route of routes) {
  const response = await fetch(new URL(route, base), { redirect: 'error' });
  assert.equal(response.status, 200, `${route} must return 200`);
  const html = await response.text();
  const canonical = `${productionOrigin}${route}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}">`), `${route} has the wrong canonical URL`);
  assert.ok(html.includes('<meta property="og:image" content="https://sakshat-goyal.com/social-card.jpg">'), `${route} is missing the social image`);
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

const slashRedirect = await fetch(new URL('/about', base), { redirect: 'manual' });
assert.ok([301, 302, 307, 308].includes(slashRedirect.status), '/about must redirect to its trailing-slash URL');
assert.equal(new URL(slashRedirect.headers.get('location'), base).pathname, '/about/');
result.checks.slashRedirect = slashRedirect.status;

const missing = await fetch(new URL('/production-readiness-missing-route/', base));
assert.equal(missing.status, 404, 'unknown routes must return 404');
assert.ok((await missing.text()).includes('<meta name="robots" content="noindex, nofollow">'), 'the 404 page must be noindex');
result.checks.notFound = 404;

const home = await fetch(base);
const csp = home.headers.get('content-security-policy') ?? '';
assert.ok(csp.includes("script-src 'self' 'sha256-"), 'CSP must allow only same-origin and hashed inline scripts');
assert.equal(home.headers.get('x-content-type-options'), 'nosniff');
assert.equal(home.headers.get('x-frame-options'), 'DENY');
assert.equal(home.headers.get('x-robots-tag'), 'noindex, nofollow');
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

const hashedImage = imageVariants['/assets/hbs/hbs-cover.webp'].variants[0].src;
const hashedResponse = await fetch(new URL(hashedImage, base));
assert.match(hashedResponse.headers.get('cache-control') ?? '', /max-age=31536000/);
assert.match(hashedResponse.headers.get('cache-control') ?? '', /immutable/);
const unversionedResponse = await fetch(new URL('/assets/hbs/hbs-cover.webp', base));
assert.match(unversionedResponse.headers.get('cache-control') ?? '', /max-age=0/);
assert.match(unversionedResponse.headers.get('cache-control') ?? '', /must-revalidate/);
result.checks.caching = true;

const videoUrl = new URL('/assets/generated/video/one-report/video/sc-01.mobile.mp4', base);
const rangeResponse = await fetch(videoUrl, { headers: { Range: 'bytes=0-1023' } });
const rangeBytes = (await rangeResponse.arrayBuffer()).byteLength;
if (allowNoRange) {
  assert.ok([200, 206].includes(rangeResponse.status));
} else {
  assert.equal(rangeResponse.status, 206, 'the deployed edge must return partial video content');
  assert.match(rangeResponse.headers.get('content-range') ?? '', /^bytes 0-1023\//);
  assert.equal(rangeBytes, 1024);
}
result.checks.videoRange = {
  status: rangeResponse.status,
  contentRange: rangeResponse.headers.get('content-range'),
  bytes: rangeBytes,
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
