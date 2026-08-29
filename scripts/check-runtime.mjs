import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertExactRuntime } from './runtime-contract.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { engines } = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const actualNode = process.versions.node;
const actualNpm = process.env.npm_config_user_agent?.match(/npm\/([^ ]+)/)?.[1]
  ?? execFileSync('npm', ['--version'], { encoding: 'utf8' }).trim();

try {
  assertExactRuntime({ actualNode, actualNpm, expectedNode: engines.node, expectedNpm: engines.npm });
  console.log(`Runtime verified: Node ${actualNode}, npm ${actualNpm}.`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
