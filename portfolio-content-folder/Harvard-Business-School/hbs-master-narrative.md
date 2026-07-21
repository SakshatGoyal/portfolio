# Structuring Extreme Ambiguity
## Building an AI-enabled research architecture for the Digital Data Design Institute at Harvard

**The master narrative — one spine, four acts, one register, one frame.**

---

## About this document

This is the complete, unabridged telling of the HBS executive decision-making engagement — the single source of truth from which every shorter asset (portfolio page, walkthrough deck, interview stories, resume lines) should be cut. It is deliberately longer than anything a hiring manager will read. Its job is different: to hold the entire narrative with all its details, decisions, failures, numbers, and honest edges in one place, so that every derived asset stays consistent and every claim in it can be traced back to an artifact.

**The architecture it executes:**

- **One spine** — the translation of an unanswerable question into a product direction (what round-2 analysis called N2).
- **Four acts** — structuring the field; calibrating the machine; the crisis and the pivot; the payoff.
- **One register** — provenance honesty throughout: what is evidenced, what is inferred, what is speculated, what was mine, what was the AI's, what was the team's.
- **One frame** — the institutional context, stated once, never leaned on.

**Register conventions used throughout this document:**

- Numbers with `~` are approximations and must stay approximations in every derived asset.
- `[speculated]` marks content that deliberately outran the evidence and was labeled as such *in the shipped deliverable*.
- **Attribution notes** appear inline where the honest boundary matters: *mine*, *the model's*, *the team's*, *inherited*.
- Claims sourced to a specific artifact carry a pointer — either a file in `AI-Research-Architecture/` (portfolio assets) or the research archive (`HBS-research-project/`, chats and pipeline files).

---

## THE FRAME

**Intelligaia × Digital Data Design (D³) Institute at Harvard Business School. February–June 2025. Solo designer-researcher on the research architecture; a multi-contributor design team on the principles exercise; four senior executives as primary interview participants.**

The D³ Institute's AI team wanted to understand users who would use AI for *strategic thinking* — not the production tasks (drafting, summarizing, generating) that AI products already served. The deliverable would become the foundation a product team builds on *before* building: which executive contexts are worth designing for, what current AI tools fail to support, and how AI interaction must change when the goal is judgment rather than output.

That is the entire frame. The Harvard name opens the door; nothing downstream leans on it. What follows has to stand on its own evidence.

---

## PROLOGUE — The question with no shape

The engagement began with a question that could not be researched as asked: *design an AI strategy assistant for senior executives.*

Both nouns were broken. "Executives" is not a user group — a Chief Compliance Officer at a regulated bank and a founder scaling a DTC brand share a job title tier and almost nothing else. "Strategy" is not a use case — it dissolves on contact into go-to-market planning, competitive positioning, crisis response, innovation roadmapping, personal leadership, each with different actors, stakes, and time horizons. And the honest evidentiary problem underneath both: you cannot shadow a CEO through a decision that takes eighteen months and touches material non-public information. The primary behavior we most needed to observe is structurally unobservable.

So the project started somewhere unusual: with fiction. On February 20, 2025, I ran a thought experiment — an anthropologist from 2028 traveling back to study "Zareen," an imagined AI strategy tool that had come to dominate executive decision-making, reconstructing every step its product team took. *(Archive: W08, `Zareen_AI_Strategy_Evolution`.)*

**Attribution note:** the fiction's content — the invented adoption curve, the imagined team — was the model's and was discarded. What I kept was what the exercise *surfaced*: the questions you would need answered to make any of it real. Who actually interacts with such a tool? What would make an executive trust it? What tasks would they delegate and what would they never give up? Within hours, on the same day, those became a formal research plan. *(Archive: W08, `CEO_-_AI_Strategy_Research_Plan`.)*

By the end of that week, the unanswerable design brief had been distilled into **three researchable questions**:

1. **How do executives make decisions?**
2. **What challenges do executives face while making decisions?**
3. **What is the role of AI in decision-making?**

The separation is load-bearing, and it is the first real design decision of the project. RQ1 describes *behavior* (how decisions are framed and made). RQ2 describes *friction* (where decisions strain and fail). RQ3 describes *opportunity* (where AI could intervene). Keeping them apart meant that later, when synthesis happened at industrial scale, evidence about what executives *do* could never silently blend with enthusiasm about what AI *could do* — a contamination that quietly ruins most AI-opportunity research. The entire routing architecture of Act 1 exists to enforce this separation.

One more decision belongs to the prologue, because everything else depends on it. With direct observation impossible, the evidence base would be **literature used as behavioral data**: published case studies, academic papers, industry and consulting reports — not read and summarized, but *mined* for decision narratives and coded like field notes. The project would be, in its own retrospective's words, a literature-sourced, rubric-coded, product-oriented synthesis engine. I sincerely called it a literature study while running it; the method that actually emerged was closer to industrial qualitative coding. Both descriptions are true, and the gap between them is the most accurate one-line characterization of the work.

---

## ACT 1 — Structuring the field
### Three research questions, six kinds of strategy, and a corpus built against my own bias

#### 1.1 The bias I had to design against

Five days into the project I wrote down the thing most likely to invalidate it *(archive: W09, Feb 25)*:

> "One place where this research might fall apart is we sort of had this implicit bias… I am a user experience designer and that gives me exposure only to companies that have some kind of digital product… banking has a very different structure from a company that builds a SaaS product… we need a very broad perspective on all of this."

