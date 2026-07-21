import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/Users/sakshatgoyal/.npm/_npx/705bc6b22212b352/node_modules/playwright');

const SITE_ORIGIN = 'https://gpenston.com';
const OUT = path.resolve('portfolio-site-studies/gpenston-com');
const captureTime = new Date().toISOString();
const mkdir = (dir) => fs.mkdir(dir, { recursive: true });
const write = async (file, value) => {
  await mkdir(path.dirname(file));
  await fs.writeFile(file, value);
};
const json = (value) => JSON.stringify(value, null, 2);
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function pageName(urlString) {
  const { pathname } = new URL(urlString);
  if (pathname === '/') return 'home';
  return pathname.replace(/^\/+|\/+$/g, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
}

function fileNameForResponse(urlString, index) {
  const url = new URL(urlString);
  const stem = path.basename(url.pathname) || 'index';
  const safeStem = stem.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
  return `${String(index).padStart(4, '0')}-${hash(urlString).slice(0, 12)}-${safeStem}`;
}

async function sitemapUrls() {
  const response = await fetch(`${SITE_ORIGIN}/sitemap.xml`);
  if (!response.ok) throw new Error(`Could not retrieve sitemap: ${response.status}`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].trim())
    .filter((url) => new URL(url).origin === SITE_ORIGIN);
}

async function scrollToLoad(page) {
  let previousHeight = 0;
  for (let pass = 0; pass < 3; pass += 1) {
    const height = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    for (let y = 0; y < height; y += 650) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await wait(110);
    }
    await wait(600);
    if (height === previousHeight) break;
    previousHeight = height;
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(250);
}

async function documentExtract(page) {
  return page.evaluate(() => {
    const compact = (value, max = 400) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
    const styleFields = (element) => {
      const style = getComputedStyle(element);
      return {
        display: style.display, position: style.position, visibility: style.visibility,
        color: style.color, backgroundColor: style.backgroundColor, borderColor: style.borderColor,
        borderRadius: style.borderRadius, opacity: style.opacity, boxShadow: style.boxShadow,
        fontFamily: style.fontFamily, fontSize: style.fontSize, fontWeight: style.fontWeight,
        fontStyle: style.fontStyle, lineHeight: style.lineHeight, letterSpacing: style.letterSpacing,
        textTransform: style.textTransform, textDecoration: style.textDecorationLine,
        cursor: style.cursor, transform: style.transform, transition: style.transition,
        overflow: style.overflow, zIndex: style.zIndex,
      };
    };
    const describe = (element, index) => {
      const rect = element.getBoundingClientRect();
      const attributes = [...element.attributes]
        .filter((attribute) => attribute.name.startsWith('aria-') || attribute.name.startsWith('data-') || ['href', 'src', 'alt', 'role', 'type', 'name', 'target'].includes(attribute.name))
        .reduce((result, attribute) => ({ ...result, [attribute.name]: attribute.value }), {});
      return {
        index, tag: element.tagName.toLowerCase(), id: element.id || null,
        className: typeof element.className === 'string' ? element.className : null,
        text: compact(element.innerText || element.textContent, 260), attributes,
        rect: { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) },
        style: styleFields(element),
      };
    };
    const all = [...document.querySelectorAll('*')];
    const interactiveSelector = 'a, button, input, select, textarea, summary, [role="button"], [onclick], [tabindex]:not([tabindex="-1"])';
    const interactive = [...document.querySelectorAll(interactiveSelector)];
    return {
      title: document.title,
      lang: document.documentElement.lang || null,
      url: location.href,
      viewport: { width: innerWidth, height: innerHeight, devicePixelRatio },
      bodyClass: document.body.className || null,
      fonts: [...document.fonts].map((font) => ({ family: font.family, style: font.style, weight: font.weight, status: font.status })),
      stylesheets: [...document.styleSheets].map((sheet) => ({ href: sheet.href || null, media: sheet.media?.mediaText || null, disabled: sheet.disabled })),
      styleBlocks: [...document.querySelectorAll('style')].map((style, index) => ({ index, text: style.textContent || '' })),
      scripts: [...document.scripts].map((script) => ({ src: script.src || null, type: script.type || null, async: script.async, defer: script.defer, inline: script.src ? null : script.textContent || '' })),
      links: [...document.links].map((link) => ({ text: compact(link.innerText || link.getAttribute('aria-label'), 260), href: link.href, target: link.target || null, rel: link.rel || null })),
      images: [...document.images].map((image) => ({ alt: image.alt || null, src: image.currentSrc || image.src || null, width: image.naturalWidth, height: image.naturalHeight, loading: image.loading || null })),
      media: [...document.querySelectorAll('video, audio, source, track')].map((media) => ({ tag: media.tagName.toLowerCase(), src: media.currentSrc || media.src || media.getAttribute('src') || null, type: media.getAttribute('type') || null, poster: media.getAttribute('poster') || null })),
      interactiveElements: interactive.map(describe),
      elementSamples: all.map(describe),
    };
  });
}

