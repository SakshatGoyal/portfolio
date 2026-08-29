import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = join(root, 'dist');
const mediaRoot = join(outputRoot, 'media');
const inventory = JSON.parse(readFileSync(join(root, 'scripts/media-assets-manifest.json'), 'utf8'));

const walk = (directory) => existsSync(directory)
  ? readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
      const target = join(directory, entry.name);
      return entry.isDirectory() ? walk(target) : [target];
    })
  : [];

if (existsSync(join(outputRoot, 'assets'))) {
  throw new Error('Unclassified legacy /assets output remains after the media migration.');
}

const expected = new Map(inventory.files
  .filter(({ classification }) => classification === 'deployable')
  .map((entry) => [entry.url, entry]));
const actual = new Map(walk(mediaRoot).map((path) => [
  `/${relative(outputRoot, path).split(sep).join('/')}`,
  path,
]));

const missing = [...expected.keys()].filter((url) => !actual.has(url));
const unclassified = [...actual.keys()].filter((url) => !expected.has(url));
if (missing.length || unclassified.length) {
  throw new Error([
    missing.length ? `Missing declared media:\n${missing.join('\n')}` : '',
    unclassified.length ? `Unclassified deployed media:\n${unclassified.join('\n')}` : '',
  ].filter(Boolean).join('\n\n'));
}

let totalBytes = 0;
for (const [url, entry] of expected) {
  const path = actual.get(url);
  const bytes = readFileSync(path);
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  if (statSync(path).size !== entry.bytes || sha256 !== entry.sha256) {
    throw new Error(`${url} differs from its declared byte-identical media inventory.`);
  }
  totalBytes += bytes.length;
}

console.log(`Verified ${expected.size} explicitly declared deployable media files (${(totalBytes / 1048576).toFixed(1)} MB); zero unclassified media.`);
