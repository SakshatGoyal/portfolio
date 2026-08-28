import { readFile } from 'node:fs/promises';
import { LINE_TOPOLOGY } from '../src/scripts/line-system.js';

const [css, layout, runtime, galleryProject, galleryArtifact] = await Promise.all([
  readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8'),
  readFile(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/scripts/line-system.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/GalleryProject.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/GalleryArtifact.astro', import.meta.url), 'utf8'),
]);

const errors = [];
const ids = new Set();
const selectors = new Set();

const register = (kind, spec) => {
  if (!spec.id || !spec.selector || !spec.token || !spec.direction) {
    errors.push(`${kind} entries require an id, selector, token, and direction.`);
    return;
  }
  if (ids.has(spec.id)) errors.push(`Duplicate topology id: ${spec.id}`);
  ids.add(spec.id);
  if (!LINE_TOPOLOGY.tokens[spec.token]) errors.push(`Unknown token "${spec.token}" on ${spec.id}.`);
  if (selectors.has(spec.selector)) errors.push(`Duplicate managed selector: ${spec.selector}`);
  selectors.add(spec.selector);
};

LINE_TOPOLOGY.localBoxes.forEach((spec) => register('localBoxes', spec));
LINE_TOPOLOGY.underlines.forEach((spec) => register('underlines', spec));
LINE_TOPOLOGY.metadataRules.forEach((spec) => {
  register('metadataRules', spec);
  if (!spec.rowSelector || !spec.widthSource) {
    errors.push('Metadata divider entries require rowSelector and widthSource geometry sources.');
  }
});

for (const [name, token] of Object.entries(LINE_TOPOLOGY.tokens)) {
  if (!token.css || !Number.isFinite(token.width) || token.width <= 0) {
    errors.push(`Line token "${name}" requires a CSS source and positive width.`);
  }
}

const forbiddenLegacy = [
  [/(?:\.team-label|\.monogram|\.carousel-pagination[^,{]*)::(?:before|after)/, 'Managed interaction lines must not use pseudo-elements.'],
  [/(?:\.problem-layout\s*>\s*p|\.problem-list(?:\s+li)?|\.platform-contributions\s*>\s*div)::(?:before|after)\s*\{[^}]*\b(?:width|height):\s*(?:1px|2px)/s, 'Managed connectors must not use one-pixel pseudo-elements.'],
  [/\.home-project-column/, 'The obsolete fixed-column homepage layout must not return.'],
  [/data-home-layout=['"](?:large|xlarge)['"]/, 'The homepage must not reintroduce obsolete layout states.'],
];

for (const [pattern, message] of forbiddenLegacy) {
  if (pattern.test(css)) errors.push(message);
}

const visibleLineValue = (value) => !/^(?:0(?:px)?|none|transparent)(?:\s|$)/.test(value.trim());
const blocks = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
for (const [, selector, body] of blocks) {
  const declarations = [...body.matchAll(/(border(?:-(?:top|right|bottom|left|inline|block))?|outline)\s*:\s*([^;}]+)/g)];
  if (!declarations.some(([, , value]) => visibleLineValue(value))) continue;
  const isCardFocusOutline = selector.trim() === '.home-project-card:focus-visible'
    && declarations.every(([, property]) => property === 'outline');
  if (/\.home-project-(?:grid|card)/.test(selector) && !isCardFocusOutline) {
    errors.push('Homepage card/grid lines must come from topology geometry.');
  }
  if (/\[data-case-system=['"]true['"]\]/.test(selector)) {
    errors.push('Case-system structural lines must not use borders or outlines.');
  }
}

if (!layout.includes("import { initLineSystem } from '../scripts/line-system.js'")) {
  errors.push('BaseLayout must initialize the shared line system.');
}
if (!runtime.includes("path.setAttribute('pathLength', '1')") || !runtime.includes("rect.setAttribute('pathLength', '1')")) {
  errors.push('Open and closed line paths must normalize pathLength to 1.');
}
if (!runtime.includes('window.devicePixelRatio') || !runtime.includes('snapCoordinate')) {
  errors.push('Line geometry must snap to physical pixels.');
}
if (!runtime.includes('window.__lineTopology')) {
  errors.push('Runtime topology diagnostics must remain exposed for verification.');
}
for (const trigger of ['ResizeObserver', 'document.fonts?.ready', "'loadedmetadata'", "'mediachange'", "'toggle'", "'scroll'"]) {
  if (!runtime.includes(trigger)) errors.push(`Geometry recalculation trigger is missing: ${trigger}`);
}
if (!runtime.includes('line-system-debug-label') || !runtime.includes('line-system-debug-anchor')) {
  errors.push('The optional debug view must expose anchors, segment labels, directions, and junction status.');
}

const forbiddenStructuralRuntime = [
  'renderHomeTopology',
  'renderCaseTopology',
  'drawGroupSeams',
  'home.rail.',
  'home.grid.',
  'home.gallery.project.',
  'home.gallery.composition.',
  'home.header.bottom',
  'home.hero.bottom',
  'home.work.heading.bottom',
  'home.gallery.heading.bottom',
  'home.footer.top',
  'case.rail.',
  'case.boundary.',
  'case.header.',
  'group.${',
  'data-line-layout-rule',
  'lineReveal',
];
for (const family of forbiddenStructuralRuntime) {
  if (runtime.includes(family)) errors.push(`Removed structural scaffold family is still present: ${family}`);
}
for (const requiredRuntime of ['renderPlatformConnectors(rootRect)', 'renderLocalLayers()', 'renderFocus()']) {
  if (!runtime.includes(requiredRuntime)) errors.push(`Functional line rendering must remain enabled: ${requiredRuntime}`);
}
if (!runtime.includes('renderMetadataRules(rootRect)')) {
  errors.push('Case-study metadata dividers must remain owned by the shared line runtime.');
}
for (const lifecycleContract of [
  'window.__lineSystemDispose?.()',
  'removeLineSystemArtifacts()',
  'controller.abort()',
  'resizeObserver.disconnect()',
]) {
  if (!runtime.includes(lifecycleContract)) errors.push(`Line-system lifecycle cleanup is missing: ${lifecycleContract}`);
}
for (const attribute of ['data-gallery-column', 'data-gallery-row-span']) {
  if (!galleryProject.includes(attribute) && !galleryArtifact.includes(attribute)) {
    errors.push(`Gallery topology metadata is missing: ${attribute}`);
  }
}

if (errors.length) {
  console.error('Line topology check failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Line topology check passed (${ids.size} retained component families).`);
