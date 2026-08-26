const CONTROLLER_KEY = Symbol.for('portfolio.mediaPlaybackController');

export const MEDIA_PLAYBACK_STATES = Object.freeze([
  'idle',
  'starting',
  'playing',
  'buffering',
  'paused',
  'failed',
]);

const ACTIVE_STATES = new Set(['starting', 'playing', 'buffering']);

const defaultNow = () => globalThis.performance?.now?.() ?? Date.now();

const mediaName = (video) => (
  video.dataset?.mediaId
  || video.getAttribute?.('aria-label')
  || video.currentSrc
  || video.src
  || 'video'
);

export class MediaPlaybackController {
  constructor(options = {}) {
    this.document = options.document ?? globalThis.document;
    this.window = options.window ?? this.document?.defaultView ?? globalThis.window;
    this.root = options.root ?? this.document;
    this.selector = options.selector
      ?? 'video[data-autoplay-on-view], video[data-home-autoplay-on-view]';
    this.threshold = options.threshold ?? 0.2;
    this.stallMs = options.stallMs ?? 3000;
    this.watchdogMs = options.watchdogMs ?? 250;
    this.diagnosticsLimit = options.diagnosticsLimit ?? 100;
    this.now = options.now ?? defaultNow;
    this.setTimer = options.setTimeout ?? globalThis.setTimeout?.bind(globalThis);
    this.clearTimer = options.clearTimeout ?? globalThis.clearTimeout?.bind(globalThis);
    this.IntersectionObserver = options.IntersectionObserver ?? this.window?.IntersectionObserver;
    this.MutationObserver = options.MutationObserver ?? this.window?.MutationObserver;
    this.CustomEvent = options.CustomEvent ?? this.window?.CustomEvent ?? globalThis.CustomEvent;
    this.qualityQuery = options.qualityQuery ?? this.window?.matchMedia?.(
      '(max-width: 1023px), (hover: none), (pointer: coarse)',
    );
    this.records = new Map();
    this.diagnostics = [];
    this.disposed = false;
    this.listeners = [];
    this.watchdog = null;

    if (!this.document || !this.root) {
      throw new Error('MediaPlaybackController requires a document and root.');
    }

    this.observer = this.IntersectionObserver
      ? new this.IntersectionObserver((entries) => this.onIntersections(entries), {
          threshold: [0, this.threshold, 0.5, 0.75, 1],
        })
      : null;

    this.mutationObserver = this.MutationObserver
      ? new this.MutationObserver(() => this.refresh())
      : null;

    this.installLifecycleListeners();
    this.refresh();
    this.mutationObserver?.observe?.(this.document.documentElement ?? this.root, {
      childList: true,
      subtree: true,
    });
    this.scheduleWatchdog();
    this.log(null, 'controller-init', { videoCount: this.records.size });
  }

  installLifecycleListeners() {
    const listen = (target, name, handler, options) => {
      target?.addEventListener?.(name, handler, options);
      this.listeners.push(() => target?.removeEventListener?.(name, handler, options));
    };

    listen(this.document, 'visibilitychange', () => this.reconcileAll('visibilitychange'));
    listen(this.document, 'viewerchange', () => this.reconcileAll('viewerchange'));
    listen(this.document, 'click', (event) => this.onControlClick(event), true);
    listen(this.window, 'pageshow', () => this.reconcileAll('pageshow'));
    listen(this.window, 'online', () => this.reconcileAll('online'));
    listen(this.window, 'offline', () => this.reconcileAll('offline'));
    listen(this.qualityQuery, 'change', () => this.onQualityTierChange());
  }

  onQualityTierChange() {
    for (const record of this.records.values()) {
      record.attemptToken += 1;
      this.cancelFrameMonitor(record);
      const time = Number.isFinite(record.video.currentTime) ? record.video.currentTime : 0;
      const shouldResume = this.shouldPlay(record);
      record.resumeAfterLoad = shouldResume ? { time } : null;
      record.video.pause?.();
      const offline = this.window?.navigator?.onLine === false;
      this.setState(record, shouldResume ? 'starting' : record.inRange ? offline ? 'buffering' : 'paused' : 'idle', 'quality-tier-change');
      record.video.load?.();
    }
  }

