import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { galleryLayouts, galleryMedia, parseGalleryNotes } from '../src/data/gallery.js';

const notes = await readFile(new URL('../src/content/gallery-notes.md', import.meta.url), 'utf8');
const normalizedNotes = notes.replace(/\r\n?/g, '\n')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .join('\n');
const notesHash = createHash('sha256').update(normalizedNotes).digest('hex');
const expectedNotesHash = '5359add6ccd130930e9510824508fcf892429e4a85bb95c9a4a3cb91d8352709';
const expectedProjects = [
  ['Sales Workbench, Palo Alto Networks.', '2025'],
  ['Platform Redesign, Luminoso', '2024'],
  ['Event Experiences, HBS AI Institute', '2024'],
  ['Researcher Outreach Service, HBS AI Institute', '2024'],
  ['Onboarding Redesign, Cisco Panoptica', '2024'],
  ['Platform Redesign, Cisco Ready', '2020'],
  ['NLP Experiences, Cisco Ready', '2019'],
  ['Trebuchet Trials, Microsoft Hacking STEM', '2019'],
  ['Wexel, Premera Blue Cross', '2018'],
];
const projects = parseGalleryNotes(notes);
const errors = [];

if (notesHash !== expectedNotesHash) errors.push('Gallery notes differ from the approved source copy.');
if (projects.length !== expectedProjects.length) errors.push(`Expected 9 projects; found ${projects.length}.`);
expectedProjects.forEach(([title, year], index) => {
  const project = projects[index];
  if (project?.title !== title || project?.year !== year) {
    errors.push(`Project ${index + 1} must remain ${title} - ${year}.`);
  }
});

const artifacts = projects.flatMap((project) => project.media);
if (artifacts.length !== 21) errors.push(`Expected 21 artifacts; found ${artifacts.length}.`);
const sources = artifacts.map((artifact) => artifact.src);
if (new Set(sources).size !== sources.length) errors.push('Gallery artifact sources must be unique.');
const artifactIds = artifacts.map((artifact) => artifact.id);
if (new Set(artifactIds).size !== artifactIds.length) errors.push('Gallery artifact IDs must be unique.');
if (Object.keys(galleryMedia).length !== expectedProjects.length) errors.push('Every project requires one media manifest entry.');
if (Object.keys(galleryLayouts).length !== expectedProjects.length) errors.push('Every project requires one layout recipe.');

const validatePlacement = (placement, label) => {
  if (!placement) {
    errors.push(`Gallery placement is missing: ${label}.`);
    return;
  }
  const { column, span, row, rowSpan = 1 } = placement;
  if (![column, span, row, rowSpan].every(Number.isInteger)) {
    errors.push(`Gallery placement must use integers: ${label}.`);
  }
  if (column < 1 || span < 1 || column + span - 1 > 20 || row < 1 || rowSpan < 1) {
    errors.push(`Gallery placement is outside the 20-column grid: ${label}.`);
  }
};

projects.forEach((project) => {
  validatePlacement(project.layout.info, `${project.title} information`);
  const mediaIds = project.media.map((artifact) => artifact.id).sort();
  const placedIds = Object.keys(project.layout.artifacts).sort();
  if (mediaIds.join('\n') !== placedIds.join('\n')) {
    errors.push(`Gallery layout and media IDs differ for ${project.title}.`);
  }
  placedIds.forEach((id) => validatePlacement(project.layout.artifacts[id], `${project.title} / ${id}`));
});

const referencedAssets = [...new Set(artifacts.flatMap((artifact) => (
  [artifact.src, artifact.poster].filter(Boolean)
)))];
await Promise.all(referencedAssets.map(async (asset) => {
  const file = new URL(`../public${asset}`, import.meta.url);
  try {
    await access(fileURLToPath(file));
  } catch {
    errors.push(`Gallery asset is missing: ${asset}`);
  }
}));

if (errors.length) {
  console.error('Gallery content check failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Gallery content check passed (${projects.length} projects, ${artifacts.length} artifacts, ${referencedAssets.length} assets).`);
