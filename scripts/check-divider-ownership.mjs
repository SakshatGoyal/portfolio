import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');

const requiredRules = [
  [
    /\.home-project-column\s*\+\s*\.home-project-column\s*\{[^}]*border-left:\s*var\(--home-divider\)/s,
    'The later homepage column must own the shared vertical divider.',
  ],
  [
    /\.home-project-card\s*\+\s*\.home-project-card\s*\{[^}]*border-top:\s*var\(--home-divider\)/s,
    'The later homepage card must own the shared horizontal divider.',
  ],
];

const forbiddenRules = [
  [/\.home-project-columns::(?:before|after)/, 'Do not paint homepage grid dividers with pseudo-elements.'],
  [/\.home-project-columns\s*\{[^}]*\bgap:\s*1px/s, 'Do not use a one-pixel grid gap as a divider.'],
  [/\.home-project-column\s*\{[^}]*background:\s*var\(--home-line\)/s, 'Do not use a column background to paint card seams.'],
  [/\.home-site-footer\s*\{[^}]*border-top\s*:/s, 'The base footer owns its top boundary; the homepage may only supply its color token.'],
];

const errors = [];

for (const [pattern, message] of requiredRules) {
  if (!pattern.test(css)) errors.push(message);
}

for (const [pattern, message] of forbiddenRules) {
  if (pattern.test(css)) errors.push(message);
}

if (errors.length) {
  console.error('Divider ownership check failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Divider ownership check passed.');
