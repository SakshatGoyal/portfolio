import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  ABOUT_STRUCTURED_DATA,
  HOME_STRUCTURED_DATA,
  PERSON_ID,
  PROFILE_PAGE_ID,
  SITE_URL,
  WEBSITE_ID,
} from '../src/data/seo.js';

const [home, about, layout, robots, astroConfig] = await Promise.all([
  readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/about.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8'),
  readFile(new URL('../public/robots.txt', import.meta.url), 'utf8'),
  readFile(new URL('../astro.config.mjs', import.meta.url), 'utf8'),
]);

assert.ok(home.includes('title="Sakshat Goyal — Product Designer"'), 'Homepage title must target the exact branded query.');
assert.ok(home.includes('description="Sakshat Goyal (Sākshāt Goyal) is a systems-oriented product designer'), 'Homepage description must connect both public name spellings.');
assert.ok(home.includes('structuredData={HOME_STRUCTURED_DATA}'), 'Homepage must render its structured data graph.');
assert.ok(about.includes('title="About Sakshat Goyal — Product Designer"'), 'About title must contain the exact branded query.');
assert.ok(about.includes('structuredData={ABOUT_STRUCTURED_DATA}'), 'About page must render ProfilePage structured data.');
assert.ok(layout.includes('type="application/ld+json"'), 'Base layout must render JSON-LD.');
assert.ok(layout.includes("replace(/</g, '\\\\u003c')"), 'JSON-LD serialization must escape HTML-opening characters.');

const person = HOME_STRUCTURED_DATA['@graph'].find((entry) => entry['@type'] === 'Person');
const website = HOME_STRUCTURED_DATA['@graph'].find((entry) => entry['@type'] === 'WebSite');
const profile = ABOUT_STRUCTURED_DATA['@graph'].find((entry) => entry['@type'] === 'ProfilePage');
assert.equal(person['@id'], PERSON_ID);
assert.equal(person.name, 'Sakshat Goyal');
assert.equal(person.alternateName, 'Sākshāt Goyal');
assert.equal(person.url, SITE_URL);
assert.equal(person.jobTitle, 'Product Designer');
assert.deepEqual(person.sameAs, ['https://www.linkedin.com/in/sakshat-goyal/']);
assert.equal(website['@id'], WEBSITE_ID);
assert.deepEqual(website.publisher, { '@id': PERSON_ID });
assert.equal(profile['@id'], PROFILE_PAGE_ID);
assert.deepEqual(profile.mainEntity, { '@id': PERSON_ID });

assert.match(robots, /^User-agent: \*$/m);
assert.match(robots, /^Allow: \/$/m);
assert.doesNotMatch(robots, /Disallow:/i);
assert.match(robots, /^Sitemap: https:\/\/sakshat-goyal\.com\/sitemap-index\.xml$/m);
assert.ok(astroConfig.includes("site: 'https://sakshat-goyal.com'"), 'Astro site origin must remain canonical.');
assert.ok(astroConfig.includes("!page.endsWith('/404/')"), 'Sitemap must exclude only the 404 route.');

console.log('SEO contract check passed.');
