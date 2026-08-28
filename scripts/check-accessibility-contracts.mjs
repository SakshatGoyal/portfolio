import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { copyText } from '../src/scripts/contact-links.js';
import { staticTrailDecision } from '../src/scripts/memory-lane-trail.js';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [home, panel, caseHeader, panw, carousel, hbs, oneReport, mediaController, styles, contactLinks, layout] = await Promise.all([
  read('../src/pages/index.astro'),
  read('../src/components/PortfolioPanel.astro'),
  read('../src/components/CaseStudyHeader.astro'),
  read('../src/pages/work/panw-ai.astro'),
  read('../src/components/Carousel.astro'),
  read('../src/pages/work/hbs-ai-institute.astro'),
  read('../src/pages/work/one-report.astro'),
  read('../src/scripts/media-playback-controller.js'),
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
assert.match(carousel, /data-carousel-status aria-live="polite" aria-atomic="true"/, 'carousel selections require a polite atomic announcement');
assert.match(carousel, /alt=\{descriptions\[index\]\}/, 'carousel slides require equivalent descriptions');
assert.equal((hbs.match(/'Principle \d compares/g) ?? []).length, 7, 'all seven HBS principle slides require equivalent descriptions');
assert.equal((hbs.match(/'Approach \d/g) ?? []).length, 4, 'all four HBS approach slides require equivalent descriptions');
assert.doesNotMatch(home, /showPlaybackControl=\{false\}/, 'homepage autoplay videos require persistent pause/play controls');
assert.doesNotMatch(oneReport, /showPlaybackControl=\{false\}/, 'OneReport autoplay videos require persistent pause/play controls');
assert.match(mediaController, /prefers-reduced-motion: reduce/, 'autoplay policy must observe reduced-motion preference');
assert.match(mediaController, /!this\.reducedMotionQuery\?\.matches \|\| explicitlyStarted/, 'reduced motion may play only after an explicit action');
assert.match(layout, /<button class="behance-viewer__zoom"[^>]+aria-expanded="false"/, 'image zoom requires a named native button with expanded state');
assert.doesNotMatch(layout, /data-behance-viewer-image alt="" tabindex="0"/, 'viewer images must not imitate controls');
assert.match(layout, /event\.target instanceof HTMLMediaElement[\s\S]*targetOwnsArrowKeys[\s\S]*ArrowLeft/, 'viewer navigation must preserve native video arrow keys');
assert.doesNotMatch(layout, /document\.querySelectorAll\('\[data-reveal\]'\)/, 'the duplicate reveal observer must remain removed');
assert.match(contactLinks, /Copy unavailable — \$\{email\}/, 'copy failure must announce the existing email address');

const relativeLuminance = (hex) => {
  const channels = hex.match(/[\da-f]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
};
const contrast = (foreground, background) => {
  const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
};
assert.ok(contrast('#5f787d', '#ffffff') >= 4.5, 'recurring secondary text must meet WCAG AA contrast');
assert.ok(contrast('#155e75', '#ffffff') >= 4.5, 'Cisco accent labels must meet WCAG AA contrast');
assert.doesNotMatch(styles, /#819a9f/i, 'the recurring low-contrast secondary color must be removed');

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
