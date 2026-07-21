# DocuSign Global Data Analytics — Impact and Success Measurement

> Added July 16, 2026. This document supplements the existing Apple Note and case-study source material. It does not replace or revise them.

## Purpose

This document consolidates the additional voice-note context, the measurement framework captured in three screenshots, and the supplied research on DocuSign account coverage. It evaluates the value of two internal tools:

1. **Book of Business (BoB):** helped account executives (AEs) and business development representatives (BDRs) segment and prioritize an account portfolio.
2. **Feature Usage Baseline:** helped account teams compare a selected customer with a fine-tuned peer cohort and use the comparison in customer conversations.

The impact model intentionally avoids claiming that either feature generated incremental revenue. It distinguishes:

- **Observed or reported outcomes:** supported by post-release surveys, user statements, or existing project notes.
- **Designed measurement targets:** proposed floors and ideals from the screenshots; these are not deployment results.
- **Modeled operating value:** scenario estimates based on explicit assumptions.
- **Revenue context:** the amount of annual revenue under the coverage of affected AEs; this is not revenue caused by the tools.

## Executive readout

The strongest supportable value claim is operational, not causal revenue attribution.

- The BoB dashboard reportedly saved **4–6 hours per AE and 4–6 hours per BDR per week**, while allowing teams to run segmentation simulations without rebuilding spreadsheets.
- Using a 48-week working year, this is **384–576 combined AE/BDR hours of annual capacity per paired workflow**, or **0.20–0.30 FTE-equivalent**. It should be described as recoverable capacity, not payroll savings, unless the company can show redeployment, avoided hiring, or reduced overtime.
- Under the supplied account-coverage model, the likely 50-plus-account population comprises about **760 AEs** covering approximately **$1.77B of annual revenue**. If all were in scope and the one-AE/one-BDR pairing assumption held, the modeled annual capacity value would be **$29.2M–$65.7M**, with a base case of **$45.6M**. This is a planning scenario, not a measured financial result.
- Feature Usage Baseline created a customer-facing evidence workflow. The most important focus-group insight was that AEs evaluated metrics according to whether they could credibly show them to customers, not simply whether the metrics improved the AE's private understanding.
- Feature Usage Baseline can be connected to revenue only through measured funnel events—snapshot use, opportunity association, feature proposal, expansion, and win—none of which are currently available in the source material. Until then, its value should be reported as adoption, repeat use, decision quality, and revenue exposure rather than generated revenue.

## What was added from the new voice notes

### Feature Usage Baseline: the hypothesis and the decisive user insight

The feature began with a central hypothesis: **could an AE evaluate a specific customer against benchmark metrics for a cluster of similar customers?** Two contrasting designs explored the edges of that hypothesis:

1. Compare a customer's operating performance—such as send velocity, completion rate, or time to completion—with the performance of a peer cohort.
2. Compare what the customer had purchased with what similar customers had purchased, organized around the value proposition of each feature.

Both designs were intended to make comparison easier for AEs. Focus-group participants, however, did not treat the information as an internal analytical aid. They immediately considered how the comparison would look in front of a customer. The key insight was therefore not merely that AEs wanted better information. **They cared more about how evidence could be communicated to a customer than about what they could privately learn from it.**

The performance-only concept raised customer-trust concerns. A benchmark that made a customer appear worse than peers could be interpreted as evidence that DocuSign was not being a fair or effective partner. The purchase-and-outcome concept was more useful because it could show what peer cohorts adopted and connect the purchase to a customer outcome. That turned the dashboard into evidence for a value-led conversation.

An early reaction was effectively: **even if the data was not yet fully accurate, give us the tool.** This is evidence of strong workflow demand, but it is not permission to relax data quality. It identifies both an adoption signal and a product risk: customer-facing comparisons require high confidence, defensible cohort definitions, and careful interpretation.

### Book of Business: impact beyond time saved