  refresh() {
    if (this.disposed) return;
    const found = new Set(this.root.querySelectorAll?.(this.selector) ?? []);

    for (const [video, record] of this.records) {
      if (!found.has(video) || !video.isConnected) this.removeVideo(video, record, 'disconnected');
    }

    for (const video of found) {
      if (!this.records.has(video)) this.addVideo(video);
    }
  }

  addVideo(video) {
    const record = {
      video,
      state: 'idle',
      ratio: 0,
      inRange: false,
      manuallyPaused: false,
      retryCount: 0,
      attemptToken: 0,
      frameHandle: null,
      frameMode: typeof video.requestVideoFrameCallback === 'function' ? 'rvfc' : 'timeline',
      lastMediaTime: Number.isFinite(video.currentTime) ? video.currentTime : 0,
      lastAdvanceAt: this.now(),
      advancingFrames: 0,
      resumeAfterLoad: null,
      listeners: [],
    };
    this.records.set(video, record);
    video.dataset.playbackState = 'idle';

    const listen = (name, handler) => {
      video.addEventListener?.(name, handler);
      record.listeners.push(() => video.removeEventListener?.(name, handler));
    };
    listen('waiting', () => this.onBuffering(record, 'waiting'));
    listen('stalled', () => this.onBuffering(record, 'stalled'));
    listen('error', () => this.fail(record, 'media-error', video.error));
    listen('playing', () => this.ensureFrameMonitor(record));
    listen('canplay', () => this.onCanPlay(record));
    listen('loadedmetadata', () => this.onLoadedMetadata(record));
    listen('pause', () => {
      if (this.shouldPlay(record) && ACTIVE_STATES.has(record.state)) {
        this.setState(record, 'buffering', 'unexpected-pause');
      }
    });
    this.observer?.observe?.(video);
    this.syncSurface(record);
    this.log(record, 'video-added', { frameMode: record.frameMode });
  }

  removeVideo(video, record, reason) {
    record.attemptToken += 1;
    this.cancelFrameMonitor(record);
    record.listeners.forEach((remove) => remove());
    this.observer?.unobserve?.(video);
    this.records.delete(video);
    this.log(record, reason);
  }

  onIntersections(entries) {
    for (const entry of entries) {
      const record = this.records.get(entry.target);
      if (!record) continue;
      const wasInRange = record.inRange;
      record.ratio = entry.intersectionRatio ?? 0;
      record.inRange = Boolean(entry.isIntersecting) && record.ratio >= this.threshold;
      entry.target.toggleAttribute?.('data-in-playback-range', record.inRange);
      entry.target.toggleAttribute?.('data-active-playback', record.inRange);

      if (wasInRange && !record.inRange) {
        record.manuallyPaused = false;
        record.retryCount = 0;
        entry.target.removeAttribute?.('data-manual-playback');
      }
      this.reconcile(record, 'intersection');
    }
  }

  shouldPlay(record) {
    return record.inRange
      && !record.manuallyPaused
      && !this.document.hidden
      && this.window?.navigator?.onLine !== false
      && !this.document.body?.classList?.contains('behance-viewer-open')
      && record.video.isConnected !== false;
  }

  reconcileAll(reason) {
    this.refresh();
    for (const record of this.records.values()) this.reconcile(record, reason);
  }

  reconcile(record, reason) {
    if (this.disposed || !this.records.has(record.video)) return;
    if (!this.shouldPlay(record)) {
      record.attemptToken += 1;
      this.cancelFrameMonitor(record);
      record.video.pause?.();
      const unavailable = reason === 'offline' && record.inRange;
      this.setState(record, unavailable ? 'buffering' : record.inRange ? 'paused' : 'idle', reason);
      return;
    }

    if (record.state === 'failed' && !['online', 'pageshow', 'visibilitychange', 'viewerchange'].includes(reason)) {
      return;
    }
    if (record.state === 'failed') record.retryCount = 0;
    if (!ACTIVE_STATES.has(record.state) || record.video.paused) this.start(record, reason);
  }

  start(record, reason = 'autoplay') {
    if (!this.shouldPlay(record) || this.disposed) return;
    const token = ++record.attemptToken;
    record.advancingFrames = 0;
    record.lastMediaTime = Number.isFinite(record.video.currentTime) ? record.video.currentTime : 0;
    record.lastAdvanceAt = this.now();
    this.setState(record, 'starting', reason);
    this.ensureFrameMonitor(record);

    let result;
    try {
      result = record.video.play?.();
    } catch (error) {
      this.fail(record, 'play-threw', error, token);
      return;
    }
    Promise.resolve(result).catch((error) => this.fail(record, 'play-rejected', error, token));
  }

