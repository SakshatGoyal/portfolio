# Sakshat Goyal portfolio: complete project guide

## What this project is

This repository is the canonical source for Sakshat Goyal's product-design portfolio at `https://sakshat-goyal.com`. It is a static Astro site with a homepage, an About page, seven long-form case studies, a designed 404 page, and a media-heavy Memory Lane collection. The public experience is treated as a finished contract: content, layout, typography, motion, responsive behavior, and interactions should change only when explicitly requested or when a demonstrated defect requires it.

The site is production-hosted by the existing Cloudflare Worker `sakshat-goyal-portfolio`. GitHub `main` is the production branch; other branches create Cloudflare version previews. The current repository contains the production-ready implementation, explicit media inventories, generated responsive derivatives, delivery safeguards, and contract checks used to keep future edits dependable.

## Recommended reading order

1. `PROJECT_GUIDE.md` — the short operating agreement that agents must read before editing.
2. `AGENTS.md` — repository-specific preservation and verification rules.
3. `README.md` — setup commands and the shortest architectural overview.
4. `src/data/projects.js` — the canonical project registry for names, routes, metadata, sequence, homepage cards, and legacy paths.
5. `CASE_STUDY_DESIGN_SYSTEM.md` — the responsive rail, typography, spacing, divider, media, and component contracts.
6. `CONTENT_PROVENANCE.md` — where case-study claims and media came from.
7. `package.json` — the supported runtime, checks, build pipeline, and operational commands.
8. `scripts/media-assets-manifest.json` — the authoritative ownership, classification, consumer, byte-size, and checksum record for media.
9. `worker/index.ts` and the two Wrangler files — edge delivery, byte ranges, preview isolation, and Worker identities.

## How the project is organized

```text
website/
├── src/                 authored pages, shared UI, data registries, browser behavior, and CSS
├── public/              deployable fonts, redirects, robots rules, original images/posters, and derivatives
├── media-source/        preserved high-quality source videos used to regenerate delivery variants
├── scripts/             generators, static contracts, delivery tests, deployment helpers, and manifests
├── worker/              the small Cloudflare request layer and generated video-size table
├── docs/                incident history, typography reference, and archive-restoration evidence
└── root configuration   Astro, TypeScript, npm/runtime, Cloudflare, governance, and provenance files
```

The organization separates authored intent from generated output. `src/` describes what should render; `public/media/projects/` contains deployable originals and posters; `public/media/generated/` contains reproducible responsive derivatives; `media-source/` preserves original videos outside the deployable site; and `scripts/media-assets-manifest.json` connects every asset to its owner and consumer. Build output (`dist/`), dependencies, Astro state, Wrangler state, and production-readiness evidence under `.tmp/` are intentionally ignored.

## Key files

### Governance and product contracts

- `PROJECT_GUIDE.md` is the concise session-start guide. Read it before any implementation change.
- `PROJECT-GUIDE.md` is this comprehensive reference. Use it to understand the whole repository or locate a specific file.
- `AGENTS.md` states that this is the canonical site and requires preservation plus browser verification for visual work.
- `CASE_STUDY_DESIGN_SYSTEM.md` records the visual system as measurable rules rather than preferences.
- `QUALITY_RUBRIC.md` defines a 70-point independent evaluation model and a 90% release threshold.
- `CONTENT_PROVENANCE.md` records which projects came from Figma and which came from supplied project folders.

### Application structure

- `src/layouts/BaseLayout.astro` owns document metadata, canonical/social tags, global shell, portfolio panel, case menu, media viewer, and global browser initialization.
- `src/layouts/CaseLayout.astro` provides the shared case-study header, metadata, hero, team panel, body, and circular previous/next navigation.
- `src/pages/index.astro` renders the homepage from the project registry and gallery data.
- `src/data/projects.js` is the single source of truth for visitor-facing project identity and routing.
- `src/styles/global.css` contains the full responsive visual system; it is large because it preserves several project-specific compositions in one stylesheet.
- `src/scripts/media-playback-controller.js` owns lazy source activation, viewport autoplay, reduced-motion behavior, rendered-frame confirmation, recovery, controls, and bounded diagnostics.

### Media and delivery

- `scripts/media-assets-manifest.json` classifies 312 deployable files, 31 source videos, and 95 archived files with hashes and consumers.
- `src/data/image-variants.js`, `src/data/video-variants.js`, `src/styles/generated-image-variants.css`, and `worker/video-sizes.generated.ts` are generated files; change their generators or source manifests, not these outputs by hand.
- `worker/index.ts` delegates normal requests to Static Assets and implements correct single-range responses for generated videos.
- `wrangler.production.jsonc` targets the live Worker; `wrangler.preview.jsonc` targets the separate manual preview Worker. Never deploy without naming the intended config.

## File types and what they mean

- **Authored Astro pages and components (`.astro`)** combine HTML semantics, data, scoped styles, and small interaction scripts. Pages define content; components and layouts define reusable behavior.
- **Registries and browser modules (`src/data/*.js`, `src/scripts/*.js`)** centralize routes/media relationships and complex client behavior. Generated registries carry an explicit “do not edit by hand” header.
- **CSS (`src/styles/`)** contains system tokens, responsive geometry, project themes, motion fallbacks, focus states, and generated image-set variables.
- **Operational scripts (`scripts/`)** either generate derivatives/manifests, enforce source-level contracts, probe deployed behavior, or manage previews. Most checks fail closed with a specific error.
- **Deployable media (`public/media/`)** includes preserved page assets and content-hashed image/video variants. Files are organized by project owner; `shared/` is reserved for genuinely cross-site assets.
- **Source media (`media-source/`)** is input to `npm run build:media`, not copied into `dist/`.
- **Governance and evidence (`*.md`, `docs/`)** preserve design rules, provenance, incident resolution, restoration records, and contributor boundaries.
- **Generated/build state** includes `dist/`, `.astro/`, `.wrangler/`, `node_modules/`, and `.tmp/`; none belongs in Git.

## How work flows through the project

