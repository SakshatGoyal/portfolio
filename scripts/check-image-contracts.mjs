import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';
import { responsiveBackgroundSources, responsiveImageSources } from './image-variant-sources.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = join(root, 'public');
const { backgroundVariants, imageVariants } = await import(`${pathToFileURL(join(root, 'src/data/image-variants.js')).href}?check=${Date.now()}`);
const failures = [];

if (JSON.stringify(Object.keys(imageVariants)) !== JSON.stringify([...responsiveImageSources])) {
  failures.push('Responsive image manifest keys do not match the configured source order.');
}

for (const src of responsiveImageSources) {
  const entry = imageVariants[src];
  const source = join(publicRoot, src.replace(/^\//, ''));
  if (!entry || !existsSync(source)) {
    failures.push(`${src}: missing source or manifest entry.`);
    continue;
  }
  const sourceHash = createHash('sha256').update(readFileSync(source)).digest('hex');
  if (entry.sourceHash !== sourceHash) failures.push(`${src}: responsive variants are stale.`);
  for (const variant of entry.variants) {
    const path = join(publicRoot, variant.src.replace(/^\//, ''));
    if (!existsSync(path) || statSync(path).size === 0) {
      failures.push(`${variant.src}: missing or empty derivative.`);
      continue;
    }
    const metadata = await sharp(path).metadata();
    if (metadata.format !== 'webp' || metadata.width !== variant.width || metadata.height !== variant.height) {
      failures.push(`${variant.src}: metadata differs from the manifest.`);
    }
  }
}

for (const { name, src } of responsiveBackgroundSources) {
  const entry = backgroundVariants[name];
  const source = join(publicRoot, src.replace(/^\//, ''));
  const sourceHash = createHash('sha256').update(readFileSync(source)).digest('hex');
  if (!entry || entry.original !== src || entry.sourceHash !== sourceHash) {
    failures.push(`${src}: background variants are missing or stale.`);
    continue;
  }
  for (const variant of entry.variants) {
    const path = join(publicRoot, variant.src.replace(/^\//, ''));
    if (!existsSync(path) || statSync(path).size === 0) failures.push(`${variant.src}: missing background derivative.`);
  }
}

if (failures.length) {
  console.error(`Responsive image contracts failed (${failures.length}):\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}
console.log(`Responsive image contracts passed for ${responsiveImageSources.length} images and ${responsiveBackgroundSources.length} backgrounds.`);
