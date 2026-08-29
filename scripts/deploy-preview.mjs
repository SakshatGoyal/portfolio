import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const wrangler = join(root, 'node_modules/.bin/wrangler');
const config = 'wrangler.preview.jsonc';
const expectedWorker = 'sakshat-goyal-portfolio-preview';
const previewUrl = process.env.CLOUDFLARE_PREVIEW_URL;

const validatedUrl = (() => {
  try {
    const url = new URL(previewUrl);
    if (url.protocol !== 'https:' || !url.hostname.endsWith('.workers.dev') || !url.hostname.includes(expectedWorker)) throw new Error();
    return url.href;
  } catch {
    console.error(`CLOUDFLARE_PREVIEW_URL must be the HTTPS workers.dev URL for ${expectedWorker}.`);
    process.exit(1);
  }
})();

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, { cwd: root, encoding: 'utf8', stdio: options.capture ? 'pipe' : 'inherit' });
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed.`);
  return result.stdout;
};
const versions = () => {
  try {
    const records = JSON.parse(run(wrangler, ['versions', 'list', '--config', config, '--json'], { capture: true }));
    return Array.isArray(records) ? records : records.items ?? [];
  } catch {
    return [];
  }
};

run('npm', ['run', 'verify:release']);
const previousVersion = versions()[0]?.id ?? null;
let deployed = false;
try {
  run(wrangler, ['deploy', '--config', config, '--strict']);
  deployed = true;
  run(process.execPath, ['scripts/check-deployment-contracts.mjs', validatedUrl]);
  const verifiedVersion = versions()[0]?.id ?? null;
  const evidencePath = join(root, '.tmp/production-readiness/cloudflare-preview-last-verified.json');
  mkdirSync(dirname(evidencePath), { recursive: true });
  writeFileSync(evidencePath, `${JSON.stringify({ worker: expectedWorker, url: validatedUrl, verifiedVersion, previousVersion, verifiedAt: new Date().toISOString() }, null, 2)}\n`);
  console.log(`Preview verified. Evidence: ${evidencePath}`);
} catch (error) {
  console.error(error.message);
  if (deployed && previousVersion) console.error(`Rollback: npm run rollback:preview -- ${previousVersion}`);
  else if (deployed) console.error('No previous preview version was available for rollback.');
  process.exit(1);
}
