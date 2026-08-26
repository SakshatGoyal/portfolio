# Portfolio V2 case-study design system

**Status:** Working specification 0.1
**Last updated:** 2026-08-14
**Applies to:** All portfolio case-study pages
**Reference frame:** Figma `s1ShZrZpi54422dSQskg18`, node `3162:904`

## 1. Authority and implementation principles

The rendered reference image is the authority for intended appearance. Figma is evidence for measurements, hierarchy, and content, but its layer mechanics must not be copied when they are merely construction aids. Carbon's 2x Grid informs breakpoint and column behavior; it is not a visual template for the portfolio.

1. Implement visible rules as borders or explicit rule elements. Never expose a gray parent background to simulate dividers.
2. Use a centered editorial rail, fluid columns, fixed interior insets, and explicit maximum widths.
3. Preserve reading proportions rather than freezing every Figma coordinate.
4. Adjacent modules share one rule. Only one element may own a shared border, preventing doubled lines.
5. Content fidelity remains independent from layout styling: design-system work must not rewrite case-study content.

## 2. Color system

| Token | Value | Role |
| --- | --- | --- |
| `--color-canvas` | `#FAFAFA` | Page background outside the editorial rail |
| `--color-surface` | `#FFFFFF` | Rail modules, text sections, and media cells |
| `--color-divider-standard` | `#DBDEE2` | Structural seams between adjacent modules |
| `--color-divider-intense` | `#9AA1A8` | Text-group, metadata, and high-emphasis rules |
| `--text-primary` | `#000000` | Page titles, section headings, emphasis, and navigation labels |
| `--text-secondary` | `#416870` | Narrative copy and metadata values |
| `--text-tertiary` | `#5F787D` | Metadata labels, captions, and footer text |

Project-specific accent colors may be used inside media, metrics, or explicitly designed feature modules. Inverse white text remains available for dark controls and overlays. Neither exception may replace the three editorial text tokens.

## 3. Responsive editorial rail

The rail is centered. The first two bands are fluid; the remaining bands stop at explicit maxima. Above Carbon's maximum breakpoint, exterior whitespace expands instead of adding columns because this is an editorial, not high-density, interface.

| Viewport | Columns | Rail rule | Interior inset |
| --- | ---: | --- | ---: |
| `320–671px` | 4 | `calc(100vw - 32px)` | 16px |
| `672–1055px` | 8 | `calc(100vw - 64px)` | 24px |
| `1056–1584px` | 16 | `min(1024px, calc(100vw - 32px))` | 24px |
| `1585px+` | 16 | `min(1488px, calc(100vw - 96px))` | 24px |

The rail remains capped at 1024px through the 1584px maximum. At 1585px, it enters the wide editorial tier; the 1488px maximum equals 1584px minus 48px on each side.

### Standard column spans

| Content role | 16-column rail | 8-column rail | 4-column rail |
| --- | ---: | ---: | ---: |
| Full media, rules, metadata | 16 | 8 | 4 |
| Page headings | 16 | 8 | 4 |
| Long captions | max 12 | 8 | 4 |
| Narrative body | 70% of usable rail | 8 | 4 |

Narrative body is left-aligned and capped at 70% of the usable rail on desktop and wide screens. Below the 1056px desktop breakpoint, it expands to the full usable rail.

## 4. Divider and module behavior

- Standard seams are 1px and use `--color-divider-standard`.
- Text and metadata separators use `--color-divider-intense`.
- Split media modules use real shared borders, not background-colored gaps.
- A module touching the outer rail edge inherits that edge; it does not introduce a second nested outline.
- Rules remain visible across responsive states unless two modules stack and the former vertical seam must become a horizontal seam.

## 5. Typography

Typography families, sizes, line heights, and colors are system-level. Weight changes remain reviewable semantic modifiers because individual reference sections may move between medium and bold.

| Role | Family | Size / line height | Default weight | Color |
| --- | --- | --- | ---: | --- |
| Page title | Cabinet Grotesk | 36px / 1.1 | 500 | primary |
| Section heading | Cabinet Grotesk | 28px / 1.35 | 700 | primary |
| Narrative body | Manrope | 20px / 1.5 | 400 | secondary |
| Inline strong emphasis | Manrope | 20px / 1.5 | 700 | primary |
| Metadata label | Manrope | 16px / 1.35 | 400 | tertiary |
| Metadata value | Manrope | 16px / 1.35 | 400 | secondary |
| Caption | Cabinet Grotesk | 14px / 1.35 | 400 | tertiary |
| Case navigation label | Manrope | 18px / 1.3 | 400 | primary |

Use explicit `strong`, `emphasis`, or component modifiers for approved weight changes. Do not override typography ad hoc by page or selector position.

