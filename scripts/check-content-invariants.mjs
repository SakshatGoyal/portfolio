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

if (errors.length) {
  console.error('Content invariant check failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Content invariant check passed.');
