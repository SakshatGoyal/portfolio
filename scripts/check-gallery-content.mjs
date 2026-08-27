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
const expectedNotesHash = '21e01fafd00510428a2a8d973b5cd792a8fed53ec30e6b1d7587ee82ce603826';
const expectedProjects = [
  ['Sales Workbench, Palo Alto Networks', '2025'],
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
  const leads = project.media.filter((artifact) => artifact.role === 'lead');
  if (leads.length !== 1 || project.media[0]?.role !== 'lead') {
    errors.push(`${project.title} must begin with exactly one lead artifact.`);
  }
  project.media.forEach((artifact) => {
    if (!['lead', 'support'].includes(artifact.role)) {
      errors.push(`Gallery artifact role is invalid: ${project.title} / ${artifact.id}.`);
    }
    const captionWords = artifact.caption.trim().split(/\s+/).length;
    if (captionWords < 5 || captionWords > 12) {
      errors.push(`Gallery caption must contain 5–12 words: ${project.title} / ${artifact.id}.`);
    }
  });
  if (project.layout.info.column !== 1 || project.layout.info.span !== 20 || project.layout.info.row !== 2) {
    errors.push(`${project.title} information must occupy the full second grid row.`);
  }
  const leadPlacement = project.layout.artifacts[project.media[0]?.id];
  if (leadPlacement?.column !== 1 || leadPlacement?.span !== 20 || leadPlacement?.row !== 1) {
    errors.push(`${project.title} lead artifact must occupy the full first grid row.`);
  }
  project.media.slice(1).forEach((artifact) => {
    if (project.layout.artifacts[artifact.id]?.row < 3) {
      errors.push(`${project.title} support artifacts must follow the information row.`);
    }
  });
  if (project.title === 'Researcher Outreach Service, HBS AI Institute') {
    const workflowPlacement = project.layout.artifacts['hbs-faculty-platform-01'];
    if (workflowPlacement?.column !== 1 || workflowPlacement?.span !== 20) {
      errors.push('The Researcher Outreach service workflow must use the full available width.');
    }
  }
  if (project.title === 'Onboarding Redesign, Cisco Panoptica') {
    const explanationPlacement = project.layout.artifacts['panoptica-01'];
    if (explanationPlacement?.column !== 1) {
      errors.push('The Panoptica supporting visual must remain left-aligned.');
    }
  }
  if (project.title === 'Platform Redesign, Cisco Ready') {
    const [lead, leftSupport, rightSupport] = project.media;
    if (lead?.id !== 'cready-redesign-02' || lead.role !== 'lead') {
      errors.push('Cisco Ready must use the Global Insights dashboard as its lead artifact.');
    }
    if (leftSupport?.id !== 'cready-redesign-01' || rightSupport?.id !== 'cready-redesign-00') {
      errors.push('Cisco Ready support media must retain account selection on the left and the former hero on the right.');
    }
    const rightPlacement = project.layout.artifacts['cready-redesign-00'];
    if (rightPlacement?.column !== 11 || rightPlacement?.span !== 10 || rightPlacement?.row !== 3) {
      errors.push('The former Cisco Ready hero must occupy the right support position.');
    }
  }
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
