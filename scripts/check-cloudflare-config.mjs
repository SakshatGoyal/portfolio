import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));
const preview = readJson('wrangler.preview.jsonc');
const production = readJson('wrangler.production.jsonc');
const packageJson = readJson('package.json');
const previewDeployment = readFileSync(join(root, 'scripts/deploy-preview.mjs'), 'utf8');
const workerSource = readFileSync(join(root, 'worker/index.ts'), 'utf8');

assert.equal(existsSync(join(root, 'wrangler.jsonc')), false, 'An ambiguous default Wrangler configuration must not exist.');
assert.equal(preview.name, 'sakshat-goyal-portfolio-preview');
assert.equal(preview.workers_dev, true);
assert.equal(preview.preview_urls, true);
assert.equal(production.name, 'sakshat-goyal-portfolio');
assert.equal(production.workers_dev, false);
assert.equal(production.preview_urls, true);
for (const config of [preview, production]) {
  assert.equal(config.main, './worker/index.ts');
  assert.deepEqual(config.assets, {
    directory: './dist/',
    binding: 'ASSETS',
    not_found_handling: '404-page',
    html_handling: 'auto-trailing-slash',
  });
  assert.equal('run_worker_first' in config.assets, false, 'Static assets must bypass Worker code.');
}
assert.match(workerSource, /return env\.ASSETS\.fetch\(request\);/, 'The Worker fallback must pass requests through unchanged.');
assert.doesNotMatch(workerSource, /Range|Content-Range|GENERATED_VIDEO_BYTES/, 'The Worker must not implement static video delivery.');
assert.equal(existsSync(join(root, 'worker/video-sizes.generated.ts')), false, 'The obsolete video-size manifest must stay removed.');
assert.equal(existsSync(join(root, 'scripts/write-video-size-manifest.mjs')), false, 'The obsolete video-size generator must stay removed.');
assert.ok(!packageJson.scripts['build:media'].includes('video-size-manifest'), 'Media builds must not generate Worker video sizes.');
assert.ok(!packageJson.scripts['check:media'].includes('video-size-manifest'), 'Media checks must not verify Worker video sizes.');
assert.equal(packageJson.scripts['deploy:preview'], 'node scripts/deploy-preview.mjs');
assert.equal(packageJson.scripts['rollback:preview'], 'node scripts/rollback-preview.mjs');
assert.ok(!packageJson.scripts['deploy:production'], 'Production deployment must remain unavailable in this phase.');
assert.ok(previewDeployment.includes("['scripts/check-media-delivery.mjs']"), 'Preview acceptance must exercise every generated video variant.');
assert.ok(previewDeployment.includes('previousEvidence?.verifiedVersion'), 'Rollback must use the last verified preview version.');
assert.ok(previewDeployment.includes('previousVersion ?? activeVersion()'), 'The first verified deployment must preserve the active preview as its rollback target.');
assert.ok(previewDeployment.includes("['rollback', rollbackVersion"), 'Failed preview verification must automatically restore the previous deployment.');
assert.ok(previewDeployment.includes('const verifiedVersion = activeVersion()'), 'Preview evidence must identify the version actually receiving traffic.');
console.log('Cloudflare preview/production isolation contracts passed.');