1. Start from synchronized `main`, read `PROJECT_GUIDE.md`, and identify the owning registry, page, component, script, or style contract.
2. Make the smallest sufficient authored change. Project identity and route changes begin in `src/data/projects.js`; case content belongs in its route; shared behavior belongs in a component/layout/module.
3. For media changes, preserve the source, update the explicit media inventory, run the relevant generator, and commit both the generated derivative and its generated registry. Do not overwrite source videos or hand-edit hashed filenames.
4. Run the pinned Node 24.19.0/npm 11.19.0 toolchain. `npm run check` performs portable contracts and Astro checking; `npm run build` repeats them and creates `dist/`; `npm run verify:release` additionally requires local `ffmpeg`/`ffprobe` and verifies media/image quality.
5. For visible changes, run the site and verify the rendered result in the Codex built-in Browser at relevant desktop/mobile sizes, including keyboard and reduced-motion states.
6. Push a branch to obtain a Cloudflare version preview. Preview HTML receives `X-Robots-Tag: noindex, nofollow`; production HTML does not.
7. Merge the verified branch to GitHub `main`. Cloudflare Workers Builds installs the exact runtime, runs the portable production build with `DEPLOYMENT_TARGET=production`, and deploys the existing production Worker.
8. Verify the live apex, redirects, routes, console/network behavior, and any changed media. Cloudflare keeps prior Worker versions for rollback.

## Quality and traceability system

Quality is maintained by layered contracts rather than by a linter alone. Content checks protect exact copy, routes, project order, legacy redirects, and gallery notes. Visual and accessibility checks protect hierarchy, contrast, focus behavior, motion fallbacks, responsive geometry, typography, and divider ownership. Media checks protect classification, checksums, dimensions, generated variants, playback state recovery, byte ranges, MIME types, cache validators, and restoration of the archived files. Astro and TypeScript provide framework/type validation.

Traceability comes from `CONTENT_PROVENANCE.md`, the media and restoration manifests, generated-file headers, explicit source-to-consumer mappings, Git history, Cloudflare build logs, and immutable Worker versions. Some contracts inspect source structure with assertions; they do not replace browser review. BrowserStack soak testing exists but requires external credentials and a deployed `BASE_URL`.

### Common commands

```sh
npm install                  # exact runtime enforced by preinstall
npm run dev                  # local Astro server
npm run check                # portable repository and Astro contracts
npm run build                # checked static build; preview headers by default
npm run verify:release       # deep media/image checks plus build; requires ffmpeg/ffprobe
npm run build:media          # regenerate responsive MP4/WebM variants and size manifest
npm run build:images         # regenerate lossless responsive WebP variants
npm run check:deployment -- https://example.test/
```

To inspect production history, run `npx wrangler deployments list --config wrangler.production.jsonc`. To restore a known version, run `npx wrangler rollback <version-id> --config wrangler.production.jsonc --message "reason"`; verify the live site immediately afterward.

## Where things stand now

As of 2026-08-29, production remediation and cutover are complete. The portfolio is live on the apex domain, `www` redirects to it, non-production branches create previews, and pushes to `main` automatically deploy through Cloudflare Workers Builds. Recent commits added and verified this GitHub-to-Cloudflare workflow without changing the rendered site.

There is no open status tracker in the repository. Future work should be request-driven: edit on a branch, validate locally, review a preview, merge to `main`, and verify production. The incident document records that full cloud-device media-soak closure still depends on BrowserStack credentials when that optional external evidence is required.

## Complete file inventory

The inventory below covers every Git-tracked file after this guide is added. Dates are filesystem modification dates captured on 2026-08-29. Text token counts use word count as the requested approximation and are rounded to the nearest hundred above 500; binary files report `0 (binary)` because textual tokens do not apply. Binary rows group files only when they share a directory, purpose, and modification date; every filename is still stated explicitly.

### Project root

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `.gitignore` | Excludes generated dependencies, builds, local evidence, and OS metadata. | 2026-08-28 | 6 |
| `.node-version` | Pins the required Node.js version. | 2026-08-28 | 1 |
| `.npmrc` | Makes npm reject unsupported engine versions. | 2026-08-28 | 1 |
| `AGENTS.md` | Defines canonical-site preservation and verification rules for coding agents. | 2026-08-28 | 67 |
| `CASE_STUDY_DESIGN_SYSTEM.md` | Specifies the responsive editorial rail, typography, spacing, media, and governance contracts. | 2026-08-28 | ~1,600 |
| `CONTENT_PROVENANCE.md` | Maps case-study routes to their Figma or supplied-source origins. | 2026-08-28 | 217 |
| `PROJECT-GUIDE.md` | Comprehensive architecture, workflow, quality, status, and file reference. | 2026-08-29 | ~4,000 |
| `PROJECT_GUIDE.md` | Concise mandatory operating guide read before implementation changes. | 2026-08-28 | 188 |
| `QUALITY_RUBRIC.md` | Defines the seven-dimension visual-quality score and release threshold. | 2026-08-28 | 394 |
| `README.md` | Provides the project introduction, setup commands, and key-document pointers. | 2026-08-28 | 85 |
| `astro.config.mjs` | Configures static Astro output, canonical site origin, trailing slashes, and sitemap generation. | 2026-08-28 | 34 |
| `package-lock.json` | Locks the complete npm dependency graph and integrity hashes. | 2026-08-28 | ~12,000 |
| `package.json` | Defines exact runtimes, dependencies, validation, generation, build, and preview commands. | 2026-08-29 | 266 |
| `tsconfig.json` | Applies Astro strict TypeScript settings and excludes generated directories. | 2026-08-28 | 12 |
| `worker-configuration.d.ts` | Wrangler-generated Cloudflare runtime and binding type declarations. | 2026-08-29 | ~67,200 |
| `wrangler.preview.jsonc` | Defines the separate manual preview Worker and Static Assets behavior. | 2026-08-29 | 27 |
| `wrangler.production.jsonc` | Defines the live Worker and Static Assets behavior without a workers.dev production route. | 2026-08-29 | 27 |

### `docs/`

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `docs/media-playback-incident.md` | Records the playback failure, root evidence, resolution contract, and remaining external gate. | 2026-08-26 | 313 |
| `docs/production-readiness/media-archive-daaf38d.json` | Records exact paths, hashes, sizes, and restore targets for 95 archived unused files. | 2026-08-28 | ~1,200 |
| `docs/typography-inventory.md` | Documents active font roles, sizes, colors, examples, and responsive behavior. | 2026-08-28 | ~1,400 |

