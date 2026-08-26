# Media playback incident

## User-visible failure

Autoplay media could report a playing cursor state without presenting frames. Recovery required a page reload.

## Red-team findings

1. **Playback policy — confirmed.** Gallery and case-study media used an exclusive policy that intentionally paused all but one eligible video, including when multiple videos were fully visible.
2. **False playback state — confirmed.** The interface derived playback state from `HTMLMediaElement.paused`, discarded `play()` rejections, and had no rendered-frame, stall, or error recovery.
3. **Decoder and delivery pressure — credible.** The active site used VP9-only source files, including oversized 60fps/high-bitrate media. Up to five homepage videos can cross the playback threshold together. One Gallery WebM also contained a malformed Opus stream.

Duplicate controller initialization was tested across repeated reloads, history restoration, and responsive resizing and was not reproduced.

## Resolution contract

- Every video at least 20% visible is independently eligible to autoplay.
- `playing` means two rendered frames advanced, never merely that `paused === false` or `play()` resolved.
- A failed start or stall retries playback once, reloads the selected source once, then exposes a persistent Retry control.
- Persistent centered Play/Pause/Retry controls remain available by pointer, touch, and keyboard without opening a project or lightbox.
- Active sources are audio-free, 30fps-or-lower H.264 and VP9 variants: mobile uses an approximately 720p pixel budget and desktop uses approximately 1080p.
- The malformed Opus track was stripped from the Trebuchet source; the repaired VP9 source and every generated variant pass full decode checks.
- Autoplay remains enabled under reduced-motion preferences by explicit product decision; the persistent Pause control is the mitigation.

## Release gate

The incident is closed only when local and production delivery probes pass, all eligible media advance presented frames across the responsive route matrix, and cold-start/reload soaks show no unrecovered playback failures. Production and cloud-device closure require a deployed `BASE_URL` and BrowserStack credentials.

Owner: Sakshat Goyal