All Manrope roles use `-.02em` letter spacing. Manrope weights 400, 500, and 700 are bundled under `public/fonts/` and must remain the active body-family assets.

Cabinet Grotesk is a required design asset and is bundled at `public/fonts/cabinet-grotesk-variable.ttf`. Do not replace it with a metrically similar or locally available substitute. If the asset fails to load, treat that as an implementation failure and restore the specified face rather than changing the design-system token.

## 6. Spacing tokens

Spacing tokens are named by responsibility rather than relative size.

| Token | Desktop/tablet | Small screens | Use |
| --- | ---: | ---: | --- |
| `--space-module-inline` | 24px | 16px | Left/right content inset |
| `--space-section-leading` | 24px | 16px | Rule to first content line |
| `--space-section-trailing` | 160px | `clamp(64px, 12vw, 96px)` | Final content line to next module |
| `--space-heading-body` | 8px | 8px | Heading-to-copy relationship |
| `--space-paragraph` | 24px | 20px | Paragraph separation |
| `--space-caption-block` | 8px | 8px | Caption top and bottom inset |
| `--space-context-row` | 16px | 12px | Metadata row vertical inset |
| `--space-media-inset` | 24px | 16px | Media staging within a module |
| `--space-section-transition` | 160px | 64px | Standalone section separation |
| `--space-module-seam` | 1px | 1px | Adjacent module divider |

Do not substitute generic T-shirt spacing names for these roles. If two roles later share the same numeric value, they remain separate tokens so they can evolve independently.

## 7. Canonical module rules

### Header and navigation

The header occupies the full rail. Identity sits at the leading edge and the navigation control at the trailing edge. Navigation text uses the `nav-label` roles; the selected state changes color without changing geometry.

### Text section

Text sections occupy the full rail surface while their internal copy follows the body, heading, and caption spans. Desktop sections use fixed leading and trailing rhythm; small-screen trailing space becomes fluid.

Metadata rows follow the same left edge as narrative copy on every breakpoint. On desktop, labels occupy columns 1–2 and values occupy columns 3–8.

Page titles use the complete internal grid width at every breakpoint. Their line breaks are determined by available width rather than an editorial max-width or balanced wrapping.

### Metadata

Horizontal rules span the rail. Labels and values align to the internal content grid rather than collecting in one corner. Labels and values have distinct color roles but share typography metrics.

### Media and caption

Media is staged inside the module using `--space-media-inset`. Captions belong to the media module, use the caption typography token, and retain independent block padding. Removing space between adjacent images must never remove caption padding.

The media inset is a complete shell: it applies to all four sides even when a caption is present. Caption padding is additional internal spacing; it never replaces the shell's bottom inset. Asymmetric editorial collages preserve authored empty cells instead of allowing CSS auto-flow to repack the media. Cell seams are real 1px divider borders, not exposed parent-background gaps.

Every video uses the smaller of its intrinsic/available inline size and `100dvh - 64px`. Its owning stage remains full width and retains its assigned background and padding. When the height cap activates, the video stays centered and the surrounding stage—not the video—absorbs the remaining width. Every video includes a decoded poster fallback. Media containers, images, and videos remain square. Homepage media also remains square, while its authored container backgrounds are preserved.

Square animations preserve their intrinsic 1:1 ratio while following the same viewport-height, poster, centering, and radius rules. Page-specific radius values are prohibited.

### Split layouts

Equal splits use 8/8 columns. Asymmetric splits must resolve to intentional column spans such as 8/8, 10/6, or 12/4; arbitrary pixel fractions are prohibited. When stacked, the shared vertical rule becomes a horizontal rule.

### Metrics

KPI groups are full-rail sibling modules, not descendants of the narrative reading column. The module applies the standard rail inset, then uses three equal tracks separated by 24px. On narrow screens, those tracks collapse to one column.

## 8. Governance

- New case studies must use these tokens before adding page-specific CSS.
- A new token requires a distinct semantic responsibility, not merely a new number.
- Any departure must cite the reference composition that requires it.
- Typography-weight decisions are reviewed sequentially and then recorded here.
- Validate at 320, 672, 1056, 1312, 1585, and at least one viewport wider than 1920px.
- Review both rule ownership and text measure at every breakpoint.

## 9. External grid reference

Carbon's 2x Grid defines the five breakpoint families, fluid columns, fixed margins within breakpoints, and editorial behavior above the 1584px maximum. This portfolio adopts those principles while using its own rail maxima, content spans, type, color, and spacing tokens.

- <https://carbondesignsystem.com/elements/2x-grid/overview/>
- <https://preview.carbondesignsystem.com/building-blocks/foundations/2x-grid/usage>
