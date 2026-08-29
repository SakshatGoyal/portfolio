import { readdir, rename, rm } from 'node:fs/promises';
import { basename, dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { memoryLaneTrailAssets } from '../src/data/memory-lane-trail.js';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = resolve(
  process.argv[2] || resolve(projectRoot, '../portfolio-content-folder/homepage-carousel'),
);
const outputDirectory = resolve(projectRoot, 'public/media/projects/memory-lane/trail');
const supportedSourceExtension = /\.(?:jpe?g|png)$/i;
const supportedOutputExtension = /\.(?:jpe?g|png|webp)$/i;

const sourceFiles = (await readdir(sourceDirectory))
  .filter((filename) => supportedSourceExtension.test(filename))
  .sort();

if (!sourceFiles.length) {
  throw new Error(`No supported Memory Lane trail images found in ${sourceDirectory}`);
}
const manifestSources = memoryLaneTrailAssets.map(({ source }) => source);
if (JSON.stringify(sourceFiles) !== JSON.stringify(manifestSources)) {
  throw new Error('The Memory Lane manifest must exactly match the authoritative source directory.');
}

const optimizedNames = new Set();
const results = [];

for (const asset of memoryLaneTrailAssets) {
  const { source } = asset;
  const sourcePath = resolve(sourceDirectory, source);
  const metadata = await sharp(sourcePath).metadata();
  const width = Number(metadata.width);
  const height = Number(metadata.height);
  if (!width || !height) throw new Error(`Unable to read dimensions for ${source}`);

  const ratio = width / height;
  const resize = ratio < 0.9
    ? { height: 1200 }
    : ratio <= 1.1
      ? { width: 1000, height: 1000 }
      : { width: 1200 };
  const optimizedName = `${basename(source, extname(source))}.webp`;
  const outputPath = resolve(outputDirectory, optimizedName);
  const temporaryPath = `${outputPath}.tmp`;

  const info = await sharp(sourcePath)
    .rotate()
    .resize({ ...resize, fit: 'inside', withoutEnlargement: true, kernel: 'lanczos3' })
    .webp({ quality: 86, alphaQuality: 90, effort: 6, smartSubsample: true })
    .toFile(temporaryPath);

  if (info.width !== asset.width || info.height !== asset.height) {
    await rm(temporaryPath, { force: true });
    throw new Error(
      `${source} optimized to ${info.width}x${info.height}; expected ${asset.width}x${asset.height}`,
    );
  }

  await rename(temporaryPath, outputPath);
  optimizedNames.add(optimizedName);
  results.push({ source, output: optimizedName, width: info.width, height: info.height, bytes: info.size });
}

for (const filename of await readdir(outputDirectory)) {
  if (supportedOutputExtension.test(filename) && !optimizedNames.has(filename)) {
    await rm(resolve(outputDirectory, filename));
  }
}

console.table(results);