async function captureHovers(page, directory) {
  const base = await page.evaluate(() => {
    const selector = 'a, button, input, select, textarea, summary, [role="button"], [onclick], [tabindex]:not([tabindex="-1"])';
    return [...document.querySelectorAll(selector)].map((element, index) => {
      element.setAttribute('data-gpenston-capture-id', String(index));
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        index, tag: element.tagName.toLowerCase(), text: String(element.innerText || element.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 260),
        href: element instanceof HTMLAnchorElement ? element.href : null,
        role: element.getAttribute('role'),
        rect: { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) },
        before: { color: style.color, backgroundColor: style.backgroundColor, borderColor: style.borderColor, opacity: style.opacity, transform: style.transform, textDecoration: style.textDecorationLine, boxShadow: style.boxShadow, cursor: style.cursor },
      };
    });
  });

  const results = [];
  for (const entry of base) {
    const locator = page.locator(`[data-gpenston-capture-id="${entry.index}"]`);
    let error = null;
    try {
      await locator.scrollIntoViewIfNeeded({ timeout: 3000 });
      await locator.hover({ timeout: 3000 });
      await wait(140);
      const after = await locator.evaluate((element) => {
        const style = getComputedStyle(element);
        return { color: style.color, backgroundColor: style.backgroundColor, borderColor: style.borderColor, opacity: style.opacity, transform: style.transform, textDecoration: style.textDecorationLine, boxShadow: style.boxShadow, cursor: style.cursor };
      });
      const changed = JSON.stringify(entry.before) !== JSON.stringify(after);
      const screenshot = changed ? `screenshots/hover/hover-${String(entry.index + 1).padStart(3, '0')}.png` : null;
      if (screenshot) await locator.screenshot({ path: path.join(directory, screenshot), timeout: 8000 });
      results.push({ ...entry, after, changed, screenshot });
    } catch (captureError) {
      error = captureError instanceof Error ? captureError.message : String(captureError);
      results.push({ ...entry, error });
    }
  }
  await page.evaluate(() => document.querySelectorAll('[data-gpenston-capture-id]').forEach((element) => element.removeAttribute('data-gpenston-capture-id')));
  await page.evaluate(() => window.scrollTo(0, 0));
  return results;
}

