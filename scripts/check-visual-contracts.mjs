import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const caseStudySlugs = [
  'panw-ai',
  'hbs-ai-institute',
  'global-data-analytics',
  'one-report',
  'hitachi-energy',
  'cisco-customer-insights',
  'memory-lane',
];
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
  about,
  portfolioPanel,
  caseStudySources,
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
  read('../src/pages/about.astro'),
  read('../src/components/PortfolioPanel.astro'),
  Promise.all(caseStudySlugs.map((slug) => read(`../src/pages/work/${slug}.astro`))),
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
requireText(styles, "[data-home-system='true'] {\n  --home-background: #fff;\n  --home-accent-copy: #416870;\n  --gallery-band-gray: #f5f5f5;\n  --asset-radius: 0px;", 'Homepage media and accent copy must use the shared square-asset and Gallery surface tokens.');
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
requireCount(styles, "font-family: 'Manrope';", 4, 'Manrope weights 400, 500, 600, and 700 must remain registered as bundled site fonts.');
requireText(styles, "src: url('/fonts/manrope-600.ttf') format('truetype');\n  font-weight: 600;", 'Manrope SemiBold must resolve to its bundled 600-weight font file.');
if (home.includes('MultiscriptNameStrip')) {
  errors.push('The alternate homepage must not import or render the multilingual name strip.');
}
requireText(multiscriptNameStrip, 'const rowOffsets = [0, 69, 138, 275];', 'The multiscript strip must retain the four Figma row offsets.');
requireText(multiscriptNameStrip, 'const repetitions = Array.from({ length: 15 });', 'Every multiscript row must retain fifteen repeated name groups.');
requireText(multiscriptNameStrip, 'class="multiscript-name-strip" aria-hidden="true"', 'The decorative multiscript strip must remain hidden from assistive technology.');
requireText(multiscriptNameStrip, "'साक्षात् गोयल'", 'The strip must retain the Devanagari name.');
requireText(multiscriptNameStrip, "'સાક્ષાત્ ગોયલ'", 'The strip must retain the Gujarati name.');
requireText(multiscriptNameStrip, "'ஸாக்ஷாத் கோயல்'", 'The strip must retain the Tamil name.');
requireText(multiscriptNameStrip, "'Sākshāt Goyal'", 'The strip must retain the Latin name.');
requireCount(styles, "font-family: 'Manrope Script Fallback';", 3, 'The strip must register deterministic Figma-equivalent fallback faces for all three Indic scripts.');
requireText(styles, 'notosansdevanagari', 'The strip must retain the Noto Sans Devanagari fallback used by Figma.');
requireText(styles, 'notosansgujarati', 'The strip must retain the Noto Sans Gujarati fallback used by Figma.');
requireText(styles, 'notosanstamil', 'The strip must retain the Noto Sans Tamil fallback used by Figma.');
requireText(styles, ".home-work > .page-heading > h2,\n.home-gallery > .page-heading > h2 {\n  font-family: var(--body-font);\n  font-size: 32px;\n  font-weight: 500;\n}", 'Selected Work and Gallery headings must use 32px medium Manrope.');
requireText(styles, "--body-font: 'Manrope', Arial, sans-serif;", 'The shared body-family token must remain Manrope.');
requireText(styles, '--body-tracking: -.02em;', 'Every Manrope role must retain minus-two-percent tracking.');
if (styles.includes('Fustat')) errors.push('Fustat must not remain in the active site stylesheet.');
if (styles.includes('General Sans')) errors.push('General Sans must not remain in the active site stylesheet.');
if (!designSystem.includes('| Narrative body | Manrope |') || designSystem.includes('General Sans')) {
  errors.push('The case-study typography documentation must retain Manrope and remove General Sans.');
}
const approvedManropeTrackingOverrides = new Set([
  '.multiscript-name-strip__name',
  '.portfolio-panel-identity',
  '.portfolio-panel-lead',
  '.portfolio-panel-support',
  '.portfolio-panel-navigation',
  '.portfolio-panel-footer',
  '.about-page-identity',
  '.about-page-lead',
  '.about-page-support',
  '.home-project-meta-primary',
  '.home-project-view',
]);
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
requireText(portfolioPanel, '<aside class="portfolio-panel" aria-label="Portfolio introduction and navigation">', 'The shared shell must include the Figma portfolio panel.');
requireText(layout, '<PortfolioPanel />', 'The portfolio panel must render on every site route.');
requireText(layout, '<div class="site-content">', 'Page content must share the right content column.');
requireText(styles, 'grid-template-columns: 25vw minmax(0, 75vw);', 'Desktop must use the reversed 25/75 panel and content split.');
requireText(styles, 'position: sticky;\n  top: 0;', 'The desktop portfolio panel must remain pinned while the right column scrolls.');
requireText(styles, '--panel-scale: min(0.054348vw, 1.3px);', 'Desktop panel measurements must scale from the 460px Figma reference and cap at 1.3.');
requireText(styles, '--panel-label-color: #000;', 'Every portfolio-panel navigation and footer label must rest in black and use black tape.');
requireText(styles, 'padding: calc(32 * var(--panel-scale));', 'The portfolio panel must preserve the scaled 32px Figma inset.');
requireText(styles, 'font: 600 calc(32 * var(--panel-scale))/1 var(--body-font);\n  letter-spacing: -.04em;', 'Panel identity must preserve the Figma 32px semibold, 100% leading, and minus-four-percent tracking.');
requireText(styles, 'font: 600 calc(24 * var(--panel-scale))/calc(33 * var(--panel-scale)) var(--body-font);\n  letter-spacing: -.03em;', 'Panel lead must preserve the Figma 24/33 semibold typography.');
requireText(styles, 'color: #819a9f;\n  font: 500 calc(20 * var(--panel-scale))/calc(27 * var(--panel-scale)) var(--body-font);\n  letter-spacing: -.03em;', 'Panel supporting copy must preserve the Figma color and 20/27 typography.');
requireText(styles, 'padding-inline-start: calc(32 * var(--panel-scale));', 'Panel project rows must retain their 32px inset.');
requireText(styles, 'gap: calc(2 * var(--panel-scale));', 'Panel project rows must retain their 2px gap.');
requireText(styles, 'background: #beff3f;', 'Panel lead highlights must use the Figma neon green.');
requireText(styles, 'transition: clip-path 126ms var(--expressive-ease-in-out);', 'Panel highlights must use the 126ms tape wipe.');
requireText(styles, 'transition-delay: calc(var(--panel-highlight-index) * 60ms);', 'Panel highlight lines must retain their 60ms stagger.');
requireText(styles, '@media (max-width: 900px) {\n  .site-layout { display: block; }', 'At 900px and below the panel must stack above the content.');
requireText(styles, '--panel-scale: min(0.217391vw, 1.3px);', 'The stacked panel must scale from its full viewport width.');
for (const attribute of ['role="link"', 'tabindex="0"', 'aria-disabled="true"', 'data-tape-frame="true"', 'data-tape-color="var(--panel-label-color)"', 'data-tape-duration="126"', 'data-tape-disabled="true"']) {
  requireText(portfolioPanel, attribute, `Panel labels must retain ${attribute}.`);
}
requireText(motionSystem, 'const requestedDuration = Number(label.dataset.tapeDuration);', 'Tape labels must support per-label duration data.');
requireText(motionSystem, "if (label.dataset.tapeColor) line.style.setProperty('--tape-color', label.dataset.tapeColor);", 'Tape labels must support per-label tape colors.');
requireText(motionSystem, "if (label.getAttribute('aria-disabled') === 'true') label.dataset.tapeDisabled = 'true';", 'Tape labels must expose their disabled-link state.');
requireText(styles, '[data-tape-label]:focus-visible .home-tape-line > i,', 'Project and panel labels must expose their tape state to keyboard focus.');
requireText(styles, '[data-tape-label]:hover .home-tape-line > i,', 'Project and panel labels must expose their tape state to fine-pointer hover.');
requireText(styles, '.js .portfolio-panel-highlight-line::before { clip-path: inset(0) !important; transition: none !important; }', 'Reduced motion must show the completed highlight without animation.');
requireText(about, 'class="about-page"', 'The About route must render its minimal biography page.');
requireText(motionSystem, "const frameAligned = label.dataset.tapeFrame === 'true';", 'Panel tape must derive its geometry from the full padded item frame.');
requireText(motionSystem, 'const framePaddingY = frameAligned', 'Panel tape must include both vertical frame paddings.');
requireText(portfolioPanel, "const isProject = (href: string) => pathname === href", 'Case-study routes must select their matching panel project.');
for (const removedPanelLabel of ['Selected Work', 'Gallery', 'About Me']) {
  if (portfolioPanel.includes(`>${removedPanelLabel}</a>`)) {
    errors.push(`The shared panel must not render the removed ${removedPanelLabel} link.`);
  }
}
if (portfolioPanel.includes('data-panel-section') || portfolioPanel.includes('setPanelSection')) {
  errors.push('The shared panel must not retain homepage section-selection behavior.');
}
for (const [, selector, body] of styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
  const ownsHomeWork = selector.split(',').some((part) => part.trim() === '.home-work');
  if (ownsHomeWork && /\boverflow(?:-[xy])?\s*:\s*(?:auto|scroll)\b/.test(body)) {
    errors.push('Selected Work must not own a scrollable overflow axis.');
  }
}
requireText(styles, '.home-project-scroller { overflow: visible; }', 'The project scroller must remain inert outside narrow screens.');
requireText(styles, 'min-width: 420px;\n  padding-bottom: 160px;\n  background: transparent;', 'Selected Work must retain 160px of clearance below the final Cisco tile.');
requireText(home, 'const trailingSpace = Number.parseFloat(getComputedStyle(projectGrid).paddingBottom) || 0;', 'The masonry height must read the requested Selected Work trailing space.');
requireText(home, ') + trailingSpace);', 'The masonry height must preserve the requested trailing space outside its positioned tiles.');
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

