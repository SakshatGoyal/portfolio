# COO Office Report: Operational Value of Anchored Follow-Ups and Trace

**Subject:** AI features in Palo Alto Networks' Sales Workbench  
**Perspective:** Office of the Chief Operating Officer / Revenue Operations  
**As of:** July 16, 2026  
**Model base period:** Palo Alto Networks fiscal 2025, the latest complete audited period used consistently across the workforce, expense, and revenue calculations

## Executive judgment

Anchored Follow-Ups and Trace address two real but different operating frictions in enterprise account work:

1. **Anchored Follow-Ups reduce interaction friction.** They preserve the exact account, opportunity, row, column, or generated object being discussed, so a seller can deepen or branch the analysis without restating context or restarting in another tool.
2. **Trace reduces verification and coordination friction.** It shows the evidence path, source systems, and data freshness behind a conclusion, so the seller, manager, specialist, or operations partner can decide whether to trust and act on it.

The mechanisms are credible and fit the Sales Workbench's larger purpose: turning a fragmented set of sales dashboards and point tools into one structured place for account analysis and action. The evidence reviewed also contains a promising behavioral signal: a reported 23% arc rate and 4.3-step arc depth. But the package does **not** yet establish causal or financial value. It does not provide the sample size, observation window, exposed-user count, control group, resolution rate, abandonment rate, observed snapshot rate, time-to-answer, or downstream revenue outcome.

The appropriate COO-office planning case is therefore:

- **$3.7 million per year of gross capacity-equivalent value for an estimated 1,500 AEs/account managers**, using the base assumptions in this report.
- **$7.5 million per year for a broader 3,000-person account-team population**, including relevant sales engineers, specialists, and operations users.
- These are **redeployable-capacity estimates, not cash savings**. They become economic value only if time saved is redirected to customer work, better decisions, or lower future hiring needs.
- A separate base case suggests **$6.2 million of annual revenue-equivalent protection or acceleration**, but this estimate is substantially more speculative and must not be added mechanically to the capacity estimate.

The recommendation is **conditional scale, not blanket rollout and not rejection**. Fund a controlled operating trial around three workflows—forecast/slip risk, whitespace/cross-sell, and renewal/account health—and require verified resolution time, evidence accuracy, and downstream action to improve before using the portfolio's engagement numbers in an ROI claim.

## 1. What was reviewed and how to read the evidence

The review covered all material in the supplied `Portfolio-material` folder, not only the feature summaries:

- the polished [case-study PDF](/Users/sakshatgoyal/Documents/GitHub/portfolio/Palo-Alto-Networks/Sales-Workbench/Portfolio-material/PANW.pdf);
- the seven-page [original Notion export](/Users/sakshatgoyal/Documents/GitHub/portfolio/Palo-Alto-Networks/Sales-Workbench/Portfolio-material/original-content/notion-page.pdf);
- the [Apple Note export](/Users/sakshatgoyal/Documents/GitHub/portfolio/Palo-Alto-Networks/Sales-Workbench/Portfolio-material/Apple-Note-Palo-Alto-Networks.md) and measurement notes;
- workbench screenshots, research-synthesis images, sketches, trace derivations, architecture diagrams, scenario posters, and Figma exports;
- the anchored and trace prototype videos, GIFs, cropped stills, and browser/prototype recordings;
- the metric definitions supplied separately in the user's July 16, 2026 screenshots.

The sources do not all have the same evidentiary weight. This report uses four levels:

| Level | Evidence | How it is used |
|---|---|---|
| A | Audited filings and official Palo Alto Networks disclosures | Company-scale facts: revenue, workforce, selling expense, route to market |
| B | Internal portfolio artifacts and user-supplied metric definitions | Product intent, observed prototype behavior, internal research assertions, reported telemetry |
| C | Named external surveys and workforce estimates | Directional benchmarks and triangulation, never treated as PANW fact |
| D | This report's assumptions | Scenario inputs that must be replaced with internal data before an investment case is considered reliable |

**Evidence limitation:** The portfolio is a product case study, not a controlled operating study. Its reported metrics are useful signals but cannot carry a financial attribution on their own.

