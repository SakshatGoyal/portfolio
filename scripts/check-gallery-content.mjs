import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { galleryMedia, parseGalleryNotes } from '../src/data/gallery.js';

const notes = await readFile(new URL('../src/content/gallery-notes.md', import.meta.url), 'utf8');
const normalizedNotes = notes.replace(/\r\n?/g, '\n')
  .split('\n')
  .map((line) => line.trim())
  .filter(Boolean)
  .join('\n');
const notesHash = createHash('sha256').update(normalizedNotes).digest('hex');
const expectedNotesHash = 'bef196237253f14a40eddf14f9e915532e094da7b7f9076fd0bfe078eb22f7a4';
const expectedProjects = [
  ['PANW-WORKBENCH', '2025'],
  ['PANOPTICA', '2024'],
  ['HBS-FACULTY-PLATFORM', '2024'],
  ['HBS - LEADING WITH AI', '2024'],
  ['LUMINOSO', '2024'],
  ['CISCO READY', '2020'],
  ['TREBUCHET TRIALS', '2019'],
  ['CISCO READY AI', '2019'],
  ['WEXEL', '2018'],
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
if (artifacts.length !== 20) errors.push(`Expected 20 artifacts; found ${artifacts.length}.`);
const sources = artifacts.map((artifact) => artifact.src);
if (new Set(sources).size !== sources.length) errors.push('Gallery artifact sources must be unique.');
if (Object.keys(galleryMedia).length !== expectedProjects.length) errors.push('Every project requires one media manifest entry.');

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
