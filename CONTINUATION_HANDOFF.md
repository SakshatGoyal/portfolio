# Portfolio V2 continuation handoff

## Objective

Continue building and refining an actual front-end portfolio website in this directory. The site consists of a home page and four long-form case studies. Its visual language should closely follow the reference portfolio while adapting that language to the supplied Figma content.

Do not replace this with a generated “ChatGPT Site,” redesign an unrelated project, or deploy over an existing site.

## Working directory and sources

- Implementation: `/Users/sakshatgoyal/Documents/GitHub/portfolio/workspace/portfolio-v2`
- Reference implementation: `/Users/sakshatgoyal/Documents/GitHub/portfolio/workspace/research/portfolio-site-studies/gpenston-com/pages`
- Figma file key: `s1ShZrZpi54422dSQskg18`
- PANW frame: `2733:10989`
- HBS frame: `2759:10839`
- OneReport frame: `2771:11512`
- Global Data Analytics frame: `2835:10141`
- Saved Figma extracts: `/Users/sakshatgoyal/Documents/GitHub/portfolio/.figma-extracts`
- HBS nested-node context: `/Users/sakshatgoyal/Documents/GitHub/portfolio/workspace/portfolio-v2/.figma-hbs-context.txt`
- HBS PDF text extraction: `/tmp/portfolio-v2-2759.txt`
- Frame-to-route record: `CONTENT_PROVENANCE.md`
- Seven-part scoring system: `QUALITY_RUBRIC.md`

## Non-negotiable content rules

All case-study content must come directly from the supplied Figma frames. Preserve every heading, paragraph, list item, caption, emphasis choice, metadata value, image, awkward phrase, typo, punctuation mark, and ordering. Do not summarize, rewrite, shorten, polish, reinterpret, invent, or silently correct anything.

Internal Figma frame names are not case-study content. In particular, names such as `Global Data Analytics — Staff revision`, `OneReport`, `PANW`, and `HBS` must not be displayed as case-study titles, headings, next-project labels, or HTML page titles. The current case layout uses each frame’s actual headline as its sole visible `h1` and document title. Preserve that correction unless the user explicitly directs otherwise.

The home page currently uses the internal frame names as project-card identifiers. The user’s latest correction explicitly referred to case-study pages; do not make a broader home-page naming decision without checking the Figma content or receiving user direction.

Navigation labels such as “Home,” “Work,” “Selected work,” “Next project,” and “Back to top” are interface chrome derived from the reference design. They must not be presented as case-study content.

All case-study media must be extracted from the Figma file. Do not use stock images, generated replacement images, or authored captions. The local media directories are:

- `public/assets/panw-ai/`
- `public/assets/hbs/`
- `public/assets/one-report/`
- `public/assets/global-data/`

## Reference visual language

The implementation should retain the reference’s near-white canvas, charcoal text, oversized compact display typography, neutral body type, mono metadata, centered 1024px editorial field, approximately 680px reading column, precise alignments, generous vertical rhythm, large image staging, subtle radii, restrained project tints, minimal borders, simple navigation, and understated motion.

The current stack is Astro 5 with plain scoped/global CSS and static output. Do not introduce Tailwind or a UI framework without a clear need. Fonts and Figma assets are stored locally.

## Current implementation

Implemented routes:

- `/`
- `/work/panw-ai/`
- `/work/hbs-ai-institute/`
- `/work/one-report/`
- `/work/global-data-analytics/`

Important files:

- `src/layouts/BaseLayout.astro`
- `src/layouts/CaseLayout.astro`
- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`
- `src/components/Figure.astro`
- `src/styles/global.css`
- `src/pages/index.astro`
- `src/pages/work/*.astro`

The case pages have been transcribed and the named Figma assets downloaded. Descriptive alt text authored during implementation was removed from rendered output; figures use an exact Figma caption as alt text when a caption exists and an empty alt otherwise. Mobile horizontal overflow found on the home-page project grid was fixed. Reduced-motion and focus-visible behavior are implemented.

## Validation completed

- `npm run build` passes with 0 errors, 0 warnings, and 0 hints.
- All five routes build statically.
- Desktop checks found no page-level horizontal overflow.
- Case-study routes have no mobile page-level overflow.
- The home-page mobile overflow defect was fixed by removing image minimum-height pressure at the narrow breakpoint.
- Local media files are non-empty and recognized image formats.
- The site was visually inspected through the Codex built-in Browser at desktop and narrow widths.

Run locally with:

```sh
npm install
npm run dev
```

The prior local server used `http://127.0.0.1:4321/`; start a new server if it is no longer active.

## Required quality gate

Do not stop based on intuition. `QUALITY_RUBRIC.md` defines seven dimensions, each scored from 0–10. Passing requires at least `63/70` (90%) and no individual dimension below 8.

The final evaluation must be performed by a separate independent agent. That evaluator must inspect the home page and all four case studies at desktop and narrow widths, compare them to the reference pages and Figma extracts, identify concrete deductions, and verify exact content fidelity. The implementation should be refined and independently rescored until the threshold is met.

The independent evaluator first scored the release candidate 61/70 because the hero repeated metadata before the hero image. That kicker was removed. The evaluator then rescored the current build at **63/70 (90.0%) — PASS**, with no dimension below 8: typography 9, grid 9, whitespace 9, media 9, color 9, interaction 8, content fidelity/responsive continuity 10. The evaluator confirmed the Figma sequence and the absence of internal frame names from case titles, headings, next-project labels, and document titles.

## Immediate next actions

1. If further work is requested, preserve the current passing baseline: exact Figma headline → hero → intro → metadata, with no internal frame names on case-study pages.
2. Re-run `npm run build` and built-in Browser checks after any material refinement.
3. Keep the independent score as the release gate; re-evaluate after meaningful changes.
4. Reset temporary browser viewport overrides and close temporary browser tabs when QA is complete.

## Operating constraints

- Use the `figma:figma-design-to-code` skill before additional Figma design-context calls.
- Use the Codex built-in Browser skill for browser QA; never automate Google Chrome and do not use terminal Playwright for ordinary browser work.
- Use `apply_patch` for source-file edits.
- Preserve existing work and avoid destructive Git operations.
- Do not deploy unless the user asks.
- Keep the final user-facing response under 300 words.
