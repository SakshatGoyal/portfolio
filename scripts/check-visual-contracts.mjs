import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [
  styles,
  layout,
  typography,
  home,
  figure,
  galleryProject,
  galleryArtifact,
  carousel,
  oneReport,
  hbs,
  siteHeader,
  siteFooter,
  lineSystem,
  motionSystem,
  designSystem,
  typographyInventory,
  responsiveVideo,
  playbackController,
] = await Promise.all([
  read('../src/styles/global.css'),
  read('../src/layouts/BaseLayout.astro'),
  read('../src/scripts/typography-system.js'),
  read('../src/pages/index.astro'),
  read('../src/components/Figure.astro'),
  read('../src/components/GalleryProject.astro'),
  read('../src/components/GalleryArtifact.astro'),
  read('../src/components/Carousel.astro'),
  read('../src/pages/work/one-report.astro'),
  read('../src/pages/work/hbs-ai-institute.astro'),
  read('../src/components/SiteHeader.astro'),
  read('../src/components/SiteFooter.astro'),
  read('../src/scripts/line-system.js'),
  read('../src/scripts/motion-system.js'),
  read('../CASE_STUDY_DESIGN_SYSTEM.md'),
  read('../docs/typography-inventory.md'),
  read('../src/components/ResponsiveVideo.astro'),
  read('../src/scripts/media-playback-controller.js'),
]);

const errors = [];
const requireText = (source, expected, message) => {
  if (!source.includes(expected)) errors.push(message);
};
const requireCount = (source, expected, count, message) => {
  const actual = source.split(expected).length - 1;
  if (actual !== count) errors.push(`${message} Expected ${count}, found ${actual}.`);
};
const relativeLuminance = (hex) => {
  const channels = hex.match(/[\da-f]{2}/gi).map((channel) => Number.parseInt(channel, 16) / 255);
  const linear = channels.map((channel) => channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4);
  return (0.2126 * linear[0]) + (0.7152 * linear[1]) + (0.0722 * linear[2]);
};
const contrastRatio = (foreground, background) => {
  const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
};