### `media-source/`

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `media-source/projects/cisco-customer-insights/home/video/cisco-customer-dashboard.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-17 | 0 (binary) |
| `media-source/projects/cisco-customer-insights/video/customer-insights-flow.webm`<br>`media-source/projects/cisco-customer-insights/video/data-table-module.webm`<br>`media-source/projects/cisco-customer-insights/video/opportunity-extension-flow.webm`<br>`media-source/projects/cisco-customer-insights/video/opportunity-list-test.webm`<br>`media-source/projects/cisco-customer-insights/video/opportunity-panel-test.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-15 | 0 (binary) |
| `media-source/projects/global-data-analytics/home/video/gda.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-15 | 0 (binary) |
| `media-source/projects/hitachi-energy-partner-portal/home/video/hitachi-cover.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-17 | 0 (binary) |
| `media-source/projects/hitachi-energy-partner-portal/video/configuration-error-handling.webm`<br>`media-source/projects/hitachi-energy-partner-portal/video/itemized-quotation-flow.webm`<br>`media-source/projects/hitachi-energy-partner-portal/video/partner-commerce-overview.webm`<br>`media-source/projects/hitachi-energy-partner-portal/video/quotation-concept-inline.webm`<br>`media-source/projects/hitachi-energy-partner-portal/video/quotation-concept-panel.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-15 | 0 (binary) |
| `media-source/projects/memory-lane/gallery/video/cisco-ready-ai-00.webm`<br>`media-source/projects/memory-lane/gallery/video/hbs-faculty-platform-00.webm`<br>`media-source/projects/memory-lane/gallery/video/hbs-leading-with-ai-00.webm`<br>`media-source/projects/memory-lane/gallery/video/luminoso-00.webm`<br>`media-source/projects/memory-lane/gallery/video/panoptica-00.webm`<br>`media-source/projects/memory-lane/gallery/video/panoptica-01.webm`<br>`media-source/projects/memory-lane/gallery/video/trebuchet-trials-01.webm`<br>`media-source/projects/memory-lane/gallery/video/wexel-00.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-21 | 0 (binary) |
| `media-source/projects/memory-lane/gallery/video/trebuchet-trials-02.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-26 | 0 (binary) |
| `media-source/projects/one-report/home/video/onereport-cover.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-17 | 0 (binary) |
| `media-source/projects/one-report/video/sc-01.webm`<br>`media-source/projects/one-report/video/sc-02.webm`<br>`media-source/projects/one-report/video/sc-03.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-17 | 0 (binary) |
| `media-source/projects/sales-workbench-ai/home/video/panw-renewal-exception-row-anchor.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-17 | 0 (binary) |
| `media-source/projects/sales-workbench-ai/video/anchored-responses-snippet-01.webm`<br>`media-source/projects/sales-workbench-ai/video/codex-shim-03.webm`<br>`media-source/projects/sales-workbench-ai/video/panw-traceability-scenario.webm`<br>`media-source/projects/sales-workbench-ai/video/trace-snippet.webm` | Preserved source video(s) used to regenerate responsive delivery variants. | 2026-08-15 | 0 (binary) |

