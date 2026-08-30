import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PERSON_ID, PROFILE_PAGE_ID, WEBSITE_ID } from '../src/data/seo.js';

const [home, about, sitemapIndex, sitemap] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/about/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap-index.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8'),
]);

const jsonLdGraphs = (html) => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .map(([, source]) => JSON.parse(source));

assert.ok(home.includes('<title>Sakshat Goyal — Product Designer</title>'));
assert.ok(home.includes('<meta name="description" content="Sakshat Goyal (Sākshāt Goyal) is a systems-oriented product designer'));
assert.ok(!home.includes('name="robots" content="noindex'), 'Production homepage HTML must remain indexable.');
assert.ok(about.includes('<title>About Sakshat Goyal — Product Designer</title>'));
assert.ok(!about.includes('name="robots" content="noindex'), 'About page HTML must remain indexable.');

const [homeGraph] = jsonLdGraphs(home);
const [aboutGraph] = jsonLdGraphs(about);
assert.ok(homeGraph, 'Built homepage must contain parseable JSON-LD.');
assert.ok(aboutGraph, 'Built About page must contain parseable JSON-LD.');
assert.ok(homeGraph['@graph'].some((entry) => entry['@id'] === PERSON_ID && entry.name === 'Sakshat Goyal'));
assert.ok(homeGraph['@graph'].some((entry) => entry['@id'] === WEBSITE_ID && entry['@type'] === 'WebSite'));
assert.ok(aboutGraph['@graph'].some((entry) => entry['@id'] === PROFILE_PAGE_ID && entry['@type'] === 'ProfilePage'));
assert.ok(aboutGraph['@graph'].some((entry) => entry['@id'] === PERSON_ID && entry.alternateName === 'Sākshāt Goyal'));

assert.ok(sitemapIndex.includes('https://sakshat-goyal.com/sitemap-0.xml'));
for (const url of ['https://sakshat-goyal.com/', 'https://sakshat-goyal.com/about/']) {
  assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap must include ${url}`);
}
assert.ok(!sitemap.includes('/404/'), 'Sitemap must exclude the 404 route.');

console.log('Built SEO contract check passed.');