requireText(styles, '--asset-radius: 8px;', 'The shared editorial asset radius must remain 8px.');
requireText(styles, "[data-home-system='true'] {\n  --home-background: #fafafa;\n  --asset-radius: 4px;", 'Homepage media must override the shared radius to 4px without changing case-study media.');
requireText(styles, '--canvas: #fafafa;', 'The shared page canvas must remain #FAFAFA.');
requireText(layout, '<meta name="theme-color" content="#fafafa" />', 'The browser theme color must match the #FAFAFA canvas.');
if (styles.includes('--cs-surface') || styles.includes('background: var(--cs-surface)')) {
  errors.push('Case-study structural blocks must not restore the removed white surface architecture.');
}
requireText(styles, '--prose-measure: 70%;', 'The shared desktop prose measure must remain 70%.');
requireText(styles, '--text-primary: #000;', 'Editorial primary text must remain pure black.');
requireText(styles, '--text-secondary: #416870;', 'Editorial secondary text must remain #416870.');
requireText(styles, '--text-tertiary: #5f787d;', 'Editorial tertiary text must remain the accessible #5F787D.');
requireText(styles, '--ink: var(--text-primary);', 'The legacy ink token must alias the canonical primary token.');
requireText(styles, '--muted: var(--text-secondary);', 'The legacy muted token must alias the canonical secondary token.');
requireText(styles, '--faint: var(--text-tertiary);', 'The legacy faint token must alias the canonical tertiary token.');
if (contrastRatio('5f787d', 'fafafa') < 4.5) errors.push('Editorial tertiary text must retain at least 4.5:1 contrast against #FAFAFA.');
requireCount(styles, "font-family: 'Manrope';", 3, 'Manrope weights 400, 500, and 700 must remain registered as bundled site fonts.');
requireText(styles, "--body-font: 'Manrope', Arial, sans-serif;", 'The shared body-family token must remain Manrope.');
requireText(styles, '--body-tracking: -.02em;', 'Every Manrope role must retain minus-two-percent tracking.');
if (styles.includes('Fustat')) errors.push('Fustat must not remain in the active site stylesheet.');
if (styles.includes('General Sans')) errors.push('General Sans must not remain in the active site stylesheet.');
if (!designSystem.includes('| Narrative body | Manrope |') || designSystem.includes('General Sans')) {
  errors.push('The case-study typography documentation must retain Manrope and remove General Sans.');
}
for (const [, selector, body] of styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const usesManrope = /font(?:-family)?\s*:[^;]*(?:var\(--body-font\)|var\(--cs-body-font\))/.test(body);
  const explicitTracking = body.match(/letter-spacing\s*:\s*([^;]+)/)?.[1].trim();
  if (usesManrope && explicitTracking && !explicitTracking.startsWith('var(--body-tracking)')) {
    errors.push(`Manrope role must use the shared tracking token: ${selector.trim()}`);
  }
}
requireText(styles, '[data-asset-surface] { overflow: hidden; border-radius: var(--asset-radius); }', 'Asset surfaces must own both clipping and the shared radius.');
requireText(styles, 'main :is(p, li) { text-wrap: pretty; }', 'Main prose must opt into pretty wrapping.');
requireText(styles, 'font: 400 24px/1.35 var(--body-font);', 'Both homepage bio sentences must retain 24px type with 135% leading.');
requireText(styles, '.home-bio-sentence--lead { color: var(--text-primary); font-weight: 500; }', 'The homepage lead sentence must retain medium weight and editorial primary.');
requireText(styles, '.home-bio-sentence--support { color: var(--text-secondary); }', 'The homepage supporting statement must use editorial secondary.');
requireText(styles, '@media (min-width: 768px) {\n  .home-bio { max-width: 400px; }\n}', 'The homepage bio must become a 400px reading measure from 768px.');
requireText(styles, '.js .home-bio-sentence--animated .home-bio-word {', 'Only the explicitly animated lead sentence may run the word entrance.');
requireText(styles, 'animation: home-bio-word-reveal 100ms linear forwards;', 'Lead-sentence words must use Antinomy’s 100ms linear opacity entrance.');
requireText(styles, 'animation-delay: calc(var(--hero-word-index) * 75ms);', 'Hero words must retain Antinomy’s 75ms stagger.');
requireText(home, '<span class="sr-only">{heroLead}</span>', 'The animated lead sentence must preserve an unsplit accessible copy.');
requireText(home, '<p class="home-bio-sentence home-bio-sentence--support">{heroSupport}</p>', 'The supporting sentence must render as static prose without split-word animation markup.');
requireText(styles, '.home-bio-sentence--animated .home-bio-word {\n    opacity: 1 !important;\n    animation: none !important;', 'Reduced motion must bypass the lead-sentence word sequence.');
for (const [, selector, body] of styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const ownsHomeWork = selector.split(',').some((part) => part.trim() === '.home-work');
  if (ownsHomeWork && /\boverflow(?:-[xy])?\s*:\s*(?:auto|scroll)\b/.test(body)) {
    errors.push('Selected Work must not own a scrollable overflow axis.');
  }
}
requireText(styles, '.home-project-scroller { overflow: visible; }', 'The project scroller must remain inert outside narrow screens.');
requireText(styles, '@media (max-width: 451px) {\n  .home-project-scroller { overflow-x: auto; overflow-y: hidden; }\n}', 'Only the narrow project wrapper may scroll horizontally, with vertical overflow disabled.');
requireCount(home, 'class="home-project-scroller"', 1, 'Selected Work must have exactly one isolated project scroller.');
const homeProjectCopyIndex = home.indexOf('class="home-project-copy"');
const homeProjectMetaIndex = home.indexOf('class="home-project-meta"');
const homeProjectMediaIndex = home.indexOf('class="home-project-media"');
if (
  homeProjectCopyIndex < 0
  || homeProjectMetaIndex < homeProjectCopyIndex
  || homeProjectMediaIndex < homeProjectMetaIndex
) {
  errors.push('Selected Work project titles and metadata must remain in DOM order before their media.');
}
for (const className of ['home-project-copy', 'home-project-meta']) {
  const markup = home.match(new RegExp(`<div class="${className}">[\\s\\S]*?<\\/div>`))?.[0] || '';
  if (!markup || /data-(?:body-)?reveal/.test(markup)) {
    errors.push(`Selected Work ${className} must remain static and free of reveal attributes.`);
  }
  if (motionSystem.includes(`'.${className}'`)) {
    errors.push(`Selected Work ${className} must remain excluded from scroll-triggered reveal registration.`);
  }
}