## 2. The operating problem the Sales Workbench is trying to solve

The project is not fundamentally “a chatbot for sales.” It is an attempt to consolidate fragmented account work while retaining the structured, spreadsheet-like interaction model that experienced sellers already use.

The supplied research and interface material show account teams moving across tools such as Salesforce, forecasting and pipeline systems, activity intelligence, sales-play consoles, renewals, quotes, account-health views, and internal dashboards. These systems answer narrow questions, but the seller must assemble the account picture mentally. The resulting friction is not only time spent clicking. It includes:

- losing the object under discussion while switching systems;
- re-expressing the same account or opportunity context in multiple queries;
- reconciling contradictory fields and refresh times;
- determining whether an AI conclusion is based on Salesforce stage history, an activity timeline, meeting notes, call intelligence, or some other source;
- turning an analysis into something a manager or partner can verify and act on;
- copying screenshots or summaries into Slack, email, forecast calls, or Salesforce notes.

The larger Workbench design responds by putting account, opportunity, product, and sales-play information into dense, interactive tables and tags. AI is inserted where a question crosses datasets or requires synthesis—not as a replacement for the whole structured interface.

The internal research artifacts describe feedback from account teams across the Americas, EMEA, and APJC: interest in AI was mixed, users were accustomed to spreadsheet-like analysis, and an incorrect answer could cost more to verify than it saved. Those observations are directionally consistent across the supplied material, but the underlying interview count, participant mix, and research protocol are not present. They should be treated as product-discovery evidence, not a quantified employee survey.

The feature boundary is also sensible. The material distinguishes relatively “abstract unknowns”—forecast risk, account whitespace, discovery, and cross-system synthesis—from tacit, judgment-heavy tasks such as quotation and product configuration. The first category is a better candidate for AI assistance; the second should retain stronger human control.

This distinction matters operationally. A generic assistant may make an answer faster to generate while making it slower to verify. The two features are designed to close that gap.

## 3. Feature mechanics and intended value

### 3.1 Anchored Follow-Ups

The prototype lets the user select a generated row, column, or object and carry it into the next prompt as an explicit visual anchor. The next question can be:

- a **follow-up**: go deeper on the same visible object; or
- an **expansion**: branch from that object to a related but new one.

The supplied example moves from deals to sales plays and then to contacts for a selected play. Another begins with forecasted opportunities likely to slip, anchors one opportunity, and asks for its current issues.

Operationally, anchoring can reduce:

- prompt restatement;
- ambiguous pronouns such as “this one” or “that deal”;
- context drift in longer sessions;
- re-navigation to the original row or account;
- errors caused by the model applying a follow-up to the wrong object.

Its real unit of value is not “one more prompt.” It is a **resolved analytical chain with less rework**.

### 3.2 Trace

Trace is presented as a conclusion-first derivation: a short sequence of concrete evidence steps linked to numbered sources, dataset names or records, and last-refresh information. The examples include Salesforce forecast categories, stage history, MEDDPICC or activity data, notes, and People.ai call or attendance evidence.

Trace is not and should not be described as exposing model chain-of-thought. For operational use it should be a reproducible evidence trail generated from data access and execution logs.

Trace can reduce:

- opening several systems to reproduce a number;
- asking operations or a specialist where an answer came from;
- back-and-forth during forecast reviews;
- re-creating evidence for a Slack post, CRM note, or manager escalation;
- disputes caused by different refresh times or definitions.

Its real unit of value is a **decision that another person can verify without rebuilding the analysis**.

### 3.3 How the two features work together

| Stage | Without the features | With Anchored Follow-Ups and Trace | Intended operating gain |
|---|---|---|---|
| Identify | Seller finds a risky deal in a table or dashboard | AI synthesizes risk across sources | Faster prioritization |
| Explore | Seller restates context or opens another tool | Seller anchors the exact deal and deepens or branches | Less navigation and ambiguity |
| Verify | Seller manually reproduces the reasoning | Trace exposes evidence, record paths, and freshness | Lower verification cost |
| Coordinate | Seller explains the analysis from memory or sends an unsupported screenshot | Seller shares a timestamped, source-linked snapshot | Faster manager and partner alignment |
| Act | Seller updates CRM or follows up after additional reconciliation | Action can follow from a verified result | Shorter decision-to-action cycle |

