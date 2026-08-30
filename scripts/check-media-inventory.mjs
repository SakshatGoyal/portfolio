import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROJECTS } from '../src/data/projects.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(join(root, 'scripts/media-assets-manifest.json'), 'utf8'));
const restoration = JSON.parse(readFileSync(join(root, 'docs/production-readiness/media-archive-daaf38d.json'), 'utf8'));
const failures = [];
const fail = (condition, message) => { if (condition) failures.push(message); };
const walk = (directory) => existsSync(directory)
  ? readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : [path];
    })
  : [];
const normalized = (path) => relative(root, path).split(sep).join('/');

const expectedSummary = {
  deployable: { files: 312, bytes: 279033476 },
  source: { files: 31, bytes: 83184631 },
  archive: { files: 95, bytes: 266507622 },
};
fail(manifest.baselineCommit !== 'daaf38d', 'Media inventory must identify the approved daaf38d baseline.');
fail(JSON.stringify(manifest.summary) !== JSON.stringify(expectedSummary), `Media inventory totals changed: ${JSON.stringify(manifest.summary)}`);
fail(manifest.files.length !== 438, `Expected 438 inventoried media files, found ${manifest.files.length}.`);

const allowedOwners = new Set([...PROJECTS.map(({ mediaOwner }) => mediaOwner), 'shared']);
for (const field of ['originalPath', 'finalPath']) {
  fail(new Set(manifest.files.map((entry) => entry[field])).size !== manifest.files.length, `Media inventory ${field} values must be unique.`);
}
fail(new Set(manifest.files.filter(({ url }) => url).map(({ url }) => url)).size !== 343, 'Every deployable and source media URL must be unique.');

for (const entry of manifest.files) {
  fail(!allowedOwners.has(entry.owner), `${entry.originalPath}: unknown owner ${entry.owner}.`);
  fail(entry.category === 'unclassified', `${entry.originalPath}: media category is unclassified.`);
  fail(!['deployable', 'source', 'archive'].includes(entry.classification), `${entry.originalPath}: invalid classification.`);
  fail(entry.classification === 'archive' ? entry.url !== null : !entry.url?.startsWith('/media/'), `${entry.originalPath}: invalid public URL contract.`);
  fail(entry.classification !== 'archive' && entry.consumers.length === 0, `${entry.originalPath}: retained media needs an explicit consumer.`);
  for (const consumer of entry.consumers) fail(!existsSync(join(root, consumer)), `${entry.originalPath}: missing declared consumer ${consumer}.`);

  if (entry.classification === 'archive') continue;
  const finalPath = resolve(root, entry.finalPath);
  if (!existsSync(finalPath)) {
    failures.push(`${entry.finalPath}: declared media file is missing.`);
    continue;
  }
  const bytes = readFileSync(finalPath);
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  fail(statSync(finalPath).size !== entry.bytes, `${entry.finalPath}: byte count changed.`);
  fail(sha256 !== entry.sha256, `${entry.finalPath}: checksum changed.`);
  fail(existsSync(resolve(root, entry.originalPath)), `${entry.originalPath}: old media path still exists.`);
}

const sets = {
  deployable: new Set(walk(join(root, 'public/media')).map(normalized)),
  source: new Set(walk(join(root, 'media-source')).map(normalized)),
};
for (const classification of Object.keys(sets)) {
  const expected = new Set(manifest.files.filter((entry) => entry.classification === classification).map((entry) => entry.finalPath));
  fail(JSON.stringify([...sets[classification]].sort()) !== JSON.stringify([...expected].sort()), `${classification} media contains a missing or unclassified file.`);
}

fail(existsSync(join(root, 'public/assets')), 'Legacy public/assets must not remain after migration.');
fail(JSON.stringify(restoration.summary) !== JSON.stringify(expectedSummary.archive), 'Restoration manifest totals do not match the archived set.');
fail(restoration.files.length !== 95, 'Restoration manifest must contain exactly 95 files.');
for (const item of restoration.files) {
  const inventoryEntry = manifest.files.find((entry) => entry.originalPath === item.originalPath && entry.classification === 'archive');
  fail(!inventoryEntry || item.archivePath !== inventoryEntry.finalPath || item.sha256 !== inventoryEntry.sha256, `${item.originalPath}: restoration record does not match the complete inventory.`);
}

if (failures.length) {
  console.error(`Media inventory check failed (${failures.length}):\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}
console.log('Media inventory verified: 312 deployable, 31 source, and 95 archived files; zero unclassified media.');
