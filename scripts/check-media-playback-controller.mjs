import assert from 'node:assert/strict';
import { createMediaPlaybackController } from '../src/scripts/media-playback-controller.js';

class EventTargetStub {
  constructor() { this.listeners = new Map(); }
  addEventListener(name, handler) {
    const list = this.listeners.get(name) ?? [];
    list.push(handler);
    this.listeners.set(name, list);
  }
  removeEventListener(name, handler) {
    this.listeners.set(name, (this.listeners.get(name) ?? []).filter((item) => item !== handler));
  }
  dispatchEvent(event) {
    event.target ??= this;
    for (const handler of [...(this.listeners.get(event.type) ?? [])]) handler(event);
    return true;
  }
}

class CustomEventStub {
  constructor(type, init = {}) { this.type = type; Object.assign(this, init); }
}

class ClassListStub {
  constructor() { this.items = new Set(); }
  contains(name) { return this.items.has(name); }
  add(name) { this.items.add(name); }
  remove(name) { this.items.delete(name); }
}

class ElementStub extends EventTargetStub {
  constructor() {
    super();
    this.dataset = {};
    this.attributes = new Map();
    this.isConnected = true;
  }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  removeAttribute(name) { this.attributes.delete(name); }
  toggleAttribute(name, force) { force ? this.attributes.set(name, '') : this.attributes.delete(name); }
  closest() { return null; }
}

class ControlStub extends ElementStub {
  constructor() {
    super();
    this.label = { textContent: '' };
  }
  closest(selector) {
    if (selector === '[data-media-playback-control]') return this;
    if (selector === '[data-playable-media]') return this.surface;
    return null;
  }
  querySelector(selector) { return selector === '[data-media-playback-label]' ? this.label : null; }
}

class SurfaceStub extends ElementStub {
  constructor(video, control) {
    super();
    this.video = video;
    this.control = control;
  }
  querySelector(selector) {
    if (selector.includes('video')) return this.video;
    if (selector === '[data-media-playback-control]') return this.control;
    return null;
  }
}

class VideoStub extends ElementStub {
  constructor(name, { rvfc = true } = {}) {
    super();
    this.setAttribute('aria-label', name);
    this.currentTime = 0;
    this.duration = 20;
    this.paused = true;
    this.playCalls = 0;
    this.pauseCalls = 0;
    this.loadCalls = 0;
    this.playResults = [];
    this.frameCallbacks = new Map();
    this.nextFrameId = 1;
    this.control = new ControlStub();
    this.surface = new SurfaceStub(this, this.control);
    this.control.surface = this.surface;
    if (rvfc) {
      this.requestVideoFrameCallback = (callback) => {
        const id = this.nextFrameId++;
        this.frameCallbacks.set(id, callback);
        return id;
      };
      this.cancelVideoFrameCallback = (id) => this.frameCallbacks.delete(id);
    }
  }
  closest(selector) { return selector === '[data-playable-media]' ? this.surface : null; }
  play() {
    this.playCalls += 1;
    const result = this.playResults.shift();
    if (result instanceof Error) return Promise.reject(result);
    this.paused = false;
    return Promise.resolve();
  }
  pause() { this.pauseCalls += 1; this.paused = true; this.dispatchEvent({ type: 'pause' }); }
  load() { this.loadCalls += 1; this.paused = true; }
  frame(time) {
    this.currentTime = time;
    const callbacks = [...this.frameCallbacks.values()];
    this.frameCallbacks.clear();
    callbacks.forEach((callback) => callback(time * 1000, { mediaTime: time }));
  }
}

class IntersectionObserverStub {
  static instances = [];
  constructor(callback) { this.callback = callback; this.observed = new Set(); IntersectionObserverStub.instances.push(this); }
  observe(target) { this.observed.add(target); }
  unobserve(target) { this.observed.delete(target); }
  disconnect() { this.observed.clear(); }
  set(target, ratio) { this.callback([{ target, intersectionRatio: ratio, isIntersecting: ratio > 0 }]); }
}

class RootStub {
  constructor(videos) { this.videos = videos; }
  querySelectorAll() { return this.videos.filter((video) => video.isConnected); }
}

const timers = [];
let now = 0;
const setTimer = (callback, delay) => { const timer = { callback, at: now + delay, active: true }; timers.push(timer); return timer; };
const clearTimer = (timer) => { timer.active = false; };
const advance = (ms) => {
  now += ms;
  for (const timer of [...timers]) {
    if (timer.active && timer.at <= now) { timer.active = false; timer.callback(); }
  }
};
const flush = () => new Promise((resolve) => setImmediate(resolve));