for (const expected of [
  'class="site-header" data-site-header',
  'class="site-header-capsule" data-site-header-capsule',
  'class="site-header-area"',
  'class="site-header-row"',
  'class="site-header-brand"',
  'class="site-header-nav-list"',
]) requireText(siteHeader, expected, `The Antinomi header DOM contract is missing: ${expected}`);
for (const label of ['Selected Work', 'Gallery', 'About']) {
  requireText(siteHeader, `label: '${label}'`, `The shared header must retain the ${label} link.`);
}
if (siteHeader.includes("label: 'Contact'") || siteHeader.includes("href: '/#contact'") || siteFooter.includes('id="contact"')) {
  errors.push('Contact navigation and its obsolete footer anchor must remain removed.');
}
requireText(styles, '--site-header-gap: 18px;', 'The Antinomi header must retain its 18px viewport gap.');
requireText(styles, '--site-header-height: 48px;', 'The shared header must remain exactly 48px tall.');
requireText(styles, '--site-header-radius: 24px;', 'The shared header must retain its 24px capsule radius.');
requireText(styles, '--site-header-motion: 400ms cubic-bezier(.19, 1, .22, 1);', 'The header width motion must retain the captured timing.');
requireText(styles, 'font: 400 16px/1 var(--body-font);', 'The shared header must retain its optically centered 16px Manrope type.');
requireText(styles, 'letter-spacing: var(--body-tracking);', 'The shared header must retain the Manrope tracking token.');
requireText(styles, 'width: calc(var(--site-rail) - ((var(--site-header-content-inset) - var(--site-header-inner-pad)) * 2));', 'The expanded header text must align to the editorial content edges.');
requireText(styles, 'padding-inline: var(--site-header-inner-pad);', 'The header must retain equal internal padding on both sides.');
requireText(styles, 'gap: 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;', 'The semantic navigation list must not inherit browser offsets that break vertical centering.');
requireText(siteHeader, '<span class="site-header-person">Sākshāt Goyal</span>', 'The header must retain the named 500-weight person label.');
requireText(siteHeader, '<span class="site-header-role">Product Designer</span>', 'The header must include the Product Designer role.');
requireText(styles, '.site-header-person { font-weight: 500; }', 'The person label must retain weight 500.');
requireText(styles, '.site-header-role { color: var(--text-secondary); font-weight: 400; }', 'The Product Designer role must use editorial secondary.');
requireText(styles, 'gap: 4px;\n  color: var(--text-primary);\n  text-decoration: none;', 'The name and role must retain their 4px gap and primary name color.');
requireText(styles, '.site-header-link {\n  color: var(--text-secondary);', 'Inactive navigation links must use editorial secondary.');
requireText(styles, '.site-header-link.active { color: var(--text-primary); }', 'Active, hovered, and focused navigation links must use editorial primary.');
requireText(styles, '.site-header-separator { color: var(--text-tertiary); }', 'Navigation separators must use editorial tertiary.');
requireText(styles, 'border: 1px solid color-mix(in srgb, currentColor 5%, transparent);', 'The header capsule must retain its subtle closed outline.');
requireText(styles, 'backdrop-filter: blur(12px);', 'The header capsule must retain its 12px backdrop blur.');
requireText(styles, 'white-space: nowrap;', 'The approved one-row header behavior must remain explicit.');
requireText(styles, '.site-header.site-header-minimized .site-header-capsule { width: 552px; }', 'The desktop header must shrink to 552px.');
requireText(siteHeader, "window.scrollY > window.innerHeight * 0.5", 'The header must minimize after half a viewport of scrolling.');
requireText(home, 'let lockedSectionId = homeSections.some', 'In-page navigation must preserve its requested active state during smooth scrolling.');
requireText(home, "lockedSectionId = link.dataset.homeSectionLink || '';", 'Clicking an in-page navigation link must lock its active state before scrolling starts.');
requireText(home, "window.addEventListener('wheel', releaseSectionLock", 'Direct user scrolling must release the in-page navigation lock.');
requireText(home, "window.addEventListener('scrollend', syncHomeSectionState", 'The homepage navigation state must settle after smooth scrolling and late layout changes.');
requireText(lineSystem, 'window.__lineSystemDispose?.();', 'Line-system initialization must dispose an existing runtime before remounting.');
requireText(lineSystem, "document.querySelectorAll('.line-system-layer').forEach((layer) => layer.remove());", 'Line-system initialization must remove orphan legacy layers.');

