# Portfolio V2 typography inventory

This inventory records the active typography system in `src/styles/global.css`. Values are organized by use-case so future changes can be evaluated against a named role instead of an isolated selector. Every quoted example below is literal text rendered by the portfolio. When no current route renders a role, the table says so explicitly.

## Foundation

| Token or asset | Value | Use | Literal example from the site |
| --- | --- | --- | --- |
| `--body-font` | Manrope, Arial, sans-serif | Default interface and prose family | “Over the last 8 years, I’ve worked with teams at Palo Alto Networks, Harvard Business School, DocuSign, Hitachi Energy, and Cisco.” |
| `--body-leading` | 1.5 | Default prose leading | “Wexel was an app designed to offer flexible booking options for caretakers.” |
| `--body-tracking` | −0.02em | All active Manrope roles | “Product Designer” |
| `--canvas` | `#FAFAFA` | Site canvas | The `#FAFAFA` background directly behind “Selected Work” on `/` |
| `--text-primary` | `#000000` | Titles, headings, active navigation, and emphasis | “Selected Work” |
| `--text-secondary` | `#416870` | Body copy, clients, inactive navigation, and metadata values | “Product Designer” |
| `--text-tertiary` | `#5F787D` | Years, separators, metadata labels, captions, and footer text | “2025–26” |

The legacy names `--ink`, `--muted`, and `--faint` are aliases to these three tokens, not additional colors. Inverse white text, controls, media surfaces, and branded embedded content remain scoped exceptions to the editorial typography palette.

Bundled families are Manrope 400/500/600/700, Cabinet Grotesk variable 100–900, Public Sans 400, Inter variable 100–900, Fragment Mono 400, Basically A Mono 400, Clash Display 600, and Cisco Sans 400/700. Manrope is the default; the other families are deliberately scoped to the roles listed below.

## Navigation

| Use-case | Literal example from the site | Family | Size / leading | Weight | Tracking | Color | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Name | “Sākshāt Goyal” | Manrope | 16px / 1 | 500 | −2% | `#000000` | Personal name |
| Role | “Product Designer” | Manrope | 16px / 1 | 400 | −2% | `#416870` | 4px from the name |
| Active, hovered, or focused link | “Selected Work” | Manrope | 16px / 1 | 400 | −2% | `#000000` | Selected state |
| Inactive link | “Gallery” | Manrope | 16px / 1 | 400 | −2% | `#416870` | Unselected state |
| Navigation separator | `・` | Manrope | 16px / 1 | 400 | −2% | `#5F787D` | Middle-dot separators |

The header remains 48px high with a 24px radius. Typography does not change at a breakpoint.

## Homepage hero

| Use-case | Literal example from the site | Family | Size / leading | Weight | Tracking | Color | Motion |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead statement | “I lead design where problems are undefined, but commitments aren't” | Manrope | 24px / 135% | 500 | −2% | `#000000` | Each word fades from 10% to 100% opacity over 100ms linear, staggered by 75ms |
| Supporting statement | “Over the last 8 years, I’ve worked with teams at Palo Alto Networks, Harvard Business School, DocuSign, Hitachi Energy, and Cisco.” | Manrope | 24px / 135% | 400 | −2% | `#416870` | None |

Both statements are full width below 768px and share a 400px maximum width from 768px upward. The lead retains an unsplit screen-reader copy. Reduced-motion mode removes the lead animation and renders every word fully opaque.

## Homepage Selected Work

| Use-case | Literal example from the site | Family | Size / leading | Weight | Tracking | Color | Responsive behavior |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Section title | “Selected Work” | Manrope | 32px / 110% | 500 | −2% | `#000000` | Fixed size |
| Project title | “Designing AI experiences for deep analysis and traceability.” | Manrope | 24px / normal | 500 | −2% | `#000000` | Fixed size |
| Client | “PALO ALTO NETWORKS” | Manrope | 14px / normal | 600 | Normal | `#000000` | Fixed size |
| Year | `2025–26` | Manrope | 14px / normal | 400 | Normal | `#8B8B8B` | Fixed size |
| Project action | “VIEW PROJECT” | Manrope | 14px / normal | 600 | Normal | `#000000` | Black tape and white text on tile hover or focus |

## Homepage Gallery

| Use-case | Literal example from the site | Family | Size / leading | Weight | Tracking | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Section title | “Gallery” | Cabinet Grotesk | 36px / 110% | 400 | 0 | `#000000` |
| Project heading | “Wexel, Premera Blue Cross” | Manrope | 16px / 135% | 700 | −2% | `#000000` |
| Project body | “Wexel was an app designed to offer flexible booking options for caretakers.” | Manrope | 16px / 150% | 400 | −2% | `#416870` |
| Year and separator | `・ 2018` | Public Sans | 14px / 135% | 400 | Normal | `#5F787D` |
| Footer | “© 2026 Sākshāt Goyal” and “Back to top ↑” | Manrope | 14px / 135% | 400 | −2% | `#5F787D` |

## Case studies

| Use-case | Literal example from the site | Family | Size / leading | Weight | Tracking | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Case title | “Designing an AI architecture for large scale, qualitative research and product strategy.” | Cabinet Grotesk | 36px / 110% | 500 | 0 | `#000000` |
| Narrative paragraphs and lists | “Reasoning models gave reliable answers but missed hidden meanings.” | Manrope | 20px / 150% | 400 | −2% | `#416870` |
| Section heading | “Maintaining Standards for AI Outputs” | Cabinet Grotesk | 28px / 135% | 700 | 0 | `#000000` |
| Metadata label | “Stakeholder” | Manrope | 16px / 135% | 400 | −2% | `#5F787D` |
| Metadata value | “HBS AI Institute (Previously D^3 Institute)” | Manrope | 16px / 135% | 400 | −2% | `#416870` |
| Media caption | “Mapping current models’ strengths and weaknesses against our target performance.” | Cabinet Grotesk | 14px / 135% | 400 | Normal | `#5F787D` |
| Team member name | “Tanya Flint” | Cabinet Grotesk | 16px / 135% | 700 | Normal | `#FFFFFF` |
| Team role | “Head of AI” | Manrope | 14px / 140% | 400 | −2% | `#AEB7C0` |
| Team note | “The HBS AI Institute engaged us to lead the research and design work, with the four team members below serving as project advisors.” | Manrope | 15px / 150% | 400 | −2% | `#D5DBE0` |
| Previous / Next label | “Next” | Manrope | 18px / 130% | 400 | −2% | `#000000`; white on hover |

## Specialized and compatibility roles

| Family | Role / status | Literal example from the site |
| --- | --- | --- |
| Inter | Skip link | “Skip to content” |
| Fragment Mono | Inactive legacy metadata rules | No current route renders a Fragment Mono text role |
| Basically A Mono | Inactive legacy figure-caption fallback | No current route renders a Basically A Mono text role; visible case captions are overridden with Cabinet Grotesk |
| Clash Display | Inactive legacy case-heading fallback | No current route renders a Clash Display text role; visible case headings are overridden with Cabinet Grotesk |
| Cisco Sans | Embedded Cisco-specific artifact content | “CORE PRODUCT” and “Customer Insights” in `/work/cisco-customer-insights/` |

These non-Manrope roles explicitly keep normal letter spacing so the global −2% Manrope tracking does not leak into them.