async function capturePage(browser, url) {
  const name = pageName(url);
  const directory = path.join(OUT, 'pages', name);
  await mkdir(path.join(directory, 'network', 'files'));
  await mkdir(path.join(directory, 'screenshots', 'hover'));
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    recordHar: { path: path.join(directory, 'session.har'), content: 'attach', mode: 'full' },
  });
  const page = await context.newPage();
  const entries = [];
  const bodies = [];
  const seen = new Map();
  page.on('response', (response) => {
    const responseUrl = response.url();
    if (!/^https?:/i.test(responseUrl)) return;
    const key = `${response.request().method()} ${responseUrl}`;
    if (seen.has(key)) return;
    const entry = {
      id: entries.length + 1,
      url: responseUrl,
      method: response.request().method(),
      resourceType: response.request().resourceType(),
      status: response.status(),
      statusText: response.statusText(),
      headers: response.headers(),
      requestHeaders: response.request().headers(),
      postData: response.request().postData() || null,
      file: null,
      bodyError: null,
    };
    seen.set(key, entry);
    entries.push(entry);
    bodies.push((async () => {
      try {
        const body = await response.body();
        const file = fileNameForResponse(responseUrl, entry.id);
        await write(path.join(directory, 'network', 'files', file), body);
        entry.file = `network/files/${file}`;
        entry.bytes = body.length;
      } catch (error) {
        entry.bodyError = error instanceof Error ? error.message : String(error);
      }
    })());
  });

  let navigationError = null;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  } catch (error) {
    navigationError = error instanceof Error ? error.message : String(error);
    await wait(2000);
  }
  await scrollToLoad(page);
  await page.screenshot({ path: path.join(directory, 'screenshots', 'desktop-1440x900-viewport.png') });
  await page.screenshot({ path: path.join(directory, 'screenshots', 'desktop-1440x900-full.png'), fullPage: true });
  const hydrated = await page.content();
  const visibleText = await page.locator('body').innerText();
  const extract = await documentExtract(page);
  const interactions = await captureHovers(page, directory);

  await page.setViewportSize({ width: 834, height: 1112 });
  await scrollToLoad(page);
  await page.screenshot({ path: path.join(directory, 'screenshots', 'tablet-834x1112-viewport.png') });
  await page.screenshot({ path: path.join(directory, 'screenshots', 'tablet-834x1112-full.png'), fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await scrollToLoad(page);
  await page.screenshot({ path: path.join(directory, 'screenshots', 'mobile-390x844-viewport.png') });
  await page.screenshot({ path: path.join(directory, 'screenshots', 'mobile-390x844-full.png'), fullPage: true });

  await Promise.allSettled(bodies);
  const storage = await context.storageState();
  await write(path.join(directory, 'hydrated.html'), hydrated);
  await write(path.join(directory, 'visible-text.txt'), visibleText);
  await write(path.join(directory, 'design-extract.json'), json(extract));
  await write(path.join(directory, 'interactions.json'), json({ capturedAt: captureTime, targets: interactions }));
  await write(path.join(directory, 'network', 'manifest.json'), json({ capturedAt: captureTime, pageUrl: url, finalUrl: page.url(), navigationError, entries }));
  await write(path.join(directory, 'storage-state.json'), json(storage));
  await context.close();
  return { name, url, finalUrl: extract.url, title: extract.title, visibleTextCharacters: visibleText.length, interactiveTargets: interactions.length, networkResponses: entries.length, networkFiles: entries.filter((entry) => entry.file).length, navigationError };
}

await mkdir(OUT);
const urls = await sitemapUrls();
await write(path.join(OUT, 'source-url.txt'), `${SITE_ORIGIN}/\n`);
await write(path.join(OUT, 'sitemap.xml'), await (await fetch(`${SITE_ORIGIN}/sitemap.xml`)).text());
await write(path.join(OUT, 'robots.txt'), await (await fetch(`${SITE_ORIGIN}/robots.txt`)).text());
const browser = await chromium.launch({ headless: true });
const summary = [];
try {
  for (const url of urls) {
    process.stdout.write(`Capturing ${url}\n`);
    summary.push(await capturePage(browser, url));
  }
} finally {
  await browser.close();
}
await write(path.join(OUT, 'summary.json'), json({ capturedAt: captureTime, origin: SITE_ORIGIN, sitemapPages: urls.length, pages: summary }));
await write(path.join(OUT, 'README.md'), `# gpenston.com full-site capture\n\nCaptured ${urls.length} public first-party pages from the site's published sitemap at ${captureTime}.\n\nEach page under \`pages/\` contains the hydrated DOM, readable text, a design and DOM extract, interaction/hover records, full-page and viewport screenshots at desktop/tablet/mobile sizes, per-page network HAR, downloaded response bodies, and browser storage state.\n\nThis is a private research archive. It records public site content and links to third-party destinations, but does not crawl those external destinations.\n`);
process.stdout.write(`Completed ${summary.length} pages.\n`);
