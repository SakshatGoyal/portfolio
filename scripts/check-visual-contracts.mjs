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
  multiscriptNameStrip,
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
  read('../src/components/MultiscriptNameStrip.astro'),
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

requireText(styles, '--asset-radius: 0px;', 'The shared visual-asset radius must remain 0px.');
requireText(styles, "[data-home-system='true'] {\n  --home-background: #fff;\n  --home-accent-copy: #416870;\n  --gallery-band-gray: #fafafa;\n  --asset-radius: 0px;", 'Homepage media and accent copy must use the shared square-asset and editorial-secondary tokens.');
requireText(styles, '--canvas: #fafafa;', 'The shared page canvas must remain #FAFAFA.');
requireText(layout, '<meta name="theme-color" content="#fafafa" />', 'The browser theme color must match the #FAFAFA canvas.');
if (styles.includes('--cs-surface') || styles.includes('background: var(--cs-surface)')) {
  errors.push('Case-study structural blocks must not restore the removed white surface architecture.');
}
requireText(styles, '--prose-measure: 70%;', 'The shared desktop prose measure must remain 70%.');
requireText(styles, '--text-primary: #000;', 'Editorial primary text must remain pure black.');
requireText(styles, '--text-secondary: #416870;', 'Editorial secondary text must remain #416870.');
requireText(styles, '--text-tertiary: #5f787d;', 'Editorial tertiary text must remain the accessible #5F787D.');
requireText(styles, '[data-theme=\'panw\'] { --accent: #2f6759; --case-tint: #d9e8e3; --panw-card-surface: #fff; }', 'PANW takeaway and metric cards must use a pure-white surface.');
requireText(styles, '--ink: var(--text-primary);', 'The legacy ink token must alias the canonical primary token.');
requireText(styles, '--muted: var(--text-secondary);', 'The legacy muted token must alias the canonical secondary token.');
requireText(styles, '--faint: var(--text-tertiary);', 'The legacy faint token must alias the canonical tertiary token.');
if (contrastRatio('5f787d', 'fafafa') < 4.5) errors.push('Editorial tertiary text must retain at least 4.5:1 contrast against #FAFAFA.');
requireCount(styles, "font-family: 'Manrope';", 3, 'Manrope weights 400, 500, and 700 must remain registered as bundled site fonts.');
requireText(home, "import MultiscriptNameStrip from '../components/MultiscriptNameStrip.astro';", 'The homepage must use the dedicated multiscript strip component.');
if (!(home.indexOf('<MultiscriptNameStrip />') > home.indexOf('class="home-hero"')
  && home.indexOf('<MultiscriptNameStrip />') < home.indexOf('class="home-work"'))) {
  errors.push('The multiscript strip must remain between the homepage biography and Selected Work.');
}
requireText(multiscriptNameStrip, 'const rowOffsets = [0, 69, 138, 275];', 'The multiscript strip must retain the four Figma row offsets.');
requireText(multiscriptNameStrip, 'const repetitions = Array.from({ length: 15 });', 'Every multiscript row must retain fifteen repeated name groups.');
requireText(multiscriptNameStrip, 'class="multiscript-name-strip" aria-hidden="true"', 'The decorative multiscript strip must remain hidden from assistive technology.');
requireText(multiscriptNameStrip, "'साक्षात् गोयल'", 'The strip must retain the Devanagari name.');
requireText(multiscriptNameStrip, "'સાક્ષાત્ ગોયલ'", 'The strip must retain the Gujarati name.');
requireText(multiscriptNameStrip, "'ஸாக்ஷாத் கோயல்'", 'The strip must retain the Tamil name.');
requireText(multiscriptNameStrip, "'Sākshāt Goyal'", 'The strip must retain the Latin name.');
requireText(styles, 'width: 100vw;\n  height: 76px;\n  overflow-x: clip;\n  overflow-y: visible;\n  color: #afd0c9;', 'The multiscript strip must remain a 76px full-bleed band that clips horizontal overflow without cropping script glyphs.');
requireText(styles, 'gap: 4px;\n  width: 100%;\n  height: 100%;', 'The multiscript strip rows must retain their 4px vertical stagger.');
requireText(styles, 'width: 4454px;\n  min-width: 4454px;\n  height: 16px;\n  padding-left: var(--multiscript-row-offset);\n  transform: translateX(-50%);', 'Every multiscript row must retain the centered 4454px Figma coordinate system and measured inset.');
requireText(styles, 'gap: 6px;\n  width: 359px;\n  height: 16px;', 'Each repeated multiscript group must retain its 359px by 16px Figma geometry.');
requireText(styles, "font: 400 14px/16px 'Manrope', 'Manrope Script Fallback', Arial, sans-serif;\n  letter-spacing: -.42px;", 'The strip must retain Manrope with Figma-equivalent Noto script fallback at the specified size and tracking.');
requireCount(styles, "font-family: 'Manrope Script Fallback';", 3, 'The strip must register deterministic Figma-equivalent fallback faces for all three Indic scripts.');
requireText(styles, 'notosansdevanagari', 'The strip must retain the Noto Sans Devanagari fallback used by Figma.');
requireText(styles, 'notosansgujarati', 'The strip must retain the Noto Sans Gujarati fallback used by Figma.');
requireText(styles, 'notosanstamil', 'The strip must retain the Noto Sans Tamil fallback used by Figma.');
requireText(styles, '.home-gallery > .page-heading > h2 {\n  font-size: 32px;\n  font-weight: 600;\n}', 'The homepage Gallery heading must match the requested 32px semibold role.');
requireText(styles, "--body-font: 'Manrope', Arial, sans-serif;", 'The shared body-family token must remain Manrope.');
requireText(styles, '--body-tracking: -.02em;', 'Every Manrope role must retain minus-two-percent tracking.');
if (styles.includes('Fustat')) errors.push('Fustat must not remain in the active site stylesheet.');
if (styles.includes('General Sans')) errors.push('General Sans must not remain in the active site stylesheet.');
if (!designSystem.includes('| Narrative body | Manrope |') || designSystem.includes('General Sans')) {
  errors.push('The case-study typography documentation must retain Manrope and remove General Sans.');
}
const approvedManropeTrackingOverrides = new Set(['.multiscript-name-strip__name']);
for (const [, selector, body] of styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const usesManrope = /font(?:-family)?\s*:[^;]*(?:var\(--body-font\)|var\(--cs-body-font\))/.test(body);
  const explicitTracking = body.match(/letter-spacing\s*:\s*([^;]+)/)?.[1].trim();
  if (usesManrope && explicitTracking
    && !explicitTracking.startsWith('var(--body-tracking)')
    && !approvedManropeTrackingOverrides.has(selector.trim())) {
    errors.push(`Manrope role must use the shared tracking token: ${selector.trim()}`);
  }
}
requireText(styles, '[data-asset-surface] { overflow: hidden; border-radius: var(--asset-radius); }', 'Asset surfaces must own both clipping and the shared radius.');
requireText(styles, '.project-image { position: relative; overflow: hidden; min-height: 280px; border-radius: 0;', 'Legacy project image surfaces must remain square.');
requireText(styles, '.project-card.square img { object-fit: contain; transform: scale(.76); border-radius: 0; }', 'Legacy square project images must not restore rounded corners.');
requireText(styles, 'body :is(p, li, h1, h2, h3, h4, h5, h6, figcaption, blockquote) { text-wrap: pretty; }', 'Every site-wide editorial text block must opt into pretty wrapping.');
requireText(styles, '.line-mask-final-pair { white-space: nowrap; }', 'Animated headings must keep their final two words on the same line.');
requireText(styles, 'font: 400 24px/1.35 var(--body-font);', 'Both homepage bio sentences must retain 24px type with 135% leading.');
requireText(styles, '.home-bio-sentence--lead { color: var(--text-primary); font-weight: 500; }', 'The homepage lead sentence must retain medium weight and editorial primary.');
requireText(styles, '.home-bio-sentence--support { color: var(--home-accent-copy); font-size: 20px; }', 'The homepage supporting statement must retain its 20px accent-copy role.');
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
requireText(styles, 'min-width: 420px;\n  padding-bottom: 24px;\n  background: transparent;', 'Selected Work must retain 24px of clearance below the final Cisco tile.');
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
requireText(styles, '--site-navigation-outline: color-mix(in srgb, var(--text-primary) 5%, transparent);', 'Header and case-navigation outlines must share the subtle navigation token.');
requireText(styles, 'font: 400 16px/1 var(--body-font);', 'The shared header must retain its optically centered 16px Manrope type.');
requireText(styles, 'letter-spacing: var(--body-tracking);', 'The shared header must retain the Manrope tracking token.');
requireText(styles, 'width: calc(var(--site-rail) - ((var(--site-header-content-inset) - var(--site-header-inner-pad)) * 2));', 'The expanded header text must align to the editorial content edges.');
requireText(styles, '--site-header-end-pad: 8px;', 'The header must retain its reduced right inset so the pill group sits farther right.');
requireText(styles, 'padding-inline: var(--site-header-inner-pad) var(--site-header-end-pad);', 'The header must retain its intentional asymmetric internal padding.');
requireText(styles, 'gap: 2px;\n  margin: 0;\n  padding: 0;\n  list-style: none;', 'Navigation pills must retain a 2px gap without inherited browser offsets.');
requireText(siteHeader, '<span class="site-header-person">Sākshāt Goyal</span>', 'The header must retain the named 500-weight person label.');
requireText(siteHeader, '<span class="site-header-role">Product Designer</span>', 'The header must include the Product Designer role.');
requireText(styles, '.site-header-person { font-weight: 500; }', 'The person label must retain weight 500.');
requireText(styles, '.site-header-role { color: var(--home-accent-copy, var(--text-secondary)); font-weight: 400; }', 'The Product Designer role must use homepage accent copy while retaining the editorial-secondary fallback.');
requireText(styles, 'gap: 16px;\n  color: var(--text-primary);\n  text-decoration: none;', 'The name and role must retain their 16px gap and primary name color.');
requireText(styles, 'padding: 8px 16px;\n  border-radius: 999px;\n  background: transparent;', 'Header pills must retain twice as much horizontal padding as vertical padding.');
requireText(styles, 'color: var(--text-secondary);\n  text-decoration: none;\n  transition: background 150ms var(--expressive-ease-in-out), color 150ms var(--expressive-ease-in-out);', 'Inactive navigation pills must use editorial secondary with the shared hover timing.');
requireText(styles, '.site-header-link.active { color: var(--text-primary); }', 'Active navigation links must remain primary on their transparent rest state.');
requireText(styles, '--site-navigation-hover: rgb(175 208 201 / 20%);', 'Header pills must retain the requested 20% AFD0C9 hover surface.');
requireText(styles, '.site-header-link:hover,\n.site-header-link:focus-visible { background: var(--site-navigation-hover); color: var(--text-primary); }', 'Header pills must use black text on the requested hover and keyboard-focus surface.');
if (siteHeader.includes('site-header-separator') || siteHeader.includes('・')) {
  errors.push('Primary navigation must not render dot separators between its pills.');
}
requireText(styles, 'border: 1px solid var(--site-navigation-outline);', 'The header capsule must use the shared subtle navigation outline.');
requireText(styles, 'backdrop-filter: blur(12px);', 'The header capsule must retain its 12px backdrop blur.');
requireText(styles, 'white-space: nowrap;', 'The approved one-row header behavior must remain explicit.');
requireText(styles, '.site-header.site-header-minimized .site-header-capsule { width: 584px; }', 'The desktop header must remain wide enough to contain the recalculated pill padding.');
requireText(styles, '@media (max-width: 575px) {\n  .site-header-role { display: none; }\n  .site-header-row { gap: 8px; }\n}', 'Narrow headers must omit the secondary role and close the row gap before content can overflow.');
requireText(styles, '@media (max-width: 419px) {\n  .site-header { font-size: 14px; }\n  .site-header-area { padding-inline: 8px 4px; }\n  .site-header-link { padding: 4px 8px; }\n}', 'Phone-width header pills must retain the 2:1 horizontal-to-vertical padding ratio.');
requireText(styles, '@media (max-width: 359px) {\n  .site-header-brand { display: none; }\n  .site-header-row { justify-content: flex-end; }\n}', 'The smallest supported header must prioritize the three navigation pills without overflowing its capsule.');
requireText(siteHeader, "{ label: 'Selected Work', href: '/#work', section: 'work', active: false }", 'Selected Work must not render active on case-study or future non-home routes.');
if (siteHeader.includes("path.startsWith('/work/')")) {
  errors.push('Case-study routes must not force Selected Work into an active state.');
}
requireText(lineSystem, "id: 'case-meta-row-rules'", 'Every case study must retain the shared metadata row divider topology.');
requireText(lineSystem, "widthSource: '.case-intro > p'", 'Metadata dividers must derive their width from the rendered body-text guideline.');
requireText(lineSystem, "token: 'navigation-outline'", 'Metadata dividers must use the shared navigation-outline token.');
requireText(styles, '.line-system-path.line-token-navigation-outline { stroke: var(--site-navigation-outline); }', 'Metadata divider strokes must exactly match the UI navigation border color.');
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
requireText(styles, '.home-project-meta > .home-project-client { color: var(--text-secondary); font: 600 14px/1.35 var(--body-font); }', 'Selected Work clients must use editorial secondary at weight 600.');
requireText(styles, 'min-width: 420px;\n  padding-bottom: 24px;\n  background: transparent;', 'The Selected Work project grid must retain its requested 24px trailing space.');
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
if (bodyRevealSource.includes("'.metric-tooltip'")) {
  errors.push('Transient metric tooltips must not inherit generic viewport-reveal transforms.');
}
requireText(styles, 'animation: panw-metric-tooltip-enter-up 128ms var(--expressive-ease-out) both;', 'PANW tooltip entrance must retain its settled position after the hover animation.');
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
requireText(styles, '.previous-case .line-system-path,\n.next-case .line-system-path { stroke: var(--site-navigation-outline); }', 'Case-study Previous and Next outlines must match the shared header outline.');
requireText(styles, '.previous-case:hover, .next-case:hover { background: var(--ink); color: #fff; }', 'Case-study navigation must retain its black-and-white hover treatment.');
requireCount(figure, 'data-asset-surface', 2, 'Figure image and video branches must each declare their clipping owner.');
requireCount(galleryArtifact, 'data-asset-surface', 2, 'Gallery image and video branches must each declare their clipping owner.');
requireText(styles, '--gallery-composition-inset: 12px;', 'The Gallery composition must retain 12px per interior edge for a 24px media-to-copy gap.');
requireText(styles, '--gallery-band-inline: calc((100vw - var(--home-rail)) / 2 + var(--home-pad));', 'Gallery content must use the shared site rail plus homepage interior inset.');
if (styles.includes('calc(50vw - 742px)')) {
  errors.push('The Gallery must not restore its former viewport-based inset approximation.');
}
requireText(styles, 'gap: 24px;\n  min-width: 0;\n  padding: 48px var(--gallery-band-inline) 84px;', 'Gallery bands must retain a 24px internal grid gap, 48px top padding, and 84px bottom padding.');
requireText(styles, 'row-gap: 48px;', 'Desktop Gallery chapters must retain a 48px internal row gap.');
requireText(styles, "font: 500 28px/1.2 'Cabinet Grotesk', Arial, sans-serif;\n  letter-spacing: normal;", 'Gallery headings must use the 28px medium Cabinet Grotesk role.');
requireText(styles, 'color: var(--text-secondary);\n  font: 400 16px/var(--body-leading) var(--body-font);', 'Gallery body copy must use 16px Manrope in editorial secondary.');
requireText(styles, '.gallery-project-notes {\n  min-width: 0;\n  margin-top: 24px;\n  color: var(--text-secondary);\n  font: 400 16px/var(--body-leading) var(--body-font);', 'Gallery secondary prose must use the same size and leading as the summary.');
requireText(styles, 'grid-template-columns: minmax(0, max-content) minmax(420px, 560px);', 'Wide Gallery information rows must keep project identity and description in a compact pair.');
requireText(styles, 'column-gap: clamp(48px, 5vw, 80px);', 'Wide Gallery information rows must cap their inter-column gap.');
requireText(styles, 'min-width: 0;\n    margin: 0;\n    padding-right: 24px;\n    white-space: normal;\n    text-wrap: balance;', 'Wide Gallery project headings must wrap safely within their assigned track.');
const galleryDesktopBreakpoint = styles.slice(
  styles.indexOf('@media (min-width: 1056px)'),
  styles.indexOf('/* Shared viewport-safe editorial media.'),
);
if (!galleryDesktopBreakpoint.includes('grid-template-columns: minmax(0, max-content) minmax(420px, 560px);')
  || !galleryDesktopBreakpoint.includes('grid-column: 2;')) {
  errors.push('The complete Gallery desktop composition must begin at the shared 1056px breakpoint.');
}
if (galleryDesktopBreakpoint.includes('.gallery-project-heading {\n    grid-column: 1;\n    margin: 0;\n    padding-right: 24px;\n    white-space: nowrap;')) {
  errors.push('Gallery project headings must not paint beyond a compressed desktop grid track.');
}
if (styles.includes('@media (min-width: 1200px)')) {
  errors.push('The Gallery must not introduce a private 1200px breakpoint outside the shared responsive system.');
}
requireText(styles, '--home-background: #fff;', 'The homepage canvas must be pure white.');
requireText(styles, '--gallery-band-gray: #fafafa;', 'Gallery gray bands must retain the requested neutral 98% surface.');
requireText(styles, '.home-gallery > .page-heading {\n  width: var(--home-rail);\n  margin-inline: auto;\n  padding-top: clamp(96px, 20vw, 160px);\n  padding-bottom: 0;', 'The Gallery heading must use the responsive 96–160px top rhythm and no bottom padding.');
requireText(styles, 'padding: 48px var(--gallery-band-inline) 84px;', 'Every Gallery band must retain 48px top and 84px bottom padding.');
requireText(styles, '.gallery-project:first-child { padding-top: 24px; }', 'The first project must join the Gallery heading without excess spacing.');
requireText(styles, '.gallery-project:nth-child(odd) { background: var(--gallery-band-gray); }', 'Odd Gallery projects must use the gray band surface.');
requireText(styles, '.gallery-project:nth-child(even) { background: #fff; }', 'Even Gallery projects must use pure white bands.');
requireText(styles, '.gallery-project:nth-child(2),\n.gallery-project:nth-child(6),\n.gallery-project:nth-child(8) { background: #f5f5f5; }', 'Luminoso, Cisco Ready, and Trebuchet Trials must use the specified #F5F5F5 bands.');
if (styles.includes('.gallery-project + .gallery-project')) {
  errors.push('Gallery bands must not retain divider or margin-based separation rules.');
}
requireText(styles, ".gallery-artifact[data-gallery-role='support'] { margin-top: 16px; }", 'Supporting media must follow the information row with the intended 64px rhythm.');
requireText(styles, '--gallery-media-viewport-max-height: calc(100dvh - 140px);', 'Gallery media must reserve the navigation and caption clearance within the visible viewport.');
requireText(styles, 'max-height: var(--gallery-media-viewport-max-height);\n  margin: 0 auto 0 0;', 'Gallery media must remain viewport-bounded and left-aligned.');
requireText(styles, "padding: var(--caption-pad-top) 0 var(--caption-pad-bottom);\n  color: var(--text-tertiary);\n  font: 400 var(--caption-size)/var(--caption-leading) 'Cabinet Grotesk', Arial, sans-serif;", 'Gallery captions must reuse the established site caption treatment.');
requireText(galleryArtifact, 'data-gallery-role={role}', 'Gallery artifacts must expose their lead or support role.');
requireText(galleryArtifact, 'data-media-caption>{caption}', 'Every Gallery artifact must render its factual caption.');
requireCount(galleryArtifact, 'data-viewport-media-frame', 2, 'Gallery image and video surfaces must use the shared viewport-safe frame controller.');
requireCount(galleryArtifact, 'data-viewport-media-inset="140"', 2, 'Gallery frames must reserve navigation and caption clearance.');
requireText(layout, 'const viewportInsetFor = (frame) => {', 'Viewport-safe media must support frame-specific clearance.');
requireText(styles, '--media-reveal-duration: 800ms;', 'Every media entrance must use the shared 800ms duration.');
requireText(styles, 'transition: clip-path var(--media-reveal-duration) var(--expressive-ease-out) var(--media-reveal-delay, 0ms);', 'Every media entrance must use the restrained horizontal clip transition.');
requireText(styles, "html[data-media-motion-ready='true'] [data-media-reveal][data-media-reveal-ready='true'] [data-media-reveal-rise] {\n  transform: none;\n  transition: none;", 'The shared media entrance must not add vertical rise motion.');
if (motionSystem.includes('mediaRevealDurations')) {
  errors.push('Route-specific media reveal durations must remain removed.');
}
if (styles.includes("html[data-media-motion-ready='true'] .home-gallery [data-media-reveal]")) {
  errors.push('The Gallery must not fork the shared media reveal contract.');
}
if (styles.includes('@keyframes media-reveal-opacity') || styles.includes('translateY(32px)')) {
  errors.push('The retired opacity split and vertical rise must not return to media entrances.');
}
requireText(galleryProject, 'const [lead, ...supports] = project.media;', 'Gallery projects must render the lead asset separately from supporting media.');
if (!(galleryProject.indexOf('<GalleryArtifact\n    {...lead}') < galleryProject.indexOf('class="gallery-project-info"')
  && galleryProject.indexOf('class="gallery-project-info"') < galleryProject.indexOf('{supports.map'))) {
  errors.push('Gallery DOM order must remain lead media, information row, then supporting media.');
}
if (bodyRevealSource.includes("'.gallery-project-notes'")) {
  errors.push('Gallery secondary notes must reveal with their parent information row.');
}
requireCount(galleryProject, 'var(--gallery-composition-inset)', 2, 'Gallery copy placement must apply the shared inset to both eligible edges.');
requireCount(galleryArtifact, 'var(--gallery-composition-inset)', 2, 'Gallery media placement must apply the shared inset to both eligible edges.');
requireCount(carousel, 'data-asset-surface', 1, 'The carousel viewport must be the sole asset surface.');
for (const expected of [
  'height: 2px; padding: 0; margin: 8px 0 12px;',
  'flex: 0 0 50px; width: 50px; height: 2px;',
  'margin: 0 2px;',
  'opacity: .25;',
  'transition: opacity .2s ease-out;',
  "button[aria-current='step'] { opacity: 1; }",
  'top: -13px; left: 0; width: 100%; height: 30px;',
  'velocity += (1 - position) * 0.025;',
  'velocity *= 1 - 0.28;',
  "viewport?.addEventListener('click', () => select(index + 1));",
]) requireText(carousel, expected, `Carousel must retain the measured reference contract: ${expected}`);
for (const forbidden of ['slideFadeDuration', 'autoAdvance', 'setTimeout', 'data-behance-image', '<svg', 'flex-basis: 30px']) {
  if (carousel.includes(forbidden)) errors.push(`Carousel must not restore the replaced behavior or geometry: ${forbidden}`);
}
requireText(lineSystem, "|| focusedElement.closest('[data-carousel]')", 'Carousel controls must not receive the site-specific focus rectangle absent from the reference.');
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
requireText(typography, "const EDITORIAL_TEXT_SELECTOR = 'body :is(p, li, h1, h2, h3, h4, h5, h6, figcaption, blockquote)';", 'The widow guard must cover every site-wide editorial text-block role.');
requireText(typography, 'document.querySelectorAll(EDITORIAL_TEXT_SELECTOR).forEach(guardFinalPair);', 'The widow guard must apply to every editorial text block.');
requireText(typography, "document.documentElement.dataset.typographySystemMounted === 'true'", 'The typography initializer must remain idempotent.');
requireText(typography, "replaceCharacterAt(nodes, separatorIndex, '\\u00a0')", 'The final word pair must be joined with a nonbreaking space.');
requireText(motionSystem, "finalPair.className = 'line-mask-final-pair';", 'Line-mask measurement must preserve the final word pair as one wrapping unit.');

if (errors.length) {
  console.error('Visual contract check failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Visual contract check passed.');
