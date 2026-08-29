import assert from 'node:assert/strict';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { backgroundVariants, imageVariants } from '../src/data/image-variants.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = join(root, 'public');
const selected = [
  imageVariants['/media/projects/ai-research-architecture/images/hbs-cover.webp'],
  imageVariants['/media/projects/global-data-analytics/images/imgImage36.webp'],
  imageVariants['/media/projects/sales-workbench-ai/images/panw-artifacts-discovery.webp'],
  imageVariants['/media/projects/cisco-customer-insights/images/strategy-sensemaking.png'],
  ...Object.values(backgroundVariants),
];

for (const entry of selected) {
  assert.ok(entry, 'quality sample is missing from the generated manifest');
  const source = join(publicRoot, entry.original.replace(/^\//, ''));
  for (const variant of entry.variants) {
    const expected = await sharp(source)
      .resize({ width: variant.width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const actual = await sharp(join(publicRoot, variant.src.replace(/^\//, '')))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    assert.deepEqual(
      { width: actual.info.width, height: actual.info.height, channels: actual.info.channels },
      { width: expected.info.width, height: expected.info.height, channels: expected.info.channels },
      `${variant.src}: decoded dimensions or channels changed`,
    );
    assert.equal(Buffer.compare(actual.data, expected.data), 0, `${variant.src}: lossless derivative changed resized pixels`);
  }
}

console.log(`Responsive image quality passed for ${selected.length} representative sources.`);