const videos = [new VideoStub('one'), new VideoStub('two'), new VideoStub('fallback', { rvfc: false })];
const document = new EventTargetStub();
document.hidden = false;
document.body = { classList: new ClassListStub() };
document.documentElement = {};
document.defaultView = new EventTargetStub();
document.defaultView.navigator = { onLine: true };
const qualityQuery = new EventTargetStub();
const root = new RootStub(videos);
const options = {
  document,
  window: document.defaultView,
  root,
  IntersectionObserver: IntersectionObserverStub,
  MutationObserver: null,
  CustomEvent: CustomEventStub,
  now: () => now,
  setTimeout: setTimer,
  clearTimeout: clearTimer,
  watchdogMs: 100,
  stallMs: 300,
  diagnosticsLimit: 8,
  qualityQuery,
};

const controller = createMediaPlaybackController(options);
const observer = IntersectionObserverStub.instances.at(-1);
assert.equal(controller.records.size, 3, 'all videos initialize independently');
assert.equal(createMediaPlaybackController(options), controller, 'duplicate initialization returns the live controller');

observer.set(videos[0], 0.2);
observer.set(videos[1], 0.8);
assert.equal(videos[0].playCalls, 1, '20% visibility is eligible');
assert.equal(videos[1].playCalls, 1, 'a second visible video starts independently');
assert.equal(controller.getState(videos[0]), 'starting', 'play promise does not imply rendered playback');
assert.match(videos[0].control.getAttribute('aria-label'), /^Play /, 'unverified playback never exposes a false Pause action');
assert.equal(videos[0].control.getAttribute('aria-pressed'), 'false', 'unverified playback is never pressed');
videos[0].frame(0.04);
assert.equal(controller.getState(videos[0]), 'starting', 'one advancing frame is insufficient');
videos[0].frame(0.08);
assert.equal(controller.getState(videos[0]), 'playing', 'two advancing rendered frames confirm playback');
assert.equal(videos[0].surface.dataset.playbackState, 'playing', 'surface state mirrors verified frames');
assert.match(videos[0].control.getAttribute('aria-label'), /^Pause /, 'control offers Pause only after verified frames');
videos[0].frame(0.01);
advance(200);
assert.equal(controller.getState(videos[0]), 'playing', 'a loop back to the start counts as continued rendered playback');

observer.set(videos[2], 0.5);
videos[2].currentTime = 0.04;
advance(100);
videos[2].currentTime = 0.08;
advance(100);
assert.equal(controller.getState(videos[2]), 'playing', 'currentTime fallback confirms two advances');
observer.set(videos[2], 0.1);
observer.set(videos[2], 0.8);
observer.set(videos[2], 0.1);
observer.set(videos[2], 0.8);
assert.equal(controller.getState(videos[2]), 'starting', 'rapid threshold crossings settle on the final eligible state');
videos[2].currentTime = 0.12;
advance(100);
videos[2].currentTime = 0.16;
advance(100);
assert.equal(controller.getState(videos[2]), 'playing', 'rapid scrolling still requires fresh verified advancement');

videos[0].dispatchEvent({ type: 'waiting' });
assert.equal(controller.getState(videos[0]), 'buffering', 'waiting enters buffering rather than claiming playback');
videos[0].frame(0.12);
assert.equal(controller.getState(videos[0]), 'buffering', 'one recovered frame does not yet claim playback');
videos[0].frame(0.16);
assert.equal(controller.getState(videos[0]), 'playing', 'advancing frames recover buffering without reload');

videos[0].dispatchEvent({ type: 'stalled' });
assert.equal(controller.getState(videos[0]), 'buffering', 'stalled media enters buffering');
videos[0].frame(0.2);
videos[0].frame(0.24);
assert.equal(controller.getState(videos[0]), 'playing', 'stalled media recovers only after two new frames');

videos[0].dispatchEvent({ type: 'error' });
assert.equal(controller.getState(videos[0]), 'starting', 'media errors enter the bounded replay recovery path');
videos[0].frame(0.28);
videos[0].frame(0.32);
assert.equal(controller.getState(videos[0]), 'playing', 'media-error replay requires verified frames');
document.defaultView.dispatchEvent({ type: 'pageshow', persisted: true });
assert.equal(controller.getState(videos[0]), 'playing', 'BFCache restoration preserves genuinely advancing playback');

document.dispatchEvent({
  type: 'click', target: videos[0].control,
  preventDefault() {}, stopPropagation() {}, stopImmediatePropagation() {},
});
assert.equal(controller.getState(videos[0]), 'paused', 'persistent control pauses verified playback');
assert.match(videos[0].control.getAttribute('aria-label'), /^Play /, 'paused control exposes Play');
document.dispatchEvent({
  type: 'click', target: videos[0].control,
  preventDefault() {}, stopPropagation() {}, stopImmediatePropagation() {},
});
videos[0].frame(0.2);
videos[0].frame(0.24);
assert.equal(controller.getState(videos[0]), 'playing', 'persistent control resumes playback');

document.hidden = true;
document.dispatchEvent({ type: 'visibilitychange' });
assert.equal(controller.getState(videos[0]), 'paused', 'hidden document pauses media');
document.hidden = false;
document.dispatchEvent({ type: 'visibilitychange' });
assert.equal(controller.getState(videos[0]), 'starting', 'visible document restarts eligible media');
videos[0].frame(0.28);
videos[0].frame(0.32);

