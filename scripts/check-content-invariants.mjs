import { readFile } from 'node:fs/promises';
import { GLOBAL_DATA_ANALYTICS_TITLE } from '../src/data/project-titles.js';

const expectedTitle = 'Turning exploratory research to internal tools.';
const sources = await Promise.all([
  readFile(new URL('../src/pages/index.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/work/global-data-analytics.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/scripts/motion-system.js', import.meta.url), 'utf8'),
]);
const [homePage, caseStudy, motionSystem] = sources;
const errors = [];

if (GLOBAL_DATA_ANALYTICS_TITLE !== expectedTitle) {
  errors.push(`The Global Data Analytics title must remain exactly “${expectedTitle}”`);
}
if (!homePage.includes('title: GLOBAL_DATA_ANALYTICS_TITLE')) {
  errors.push('The homepage project card must use the canonical Global Data Analytics title.');
}
if (!caseStudy.includes('headline={GLOBAL_DATA_ANALYTICS_TITLE}')) {
  errors.push('The Global Data Analytics case study must use the canonical title.');
}
if (!motionSystem.includes("['Turning exploratory research to internal tools.', 176]")) {
  errors.push('The tape timing map must retain the punctuated final title line.');
}

const expectedProjectOrder = [
  ['/work/panw-ai/', '2025–26', 1],
  ['/work/hbs-ai-institute/', '2025', 2],
  ['/work/global-data-analytics/', '2023–24', 3],
  ['/work/one-report/', '2023', 4],
  ['/work/hitachi-energy/', '2022', 5],
  ['/work/cisco-customer-insights/', '2020–21', 6],
];
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
