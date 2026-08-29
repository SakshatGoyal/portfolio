import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));
const preview = readJson('wrangler.preview.jsonc');
const production = readJson('wrangler.production.jsonc');
const packageJson = readJson('package.json');

assert.equal(existsSync(join(root, 'wrangler.jsonc')), false, 'An ambiguous default Wrangler configuration must not exist.');
assert.equal(preview.name, 'sakshat-goyal-portfolio-preview');
assert.equal(preview.workers_dev, true);
assert.equal(preview.preview_urls, true);
assert.equal(production.name, 'sakshat-goyal-portfolio');
assert.equal(production.workers_dev, false);
assert.equal(production.preview_urls, false);
for (const config of [preview, production]) {
  assert.deepEqual(config.assets, {
    directory: './dist/',
    not_found_handling: '404-page',
    html_handling: 'auto-trailing-slash',
  });
}
assert.equal(packageJson.scripts['deploy:preview'], 'node scripts/deploy-preview.mjs');
assert.equal(packageJson.scripts['rollback:preview'], 'node scripts/rollback-preview.mjs');
assert.ok(!packageJson.scripts['deploy:production'], 'Production deployment must remain unavailable in this phase.');
console.log('Cloudflare preview/production isolation contracts passed.');