if (siteHeader.includes("label: 'Contact'") || siteHeader.includes("href: '/#contact'") || siteFooter.includes('id="contact"')) {
  errors.push('Contact navigation and its obsolete footer anchor must remain removed.');
}
requireText(styles, '--site-navigation-outline: color-mix(in srgb, var(--text-primary) 5%, transparent);', 'Header and case-navigation outlines must share the subtle navigation token.');
if (layout.includes("import SiteHeader") || layout.includes('<SiteHeader')) {
  errors.push('The global top navigation must not render on any route.');
}
if (styles.includes('.site-header {')) errors.push('The removed global header must not retain active layout CSS.');
requireText(layout, '{!isHomeSystem && <SiteFooter />}', 'The existing homepage footer must remain suppressed.');
requireText(lineSystem, "id: 'case-meta-row-rules'", 'Every case study must retain the shared metadata row divider topology.');
requireText(lineSystem, "widthSource: '.case-intro > p'", 'Metadata dividers must derive their width from the rendered body-text guideline.');
requireText(lineSystem, "token: 'navigation-outline'", 'Metadata dividers must use the shared navigation-outline token.');
requireText(styles, '.line-system-path.line-token-navigation-outline { stroke: var(--site-navigation-outline); }', 'Metadata divider strokes must exactly match the UI navigation border color.');
requireText(lineSystem, 'window.__lineSystemDispose?.();', 'Line-system initialization must dispose an existing runtime before remounting.');
requireText(lineSystem, "document.querySelectorAll('.line-system-layer').forEach((layer) => layer.remove());", 'Line-system initialization must remove orphan legacy layers.');