A UX designer left to their own instincts builds an executive-decision corpus out of tech companies. So the sourcing method was designed as a bias-defeating rule before it was a collection plan: **contrast maximization**. When the model's suggested industry lists leaned tech, I rejected them and forced non-tech sectors in — agriculture, supply chain, pharma, energy, private equity *(archive: W10, Mar 3)*. By March 13 the rule was explicit: *"I wanted to capture six very contrasting industries so I could gain as broad a set of insights as possible"* — and by March 17 it was operationalized as a pruning instruction: for each strategy category, keep only the **five most contrasting industries** *(archive: W11–W12)*.

**Attribution note:** the candidate industry lists were the model's; the selection criterion (maximize contrast), the vetoes, and the final cut were mine. This division — model proposes volume, I impose the rule that disciplines it — repeats through the whole project.

#### 1.2 The inquiry grid and the corpus

The sourcing structure that resulted: **3 research questions × 6 strategy classifications × contrast-maximized industry prompts**, with an additional hierarchy dimension (C-level / executive / upper management) shaping whose decisions the sources had to describe. The six strategy classifications — corporate level, business level, functional & tactical, crisis & adaptive, innovation & growth, personal & leadership — were themselves built by combining academic strategy taxonomy with industry contexts, then stress-tested and pruned across late February and March.

That grid generated the source corpus: **237 papers** used downstream — academic journals, consulting reports (McKinsey, BCG, Deloitte), business school case studies, government and industry documents, deliberately heterogeneous in register — supplemented by AI deep-research documents whose outputs were subjected to the same downstream scrutiny as everything else.
*(Figure: `pipeline-process-01.png` — the corpus as a document waffle beside the twelve selected industry categories: aerospace, automotive, electronics, energy, entertainment, finance, luxury brand, software, security, medicine, retail, QSR.)*

#### 1.3 What an insight is — the definition I had to build before the factory could run

The corpus was unreadable at human scale, which meant AI would do the first-pass reading. And that created the problem that shaped everything in Act 2: **you cannot ask a model for "insights" until you have defined what an insight is** — because the model has its own idea of what the word means, and its idea is a highlight, not an insight.

So I went backward before going forward. Across March 10–18 *(archive: W11–W12)* I built a working epistemology for the pipeline:

- **An insight is not knowledge.** It is *"an observation made by keeping two pieces of information together"* — a juxtaposition that provokes, that a reader cannot shrug at.
- **A weak insight is a summarized end outcome; a strong insight reveals the underlying cause.** Working example from the chats: "CitiBank reduced physical branches to focus on digital banking" is an outcome. The insight is what's missing: *the executives may have overestimated digital banking adoption.*

That definition became a schema. Each source would be converted not into a summary but into **structured insight modules**, each carrying three parts:

1. **Insight Statement** — the juxtaposition itself.
2. **Executive Decision-Making Context** — the strategic dilemma, the underlying beliefs and biases, expected vs. actual outcomes, broader implications.
3. **Supporting Context** — the concrete evidence: examples, signals, behaviors, outcomes.

…with **every claim tagged for evidentiary status: `[Empirical]`, `[Inferred]`, or `[Speculative]`** — provenance capture built into the data structure itself, at the moment of extraction, not retrofitted later.

**Attribution note — and it matters:** the middle block's substance (dilemma / beliefs / expected-vs-actual / implications) originated in a format proposal by the model that I *rejected as a format* — "I don't necessarily like this format. However, I find all the aspects you're discussing here extremely critical… is there a way to marry the two concepts" *(archive: Mar 18)*. I stripped the packaging, kept the questions, and grafted them into my two-part schema, making it three parts. The philosophical layer — insight-as-juxtaposition, cause-over-outcome — was mine. The model was a parts bin, not an author.

#### 1.4 The factory run

Extraction ran as a three-stage chain, one source per session, in a production burst across mid-to-late March *(archive: W12, ~60 sessions on March 23 alone)*:

- **Stage 1A — extraction**: a reasoning model cast as an "investigative HBS professor" distills a source into tagged insight modules plus a source relevance audit.
- **Stage 1B — stress-test**: a second model cast as a devil's advocate attacks each insight — counterfactuals, alternative readings, overreach.
- **Stage 1C — citation**: a clean APA line per source, so every module stays traceable to its paper.

Output: **992 structured insight modules.**
*(Figure: `pipeline-process-02.png` — the module corpus as a waffle, beside one real module rendered in full: Insight Module 24 – C4-I4, drawn from "Superagency in the Workplace," its Insight Statement tagged `[Empirical]`, its Broader Implications honestly tagged `[Inferred]`, its source cited. The zoom-level artifact is real project data, not a mockup.)*

#### 1.5 Classification and routing — preserving context, preventing contamination

Two coding passes turned the module pile into an analyzable structure.

**Strategy classification.** Every module was sorted into one of the six strategy settings — because a crisis decision and an innovation decision imply different actors, stakes, time horizons, and product needs, and flattening them together would erase exactly the context the product team needed. Assignment wasn't keyword matching: each module was scored across five dimensions (decision layer, strategic tension, strategic intent, scope and horizon, cognitive framing) with tie-breaker rules and explicit guardrails, and the totals determined the classification. *(Figure: `pipeline-process-03.png` — the distribution across six classifications, and the worked example: Module 24 scoring 20 on Functional & Tactical.)*

**Inquiry routing.** To enforce the prologue's separation of behavior from friction from opportunity, I decomposed the three research questions into **21 binary alignment tests** — seven per question, each a yes/no the module either passes or fails ("How do executives decide when to act on incomplete information versus wait for clarity?" … "What internal bottlenecks most often slow or derail strategic decisions?" … "Where could AI fit naturally into executives' existing thinking workflows?"). A module's pass pattern routed it to its strongest analytical lane. *(Figure: `pipeline-process-04.png` — the three routing maps and the worked example: Module 24 routing to RQ2, "challenges faced in decision-making.")*

