# Media retrieval test — Designing Customer Insights

Method: candidates were selected first from `assets/` paths and basenames, then from those names plus `media-catalog.jsonl`. No media was reopened during retrieval.

| # | Storytelling request | Top three from paths and filenames | Top three with catalog | Appropriate visual in top three? |
| --- | --- | --- | --- | --- |
| 1 | Short research story about how account managers analyze customers | `participant-pivot-table-analysis.png`; `customer-strategy-question-framework.png`; `account-manager-persona-comparison.png` | Same three, reinforced by `research` and `problem` roles | Yes / Yes |
| 2 | Before-and-after story of the dashboard redesign | `customer-dashboard-previous-design.png`; `customer-dashboard-redesigned-overview.png`; `customer-dashboard-design-breakdown.png` | Same three, reinforced by `comparison` roles | Yes / Yes |
| 3 | Customer problem: reliance on spreadsheets and fragmented information | `participant-pivot-table-analysis.png`; `participant-account-report-recording.mov`; `customer-information-source-flow.png` | Same three, reinforced by `problem` and `research` roles | Yes / Yes |
| 4 | Design-process snippet on turning research into reusable modules | `data-visualization-ideation-board.png`; `visualization-module-library.png`; `customer-question-breakdown-flow.png` | Same three, reinforced by `process` and `concept` roles | Yes / Yes |
| 5 | Workflow explanation of a customer dashboard | `customer-dashboard-complete-flow.mov`; `customer-dashboard-tile-animation.gif`; `customer-dashboard-account-overview.png` | Same three, reinforced by `prototype` and `final-design` roles | Yes / Yes |
| 6 | Prototype story about deciding how to guide the next action | `benchmark-guided-customer-dashboard-concept.png`; `exploratory-customer-analysis-concept.png`; `customer-dashboard-prototype-animation.gif` | Same three, reinforced by `concept`, `comparison`, and `decision` roles | Yes / Yes |
| 7 | Final-design story showing the redesigned Customer Insights page | `customer-dashboard-redesigned-overview.png`; `customer-dashboard-account-overview.png`; `customer-dashboard-design-breakdown.png` | Same three, reinforced by `final-design` and story-priority fields | Yes / Yes |
| 8 | Outcome story connecting the redesign to adoption and reuse | `customer-insights-redesign-story.mp4`; `customer-dashboard-redesigned-overview.png`; `customer-insights-metric-tile-cover.png` | Same three, with `context` and `final-design` roles used to avoid unsupported outcome claims | Yes / Yes |
| 9 | Social post introducing the Customer Insights redesign | `customer-insights-metric-tile-cover.png`; `customer-dashboard-tile-animation.gif`; `customer-dashboard-redesigned-overview.png` | Same three, ranked by `story_priority` and visible cover context | Yes / Yes |
| 10 | Full case-study section explaining the sensemaking framework | `customer-strategy-question-framework.png`; `customer-strategy-sensemaking-overview.png`; `customer-question-breakdown-flow.png` | Same three, reinforced by `research`, `process`, and `insight` roles | Yes / Yes |

## Result

- Retrieval result: 10 of 10 requests contained an appropriate visual in the top three from filenames alone; the catalog maintained or clarified every selection.
- Reopening media during retrieval: no.
- Approximate filename-only cost: 1,743 characters across 42 basenames, or roughly 425 tokens by the conservative four-characters-per-token approximation. Exact API counting was unavailable because no token-count API key is configured.
- Ambiguous assets: none fall below the 0.65 naming-confidence threshold. The six `customer-dashboard-*` detail views deliberately use conservative, observable terms; use their catalog summaries when distinguishing a specific table, product, opportunity, renewal, or timeline state matters.
