# Portfolio content organization

Last organized: 2026-07-14

This is the working index for the first consolidation pass. The process was copy-first: source folders, previous-website backups, Notion pages, and Apple Notes were not deleted or altered.

## Organized collections

| Brand | Case study folders | Notes |
| --- | --- | --- |
| Cisco | `Redesigning-Cisco-Ready`, `Designing-Upsell-Opportunities`, `Designing-Customer-Insights` | The cross-project Apple Note is at the Cisco brand root. |
| DocuSign | `Global-Data-Analytics`, `OneReport` | Each case contains its own Notion export and Apple Note. |
| Palo Alto Networks | `Sales-Workbench` | Includes Notion content, local media, published derivatives, and supporting project snapshots. |
| Harvard Business School | `AI-Research-Architecture` | Includes Notion content, local media, published derivatives, and a research-project snapshot. |
| Hitachi Energy | `B2B-Ecommerce-Experience` | The case-specific Apple Note is inside the case folder. |
| Wexel | One standalone case folder | Recovered from the previous-website backup. |
| Trebuchet Trials | One standalone case folder | Recovered from the previous-website backup. |

## Folder vocabulary

- `original-content`: source prose exported or copied without editorial consolidation, including visual Notion PDFs where available.
- `assets/local-source`: media already present in the portfolio repository.
- `assets/notion-originals`: original media referenced by the exported Notion page.
- `published-derivatives`: processed images used by the current portfolio implementation.
- `supporting-material`: complete snapshots of related project, research, or design-system folders.

## Remaining capture work

Two Apple Notes contain audio attachments whose transcripts are present in the exported Markdown, but whose audio binaries remain in Apple Notes:

- DocuSign Global Data Analytics — 8:50.
- Hitachi Energy — 5:03.

macOS prevented direct access to the Notes attachment store, and the Notes interface exposed playback rather than a file export. The originals remain safely in Apple Notes.

## Preservation note

Legacy source folders remain in their former locations during this pass. They should only be removed after a later review confirms that this organized structure is the desired long-term source of truth.

## Verification completed

- All copied case-study prose and primary asset folders compare byte-for-byte with their source collections.
- The four Notion pages are preserved as 32-page visual PDF exports with searchable text and rendered imagery. Their companion Markdown exports contain 37 local media references; all 37 resolve to valid local image files.
- All 54 top-level published derivative files match their existing portfolio sources; the PANW Figma asset directory also matches its source.
- All five Apple Notes appear in the intended locations, with Cisco as the only brand-root note.
- Supporting project snapshots contain the same files and links as their sources. A few source-only empty cache and worktree directories were intentionally not treated as content.
- No temporary Notion or Apple Notes exports remain in the Codex working folder.
