import { GENERATED_VIDEO_BYTES } from './video-sizes.generated';

const REVALIDATE = 'public, max-age=0, must-revalidate';

const withVideoHeaders = (response: Response, request: Request): Response => {
  const headers = new Headers(response.headers);
  const size = GENERATED_VIDEO_BYTES[new URL(request.url).pathname as keyof typeof GENERATED_VIDEO_BYTES];
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', REVALIDATE);
  if (Number.isSafeInteger(size) && size > 0) headers.set('Content-Length', String(size));
  if (new URL(request.url).hostname.endsWith('.workers.dev')) {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

const unsatisfiedRange = (size: number, request: Request): Response => {
  const headers = new Headers({
    'Accept-Ranges': 'bytes',
    'Cache-Control': REVALIDATE,
    'Content-Range': `bytes */${size}`,
  });
  if (new URL(request.url).hostname.endsWith('.workers.dev')) {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return new Response(null, { status: 416, headers });
};

const parseSingleRange = (value: string, size: number): { start: number; end: number } | null => {
  const match = /^bytes=(\d*)-(\d*)$/.exec(value.trim());
  if (!match || (!match[1] && !match[2]) || size <= 0) return null;

  let start: number;
  let end: number;
  if (!match[1]) {
    const suffixLength = Number(match[2]);
    if (!Number.isSafeInteger(suffixLength) || suffixLength <= 0) return null;
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] ? Number(match[2]) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end)) return null;
    end = Math.min(end, size - 1);
  }

  return start <= end && start < size ? { start, end } : null;
};

const ifRangeMatches = (request: Request, response: Response): boolean => {
  const condition = request.headers.get('If-Range');
  if (!condition) return true;

  if (condition.startsWith('"') || condition.startsWith('W/')) {
    return condition === response.headers.get('ETag');
  }

  const conditionTime = Date.parse(condition);
  const modifiedTime = Date.parse(response.headers.get('Last-Modified') ?? '');
  return Number.isFinite(conditionTime) && Number.isFinite(modifiedTime) && modifiedTime <= conditionTime;
};

const sliceBody = (body: ReadableStream<Uint8Array>, start: number, end: number): ReadableStream<Uint8Array> => {
  const reader = body.getReader();
  let offset = 0;
  let closed = false;

  return new ReadableStream({
    async pull(controller) {
      while (!closed) {
        const { done, value } = await reader.read();
        if (done) {
          closed = true;
          controller.close();
          return;
        }

        const chunkStart = offset;
        const chunkEnd = offset + value.byteLength - 1;
        offset += value.byteLength;
        if (chunkEnd < start) continue;
        if (chunkStart > end) {
          closed = true;
          await reader.cancel();
          controller.close();
          return;
        }

        const from = Math.max(start - chunkStart, 0);
        const to = Math.min(end - chunkStart + 1, value.byteLength);
        controller.enqueue(value.subarray(from, to));
        if (chunkEnd >= end) {
          closed = true;
          await reader.cancel();
          controller.close();
        }
        return;
      }
    },
    async cancel(reason) {
      if (!closed) {
        closed = true;
        await reader.cancel(reason);
      }
    },
  });
};

export default {
  async fetch(request, env): Promise<Response> {
    const rangeHeader = request.headers.get('Range');
    const isRangeRequest = request.method === 'GET' && Boolean(rangeHeader);
    const assetRequest = isRangeRequest
      ? new Request(request, { headers: new Headers(request.headers) })
      : request;
    if (isRangeRequest) assetRequest.headers.delete('Range');
    const response = await env.ASSETS.fetch(assetRequest);
    if (!isRangeRequest || !rangeHeader || !ifRangeMatches(request, response)) {
      return withVideoHeaders(response, request);
    }
    if (!/^bytes=\d*-\d*$/.test(rangeHeader.trim())) return withVideoHeaders(response, request);

    const size = GENERATED_VIDEO_BYTES[new URL(request.url).pathname as keyof typeof GENERATED_VIDEO_BYTES];
    if (!Number.isSafeInteger(size) || size <= 0) return withVideoHeaders(response, request);
    const range = parseSingleRange(rangeHeader, size);
    if (!range || !response.body) return unsatisfiedRange(size, request);

    const headers = new Headers(response.headers);
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Cache-Control', REVALIDATE);
    headers.set('Content-Length', String(range.end - range.start + 1));
    headers.set('Content-Range', `bytes ${range.start}-${range.end}/${size}`);
    if (new URL(request.url).hostname.endsWith('.workers.dev')) {
      headers.set('X-Robots-Tag', 'noindex, nofollow');
    }
    return new Response(sliceBody(response.body, range.start, range.end), { status: 206, headers });
  },
} satisfies ExportedHandler<Cloudflare.Env>;
