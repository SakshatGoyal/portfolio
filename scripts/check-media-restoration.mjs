import { createHash } from 'node:crypto';
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const portfolioRoot = resolve(root, '..');
const manifestPath = join(root, 'docs/production-readiness/media-archive-daaf38d.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const restorationRoot = await mkdtemp(join(tmpdir(), 'portfolio-media-restoration-'));

const walk = async (directory) => {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
};

try {
  const portfolioGitignore = await readFile(join(portfolioRoot, '.gitignore'), 'utf8');
  if (!portfolioGitignore.split('\n').includes('Archive/portfolio-sites/website-unused-media-daaf38d/')) {
    throw new Error('Portfolio-root .gitignore does not exclude the exact archive directory.');
  }
  const archiveRoot = resolve(root, manifest.archiveRoot);
  const archiveFiles = (await walk(archiveRoot)).sort();
  const expectedArchiveFiles = manifest.files.map((item) => resolve(root, item.archivePath)).sort();
  if (JSON.stringify(archiveFiles) !== JSON.stringify(expectedArchiveFiles)) {
    throw new Error('Archive contains missing or unclassified files.');
  }

  let restoredBytes = 0;

  for (const item of manifest.files) {
    const archivedPath = resolve(root, item.archivePath);
    const restoredPath = join(restorationRoot, item.originalPath);
    await mkdir(dirname(restoredPath), { recursive: true });
    await copyFile(archivedPath, restoredPath);

    const bytes = await readFile(restoredPath);
    const sha256 = createHash('sha256').update(bytes).digest('hex');
    const restoredStat = await stat(restoredPath);
    if (restoredStat.size !== item.bytes || sha256 !== item.sha256) {
      throw new Error(`${item.originalPath}: restored file does not match its manifest record.`);
    }
    restoredBytes += restoredStat.size;
  }

  if (manifest.files.length !== manifest.summary.files || restoredBytes !== manifest.summary.bytes) {
    throw new Error('Restored file totals do not match the restoration manifest.');
  }

  console.log(`Restoration verified in an isolated temporary directory: ${manifest.files.length} files, ${restoredBytes} bytes.`);
} finally {
  await rm(restorationRoot, { recursive: true, force: true });
}