Post-release surveys indicated that the dashboard reduced the weekly effort required from both members of the AE–BDR working pair. The more strategically useful outcome was that AEs could change their monthly recurring revenue (MRR) threshold and immediately explore alternative segmentations instead of reworking an entire spreadsheet.

This created two additional forms of operational value:

- **Decision simulation:** an MRR threshold became a control for testing multiple ways to define and prioritize a book, rather than a fixed spreadsheet assumption.
- **Organizational learning:** the product began capturing how MRR thresholds varied by AE, region, vertical, book size, and quarter. Quarterly changes could reveal how different teams interpreted account value and adapted their coverage strategy.

The time saving is the easiest finance headline. The more differentiated product value is faster experimentation plus a new behavioral dataset about how the sales organization makes prioritization decisions.

## Evidence register

| Evidence | Feature | Classification | What it supports | Important limitation |
| --- | --- | --- | --- | --- |
| 4–6 hours saved per AE per week | BoB | Reported post-release outcome | Reduced document and spreadsheet work | Self-reported; vulnerable to recall bias and unable to reveal quiet abandonment |
| 4–6 hours saved per BDR per week | BoB | Reported post-release outcome | A second role benefited from the same workflow | Pairing and BDR-to-AE ratios are not documented |
| AEs could change MRR thresholds and run simulations | BoB | Observed capability and qualitative outcome | Faster segmentation experimentation | No telemetry supplied for frequency, quality, or downstream action |
| Thresholds varied across region, vertical, book size, and quarter | BoB | Organizational learning opportunity | New data about sales judgment and operating differences | Variation is not automatically improvement; thresholds need outcome validation |
| Users placed baseline snapshots in customer-facing decks/QBRs | Feature Usage Baseline | Reported user behavior | External workflow adoption | No instrumented adoption rate or opportunity linkage supplied |
| Customers were described as more willing to consider features/upgrades when shown peer evidence | Feature Usage Baseline | Qualitative commercial signal | Plausible influence on expansion conversations | No control group, funnel count, conversion rate, or incremental revenue evidence |
| Focus-group request to provide the tool despite imperfect data | Feature Usage Baseline | Pre-release demand signal | Strong desirability | Also signals material data-trust and customer-risk concerns |
| Screenshot baselines and ideals | Both | Designed targets | A proposed success framework | The screenshot explicitly says these are targets with no deployment data |

## Success-measure registry from the screenshots

All percentage measures should be ratios or per-AE shares rather than totals or growth counts. Each should read as an end-of-quarter snapshot. In the source framework, **baseline** means the minimum floor suggesting the feature is actually working; **ideal** means working as intended. Neither means achieved.

### Feature Usage Baseline

| Metric | Plain definition | Formula | Baseline floor | Ideal target | Interpretation |
| --- | --- | --- | ---: | ---: | --- |
| Snapshot adoption | Share of AEs with access who put at least one baseline snapshot into a customer-facing deck or QBR this quarter | AEs using at least 1 snapshot externally / AEs with access | 25% | 60% | Adoption above roughly 75% is suspect rather than automatically better; it may signal reflexive use instead of judgment |
| Snapshot depth | Of AEs who used a snapshot, the share who used it on at least two different accounts | AEs using a snapshot on at least 2 accounts / AEs using at least 1 | 40% | 70% | Separates repeated workflow use from a one-time trial |
| Cohort fine-tune rate | Share of baseline views where the AE changed the default cohort before interpreting it | Views with a cohort edit / total baseline views | 15% | 45% | A 0% rate is a failure signal because the default Salesforce-attribute match may be wrong; 100% would imply the default is worthless |

### Book of Business