requireCount(home, 'data-asset-surface', 2, 'Homepage media branches must each declare their clipping owner.');
requireText(styles, '--home-ink: var(--text-primary);', 'Homepage titles must inherit editorial primary.');
requireText(styles, '--home-secondary: var(--text-tertiary);', 'Homepage years, separators, and footer must inherit editorial tertiary.');
requireText(styles, '.home-project-meta > .home-project-client { color: var(--text-secondary);', 'Selected Work clients must use editorial secondary.');
requireText(styles, '.home-project-one-report .home-project-media-visual video {\n  width: 100% !important;\n  max-width: none;\n  height: 100% !important;\n  max-height: none;', 'The One Report homepage video must fill its media frame without the shared viewport cap.');
const styleRules = [...styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
const ruleBody = (selector) => styleRules.find(([, candidate]) => candidate.trim() === selector)?.[2] || '';
if (/background/.test(ruleBody('.scenario-column')) || !/background\s*:\s*transparent/.test(ruleBody('.scenario-animation'))) {
  errors.push('One Report scenario columns and animations must not restore the obsolete wash background.');
}
if (home.includes('data-tape-label') || home.includes('home-tape-label')) {
  errors.push('Selected Work tiles must not contain tape markup.');
}
if (motionSystem.includes('data-project-tile') || motionSystem.includes('--home-tape-offset') || motionSystem.includes('tapelayout')) {
  errors.push('Selected Work tape timing, offsets, and layout events must remain removed from the motion system.');
}
const bodyRevealSource = motionSystem.slice(
  motionSystem.indexOf('const initBodyReveals'),
  motionSystem.indexOf('const initLineMaskHeadings'),
);
if (bodyRevealSource.includes("'[data-media-caption]'")) {
  errors.push('Media captions must not return to the independent body-reveal observer.');
}
requireText(motionSystem, "caption.dataset.bodyRevealKind = 'media-caption';", 'Media captions must be registered as media-owned reveals.');
requireText(motionSystem, "caption.addEventListener('captionlayout'", 'Media captions must wait for completed caption layout.');
requireText(motionSystem, 'markCaptionMediaStarted(state.anchor, target, state.error);', 'Media captions must activate from the media reveal lifecycle.');
requireText(motionSystem, "anchor.setAttribute('data-media-ready', '');", 'Failed media must fail open so its caption remains readable.');
requireText(motionSystem, "captionStates.forEach(({ caption }) => {\n      caption.classList.add('body-reveal-active');\n      completeCaptionReveal(caption);", 'Reduced motion must expose media captions without waiting for animation.');
requireText(styles, "[data-body-reveal][data-body-reveal-kind='media-caption'].body-reveal-active", 'Media captions must preserve their shared text-block animation with media-owned timing.');
requireText(layout, '<noscript><style>[data-line-mask], [data-media-caption] { visibility: visible !important; }</style></noscript>', 'No-script rendering must keep media captions visible.');
requireText(styles, 'padding: 24px;\n  border: 0;\n  background: transparent;', 'Selected Work tiles must use normalized 24px padding.');
requireText(styles, 'transition: background-color 110ms var(--expressive-ease-in-out);', 'Selected Work hover must use Carbon’s 110ms expressive transition.');
requireText(styles, 'background: rgb(190 204 207 / 25%);', 'Selected Work hover and focus must use the requested 25% BECCCF tint.');
requireCount(figure, 'data-asset-surface', 2, 'Figure image and video branches must each declare their clipping owner.');
requireCount(galleryArtifact, 'data-asset-surface', 2, 'Gallery image and video branches must each declare their clipping owner.');
requireText(styles, '--gallery-composition-inset: 12px;', 'The Gallery composition must retain 12px per interior edge for a 24px media-to-copy gap.');
requireText(styles, 'gap: 24px;\n  min-width: 0;\n  padding-inline: var(--home-pad);', 'Stacked Gallery artifacts must retain a 24px gap.');
requireText(styles, 'row-gap: 24px;', 'Desktop Gallery artifacts must retain a 24px vertical gap.');
requireText(styles, 'font: 700 16px/1.35 var(--body-font);', 'Gallery headings must use 16px bold Manrope.');
requireText(styles, 'color: var(--text-secondary);\n  font: 400 16px/var(--body-leading) var(--body-font);', 'Gallery body copy must use 16px Manrope in editorial secondary.');
requireCount(galleryProject, 'var(--gallery-composition-inset)', 2, 'Gallery copy placement must apply the shared inset to both eligible edges.');
requireCount(galleryArtifact, 'var(--gallery-composition-inset)', 2, 'Gallery media placement must apply the shared inset to both eligible edges.');
requireCount(carousel, 'data-asset-surface', 1, 'The carousel viewport must be the sole asset surface.');
requireCount(oneReport, 'class="scenario-column" data-asset-surface', 3, 'Each One Report scenario group must own one asset surface.');
requireCount(hbs, 'class="research-architecture" data-asset-surface', 1, 'The grouped HBS research visual must own one asset surface.');
for (const token of [
  '--cs-heading: var(--text-primary);',
  '--cs-body-text: var(--text-secondary);',
  '--cs-caption: var(--text-tertiary);',
  '--cs-metadata-label: var(--text-tertiary);',
  '--cs-metadata-value: var(--text-secondary);',
]) requireText(styles, token, `Case-study editorial token must remain mapped: ${token}`);
for (const obsolete of ['--cs-context-label', '--cs-context-value', '--cs-text-primary', '--cs-text-secondary', '.case-section h3']) {
  if (styles.includes(obsolete)) errors.push(`Obsolete case-study typography role must remain removed: ${obsolete}`);
}
if (designSystem.includes('context label') || designSystem.includes('context value')) {
  errors.push('Case-study documentation must call Stakeholder, Skills, Year, and Role metadata rather than context.');
}
for (const expected of ['`--text-primary` | `#000000`', '`--text-secondary` | `#416870`', '`--text-tertiary` | `#5F787D`']) {
  requireText(designSystem, expected, `Case-study documentation must retain the canonical editorial color: ${expected}`);
}
if (typographyInventory.includes('| Subheading |') || typographyInventory.includes('| Context label |') || typographyInventory.includes('| Context value |')) {
  errors.push('The typography inventory must omit the unused subheading role and use metadata terminology.');
}
for (const expected of ['| Metadata label |', '| Metadata value |', '`#5F787D`']) {
  requireText(typographyInventory, expected, `Typography inventory is missing the approved editorial hierarchy: ${expected}`);
}
requireText(responsiveVideo, 'data-media-playback-control', 'Every responsive video must expose its persistent playback control.');
requireText(styles, 'right: 12px;\n  bottom: 12px;', 'Every responsive-video control must stay 12px from the bottom-right corner.');
requireText(styles, 'width: 40px;\n  height: 40px;', 'Responsive-video controls must retain their subtle 40px circle.');
requireText(styles, 'inset: -4px;\n  content:', 'Responsive-video controls must retain a 48px touch target.');
requireText(styles, 'width: 18px;\n  height: 18px;', 'Responsive-video controls must retain 18px icons.');
if (layout.includes('cursor-play') || layout.includes('cursor-pause') || layout.includes('is-media') || styles.includes('.custom-site-cursor.is-media')) {
  errors.push('Play/pause custom-cursor states and icons must remain removed site-wide.');
}
requireText(layout, 'cursor-project-arrow', 'Selected Work must retain its project-arrow cursor.');
requireText(responsiveVideo, 'videoVariantsFor(src)', 'Responsive videos must resolve generated mobile and desktop sources.');
requireText(playbackController, 'this.threshold = options.threshold ?? 0.2;', 'Autoplay eligibility must remain at 20% visibility.');
requireText(playbackController, "record.advancingFrames >= 2", 'Playing state must require two advancing frames.');
requireText(playbackController, "this.setState(record, 'failed', 'retries-exhausted')", 'Playback recovery must terminate in a recoverable failed state.');
if (/data-playback-mode=["']exclusive/.test(figure + galleryArtifact + oneReport + home)) {
  errors.push('Editorial media must never restore exclusive playback selection.');
}
if (layout.includes('.play().catch(() => {})')) errors.push('Playback failures must never be silently discarded.');

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
