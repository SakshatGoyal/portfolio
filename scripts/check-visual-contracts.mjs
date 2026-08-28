import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

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
  siteFooter,
  lineSystem,
  motionSystem,
  designSystem,
  typographyInventory,
  responsiveVideo,
  playbackController,
  about,
  portfolioPanel,
  caseStudyHeader,
  memoryLaneTrail,
  memoryLaneTrailComponent,
  memoryLaneTrailManifest,
  galleryData,
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
  read('../src/components/SiteFooter.astro'),
  read('../src/scripts/line-system.js'),
  read('../src/scripts/motion-system.js'),
  read('../CASE_STUDY_DESIGN_SYSTEM.md'),
  read('../docs/typography-inventory.md'),
  read('../src/components/ResponsiveVideo.astro'),
  read('../src/scripts/media-playback-controller.js'),
  read('../src/pages/about.astro'),
  read('../src/components/PortfolioPanel.astro'),
  read('../src/components/CaseStudyHeader.astro'),
  read('../src/scripts/memory-lane-trail.js'),
  read('../src/components/MemoryLaneTrail.astro'),
  read('../src/data/memory-lane-trail.js'),
  read('../src/data/gallery.js'),
  Promise.all(caseStudySlugs.map((slug) => read(`../src/pages/work/${slug}.astro`))),
]);
const {
  assetCategory,
  categoryDimensions,
  shuffleAssets,
  staticTrailDecision,
  surfaceAreaScale,
} = await import('../src/scripts/memory-lane-trail.js');
const { memoryLaneTrailAssets } = await import('../src/data/memory-lane-trail.js');

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
requireText(styles, '[data-theme=\'panw\'] { --accent: #2f6759; --case-tint: #d9e8e3; --panw-card-surface: #f5f5f5; }', 'PANW takeaway and metric cards must use the requested #F5F5F5 surface.');
requireText(styles, '--ink: var(--text-primary);', 'The legacy ink token must alias the canonical primary token.');
requireText(styles, '--muted: var(--text-secondary);', 'The legacy muted token must alias the canonical secondary token.');
requireText(styles, '--faint: var(--text-tertiary);', 'The legacy faint token must alias the canonical tertiary token.');
if (contrastRatio('5f787d', 'fafafa') < 4.5) errors.push('Editorial tertiary text must retain at least 4.5:1 contrast against #FAFAFA.');
requireCount(styles, "font-family: 'Manrope';", 4, 'Manrope weights 400, 500, 600, and 700 must remain registered as bundled site fonts.');
requireText(styles, "src: url('/fonts/manrope-600.ttf') format('truetype');\n  font-weight: 600;", 'Manrope SemiBold must resolve to its bundled 600-weight font file.');
if (home.includes('MultiscriptNameStrip') || styles.includes('Manrope Script Fallback') || styles.includes('fonts.gstatic.com')) {
  errors.push('The proven-dead multilingual strip and its external fonts must remain removed.');
}
requireText(styles, ".home-work > .page-heading > h2,\n.home-gallery > .page-heading > h2 {\n  font-family: var(--body-font);\n  font-size: 32px;\n  font-weight: 500;\n}", 'Selected Work and shared Gallery headings must use 32px medium Manrope.');
requireText(styles, ".page-heading > :is(h1, h2) {\n  grid-column: 1 / -1;\n  color: var(--home-ink);\n  font: 400 36px/1.1 'Cabinet Grotesk', Arial, sans-serif;\n  letter-spacing: -.02em;", 'All page headings must use minus-two-percent tracking.');
requireText(styles, "--cs-page-gutter: 32px;\n  --cs-inline: 0px;\n  --cs-media-block-padding: 12px;\n  --cs-media-inset: var(--cs-media-block-padding);", 'All seven case-study routes must separate the 32px page gutter from the 12px media-block padding.');
requireText(styles, '--cs-heading-bottom-gap: 24px;', 'Every case-study heading must retain the shared 24px gap before its hero.');
requireText(styles, 'padding: var(--cs-section-end) var(--cs-inline) var(--cs-heading-bottom-gap);', 'The shared case-study heading rule must own the 24px hero separation.');
if (/\[data-case-system='true'\] \.case-hero\s*\{[^}]*padding[^;]*\s0\s*;/s.test(styles)) {
  errors.push('A shared case-study heading rule must never restore zero bottom padding.');
}
if (styles.includes("[data-theme='memory-lane'][data-case-system='true'] .case-hero")) {
  errors.push('The case-study heading gap must remain shared across all seven routes, not route-specific.');
}
requireText(styles, "[data-case-system='true'] .site-content {\n  min-width: 0;\n  padding-inline: var(--cs-page-gutter);\n}", 'The complete right-hand case-study region must own the 32px page gutter without affecting the portfolio panel.');
requireText(styles, ".memory-lane-project-list .gallery-artifact {\n  padding: var(--cs-media-block-padding);\n}", 'Every Memory Lane image-or-video and caption block must use the shared 12px padding.');
requireText(styles, "[data-case-system='true'] .takeaway-grid {\n  grid-template-columns: 1fr;\n  gap: 24px;\n  padding: var(--cs-media-block-padding);", 'Every takeaway group must retain 12px outer padding at every breakpoint.');
requireText(styles, "[data-case-system='true'] .metric-grid {\n  grid-template-columns: 1fr;\n  gap: 24px;\n  margin-top: 0;\n  padding: var(--cs-media-block-padding);", 'Every metric group must retain 12px outer padding at every breakpoint.');
requireText(styles, "[data-case-system='true'] .takeaway-card {\n  display: flex;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  aspect-ratio: 4 / 3;\n  height: auto;", 'Takeaway cards must remain constrained to their grid track, keep 4:3 as a preferred ratio, and allow their height to grow with content.');
requireText(styles, "height: auto;\n  min-width: 0;\n  min-height: min-content;", 'Takeaway content must contribute its intrinsic height instead of being locked to the ratio box.');
requireText(styles, "display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  aspect-ratio: 4 / 3;\n  height: auto;", 'Metric cards must remain constrained to their grid track, keep 4:3 as a preferred ratio, and allow their label and value to determine a taller height.');
requireText(styles, "[data-case-system='true'] .metric strong {\n  position: static;", 'Metric values must remain in normal flow so they cannot escape the card surface.');
if (home.includes('home-gallery') || home.includes('id="gallery"') || home.includes('GalleryProject') || home.includes('parseGalleryNotes')) {
  errors.push('The homepage must not render or load the retired Gallery section.');
}
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
  '.portfolio-panel-socials',
  '.case-study-header',
  '.case-study-menu__identity',
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
requireText(portfolioPanel, '<a class="portfolio-panel-home" href="/" aria-label="Go to homepage">', 'The shared panel identity must link back to the homepage.');
requireText(layout, '<PortfolioPanel />', 'The portfolio panel must render on every site route.');
requireText(layout, '<div class="site-content">', 'Page content must share the right content column.');
requireText(styles, '--portfolio-panel-width: clamp(340px, 25vw, 460px);', 'The portfolio panel must occupy one quarter of the viewport while remaining between 340px and 460px.');
requireText(styles, 'grid-template-columns: var(--portfolio-panel-width) minmax(0, 1fr);', 'The site grid must use the responsive portfolio panel width.');
requireText(styles, 'position: sticky;\n  top: 0;', 'The desktop portfolio panel must remain pinned while the right column scrolls.');
requireText(styles, '--panel-label-color: #000;\n  --panel-tape-color: #000;', 'The portfolio panel must separate resting label color from its persistent black tape color.');
requireText(styles, 'width: var(--portfolio-panel-width);\n  min-width: var(--portfolio-panel-width);\n  max-width: var(--portfolio-panel-width);', 'The portfolio panel element must match the responsive grid track.');
requireText(styles, 'padding: 32px 32px 64px;', 'The portfolio panel must preserve the fixed Figma outer padding.');
requireText(styles, 'gap: 8px;\n  padding: 0 0 16px 2px;\n  font: 600 clamp(23.652px, calc(6.956522cqi + 4.452174px), 32px)/clamp(23.652px, calc(6.956522cqi + 4.452174px), 32px) var(--body-font);\n  letter-spacing: -.04em;', 'Panel identity must scale proportionally between the 460px and 340px panel widths.');
requireText(styles, '.portfolio-panel-socials {\n  --panel-label-color: #5f787d;', 'The social frame must use the accessible muted resting label color.');
requireText(styles, 'padding-bottom: 32px;\n  color: var(--panel-label-color);\n  font: 500 clamp(14.783px, calc(4.347826cqi + 2.782609px), 20px)/clamp(19.957px, calc(5.869565cqi + 3.756522px), 27px) var(--body-font);', 'Social labels must retain their spacing while scaling with the panel.');
requireText(styles, 'font: 600 clamp(17.739px, calc(5.217391cqi + 3.33913px), 24px)/clamp(24.391px, calc(7.173913cqi + 4.591304px), 33px) var(--body-font);\n  letter-spacing: -.03em;', 'Panel lead typography must scale proportionally with the panel.');
requireText(styles, 'color: #5f787d;\n  font: 500 clamp(14.783px, calc(4.347826cqi + 2.782609px), 20px)/clamp(19.957px, calc(5.869565cqi + 3.756522px), 27px) var(--body-font);\n  letter-spacing: -.03em;', 'Panel supporting copy must preserve its accessible color while scaling with the panel.');
requireText(styles, '--panel-label-color: #5f787d;\n  display: flex;', 'Unselected project links must use accessible tertiary text.');
requireText(styles, 'background: var(--panel-tape-color);\n  color: #fff !important;', 'Selected project links must retain white text on black tape.');
requireText(styles, 'padding-inline-start: 0;', 'Panel project rows must align with the panel content edge without an inset.');
requireText(styles, '.portfolio-panel-navigation a,\n.portfolio-panel-contact { padding: 2px 4px; }', 'Panel label frames must retain fixed 2px by 4px Figma padding.');
requireText(styles, '.portfolio-panel-projects {\n  --panel-label-color: #5f787d;\n  display: flex;\n  flex: none;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;', 'Panel project rows must retain their fixed 8px gap.');
requireText(styles, 'background-image: linear-gradient(#d3ff7d, #d3ff7d);', 'Panel lead must use the updated neon text-bound background highlight.');
requireText(styles, '--panel-highlight-height: 30px;', 'The first panel highlight band must retain the Figma 30px height.');
requireText(styles, '.portfolio-panel-highlight-line:nth-child(2) { --panel-highlight-height: 28px; }', 'The second panel highlight band must retain the Figma 28px height.');
requireText(styles, 'width: max-content;\n  max-width: none;', 'Panel highlight bands must cover their complete non-wrapping text at every panel width.');
requireText(styles, 'box-decoration-break: clone;', 'Panel highlight geometry must derive from the text line box.');
requireText(styles, 'transition: background-size 126ms var(--expressive-ease-in-out);', 'Panel highlights must preserve the 126ms wipe.');
if (styles.includes('.portfolio-panel-highlight-line::before')) {
  errors.push('Panel highlights must not return to fixed pseudo-element shapes.');
}
requireText(styles, 'transition-delay: calc(var(--panel-highlight-index) * 60ms);', 'Panel highlight lines must retain their 60ms stagger.');
requireText(portfolioPanel, 'data-tape-color="var(--panel-tape-color)"', 'Project links must use the black panel tape token independently of their resting text color.');
requireText(styles, '@media (width < 1210px) {\n  .site-layout { display: block; }', 'Below 1210px the portfolio introduction must move above the full-width stage.');
requireText(styles, 'width: 100%;\n    min-width: 0;\n    max-width: none;\n    min-height: 0;\n    max-height: none;\n    padding: 32px 32px 84px;', 'The compact portfolio introduction must fill the stage with 32px top and side padding and 84px bottom padding.');
requireText(styles, 'flex-direction: row;\n    gap: 16px;\n    font: 600 clamp(1px, calc(7.195cqi - 1.3px), 32px)/1 var(--body-font);', 'The compact identity must place the name and title side by side and shrink them together only when the maximum size no longer fits.');
requireText(styles, 'flex: none;\n    white-space: nowrap;', 'Compact identity labels must never wrap independently.');
requireText(styles, '.portfolio-panel-socials,\n  .portfolio-panel-support {\n    font: 500 20px/27px var(--body-font);', 'Compact metadata and supporting copy must use the maximum panel typography.');
requireText(styles, '.portfolio-panel-lead { font: 600 24px/33px var(--body-font); }', 'Compact highlighted copy must use the maximum panel typography.');
requireText(styles, 'display: block;\n    width: 100%;\n    max-width: 100%;', 'Compact highlighted copy must use the full available line width.');
requireText(styles, 'display: inline;\n    width: auto;\n    white-space: normal;', 'Compact highlighted copy segments must form one continuous text flow that wraps naturally.');
requireText(portfolioPanel, "{line}{index < PANEL_LEAD_LINES.length - 1 ? ' ' : ''}", 'Panel lead source segments must retain their natural separating space when displayed inline.');
requireText(styles, '.portfolio-panel-navigation { display: none; }', 'Project navigation must disappear below the 1210px transition.');
requireText(layout, "import CaseStudyHeader from '../components/CaseStudyHeader.astro';", 'The shared layout must load the case-study-only compact header.');
requireText(layout, '{isCaseSystem && <CaseStudyHeader />}', 'Only case-study routes may render the compact case-study header.');
requireText(caseStudyHeader, 'class="case-study-header"', 'Case studies must expose the collapsed compact header.');
requireText(caseStudyHeader, 'aria-haspopup="dialog"', 'The Menu control must identify its full-screen dialog.');
requireText(caseStudyHeader, 'class="behance-viewer__close case-study-menu__close"', 'The expanded menu must reuse the lightbox close-button treatment.');
requireText(caseStudyHeader, '<a class="case-study-menu__link" href="/">Home</a>', 'The expanded menu must include Home.');
requireText(caseStudyHeader, 'PANEL_PROJECTS.map((project)', 'The expanded menu must include every portfolio project.');
requireText(caseStudyHeader, "'is-selected': isProject(project.href)", 'The expanded menu must identify the current project.');
if (caseStudyHeader.includes('PANEL_LEAD_LINES') || caseStudyHeader.includes('PANEL_SUPPORT') || caseStudyHeader.includes('portfolio-panel-intro')) {
  errors.push('The case-study menu must not include the homepage biography.');
}
if (caseStudyHeader.includes("addEventListener('cancel'")) errors.push('The case-study menu must not cancel native dialog dismissal.');
requireText(caseStudyHeader, "if (event.key !== 'Escape') return;", 'The case-study menu must provide reliable Escape dismissal.');
requireText(caseStudyHeader, 'closeCaseStudyMenu();', 'Escape dismissal must use the shared close path and focus restoration.');
requireText(styles, '.case-study-header {\n  position: sticky;\n  z-index: 40;\n  top: 0;', 'The collapsed case-study header must remain sticky.');
requireText(styles, 'width: 100%;\n  min-height: 64px;\n  padding: 16px 32px;', 'The collapsed case-study header must retain the Figma frame height and padding.');
requireText(styles, '.case-study-menu[open] {\n  position: fixed;', 'The expanded case-study menu must cover the viewport.');
requireText(styles, 'padding: 32px 32px 64px;', 'The expanded case-study menu must preserve its Figma padding.');
requireText(styles, "[data-case-system='true'] .portfolio-panel { display: none; }", 'The compact case-study system must replace the biography panel.');
requireText(styles, "[data-case-system='true'] .case-study-header { display: flex; }", 'The case-study header must appear below the 1210px transition.');
const identityIndex = portfolioPanel.indexOf('class="portfolio-panel-home"');
const socialsIndex = portfolioPanel.indexOf('class="portfolio-panel-socials"');
const introIndex = portfolioPanel.indexOf('class="portfolio-panel-intro"');
const navigationIndex = portfolioPanel.indexOf('class="portfolio-panel-navigation"');
if (!(identityIndex >= 0 && identityIndex < socialsIndex && socialsIndex < introIndex && introIndex < navigationIndex)) {
  errors.push('Portfolio panel frames must remain ordered identity, socials, introduction, navigation.');
}
for (const attribute of ['data-tape-frame="true"', 'data-tape-color="var(--panel-tape-color)"', 'data-tape-duration="126"']) {
  requireText(portfolioPanel, attribute, `Panel labels must retain ${attribute}.`);
}
requireText(portfolioPanel, 'data-copy-email={CONTACT_EMAIL}', 'The panel email control must copy the configured address.');
requireText(caseStudyHeader, 'data-copy-email={CONTACT_EMAIL}', 'The compact case-study menu email control must copy the configured address.');
requireText(portfolioPanel, 'href={LINKEDIN_URL}', 'The panel must link to LinkedIn.');
requireText(portfolioPanel, 'href={RESUME_URL}', 'The panel must link to the resume.');
requireText(caseStudyHeader, 'href={LINKEDIN_URL}', 'The compact case-study menu must link to LinkedIn.');
requireText(caseStudyHeader, 'href={RESUME_URL}', 'The compact case-study menu must link to the resume.');
requireText(portfolioPanel, '>copied to clipboard</span>', 'The email control must expose the requested copy confirmation.');
requireText(motionSystem, 'const requestedDuration = Number(label.dataset.tapeDuration);', 'Tape labels must support per-label duration data.');
requireText(motionSystem, "if (label.dataset.tapeColor) line.style.setProperty('--tape-color', label.dataset.tapeColor);", 'Tape labels must support per-label tape colors.');
requireText(motionSystem, "if (label.getAttribute('aria-disabled') === 'true') label.dataset.tapeDisabled = 'true';", 'Tape labels must expose their disabled-link state.');
requireText(styles, '[data-tape-label]:focus-visible .home-tape-line > i,', 'Project and panel labels must expose their tape state to keyboard focus.');
requireText(styles, '[data-tape-label]:hover .home-tape-line > i,', 'Project and panel labels must expose their tape state to fine-pointer hover.');
requireText(styles, '.js .portfolio-panel-highlight-line { background-size: 100% var(--panel-highlight-height) !important; transition: none !important; }', 'Reduced motion must show the completed text highlight without animation.');
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
requireText(styles, 'min-width: 420px;\n  padding: 32px;\n  background: transparent;', 'Selected Work must use the Figma 32px outer frame padding.');
requireText(home, 'const paddingBottom = Number.parseFloat(gridStyles.paddingBottom) || 0;', 'The masonry height must include the Figma bottom frame padding.');
requireText(styles, '@media (max-width: 451px) {\n  .home-project-scroller { overflow-x: clip; overflow-y: visible; }\n  .home-project-grid { width: 100%; min-width: 0; }\n}', 'Narrow project cards must reflow without horizontal panning.');
requireCount(home, 'class="home-project-scroller"', 1, 'Selected Work must have exactly one isolated project scroller.');
if (home.includes('<PageHeading title="Selected Work"') || home.includes("import PageHeading from '../components/PageHeading.astro'")) {
  errors.push('The homepage must not render or import the removed Selected Work heading.');
}
requireText(home, '<h3>{project.name}</h3>', 'Selected Work tiles must retain their project titles.');
if (home.includes('<p>{project.description}</p>')) errors.push('Selected Work tiles must not render project descriptions.');
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
  const markup = home.match(new RegExp(`<div class="${className}"[^>]*>[\\s\\S]*?<\\/div>`))?.[0] || '';
  if (!markup.includes('data-home-project-text-reveal') || /data-body-reveal/.test(markup)) {
    errors.push(`Selected Work ${className} must use the homepage clip lifecycle without joining generic body reveals.`);
  }
  if (motionSystem.includes(`'.${className}'`)) {
    errors.push(`Selected Work ${className} must remain excluded from scroll-triggered reveal registration.`);
  }
}

