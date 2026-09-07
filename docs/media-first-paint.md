# Media first-paint regression

## Cause and fix

The production baseline at `5f0b2d1` hid media only when both the deferred motion
bundle and the image/video readiness callback had run. Before those gates,
images and video posters could paint at full visibility. Initialization then
concealed them and started the swipe. The existing two-animation-frame safeguard
protected the transition after initialization, but did not protect first paint
or the interval before video metadata arrived.

The head now establishes the motion state before the body is parsed. Media is
transparent while loading. Readiness atomically replaces transparency with a
closed clip; the existing two-frame safeguard, 700ms homepage release, 1500ms
homepage swipe, stagger, and 800ms shared swipe remain intact.

Do not replace the initial transparency with a closed clip: browser testing
showed that this prevents some native lazy images and video preload observers
from loading their media, blocking the ordered homepage reveal queue.

If initialization fails, an eight-second deadline exposes content. A bundle
arriving after that deadline skips media animation instead of hiding it again.
Reduced motion and script-free pages remain visible.

## Rendered verification, 2026-09-05

Tests used the Codex built-in Browser and real production-built assets. The
baseline replay fetched the published site's HTML, CSS, scripts, and media;
the test server delayed delivery without changing the animation implementation.
Its head probe sampled computed opacity, clipping, readiness, activation, and
viewport intersection on every animation frame. Screenshot sequences captured
the actual visible result separately.

| Scenario | Baseline premature exposures | Fixed result |
| --- | ---: | --- |
| Deferred scripts delayed 2.5 seconds | 307 target/frame exposures | 0; swipe progresses and finishes |
| Video delivery delayed 2.5 seconds | 267 target/frame exposures | 0; swipe progresses and finishes |
| All seven case-study routes | — | 0; visible media finishes revealing |
| 390 × 844 mobile viewport, scroll into work | — | 0; visible media finishes revealing |
| Bundle arrives after 10 seconds | — | Fallback exposes content; no subsequent hiding |
| Bundle requests fail | — | Fallback exposes content |
| Reduced-motion branches / scripts removed | — | Media stays exposed |

Mobile used a same-origin iframe of the stated size because the browser viewport
override did not change the measured viewport. Reduced motion was tested by
making its existing CSS and JS media condition match in the test server; the
user's OS preference was not changed. These are browser rendering tests, not
claims of physical-device or cross-browser coverage.

Raw traces and screenshot sequences are under `.tmp/media-first-paint/` in the
local checkout. `check-media-first-paint-evidence.mjs` checks the traces: a
baseline must actually show visible → hidden → revealed; a fix must prevent
premature visibility, contain intermediate swipe frames, finish with all media
left in view exposed, and never hide completed media again.

## Repeat after changes to reveal loading or choreography

Build first, then run:

```sh
PORT=4402 DELAY_JS=2500 node scripts/serve-media-first-paint-test.mjs
```

Open `http://localhost:4402/?run=delayed-js` in the built-in Browser. Capture the
loading sequence, leave it open for 14 seconds, and run:

```sh
node scripts/check-media-first-paint-evidence.mjs .tmp/media-first-paint/4402/delayed-js.json
```

Repeat with `DELAY_MEDIA=2500`, each `/work/` route, and `/__mobile` (scroll into
the media during the first 14 seconds). `SOURCE_URL=https://sakshat-goyal.com`
replays current production; use `--expect-flash` only for a known broken baseline.
Use `DELAY_JS=10000` and `BLOCK_JS=1` with `--fallback`; use `NO_JS=1` and
`REDUCED_MOTION=1` with `--static`. Each server needs a distinct port. Stop the
test servers when finished. No probe or test-server code is shipped in `dist/`.
