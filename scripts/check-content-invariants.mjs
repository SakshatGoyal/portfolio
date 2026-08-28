import { readFile } from 'node:fs/promises';
import { GLOBAL_DATA_ANALYTICS_TITLE, HBS_AI_INSTITUTE_TITLE } from '../src/data/project-titles.js';
import { CASE_STUDY_SEQUENCE, caseStudyNavigationFor } from '../src/data/project-sequence.js';

const expectedTitle = 'Turning exploratory research into internal tools.';
const expectedHbsTitle = 'Creating an AI-driven research architecture for reliability and novel exploration.';
const sources = await Promise.all([
  readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/about.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/data/panel-navigation.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/work/global-data-analytics.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/layouts/CaseLayout.astro', import.meta.url), 'utf8'),
  ...[
    'panw-ai',
    'hbs-ai-institute',
    'global-data-analytics',
    'one-report',
    'hitachi-energy',
    'cisco-customer-insights',
    'memory-lane',
  ].map((slug) => readFile(new URL(`../src/pages/work/${slug}.astro`, import.meta.url), 'utf8')),
]);
const [homePage, aboutPage, panelNavigation, caseStudy, caseLayout, ...casePages] = sources;
const errors = [];

if (GLOBAL_DATA_ANALYTICS_TITLE !== expectedTitle) {
  errors.push(`The Global Data Analytics title must remain exactly “${expectedTitle}”`);
}
if (HBS_AI_INSTITUTE_TITLE !== expectedHbsTitle) {
  errors.push(`The HBS AI Institute title must remain exactly “${expectedHbsTitle}”`);
}
if (!homePage.includes('title: GLOBAL_DATA_ANALYTICS_TITLE')) {
  errors.push('The homepage project card must use the canonical Global Data Analytics title.');
}
if (!caseStudy.includes('headline={GLOBAL_DATA_ANALYTICS_TITLE}')) {
  errors.push('The Global Data Analytics case study must use the canonical title.');
}
if (!homePage.includes('title: HBS_AI_INSTITUTE_TITLE')) {
  errors.push('The homepage HBS project card must use the canonical HBS title.');
}
if (!casePages[1].includes('headline={HBS_AI_INSTITUTE_TITLE}')) {
  errors.push('The HBS case study must use the canonical HBS title.');
}
if (!homePage.includes('class="home-project-view" data-tape-label>View Project</span>')) {
  errors.push('Every Selected Work tile must expose the shared View Project tape label.');
}
if (!panelNavigation.includes("'I shape design where problems are',")
  || !panelNavigation.includes("'undefined, but commitments aren’t.',")) {
  errors.push('The portfolio panel lead must retain the exact Figma copy and forced two-line structure.');
}
if (!panelNavigation.includes("export const PANEL_SUPPORT = 'Over the last decade, I’ve led research and product efforts among organizations including")) {
  errors.push('The portfolio panel supporting statement must retain the exact Figma biography copy.');
}
const panelComponent = await readFile(new URL('../src/components/PortfolioPanel.astro', import.meta.url), 'utf8');
if (!panelComponent.includes('class="portfolio-panel-support">{PANEL_SUPPORT}</p>')) {
  errors.push('The portfolio panel must render its supporting biography as static text.');
}
if (homePage.includes('MultiscriptNameStrip')) {
  errors.push('The multilingual name strip must not render on the alternate homepage.');
}
if (!aboutPage.includes("const leadLines = ['I shape design where problems are', 'undefined, but commitments aren’t.'];")
  || !aboutPage.includes("const support = 'Over the last decade, I’ve led research and product efforts among organizations including")) {
  errors.push('The minimal About page must reuse the portfolio-panel biography copy.');
}

const expectedPanelProjects = [
  ['/work/panw-ai/', 'Sales Workbench AI'],
  ['/work/hbs-ai-institute/', 'AI Research Architecture'],
  ['/work/global-data-analytics/', 'GDA Dashboards'],
  ['/work/one-report/', 'OneReport'],
  ['/work/hitachi-energy/', 'Partner Portal'],
  ['/work/cisco-customer-insights/', 'Cisco Ready, Customer Insights'],
  ['/work/memory-lane/', 'Memory Lane'],
];
for (const [href, label] of expectedPanelProjects) {
  if (!panelNavigation.includes(`{ href: '${href}', label: '${label}' }`)) {
    errors.push(`The portfolio panel must map “${label}” to ${href}.`);
  }
}

const expectedProjectOrder = [
  ['/work/panw-ai/', '2025-26', 1],
  ['/work/hbs-ai-institute/', '2025', 2],
  ['/work/global-data-analytics/', '2023-24', 3],
  ['/work/one-report/', '2023', 4],
  ['/work/hitachi-energy/', '2021-22', 5],
  ['/work/cisco-customer-insights/', '2020-21', 6],
  ['/work/memory-lane/', '2018-25', 7],
];
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
  'class="memory-lane-hero-placeholder"',
  'parseGalleryNotes(galleryNotes)',
  '<GalleryProject project={project} />',
]) {
  if (!memoryLanePage.includes(expected)) errors.push(`Memory Lane must retain: ${expected}`);
}
if (!memoryLanePage.includes('Memory Lane is a gallery of projects that shaped how I work but do not need a full case study to remain part of my portfolio.')
  || !memoryLanePage.includes('I keep them together because a design practice is not defined only by its largest launches.')) {
  errors.push('Memory Lane must retain the approved two-paragraph editorial introduction.');
}
const projectOrder = [...homePage.matchAll(/\{\s*href: '([^']+)',[\s\S]*?year: '([^']+)',\s*order: (\d+),/g)]
  .slice(0, expectedProjectOrder.length)
  .map(([, href, year, order]) => [href, year, Number(order)]);
if (JSON.stringify(projectOrder) !== JSON.stringify(expectedProjectOrder)) {
  errors.push(`Homepage projects must remain in descending chronology. Found: ${JSON.stringify(projectOrder)}`);
}

if (errors.length) {
  console.error('Content invariant check failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Content invariant check passed.');
