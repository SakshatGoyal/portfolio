import assert from 'node:assert/strict';
import { assertExactRuntime } from './runtime-contract.mjs';

const expected = { expectedNode: '24.19.0', expectedNpm: '11.19.0' };
assert.doesNotThrow(() => assertExactRuntime({ actualNode: '24.19.0', actualNpm: '11.19.0', ...expected }));
assert.throws(
  () => assertExactRuntime({ actualNode: '26.7.0', actualNpm: '11.19.0', ...expected }),
  /Node 24\.19\.0 is required; found 26\.7\.0/,
);
assert.throws(
  () => assertExactRuntime({ actualNode: '24.19.0', actualNpm: '11.18.0', ...expected }),
  /npm 11\.19\.0 is required; found 11\.18\.0/,
);
console.log('Runtime rejection contracts passed.');