| Metric | Plain definition | Formula | Baseline floor | Ideal target | Interpretation |
| --- | --- | --- | ---: | ---: | --- |
| Time saved | Weekly hours an AE no longer spends juggling documents and spreadsheets | Survey estimate per AE | 2 hours | 4 hours | Appropriate for finance planning, but weak as a health metric because it is asked rather than instrumented |
| Real-use rate | Share of AEs with access who performed a real segmentation action this quarter, such as changing a filter or rebucketing | AEs with at least 1 segmentation action / AEs with access | 35% | 70% | Excludes people who merely opened the tool |
| Default divergence | Share of AEs whose thresholds differ from the six-bucket default at quarter end | AEs with at least 1 customized threshold / AEs with access | 20% | 65% | Captures customization without rewarding repeated tinkering. The screenshot alternately describes the population as “using AEs”; the denominator must be standardized before implementation |
| Definition persistence | Of AEs who customized last quarter, the share whose custom definitions remain in use this quarter | AEs whose custom thresholds persisted / AEs who had custom thresholds last quarter | 50% | 80% | Helps distinguish a durable operating model from experimentation that is abandoned or reverted |
| Segment-originated account rate | Share of accounts touched by an AE that the AE reached through a segment-refinement path | Distinct accounts reached through a segment-refine path this quarter / distinct accounts touched by the AE this quarter | 20% | 50% | Measures whether segmentation became part of navigation. A reading above roughly 70% may indicate overreliance on the tool rather than better judgment |

### Metrics deliberately rejected or constrained

**Raw MRR-iteration count should not be a primary success metric.** Early in adoption, frequent iteration can mean healthy exploration. Later, the same count can mean that AEs cannot settle on a useful definition. Its direction changes as the tool ages.

Default divergence is the cleaner snapshot because it captures whether an AE ended off-default without rewarding restlessness. Its blind spot is an AE who experimented, concluded that the default was correct, and returned to it; that person looks identical to someone who never explored. If needed, recover this context with a one-time diagnostic question such as “Did you ever change the default?” rather than a permanently tracked headline metric.

**A raw account-navigation count is also unsuitable.** It is dominated by book size, has soft attribution, rewards more clicking even though the product should reduce recognition effort, and is easy to game. The segment-originated account rate normalizes against each AE's own activity. Even this rate demonstrates navigation behavior, not whether the tool surfaced accounts the AE would otherwise have missed.

## Operational value model

### 1. Per AE–BDR paired workflow

The case-study claim is 4–6 hours saved for each of two roles per week. Assuming 48 working weeks:

`Annual combined hours recovered = weekly hours saved × 2 roles × 48 weeks`

| Scenario | Weekly hours saved per role | Combined annual hours | Combined FTE-equivalent at 1,920 hours/year | Assumed fully loaded value per recovered hour | Modeled annual capacity value per pair |
| --- | ---: | ---: | ---: | ---: | ---: |
| Low | 4 | 384 | 0.20 | $100 | $38,400 |
| Base | 5 | 480 | 0.25 | $125 | $60,000 |
| High | 6 | 576 | 0.30 | $150 | $86,400 |

The hourly values are planning assumptions, not sourced compensation facts. Replace them with internal fully loaded labor costs. The result is the economic value of capacity made available; it becomes hard-dollar savings only if it produces avoided hiring, lower contractor use, reduced overtime, or another documented cost change.

### 2. Potential 50-plus-account population

The supplied coverage research estimates 1,000 global AEs and places 390 in mid-market/commercial and 370 in SMB/high-volume roles. Because the project notes say the main audience generally held more than 50 accounts, a provisional upper-bound scope is **760 AEs**. This is an assumption to validate; it is not an official headcount.

| Scenario | In-scope AE–BDR pair equivalents | Capacity value per pair | Modeled annual capacity value | Combined FTE-equivalent |
| --- | ---: | ---: | ---: | ---: |
| Low | 760 | $38,400 | $29.2M | 152 |
| Base | 760 | $60,000 | $45.6M | 190 |
| High | 760 | $86,400 | $65.7M | 228 |

These totals are deliberately labeled **upper-bound planning scenarios** because four important inputs remain unverified: actual licensed users, active-user rate, BDR-to-AE support ratio, and sustained time saving.