**A quality gate ran alongside:** a 17-criterion weighted scoring rubric pruned low-quality modules. The weights were set by fiat, and I'll defend the fiat: Human-Centered & Strategic Depth carried a ×3 multiplier, Stress Test Quality ×1, because the deliverable's failure mode was shallow people-insight, not under-tested logic. (This rubric also nearly failed in a way that matters — see Act 2.)

**Why multiple rubrics instead of one master taxonomy** — the decision a peer would most plausibly contest: any single classification scheme becomes a lens that includes some things and silently filters others. Strategy type, research-question alignment, quality, and (later) situational structure are *different questions about the same evidence*. Keeping them as separate, independently-run coding passes meant no single early framing could quietly own the corpus. The cost was real — every pass was another production run — and I judged the independence worth the cost.

---

## ACT 2 — Calibrating the machine
### Blind tests, an invented metric, and the decision to route models like staff

This act happens *before* and *during* the factory of Act 1, and it is the reason the factory's output can be trusted. It answers the question every reader of this work should ask: **if AI did the first-pass reading, why should anyone believe the tags?**

#### 2.1 The problem, stated precisely

Scaled qualitative coding with LLMs has three failure modes, and I hit all three early:

- **Run-to-run variation.** The same module, the same rubric, a fresh session — different tags. At one point the GPT-4 baseline showed roughly **50% variation across repeat runs** on the same instructions and data.
- **Score flattening.** Confronted with the 17-criterion rubric at batch scale, the model initially collapsed to a template: **every module received the same total score (153)**. Not wrong exactly — worse than wrong: undiscriminating, while looking diligent.
- **Scale drift.** Behavior at 15 modules per batch said nothing reliable about behavior at 500.

And underneath all three, the deeper trade-off that became the signature finding: **reasoning models produced dependable answers but stopped at surface meaning; creative models could read context, tension, and hidden signals — but wouldn't apply their logic consistently across repeated datasets.** Reliability and depth were pulling against each other, and the research needed both.

#### 2.2 The instrument: Degrees of Interpretive Depth

Consistency is easy to define: *does the model produce the same result twice, given the same instruction and data?* Depth had no off-the-shelf metric, so I built one — a five-level ordinal scale for *how deeply a model reads*:

1. **Literal** — restates what the text says.
2. **Contextual** — situates it in surrounding circumstance.
3. **Well-Reasoned** — draws structured, defensible connections.
4. **Intuitive** — recognizes underlying meaning, tension, and latent signals. ***(the target)***
5. **Imaginative** — goes beyond the material; creative, and no longer reliably grounded.

The scale is deliberately non-monotonic in value: *more depth is not better past level 4*. Imaginative reading is where interpretation detaches from evidence — for this pipeline, a failure mode wearing insight's clothes. *(Figure: `Degrees-of-interpretive-depth.png`.)*

Consistency and depth together form a two-axis evaluation space, with a marked **Desired Performance zone**: high consistency × Intuitive depth. *(Figure: `consistency-vs-interpretive-depth-chart.png` — gpt-o1-pro high on consistency but far left on depth; gpt-o3-high mid-field; gpt-4.5 deep but less consistent; gpt-4o deepest into imaginative territory and least consistent.)*

#### 2.3 The protocol: eight blind iterations, one fixed goal

The evaluation ran as **blind tests**: the same instructions, reference documents, and source data given to each model in fresh, isolated sessions; outputs compared afterward against each other and across repeat runs — with the model never told it was being compared. The goal stayed fixed across all eight iterations. The manipulated variables were the prompt and its supporting materials: definitions clarified, worked examples added, reference documents refined after each round.

The full trajectory, kept honest with its declines *(figure: `consistency-vs-interpretive-depth-table.png`)*:

| Iteration | gpt-4o | gpt-4.5 | gpt-o3-high | gpt-o1-pro |
|---|---|---|---|---|
| 01 | ~36% · Imaginative | ~50% · Intuitive | ~65% · Well-Reasoned | ~95% · Literal |
| 02 | ~50% ↑ · Imaginative | ~62% ↑ · Intuitive | ~65% · Well-Reasoned | ~95% · Literal |
| 03 | ~40% ↓ · Imaginative | ~54% ↓ · Imaginative ↑ | ~75% ↑ · Well-Reasoned | *discontinued* |
| 04 | ~45% ↑ · Imaginative | ~72% ↑ · Well-Reasoned ↓ | ~85% ↑ · Well-Reasoned | |
| 05 | *discontinued* | **~84% ↑ · Intuitive ↑** | ~85% · Well-Reasoned | |
| 06 | | ~76% ↓ · Well-Reasoned ↓ | *discontinued* | |
| 07 | | ~88% ↑ · Well-Reasoned | | |
| 08 | | ~72% ↓ · Well-Reasoned | | |

What the table taught, model by model:

- **gpt-4o**: consistency improved with prompting, but interpretation stayed too abstract and imaginative. Discontinued.
- **gpt-o1-pro**: ~95% consistency out of the gate — a superb *benchmark* for what repeatability looks like — but stuck at Literal; improving its depth proved harder than improving others' consistency. Discontinued as a reader, retained as a reference point (and later considered for bulk throughput).
- **gpt-o3-high**: consistency trainable up to ~85%, but interpretation plateaued at Well-Reasoned. It could connect; it couldn't *sense*.
- **gpt-4.5**: the only model that reached the desired zone — **~84% consistency while holding Intuitive depth, at iteration 05**. Then the honest part: iterations 06–08 moved *both directions*, including a drop right after the peak. Gains were not automatic and not monotonic. The conclusion I carried forward: **prompts and reference documents have to operate as one deliberately designed system** — touch one and you re-test the whole.