### 3.4 Prototype and implementation readiness

The supplied prototype connected chat prompts to the current Workbench context through CopilotKit. A component-selection shim returned structured data into approved React interface components, and the artifacts state that engineering later worked from a forked CopilotKit implementation. This supports **interaction feasibility**: the concepts were more than static mockups.

It does not establish production readiness. The costly parts of Trace are not the visible step list; they are identity resolution across systems, permission enforcement, query logging, refresh semantics, and reproducibility. Likewise, Anchored Follow-Ups require stable object IDs and state management, not only a visual chip animation. A COO-office cost estimate should be based on those data and control requirements, not the apparent simplicity of the interface.

## Assumption audit 1: Is tool consolidation the same as productivity?

No. Fewer clicks and longer assistant sessions can coexist with no business improvement. The external context supports the existence of the problem: Salesforce's 2026 survey of 4,050 sales professionals reports that teams outside an all-in-one platform average eight standalone tools, 42% of reps feel overwhelmed by tool volume, and sales professionals spend 16% of their time on preparation and planning ([State of Sales, seventh edition](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/reports/sales/salesforce-state-of-sales-report-2026.pdf)). But these are broad survey results, not measurements of Palo Alto Networks or proof that these two features fix the problem.

The COO-office test is not whether a session becomes richer. It is whether the same work reaches a verified decision sooner and with no increase in error or abandonment.

## 4. Company-scale facts and the account-team population

### 4.1 Audited facts used in the model

Palo Alto Networks reported fiscal 2025 revenue of **$9.2 billion**, NGS ARR of $5.6 billion, and remaining performance obligations of $15.8 billion ([FY2025 results](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-reports-fiscal-fourth-quarter-and-fiscal-year-2025-financial-results)). Its FY2025 Form 10-K reports:

- **16,068 employees** at July 31, 2025;
- **$3.1002 billion of sales and marketing expense**, equal to 33.6% of revenue;
- sales and marketing expense consisting primarily of personnel and commissions;
- a sales organization responsible for large-account acquisition, market development, partner management, and direct-touch work with end customers;
- substantially all revenue fulfilled through channel partners, with three distributors representing 44.2% of FY2025 revenue;
- subscription and support revenue representing 80.5% of revenue.

These facts come from the [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1327567/000132756725000027/panw-20250731.htm).

This combination is important. “Sold through a channel” is not the same as “uninfluenced by the internal account team.” The filing explicitly describes a direct-touch sales organization that works with partners to win and support end customers. The model therefore uses an **account-team-influenced share** of revenue, not a direct-sales share.

The report does not use later 2026 headline figures as its base because acquisitions make the numerator and workforce population less comparable. For context, Palo Alto Networks' Q3 FY2026 disclosure says reported revenue and ARR include CyberArk and Chronosphere contributions ([Q3 FY2026 results](https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-reports-fiscal-third-quarter-2026-financial)).

### 4.2 Estimating the number of account executives

Palo Alto Networks does not publicly disclose an exact AE count. Any precise public number would therefore be false precision.

A transparent triangulation is:

1. Audited global workforce: **16,068**.
2. External workforce-data estimate for sales and marketing share: **20.5%**. Revelio Labs reports this share but also reports a higher total-company headcount than the 10-K, so only the percentage is used directionally ([Revelio Labs](https://www.reveliolabs.com/companies/palo-alto-networks/employees/)).
3. Applying 20.5% to the audited workforce gives an estimated **3,294 sales and marketing employees**.
4. Assume quota-carrying AEs and account managers are **35%–55%** of that combined organization. This produces approximately **1,150–1,810 AEs/account managers**, with a rounded planning midpoint of **1,500**.
5. Add sales engineers, product specialists, relevant customer-success roles, sales operations, and managers who would use account analysis. The broader addressable Workbench population is assumed to be **2,000–4,000**, with a midpoint of **3,000**.

These are planning estimates, not PANW-reported figures.

## Assumption audit 2: What could be wrong with the user-population estimate?

Almost everything after step 1 is uncertain. The 20.5% department estimate may misclassify roles. Marketing may be a larger or smaller portion of the combined department. PANW's specialist-heavy, channel-assisted selling model may require more non-AE participants per account than assumed. Acquisitions and post-FY2025 hiring also change the current population.

The practical correction is simple: replace this entire derivation with an HR roster joined to Workbench eligibility, then distinguish licensed, monthly active, and feature-exposed users. Until that is done, the population range should remain wide.

## 5. What the reported product metrics do—and do not—show

The user's screenshots supply the missing metric definitions:

- **Arc rate:** percentage of sessions with two or more object-anchored steps. This is the primary Anchored Follow-Ups measure.
- **Arc depth:** average number of steps per arc, excluding one-and-done sessions.
- **Snapshot rate:** percentage of sessions ending in an export to Slack.
- **Abandonment:** percentage of sessions with three or more steps and no resolution; this is the guardrail that should not rise with arc rate.
- A **session** is one sitting in the tool; a **step** is a question-and-answer or click-and-answer.

The screenshots also provide user-supplied, pre-launch reference assumptions rather than a traceable PANW benchmark study:

- questions per session: 1.2–1.4;
- multi-turn or arc rate: 11%–15%;
- arc depth among continuing sessions: approximately 2.0–2.1 steps;
- snapshot/export rate: 5%–8%;
- intended success targets: arc rate at least 25%, depth at least 3.0, and snapshot rate at least 15%.

These comparisons are not perfectly like-for-like. The baseline “multi-turn” rate appears to count related questions, while the feature's arc rate is defined more strictly as object-anchored steps. The screenshots also cite 11% follow-up and 30% expansion from an unnamed enterprise-assistant study, but provide no study title, sample, denominator, or measurement protocol. Those figures are not used in the financial model.

Against those definitions, the case study's reported outcomes read as follows:

| Metric | User-supplied baseline | Reported result | Correct interpretation | Status against proposed target |
|---|---:|---:|---|---|
| Arc rate | 11%–15% | 23% | +8 to +12 percentage points; +53% to +109% relative | 2 points below the 25% target |
| Arc depth | 2.0–2.1 | 4.3 | +2.2 to +2.3 **steps**; roughly +105% to +115% relative | Above the 3.0 target |
| Snapshot rate | 5%–8% | Not supplied | Trace adoption cannot be measured | Unknown versus 15% target |
| Abandonment | Not supplied | Not supplied | Longer chains may be productive or may be unresolved wandering | Unknown |

The polished case study labels arc depth as “+12pts over industry standard.” That unit is not compatible with a step count. The defensible statement is approximately **+2.2 steps versus a 2.1-step reference**, not +12 percentage points.

### A scale illustration—not a value claim

The base capacity scenario below produces 414,000 feature-used sessions per year. At a 15% baseline arc rate, 62,100 would become arcs; at the reported 23%, 95,220 would. That is **33,120 incremental arcs**. Against an 11% baseline, it is 49,680.

At 4.3 rather than 2.1 steps, the 95,220 observed arcs contain about **209,000 additional steps** relative to the same number of baseline-depth arcs.

That is a meaningful behavioral change. It is not automatically an economic gain. Those extra steps could represent completed deal → play → contact chains, or they could represent confusion. Resolution, elapsed time, abandonment, and downstream action decide which interpretation is correct.

## 6. Bottom-up capacity model

### 6.1 Formula

The capacity-equivalent value is:

> **Active users × eligible sessions per week × working weeks × feature-use share × minutes saved per used session ÷ 60 × fully loaded hourly cost**

The model uses 46 working weeks to allow for holidays, leave, training, and non-routine periods. “Minutes saved” is net of any extra interaction time caused by deeper arcs. It must eventually be measured from session telemetry and time-and-motion sampling.

### 6.2 Scenario inputs and results

| Input | Conservative | Base | Upside |
|---|---:|---:|---:|
| Active addressable users | 2,000 | 3,000 | 4,000 |
| Eligible analysis sessions/user/week | 3 | 6 | 8 |
| Working weeks/year | 46 | 46 | 46 |
| Sessions using either feature | 30% | 50% | 65% |
| Net minutes saved/used session | 5 | 8 | 10 |
| Fully loaded cost/hour | $110 | $135 | $150 |
| Annual hours redeployed | 6,900 | 55,200 | 159,467 |
| **Gross capacity-equivalent value** | **$0.76M** | **$7.45M** | **$23.92M** |

The base case works out to **18.4 hours per active user per year**, or about 1.0% of a 1,850-hour work year. At $135 per hour, that is **$2,484 per active user**.

Applied only to the estimated 1,500 AEs/account managers, the same base productivity per user equals approximately **$3.73 million**. Applied to the 3,000-person broader account team, it equals **$7.45 million**.

### 6.3 What the eight minutes represent

The base eight-minute saving is a combined-session assumption, not eight minutes independently attributed to each feature. A plausible composition is:

- two to four minutes avoiding context restatement, re-navigation, or a cross-tool restart because the object remains anchored;
- four to eight minutes avoiding source hunting, reproduction, or explanatory back-and-forth because Trace exposes the relevant evidence;
- less extra time spent on the richer interaction itself.

Not every session gets both benefits. The feature-use share is intended to absorb that reality.

## Assumption audit 3: Is capacity value bankable?

Usually not in full. Eight minutes saved does not create eight minutes of profit. It may create more customer contact, better preparation, reduced after-hours work, or a smaller need for incremental hiring; it may also disappear into slack time.

For planning, the COO's office should apply a realization factor after measurement. At 40% realized value, the $7.45 million base capacity becomes approximately **$3.0 million of realizable operating value**. No workforce reduction should be inferred.

The model is also highly sensitive to adoption. If 3,000 users are licensed but only 600 use the features routinely, the base value falls by 80%.

## 7. Revenue exposure model

Time savings are the more measurable benefit. The more strategically important but less provable benefit is earlier or better action on deals: identifying a slip risk, finding whitespace, resolving a coverage gap, or aligning a manager and partner before the opportunity changes.

### 7.1 Formula

> **FY2025 revenue × account-team-influenced share × decision-sensitive share × incremental protection/acceleration rate**

Definitions:

- **Account-team-influenced share:** revenue for which internal account work materially contributes even if channel partners fulfill the transaction.
- **Decision-sensitive share:** the small portion of influenced revenue where faster, better-verified analysis could plausibly change timing or outcome.
- **Protection/acceleration rate:** the fraction of that exposed slice actually affected by the two features.

### 7.2 Scenario results

| Input | Conservative | Base | Upside |
|---|---:|---:|---:|
| FY2025 revenue | $9.2B | $9.2B | $9.2B |
| Account-team-influenced share | 60% | 75% | 90% |
| Decision-sensitive share | 1.5% | 3.0% | 5.0% |
| Incremental protection/acceleration | 1.0% | 3.0% | 5.0% |
| **Revenue-equivalent protected or accelerated** | **$0.83M** | **$6.21M** | **$20.70M** |

The base result is only 0.068% of FY2025 revenue. The small percentage makes the magnitude plausible for a large company, but it does not validate the assumptions.

This is **not a GAAP revenue forecast**. Subscription and support revenue is recognized over service periods, and a saved or accelerated booking may affect revenue in later periods. The model also does not distinguish gross margin, renewal value, new logo value, or timing pull-forward.

## Assumption audit 4: Are we modeling loss or merely exposure?

This model does not estimate that PANW currently “loses” $6.21 million because the features are absent. It estimates a decision-sensitive revenue slice and applies a hypothetical feature effect. Several other forces—pricing, product fit, procurement, competition, partner behavior, security review, implementation capacity, and macro conditions—usually dominate deal outcomes.

Attribution should require opportunity-level evidence: eligible opportunities assigned to treatment and holdback groups, pre-defined decision events, action timestamps, and outcome tracking through the relevant booking and revenue-recognition window. Until then, the revenue model is an option-value scenario, not a booked benefit.

## 8. Top-down reasonableness check

Palo Alto Networks spent $3.1002 billion on sales and marketing in FY2025. McKinsey has estimated that generative AI could improve sales productivity by approximately 3%–5% of global sales expenditures ([economic potential of generative AI](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)). Applied mechanically to PANW, that broad estimate is $93 million–$155 million.

That is emphatically **not** the value of Anchored Follow-Ups and Trace. McKinsey's range covers the full set of generative-AI sales use cases. If these two interaction features captured an assumed 3%–8% of that total opportunity, the implied range would be approximately **$2.8 million–$12.4 million**. This assumption is not sourced; it is only a cross-check.

The bottom-up base estimate of $7.45 million falls inside that cross-check and uses only about 0.24% of PANW's sales and marketing expense. This supports plausibility, not causality.

## 9. Simulated operating pressure test

The following statements are **hypothetical role simulations**, not factual interviews. They are used to challenge the business case.

### Strategic AE

> “I do not need another long explanation. I need to know which commit deal moved, what changed, and whether the underlying record is fresh. Anchoring helps if it keeps me on the exact opportunity. Trace helps only if every source opens to the exact record.”

Implication: optimize for object identity, deep links, timestamps, and short evidence—not narrative volume.

### Sales engineer or platform specialist

> “Moving from an opportunity to relevant platform plays and then to the right contacts is useful. But the model can still anchor the wrong row or hide a missing technical constraint.”

Implication: show the anchor unambiguously, allow easy removal or comparison, and expose missing/out-of-scope evidence.

### Regional forecast leader

> “A defensible snapshot can shorten a forecast call. A screenshot without a generation time, refresh time, owner, and live link becomes stale evidence that keeps circulating.”

Implication: a snapshot needs provenance, time, permissions, and a route back to the current state.

### Sales operations

> “Arc rate is easy to celebrate and easy to game. If sessions get longer because users cannot resolve the question, the metric moves in the wrong direction while looking positive.”

Implication: pair arc metrics with verified resolution, abandonment, correction, and action.

### Information security and data governance

> “A plausible trace written by the model is not provenance. It can launder a hallucination into something that looks auditable.”

Implication: build Trace from executed queries, accessible records, row-level permissions, and immutable logs. Do not let the model invent the evidence trail after producing a conclusion.

## 10. Operational risks and controls

| Risk | Why it matters | Required control |
|---|---|---|
| Post-hoc “trace” rather than real provenance | A fabricated derivation increases misplaced confidence | Generate trace from execution and data-lineage logs; make cited claims recomputable |
| Stale or inconsistent source data | A correct analysis of stale data can still cause a bad forecast decision | Show source-level refresh time and flag conflicting definitions |
| Permission leakage | Account, pricing, forecast, and customer information is sensitive | Enforce source-system row-level access at retrieval, display, export, and snapshot sharing |
| Wrong object anchoring | Follow-up may apply to a neighboring row or prior turn | Persistent visual identity, clear removal, compare mode, and logged object IDs |
| Snapshot staleness | Static exports may outlive the data and circulate without context | Generation time, data-refresh time, owner, expiry label, and deep link to live view |
| Engagement optimization | Longer arcs can be rewarded even when unproductive | Resolution and abandonment as co-primary measures |
| Hidden workflow displacement | Time may shift from seller to manager, operations, or partner | Measure end-to-end team time and rework, not only seller session time |
| Over-automation of judgment | Product configuration, quotation, and deal strategy may require tacit expertise | Limit autonomous actions; require explicit human confirmation for consequential updates |

## 11. Ninety-day validation plan

### Phase 1: Instrument and establish the baseline (weeks 1–2)

Instrument the strict definitions supplied by the user:

- eligible session and feature exposure;
- arc rate and separate follow-up/expansion counts;
- arc depth;
- snapshot/export rate;
- abandonment: three or more steps without resolution;
- time to first useful answer and time to verified resolution;
- source-link opens, discrepancy flags, correction events, and stale-data warnings;
- downstream actions such as CRM updates, risk flags, sales-play activation, meeting creation, manager acceptance, or forecast-category changes.

Measure three pre-defined workflows: forecast/slip risk, whitespace/cross-sell, and renewal/account health. Establish current cross-tool time through telemetry plus a small time-and-motion sample.

### Phase 2: Controlled rollout (weeks 3–8)

Use an AE-clustered randomized holdback or a stepped-wedge rollout so the same regions and segments eventually receive the features while still producing a causal comparison. Avoid randomizing individual sessions for the same user if learning effects will contaminate the control.

Suggested design targets—not statistical guarantees—are at least 100–150 account-team users per arm and at least 2,000 eligible sessions per arm, stratified by role, segment, and region. Final sample size should be set from the baseline rate and the minimum detectable change before launch.

Separate the feature effects where possible:

1. Workbench without either feature;
2. Anchored Follow-Ups only;
3. Trace only;
4. both features.

This prevents the stronger feature from masking the weaker one.

### Phase 3: Outcome and economics readout (weeks 9–12)

Use a pre-registered scorecard:

| Category | Proposed scale gate | Why it matters |
|---|---|---|
| Anchored engagement | Arc rate ≥25%; arc depth ≥3.0 | Confirms the intended interaction is used |
| Guardrail | No material increase in abandonment or correction | Rejects “longer equals better” |
| Trace adoption | Snapshot rate ≥15% in eligible workflows | Confirms evidence is useful enough to carry forward |
| Resolution | Median time to verified resolution improves ≥20% | Direct operating-value measure |
| Evidence quality | ≥95% of sampled cited claims reproduce from accessible sources | Makes Trace trustworthy |
| Freshness | 100% of trace sources show refresh time; stale-source rate below an agreed threshold | Prevents false confidence |
| Action | Meaningful increase in a pre-defined downstream action within 24–48 hours | Connects analysis to workflow change |
| Economics | Measured minutes saved × active users × realized hourly value exceeds annualized run cost | Establishes a bankable operating case |

The percentage gates above are proposed management thresholds, not industry truths. They should be finalized before reading the results.

### Stop or redesign conditions

Do not scale if any of the following persists after two product iterations:

- arc rate rises but verified resolution time does not improve;
- abandonment or correction rises materially;
- source evidence cannot be reproduced reliably;
- permission or stale-snapshot incidents occur;
- fewer than 25% of the target population uses the features monthly after enablement;
- capacity value at a conservative realization factor does not exceed annual run cost.

## 12. Breakeven framework

No internal build or run cost was supplied. The COO's office should therefore evaluate any proposed annual cost `C` against measured usage rather than inventing a return.

Using the base inputs—3,000 users, six eligible sessions per week, 46 weeks, 50% feature use, and $135 per hour—a **$2.5 million annual run cost** would require about **2.7 net minutes saved per used session** to break even on gross capacity. If only 40% of saved capacity is realized, the required measured saving rises to about **6.7 minutes**.

Equivalently, at the base per-user value of $2,484, a $2.5 million cost requires roughly **1,006 fully productive active users** on a gross basis, or about 2,516 at 40% realization.

This example is not an estimate of actual feature cost. It is a decision rule.

## 13. COO-office decision

### What is strong

- The problem is well matched to a complex, direct-touch enterprise sales organization operating through many systems and partners.
- Anchoring solves a concrete interface problem: preserving object identity across an analytical chain.
- Trace addresses the most important adoption barrier for internal AI: verification cost and defensibility.
- The reported arc-rate and depth changes are large enough to justify a controlled trial rather than dismissing the concepts as cosmetic.
- The bottom-up base case requires only about 1% of annual user capacity to be saved, which is operationally plausible.

### What is weak

- The exact AE and user populations are not public.
- The benchmark metrics in the screenshots are user-provided reference assumptions without a named, inspectable study.
- The portfolio's 23% and 4.3 figures lack sample, period, cohort, exposure, and control information.
- Snapshot and abandonment outcomes are missing.
- No measured time saving, correction rate, downstream action, booking effect, or realized cost is provided.
- Trace could create more risk than value if it is a model-written rationale rather than a system-derived evidence log.

### Recommended management posture

Treat Anchored Follow-Ups as a **workflow-efficiency hypothesis** and Trace as a **decision-trust hypothesis**. Scale them together only after each passes its own test.

For planning, use **$3.7 million–$7.5 million of annual gross capacity-equivalent value** as the central range, depending on whether the addressable population is limited to AEs/account managers or includes the broader account team. Apply a realization discount before comparing that value with cost. Keep the $6.2 million revenue-equivalent scenario outside the committed ROI until opportunity-level causal evidence exists.

The core decision is not “does AI create longer conversations?” It is:

> **Can account teams move from a cross-system question to a verified, shareable, acted-upon answer materially faster, without increasing error, abandonment, or governance risk?**

If the controlled rollout answers yes, these two features have credible COO-level operating value. The current evidence is strong enough to fund that test, but not yet strong enough to claim the value as realized.

## Appendix A: Calculation detail

### A1. Estimated AE/account-manager population

```text
Audited FY2025 workforce                       16,068
Directional sales & marketing share            20.5%
Estimated sales & marketing population          3,294
Assumed AE/account-manager share              35%–55%
Estimated AEs/account managers             1,153–1,812
Rounded planning midpoint                       1,500
```

### A2. Base capacity case

```text
3,000 users
× 6 eligible sessions per week
× 46 weeks
× 50% feature-use share
= 414,000 feature-used sessions

414,000 × 8 minutes ÷ 60 = 55,200 hours
55,200 × $135/hour = $7,452,000 gross capacity-equivalent value

Per user: 6 × 46 × 50% × 8 ÷ 60 = 18.4 hours/year
18.4 × $135 = $2,484/user/year
```

### A3. Base revenue-exposure case

```text
$9.2B FY2025 revenue
× 75% account-team-influenced share
× 3% decision-sensitive share
× 3% incremental protection/acceleration
= $6.21M revenue-equivalent
```

### A4. Top-down cross-check

```text
$3.1002B FY2025 sales & marketing expense
× 3%–5% broad generative-AI sales-productivity potential
= $93.0M–$155.0M total potential across all genAI sales use cases

Assumed feature share of total potential: 3%–8%
Implied range for these two features: approximately $2.8M–$12.4M
```

## Appendix B: Source notes

### Internal/project sources

- [PANW case-study PDF](/Users/sakshatgoyal/Documents/GitHub/portfolio/Palo-Alto-Networks/Sales-Workbench/Portfolio-material/PANW.pdf)
- [Original Notion-page PDF](/Users/sakshatgoyal/Documents/GitHub/portfolio/Palo-Alto-Networks/Sales-Workbench/Portfolio-material/original-content/notion-page.pdf)
- [Apple Note export](/Users/sakshatgoyal/Documents/GitHub/portfolio/Palo-Alto-Networks/Sales-Workbench/Portfolio-material/Apple-Note-Palo-Alto-Networks.md)
- All images, Figma exports, sketches, GIFs, and prototype recordings within the supplied `Portfolio-material` directory
- User-supplied screenshots dated July 16, 2026, defining arc rate, arc depth, snapshot rate, abandonment, follow-up, expansion, session, and step

### Public sources

- Palo Alto Networks, [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1327567/000132756725000027/panw-20250731.htm)
- Palo Alto Networks, [FY2025 financial results](https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-reports-fiscal-fourth-quarter-and-fiscal-year-2025-financial-results)
- Palo Alto Networks, [Q3 FY2026 financial results](https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-reports-fiscal-third-quarter-2026-financial)
- Salesforce Research, [State of Sales, seventh edition](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/reports/sales/salesforce-state-of-sales-report-2026.pdf)
- McKinsey Global Institute, [The economic potential of generative AI](https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)
- Revelio Labs, [Palo Alto Networks workforce data](https://www.reveliolabs.com/companies/palo-alto-networks/employees/) — used only for directional department mix; not treated as audited headcount