if (siteFooter.includes('id="contact"')) {
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
requireText(styles, '.home-project-year { color: #5f787d; font-weight: 400; }', 'Selected Work years must use accessible tertiary regular text.');
requireText(styles, 'align-items: center;\n  gap: 16px;\n  font: 400 14px/normal var(--body-font);', 'Every Selected Work client and year must use one consistent 16px gap.');
requireText(styles, 'justify-content: flex-start;\n  gap: 16px;\n  min-width: 0;\n  margin-top: 8px;', 'Selected Work metadata must sit 8px below the project title, retain its internal 16px gaps, and remain width-constrained.');
requireText(styles, '.home-project-copy {\n  display: flex;\n  flex-direction: column;\n  overflow-wrap: break-word;\n}', 'Selected Work copy frames must retain their title reveal wrapper without description spacing.');
if (styles.includes('.home-project-copy p')) errors.push('Selected Work must not retain obsolete description styling.');
requireText(styles, '.home-project-one-report .home-project-media-visual video {\n  width: 100% !important;\n  max-width: none;\n  height: 100% !important;\n  max-height: none;', 'The One Report homepage video must fill its media frame without the shared viewport cap.');
const styleRules = [...styles.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
const ruleBody = (selector) => styleRules.find(([, candidate]) => candidate.trim() === selector)?.[2] || '';
if (/background/.test(ruleBody('.scenario-column')) || !/background\s*:\s*transparent/.test(ruleBody('.scenario-animation'))) {
  errors.push('One Report scenario columns and animations must not restore the obsolete wash background.');
}
requireText(home, 'class="home-project-view" data-tape-label>View Project</span>', 'Selected Work tiles must include the View Project tape label.');
requireText(home, "<a class:list={['home-project-card', project.className]} href={project.href} aria-label={`View ${project.name} case study`}", 'Each Selected Work tile must use a semantic wrapping link so its visible descendants remain pointer targets.');
if (home.includes('home-project-link')) errors.push('Selected Work must not restore a full-card overlay link that intercepts element inspection.');
if (/\.home-project-media\s*\{[^}]*pointer-events\s*:\s*none/s.test(styles)) {
  errors.push('Selected Work media frames must remain available to pointer hit-testing.');
}
requireText(styles, '.home-project-media .playable-media-surface > video { pointer-events: auto; }', 'Homepage videos must remain direct pointer and inspector targets.');
requireText(styles, "[data-line-system='svg'] :focus-visible:not(.home-project-card):not(.carousel-viewport):not([data-carousel-dot]),", 'The global line-system focus reset must preserve card and carousel focus indicators.');
requireText(carousel, '.carousel-viewport:focus-visible { outline: 2px solid currentColor;', 'Carousel viewports must expose a keyboard-only focus ring.');
requireText(carousel, '.carousel-pagination button:focus-visible { outline: 2px solid currentColor;', 'Carousel pagination must expose keyboard-only focus rings.');
requireText(motionSystem, "['View Project', 126]", 'View Project tape motion must match the Team label duration.');
requireText(styles, '.home-project-card:hover .home-project-view .home-tape-line > i {', 'Tile hover must animate the View Project tape.');
requireText(styles, '.home-project-card:focus-within .home-project-view .home-tape-line > i {', 'Tile keyboard focus must animate the View Project tape.');
requireText(styles, '--tape-color: #000;\n  color: transparent;', 'View Project must remain invisible at rest while reserving its metadata space for the black tape.');
requireText(styles, '.home-project-view .home-tape-line > span { color: transparent; }', 'The generated View Project tape text must remain invisible until tile hover or focus.');
requireText(styles, '.home-project-card:hover .home-project-view .home-tape-line > span { color: #fff; }', 'Tile hover must expose View Project in white on black tape.');
requireText(styles, '.home-project-card:focus-within .home-project-view .home-tape-line > span { color: #fff; }', 'Tile keyboard focus must expose View Project in white on black tape.');
requireText(styles, 'display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 0;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;', 'Every homepage project card must constrain its content track to the assigned tile width.');
requireText(styles, '.home-project-meta {\n  display: flex;\n  flex-wrap: wrap;', 'Homepage metadata must wrap instead of imposing an intrinsic width on project media.');
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
requireText(styles, '--home-project-column-gap: 32px;', 'Selected Work columns must use the Figma 32px gutter.');
requireText(styles, '--home-project-row-gap: 32px;', 'Selected Work tiles within each column must use the Figma 32px gap.');
requireText(styles, 'padding: 24px;\n  border: 0;\n  border-radius: 0;\n  background: transparent;', 'Selected Work tiles must use 24px padding and a transparent square surface.');
requireText(styles, '@container stage (width < 1024px) {\n  .home-project-grid {\n    --home-project-column-gap: 16px;\n    --home-project-row-gap: 16px;\n    padding: 16px;', 'Stages below 1024px must use 16px outer padding and project gaps.');
requireText(styles, '.home-project-card { padding: 16px; }', 'Project tiles on stages below 1024px must use 16px internal padding.');
if (styles.includes(".home-project-grid:not([data-home-layout='small']) .home-project-card { padding-inline: 0; }")) {
  errors.push('Desktop Selected Work tiles must not remove their 24px left and right padding.');
}
requireText(home, "getPropertyValue('--home-project-column-gap')", 'Selected Work geometry must read the shared column-gap token.');
requireText(home, "getPropertyValue('--home-project-row-gap')", 'Selected Work geometry must read the shared 32px row-gap token.');
if (home.includes('secondColumnOffset')) errors.push('Selected Work columns must align at the Figma top edge without an HBS offset.');
requireText(home, '[1, 3, 5, 6].forEach((order) => setGeometry(order, firstColumnX, paddingTop, columnWidth));', 'PANW, GDA, Hitachi, and Cisco must form the Figma left column.');
requireText(home, '[2, 4, 7].forEach((order) => setGeometry(order, secondColumnX, paddingTop, columnWidth));', 'HBS, OneReport, and MemoryLane must form the Figma right column.');
requireText(home, 'setGeometry(6, firstColumnX, leftFourthTop, columnWidth);', 'Cisco must render after Hitachi in the left column.');
requireText(home, 'setGeometry(7, secondColumnX, rightThirdTop, columnWidth);', 'MemoryLane must render after OneReport in the right column.');
requireText(styles, '.home-project-memory-lane .home-project-media { aspect-ratio: 3 / 4; }', 'The MemoryLane Selected Work placeholder must use the Figma 3:4 ratio.');
requireText(styles, ".home-project-memory-lane .home-project-placeholder {\n  height: 100%;", 'The live Memory Lane homepage trail must fill the complete 3:4 media surface.');
requireText(home, "import MemoryLaneTrail from '../components/MemoryLaneTrail.astro';", 'The homepage must use the shared Memory Lane trail component.');
requireText(home, '<MemoryLaneTrail', 'The homepage Memory Lane tile must render the live shared trail.');
requireText(home, 'decorative', 'The homepage Memory Lane trail must remain decorative inside its accessible project link.');
requireText(home, 'loading="lazy"', 'The below-fold homepage Memory Lane trail must lazy-load its twelve images.');
requireText(memoryLaneTrailComponent, "data-src={loading === 'lazy' ? asset.src : undefined}", 'The below-fold Memory Lane trail must withhold image URLs until it approaches the viewport.');
requireText(styles, '.home-project-global .home-project-media { aspect-ratio: 1498 / 1124; }', 'The GDA Selected Work media must preserve the exact Figma ratio.');
requireText(styles, '.home-project-one-report .home-project-media { aspect-ratio: 1138 / 2026; }', 'The OneReport Selected Work media must preserve the exact Figma ratio.');
requireText(styles, '.memory-lane-hero-placeholder {', 'Memory Lane must expose its dedicated hero placeholder.');
requireText(styles, '.memory-lane-trail-surface {', 'Both Memory Lane surfaces must inherit one shared visual treatment.');
requireText(styles, "background: #008F98;\n  box-shadow: 0 4px 249.1px 88px rgba(0, 98, 125, .2) inset;", 'The shared Memory Lane trail surface must use the approved teal fill and inset shadow.');
requireCount(styles, 'box-shadow: 0 4px 249.1px 88px rgba(0, 98, 125, .2) inset;', 1, 'The approved Memory Lane inset shadow must have one shared source rule.');
requireText(caseStudySources.at(-1), 'import MemoryLaneTrail', 'The Memory Lane case-study hero must use the shared trail component.');
requireText(caseStudySources.at(-1), 'className="memory-lane-hero-placeholder"', 'The Memory Lane case-study hero must retain its 16:9 surface class.');
requireText(memoryLaneTrailComponent, 'memoryLaneTrailAssets.map((asset, index)', 'The shared cursor trail must render one persistent layer for every manifest asset.');
requireCount(memoryLaneTrailComponent, 'data-memory-lane-trail-visual', 1, 'The shared persistent layer template must expose one trail visual per rendered layer.');
requireText(memoryLaneTrailComponent, "import '../scripts/memory-lane-trail.js';", 'Both Memory Lane surfaces must initialize the same interaction runtime.');
const expectedMemoryLaneTrailAssets = [
  ['Degrees-of-interpretive-depth.png', 'Degrees-of-interpretive-depth.webp', 507, 1200],
  ['IMG_0484.png', 'IMG_0484.webp', 1200, 900],
  ['IMG_0492.png', 'IMG_0492.webp', 900, 1200],
  ['IMG_0589.png', 'IMG_0589.webp', 900, 1200],
  ['IMG_0652.png', 'IMG_0652.webp', 900, 1200],
  ['bob-image-feature.png', 'bob-image-feature.webp', 1200, 674],
  ['cready-redesign-02.png', 'cready-redesign-02.webp', 1200, 675],
  ['hbs-event.png', 'hbs-event.webp', 1200, 758],
  ['luminoso-frame-06.png', 'luminoso-frame-06.webp', 1200, 800],
  ['luminoso-frame-08.png', 'luminoso-frame-08.webp', 1200, 800],
  ['trebuchet-hero-prototype.jpeg', 'trebuchet-hero-prototype.webp', 1200, 800],
  ['wexel-cover-image.png', 'wexel-cover-image.webp', 926, 1200],
];
const actualMemoryLaneTrailAssets = memoryLaneTrailAssets.map(({ source, src, width, height }) => [source, src.split('/').at(-1), width, height]);
if (JSON.stringify(actualMemoryLaneTrailAssets) !== JSON.stringify(expectedMemoryLaneTrailAssets)) {
  errors.push('Memory Lane trail manifest must exactly map the authoritative twelve-file source set to its 2x WebP derivatives.');
}
const publicMemoryLaneTrailAssets = (await readdir(new URL('../public/assets/memory-lane/trail/', import.meta.url))).sort();
if (JSON.stringify(publicMemoryLaneTrailAssets) !== JSON.stringify(expectedMemoryLaneTrailAssets.map(([, output]) => output))) {
  errors.push('Memory Lane public trail assets must contain exactly twelve optimized WebP derivatives with no stale copies.');
}
let optimizedMemoryLaneTrailBytes = 0;
for (const [source, output, width, height] of expectedMemoryLaneTrailAssets) {
  requireCount(memoryLaneTrailManifest, source, 1, `Memory Lane must retain ${source} as an authoritative source reference exactly once.`);
  requireCount(memoryLaneTrailManifest, output, 1, `Memory Lane must reference ${output} exactly once.`);
  requireText(memoryLaneTrailManifest, `width: ${width}, height: ${height}`, `Memory Lane must declare ${output}'s ${width}x${height} optimized intrinsic dimensions.`);
  try {
    const outputUrl = new URL(`../public/assets/memory-lane/trail/${output}`, import.meta.url);
    const [metadata, fileStats] = await Promise.all([sharp(fileURLToPath(outputUrl)).metadata(), stat(outputUrl)]);
    optimizedMemoryLaneTrailBytes += fileStats.size;
    if (metadata.format !== 'webp' || metadata.width !== width || metadata.height !== height) {
      errors.push(`Memory Lane optimized trail asset ${output} must be a ${width}x${height} WebP.`);
    }
  } catch {
    errors.push(`Memory Lane optimized trail asset is missing: ${output}.`);
  }
}
if (optimizedMemoryLaneTrailBytes > 2 * 1024 * 1024) {
  errors.push('The complete optimized Memory Lane trail must remain below 2 MiB.');
}
for (const [source, message] of [
  ['const TRAIL_SPAWN_INTERVAL = 1500;', 'Stationary Memory Lane trail changes must retain the approved 1500ms interval.'],
  ['const TRAIL_SPAWN_DISTANCE = 100;', 'Pointer-driven Memory Lane trail changes must retain the original 100px travel threshold.'],
  ['const TRAIL_DURATION = 400;', 'Memory Lane trail movement must retain the measured 400ms duration.'],
  ["const TRAIL_EASING = 'cubic-bezier(.19, 1, .22, 1)';", 'Memory Lane trail movement must retain the measured snappy-out curve.'],
  ['const TRAIL_LERP = 0.1;', 'Memory Lane trail movement must originate from the measured 10% cursor cache.'],
  ['const TRAIL_REFERENCE_WIDTH = 1200;', 'Memory Lane responsive sizing must use the approved 1200px reference width.'],
  ['const TRAIL_REFERENCE_HEIGHT = 675;', 'Memory Lane responsive sizing must use the approved 675px reference height.'],
  ['const TRAIL_LANDSCAPE_WIDTH = 600;', 'Every landscape trail asset must share a 600px reference width.'],
  ['const TRAIL_PORTRAIT_HEIGHT = 600;', 'Every portrait trail asset must share a 600px reference height.'],
  ['const TRAIL_SQUARE_SIZE = 500;', 'Every square trail asset must use the approved 500px reference size.'],
  ['Math.min(1, Math.sqrt(Math.max(0, width * height) / TRAIL_REFERENCE_AREA))', 'Memory Lane trail sizes must derive from the square root of the available surface-area ratio and cap at one.'],
  ['export const shuffleAssets =', 'Memory Lane trail playback must use a shuffle bag instead of manifest order.'],
  ['await record.image.decode();', 'Memory Lane layers must not become eligible until their image has decoded.'],
  ['if (time - state.lastPlacementTime >= TRAIL_SPAWN_INTERVAL)', 'Stationary Memory Lane placement must wait for the full 1500ms interval.'],
  ['if (placeRecord(record, false, time)) state.lastPlacementTime = time;', 'Every scheduled stationary Memory Lane placement must restart its interval from the exact frame time.'],
  ['if (distance(state.now, state.lastPointerPlacement) >= TRAIL_SPAWN_DISTANCE)', 'Pointer travel must advance the Memory Lane trail independently of the stationary interval.'],
  ['if (placeRecord(record, false, placedAt)) state.lastPlacementTime = placedAt;', 'A pointer-driven Memory Lane placement must restart the stationary interval.'],
  ["record.layer.dataset.trailPlacedAt = String(placedAt);", 'Memory Lane placements must expose their exact runtime timestamp for pacing verification.'],
  ['const resizeObserver = new ResizeObserver', 'Memory Lane trail dimensions must respond to hero resizes.'],
  ["{ rootMargin: '50% 0px' }", 'Deferred Memory Lane trail images must hydrate shortly before their surface reaches the viewport.'],
  ['record.position = clampPosition({', 'Placed Memory Lane layers must reproject their positions when the hero resizes.'],
  ['record.layer.style.transform = `translate(-50%, -50%) translate3d(${record.position.x}px, ${record.position.y}px, 0)`;', 'Resized Memory Lane layers must apply their reprojected position immediately.'],
  ['state.now = clampPosition({', 'Memory Lane pointer destinations must remain within the resized hero surface.'],
  ["trail.addEventListener('pointermove'", 'Memory Lane trail positioning must respond to mouse, pen, and touch pointer movement.'],
]) {
  requireText(memoryLaneTrail, source, message);
}
if (memoryLaneTrail.includes('image.src =') || memoryLaneTrail.includes('setLayerAsset')) {
  errors.push('Memory Lane playback must never replace the source of a visible persistent layer.');
}
for (const [width, height, expected] of [
  [1200, 675, 1],
  [600, 337.5, 0.5],
  [300, 168.75, 0.25],
]) {
  const actual = surfaceAreaScale(width, height);
  if (Math.abs(actual - expected) > 0.000001) {
    errors.push(`Memory Lane surface scale for ${width}x${height} must equal ${expected}; found ${actual}.`);
  }
}
const categoryCases = [
  { width: 2040, height: 4827, category: 'portrait' },
  { width: 2350, height: 2350, category: 'square' },
  { width: 4356, height: 2448, category: 'landscape' },
];
for (const { width, height, category } of categoryCases) {
  if (assetCategory(width, height) !== category) {
    errors.push(`${width}x${height} must classify as ${category}.`);
  }
}
for (const scale of [1, 0.5, 0.25]) {
  const portrait = categoryDimensions(2040, 4827, scale);
  const square = categoryDimensions(2350, 2350, scale);
  const landscapes = [
    categoryDimensions(4356, 2448, scale),
    categoryDimensions(4320, 2880, scale),
    categoryDimensions(3000, 1232, scale),
  ];
  if (Math.abs(portrait.height - (600 * scale)) > 0.000001) errors.push(`Portrait height must equal ${600 * scale}px at scale ${scale}.`);
  if (Math.abs(square.height - (500 * scale)) > 0.000001) errors.push(`Square height must equal ${500 * scale}px at scale ${scale}.`);
  if (landscapes.some(({ width }) => Math.abs(width - (600 * scale)) > 0.000001)) errors.push(`Landscape widths must equal ${600 * scale}px at scale ${scale}.`);
  const maxLandscapeHeight = Math.max(...landscapes.map(({ height }) => height));
  if (!(maxLandscapeHeight < square.height && square.height < portrait.height)) {
    errors.push(`Square height must remain between landscape and portrait heights at scale ${scale}.`);
  }
}
const manifestForShuffle = Array.from({ length: 12 }, (_, index) => ({ src: `asset-${index}` }));
const seededRandom = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const firstCycle = shuffleAssets(manifestForShuffle, '', seededRandom(7));
const secondCycle = shuffleAssets(manifestForShuffle, firstCycle.at(-1).src, seededRandom(13));
if (new Set(firstCycle.map(({ src }) => src)).size !== 12 || new Set(secondCycle.map(({ src }) => src)).size !== 12) {
  errors.push('Every Memory Lane shuffle cycle must contain all 12 assets exactly once.');
}
if (firstCycle.map(({ src }) => src).join('|') === secondCycle.map(({ src }) => src).join('|')) {
  errors.push('Successive Memory Lane shuffle cycles must not retain manifest order.');
}
if (secondCycle[0].src === firstCycle.at(-1).src) {
  errors.push('Memory Lane shuffle cycles must not repeat an asset across their boundary.');
}
if (staticTrailDecision([{ ready: true, failed: false }], 0).status !== 'ready'
  || staticTrailDecision([{ ready: false, failed: true }], 0).status !== 'unavailable'
  || staticTrailDecision([{ ready: false, failed: false }], 300).status !== 'unavailable') {
  errors.push('Reduced-motion Memory Lane playback must settle when ready, failed, or bounded by its frame budget.');
}
requireText(galleryProject, "const infoPlacement = infoFirst ? { ...project.layout.info, row: 1 } : project.layout.info;", 'Memory Lane project information must occupy the first chapter row.');
requireText(galleryProject, "? { ...project.layout.artifacts[lead.id], row: 2 }", 'Memory Lane lead media must follow project information in the second chapter row.');
requireText(galleryProject, "<span class=\"gallery-project-number\"> — {formattedProjectNumber}</span>", 'Memory Lane project titles must use the approved title-first number suffix.');
requireText(styles, 'padding: var(--cs-section-end) 0 40px;', 'Narrow Memory Lane project information must retain responsive top spacing and 40px bottom spacing.');
requireText(styles, 'padding-top: 280px;\n    padding-bottom: 40px;', 'Desktop Memory Lane project information must use 280px top and 40px bottom spacing.');
requireText(styles, '.memory-lane-trail-layers {\n  display: block;', 'Memory Lane trail layers must remain available below the former 768px cutoff.');
if (styles.includes(".memory-lane-hero-placeholder[data-trail-static='true'] .memory-lane-trail-layer:first-child {\n  top: 50%;\n  left: 50%;\n  width:")) {
  errors.push('Reduced-motion Memory Lane sizing must come from the shared surface-area formula, not a fixed CSS width.');
}
requireText(styles, 'padding: 0 var(--gallery-band-inline);', 'Memory Lane chapters must not stack an extra section-end gap between vertical media.');
requireText(styles, '.memory-lane-project-list .gallery-project:last-child {\n  padding-bottom: var(--cs-section-end);', 'The final Memory Lane chapter must retain its closing case-study space.');
requireText(styles, '.memory-lane-project-list .gallery-project {\n    row-gap: 0;', 'Desktop Memory Lane media rows must use Palo Alto’s zero-gap stack logic.');
requireText(styles, ".memory-lane-project-list .gallery-artifact[data-gallery-role='support'] {\n    margin-top: 0;", 'Memory Lane supporting media must not add a private vertical margin.');
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
requireText(styles, "[data-case-system='true'] .page-shell,\n[data-case-system='true'] .site-content,\n[data-case-system='true'] .site-content > main,\n[data-case-system='true'] .case-study { background: #fff; }", 'Every case-study shell, content column, main, and article surface must use pure white.');
requireText(styles, "[data-case-system='true'] {\n  --canvas: #fff;\n  --cs-canvas: #fff;", 'All seven case-study routes must override the shared canvas tokens to pure white.');
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
requireCount(galleryArtifact, "data-viewport-media-inset={viewportFit ? '140' : undefined}", 2, 'Viewport-fitted Gallery frames must reserve navigation and caption clearance.');
requireCount(galleryArtifact, "data-container-media-frame={!viewportFit ? '' : undefined}", 2, 'Gallery artifacts must support an explicit full-width container mode.');
requireText(galleryData, "video('panoptica-01', 1919, 1654, 'Guided explanations teaching users what setup enables.', 'support', false)", 'The Panoptica explanation video must opt out of viewport fitting.');
requireText(galleryData, "'panoptica-01': place(1, 20, 3)", 'The Panoptica explanation video must span the complete 20-column content grid.');
requireText(layout, 'const viewportInsetFor = (frame) => {', 'Viewport-safe media must support frame-specific clearance.');
requireText(styles, '--media-reveal-duration: 800ms;', 'Every media entrance must use the shared 800ms duration.');
requireText(styles, '--expressive-ease-out: cubic-bezier(0, 0, 0.3, 1);', 'Every media entrance must retain the Gallery ease-out curve.');
requireText(styles, 'transition: clip-path var(--media-reveal-duration) var(--expressive-ease-out) var(--media-reveal-delay, 0ms);', 'Every media entrance must use the restrained horizontal clip transition.');
requireText(styles, 'clip-path: inset(0 100% 0 0);', 'Every media entrance must begin clipped from the right edge for a left-to-right reveal.');
requireText(styles, "html[data-media-motion-ready='true'] [data-media-reveal][data-media-reveal-ready='true'] [data-media-reveal-rise] {\n  transform: none;\n  transition: none;", 'The shared media entrance must not add vertical rise motion.');
requireText(motionSystem, 'const galleryRevealLeadDelay = 100;', 'Case-study media must reuse the Gallery 100ms lead delay.');
requireText(motionSystem, 'const galleryRevealStagger = 70;', 'Case-study media groups must reuse the Gallery 70ms stagger.');
requireText(motionSystem, 'const homepageRevealStagger = 90;', 'Homepage project units must reuse the Motion Design V1 90ms stagger.');
requireText(motionSystem, 'const homepageRevealDuration = 1500;', 'Homepage media and text must use the Tobias-style 1500ms reveal duration.');
requireText(motionSystem, 'const homepageCopyDelay = 300;', 'Homepage copy must begin 300ms after its own media starts.');
requireText(motionSystem, 'const target = homepageTargets[nextHomepageTargetIndex];', 'Homepage media must be consumed in chronological DOM order rather than readiness order.');
requireText(motionSystem, 'window.setTimeout(() => revealHomeText(copy), homepageCopyDelay);', 'Each project copy must overlap its own media without waiting for other projects.');
requireText(motionSystem, 'window.setTimeout(() => revealHomeText(meta), homepageCopyDelay + homepageRevealStagger);', 'Homepage metadata must follow its copy by the shared 90ms cadence.');
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
requireText(styles, '--home-project-reveal-duration: 1500ms;', 'Homepage reveals must use the Tobias-style 1500ms duration without changing the shared media duration.');
requireText(styles, '--home-project-reveal-ease: cubic-bezier(0.19, 1, 0.22, 1);', 'Homepage reveals must use the CSS Expo-style ease-out curve.');
requireText(styles, "html[data-media-motion-ready='true'] [data-home-project-media-reveal][data-media-reveal-ready='true'] [data-media-reveal-clip] {\n  transition-duration: var(--home-project-reveal-duration);\n  transition-timing-function: var(--home-project-reveal-ease);", 'Homepage media must override only the shared reveal timing profile.');
requireText(styles, "html[data-media-motion-ready='true'] [data-home-project-text-reveal] {\n  opacity: 1;\n  clip-path: inset(0 100% 0 0);\n  transition: clip-path var(--home-project-reveal-duration) var(--home-project-reveal-ease);", 'Homepage text must use the same Tobias-style horizontal clip reveal as homepage media.');
requireText(styles, "[data-home-project-text-reveal] {\n    opacity: 1 !important;\n    clip-path: inset(0) !important;\n    transition: none !important;", 'Reduced motion must expose homepage project text immediately.');
requireText(galleryProject, 'const [lead, ...supports] = project.media;', 'Gallery projects must render the lead asset separately from supporting media.');
if (!(galleryProject.indexOf('class="gallery-project-info"') < galleryProject.indexOf('<GalleryArtifact\n    {...lead}')
  && galleryProject.indexOf('<GalleryArtifact\n    {...lead}') < galleryProject.indexOf('{supports.map'))) {
  errors.push('Memory Lane DOM order must remain information row, lead media, then supporting media.');
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
    if (!tag.includes('data-media-visual')
      && !tag.includes('data-memory-lane-trail-visual')
      && !tag.includes('/information-filled.svg')) {
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
requireText(typography, 'if (window.innerWidth <= 400) return;', 'Widow prevention must yield to 320px and 400%-zoom reflow.');
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