### 3. Finance-ready formula using real internal inputs

`Annual capacity value = active AEs × adoption rate × sustained weekly AE hours saved × 48 × loaded AE hourly cost + supported BDRs × adoption rate × sustained weekly BDR hours saved × 48 × loaded BDR hourly cost`

This formula should replace the pair-equivalent shortcut once internal data is available. Report both capacity value and realized hard-dollar value; do not collapse them into one number.

## Revenue-under-coverage context

The supplied research models “business per AE” as top-line annual revenue under account coverage. It uses FY2026 DocuSign revenue of **$3.2195B**, more than **1.8M total customers**, and approximately **280,000 direct-sales customers**. Those company totals are supported by DocuSign's FY2026 Form 10-K. The AE counts, 80/20 allocation, segment revenue shares, and Americas estimates are analyst assumptions rather than company disclosures.

### Supplied global model

| Customer-load band | Likely AE type | Modeled AEs | Modeled revenue pool | Business per AE |
| --- | --- | ---: | ---: | ---: |
| Fewer than 50 customers | Enterprise / strategic | 240 | $1.45B | $6.0M |
| 50–200 customers | Mid-market / commercial | 390 | $1.13B | $2.9M |
| More than 200 customers | SMB / high-volume / digitally assisted | 370 | $644M | $1.7M |
| Total | All modeled direct-sales coverage | 1,000 | $3.22B | $3.2M average |

If the provisional 50-plus-account scope is used, the tools potentially touch workflows responsible for approximately **$1.77B in annual revenue coverage** across 760 modeled AEs, or about **$2.33M per modeled AE**. This is a measure of operational footprint only.

### Scenario bridge, not an impact claim

If future instrumentation establishes a credible causal relationship to retention or expansion, small basis-point scenarios can translate the revenue-under-coverage pool into financial context:

| Hypothetical change on $1.77B covered revenue | Scenario value |
| ---: | ---: |
| 1 basis point (0.01%) | $177K |
| 10 basis points (0.10%) | $1.77M |
| 50 basis points (0.50%) | $8.85M |
| 100 basis points (1.00%) | $17.7M |

These are sensitivity calculations, not benefits delivered by the features. They should never be presented as realized revenue without opportunity-level evidence and a defensible counterfactual.

## Feature-specific impact logic

### Book of Business

**Inputs:** consolidated account metrics, editable thresholds, segmentation controls, and six mutually exclusive account buckets.

**Immediate outputs:** fewer spreadsheet/document handoffs; real segmentation actions; customized MRR thresholds; account navigation through refined segments.

**Operational outcomes:** recovered AE and BDR capacity; faster simulations; greater consistency in prioritization; a new dataset showing how sales judgment differs across regions, books, verticals, and quarters.

**Commercial influence:** more attention can be redirected to customer work, and better segmentation may improve which accounts receive attention. Neither is evidence of revenue uplift by itself.

**Most defensible value statement:** “The dashboard reportedly returned 4–6 hours per week to each AE and BDR using the workflow, while turning segmentation from a periodically rebuilt spreadsheet into an instrumented, adjustable operating model.”

### Feature Usage Baseline

**Inputs:** customer attributes, peer-cohort rules, feature purchase data, feature-success measures, and value-based feature groupings.

**Immediate outputs:** cohort comparisons, fine-tuned benchmarks, and customer-facing snapshots.

**Operational outcomes:** less open-ended feature research; reusable proof for QBRs; more consistent value-led conversations; clearer visibility into whether AEs trust or adjust default cohorts.

**Commercial influence:** feature discussions become grounded in what comparable customers purchased and what outcomes were associated with those purchases. This may influence expansion or upgrade consideration but is not a revenue result until the workflow is linked to opportunity data.

**Most defensible value statement:** “The dashboard gave account teams customer-ready peer evidence and shifted feature conversations from plan-based packaging toward the value and outcomes associated with adoption.”

