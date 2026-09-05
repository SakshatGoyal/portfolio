import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { PERSON_ID, WEBSITE_ID } from '../src/data/seo.js';

const [home, sitemapIndex, sitemap] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap-index.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8'),
]);

const jsonLdGraphs = (html) => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .map(([, source]) => JSON.parse(source));

assert.ok(home.includes('<title>Sakshat Goyal — Product Designer</title>'));
assert.ok(home.includes('<meta name="description" content="Sakshat Goyal (Sākshāt Goyal) is a systems-oriented product designer'));
assert.ok(!home.includes('name="robots" content="noindex'), 'Production homepage HTML must remain indexable.');

const [homeGraph] = jsonLdGraphs(home);
assert.ok(homeGraph, 'Built homepage must contain parseable JSON-LD.');
assert.ok(homeGraph['@graph'].some((entry) => entry['@id'] === PERSON_ID && entry.name === 'Sakshat Goyal'));
assert.ok(homeGraph['@graph'].some((entry) => entry['@id'] === WEBSITE_ID && entry['@type'] === 'WebSite'));

assert.ok(sitemapIndex.includes('https://sakshat-goyal.com/sitemap-0.xml'));
for (const url of ['https://sakshat-goyal.com/']) {
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap must include ${url}`);
}
assert.ok(!sitemap.includes('/404/'), 'Sitemap must exclude the 404 route.');

assert.ok(!sitemap.includes('/about/'), 'The unpublished About draft must not appear in the sitemap.');
assert.ok(!home.includes('href="/about/"'), 'Production navigation must not link to the About draft.');
await assert.rejects(access(new URL('../dist/about/index.html', import.meta.url)), { code: 'ENOENT' });

console.log('Built SEO contract check passed.');
