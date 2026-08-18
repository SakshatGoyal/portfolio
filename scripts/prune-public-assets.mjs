import fs from 'node:fs';
import path from 'node:path';

const outputRoot = path.resolve('dist');
const assetRoot = path.join(outputRoot, 'assets');
const textExtensions = new Set([
  '.css', '.html', '.js', '.json', '.mjs', '.svg', '.txt', '.webmanifest', '.xml',
]);

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});

if (!fs.existsSync(assetRoot) || path.relative(outputRoot, assetRoot) !== 'assets') {
  throw new Error(`Refusing to prune unexpected asset directory: ${assetRoot}`);
}

const outputFiles = walk(outputRoot);
const referenceCorpus = outputFiles
  .filter((file) => textExtensions.has(path.extname(file).toLowerCase()))
  .map((file) => fs.readFileSync(file, 'utf8'))
  .join('\n');

let removedBytes = 0;
let removedFiles = 0;
walk(assetRoot).forEach((file) => {
  const assetUrl = `/${path.relative(outputRoot, file).split(path.sep).join('/')}`;
  if (referenceCorpus.includes(assetUrl) || referenceCorpus.includes(encodeURI(assetUrl))) return;
  removedBytes += fs.statSync(file).size;
  removedFiles += 1;
  fs.rmSync(file);
});

const removeEmptyDirectories = (directory) => {
  fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .forEach((entry) => removeEmptyDirectories(path.join(directory, entry.name)));
  if (directory !== assetRoot && fs.readdirSync(directory).length === 0) fs.rmdirSync(directory);
};
removeEmptyDirectories(assetRoot);

console.log(`Pruned ${removedFiles} unreferenced public assets (${(removedBytes / 1048576).toFixed(1)} MB) from dist.`);