requireCount(home, 'data-asset-surface', 3, 'Homepage image, video, and Memory Lane placeholder branches must each declare their clipping owner.');
requireText(styles, '--home-ink: var(--text-primary);', 'Homepage titles must inherit editorial primary.');
requireText(styles, '--home-secondary: var(--text-tertiary);', 'Homepage tertiary roles and footer must inherit editorial tertiary.');
requireText(styles, '.home-project-client { color: #000; font-weight: 600; text-transform: uppercase; }', 'Selected Work clients must use the Figma black uppercase semibold treatment.');
requireText(styles, '.home-project-year { color: #8b8b8b; font-weight: 400; }', 'Selected Work years must use the Figma gray regular treatment.');
requireText(styles, 'align-items: center;\n  gap: 20px;\n  font: 400 14px/normal var(--body-font);', 'Every Selected Work client and year must use one consistent 20px gap.');
requireText(styles, 'justify-content: flex-start;\n  gap: 20px;\n  margin-top: 16px;', 'Selected Work metadata groups and View Project labels must use the same 20px gap.');
requireText(styles, 'min-width: 420px;\n  padding-bottom: 160px;\n  background: transparent;', 'The Selected Work project grid must retain its requested 160px trailing space.');
requireText(styles, '.home-project-one-report .home-project-media-visual video {\n  width: 100% !important;\n  max-width: none;\n  height: 100% !important;\n  max-height: none;', 'The One Report homepage video must fill its media frame without the shared viewport cap.');
const styleRules = [...styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
const ruleBody = (selector) => styleRules.find(([, candidate]) => candidate.trim() === selector)?.[2] || '';
if (/background/.test(ruleBody('.scenario-column')) || !/background\s*:\s*transparent/.test(ruleBody('.scenario-animation'))) {
  errors.push('One Report scenario columns and animations must not restore the obsolete wash background.');
}
requireText(home, 'class="home-project-view" data-tape-label>View Project</span>', 'Selected Work tiles must include the View Project tape label.');
requireText(motionSystem, "['View Project', 126]", 'View Project tape motion must match the Team label duration.');
requireText(styles, '.home-project-card:hover .home-project-view .home-tape-line > i {', 'Tile hover must animate the View Project tape.');
requireText(styles, '.home-project-card:focus-within .home-project-view .home-tape-line > i {', 'Tile keyboard focus must animate the View Project tape.');
requireText(styles, '--tape-color: #000;\n  color: transparent;', 'View Project must remain invisible at rest while reserving its metadata space for the black tape.');
requireText(styles, '.home-project-view .home-tape-line > span { color: transparent; }', 'The generated View Project tape text must remain invisible until tile hover or focus.');
requireText(styles, '.home-project-card:hover .home-project-view .home-tape-line > span { color: #fff; }', 'Tile hover must expose View Project in white on black tape.');
requireText(styles, '.home-project-card:focus-within .home-project-view .home-tape-line > span { color: #fff; }', 'Tile keyboard focus must expose View Project in white on black tape.');
requireText(styles, '.home-tape-line > i,\n  .home-tape-line > span,\n  .custom-site-cursor,', 'View Project tape motion must retain the shared reduced-motion override.');
const bodyRevealSource = motionSystem.slice(
  motionSystem.indexOf('const initBodyReveals'),
  motionSystem.indexOf('const initLineMaskHeadings'),
);
if (bodyRevealSource.includes("'.home-bio'")) {
  errors.push('The fold-aligned homepage bio must not inherit a scroll reveal that hides or displaces it on arrival.');
}
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
requireText(styles, '--home-project-column-gap: 24px;', 'Selected Work columns must retain the requested 24px gap.');
requireText(styles, '--home-project-row-gap: 24px;', 'Selected Work tiles within each column must retain the requested 24px maximum gap.');
requireText(styles, 'padding: 24px;\n  border: 0;\n  border-radius: 12px;\n  background: #fff;', 'Selected Work tiles must retain 24px padding and the Figma white 12px-radius surface.');
if (styles.includes(".home-project-grid:not([data-home-layout='small']) .home-project-card { padding-inline: 0; }")) {
  errors.push('Desktop Selected Work tiles must not remove their 24px left and right padding.');
}
requireText(home, "getPropertyValue('--home-project-column-gap')", 'Selected Work geometry must read the shared column-gap token.');
requireText(home, "getPropertyValue('--home-project-row-gap')", 'Selected Work geometry must read the shared 24px row-gap token.');
requireText(home, 'const secondColumnOffset = height1 * 0.2;', 'HBS must retain its 20%-of-PANW starting offset independently of the tile gaps.');
requireText(home, '[1, 4, 7].forEach((order) => setGeometry(order, 0, 0, columnWidth));', 'PANW, One Report, and Memory Lane must remain in the first Selected Work column.');
requireText(home, '[2, 3, 5, 6].forEach((order) => setGeometry(order, secondColumnX, 0, columnWidth));', 'HBS, DocuSign, Hitachi, and Cisco must remain in the second Selected Work column.');
requireText(home, 'setGeometry(6, secondColumnX, columnTwoFourthTop, columnWidth);', 'Cisco must render after Hitachi in the second Selected Work column.');
requireText(home, 'setGeometry(7, 0, columnOneThirdTop, columnWidth);', 'Memory Lane must render after One Report in the first Selected Work column.');
requireText(styles, '.home-project-memory-lane .home-project-media { aspect-ratio: 16 / 9; }', 'The Memory Lane Selected Work placeholder must remain 16:9.');
requireText(styles, '.memory-lane-hero-placeholder {', 'Memory Lane must expose its dedicated hero placeholder.');
requireText(styles, 'background: #f5f5f5;', 'Memory Lane placeholders must use the approved gray surface.');
requireText(styles, '.memory-lane-project-list .gallery-project {', 'Memory Lane must reuse Gallery chapters inside the case-study surface.');
requireText(motionSystem, "const usesGalleryRevealProfile = group.matches('.gallery-project') || Boolean(group.closest('.case-study'));", 'Memory Lane GalleryProject media must inherit the exact Gallery reveal profile inside the case study.');
if (/background-color/.test(ruleBody('.home-project-card'))
  || styles.includes('.home-project-card:focus-within { background:')
  || styles.includes('.home-project-card:hover { background:')) {
  errors.push('Selected Work tiles must not change background color on hover or focus.');
}
requireText(styles, '.previous-case .line-system-path,\n.next-case .line-system-path { stroke: var(--site-navigation-outline); }', 'Case-study Previous and Next outlines must match the shared header outline.');
requireText(styles, '.previous-case:hover, .next-case:hover { background: var(--ink); color: #fff; }', 'Case-study navigation must retain its black-and-white hover treatment.');
requireCount(figure, 'data-asset-surface', 2, 'Figure image and video branches must each declare their clipping owner.');
requireCount(galleryArtifact, 'data-asset-surface', 2, 'Gallery image and video branches must each declare their clipping owner.');
requireText(styles, '--gallery-composition-inset: 12px;', 'The Gallery composition must retain 12px per interior edge for a 24px media-to-copy gap.');
requireText(styles, '--gallery-band-inline: var(--home-pad);', 'Gallery content must use the right-column interior inset.');
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
requireText(styles, "[data-case-system='true'] .page-shell > main { background: #fff; }", 'Case-study main content must use the requested pure-white surface.');
requireText(styles, '--gallery-band-gray: #f5f5f5;', 'Gallery gray bands must retain the requested #F5F5F5 surface.');
requireText(styles, '.home-gallery > .page-heading {\n  width: 100%;\n  margin-inline: 0;\n  padding-top: 64px;\n  padding-bottom: 160px;', 'The Gallery heading must use the full right column with 64px top and 160px bottom padding.');
requireText(styles, '--caption-size: 16px;', 'All captions must use the approved 16px size token.');
requireText(styles, 'font: 400 var(--caption-size)/var(--caption-leading) var(--cs-heading-font);', 'Case-study captions must inherit the shared caption size token.');
requireText(carousel, '.carousel-caption :global(p:first-child) { display: inline; }', 'Carousel caption text must remain inline with its generated figure number.');
requireText(styles, 'padding: 48px var(--gallery-band-inline) 84px;', 'Every Gallery band must retain 48px top and 84px bottom padding.');
requireText(styles, '.gallery-project:first-child { padding-top: 24px; }', 'The first project must join the Gallery heading without excess spacing.');
requireText(styles, '.gallery-project:nth-child(odd) { background: var(--gallery-band-gray); }', 'Odd Gallery projects must use the gray band surface.');
requireText(styles, '.gallery-project:nth-child(even) { background: #fff; }', 'Even Gallery projects must use pure white bands.');
if (styles.includes('.gallery-project:nth-child(2),') || styles.includes('.gallery-project:nth-child(6),')) {
  errors.push('Gallery even rows must not override their pure-white alternating surface.');
}
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
requireText(styles, '--expressive-ease-out: cubic-bezier(0, 0, 0.3, 1);', 'Every media entrance must retain the Gallery ease-out curve.');
requireText(styles, 'transition: clip-path var(--media-reveal-duration) var(--expressive-ease-out) var(--media-reveal-delay, 0ms);', 'Every media entrance must use the restrained horizontal clip transition.');
requireText(styles, 'clip-path: inset(0 100% 0 0);', 'Every media entrance must begin clipped from the right edge for a left-to-right reveal.');
requireText(styles, "html[data-media-motion-ready='true'] [data-media-reveal][data-media-reveal-ready='true'] [data-media-reveal-rise] {\n  transform: none;\n  transition: none;", 'The shared media entrance must not add vertical rise motion.');
requireText(motionSystem, 'const galleryRevealLeadDelay = 100;', 'Case-study media must reuse the Gallery 100ms lead delay.');
requireText(motionSystem, 'const galleryRevealStagger = 70;', 'Case-study media groups must reuse the Gallery 70ms stagger.');
requireText(motionSystem, "const usesGalleryRevealProfile = group.matches('.gallery-project') || Boolean(group.closest('.case-study'));", 'Gallery and case-study groups must share one sequencing profile.');
requireText(motionSystem, "const leadDelay = target.closest('.case-study') ? galleryRevealLeadDelay : 0;", 'Standalone case-study media must use the Gallery lead delay without changing homepage tile timing.');
requireText(motionSystem, 'window.requestAnimationFrame(() => {\n        window.requestAnimationFrame(() => {', 'Media reveals must retain the two-frame paint safeguard.');
requireText(motionSystem, 'visual instanceof HTMLImageElement && visual.complete && visual.naturalWidth === 0', 'Images that fail before reveal initialization must still fail open.');
requireText(motionSystem, 'visual instanceof HTMLVideoElement && visual.error !== null', 'Videos that fail before reveal initialization must still fail open.');
requireText(motionSystem, "visual.addEventListener('error', markErrorReady, { once: true });", 'Media that fail after reveal initialization must fail open through the shared lifecycle.');
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
requireCount(hbs, 'data-media-unit data-media-reveal', 4, 'Every HBS research-architecture image must own an observable reveal unit.');
requireCount(hbs, 'data-media-visual', 4, 'Every HBS research-architecture image must participate in media readiness.');
requireCount(oneReport, 'data-media-visual', 3, 'Every manually authored One Report image must participate in media readiness.');
requireText(styles, '[data-media-reveal-clip] {\n    opacity: 1 !important;\n    clip-path: inset(0) !important;\n    transition: none !important;', 'Reduced motion must expose case-study media immediately.');

caseStudySources.forEach((source, index) => {
  const rawMediaTags = source.match(/<(?:img|video)\b[^>]*>/gs) || [];
  rawMediaTags.forEach((tag) => {
    if (!tag.includes('data-media-visual') && !tag.includes('/information-filled.svg')) {
      errors.push(`${caseStudySlugs[index]} contains editorial raw media outside the shared reveal readiness contract.`);
    }
  });
});
const ciscoSource = caseStudySources[caseStudySlugs.indexOf('cisco-customer-insights')];
if (ciscoSource.includes('<figure class="platform-evolution" data-media-reveal')) {
  errors.push('The CSS-only Cisco platform diagram must remain outside the image/video reveal lifecycle.');
}
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