document.defaultView.navigator.onLine = false;
document.defaultView.dispatchEvent({ type: 'offline' });
assert.equal(controller.getState(videos[0]), 'buffering', 'offline state never claims playback');
document.defaultView.navigator.onLine = true;
document.defaultView.dispatchEvent({ type: 'online' });
assert.equal(controller.getState(videos[0]), 'starting', 'online restoration restarts eligible media');
videos[0].frame(0.36);
videos[0].frame(0.4);

const loadsBeforeTierChange = videos[0].loadCalls;
qualityQuery.dispatchEvent({ type: 'change' });
assert.equal(videos[0].loadCalls, loadsBeforeTierChange + 1, 'quality-tier changes rerun source selection');
videos[0].dispatchEvent({ type: 'loadedmetadata' });
videos[0].frame(0.44);
videos[0].frame(0.48);
assert.equal(controller.getState(videos[0]), 'playing', 'quality-tier changes resume at verified playback');

document.dispatchEvent({
  type: 'click', target: videos[0].control,
  preventDefault() {}, stopPropagation() {}, stopImmediatePropagation() {},
});
qualityQuery.dispatchEvent({ type: 'change' });
assert.equal(controller.getState(videos[0]), 'paused', 'quality-tier changes preserve an in-range manual pause');
assert.equal(controller.records.get(videos[0]).resumeAfterLoad, null, 'manual pause never schedules a hidden tier-change resume');
document.dispatchEvent({
  type: 'click', target: videos[0].control,
  preventDefault() {}, stopPropagation() {}, stopImmediatePropagation() {},
});
videos[0].frame(0.52);
videos[0].frame(0.56);

observer.set(videos[1], 0.1);
observer.set(videos[1], 0.8);
videos[1].frame(0.12);
videos[1].frame(0.16);
assert.equal(controller.getState(videos[1]), 'playing', 'recovery fixture begins from verified playback');
const loadsBeforeRecovery = videos[1].loadCalls;
videos[1].playResults.push(new Error('blocked'), new Error('still blocked'));
videos[1].pause();
advance(300);
await flush();
await flush();
assert.equal(videos[1].loadCalls, loadsBeforeRecovery + 1, 'second recovery reloads the media');
videos[1].dispatchEvent({ type: 'loadedmetadata' });
videos[1].frame(0.04);
videos[1].frame(0.08);
assert.equal(controller.getState(videos[1]), 'playing', 'reloaded media resumes and requires frame confirmation');

const first = controller.records.get(videos[0]);
const playCallsBeforeManualPause = videos[0].playCalls;
first.manuallyPaused = true;
videos[0].dataset.manualPlayback = 'paused';
controller.reconcile(first, 'manual-pause');
document.dispatchEvent({ type: 'visibilitychange' });
assert.equal(videos[0].playCalls, playCallsBeforeManualPause, 'manual pause survives lifecycle reconciliation while visible');
observer.set(videos[0], 0.1);
assert.equal(first.manuallyPaused, false, 'manual pause clears only after leaving playback range');
observer.set(videos[0], 0.2);
assert.equal(videos[0].playCalls, playCallsBeforeManualPause + 1, 're-entry autoplays again');

const failureVideo = videos[0];
failureVideo.playResults.push(new Error('reject 1'), new Error('reject 2'), new Error('reject 3'));
failureVideo.pause();
advance(300);
await flush();
await flush();
assert.equal(controller.getState(failureVideo), 'starting', 'reload retry receives a fresh watchdog window');
advance(200);
assert.equal(controller.getState(failureVideo), 'starting', 'reload is not exhausted by the stale pre-reload timestamp');
advance(200);
assert.equal(controller.getState(failureVideo), 'failed', 'a genuinely timed-out reload exposes a persistent failed state');
const callsAtFailure = failureVideo.playCalls;
failureVideo.dispatchEvent({ type: 'loadedmetadata' });
await flush();
assert.equal(controller.getState(failureVideo), 'failed', 'late metadata cannot resurrect an exhausted reload');
assert.equal(failureVideo.playCalls, callsAtFailure, 'late metadata does not trigger another hidden play attempt');

const diagnostics = controller.getDiagnostics();
assert.ok(diagnostics.length <= 8, 'diagnostics are bounded');
assert.ok(diagnostics.some((item) => item.type === 'statechange'), 'diagnostics retain state transitions');

videos[2].isConnected = false;
controller.refresh();
assert.equal(controller.getState(videos[2]), null, 'disconnected media releases its controller record');
videos[2].isConnected = true;
controller.refresh();
assert.equal(controller.getState(videos[2]), 'idle', 'reconnected media receives one fresh idle record');

controller.dispose();
assert.equal(controller.records.size, 0, 'dispose releases every video record');
const replacement = createMediaPlaybackController(options);
assert.notEqual(replacement, controller, 'disposed controller can be safely reinitialized');
replacement.dispose();

console.log('Media playback controller checks passed.');
