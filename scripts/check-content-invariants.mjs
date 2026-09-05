import { readFile } from 'node:fs/promises';
import { GLOBAL_DATA_ANALYTICS_TITLE, HBS_AI_INSTITUTE_TITLE } from '../src/data/project-titles.js';
import { CASE_STUDY_SEQUENCE, caseStudyNavigationFor } from '../src/data/project-sequence.js';
import { PROJECTS, projectForRoute } from '../src/data/projects.js';
import { PANEL_PROJECTS } from '../src/data/panel-navigation.js';

const expectedTitle = 'Turning exploratory research into internal tools.';
const expectedHbsTitle = 'Creating an AI-driven research architecture for reliability and novel exploration.';
const sources = await Promise.all([
  readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/about.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/panel-navigation.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/work/global-data-analytics.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/layouts/CaseLayout.astro', import.meta.url), 'utf8'),
  ...[
    'sales-workbench-ai',
    'ai-research-architecture',
    'global-data-analytics',
    'one-report',
    'hitachi-energy-partner-portal',
    'cisco-customer-insights',
    'memory-lane',
  ].map((slug) => readFile(new URL(`../src/pages/work/${slug}.astro`, import.meta.url), 'utf8')),
]);
const [homePage, aboutPage, panelNavigation, caseStudy, caseLayout, ...casePages] = sources;
const redirects = await readFile(new URL('../public/_redirects', import.meta.url), 'utf8');
const errors = [];

if (GLOBAL_DATA_ANALYTICS_TITLE !== expectedTitle) {
  errors.push(`The Global Data Analytics title must remain exactly “${expectedTitle}”`);
}
if (HBS_AI_INSTITUTE_TITLE !== expectedHbsTitle) {
  errors.push(`The HBS AI Institute title must remain exactly “${expectedHbsTitle}”`);
}
if (!caseStudy.includes('headline={GLOBAL_DATA_ANALYTICS_TITLE}')) {
  errors.push('The Global Data Analytics case study must use the canonical title.');
}
if (!homePage.includes('const projects = PROJECTS.map((project) => ({')) {
  errors.push('The homepage must derive project identity and presentation from the canonical registry.');
}
if (!casePages[1].includes('headline={HBS_AI_INSTITUTE_TITLE}')) {
  errors.push('The HBS case study must use the canonical HBS title.');
}
if (!homePage.includes('class="home-project-view" data-tape-label>View Project</span>')) {
  errors.push('Every Selected Work tile must expose the shared View Project tape label.');
}
if (!homePage.includes("<a class:list={['home-project-card', project.className]} href={project.href}")
  || homePage.includes('home-project-link')) {
  errors.push('Homepage project tiles must use inspectable wrapping links without a full-card overlay.');
}
if (homePage.includes('<p>{project.description}</p>')) {
  errors.push('Selected Work tiles must not render project descriptions.');
}
if (!panelNavigation.includes("'I shape design where problems are',")
  || !panelNavigation.includes("'undefined, but commitments aren’t.',")) {
  errors.push('The portfolio panel lead must retain the exact Figma copy and forced two-line structure.');
}
if (!panelNavigation.includes("export const PANEL_SUPPORT = 'Over the last decade, I’ve led research and product efforts at Palo Alto Networks, Harvard Business School, DocuSign, Hitachi, and Cisco.';")) {
  errors.push('The portfolio panel supporting statement must retain the approved biography copy.');
}
const panelComponent = await readFile(new URL('../src/components/PortfolioPanel.astro', import.meta.url), 'utf8');
if (!panelComponent.includes('class="portfolio-panel-support">{PANEL_SUPPORT}</p>')) {
  errors.push('The portfolio panel must render its supporting biography as static text.');
}
if (homePage.includes('MultiscriptNameStrip')) {
  errors.push('The multilingual name strip must not render on the alternate homepage.');
}
for (const text of ['I shape design where problems seem uncertain, but deadlines do not.', 'I have a track record of owning and delivering on design for new initiatives, long-horizon revamps, and organizational shifts.', 'Recent Experience', 'SKILLS', 'Education']) {
  if (!aboutPage.includes(text)) errors.push(`The About page must preserve the resume text: ${text}`);
}
if (aboutPage.includes('sakshat.goyal@gmail.com') || aboutPage.includes('415 - 308 - 7597') || aboutPage.includes('sakshat-goyal.com') || /<img\b/.test(aboutPage)) {
  errors.push('The About resume must exclude contact details and an actual portrait.');
}

