import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [
  styles,
  layout,
  typography,
  home,
  figure,
  galleryArtifact,
  carousel,
  oneReport,
  hbs,
  siteHeader,
  siteFooter,
  lineSystem,
] = await Promise.all([
  read('../src/styles/global.css'),
  read('../src/layouts/BaseLayout.astro'),
  read('../src/scripts/typography-system.js'),
  read('../src/pages/index.astro'),
  read('../src/components/Figure.astro'),
  read('../src/components/GalleryArtifact.astro'),
  read('../src/components/Carousel.astro'),
  read('../src/pages/work/one-report.astro'),
  read('../src/pages/work/hbs-ai-institute.astro'),
  read('../src/components/SiteHeader.astro'),
  read('../src/components/SiteFooter.astro'),
  read('../src/scripts/line-system.js'),
]);

const errors = [];
const requireText = (source, expected, message) => {
  if (!source.includes(expected)) errors.push(message);
};
const requireCount = (source, expected, count, message) => {
  const actual = source.split(expected).length - 1;
  if (actual !== count) errors.push(`${message} Expected ${count}, found ${actual}.`);
};

requireText(styles, '--asset-radius: 8px;', 'The shared editorial asset radius must remain 8px.');
requireText(styles, '--prose-measure: 70%;', 'The shared desktop prose measure must remain 70%.');
requireText(styles, "font-family: 'General Sans';", 'General Sans must remain registered as a bundled site font.');
if (styles.includes('Manrope')) errors.push('Manrope must not remain in the site stylesheet.');
requireText(styles, '[data-asset-surface] { overflow: hidden; border-radius: var(--asset-radius); }', 'Asset surfaces must own both clipping and the shared radius.');
requireText(styles, 'main :is(p, li) { text-wrap: pretty; }', 'Main prose must opt into pretty wrapping.');
requireText(styles, '.home-bio { width: var(--prose-measure); }', 'The desktop homepage bio must use the shared prose measure.');
for (const [, selector, body] of styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const ownsHomeWork = selector.split(',').some((part) => part.trim() === '.home-work');
  if (ownsHomeWork && /\boverflow(?:-[xy])?\s*:\s*(?:auto|scroll)\b/.test(body)) {
    errors.push('Selected Work must not own a scrollable overflow axis.');
  }
}
requireText(styles, '.home-project-scroller { overflow: visible; }', 'The project scroller must remain inert outside narrow screens.');
requireText(styles, '@media (max-width: 451px) {\n  .home-project-scroller { overflow-x: auto; overflow-y: hidden; }\n}', 'Only the narrow project wrapper may scroll horizontally, with vertical overflow disabled.');
requireCount(home, 'class="home-project-scroller"', 1, 'Selected Work must have exactly one isolated project scroller.');

for (const expected of [
  'class="site-header" data-site-header',
  'class="site-header-capsule" data-site-header-capsule',
  'class="site-header-area"',
  'class="site-header-row"',
  'class="site-header-brand"',
  'class="site-header-nav-list"',
]) requireText(siteHeader, expected, `The Antinomi header DOM contract is missing: ${expected}`);
for (const label of ['Selected Work', 'Gallery', 'About', 'Contact']) {
  requireText(siteHeader, `label: '${label}'`, `The shared header must retain the ${label} link.`);
}
requireText(siteHeader, "href: '/#contact'", 'Contact must target the homepage footer anchor.');
requireText(siteFooter, 'id="contact"', 'The existing footer must own the contact anchor.');
requireText(styles, '--site-header-gap: 18px;', 'The Antinomi header must retain its 18px viewport gap.');
requireText(styles, '--site-header-height: 38px;', 'The Antinomi header must retain its 38px height.');
requireText(styles, '--site-header-radius: 19px;', 'The Antinomi header must retain its 19px capsule radius.');
requireText(styles, '--site-header-motion: 400ms cubic-bezier(.19, 1, .22, 1);', 'The header width motion must retain the captured timing.');
requireText(styles, "font: 400 16px/1 'General Sans', Arial, sans-serif;", 'The shared header must retain its optically centered 16px type.');
requireText(styles, 'width: calc(var(--site-rail) - ((var(--site-header-content-inset) - var(--site-header-inner-pad)) * 2));', 'The expanded header text must align to the editorial content edges.');
requireText(styles, 'padding-inline: var(--site-header-inner-pad);', 'The header must retain equal internal padding on both sides.');
requireText(styles, 'transform: translateY(-1px);', 'The header row must retain its optical vertical-centering correction.');
requireText(styles, 'gap: 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;', 'The semantic navigation list must not inherit browser offsets that break vertical centering.');
requireText(styles, 'border: 1px solid color-mix(in srgb, currentColor 5%, transparent);', 'The header capsule must retain its subtle closed outline.');
requireText(styles, 'backdrop-filter: blur(12px);', 'The header capsule must retain its 12px backdrop blur.');
requireText(styles, 'white-space: nowrap;', 'The approved one-row header behavior must remain explicit.');
requireText(styles, '.site-header.site-header-minimized .site-header-capsule { width: 552px; }', 'The desktop header must shrink to 552px.');
requireText(siteHeader, "window.scrollY > window.innerHeight * 0.5", 'The header must minimize after half a viewport of scrolling.');
requireText(home, 'window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2', 'The footer contact link must become active at the reachable document end.');
requireText(home, 'let lockedSectionId = homeSections.some', 'In-page navigation must preserve its requested active state during smooth scrolling.');
requireText(home, "lockedSectionId = link.dataset.homeSectionLink || '';", 'Clicking an in-page navigation link must lock its active state before scrolling starts.');
requireText(home, "window.addEventListener('wheel', releaseSectionLock", 'Direct user scrolling must release the in-page navigation lock.');
requireText(home, "window.addEventListener('scrollend', syncHomeSectionState", 'The homepage navigation state must settle after smooth scrolling and late layout changes.');
requireText(lineSystem, 'window.__lineSystemDispose?.();', 'Line-system initialization must dispose an existing runtime before remounting.');
requireText(lineSystem, "document.querySelectorAll('.line-system-layer').forEach((layer) => layer.remove());", 'Line-system initialization must remove orphan legacy layers.');

requireCount(home, 'data-asset-surface', 2, 'Homepage media branches must each declare their clipping owner.');
requireCount(figure, 'data-asset-surface', 2, 'Figure image and video branches must each declare their clipping owner.');
requireCount(galleryArtifact, 'data-asset-surface', 2, 'Gallery image and video branches must each declare their clipping owner.');
requireCount(carousel, 'data-asset-surface', 1, 'The carousel viewport must be the sole asset surface.');
requireCount(oneReport, 'class="scenario-column" data-asset-surface', 3, 'Each One Report scenario group must own one asset surface.');
requireCount(hbs, 'class="research-architecture" data-asset-surface', 1, 'The grouped HBS research visual must own one asset surface.');

const typographyCall = layout.indexOf('initTypographySystem();');
const motionCall = layout.indexOf('initMotionSystem();');
if (typographyCall < 0 || motionCall < 0 || typographyCall > motionCall) {
  errors.push('Typography initialization must run before motion initialization.');
}
requireText(typography, "document.querySelectorAll('main p, main li').forEach(guardFinalPair);", 'The widow guard must target main paragraphs and list items.');
requireText(typography, "document.documentElement.dataset.typographySystemMounted === 'true'", 'The typography initializer must remain idempotent.');
requireText(typography, "replaceCharacterAt(nodes, separatorIndex, '\\u00a0')", 'The final word pair must be joined with a nonbreaking space.');

if (errors.length) {
  console.error('Visual contract check failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Visual contract check passed.');
