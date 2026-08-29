import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const wrangler = join(root, 'node_modules/.bin/wrangler');
const config = 'wrangler.preview.jsonc';
const expectedWorker = 'sakshat-goyal-portfolio-preview';
const previewUrl = process.env.CLOUDFLARE_PREVIEW_URL;
const evidencePath = join(root, '.tmp/production-readiness/cloudflare-preview-last-verified.json');

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
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    env: { ...process.env, ...options.env },
    stdio: options.capture ? 'pipe' : 'inherit',
  });
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')} failed.`);
  return result.stdout;
};
const versions = () => {
  const records = JSON.parse(run(wrangler, ['versions', 'list', '--config', config, '--json'], { capture: true }));
  return Array.isArray(records) ? records : records.items ?? [];
};
const activeVersion = () => {
  const deployment = JSON.parse(run(wrangler, ['deployments', 'status', '--config', config, '--json'], { capture: true }));
  const active = deployment.versions?.filter(({ percentage }) => percentage === 100) ?? [];
  if (active.length !== 1 || !active[0].version_id) {
    throw new Error('Cloudflare must report exactly one active preview version before deployment can continue.');
  }
  return active[0].version_id;
};

run('npm', ['run', 'verify:release']);
run(wrangler, ['whoami'], { capture: true });
const previousEvidence = existsSync(evidencePath) ? JSON.parse(readFileSync(evidencePath, 'utf8')) : null;
const previousVersion = previousEvidence?.verifiedVersion ?? null;
if (previousEvidence) {
  if (previousEvidence.worker !== expectedWorker || previousEvidence.url !== validatedUrl || !previousVersion) {
    throw new Error('Previous preview evidence is incomplete or belongs to another target.');
  }
  if (!versions().some(({ id }) => id === previousVersion)) {
    throw new Error(`Previously verified rollback version ${previousVersion} is no longer available.`);
  }
}
const rollbackVersion = previousVersion ?? activeVersion();
if (previousVersion && activeVersion() !== previousVersion) {
  throw new Error(`Active preview does not match the last verified version ${previousVersion}.`);
}
let deployed = false;
try {
  run(wrangler, ['deploy', '--config', config, '--strict']);
  deployed = true;
  run(process.execPath, ['scripts/check-deployment-contracts.mjs', validatedUrl]);
  run(process.execPath, ['scripts/check-media-delivery.mjs'], { env: { BASE_URL: validatedUrl } });
  const verifiedVersion = activeVersion();
  if (!verifiedVersion) throw new Error('Cloudflare did not return a version ID for the verified preview.');
  if (verifiedVersion === rollbackVersion) throw new Error('Cloudflare did not activate a new preview version.');
  mkdirSync(dirname(evidencePath), { recursive: true });
  writeFileSync(evidencePath, `${JSON.stringify({ worker: expectedWorker, url: validatedUrl, verifiedVersion, previousVersion: rollbackVersion, verifiedAt: new Date().toISOString() }, null, 2)}\n`);
  console.log(`Preview verified. Evidence: ${evidencePath}`);
} catch (error) {
  console.error(error.message);
  if (deployed) {
    console.error(`Preview verification failed; rolling back to ${rollbackVersion}.`);
    try {
      run(wrangler, ['rollback', rollbackVersion, '--config', config, '--yes']);
    } catch {
      console.error(`Automatic rollback failed. Run: npm run rollback:preview -- ${rollbackVersion}`);
    }
  }
  process.exit(1);
}