### `public/`

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `public/_redirects` | Declares permanent redirects from three superseded case-study routes. | 2026-08-28 | 18 |
| `public/robots.txt` | Allows production crawling and points to the sitemap. | 2026-08-28 | 6 |
| `public/fonts/basically-a-mono-400.woff2`<br>`public/fonts/cabinet-grotesk-variable.ttf`<br>`public/fonts/clash-display-600.woff2`<br>`public/fonts/fragment-mono-400.woff2`<br>`public/fonts/fustat-400.ttf`<br>`public/fonts/fustat-500.ttf`<br>`public/fonts/fustat-700.ttf`<br>`public/fonts/inter-400.woff2`<br>`public/fonts/manrope-400.ttf`<br>`public/fonts/manrope-500.ttf`<br>`public/fonts/manrope-700.ttf`<br>`public/fonts/public-sans-400.otf`<br>`public/fonts/space-grotesk-500.woff2`<br>`public/fonts/space-grotesk-600.woff2`<br>`public/fonts/space-grotesk-700.woff2` | Bundled local font asset(s) used by the typography system. | 2026-08-15 | 0 (binary) |
| `public/fonts/cisco-sans-bold.ttf`<br>`public/fonts/cisco-sans-regular.ttf` | Bundled local font asset(s) used by the typography system. | 2026-08-17 | 0 (binary) |
| `public/fonts/general-sans-400.otf`<br>`public/fonts/general-sans-500.otf`<br>`public/fonts/general-sans-700.otf` | Bundled local font asset(s) used by the typography system. | 2026-08-21 | 0 (binary) |
| `public/fonts/manrope-600.ttf` | Bundled local font asset(s) used by the typography system. | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/ai-research-architecture/hbs-cover.9c811cdd6eaf.w1200.webp`<br>`public/media/generated/images/ai-research-architecture/hbs-cover.ea91644c7bb1.w640.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/cisco-customer-insights/participant-pivot-analysis-redacted.ad14eb317ee5.w1200.webp`<br>`public/media/generated/images/cisco-customer-insights/participant-pivot-analysis-redacted.c05d4b809e5a.w640.webp`<br>`public/media/generated/images/cisco-customer-insights/strategy-sensemaking.1582bca88c29.w640.webp`<br>`public/media/generated/images/cisco-customer-insights/strategy-sensemaking.7a8ce22be3d3.w1200.webp`<br>`public/media/generated/images/cisco-customer-insights/visualization-ideation.11867d77b41b.w1200.webp`<br>`public/media/generated/images/cisco-customer-insights/visualization-ideation.7c857e5913a4.w640.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/global-data-analytics/bob-image-01.117d7e032f34.w1200.webp`<br>`public/media/generated/images/global-data-analytics/bob-image-01.b52de4c69fa5.w640.webp`<br>`public/media/generated/images/global-data-analytics/bob-image-bob.0339460f3397.w1200.webp`<br>`public/media/generated/images/global-data-analytics/bob-image-bob.e6ada9335ad0.w640.webp`<br>`public/media/generated/images/global-data-analytics/bob-image-feature.838eecca5427.w640.webp`<br>`public/media/generated/images/global-data-analytics/bob-image-feature.891befbd7518.w1200.webp`<br>`public/media/generated/images/global-data-analytics/imgImage36.ee4adb13f4f9.w1200.webp`<br>`public/media/generated/images/global-data-analytics/imgImage36.f338e093bbd6.w640.webp`<br>`public/media/generated/images/global-data-analytics/imgImage37.3d84ecb88757.w1200.webp`<br>`public/media/generated/images/global-data-analytics/imgImage37.5c7f85f8be1b.w640.webp`<br>`public/media/generated/images/global-data-analytics/imgImage38.52a469b9d5a7.w640.webp`<br>`public/media/generated/images/global-data-analytics/imgImage38.a99fd538bba3.w1200.webp`<br>`public/media/generated/images/global-data-analytics/imgImage41.385b8abd0b4a.w640.webp`<br>`public/media/generated/images/global-data-analytics/imgImage41.99d1d1fe0af4.w1200.webp`<br>`public/media/generated/images/global-data-analytics/imgImage83.31d3b5cba043.w1200.webp`<br>`public/media/generated/images/global-data-analytics/imgImage83.66622317e11c.w640.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/hitachi-energy-partner-portal/CJM-4.455ac0dc1a7e.w640.webp`<br>`public/media/generated/images/hitachi-energy-partner-portal/CJM-4.f01a31f04034.w1200.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/one-report/onereport-analysis-01.8ff88438a658.w1200.webp`<br>`public/media/generated/images/one-report/onereport-analysis-01.f18c5e82f38b.w640.webp`<br>`public/media/generated/images/one-report/onereport-analysis-02.a7e66ff3b2b0.w1200.webp`<br>`public/media/generated/images/one-report/onereport-analysis-02.bf2c29a92372.w640.webp`<br>`public/media/generated/images/one-report/onereport-analysis-03.0c51ae48e52a.w1200.webp`<br>`public/media/generated/images/one-report/onereport-analysis-03.b5855f96b7bc.w640.webp`<br>`public/media/generated/images/one-report/onereport-analysis-04.03cb00e38319.w640.webp`<br>`public/media/generated/images/one-report/onereport-analysis-04.dcd02010c035.w1200.webp`<br>`public/media/generated/images/one-report/onereport-insights.2a3a732407f0.w1200.webp`<br>`public/media/generated/images/one-report/onereport-insights.6ce1efbc9523.w640.webp`<br>`public/media/generated/images/one-report/onereport-report.3786e599be33.w1200.webp`<br>`public/media/generated/images/one-report/onereport-report.60eefb2202bd.w640.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/sales-workbench-ai/backgrounds/panw-background-blue.0e4989bdab12.w900.webp`<br>`public/media/generated/images/sales-workbench-ai/backgrounds/panw-background-blue.9c62a93886ec.w1773.webp`<br>`public/media/generated/images/sales-workbench-ai/backgrounds/panw-background-dark.30bc29dccf7d.w900.webp`<br>`public/media/generated/images/sales-workbench-ai/backgrounds/panw-background-dark.f2d588f32139.w1773.webp`<br>`public/media/generated/images/sales-workbench-ai/backgrounds/panw-background-gray.3b3d2cdf37b0.w900.webp`<br>`public/media/generated/images/sales-workbench-ai/backgrounds/panw-background-gray.b488697c06b7.w1773.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/sales-workbench-ai/home/panw-background-orange.51864bab2e31.w900.webp`<br>`public/media/generated/images/sales-workbench-ai/home/panw-background-orange.ab1a2f933356.w1773.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/images/sales-workbench-ai/imgPanwImage013.50adb9f97283.w640.webp`<br>`public/media/generated/images/sales-workbench-ai/imgPanwImage013.ba18bab1d58e.w1200.webp`<br>`public/media/generated/images/sales-workbench-ai/imgPanwImage016.16c0ffe3d4fd.w640.webp`<br>`public/media/generated/images/sales-workbench-ai/imgPanwImage016.c7cf564457fa.w1200.webp`<br>`public/media/generated/images/sales-workbench-ai/imgScreenshot20260629At1208521.27b3f5e520f5.w640.webp`<br>`public/media/generated/images/sales-workbench-ai/imgScreenshot20260629At1208521.df2a575296e3.w1200.webp`<br>`public/media/generated/images/sales-workbench-ai/panw-artifacts-discovery.820587b0c146.w640.webp`<br>`public/media/generated/images/sales-workbench-ai/panw-artifacts-discovery.9413155ef929.w1200.webp`<br>`public/media/generated/images/sales-workbench-ai/panw-image-05-02.0bdcefc84394.w1200.webp`<br>`public/media/generated/images/sales-workbench-ai/panw-image-05-02.7662b27559da.w640.webp` | Content-hashed responsive WebP derivative(s). | 2026-08-28 | 0 (binary) |
| `public/media/generated/video/cisco-customer-insights/home/cisco-customer-dashboard.desktop.mp4`<br>`public/media/generated/video/cisco-customer-insights/home/cisco-customer-dashboard.desktop.webm`<br>`public/media/generated/video/cisco-customer-insights/home/cisco-customer-dashboard.mobile.mp4`<br>`public/media/generated/video/cisco-customer-insights/home/cisco-customer-dashboard.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/cisco-customer-insights/video/customer-insights-flow.desktop.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/customer-insights-flow.desktop.webm`<br>`public/media/generated/video/cisco-customer-insights/video/customer-insights-flow.mobile.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/customer-insights-flow.mobile.webm`<br>`public/media/generated/video/cisco-customer-insights/video/data-table-module.desktop.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/data-table-module.desktop.webm`<br>`public/media/generated/video/cisco-customer-insights/video/data-table-module.mobile.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/data-table-module.mobile.webm`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-extension-flow.desktop.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-extension-flow.desktop.webm`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-extension-flow.mobile.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-extension-flow.mobile.webm`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-list-test.desktop.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-list-test.desktop.webm`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-list-test.mobile.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-list-test.mobile.webm`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-panel-test.desktop.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-panel-test.desktop.webm`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-panel-test.mobile.mp4`<br>`public/media/generated/video/cisco-customer-insights/video/opportunity-panel-test.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/global-data-analytics/home/gda.desktop.mp4`<br>`public/media/generated/video/global-data-analytics/home/gda.desktop.webm`<br>`public/media/generated/video/global-data-analytics/home/gda.mobile.mp4`<br>`public/media/generated/video/global-data-analytics/home/gda.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/hitachi-energy-partner-portal/home/hitachi-cover.desktop.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/home/hitachi-cover.desktop.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/home/hitachi-cover.mobile.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/home/hitachi-cover.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/hitachi-energy-partner-portal/video/configuration-error-handling.desktop.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/configuration-error-handling.desktop.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/configuration-error-handling.mobile.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/configuration-error-handling.mobile.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/itemized-quotation-flow.desktop.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/itemized-quotation-flow.desktop.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/itemized-quotation-flow.mobile.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/itemized-quotation-flow.mobile.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/partner-commerce-overview.desktop.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/partner-commerce-overview.desktop.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/partner-commerce-overview.mobile.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/partner-commerce-overview.mobile.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-inline.desktop.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-inline.desktop.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-inline.mobile.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-inline.mobile.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-panel.desktop.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-panel.desktop.webm`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-panel.mobile.mp4`<br>`public/media/generated/video/hitachi-energy-partner-portal/video/quotation-concept-panel.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/memory-lane/gallery/cisco-ready-ai-00.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/cisco-ready-ai-00.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/cisco-ready-ai-00.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/cisco-ready-ai-00.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/hbs-faculty-platform-00.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/hbs-faculty-platform-00.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/hbs-faculty-platform-00.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/hbs-faculty-platform-00.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/hbs-leading-with-ai-00.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/hbs-leading-with-ai-00.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/hbs-leading-with-ai-00.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/hbs-leading-with-ai-00.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/luminoso-00.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/luminoso-00.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/luminoso-00.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/luminoso-00.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/panoptica-00.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/panoptica-00.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/panoptica-00.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/panoptica-00.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/panoptica-01.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/panoptica-01.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/panoptica-01.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/panoptica-01.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-01.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-01.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-01.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-01.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-02.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-02.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-02.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/trebuchet-trials-02.mobile.webm`<br>`public/media/generated/video/memory-lane/gallery/wexel-00.desktop.mp4`<br>`public/media/generated/video/memory-lane/gallery/wexel-00.desktop.webm`<br>`public/media/generated/video/memory-lane/gallery/wexel-00.mobile.mp4`<br>`public/media/generated/video/memory-lane/gallery/wexel-00.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/one-report/home/onereport-cover.desktop.mp4`<br>`public/media/generated/video/one-report/home/onereport-cover.desktop.webm`<br>`public/media/generated/video/one-report/home/onereport-cover.mobile.mp4`<br>`public/media/generated/video/one-report/home/onereport-cover.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/one-report/video/sc-01.desktop.mp4`<br>`public/media/generated/video/one-report/video/sc-01.desktop.webm`<br>`public/media/generated/video/one-report/video/sc-01.mobile.mp4`<br>`public/media/generated/video/one-report/video/sc-01.mobile.webm`<br>`public/media/generated/video/one-report/video/sc-02.desktop.mp4`<br>`public/media/generated/video/one-report/video/sc-02.desktop.webm`<br>`public/media/generated/video/one-report/video/sc-02.mobile.mp4`<br>`public/media/generated/video/one-report/video/sc-02.mobile.webm`<br>`public/media/generated/video/one-report/video/sc-03.desktop.mp4`<br>`public/media/generated/video/one-report/video/sc-03.desktop.webm`<br>`public/media/generated/video/one-report/video/sc-03.mobile.mp4`<br>`public/media/generated/video/one-report/video/sc-03.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/sales-workbench-ai/home/panw-renewal-exception-row-anchor.desktop.mp4`<br>`public/media/generated/video/sales-workbench-ai/home/panw-renewal-exception-row-anchor.desktop.webm`<br>`public/media/generated/video/sales-workbench-ai/home/panw-renewal-exception-row-anchor.mobile.mp4`<br>`public/media/generated/video/sales-workbench-ai/home/panw-renewal-exception-row-anchor.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/generated/video/sales-workbench-ai/video/anchored-responses-snippet-01.desktop.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/anchored-responses-snippet-01.desktop.webm`<br>`public/media/generated/video/sales-workbench-ai/video/anchored-responses-snippet-01.mobile.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/anchored-responses-snippet-01.mobile.webm`<br>`public/media/generated/video/sales-workbench-ai/video/codex-shim-03.desktop.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/codex-shim-03.desktop.webm`<br>`public/media/generated/video/sales-workbench-ai/video/codex-shim-03.mobile.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/codex-shim-03.mobile.webm`<br>`public/media/generated/video/sales-workbench-ai/video/panw-traceability-scenario.desktop.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/panw-traceability-scenario.desktop.webm`<br>`public/media/generated/video/sales-workbench-ai/video/panw-traceability-scenario.mobile.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/panw-traceability-scenario.mobile.webm`<br>`public/media/generated/video/sales-workbench-ai/video/trace-snippet.desktop.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/trace-snippet.desktop.webm`<br>`public/media/generated/video/sales-workbench-ai/video/trace-snippet.mobile.mp4`<br>`public/media/generated/video/sales-workbench-ai/video/trace-snippet.mobile.webm` | Responsive MP4/WebM mobile and desktop delivery variant(s). | 2026-08-26 | 0 (binary) |
| `public/media/projects/ai-research-architecture/images/hbs-cover.webp` | Deployable project image or illustration asset(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/ai-research-architecture/images/imgConsistencyVsInterpretiveDepthTable1.png`<br>`public/media/projects/ai-research-architecture/images/imgImage2.png`<br>`public/media/projects/ai-research-architecture/images/imgImage3.png`<br>`public/media/projects/ai-research-architecture/images/imgImage32.png`<br>`public/media/projects/ai-research-architecture/images/imgImage4.png`<br>`public/media/projects/ai-research-architecture/images/imgImage5.png`<br>`public/media/projects/ai-research-architecture/images/imgImage68.png`<br>`public/media/projects/ai-research-architecture/images/imgImage69.png`<br>`public/media/projects/ai-research-architecture/images/imgImage71.png`<br>`public/media/projects/ai-research-architecture/images/imgImage72.png`<br>`public/media/projects/ai-research-architecture/images/imgImage73.png`<br>`public/media/projects/ai-research-architecture/images/imgImage74.png`<br>`public/media/projects/ai-research-architecture/images/imgImage75.png`<br>`public/media/projects/ai-research-architecture/images/imgImage76.png`<br>`public/media/projects/ai-research-architecture/images/imgImage77.png`<br>`public/media/projects/ai-research-architecture/images/imgImage78.png`<br>`public/media/projects/ai-research-architecture/images/imgImage79.png`<br>`public/media/projects/ai-research-architecture/images/imgImage80.png`<br>`public/media/projects/ai-research-architecture/images/imgImage81.png`<br>`public/media/projects/ai-research-architecture/images/imgImage82.png`<br>`public/media/projects/ai-research-architecture/images/imgPanwImage012.png` | Deployable project image or illustration asset(s). | 2026-08-15 | 0 (binary) |
| `public/media/projects/cisco-customer-insights/home/posters/cisco-customer-dashboard.png` | Decoded poster fallback(s) for project video. | 2026-08-17 | 0 (binary) |
| `public/media/projects/cisco-customer-insights/images/data-lens-model.png`<br>`public/media/projects/cisco-customer-insights/images/exploratory-concept.png`<br>`public/media/projects/cisco-customer-insights/images/extension-constraints.png`<br>`public/media/projects/cisco-customer-insights/images/guided-concept.png`<br>`public/media/projects/cisco-customer-insights/images/opportunity-card-copy.png`<br>`public/media/projects/cisco-customer-insights/images/opportunity-collection.png`<br>`public/media/projects/cisco-customer-insights/images/previous-dashboard.png`<br>`public/media/projects/cisco-customer-insights/images/strategy-sensemaking.png`<br>`public/media/projects/cisco-customer-insights/images/visualization-ideation.png` | Deployable project image or illustration asset(s). | 2026-08-15 | 0 (binary) |
| `public/media/projects/cisco-customer-insights/images/participant-pivot-analysis-redacted.png` | Deployable project image or illustration asset(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/cisco-customer-insights/posters/customer-insights-flow.jpg`<br>`public/media/projects/cisco-customer-insights/posters/data-table-module.jpg`<br>`public/media/projects/cisco-customer-insights/posters/opportunity-extension-flow.jpg`<br>`public/media/projects/cisco-customer-insights/posters/opportunity-list-test.jpg`<br>`public/media/projects/cisco-customer-insights/posters/opportunity-panel-test.jpg` | Decoded poster fallback(s) for project video. | 2026-08-15 | 0 (binary) |
| `public/media/projects/global-data-analytics/home/posters/gda.png` | Decoded poster fallback(s) for project video. | 2026-08-15 | 0 (binary) |
| `public/media/projects/global-data-analytics/images/bob-image-01.webp`<br>`public/media/projects/global-data-analytics/images/bob-image-bob.webp`<br>`public/media/projects/global-data-analytics/images/bob-image-feature.webp`<br>`public/media/projects/global-data-analytics/images/imgImage36.webp`<br>`public/media/projects/global-data-analytics/images/imgImage37.webp`<br>`public/media/projects/global-data-analytics/images/imgImage83.webp` | Deployable project image or illustration asset(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/global-data-analytics/images/bob-image-02.png`<br>`public/media/projects/global-data-analytics/images/bob-image-03.png`<br>`public/media/projects/global-data-analytics/images/bob-image-04.png`<br>`public/media/projects/global-data-analytics/images/bob-image-05.png`<br>`public/media/projects/global-data-analytics/images/imgImage38.png`<br>`public/media/projects/global-data-analytics/images/imgImage41.png`<br>`public/media/projects/global-data-analytics/images/imgOnePeerComparisonHypothesisSplitIntoTwoConcepts.png`<br>`public/media/projects/global-data-analytics/images/imgScreenshot20260810At1619451.png` | Deployable project image or illustration asset(s). | 2026-08-15 | 0 (binary) |
| `public/media/projects/hitachi-energy-partner-portal/home/posters/hitachi-cover.png` | Decoded poster fallback(s) for project video. | 2026-08-17 | 0 (binary) |
| `public/media/projects/hitachi-energy-partner-portal/images/CJM-4.png` | Deployable project image or illustration asset(s). | 2026-08-26 | 0 (binary) |
| `public/media/projects/hitachi-energy-partner-portal/images/Defining-Spaces-2-1536x864.png`<br>`public/media/projects/hitachi-energy-partner-portal/images/Persona-2-1536x864.png` | Deployable project image or illustration asset(s). | 2026-08-25 | 0 (binary) |
| `public/media/projects/hitachi-energy-partner-portal/images/flexible-product-tile.png`<br>`public/media/projects/hitachi-energy-partner-portal/images/original-quotation-boundary.png`<br>`public/media/projects/hitachi-energy-partner-portal/images/quotation-conversation-model.png`<br>`public/media/projects/hitachi-energy-partner-portal/images/updated-quotation-flow.png` | Deployable project image or illustration asset(s). | 2026-08-15 | 0 (binary) |
| `public/media/projects/hitachi-energy-partner-portal/posters/configuration-error-handling.jpg`<br>`public/media/projects/hitachi-energy-partner-portal/posters/itemized-quotation-flow.jpg`<br>`public/media/projects/hitachi-energy-partner-portal/posters/partner-commerce-overview.jpg`<br>`public/media/projects/hitachi-energy-partner-portal/posters/quotation-concept-inline.jpg`<br>`public/media/projects/hitachi-energy-partner-portal/posters/quotation-concept-panel.jpg` | Decoded poster fallback(s) for project video. | 2026-08-15 | 0 (binary) |
| `public/media/projects/memory-lane/gallery/images/cisco-ready-ai-00-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/cready-redesign-00.webp`<br>`public/media/projects/memory-lane/gallery/images/cready-redesign-01.webp`<br>`public/media/projects/memory-lane/gallery/images/cready-redesign-02.webp`<br>`public/media/projects/memory-lane/gallery/images/hbs-faculty-platform-00-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/hbs-faculty-platform-01.webp`<br>`public/media/projects/memory-lane/gallery/images/hbs-leading-with-ai-00-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/luminoso-00-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/panoptica-00-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/panoptica-01-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/panw-workbench.webp`<br>`public/media/projects/memory-lane/gallery/images/trebuchet-trials-00.webp`<br>`public/media/projects/memory-lane/gallery/images/trebuchet-trials-01-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/trebuchet-trials-02-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/trebuchet-trials-03.webp`<br>`public/media/projects/memory-lane/gallery/images/wexel-00-poster.webp`<br>`public/media/projects/memory-lane/gallery/images/wexel-01.webp`<br>`public/media/projects/memory-lane/gallery/images/wexel-02.webp`<br>`public/media/projects/memory-lane/gallery/images/wexel-03.webp`<br>`public/media/projects/memory-lane/gallery/images/wexel-04.webp`<br>`public/media/projects/memory-lane/gallery/images/wexel-05.webp` | Deployable project image or illustration asset(s). | 2026-08-21 | 0 (binary) |
| `public/media/projects/memory-lane/trail/Degrees-of-interpretive-depth.webp`<br>`public/media/projects/memory-lane/trail/IMG_0484.webp`<br>`public/media/projects/memory-lane/trail/IMG_0492.webp`<br>`public/media/projects/memory-lane/trail/IMG_0589.webp`<br>`public/media/projects/memory-lane/trail/IMG_0652.webp`<br>`public/media/projects/memory-lane/trail/bob-image-feature.webp`<br>`public/media/projects/memory-lane/trail/cready-redesign-02.webp`<br>`public/media/projects/memory-lane/trail/hbs-event.webp`<br>`public/media/projects/memory-lane/trail/luminoso-frame-06.webp`<br>`public/media/projects/memory-lane/trail/luminoso-frame-08.webp`<br>`public/media/projects/memory-lane/trail/trebuchet-hero-prototype.webp`<br>`public/media/projects/memory-lane/trail/wexel-cover-image.webp` | Optimized Memory Lane pointer-trail image(s). | 2026-08-28 | 0 (binary) |
| `public/media/projects/one-report/home/posters/onereport-cover.png` | Decoded poster fallback(s) for project video. | 2026-08-17 | 0 (binary) |
| `public/media/projects/one-report/images/onereport-analysis-01.webp`<br>`public/media/projects/one-report/images/onereport-analysis-02.webp`<br>`public/media/projects/one-report/images/onereport-analysis-03.webp`<br>`public/media/projects/one-report/images/onereport-analysis-04.webp`<br>`public/media/projects/one-report/images/onereport-insights.webp`<br>`public/media/projects/one-report/images/onereport-report.webp` | Deployable project image or illustration asset(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/one-report/images/sc-01.png`<br>`public/media/projects/one-report/images/sc-02.png`<br>`public/media/projects/one-report/images/sc-03.png` | Deployable project image or illustration asset(s). | 2026-08-15 | 0 (binary) |
| `public/media/projects/one-report/posters/sc-01.png`<br>`public/media/projects/one-report/posters/sc-02.png`<br>`public/media/projects/one-report/posters/sc-03.png` | Decoded poster fallback(s) for project video. | 2026-08-17 | 0 (binary) |
| `public/media/projects/sales-workbench-ai/backgrounds/panw-background-blue.png`<br>`public/media/projects/sales-workbench-ai/backgrounds/panw-background-dark.png`<br>`public/media/projects/sales-workbench-ai/backgrounds/panw-background-gray.png` | Project background or homepage presentation image(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/sales-workbench-ai/home/images/panw-background-orange.png` | Project background or homepage presentation image(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/sales-workbench-ai/home/posters/panw-renewal-exception-row-anchor.png` | Decoded poster fallback(s) for project video. | 2026-08-17 | 0 (binary) |
| `public/media/projects/sales-workbench-ai/images/imgImage66.png`<br>`public/media/projects/sales-workbench-ai/images/imgPanwImage013.png`<br>`public/media/projects/sales-workbench-ai/images/imgPanwImage016.png`<br>`public/media/projects/sales-workbench-ai/images/imgScreenshot20260810At1940311.png`<br>`public/media/projects/sales-workbench-ai/images/information-filled.svg`<br>`public/media/projects/sales-workbench-ai/images/panw-thinking.png`<br>`public/media/projects/sales-workbench-ai/images/panw-trace.png` | Deployable project image or illustration asset(s). | 2026-08-15 | 0 (binary) |
| `public/media/projects/sales-workbench-ai/images/imgScreenshot20260629At1208521.webp`<br>`public/media/projects/sales-workbench-ai/images/panw-artifacts-discovery.webp`<br>`public/media/projects/sales-workbench-ai/images/panw-image-05-02.webp` | Deployable project image or illustration asset(s). | 2026-08-17 | 0 (binary) |
| `public/media/projects/sales-workbench-ai/posters/anchored-responses-snippet-01.png`<br>`public/media/projects/sales-workbench-ai/posters/codex-shim-03.png`<br>`public/media/projects/sales-workbench-ai/posters/panw-traceability-scenario.png`<br>`public/media/projects/sales-workbench-ai/posters/trace-snippet.png` | Decoded poster fallback(s) for project video. | 2026-08-15 | 0 (binary) |
| `public/media/shared/homepage-social-preview.914a51567bd9.jpg` | Shared production homepage social-preview image. | 2026-08-29 | 0 (binary) |

### `scripts/`

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `scripts/build-media-variants.mjs` | Generator for media variants and its committed outputs. | 2026-08-28 | 470 |
| `scripts/build-memory-lane-trail-assets.mjs` | Generator for memory lane trail assets and its committed outputs. | 2026-08-28 | 295 |
| `scripts/build-responsive-images.mjs` | Generator for responsive images and its committed outputs. | 2026-08-28 | ~600 |
| `scripts/check-accessibility-contracts.mjs` | Executable contract check for accessibility contracts. | 2026-08-28 | ~600 |
| `scripts/check-cloudflare-config.mjs` | Executable contract check for cloudflare config. | 2026-08-29 | 180 |
| `scripts/check-content-invariants.mjs` | Executable contract check for content invariants. | 2026-08-28 | ~1,100 |
| `scripts/check-deployment-contracts.mjs` | Executable contract check for deployment contracts. | 2026-08-29 | ~700 |
| `scripts/check-divider-ownership.mjs` | Executable contract check for divider ownership. | 2026-08-28 | ~500 |
| `scripts/check-gallery-content.mjs` | Executable contract check for gallery content. | 2026-08-28 | ~900 |
| `scripts/check-image-contracts.mjs` | Executable contract check for image contracts. | 2026-08-28 | 318 |
| `scripts/check-image-quality.mjs` | Executable contract check for image quality. | 2026-08-28 | 151 |
| `scripts/check-media-browserstack.mjs` | Executable contract check for media browserstack. | 2026-08-28 | ~800 |
| `scripts/check-media-contracts.mjs` | Executable contract check for media contracts. | 2026-08-28 | ~500 |
| `scripts/check-media-delivery.mjs` | Executable contract check for media delivery. | 2026-08-26 | 213 |
| `scripts/check-media-inventory.mjs` | Executable contract check for media inventory. | 2026-08-29 | 464 |
| `scripts/check-media-playback-controller.mjs` | Executable contract check for media playback controller. | 2026-08-28 | ~1,500 |
| `scripts/check-media-restoration.mjs` | Executable contract check for media restoration. | 2026-08-28 | 269 |
| `scripts/check-runtime-contracts.mjs` | Executable contract check for runtime contracts. | 2026-08-28 | 66 |
| `scripts/check-runtime.mjs` | Executable contract check for runtime. | 2026-08-28 | 84 |
| `scripts/check-visual-contracts.mjs` | Executable contract check for visual contracts. | 2026-08-28 | ~7,400 |
| `scripts/deploy-preview.mjs` | Fail-closed manual preview deployer with verification evidence and automatic rollback. | 2026-08-29 | 447 |
| `scripts/export-knowledge-base-pdfs.py` | Builds the site and exports case/gallery content into searchable PDFs and a manifest. | 2026-08-28 | ~600 |
| `scripts/image-variant-sources.mjs` | Explicit source lists and width tiers for responsive-image generation. | 2026-08-28 | 71 |
| `scripts/media-assets-manifest.json` | Authoritative media classification, ownership, consumer, byte-size, and checksum registry. | 2026-08-29 | ~9,600 |
| `scripts/prune-public-assets.mjs` | Ensures built media exactly matches the deployable manifest and checksums. | 2026-08-28 | 220 |
| `scripts/rollback-preview.mjs` | Validates a version ID and rolls back the separate manual preview Worker. | 2026-08-28 | 63 |
| `scripts/runtime-contract.mjs` | Reusable exact Node/npm runtime assertion. | 2026-08-28 | 43 |
| `scripts/write-deployment-files.mjs` | Generates CSP/security/cache headers and preview-only indexing protection in dist. | 2026-08-29 | 234 |
| `scripts/write-video-size-manifest.mjs` | Generates or verifies the Worker video-byte lookup table. | 2026-08-29 | 129 |

### `src/`

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `src/components/Carousel.astro` | Astro component implementing carousel. | 2026-08-28 | ~800 |
| `src/components/CaseStudyHeader.astro` | Astro component implementing case study header. | 2026-08-28 | 220 |
| `src/components/Figure.astro` | Astro component implementing figure. | 2026-08-28 | 245 |
| `src/components/GalleryArtifact.astro` | Astro component implementing gallery artifact. | 2026-08-28 | 225 |
| `src/components/GalleryProject.astro` | Astro component implementing gallery project. | 2026-08-28 | 236 |
| `src/components/MediaPlaybackControl.astro` | Astro component implementing media playback control. | 2026-08-28 | 49 |
| `src/components/MemoryLaneTrail.astro` | Astro component implementing memory lane trail. | 2026-08-28 | 106 |
| `src/components/PageHeading.astro` | Astro component implementing page heading. | 2026-08-21 | 42 |
| `src/components/PortfolioPanel.astro` | Astro component implementing portfolio panel. | 2026-08-28 | 202 |
| `src/components/ResponsiveImage.astro` | Astro component implementing responsive image. | 2026-08-28 | 116 |
| `src/components/ResponsiveVideo.astro` | Astro component implementing responsive video. | 2026-08-28 | 178 |
| `src/components/SiteFooter.astro` | Astro component implementing site footer. | 2026-08-28 | 9 |
| `src/components/TeamPanel.astro` | Astro component implementing team panel. | 2026-08-17 | 100 |
| `src/content/gallery-notes.md` | Authoritative editorial copy for the nine Memory Lane gallery projects. | 2026-08-28 | ~600 |
| `src/data/contact-links.js` | Data registry for contact links. | 2026-08-28 | 15 |
| `src/data/gallery.js` | Maps gallery copy to media artifacts and explicit grid placements. | 2026-08-28 | ~800 |
| `src/data/image-variants.js` | Generated responsive-image and background manifest with hashes and dimensions. | 2026-08-28 | ~1,300 |
| `src/data/memory-lane-trail.js` | Data registry for memory lane trail. | 2026-08-28 | 128 |
| `src/data/panel-navigation.js` | Data registry for panel navigation. | 2026-08-28 | 65 |
| `src/data/project-sequence.js` | Data registry for project sequence. | 2026-08-28 | 78 |
| `src/data/project-titles.js` | Data registry for project titles. | 2026-08-26 | 24 |
| `src/data/projects.js` | Canonical project registry for routes, labels, metadata, homepage cards, sequence, media owners, and legacy paths. | 2026-08-28 | 494 |
| `src/data/video-variants.js` | Generated source-to-mobile/desktop MP4/WebM manifest. | 2026-08-28 | ~600 |
| `src/layouts/BaseLayout.astro` | Global HTML shell, metadata, navigation, media viewer, and browser initialization. | 2026-08-29 | ~2,100 |
| `src/layouts/CaseLayout.astro` | Shared case-study composition, metadata, hero, team, and circular navigation. | 2026-08-28 | 340 |
| `src/pages/404.astro` | Designed noindex not-found page. | 2026-08-28 | 108 |
| `src/pages/about.astro` | About route composed with the shared base layout. | 2026-08-28 | 88 |
| `src/pages/index.astro` | Homepage with project cards, autoplay media controls, gallery, and Memory Lane trail. | 2026-08-28 | ~700 |
| `src/pages/work/ai-research-architecture.astro` | Case-study route for ai research architecture. | 2026-08-28 | ~1,500 |
| `src/pages/work/cisco-customer-insights.astro` | Case-study route for cisco customer insights. | 2026-08-28 | ~1,200 |
| `src/pages/work/global-data-analytics.astro` | Case-study route for global data analytics. | 2026-08-28 | ~1,000 |
| `src/pages/work/hitachi-energy-partner-portal.astro` | Case-study route for hitachi energy partner portal. | 2026-08-28 | ~1,000 |
| `src/pages/work/memory-lane.astro` | Case-study route for memory lane. | 2026-08-28 | 136 |
| `src/pages/work/one-report.astro` | Case-study route for one report. | 2026-08-28 | ~900 |
| `src/pages/work/sales-workbench-ai.astro` | Case-study route for sales workbench ai. | 2026-08-28 | ~1,300 |
| `src/scripts/contact-links.js` | Browser runtime for contact links behavior. | 2026-08-28 | 169 |
| `src/scripts/line-system.js` | Browser runtime for line system behavior. | 2026-08-26 | ~1,900 |
| `src/scripts/media-playback-controller.js` | Browser runtime for media playback controller behavior. | 2026-08-28 | ~1,500 |
| `src/scripts/memory-lane-trail.js` | Browser runtime for memory lane trail behavior. | 2026-08-28 | ~1,200 |
| `src/scripts/motion-system.js` | Browser runtime for motion system behavior. | 2026-08-28 | ~1,800 |
| `src/scripts/typography-system.js` | Browser runtime for typography system behavior. | 2026-08-28 | 207 |
| `src/styles/generated-image-variants.css` | Generated CSS image-set variables for responsive project backgrounds. | 2026-08-28 | 33 |
| `src/styles/global.css` | Complete global, responsive, themed, motion, media, interaction, and accessibility stylesheet. | 2026-08-28 | ~9,300 |

### `worker/`

| File | Description | Last Modified | Tokens |
|------|-------------|---------------|--------|
| `worker/index.ts` | Cloudflare Worker request layer implementing generated-video single-range delivery. | 2026-08-29 | ~500 |
| `worker/video-sizes.generated.ts` | Generated byte lengths for every responsive video variant. | 2026-08-29 | 265 |