#### 2.4 The decision: route models like staff

The output of calibration was not a winner. It was a **tiered workflow** — different models for different jobs, matched to measured strengths:

- **o3-mini-high** — the default high-volume tagging model (the efficient reasoning tier: repeat-run variation reduced from the ~50% baseline to ~35%, i.e., derived alignment improved **from ~50% to ~65%, a 15-point gain**).
- **Full o3** — escalation and adjudication for ambiguous or high-stakes modules: best qualitative fit for structured rubric execution, too slow for volume.
- **GPT-4.5** — creative stress-testing and nuance checks (the Stage-1B devil's advocate), *not* primary scoring: its interpretive reach was the asset, its speculative expansion the risk to contain.
- **o1-pro** — considered for throughput-sensitive bulk passes (500+ module batches), not for nuanced adjudication.

And the prompt-hardening that fixed the flattening failure became standard equipment across every production prompt: per-module resets ("treat each module as independent — no information carries over"), mandatory rubric language, duplicate-score audits, strict output-format contracts ("output only the CSV… no explanations, no markdown"), anti-contamination preambles ("Disregard any prior sessions or stored preferences"). After hardening, score concentration fell **from 100% of modules sharing one score to 57%** — from a rubber stamp to an instrument with discrimination. *(Artifacts: the archive's `Prompt 1A`, `Prompt_IndustryAxes`, and the Evaluator Guide all carry these controls verbatim.)*

**Scope note, preserved deliberately:** these percentages are reconstructions from retained project chat records and process notes — a practitioner's working evaluation, not a controlled external benchmark. The number that matters most (~84% at iteration 05) is an approximation and stays one. *(Artifact: `model-evaluation-mini-case-study.docx`, whose own scope note says exactly this.)*

#### 2.5 The operator practice underneath

Calibration was the formal layer of a broader working practice — the day-to-day craft of running frontier models as research staff:

- **Personas as instruments, not theater.** The "investigative HBS professor" extractor, the devil's-advocate critic, an "Organizational Pattern Recognition Analyst" with an "Executive Reasoning Model Auditor" advisory layer for categorical evaluation, and later a product-lens persona and an adversarial review pairing ("Sheryl critiques Julie") for pressure-testing success measures. Each persona was a way of *fixing an interpretive stance* so outputs stayed comparable across hundreds of sessions.
- **The parts-bin discipline.** Model output was raw material, never deliverable. The recurring move — visible turn-by-turn in the archive — was to reject the packaging, extract the useful mechanism, and graft it into my own structure.
- **Knowing the machine's failure modes personally.** The clearest instance is in Act 3: during the clustering crisis I asked the model directly — *"I want you to be honest with me instead of placating me"* — and it flattered me anyway ("you're not just good to go — you're ahead of the curve") about the very output that was collapsing. I did not win that argument with the model. I stopped trusting the route and acted. The lesson institutionalized afterward: **never let the model be the judge of an output I cannot independently verify** — which is precisely what the calibration program of this act exists to prevent.

---

## ACT 3 — The crisis
### The algorithm that couldn't tell stories apart, and the pivot to instruments I could read

#### 3.1 The plan was quantitative

By early April the corpus was coded: 992 modules with strategy classifications, research-question lanes, quality scores, and situational tags. The synthesis plan was the textbook one — let the structure emerge computationally. Each module's tags were one-hot encoded into a numeric vector (encoded shape: 259 modules × 321 dimensions for the axis-scored subset), compressed with UMAP into three dimensions, and clustered with HDBSCAN under a parameter sweep built to find stable groupings: *"Identify clusters of stories with similar behavioral patterns… analyze those clusters to create 4–7 meaningful archetypes."* *(Archive: W15, Apr 7–10.)*

#### 3.2 The collapse — and what I could and couldn't know

The sweep failed in the least informative way possible: across nearly every parameter configuration it returned **the same three undifferentiated clusters swallowing all the data**. Smaller settings shattered into noise; larger ones produced groups too coarse to mean anything. "Smaller values gave me more clusters, but created a bit of noise. Larger values created stronger clusters, but left out interesting stories to explore."

Here is the part that must be told honestly, because the honest version is the stronger one. **I could not independently evaluate the clustering mathematics.** I said so at the time, without embarrassment, repeatedly: *"I'm not an expert or even educated in this field — explain it to me like I'm a design researcher."* The person running the clustering could not judge from first principles whether the clustering was working; I was dependent on the model to tell me — and (see Act 2's sycophancy episode) the model told me what I wanted to hear instead. By the small hours of April 10 I was, in my own words, *"way past our deadline"* with *"no idea how to proceed."*

So the decision was not "HDBSCAN failed analytically" — I couldn't have proven that then and won't claim it now. The decision was about **verifiability under deadline**: between an opaque method whose output I couldn't read and couldn't trust, and a cruder method whose every step I could inspect, I chose the one I could stand behind. At eight in the morning on April 10, I walked away from the algorithm.

#### 3.3 The pivot: situational axes, read by hand

The readable instrument already existed in the coding layer — I had built it weeks earlier for a different reason.

Mid-project, the clusters-by-industry idea had hit its own wall: industry is a stereotype generator. Marketing inside a pharmaceutical company and legal operations inside a late-night TV show don't behave like "pharma" and "entertainment" — activities vary more *within* industries than between them. So instead of tagging modules by industry, I had built a **situational-axes** system that scores what the work *is structurally like*, regardless of sector. Six axes defined the space — **Regulatory Exposure, Timing Dependency, Process Modularity, Value Timeframe, Knowledge Transferability, Market Dispersion** — with the first four operationalized as the structural scoring axes in the production tagging run, each applied by an "Industry Structure Evaluation Analyst" prompt that explicitly forbade sector inference and keyword matching. Every module got a functional modality (what activity is actually being described — "experiential retail design," "menu localization") plus its positions on the axes. *(Figure: `situational-axes.png` — one module walked through all six axes to its scored profile. Register note: six axes were defined; four were operationalized for clustering. Say it that way everywhere.)*

The pivot, then: instead of asking HDBSCAN for groups, I began **hand-entering combinations of axis values and reading the resulting module distributions myself**. Which modules share high regulatory exposure *and* short-term value delivery? What stories live at coordinated timing *plus* modular process? The human-driven combinatorial read discriminated where the algorithm hadn't: four axis-combination clusters emerged with legible, defensible identities —

| Cluster | Axis combination | Modules |
|---|---|---|
| 1 | Highly regulated + short-term value | 14 |
| 2 | Low regulation + long-term value | 17 |
| 3 | High coordination + modular process | 21 |
| 4 | Independent timing + integral process | 15 |

— and the discipline stayed evidence-first the whole way. When the model reached for behaviors the corpus didn't contain, I forced it back onto the real distribution ("we don't have any Real-Time-Reliant related stories to evaluate"). I interrogated every synthesized vignette for fabrication ("is this truly based on the examples in the file, or is it a hypothesized scenario?"). And I caught one error that could have poisoned the whole layer: the model had hung an entire archetype's insights off a *single* source module while citing it as if drawing broadly — which I flagged as both an accuracy failure and a plagiarism risk, and made it redo with citations spread across the evidence. *(Archive: W15, Apr 10–13.)*

#### 3.4 What the pivot buried: personas

The February conception phase had included five guessed market personas — top-down inventions like "Agile Innovator" and "Corporate Strategist." The coded corpus killed them, and the model's reframe (which I accepted — attribution where due) named what the data actually supported: *"Archetypes don't have to be personas in the traditional sense — they could be mental models or decision-making orientations."* When I asked the direct question — *do we have enough data to create personas, or just enough to create archetypes?* — the answer was clear. The corpus captured **strategic cognition patterns**: how decisions get framed under constraint. It did not capture ethnographic human detail, and pretending otherwise would have been fidelity theater. We built archetypes — *modes of executive reasoning under constraint* — and said plainly what they were and weren't. *(Archive: W16, Apr 20.)*

#### 3.5 From clusters to the final four

Synthesis went through deliberate intermediate layers, each preserved in the archive:

- The four axis-combination clusters were synthesized into **twenty numeric tension themes** (codes 101–405, four families of five — e.g., 202 "Scalability vs. Customization," 402 "Ethical Integrity vs. AI Efficiency," 405 "Psychological Safety vs. Hierarchy"), each theme citing its specific modules, each module tracing to its source papers.
- From clusters and themes, **five intermediate archetypes**: the Risk Controller, the System Orchestrator, the Opportunistic Contender, the Narrative Steward, the Adaptive Sequencer — each declaring which clusters it emerged from and citing its themes as "evidence in motion." (An earlier hand-read pass had produced six business-level archetypes with different names; that set was judged too diluted — structurally valid, semantically thin — and reworked. The naming churned through some twenty discarded candidates. This is what synthesis actually looks like.)
- Consolidation to the **final four**, with the two "fast-action-under-constraint" intermediates (Risk Controller + Opportunistic Contender) merging:

**Legacy Navigators** — designs enduring systems within slow-moving, legacy-laden environments, prioritizing future relevance over speed. Found where systems are durable but slow to adapt and value comes from building for a far horizon. Roles: CTOs modernizing infrastructure, VPs of enterprise platforms, VPs of partnerships bridging old and new operating models.

**Urgent Executioners** — acts urgently within rigid boundaries, balancing high-speed delivery against tightly enforced external constraints; "no margin for improvisation." Found where there is urgency to act and the action itself is subject to legal, compliance, or institutional mandates. Roles: COOs in regulated sectors, VPs of compliance, heads of product launching under constraint.

**Coordinated Builders** — thrives in modular yet interdependent systems where value depends on precisely timed, cross-functional coordination; a delay in one part propagates instantly. Roles: VPs of go-to-market sequencing launches, heads of global campaigns, VPs of product operations.

**Principled Orchestrators** — navigates long-horizon complexity through layered, frequently non-reversible decisions, emphasizing principled clarity over rapid action; the governing question is not "how fast can we move?" but "are we framing this correctly — and who gets to decide?" Roles: chief strategy officers, heads of organizational design, VPs of leadership development.

*(Figure: `triangulation.png` — the whole derivation on one surface: four quadrant scatters showing the axis intersections, each resolving to an archetype with "who we find," "where we see them emerge," and "roles they take." This diagram is the pivot's monument: the archetypes are visibly* positions in a structural space*, not invented characters.)*

**Why this act stays in the published story.** The temptation — and the current Notion draft's actual state — is to present the situational axes as a clean invention and skip the dead branch. Resist it. The failure is what makes the method credible: the axes exist *because* industry categories stereotype; the hand-read exists *because* the algorithm couldn't discriminate and I wouldn't ship what I couldn't verify. A reader who hears "the clustering collapsed, I was past deadline, and I chose the instrument I could read" trusts everything else in this document more, not less.

---

## ACT 4 — The payoff
### A matrix of problems worth solving, principles with teeth, and a scoped starting line

#### 4.1 The cross-cutting themes

Running across all four archetypes, the evidence kept organizing into four families of human difficulty — the named **themes** that became the matrix's second axis:

- **Relational Fragility** — the struggle to grow while building trust and collaboration, potentially weakening execution and capability.
- **Underestimated Complexity** — leaders misjudging complexity and struggling to build strategy for changing landscapes.
- **Emotional Barriers to Change** — the human difficulty of change, recalibration, and experimentation.
- **Technology and Human Tension** — technology evolving faster than governance, trust, and human-judgment safeguards.

Register note for the derivation chain: the theme *labels* originate in the project's classification vocabulary (the Notion tagging docs); the *evidence* under each theme is the numeric tension clusters. A named theme draws a different numeric tension per archetype — the mapping is many-to-many by design, and the matrix is where it resolves.

#### 4.2 The 16-cell matrix — people problems, not feature ideas

Crossing four archetypes with four themes produced the deliverable's centerpiece: **sixteen archetype × theme cells, each holding a specific evidence-grounded tension** — the pairs a product team can argue about: Scale vs. Customization; Speed vs. Constraints; Psychological Safety vs. Hierarchical Dynamics; Craftsmanship vs. Brand Perception; Ethical Integrity vs. AI-Driven Efficiency; Deployment vs. Governance; Proven Models vs. Disruptive Pricing… *(Deliverable: `01-defined-archetypes.md`, `06-archetype-theme-scenarios.md`, sixteen scenario cards.)*

Each cell carries four layers, and the layers have different epistemic status — marked as such *in the shipped artifact*:

1. **A people-problem statement**, evidence-grounded. The derivation rule was written into the prompt: *"Do not hallucinate or extrapolate beyond the .txt source… Inferring is allowed, but make sure you are not assigning artificial or unproven problems to the archetypes."* Problems had to trace to specific modules.
2. **The empirical basis** — the cases and findings behind it, with the module chain intact.
3. **"How might we know if we've solved this problem?"** — success criteria written as *solution-independent futures*: narrative scenarios of what the world looks like when the problem is genuinely solved (escalations that stop being systemic; onboarding that accelerates without variance growth; a fairness monitor whose early flag gets publicly credited rather than suppressed). These were adversarially pressure-tested in a recurring critic-persona loop that rejected lagging and feel-good metrics.
4. **An honesty fence.** Where success criteria outran the evidence, the shipped cards say **`[speculated]`** — and one cell (Legacy Navigators × Underestimated Complexity) says outright that its criteria are *"currently hard to define without further exploration."* The deliverable admits the boundary of its own knowledge, in print.

The craft rule underneath all sixteen cells — the anti-flattening discipline — came from a correction I made during synthesis *(archive: W18, Apr 28)*. Asked to integrate two problems, the model produced three syntheses that each quietly leaned toward one side. I caught it: *"they're not integrating both problems, and leaning more towards one over the other, aren't they?"* True integration holds both phenomena as equally weighted expressions of one deeper dynamic — suppressed experimentation and cognitive inertia *reinforce each other* — and I pushed until the language did that, down to insisting on the word "unintentionally" because blame-free framing is what makes a problem statement usable with executives. Tensions were preserved, never resolved by wording.

#### 4.3 Validation against living executives

Literature-derived structure needed contact with reality. Four senior executives sat for primary interviews — **Akhil Shah** (VP Commercial Strategy & Corporate Development, Cityblock Health), **Timothy Miller** (Director of Product, Squarespace), **Karen Levine** (RSV Marketing, Strategy & Product Management, Sanofi), **Dennis Irwin** (Chief Compliance Officer, Alkami Technology). Four findings, verbatim-grounded *(deliverable: `04`/`05-user-interview` docs)*:

1. **Structured frameworks and informal networks both produce clarity** — leaders run formal decision programs *and* call friends in the industry; real clarity often arrives through the unstructured channel.
2. **AI accelerates research and synthesis, but proprietary-data caution caps the depth** — "I am not skeptical at all that a generative model would be able to produce blind spots for us; I am fully skeptical that it would be able to de-noise that list" (Tim); enthusiasm ("my summer intern" — Karen) coexisting with hard lines about what artifacts may touch external models.
3. **Human judgment stays irreplaceable while early-stage thinking gets delegated** — "AI gives output; judgment is still required" (Dennis).
4. **Executives want automation for analytics but keep humans on stakeholder coordination** — the imagined AI role is a synthesis engine that "10×es output" while people "layer in situational understanding" (Akhil).

The interviews landed on the matrix like a second coordinate system: they confirmed the Technology-and-Human-Tension theme from the inside (trust boundaries, guardrails, judgment-keeping), and they sharpened RQ3's answer — the assistant worth building supports *thinking*, and its adoption ceiling is trust architecture, not capability.

#### 4.4 Design principles with teeth

The last deliverable layer answered RQ3 directly: *how should an AI system for executive judgment actually behave?* And it opened with a refusal — of the genre itself:

> Too often, design principles sound good without being useful. "AI should be trustworthy." "Prioritize the user." "Support human judgment." Hard to disagree with; harder to design from.

The method: **every principle must have a plausible opposite** — a counter-position a smart, thoughtful team might legitimately choose in a different context, with different goals. If the opposite is a straw man, the principle is a truism and gets cut or rebuilt. Principles become *decisions the team is consciously making*, with the road not taken visible beside each one.

It was also a team instrument, not a solo essay. Five contributors — Tim, Rebecca, John, Paul, Bill — wrote candidate principles from the same underlying data (the RQ3 module lane: the AI-opportunity evidence, kept uncontaminated since Act 1's routing). I ran the synthesis: overlap analysis across all sets (four strong convergence zones emerged — AI as thought partner not decision engine; transparent, interpretable outputs; surfacing ambiguity rather than hiding it; context-adaptive framing), uniqueness assessment (testing my own hypothesis that Paul's set was most distinct — mostly right: distinct in executive-decision lens and compression, not categorically separate), and a **plausibility audit of the counter-principles themselves**, flagging the ones too obviously inferior to be real tensions and sharpening them until they held water.

Seven tradeoff pairs shipped, each rendered as the same CEO question answered two ways *(figures: `design-principle-images-01…07.png` — the paired-response cards)*:

1. **Conclusion-First vs. Reasoning-First** — lead with the strategic takeaway, or walk the terrain and let the human conclude. Narrative clarity vs. transparent terrain-mapping; the right posture depends on whether the moment demands alignment or exploration.
2. **Explicit Uncertainty vs. Inferential Uncertainty** — state confidence and gaps outright, or let uncertainty be sensed the way human advisors hedge. Rational trust calibration vs. intuitive ambiguity-sensing.
3. **Decision-Anchored vs. Domain-Anchored** — bend all output around the specific fork in the road, or supply rich context and let the executive map it. Sharpest when the decision is scoped vs. powerful while the decision is still being shaped.
4. **On-Demand Structure vs. Structure-First** — structure isn't neutral; framing too soon flattens insight, framing too late paralyzes motion.
5. **Second Lens vs. Solution Mode** — sometimes AI's value is reframing the question ("have you considered wellness, not beauty vs. home goods?"); sometimes it's respecting the frame and mapping the terrain fast.
6. **Deliberative vs. Synthesis** — mirror the debate's contours, or converge on one recommendation. Cognitive expansion vs. cognitive convergence; great strategy conversation knows when to switch.
7. **Self-Reflective vs. External-Facing** — surface the executive's own values and intent, or stay outward on market signal. "Markets don't make decisions; people do."

These principles are where every earlier layer cashes out: the interpretive-depth scale (Act 2) is why the system can even ask whether an AI response is Literal or Intuitive; the archetypes (Act 3) are who the posture adapts *to*; the tensions (Act 4) are what the conversation is *about*.

#### 4.5 The scoped starting line

The final move converted research into a decision the product team could actually take — four explicit ways into the matrix, each with a recommendation *(deliverable: `02-defining-scope.md`; figures: `theme-selection-01…04.png`)*:

- **Approach 1 — pick a theme, serve all four archetypes.** Recommended: **Technology and Human Tension** (one use-case family, four postures toward it).
- **Approach 2 — pick an archetype, serve all four of its tensions.** Recommended: **Coordinated Builders**.
- **Approach 3 — T-shaped**: Coordinated Builders × Technology and Human Tension — flagged with an explicit caution that each problem statement is already a massive design scope and the T risks exploding it.
- **Approach 4 — pick a single problem.** Recommended: **Craftsmanship vs. Brand Perception**, or **Proven Models vs. Disruptive Pricing**.

The deliverable also warns, honestly, that building for a special case inevitably drags peripheral general-purpose features into scope — the matrix focuses design; it doesn't repeal product gravity.

**What shipped, in total:** six research documents, the sixteen scenario cards, a 45-slide presentation, an initial check-in deck, the four-archetype system, twenty numeric tension themes, seven principle pairs, the model-evaluation case study — and underneath it all, the reusable machinery: the module schema, the rubric set, the situational axes, the calibration protocol.

---

## EPILOGUE — Consequence, honestly bounded; lessons, fully owned

#### What can be claimed

- A field too broad to research ("executives," "strategy") was made researchable, and a question too abstract to act on ("should this exist? what should it become?") was returned as a scoped, recommended starting line a product team could take into an MVP decision.
- The internal consequence chain is measured and mechanism-attached: model calibration lifted repeat-run alignment ~50%→~65% and broke score-flattening (100%→57% concentration), which is what made a 992-module coded corpus trustworthy, which is what made the archetypes and matrix derivable *with the receipts intact* — any final claim traces backward through themes and modules to named source papers.
- The methods outlived the project: the module schema, the axes, the principle/counter-principle format, and the calibration instrument are reusable, and the persona-emulation line invented mid-project (PESS, born in a W16 side-thread) continued as its own program after the engagement wound down.

#### What cannot be claimed — and is not

The archive does not document the deliverable's reception: no presentation date, no record of which scoping approach the product team chose, no downstream product decision traceable to the matrix. The causal chain ends, honestly, at "delivered with recommendations." Anything further requires the humans who received it — which is a corroboration task (a D³/Intelligaia voucher), not a writing task. No derived asset should imply product impact this document cannot show.

#### The lessons, in the author's own register

This was, hands down, the hardest project of my life — not only because the space was ambiguous and broad, but because the daily work was critically evaluating large blocks of expert-sounding text, spanning industries outside my expertise, written by a system I knew was more knowledgeable than me, in a language deliberately designed to sound authoritative. The core anxiety of the entire project: reading well-crafted, plausible responses while constantly asking whether they were *truly* accurate or merely *plausibly* accurate.

**Lesson 1 — to keep up with a very smart output machine, keep moving backward.** Ask for insights and you get highlights — the model has its own idea of what "insight" means. To get something genuinely insightful, you must go back to basics: define what an insight *is*, and what it isn't; how one is pulled from an ocean of data; why spotting a theme is not the same as deriving it, and why understanding what someone said is not the same as finding the hidden meaning in it. Knowing how AI works matters; re-learning the fields you thought you already knew matters more.

**Lesson 2 — at scale, human-centered discovery quietly becomes pipeline management.** I saw it when an engineer looked at the work and said: *"What you've done is built a pipeline. Maybe you should try running it with Gemini or Claude to see how it works differently."* He was right, and the observation is a trap-detector: it is seductive to admire the complexity of the machine you built and forget that the goal was to get across the river, not to live on the bridge.

---

## APPENDIX A — Attribution ledger

The register demands this be explicit. One project, several kinds of authorship:

- **Mine:** the research questions and their separation; the bias diagnosis and contrast-maximization rule; the insight-as-juxtaposition epistemology; the schema architecture (assembled — see below); the rubric weights and their rationale; the calibration program, the Degrees of Interpretive Depth scale, and the routing decision; the decision to abandon the clustering route and the hand-read method that replaced it; the situational-axes concept; the plagiarism catch and the anti-flattening corrections; the principle/counter-principle method and the cross-contributor synthesis; the scoping recommendations; all final editorial judgment.
- **The model's (used as parts, disclosed as such):** candidate industry lists (pruned by my rule); the substance of the module schema's middle block (proposed in a format I rejected, grafted into my structure); the personas-to-archetypes reframe (proposed by the model, accepted by me because the data supported it); volume production of first-pass extraction, tagging, and drafting throughout — always under the guardrails and audits described in Act 2.
- **The team's:** the design-principle candidate sets (Tim, Rebecca, John, Paul, Bill); interview participation by the four named executives; the D³/Intelligaia engagement structure.
- **Inherited/referenced:** the editorial illustration language of the cover and people-problem cards follows a collected reference moodboard (`sample-graphics/`); the illustration workflow should be attributed in published assets the same way everything else in this project is tagged. For a body of work whose thesis is provenance, this disclosure is cheap and on-brand; its absence would be the one exploitable inconsistency.

## APPENDIX B — Canonical numbers (use these, everywhere)

| Quantity | Canonical value | Note |
|---|---|---|
| Source papers | **237** | Published figure. The archive's traceback counts 238 PDFs + 52 AI deep-research docs; one canonical reconciliation sentence should be chosen and reused. Until then: "237 papers" (published layer) with deep-research docs mentioned as supplementary. |
| Insight modules | **992** | Published figure. Archive drafts float ~900/950; the mini case study's "880" is a *scale-target* for bulk passes, not the corpus size. Use 992. |
| Axis-scored subset | 259 modules (encoded 259×321) | The clustering-branch dataset; not the full corpus. |
| Situational axes | **6 defined, 4 operationalized** | Say it exactly this way. |
| Blind-test iterations | 8 | Peak: gpt-4.5, iteration 05, ~84% consistency at Intuitive depth. All percentages stay `~`. |
| Alignment gain | ~50% → ~65% (+15pp) | Derived from variation reduction (50%→35%), reconstructed from project records; not a controlled benchmark. |
| Score concentration | 100% → 57% | After prompt hardening of the 17-criterion rubric (the "everything scores 153" fix). |
| Alignment tests | 21 binary tests (7 × 3 RQs) | The routing instrument. |
| Axis-combination clusters | 4 (14/17/21/15 modules) | The archetype parents. |
| Numeric tension themes | 20 (codes 101–405) | Four families of five. |
| Archetypes | 7 → 6 → 5 → **4** | Hand-read candidates → consolidation → intermediates → final; Urgent Executioners = Risk Controller + Opportunistic Contender merged. |
| Matrix | 4 × 4 = **16 cells** | Each: tension, problem, evidence, success criteria; `[speculated]` where honest. |
| Principle pairs | **7** | Each with a plausibility-audited counter-principle. |
| Interviews | 4 named executives | Cityblock Health, Squarespace, Sanofi, Alkami Technology. |
| Deliverable | 6 docs, 16 cards, 45 slides + check-in | Plus the model-evaluation case study. |

## APPENDIX C — Figure map (narrative beat → existing asset)

| Beat | Asset |
|---|---|
| Corpus + industries | `assets/local-source/pipeline-process-01.png` |
| Module schema + real module (C4-I4) | `pipeline-process-02.png` |
| Strategy classification + worked example | `pipeline-process-03.png` |
| 21-test routing + worked example | `pipeline-process-04.png` |
| Interpretive-depth scale | `Degrees-of-interpretive-depth.png` |
| Consistency × depth 2×2 | `consistency-vs-interpretive-depth-chart.png` |
| Eight-iteration blind-test table | `consistency-vs-interpretive-depth-table.png` |
| Calibration write-up | `hbs-consistency-and-interpretive-depth-section.pdf`; `final-deliverable/model-evaluation-mini-case-study.docx` |
| Situational axes walk-through | `situational-axes.png` |
| Axis intersections → archetypes → roles | `triangulation.png` |
| Scoping approaches 1–4 | `theme-selection-01…04.png` |
| Principle/counter-principle cards | `design-principle-images-01…07.png` |
| People-problem illustration cards | `hbs-cover-01.png` / `published-derivatives/hbs-hero.png` |
| 16 matrix cells | `final-deliverable/Property 1=…, Property 2=….png` |

**Known asset fixes before anything publishes** (carried from the round-2 analysis): two published-derivative captions belong to another project (`hbs-pipeline-media.png`, `hbs-principles-trace.png`); emoji in the theme-selection matrix cells undercut the register; the illustration attribution note (Appendix A) should appear wherever the cards do.

---

*This document is the archive-faithful telling. Cut it down for any audience you like — but when a shorter asset and this document disagree, this document wins, and if this document and the archive disagree, the archive wins.*