## Measurement plan needed to substantiate revenue impact

1. **Instrument exposure and use:** access, active AEs, snapshot export, cohort edits, segmentation actions, customized thresholds, and persistence.
2. **Link to accounts and opportunities:** record account, opportunity, feature proposed, stage at first use, and whether the snapshot appeared in a customer-facing artifact.
3. **Measure intermediate outcomes:** meeting-to-opportunity conversion, feature-proposal rate, stage progression, expansion ACV, renewal rate, and sales-cycle time.
4. **Build a defensible comparison:** phased rollout, matched users/accounts, or difference-in-differences using pre-launch behavior. Avoid a simple users-versus-nonusers comparison because motivated AEs are more likely to adopt.
5. **Report a confidence ladder:** observed usage → correlated funnel movement → adjusted estimate → causal estimate. Do not jump directly from adoption to revenue.
6. **Monitor guardrails:** incorrect cohort selection, customer objections, unsupported comparisons, reflexive snapshot use, excessive segmentation dependence, and return to old spreadsheets.

## Recommended scorecard

| Dimension | Primary measure | Supporting measure | Guardrail |
| --- | --- | --- | --- |
| BoB efficiency | Sustained weekly time saved by role | Spreadsheet/document steps retired | Old-workflow abandonment rate |
| BoB adoption | Real-use rate | Definition persistence | Segment-originated account rate above ~70% |
| BoB decision quality | Default divergence by region/book type | Quarterly threshold change with stated rationale | Threshold variation unconnected to outcomes |
| Feature Usage adoption | Snapshot adoption | Snapshot depth | Adoption above ~75% |
| Feature Usage judgment | Cohort fine-tune rate | Default cohort acceptance with confidence reason | Fine-tune rate at 0% or near 100% |
| Commercial influence | Opportunities with verified snapshot use | Stage progression and expansion ACV | Customer objections or inaccurate comparisons |
| Financial value | Realized cost avoidance plus causally supported gross-profit impact | Capacity value and revenue under coverage | Presenting exposure or capacity as booked revenue |

## What can be claimed now

### Supported

- The BoB workflow was reported to save 4–6 hours per AE and per BDR each week.
- It enabled faster iteration on customer segmentation and MRR thresholds.
- It created an organizational signal about how threshold choices varied across the sales organization and over time.
- Feature Usage Baseline was shaped by the discovery that AEs wanted customer-presentable evidence, not only internal analytics.
- Users reportedly included snapshots in customer-facing decks and QBRs.
- The two dashboards had a plausible operational footprint across a large amount of revenue under account coverage.

### Not yet supported

- A specific amount of incremental, retained, or accelerated revenue.
- A causal increase in feature adoption, upgrades, win rate, or renewal rate.
- The screenshot percentages as achieved results.
- The 1,000 global AEs, 760 in-scope AEs, 640 Americas AEs, revenue split by coverage band, or one-to-one AE/BDR ratio as company facts.
- Hard-dollar savings equal to the value of recovered capacity.

## Sources and provenance

- Existing project transcript: `Apple-Note-DocuSign-Global-Data-Analytics.md`.
- Existing case-study source: `original-content/notion-page.md`.
- Three screenshots supplied July 16, 2026: success-measure definitions, target floors/ideals, caveats, and rejected metrics.
- Additional voice-note transcript supplied July 16, 2026: hypothesis framing, focus-group insight, post-release survey context, MRR simulations, and organizational learning.
- Supplied AE/revenue research: global and Americas account-coverage scenarios, including analyst assumptions.
- Company figures: [DocuSign FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1261333/000126133326000021/docu-20260131.htm), fiscal year ended January 31, 2026. It reports $3.2195B total revenue, $3.150551B subscription revenue, more than 1.8M total customers, approximately 280,000 customers served by the direct sales force, $2.27447B U.S. revenue, and $945.03M international revenue.