const expectedPanelProjects = [
  ['/work/sales-workbench-ai/', 'Sales Workbench AI'],
  ['/work/ai-research-architecture/', 'AI Research Architecture'],
  ['/work/global-data-analytics/', 'Global Data Analytics'],
  ['/work/one-report/', 'OneReport'],
  ['/work/hitachi-energy-partner-portal/', 'Hitachi Energy Partner Portal'],
  ['/work/cisco-customer-insights/', 'Cisco Customer Insights'],
  ['/work/memory-lane/', 'Memory Lane'],
];
const expectedClients = ['Palo Alto Networks', 'Harvard Business School AI Institute', 'DocuSign', 'DocuSign', 'Hitachi Energy', 'Cisco Systems', 'Multiple'];
const expectedMetadataTitles = [
  'Sales Workbench AI — Palo Alto Networks | Sākshāt Goyal',
  'AI Research Architecture — HBS AI Institute | Sākshāt Goyal',
  'Global Data Analytics — DocuSign | Sākshāt Goyal',
  'OneReport — DocuSign | Sākshāt Goyal',
  'Hitachi Energy Partner Portal | Sākshāt Goyal',
  'Cisco Customer Insights | Sākshāt Goyal',
  'Memory Lane | Sākshāt Goyal',
];
if (JSON.stringify(PANEL_PROJECTS.map(({ href, label }) => [href, label])) !== JSON.stringify(expectedPanelProjects)) {
  errors.push(`The portfolio panel must use the canonical project names and routes. Found: ${JSON.stringify(PANEL_PROJECTS)}`);
}
if (JSON.stringify(PROJECTS.map(({ client }) => client)) !== JSON.stringify(expectedClients)) errors.push('Project clients do not match the approved registry mapping.');
if (JSON.stringify(PROJECTS.map(({ metadata }) => metadata.title)) !== JSON.stringify(expectedMetadataTitles)) errors.push('Project metadata titles do not match the approved registry mapping.');

