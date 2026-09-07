import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const mode = args.find(arg => arg.startsWith('--')) || '--animated';
const files = args.filter(arg => !arg.startsWith('--'));
assert.ok(files.length, 'Pass browser trace JSON files from serve-media-first-paint-test.mjs');
const hidden = target => target.opacity === '0' || target.clip === 'inset(0px 100% 0px 0px)';
const exposed = target => target.opacity !== '0' && ['none', 'inset(0px)'].includes(target.clip);

for (const file of files) {
  const { summary, frames } = JSON.parse(await readFile(file, 'utf8'));
  assert.ok(frames.length > 10, `${file}: insufficient rendered frames`);
  if (mode === '--expect-flash') {
    assert.ok(summary.prematureExposureFrames > 0, 'Baseline must expose the regression');
    const sequence = frames.map(frame => frame.targets[0]).filter(Boolean);
    const early = sequence.findIndex(target => !target.active && exposed(target));
    const concealed = sequence.findIndex((target, index) => index > early && hidden(target));
    assert.ok(early >= 0 && concealed > early && sequence.slice(concealed).some(target => target.active && exposed(target)), 'Baseline must show visible → hidden → revealed');
  } else if (mode === '--static') {
    assert.ok(frames.every(frame => frame.targets.every(exposed)), 'Static/reduced-motion content must stay exposed');
  } else if (mode === '--fallback') {
    const released = frames.findIndex(frame => frame.root === 'fallback');
    assert.ok(released > 0, 'The failed/late bundle must release the initial hidden state');
    assert.ok(frames.slice(released).every(frame => frame.targets.every(exposed)), 'Content must never hide again after fallback');
  } else {
    assert.equal(summary.prematureExposureFrames, 0, 'No visible media before reveal activation');
    assert.ok(summary.revealed.length > 0, 'At least one visible media reveal must finish');
    assert.ok(summary.intermediateSwipeFrames > 0, 'The swipe must actually animate');
    const final = frames.at(-1).targets.filter(target => target.inView);
    assert.ok(final.length && final.every(target => target.active && exposed(target)), 'All media left in view must finish visible');
    const alreadyVisible = new Set();
    for (const frame of frames) for (const target of frame.targets) {
      if (alreadyVisible.has(target.index)) assert.ok(exposed(target), 'Completed media must never disappear again');
      if (target.active && exposed(target)) alreadyVisible.add(target.index);
    }
  }
  console.log(`PASS ${summary.run} (${mode}, ${frames.length} rendered frames)`);
}
