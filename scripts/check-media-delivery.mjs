import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { videoVariants } from '../src/data/video-variants.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4322';
const urls = [...new Set(Object.values(videoVariants).flatMap(({ mobile, desktop }) => [
  mobile.mp4, mobile.webm, desktop.mp4, desktop.webm,
]))];
const failures = [];
const fail = (condition, message) => { if (condition) failures.push(message); };
const absolute = (path) => new URL(path, baseUrl).href;
const digest = (buffer) => createHash('sha256').update(buffer).digest('hex');
const representativeUrl = '/media/generated/video/one-report/video/sc-01.mobile.mp4';

const checkUrl = async (url) => {
  const expectedType = url.endsWith('.mp4') ? 'video/mp4' : 'video/webm';
  const local = await readFile(join(root, 'public', url.replace(/^\//, '')));
  const size = local.byteLength;

  const validateRange = async (label, range, start, end, headers = {}) => {
    const response = await fetch(absolute(url), { headers: { Range: range, ...headers } });
    const body = Buffer.from(await response.arrayBuffer());
    fail(response.status === 416, `${url}: valid ${label} incorrectly returned 416.`);
    fail(![200, 206].includes(response.status), `${url}: ${label} returned ${response.status}, expected native 200 or 206 semantics.`);
    if (response.status === 206) {
      fail(response.headers.get('content-range') !== `bytes ${start}-${end}/${size}`, `${url}: ${label} returned an invalid Content-Range.`);
      fail(!/bytes/i.test(response.headers.get('accept-ranges') || ''), `${url}: ${label} did not advertise byte ranges.`);
      fail(!body.equals(local.subarray(start, end + 1)), `${url}: ${label} bytes differ from the requested local slice.`);
    } else {
      fail(!body.equals(local), `${url}: ${label} full response differs from the local file.`);
    }
    return digest(body);
  };

  try {
    const head = await fetch(absolute(url), { method: 'HEAD' });
    const etag = head.headers.get('etag');
    const contentLength = head.headers.get('content-length');
    fail(!head.ok, `${url}: HEAD returned ${head.status}.`);
    fail(!(head.headers.get('content-type') || '').startsWith(expectedType), `${url}: incorrect Content-Type.`);
    fail(contentLength !== null && Number(contentLength) !== size, `${url}: Content-Length does not match the local file.`);
    fail(!etag, `${url}: missing ETag validator.`);

    const initialEnd = Math.min(1023, size - 1);
    const hashes = await Promise.all(Array.from({ length: url === representativeUrl ? 3 : 1 }, () => (
      validateRange('initial range', `bytes=0-${initialEnd}`, 0, initialEnd)
    )));
    fail(new Set(hashes).size !== 1, `${url}: concurrent initial-range responses differed.`);

    if (url === representativeUrl) {
      const middleStart = Math.floor(size / 2);
      const middleEnd = Math.min(middleStart + 1023, size - 1);
      await validateRange('middle range', `bytes=${middleStart}-${middleEnd}`, middleStart, middleEnd);

      const openStart = Math.max(size - 2048, 0);
      await validateRange('open-ended range', `bytes=${openStart}-`, openStart, size - 1);

      const suffixLength = Math.min(1024, size);
      await validateRange('suffix range', `bytes=-${suffixLength}`, size - suffixLength, size - 1);
    }

    if (etag) {
      if (url === representativeUrl) {
        await validateRange('matching If-Range', `bytes=0-${initialEnd}`, 0, initialEnd, { 'If-Range': etag });
      }
      const conditional = await fetch(absolute(url), {
        headers: { Range: `bytes=0-${initialEnd}`, 'If-None-Match': etag },
      });
      const conditionalBody = Buffer.from(await conditional.arrayBuffer());
      fail(conditional.status === 416, `${url}: matching If-None-Match incorrectly returned 416.`);
      fail(![200, 206, 304].includes(conditional.status), `${url}: matching If-None-Match returned ${conditional.status}, expected 200, 206, or 304.`);
      if (conditional.status === 206) {
        fail(!conditionalBody.equals(local.subarray(0, initialEnd + 1)), `${url}: conditional range bytes differ from the local file.`);
      } else if (conditional.status === 200) {
        fail(!conditionalBody.equals(local), `${url}: conditional full response differs from the local file.`);
      } else {
        fail(conditionalBody.byteLength !== 0, `${url}: 304 response unexpectedly included a body.`);
      }
    }

    if (url === representativeUrl) {
      const invalid = await fetch(absolute(url), { headers: { Range: `bytes=${size}-` } });
      const invalidBody = Buffer.from(await invalid.arrayBuffer());
      fail(![200, 416].includes(invalid.status), `${url}: invalid range returned ${invalid.status}, expected native 200 or 416 semantics.`);
      if (invalid.status === 416) {
        fail(invalid.headers.get('content-range') !== `bytes */${size}`, `${url}: invalid range returned the wrong Content-Range.`);
        fail(invalidBody.byteLength !== 0, `${url}: invalid range unexpectedly included a body.`);
      } else {
        fail(!invalidBody.equals(local), `${url}: ignored invalid range did not return the complete local file.`);
      }
    }
  } catch (error) {
    failures.push(`${url}: ${error.message}`);
  }
};

let nextUrl = 0;
await Promise.all(Array.from({ length: 8 }, async () => {
  while (nextUrl < urls.length) {
    const url = urls[nextUrl];
    nextUrl += 1;
    await checkUrl(url);
  }
}));

if (failures.length) {
  console.error(`Media delivery checks failed against ${baseUrl}:`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Native Static Assets delivery checks passed for ${urls.length} variants against ${baseUrl}.`);