const expectedProjectOrder = [
  ['/work/sales-workbench-ai/', '2025-26', 1],
  ['/work/ai-research-architecture/', '2025', 2],
  ['/work/global-data-analytics/', '2023-24', 3],
  ['/work/one-report/', '2023', 4],
  ['/work/hitachi-energy-partner-portal/', '2021-22', 5],
  ['/work/cisco-customer-insights/', '2020-21', 6],
  ['/work/memory-lane/', '2019-Present', 7],
];
const actualProjectOrder = PROJECTS.map(({ route, homepage, sequence }) => [route, homepage.year, sequence]);
if (JSON.stringify(actualProjectOrder) !== JSON.stringify(expectedProjectOrder)) {
  errors.push(`Homepage projects must remain in descending chronology. Found: ${JSON.stringify(actualProjectOrder)}`);
}
const requiredRegistryFields = ['id', 'label', 'route', 'client', 'metadata', 'homepage', 'sequence', 'mediaOwner', 'legacyRoutes'];
for (const project of PROJECTS) {
  for (const field of requiredRegistryFields) {
    if (!(field in project)) errors.push(`${project.id ?? 'Unknown project'} is missing registry field “${field}”.`);
  }
  if (!project.route.startsWith('/work/') || !project.route.endsWith('/')) errors.push(`${project.id} has a noncanonical route: ${project.route}`);
  if (projectForRoute(project.route) !== project) errors.push(`${project.route} does not resolve to its canonical registry entry.`);
  for (const legacyRoute of project.legacyRoutes) {
    if (projectForRoute(legacyRoute) !== project) errors.push(`${legacyRoute} does not resolve to ${project.id}.`);
  }
}
for (const field of ['id', 'route', 'mediaOwner', 'sequence']) {
  if (new Set(PROJECTS.map((project) => project[field])).size !== PROJECTS.length) errors.push(`Project registry field “${field}” must be unique.`);
}
const expectedLegacyRoutes = {
  'sales-workbench-ai': ['/work/panw-ai/'],
  'ai-research-architecture': ['/work/hbs-ai-institute/'],
  'hitachi-energy-partner-portal': ['/work/hitachi-energy/'],
};
for (const project of PROJECTS) {
  const expected = expectedLegacyRoutes[project.id] ?? [];
  if (JSON.stringify(project.legacyRoutes) !== JSON.stringify(expected)) {
    errors.push(`${project.id} has unexpected legacy routes: ${JSON.stringify(project.legacyRoutes)}`);
  }
}
const expectedRedirects = [
  '/work/panw-ai /work/sales-workbench-ai/ 308',
  '/work/panw-ai/ /work/sales-workbench-ai/ 308',
  '/work/hbs-ai-institute /work/ai-research-architecture/ 308',
  '/work/hbs-ai-institute/ /work/ai-research-architecture/ 308',
  '/work/hitachi-energy /work/hitachi-energy-partner-portal/ 308',
  '/work/hitachi-energy/ /work/hitachi-energy-partner-portal/ 308',
];
const redirectLines = redirects.trim().split('\n').map((line) => line.trim()).filter(Boolean);
if (JSON.stringify(redirectLines) !== JSON.stringify(expectedRedirects)) {
  errors.push(`Legacy redirects must be direct 308 rules for both slash forms. Found: ${JSON.stringify(redirectLines)}`);
}
const expectedCaseStudySequence = expectedProjectOrder.map(([href]) => href);
if (JSON.stringify(CASE_STUDY_SEQUENCE) !== JSON.stringify(expectedCaseStudySequence)) {
  errors.push(`Canonical case-study navigation must follow homepage chronology. Found: ${JSON.stringify(CASE_STUDY_SEQUENCE)}`);
}
for (let index = 0; index < expectedCaseStudySequence.length; index += 1) {
  const route = expectedCaseStudySequence[index];
  const expectedPrevious = expectedCaseStudySequence[(index - 1 + expectedCaseStudySequence.length) % expectedCaseStudySequence.length];
  const expectedNext = expectedCaseStudySequence[(index + 1) % expectedCaseStudySequence.length];
  const actual = caseStudyNavigationFor(route);
  if (actual.previousHref !== expectedPrevious || actual.nextHref !== expectedNext) {
    errors.push(`${route} must navigate from ${expectedPrevious} to ${expectedNext}. Found: ${JSON.stringify(actual)}`);
  }
}
if (!caseLayout.includes('caseStudyNavigationFor(Astro.url.pathname)')) {
  errors.push('CaseLayout must derive previous/next links from the canonical project sequence.');
}
if (casePages.some((page) => page.includes('previousHref=') || page.includes('nextHref='))) {
  errors.push('Individual case-study pages must not override canonical previous/next navigation.');
}
const memoryLanePage = casePages.at(-1);
for (const expected of [
  'headline="Memory Lane"',
  'theme="memory-lane"',
  'showMeta={false}',
  'className="memory-lane-hero-placeholder"',
  'parseGalleryNotes(galleryNotes)',
  '<GalleryProject project={project} infoFirst projectNumber={index + 1} />',
]) {
  if (!memoryLanePage.includes(expected)) errors.push(`Memory Lane must retain: ${expected}`);
}
if (!memoryLanePage.includes('Memory Lane gathers projects that still shape how I work, even if they do not need a full case study.')
  || !memoryLanePage.includes('I keep them here because their experiments, constraints, and lessons still influence how I approach new work.')) {
  errors.push('Memory Lane must retain the humanized two-paragraph editorial introduction.');
}
const expectedEditorialHeadlines = [
  'headline="Designing AI experiences for deep analysis and traceability."',
  'headline={HBS_AI_INSTITUTE_TITLE}',
  'headline={GLOBAL_DATA_ANALYTICS_TITLE}',
  'headline="Designing a data product around an executive’s inquisitive moments."',
  'headline="Designing a B2B buying experience for Hitachi\'s sales partners."',
  'headline="Designing Customer Insights and extending it with Upsell Opportunities."',
  'headline="Memory Lane"',
];
for (let index = 0; index < casePages.length; index += 1) {
  if (!casePages[index].includes(expectedEditorialHeadlines[index])) {
    errors.push(`Case study ${PROJECTS[index].id} must preserve its editorial headline.`);
  }
}

if (errors.length) {
  console.error('Content invariant check failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Content invariant check passed.');
