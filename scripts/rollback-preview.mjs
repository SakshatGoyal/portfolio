import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const versionId = process.argv[2];
if (!versionId || !/^[a-zA-Z0-9-]+$/.test(versionId)) {
  console.error('Usage: npm run rollback:preview -- <previous-version-id>');
  process.exit(1);
}
const result = spawnSync(
  join(root, 'node_modules/.bin/wrangler'),
  ['rollback', versionId, '--config', 'wrangler.preview.jsonc', '--yes'],
  { cwd: root, stdio: 'inherit' },
);
process.exit(result.status ?? 1);
