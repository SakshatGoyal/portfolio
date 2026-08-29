import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const deploymentTarget = process.env.DEPLOYMENT_TARGET === 'production' ? 'production' : 'preview';

const walk = async (directory) => {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
};

const executableInlineScripts = new Set();
for (const htmlPath of (await walk(dist)).filter((path) => extname(path) === '.html')) {
  const html = await readFile(htmlPath, 'utf8');
  for (const match of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attributes, source] = match;
    if (/\bsrc\s*=/.test(attributes) || !source.trim()) continue;
    executableInlineScripts.add(source);
  }
}

const scriptHashes = [...executableInlineScripts]
  .map((source) => `'sha256-${createHash('sha256').update(source).digest('base64')}'`)
  .sort();
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self'",
  "form-action 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data:",
  "media-src 'self'",
  "object-src 'none'",
  `script-src 'self' ${scriptHashes.join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
].join('; ');

const headers = `/*
  Content-Security-Policy: ${contentSecurityPolicy}
  Permissions-Policy: camera=(), geolocation=(), microphone=(), payment=(), usb=()
  Referrer-Policy: strict-origin-when-cross-origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
${deploymentTarget === 'preview' ? '  X-Robots-Tag: noindex, nofollow\n' : ''}

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/media/generated/images/*
  Cache-Control: public, max-age=31536000, immutable

/media/generated/video/*
  Cache-Control: public, max-age=0, must-revalidate

/media/projects/*
  Cache-Control: public, max-age=0, must-revalidate

/media/shared/*
  Cache-Control: public, max-age=0, must-revalidate

/fonts/*
  Cache-Control: public, max-age=86400, must-revalidate

`;

await writeFile(join(dist, '_headers'), headers);
console.log(`Wrote ${deploymentTarget} security and cache headers with ${scriptHashes.length} inline script hashes.`);