  ensureFrameMonitor(record) {
    if (record.frameMode !== 'rvfc' || record.frameHandle !== null || this.disposed) return;
    const sample = (_now, metadata = {}) => {
      record.frameHandle = null;
      if (!this.records.has(record.video) || !ACTIVE_STATES.has(record.state)) return;
      this.observeMediaTime(record, metadata.mediaTime ?? record.video.currentTime, 'rendered-frame');
      if (this.shouldPlay(record)) record.frameHandle = record.video.requestVideoFrameCallback(sample);
    };
    record.frameHandle = record.video.requestVideoFrameCallback(sample);
  }

  cancelFrameMonitor(record) {
    if (record.frameHandle === null) return;
    record.video.cancelVideoFrameCallback?.(record.frameHandle);
    record.frameHandle = null;
  }

  observeMediaTime(record, mediaTime, reason) {
    if (!Number.isFinite(mediaTime)) return;
    const loopedOrSeekedBack = mediaTime < record.lastMediaTime - 0.01;
    if (!loopedOrSeekedBack && mediaTime <= record.lastMediaTime + 0.0001) return;
    record.lastMediaTime = mediaTime;
    record.lastAdvanceAt = this.now();
    record.advancingFrames += 1;
    if (record.advancingFrames >= 2 && record.state !== 'playing') {
      record.retryCount = 0;
      this.setState(record, 'playing', reason);
    }
  }

  onBuffering(record, reason) {
    if (!this.shouldPlay(record)) return;
    record.advancingFrames = 0;
    record.lastMediaTime = Number.isFinite(record.video.currentTime) ? record.video.currentTime : 0;
    record.lastAdvanceAt = this.now();
    this.setState(record, 'buffering', reason);
    this.ensureFrameMonitor(record);
  }

  onCanPlay(record) {
    if (record.resumeAfterLoad) return;
    if (this.shouldPlay(record) && (record.video.paused || record.state === 'buffering')) {
      this.start(record, 'canplay');
    }
  }

  onLoadedMetadata(record) {
    if (!record.resumeAfterLoad || record.state === 'failed') return;
    const { time } = record.resumeAfterLoad;
    record.resumeAfterLoad = null;
    try {
      const duration = Number.isFinite(record.video.duration) ? record.video.duration : time;
      record.video.currentTime = Math.max(0, Math.min(time, duration));
    } catch (error) {
      this.log(record, 'resume-seek-failed', { message: error?.message ?? String(error) });
    }
    this.start(record, 'reload-resume');
  }

  fail(record, reason, error, token = record.attemptToken) {
    if (this.disposed || token !== record.attemptToken || !this.records.has(record.video)) return;
    this.cancelFrameMonitor(record);
    this.log(record, reason, {
      message: error?.message ?? (error ? String(error) : undefined),
      retryCount: record.retryCount,
    });
    if (!this.shouldPlay(record)) {
      this.reconcile(record, reason);
      return;
    }

    if (record.retryCount === 0) {
      record.retryCount = 1;
      this.start(record, 'retry-replay');
      return;
    }
    if (record.retryCount === 1) {
      record.retryCount = 2;
      record.attemptToken += 1;
      record.advancingFrames = 0;
      record.lastAdvanceAt = this.now();
      const time = Number.isFinite(record.video.currentTime) ? record.video.currentTime : 0;
      record.resumeAfterLoad = { time };
      this.setState(record, 'starting', 'retry-reload');
      try {
        record.video.load?.();
      } catch (loadError) {
        record.resumeAfterLoad = null;
        this.fail(record, 'load-threw', loadError);
      }
      return;
    }
    record.attemptToken += 1;
    record.resumeAfterLoad = null;
    record.video.pause?.();
    this.setState(record, 'failed', 'retries-exhausted');
  }

  scheduleWatchdog() {
    if (!this.setTimer || this.disposed) return;
    this.watchdog = this.setTimer(() => {
      this.watchdog = null;
      this.runWatchdog();
      this.scheduleWatchdog();
    }, this.watchdogMs);
  }

