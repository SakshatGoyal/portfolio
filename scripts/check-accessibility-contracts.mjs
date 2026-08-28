import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { copyText } from '../src/scripts/contact-links.js';
import { staticTrailDecision } from '../src/scripts/memory-lane-trail.js';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [home, panel, caseHeader, panw, carousel, styles, contactLinks, layout] = await Promise.all([
  read('../src/pages/index.astro'),
  read('../src/components/PortfolioPanel.astro'),
  read('../src/components/CaseStudyHeader.astro'),
  read('../src/pages/work/panw-ai.astro'),
  read('../src/components/Carousel.astro'),
  read('../src/styles/global.css'),
  read('../src/scripts/contact-links.js'),
  read('../src/layouts/BaseLayout.astro'),
]);

assert.match(home, /<h2 class="sr-only">Selected Work<\/h2>/, 'homepage requires an h2 before project h3 headings');
assert.match(panel, /isHome \? \(\s*<h1 class="portfolio-panel-identity">/, 'portfolio identity is h1 only on the homepage');
assert.doesNotMatch(caseHeader, /addEventListener\('cancel'/, 'native dialog Escape behavior must not be cancelled');
assert.match(caseHeader, /if \(event\.key !== 'Escape'\) return;[\s\S]*closeCaseStudyMenu\(\);/, 'Escape must close the mobile case menu');
for (const id of ['arc-rate-tooltip', 'arc-depth-tooltip', 'snapshot-rate-tooltip']) {
  assert.match(panw, new RegExp(`<button class="metric-label" type="button" aria-describedby="${id}">`), `${id} needs a focusable trigger`);
}
assert.match(styles, /metric-tooltip-anchor:focus-within \.metric-tooltip-positioner/, 'focused tooltip triggers must reveal their descriptions');
assert.match(carousel, /\.carousel-viewport:focus-visible \{ outline: 2px solid currentColor;/, 'carousel viewport needs a focus ring');
assert.match(carousel, /\.carousel-pagination button:focus-visible \{ outline: 2px solid currentColor;/, 'carousel dots need focus rings');
assert.match(carousel, /\.carousel-pagination button \{ flex: 1 1 0; width: auto; min-width: 0; \}/, 'carousel dots must shrink inside narrow viewports');
assert.doesNotMatch(layout, /document\.querySelectorAll\('\[data-reveal\]'\)/, 'the duplicate reveal observer must remain removed');
assert.match(contactLinks, /Copy unavailable — \$\{email\}/, 'copy failure must announce the existing email address');

assert.equal(staticTrailDecision([{ ready: true, failed: false }], 0).status, 'ready');
assert.equal(staticTrailDecision([{ ready: false, failed: true }], 1).status, 'unavailable');
assert.equal(staticTrailDecision([{ ready: false, failed: false }], 299).status, 'pending');
assert.equal(staticTrailDecision([{ ready: false, failed: false }], 300).status, 'unavailable');

const originalNavigator = globalThis.navigator;
const originalDocument = globalThis.document;
const field = {
  style: {},
  value: '',
  setAttribute() {},
  select() {},
  remove() {},
};
Object.defineProperty(globalThis, 'navigator', {
  configurable: true,
  value: { clipboard: { writeText: async () => { throw new Error('denied'); } } },
});
globalThis.document = {
  createElement: () => field,
  body: { append() {} },
  execCommand: () => false,
};
assert.equal(await copyText('sakshat.goyal@gmail.com'), false, 'denied clipboard paths must resolve to a visible fallback state');
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: originalNavigator });
globalThis.document = originalDocument;

console.log('Accessibility and failure-state contracts passed.');
