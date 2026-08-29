import { PROJECTS } from '../src/data/projects.js';

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
const baseUrl = process.env.BASE_URL;
const runs = Number(process.env.MEDIA_SOAK_RUNS || 25);

if (!username || !accessKey || !baseUrl) {
  console.error('BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY, and BASE_URL are required.');
  process.exit(2);
}

const auth = `Basic ${Buffer.from(`${username}:${accessKey}`).toString('base64')}`;
const routes = ['/', '/about/', ...PROJECTS.map(({ route }) => route)];
const api = async (url, options = {}) => {
  const response = await fetch(url, { ...options, headers: { Authorization: auth, 'Content-Type': 'application/json', ...options.headers } });
  const body = await response.text();
  if (!response.ok) throw new Error(`${response.status} ${body}`);
  return body ? JSON.parse(body) : null;
};
const version = (value) => String(value || '').split(/[^0-9]+/).map(Number);
const newer = (a, b) => {
  const left = version(a.os_version || a.browser_version);
  const right = version(b.os_version || b.browser_version);
  for (let index = 0; index < Math.max(left.length, right.length); index += 1) {
    if ((left[index] || 0) !== (right[index] || 0)) return (right[index] || 0) - (left[index] || 0);
  }
  return 0;
};
const catalog = await api('https://api.browserstack.com/automate/browsers.json');
const latest = (predicate) => catalog.filter(predicate).sort(newer)[0];
const isRealMobile = (item) => item.real_mobile === true || item.real_mobile === 'true';
const targets = [
  ...['chrome', 'safari', 'firefox', 'edge'].map((browser) => latest((item) => !isRealMobile(item) && item.browser?.toLowerCase() === browser)),
  latest((item) => isRealMobile(item) && /safari|iphone/i.test(item.browser || '') && /iPhone/i.test(item.device || '')),
  latest((item) => isRealMobile(item) && /chrome|android/i.test(item.browser || '') && /Samsung Galaxy S/i.test(item.device || '')),
].filter(Boolean);

if (targets.length < 6) throw new Error(`Expected six current BrowserStack targets, found ${targets.length}.`);

const execute = async (sessionId, script, args = []) => api(`https://hub-cloud.browserstack.com/wd/hub/session/${sessionId}/execute/async`, {
  method: 'POST', body: JSON.stringify({ script, args }),
});
const navigate = async (sessionId, url) => api(`https://hub-cloud.browserstack.com/wd/hub/session/${sessionId}/url`, {
  method: 'POST', body: JSON.stringify({ url }),
});
const refresh = async (sessionId) => api(`https://hub-cloud.browserstack.com/wd/hub/session/${sessionId}/refresh`, {
  method: 'POST', body: '{}',
});
const setViewport = async (sessionId, width) => api(`https://hub-cloud.browserstack.com/wd/hub/session/${sessionId}/window/rect`, {
  method: 'POST', body: JSON.stringify({ width, height: 900 }),
});
const close = async (sessionId) => api(`https://hub-cloud.browserstack.com/wd/hub/session/${sessionId}`, { method: 'DELETE' });
const verifyScript = String.raw`
const expectedConcurrent = arguments[0] || 0;
const done = arguments[arguments.length - 1];
(async () => {
  const videos = [...document.querySelectorAll('video[data-autoplay-on-view], video[data-home-autoplay-on-view]')];
  const failures = [];
  const ratio = (video) => {
    const rect = video.getBoundingClientRect();
    const visible = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0));
    return rect.height ? visible / rect.height : 0;
  };
  let maxConcurrent = 0;
  for (let y = 0; y <= document.documentElement.scrollHeight - innerHeight; y += Math.max(200, innerHeight * .5)) {
    scrollTo({ top: y, behavior: 'instant' });
    await new Promise((resolve) => setTimeout(resolve, 1400));
    const eligible = videos.filter((video) => ratio(video) >= .2);
    maxConcurrent = Math.max(maxConcurrent, eligible.length);
    const before = eligible.map((video) => video.currentTime);
    await new Promise((resolve) => setTimeout(resolve, 900));
    eligible.forEach((video, index) => {
      if (video.dataset.playbackState !== 'playing' || video.currentTime <= before[index] + .01) {
        failures.push({ label: video.getAttribute('aria-label'), state: video.dataset.playbackState, simultaneous: eligible.length, y });
      }
    });
  }
  if (maxConcurrent < expectedConcurrent) failures.push({ expectedConcurrent, maxConcurrent, error: 'Expected simultaneous homepage playback geometry was not exercised.' });
  for (const video of videos) {
    video.scrollIntoView({ block: 'center', behavior: 'instant' });
    await new Promise((resolve) => setTimeout(resolve, 3800));
    const before = video.currentTime;
    await new Promise((resolve) => setTimeout(resolve, 900));
    const after = video.currentTime;
    if (video.dataset.playbackState !== 'playing' || after <= before + 0.01) {
      failures.push({ label: video.getAttribute('aria-label'), state: video.dataset.playbackState, before, after, error: video.error?.message });
    }
  }
  done({ failures, maxConcurrent, diagnostics: window.__mediaPlaybackController?.getDiagnostics?.() || [] });
})().catch((error) => done({ failures: [{ error: error.message }] }));`;

const failures = [];
for (const target of targets) {
  for (let run = 1; run <= runs; run += 1) {
    const mobile = isRealMobile(target);
    const options = mobile
      ? { deviceName: target.device, osVersion: target.os_version, realMobile: 'true' }
      : { os: target.os, osVersion: target.os_version };
    const created = await api('https://hub-cloud.browserstack.com/wd/hub/session', {
      method: 'POST',
      body: JSON.stringify({ capabilities: { alwaysMatch: {
        browserName: target.browser,
        browserVersion: target.browser_version,
        'bstack:options': { ...options, projectName: 'Sakshat Goyal Portfolio', buildName: 'Media playback closure', sessionName: `${target.device || target.browser} run ${run}` },
      } } }),
    });
    const sessionId = created.value?.sessionId || created.sessionId;
    try {
      const viewports = mobile ? [null] : [390, 768, 1056, 1440];
      for (const viewport of viewports) {
        if (viewport) await setViewport(sessionId, viewport);
        for (const route of routes) {
          await navigate(sessionId, new URL(route, baseUrl).href);
          for (const phase of ['cold', 'reload']) {
            if (phase === 'reload') await refresh(sessionId);
            const expectedConcurrent = !mobile && viewport === 1440 && route === '/' ? 5 : 0;
            const result = await execute(sessionId, verifyScript, [expectedConcurrent]);
            const value = result.value ?? result;
            if (value.failures?.length) failures.push({ target: target.device || target.browser, run, viewport, route, phase, ...value });
          }
        }
      }
    } finally {
      await close(sessionId);
    }
  }
}

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log(`BrowserStack media soak passed: ${targets.length} environments × ${runs} cold/reload sessions × ${routes.length} routes.`);