  runWatchdog() {
    const now = this.now();
    for (const record of this.records.values()) {
      if (!this.shouldPlay(record) || !ACTIVE_STATES.has(record.state)) continue;
      if (record.frameMode === 'timeline') {
        this.observeMediaTime(record, record.video.currentTime, 'timeline-advance');
      }
      if (now - record.lastAdvanceAt >= this.stallMs) this.fail(record, 'timeline-stalled');
    }
  }

  onControlClick(event) {
    const control = event.target?.closest?.('[data-media-playback-control]');
    if (!control) return;
    const surface = control.closest?.('[data-playable-media]') ?? control.parentElement;
    const video = surface?.querySelector?.(this.selector) ?? surface?.querySelector?.('video');
    const record = this.records.get(video);
    if (!record) return;
    event.preventDefault?.();
    event.stopPropagation?.();
    event.stopImmediatePropagation?.();

    if (record.state === 'playing') {
      record.manuallyPaused = true;
      video.dataset.manualPlayback = 'paused';
      this.reconcile(record, 'manual-pause');
      return;
    }
    record.manuallyPaused = false;
    record.retryCount = 0;
    video.dataset.manualPlayback = 'playing';
    this.start(record, record.state === 'failed' ? 'manual-retry' : 'manual-play');
  }

  setState(record, state, reason) {
    if (!MEDIA_PLAYBACK_STATES.includes(state)) throw new Error(`Unknown playback state: ${state}`);
    const previousState = record.state;
    if (previousState === state) {
      this.syncSurface(record);
      return;
    }
    record.state = state;
    record.video.dataset.playbackState = state;
    this.syncSurface(record);
    const detail = {
      video: record.video,
      state,
      previousState,
      reason,
      retryCount: record.retryCount,
      timestamp: this.now(),
    };
    this.log(record, 'statechange', { state, previousState, reason, retryCount: record.retryCount });
    if (this.CustomEvent) {
      record.video.dispatchEvent?.(new this.CustomEvent('media-playback-statechange', {
        bubbles: true,
        detail,
      }));
    }
  }

  syncSurface(record) {
    const surface = record.video.closest?.('[data-playable-media]');
    const control = surface?.querySelector?.('[data-media-playback-control]');
    if (!surface) return;
    surface.dataset.playbackState = record.state;
    if (!control) return;
    const active = record.state === 'playing';
    const action = active ? 'Pause' : record.state === 'failed' ? 'Retry' : 'Play';
    control.dataset.playbackAction = action.toLowerCase();
    control.setAttribute?.('aria-label', `${action} ${mediaName(record.video)}`);
    control.setAttribute?.('aria-pressed', String(active));
    const label = control.querySelector?.('[data-media-playback-label]');
    if (label) label.textContent = `${action} ${mediaName(record.video)}`;
  }

  log(record, type, detail = {}) {
    const item = {
      timestamp: this.now(),
      type,
      media: record ? mediaName(record.video) : null,
      ...detail,
    };
    this.diagnostics.push(item);
    if (this.diagnostics.length > this.diagnosticsLimit) {
      this.diagnostics.splice(0, this.diagnostics.length - this.diagnosticsLimit);
    }
  }

  getDiagnostics() {
    return this.diagnostics.map((item) => ({ ...item }));
  }

  getState(video) {
    return this.records.get(video)?.state ?? null;
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    if (this.watchdog !== null) this.clearTimer?.(this.watchdog);
    this.watchdog = null;
    this.observer?.disconnect?.();
    this.mutationObserver?.disconnect?.();
    this.listeners.splice(0).forEach((remove) => remove());
    for (const [video, record] of this.records) {
      record.attemptToken += 1;
      this.cancelFrameMonitor(record);
      record.listeners.forEach((remove) => remove());
      video.pause?.();
    }
    this.records.clear();
    if (this.document[CONTROLLER_KEY] === this) delete this.document[CONTROLLER_KEY];
    this.log(null, 'controller-dispose');
  }
}

export function createMediaPlaybackController(options = {}) {
  const document = options.document ?? globalThis.document;
  const existing = document?.[CONTROLLER_KEY];
  if (existing && !existing.disposed) return existing;
  const controller = new MediaPlaybackController({ ...options, document });
  if (document) document[CONTROLLER_KEY] = controller;
  return controller;
}
