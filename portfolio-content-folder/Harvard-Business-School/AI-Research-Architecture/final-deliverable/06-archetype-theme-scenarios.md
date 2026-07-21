# Archetype-Theme Scenarios

This document contains the detailed scenario content for each archetype x theme combination (16 total). Each scenario includes a tension pair, a problem statement, success criteria, and numbered solution strategies drawn from the D^3 design research.

- [Back to Index](./00-index.md)
- [See Archetype Definitions](./01-defined-archetypes.md)
- [See Defining Scope](./02-defining-scope.md)

---

## Legacy Navigators

See [Defined Archetypes: Legacy Navigators](./01-defined-archetypes.md#legacy-navigators)

### Theme 1: Relational Fragility

**Tension:** Scale vs. Customization

**Leaders struggle to balance platform scalability with meaningful client customization, leading to underinvestment in architectures that enable both.**

Empirical data reveals that executives often perceive scalability and customization as mutually exclusive, creating false dichotomies that stall platform investment. In legacy-heavy industries such as banking, insurance, and enterprise SaaS, this tradeoff manifests as modular infrastructure delays that can cascade across service lines.

Despite clear evidence from Salesforce and Netflix that show if a platform is to consistently serve a diverse customer base, the architecture must be designed from inception to enable both scale and customization, not as a binary tradeoff but as a layered capability requiring continuous investment.

#### How might we know if we've solved this problem?

Imagine a scenario...

ServiceMaster requests to push its public-sector-contracts, banking on brand/platform network effects, while simultaneously customizing for enterprise healthcare clients who demand HIPAA-compliant module customization.

Rather than triggering a traditional escalation to leadership — "We can't do both" — what emerges is a structured playbook: Enterprise modules sit on shared infrastructure, but HIPAA-layered configurations are pre-approved for rapid deployment. The architecture team isn't debating scale vs. customization. They're debating sequencing.

What was once considered "edge cases" now feels normal. Leadership recognizes that this is not a one-time capital decision — it's an ongoing design capability that is reflected in their org's everyday language.

#### 1. Strategic plans include modular investment roadmaps, not either-or trade-offs. The team publishes internal guidance that defines "acceptable variance" — where customization is encouraged and where standardization is non-negotiable.

In quarterly reviews, "customization vs. Scalability/Platform" flags a requisite from a stage management committee. The decision architecture reflects the nuance.

In terms of Platform B (FinTech), high customization requests increasingly feel less "costly" because the infrastructure stabilizes around modular hooks. This doesn't eliminate tradeoffs, but the default assumption shifts from "we can't" to "here's how."

*"That'll already exist but be buried in the platform team. We just need to expose a config layer for this tier."*

Note: this applies to ServiceMaster and Platform B specifically. It reflects emerging architectural maturity, not org-wide transformation. The shift is localized but visible.

Some organizers prefer a "Scalability-First/Modularity Stack" type of strategy.

Recommendations include: product benchmarking, and observing if there's a shared financial literacy in the decision-making processes.

#### 2. Quarter-over-quarter, fewer escalations are required to resolve tension between high-value client requests and platform integrity — because shared resolution patterns now exist.

- A high-friction client ask rate has down 30%.
- "We never realized we already had 'pre-scalable' exceptions." were stopped by half.

"Platform to high intensity" use cases now carry a codified escalation trail:
→ First Tier: Product manages within pre-set modules.
→ Second Tier: Escalation to Architecture, with historical precedent attached.
→ Third Tier: Strategic platform decision, flagged for investment committee.

The friction didn't disappear, it just stopped being systemic.

#### 3. Time-to-onboard for complex enterprise clients decreases without increasing delivery variance.

Key indicators:

- Onboarding timelines drop from 6.5 months → 4 (45% improvement).
- Delivery variance across regions holds under 6% (down from 18%).
- Shared vocabulary: platform teams report using the same metaphors ("rails," "layers") across client onboarding calls.
- Shared onboarding accelerator that the Eng& teams highly rewarding to use.

*"She didn't even have to explain what a config rail was. The client's VP said, 'Oh, like a tier override, right?' That's not training — that's culture."*

*"The onboarding deck was the same. The SAME. For two vertically different accounts. And neither team noticed, because the platform just worked."*

Importantly, this platform hasn't solved customization in full. This is a directional shift. The key evidence is reduced variance, faster onboarding, and fewer escalation loops. Not perfection.

---

### Theme 2: Underestimated Complexity

**Tension:** Transformation vs. Legacy Systems

**Executives underestimate the behavioral drag of legacy systems, leading them to misjudge the scope, pace, and complexity of digital integration efforts.**

According to research, leaders operating in traditional institutions, particularly banking, face a strategic dilemma around modernization in data architecture.

Despite evidence showing that targeted transformation can yield up to 20% cost savings and 30% faster time-to-market, executives continue to assume that legacy infrastructures are too entrenched to modernize meaningfully.

This belief leads to overambitious timelines or half-measures that fail to deliver systemic agility.

**[speculated]**

#### How might we know if we've solved this problem?

Due to the contextual nature of digital transformations, its currently hard to define these criteria without further exploration.

---

### Theme 3: Emotional Barriers to Change

**Tension:** Emotional Resonance vs. Digital Innovation

**People designing customer experiences struggle to balance digital efficiency with emotional resonance, risking sterile interactions that erode brand loyalty and trust.**

Empirical evidence from the luxury retail and automotive industries shows that as organizations shift toward digital-first engagement models, longstanding assumptions favoring in-person, high-touch experiences are being challenged.

Some data shows that 73% of American consumers now begin their journeys online, demanding seamless digital ecosystems. Meanwhile, case studies (e.g., Burberry, Bottega Veneta) demonstrate that brands preserving both digital excellence and human connection outperform those relying solely on one.

However, companies overly fixated on efficiency metrics risk displacing away the emotional intimacy that once differentiated their brands, leading to weakened customer loyalty and diminished long-term brand equity.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine a scenario...

In 2025 Bottega (Barn clothes) is rethinking how customers design their homes, focusing on emotional resonance and digital innovation without compromising either approach.

#### 1. Pilot initiatives identify the core trade-offs between efficiency and emotional resonance at project kickoff and structure experiments to explore solutions that advance both dimensions simultaneously, rather than optimizing one at the expense of the other.

Pilot channels no longer focus solely on "completing the room" speed.

Instead:
- Can we accelerate customer purchase timelines while deepening their self-directed authoring over their home's evolution?
- Demo → home → intro include
- Time to first incremental purchase decreases
- Customer-rated "emotional milestone matches" ("We changed our mind about the nursery")
- Emotional continuity scores over 12 months (tracking customers' evolving language about their homes)

#### 2. Net-new customer-facing initiatives demonstrate simultaneous gains in both emotional engagement and operational efficiency, tied to pre-committed fusion design hypotheses.

Instead of choosing a poster cart or simple bundle suggestions, the employees explore a home evolution playmap: a system that develops alongside the customer over months rather than one-shots.

Indicators:
- Customers ask "Living Interiors?" instead of rigid style preferences
- ("We want our home to feel like a retreat by next summer," "We're evolving toward hosting")
- The system becomes a slow-moving relationship:
  - It recommends purchases not based purely on data, but based on life-stage-evolution timelines the customer set themselves.
- Pilot/new pathways criteria used for 18 months, rather than a single, frantic checkout sprint.
- Intelligent nudges outweigh email competitions ("Your guest room vase is waiting to fill!" — while surfacing next step options, without erasing choice or speed).

Outcomes:
- NF purchase-to-2nd purchase interval drops 53% (operational success — customers navigate faster.)
- Emotional ownership scores (measuring pride, authenticity, excitement) rise 42%.

---

### Theme 4: Technology and Human Tension

**Tension:** Predictive Analytics vs. Human Intuition

**Operators and decision-makers struggle to integrate digital tools with human judgment, leading to either rigid overreliance on automation or paralyzing mistrust of data-driven insights.**

Empirical studies in supply chain management show that organizations adopting AI and predictive analytics to enhance operational accuracy by up to 30% and inventory optimization by 15–20%.

However, case evidence also reveals critical failure points: over-dependency on automated models without real-time human adjudication results in decision errors and waste. At the same time, distrust of algorithmic recommendations — often rooted in lack of transparency or past system failures — leads operators to discard machine insights altogether.

Successful AI companies balance algorithmic precision with qualitative, frontline feedback, emphasizing that human oversight is essential, not optional, in a digitally-optimized operation.

#### How might we know if we've solved this problem?

Imagine a scenario...

In a mid-sized U.S. freight logistics firm, tension is beginning to show in a major procurement decision: AI-forward predictive tools want to reroute shipments based on historical weather disruption patterns, while veteran fleet operators insist on their read of local port conditions.

#### 1. Teams organically adapt small process checkpoints as a grassroots effort that invites predictive insights without rigid mandates.

Rather than relying on top-down enforcement, teams value the initiative to build lightweight "healthy checkpoints," i.e., go or no-go moments during their regular workflow routines.

Before the quarterly operations strategy meeting, the DVP's leadership team proactively adds a "Forecast and Feedback" checkpoint to weekly fleet operations reviews.

Headquarters don't mandate this; it develops organically, among senior operators and a newly embedded data analyst.

#### 2. When predictive offers are offered, leaders engage by asking clarifying questions and use well-built mental models or frameworks to systematically balance machine-driven and human-driven perspectives.

Instead of ignoring the analytics or blindly following its output, managers begin articulating why using models tools they have created, demonstrating that they have internalized from enough experience.

In the meeting the DVP reviews a predictive model suggesting a 22% risk of a coal increase for refrigerated shipments through Northern Brazil.

Rather than just accepting or silently overriding the model, the DVP runs the tool's risk through a mental model that accounts for:
- "What local conditions or network changes might not be reflected in this model?"
- "What would it take to validate this signal within 48 hours?"
- "Do the last two quarters suggest that this region's historical pattern is still reliable?"

The DVP adjusts the allocation — partially.

#### 3. Leaders report growing ease with challenging predictive insights respectfully, without feelings of uncertainty, defensiveness, or isolation.

Leaders feel psychologically safe and intellectually confident when they challenge forecasts or take data-guided exceptions, doing so as a neutral part in collaboration, not leaving like they are questioning the premise of the tool itself.

A VP at Supply Chain Operations shares in debrief:

"Data isn't threatening. Predictable isn't 'truth.' I believe the prediction as a mechanism but also that my intuition about Latin American routes has saved us twice this year."

Instead of defensiveness or deference to the model, the DVP exercises the challenge daily — the human exercise of critical thinking alongside AI-driven analysis and prediction.

---

## Urgent Executioners

See [Defined Archetypes: Urgent Executioners](./01-defined-archetypes.md#urgent-executioners)

### Theme 1: Relational Fragility

**Tension:** Short-Term Gains vs. Long-Term Capability

**To move faster and cut costs, executives increasingly default to external partnerships often at the expense of internal innovation. This short-term gain masks a deeper erosion of capability, confidence, and long-term strategic resilience.**

Empirical data shows 89% of banking executives prefer outsourcing to internal development. While partnerships offer speed, they often sideline internal teams, weakening core innovation capabilities over time.

Post-engagement reviews reveal gaps in tech literacy, decreased autonomy, and diminished investment in internal growth — signaling that external solutions are displacing, rather than reinforcing, organizational learning.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine a scenario -

After a cloud migration led by external consultants, engineering teams struggle to operate core systems confidently. Leadership keeps external partners in place, but restructures how decisions get made and what capability transfer looks like. The org stays fast — and gets smarter about what it keeps in-house.

#### 1. Build vs. buy tradeoffs are reframed as capability design decisions, not just financial ones.

Proposal docs now distinguish between short-term acceleration and long-term capability displacement.
In one example, a third-party load testing tool is approved, but only after the SRE lead tags which parts of the workflow the team will internalize within two quarters.

The CFO still tracks cost, but asks: "What are we planning to own next?"

#### 2. Innovation retros and reviews prioritize capability transfer, not just outcome metrics.

Every post-launch deck includes a new slide: What did we learn to do ourselves?

In the latest review, the onboarding team tags three areas they no longer need vendor input for. No applause, just signal that the dependency curve is bending down.

A central tracker lists all current vendors, and for each, the internal team defines the skill path to independence. Some stay long-term. Others are now seen as scaffolding.

---

### Theme 2: Underestimated Complexity

**Tension:** Speed vs. Constraints

**When pursuing innovation or growth, leaders often underestimate or inadequately plan for the systemic friction posed by external constraints, such as regulatory, safety, industry standards, or trust requirements, creating internal tensions from the urgency to move quickly and the need to build resilient, compliant strategies.**

When seeking innovation or growth, leaders often overlook the systemic friction created by external constraints such as regulatory, safety, or trust requirements, leading to internal conflicts between speed and resilience.

This issue is evident across industries. Netflix regularly adjusts its global strategy to navigate various international regulations like GDPR and censorship laws. Amazon Prime Air faces specific and stringent aviation regulations that closely control its innovation timelines, banks must continually update their systems to meet increasing demands for cybersecurity and data stewardship.

In every case, operational adaptability depends on proactive strategic investment — whether it involves dedicated compliance teams, technology that adheres to safety standards, or transparent governance practices — highlighting the critical yet often neglected impact of external pressures on innovation pathways.

**[speculated]**

#### How might we know if we've solved this problem?

Let's imagine a global payments company (like Plaid) is expanding into India, where the RBI mandates strict data localization. Initially, the team underestimates the enforcement risk, but updated modeling reveals a high friction area.

#### 1. Strategy decks illustrate decision-tree logic, where regulatory paths significantly impact resource allocation.

The Chief Strategy Officer (CSO) models two futures:

- Light enforcement: $900K infra tweaks, Q3 launch, +1 Legal FTE
- Strict enforcement: $4M infra investment, Q5 launch, +3 Legal FTEs

Different scenarios = different teams, spending, and timeline plans.

#### 2. Constraint modeling materially reshapes the budget or timeline before the contextual realities mandate it.

Given the anticipated strict scenario, the CSO team works proactively with the Chief Risk & Compliance Officer (CRCO) and the Chief Marketing Officer (CMO) to allocate $2M from marketing to the compliance infrastructure and to slow things in India, before any enforcement is required from their colleagues.

#### 3. A friction scenario alters not only the primary success metric but also the plan.

In this scenario, the Chief Product Officer (CPO) reframes their success measures from:

From: "Sweep to market."
To: "First compliant rollout with full audit traceability."

Launch changes from a nationwide blitz to a phased, feature-by-feature deployment.

#### 4. Decision velocity increases in high-regulation markets without a corresponding decrease in strategic complexity, indicating an improvement in constraint anticipation rather than a reduction in scope.

In retrospective meetings, we see Plaid having a smoother and faster critical as compared to competitive global payment systems.

---

### Theme 3: Emotional Barriers to Change

**Tension:** Strategic Narratives vs. Evolving Realities

**Leaders delay strategic recalibration because they remain anchored to early optimism, even when new evidence contradicts it.**

Firms initially viewed disruptions as temporary demand shocks in response to the COVID pandemic. Despite mounting evidence of prolonged supply constraints, many leaders maintained their optimistic assumptions, which postponed cost and operations adjustments.

This lag exacerbated downstream risks.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine a scenario.

Delta is still operating against optimistic recovery assumptions for business travel.

Actuals begin to diverge.

Leadership doesn't walk back strategy but they change how confidence is expressed and how alternatives are structured in parallel.

#### 1. Strategic priorities or OKRs start becoming shorter-horizon or conditionally framed.

Revenue growth targets are now written with embedded assumptions.

One reads:

"Achieve 10% YoY growth in premium bookings, if enterprise travel >70% of 2019 levels."

Planning templates change.

The standard goal format becomes: objective, metric, and dependency.

Finance and network planning teams are instructed to flag when confidence intervals narrow.

#### 2. Teams organically adapt small process checkpoints as a grassroots effort that invites predictive insights without rigid mandates.

As the main team builds a G1 route expansion plan, a smaller team in Strategy is given a counter-brief.

Label: "70% is the new 100."

Scope:
- Model if business travel holds flat
- Rework route economics
- Identify loyalty-margin thresholds

Work happens in parallel.

It's not a risk team. It's an options team.

---

### Theme 4: Technology and Human Tension

**Tension:** Deployment vs. Governance

**When organizations integrate powerful new technologies, people face a persistent tension between pursuing rapid, visible gains and establishing the less visible safeguards necessary to maintain trust, fairness, and long-term resilience. Often, this leads to underestimating the hidden costs of neglecting governance.**

Executives face pressure to deploy AI quickly for competitive advantage but risk overlooking essential governance frameworks. The tension between rapid deployment and responsible governance requires careful balance, with the potential consequences of ignoring governance often only becoming apparent during or after deployment.

A top investment company could rapidly modernize its own through AI, but only if operational risks are managed. Without robust due diligence oversight practices, AI-backed investment or fraud-detection decisions could backfire through regulatory issues or operational failures.

Financial institutions recognize that AI can enhance service quality, but it can also raise concerns around bias in fraud detection. Their actions speak with consumer-facing algorithms standing at the intersection of operational efficiency and trust—highlighting the high price of underinvesting in safeguards while pushing for speed.

Only 6% Finlder initiatives shown that practice protecting user/experience, supposedly 20 min operational time only reduces to half requirement (but half requiring customer support), demonstrating that strength in governance and stewardship directly impacts customer experience.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine a scenario...

A pharmaceutical company introduces an AI tool to expedite the identification of patients for a vaccine clinical trial.

Teams create and evolve safeguard methods embedded within fast delivery cycles, while system telemetry actively detects when risks exceed local containment, triggering escalation that:

- Are owned and decided upon by designated leadership groups within defined timeframes.
- Lead to visible, structural adjustments (e.g., scope, resourcing, timeline) in 3 of 5 escalated cases.
- Occur without penalty or suppression pressures on teams, as verified through confidential feedback or audit mechanisms.

The Clinical Operations team and Data Science team embed a near-real-time fairness monitor to detect any early bias in patient selection.

The Fairness flags as follows:

- If demographic flags are underrepresented, due to uneven hospital data feeds
- Local fixes aren't enough to correct this imbalance.

Automatic Escalation:

The system triggers an automatic escalation to the Clinical Governance Board with a 10-day decision window.

Instead of slowing the trial, leadership decides to adjust one trial site distribution dynamically.

- Accelerate the development of additional unit hospitals by establishing stronger data-sharing agreements.
- Slightly decrease enrollment targets regionally without stopping the overall trial timeline.

They also move to background improvements for the next trial phase, but Phase 1 proceeds on schedule, with fairness metrics transparently monitored.

Feedback indicators that the teams felt safe in raising the flag early, and leadership publicly credits the team's escalation with making the program smarter, faster, and more resilient.

Result:

The trial launched on time with stronger equity safeguards and a reproducible model for dynamic course correction, rather than static delay.

---

## Coordinated Builders

See [Defined Archetypes: Coordinated Builders](./01-defined-archetypes.md#coordinated-builders)

### Theme 1: Relational Fragility

**Tension:** Operational Independence vs. Strategic Partnerships

**Leaders in startups and growth-stage companies wrestle with a fear of losing control when entering partnerships, often letting autonomy bias override practical growth needs, stunting system-wide collaboration.**

Research suggests that startup and growth-stage companies often resist partnerships when engaging in external collaborations — sometimes at the cost of systemic growth.

The data shows that this resistance stems not from strategic rationale but from emotional biases rooted in autonomy, identity, and fear of dependency. These findings are consistent with behavioral research on loss aversion, status quo bias, and the endowment effect — all of which contribute to leaders who are, as the study characterizes, "more afraid of losing autonomy than excited by growth."

#### How might we know if we've solved this problem?

This assumes we are observing a partnership lifecycle of still rare in the fastest-growing SRE platform — where partnerships have historically been avoided, abandoned, or undervalued.

But what we might notice is something qualitatively different: not that partnerships "work now," but that the emotional and structural barriers to forming, sustaining, and evaluating them have become part of the company's operating vocabulary.

The key observational shifts are not just about partnership health. They are about the relational and interpretive changes within the company itself, among its leaders and operators.

#### 1. Executives shift from binary "build vs. buy" language to a partnership lifecycle framework.

Previously: "we don't need them."
Now: "where are we in lifecycle with them?"

a. a former "never again" vendor is re-evaluated for season 3.
b. Pitch / board decks now include "partnership health" alongside pipeline growth.
c. The CEO describes partnerships as "developmental vs. permanent" — not just "in vs. out."
d. Ops lead builds a basic partnership intake form, using the FrameWork categories.

A recent M&A conversation pivots from control-seeking to "can this accelerate where we can't build in 12 months?"

#### 2. In post-mortems, missed partnerships are described as strategic gaps ("we lacked external leverage"), not moral failures ("we shouldn't have trusted the partner").

In the annual strategy review, the CEO articulates the failure of a prior integration without shame or blame:

"We dissolved our partnership with [Firm], not because they failed us — but because we weren't structurally ready. We had no lifecycle governance. No shared metrics. We treated it like a vendor relationship when it needed to be a co-development one."

Board reaction: "Noted."

The investor debrief reveals: "They didn't make a failed partner. They made a governance mistake, and they named it." This is new.

Instead, the revised Risk Analysis includes: "We forfeited commercial leverage that would have accelerated Series C by 6 months."

The discussion doesn't "get emotional." It gets structural.

#### 3. Leaders can clearly articulate the cost of choosing autonomy, naming what capacity, speed, or learning they chose to forgo.

In a product offsite, the VP of Engineering states:

"We chose not to co-develop the data bus with [Firm]. That decision cost us 5 months of team capacity and two missed integrations."

"The decision, we thought, was preserving our core. But strategically, autonomy cost us strategic reach and deepened technical debt we're still managing."

It's not blame. It's accounting.

The CEO adds: "I still believe it was the right decision — for our identity at the time. But that's the trade."

---

### Theme 2: Underestimated Complexity

**Tension:** Internal Identity vs. Aggressive Growth

**Founders prioritize aggressive market expansion before solidifying internal identity, leading to diluted positioning and underperformance.**

Research highlights that while many startup leaders articulate bold visions for rapid market growth, qualitative data reveals a lack of internal strategic clarity and brand identity. This disconnect contributes to slower-than-expected traction and weak differentiation.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine a scenario.

By mid-2025, Ramp is everywhere, and nowhere. In a single year, it launches vertical initiatives across procurement, travel, and HR insights, each with its own GTM story, brand tone, and internal champion.

But instead of accelerating growth, sales cycles stretch and pipeline quality declines.

#### 1. Internal docs start reflecting a vocabulary of self-awareness, not just ambition.

At the Q2 strategy offsite, a product strategy doc opens with an unexpected sentence:

"There's tension between our procurement play and our original promise — simplicity and visibility. This might be a wrong-side of the curve bet."

In a marketing brief for a new HR analytics tool, someone has scribbled in the margin:

"Does this feel like core operational enablement, or are we cosplaying as a startup that sells dashboards?"

Phrases like:
- "Early tension between platform reach and brand promise."
- "That's off, too noisy for us."
- "Out of scope for who we're becoming."

start to show up not just in Slack threads, but in exec reviews and board memos.

The ambition hasn't died. But now, it's in conversation with taste.

#### 2. Early-stage hiring decisions prioritize narrative and cultural alignment over raw pedigree.

At a hiring debrief for a senior GTM leader, the CRO shares this:

"She ran growth for three hyper-scale tools — great logos, serious velocity. But her storytelling leaned aggressive. I'm not sure it fits how we want to scale."

The team pauses.

Two weeks later, a less flashy candidate, former head of partnerships at a FinTech known for quiet but deep integration, gets the nod.

Why? As one founder puts it,

"He leads with usefulness. That's the energy we're trying to scale."

The hiring bar hasn't lowered. It's shifted from prestige to resonance.

---

### Theme 3: Emotional Barriers to Change

**Tension:** Proven Models vs. Disruptive Pricing

**Executives face emotional and reputational pushback when proposing pricing strategies that challenge prevailing norms, making it harder to pursue customer acquisition moves that trade short-term brand purity for long-term relationship value.**

Research shows a Bassicnov network (late-adopting Ed.Co as an example) is adapted to growth and innovation constraints within traditional publishing models.

The literature also identifies challenges in shifting from perceived-value models towards more value-aligned approaches, specifically when organizational culture, brand equity, and internal beliefs resist disruptive pricing strategies.

#### How might we know if we've solved this problem?

Chamelion AI & Espen act as premium alternatives for remote/cross type-specified Ed companies to a strong established competitor incumbent.

Born in an effort to challenge that product, the company started by front-loading free products, prioritized user-led growth, and incrementally proved what enterprise users would pay for.

The more pedagogically literate product, but generalist in C-level. A pure-play tool vs. a productivity suite.

#### 1. Executives frame pricing moves in terms of lifetime value archetypes — not just near-term conversion — and use those archetypes to justify decisions internally.

At a pricing strategy offsite, the new Chief Growth Officer reshapes the existing quarterly pricing approach.

The team historically mapped pricing to conversion funnels and margin floors. Now, they additionally map to three "use relationship archetypes":
- Explorer: tries, tests, leaves quickly. Acquiring them cheaply matters.
- Adopter: sticks around once trust forms, but only after prolonged use. Retention investment matters more.
- Evolver: life-long users, but only after a long-enough interaction to feel it's "Their world."
- "Tie everybody in." = Monetization plan that segments not just by behavior, but emotional stage.

The company's pricing tests are restructured along archetype-based engagement segments — and the VP of Finance signs off with measurable hypotheses, not just qualitative energy.

#### 2. More pricing experiments originate outside traditional revenue or marketing roles, signaling organization-wide permission to rethink value capture.

An engineer at the office, sensing a new idea suggests:

- The Product Design team proposes a "Memories Lab" feature for free users — a single view showing the learners' journey of progress.
- No upselling. No nudges.
- An engineer prototypes a freemium to "self-reflection journal" triggered after every fourth learning session.
- The CS team, without prompting, proposes a beta test where churned users are offered "story exports" — a personalized emotional package of everything they created.

All proposals are rooted in an internal Strategy:

"We're not selling a product; it's an internal belief."

*"I'm seeing pricing creativity accumulate. It'll fit & be taking this kind of discussion to the half of everyone."*

#### 3. Post-launch assessments of pricing experiments encompass qualitative reflections on customer trust and perception, in addition to unit economics.

After a challenger product launches at $18/month with curated framing/heavy branding:

A new review format:
- MRR change: +12%
- Churn delta by segment
- "Does this feel like we've cheapened our story?" is now an actual review question
- Customer verbatims are sorted by the sense of "Respectful," "Exciting," or "Gimmicky"

In a post-mortem debrief, one product leader says it out loud: "We priced it right, but the rollout story didn't match our voice. It felt transactional. People were confused."

The pricing board acknowledges in records: The price fit but the feel of this didn't.

---

### Theme 4: Technology and Human Tension

**Tension:** Craftsmanship vs. Brand Perception

**Executives are torn between their deep-rooted belief in product craftsmanship and the market's growing preference for intangible brand image, creating internal misalignment on what quality means, and how to prioritize it, at scale.**

Research from executive interviews reveals the tension between legacy notions of product quality — rooted in craftsmanship, materials, and technical excellence — and evolving consumer preferences that increasingly value brand narrative, emotional image, and aesthetic consistency.

The challenge forces organizations to reconcile internal definitions of value with external market signals that demand a more holistic conception of quality.

**[speculated]**

#### How might we know if we've solved this problem?

There has not been enough knowledge or more specifically, access to such scenarios, and to build creative and confident indicators / outcomes, it would be worthwhile to research and interview leaders operating at the intersection of craftsmanship-brand quality tension, observing:

#### 1. Executives shift from saying "quality or scalability" to "what quality means in this context" — and that framing appears in how they scope bets, not just how they label them.

In one Quality Scorecard:
- Before: "Quality = reliability, materials, longevity"
- After: "Quality at Tier 1 (Heritage) = tactile, durable, generational fit. Quality at Tier 2 (Growth) = design consistency, emotional alignment, aspirational scalability."

The reframing isn't abandoning craftsmanship. It's acknowledging it as one layer in a multi-dimensional value proposition.

#### 2. Teams experiment with expressions of quality under different constraints, and post-mortems reflect learning, not blame.

A proposed collaboration with a streetwear label initially divides the leadership team:
- Traditionalists argue it dilutes craftsmanship heritage.
- Growth advocates argue it opens new markets and signals cultural fluency.

In the post-mortem from the product collaboration:
- "Did we stretch too far?"
  - "No — but we underestimated how our core buyers would interpret the collab."
  - "The product held. The narrative didn't."

Leadership logs it as: "Brand-quality misalignment, not product failure."

#### 3. Cross-functional teams utilize a shared language to articulate different expressions of quality, and leadership accepts this tension as productive, rather than problematic.

The Head of Material & Quality Research and the VP of Brand Strategy co-facilitate a cross-functional working session.

Their shared observation: from eBay receiving data is eBay observing what defines value proposition.

A senior creative director says, "Our job isn't to define 'best' once. It's to express 'best' convincingly across three different audiences — without contradicting ourselves."

Two-tier QA model: quality model (materials, durability, fit) + quality narrative model (packaging, imagery, tone, brand memory):

- "Our felt-branded quality model (materials) doesn't change."
- "But the quality perception model should flex per audience."
- "The issue isn't dropping standards. It's learning to express them differently."

---

## Principled Orchestrators

See [Defined Archetypes: Principled Orchestrators](./01-defined-archetypes.md#principled-orchestrators)

### Theme 1: Relational Fragility

**Tension:** Psychological Safety vs. Hierarchical Dynamics

**In low-psychological-safety environments, teams self-censor dissent — leaving executives blind to early-stage risks that only surface after damage is done.**

In traditional structures, team members rarely speak up until dissent is unmissable, not from a lack of insight but as a conditioned response to perceived hierarchy. Risk doesn't flow upward — it accumulates until it's visible as failure.

Research, including Google's Project Aristotle, confirms that psychological safety surrogate intelligence or executives in predicting team success. Without it, teams maintain surface-level agreements while underlying risks stay unaddressed.

#### How might we know if we've solved this problem?

I think a Global Consumer Goods business could be a strong enough illustrative case to craft a meaningful speculative scenario.

Today they still have, to put it diplomatically, a "consensus culture." They've been through multiple acquisitions. And some of their brand teams are functionally siloed — aligned on surface metrics but misaligned on strategic priorities.

The shift from consensus-driven to "safe dissent" took time. (Think about 3 years.) The company didn't overhaul its culture overnight.

Instead, they introduced incremental changes, prompted initially by a failed product launch in Southeast Asia — where internal warnings about brand positioning mismatch were raised by local teams but not escalated.

#### 1. The organization differentiates between "quiet alignment" and "silence" and actively investigates the latter.

At the next Global Creative Forum, the CMO opens not with accolades but with a challenge:

"Our best indicators are silence. That isn't alignment. I need everyone in this room to tell me what's off."

Key global markets with data pushbacks from a regional channel tracker could not be passed for 45 days.

During that time, regional leads are prompted with structured questions:
- "What's one thing about this brief you wouldn't say in a group setting?"
- A regional VP (of the LA?/Mexico region) submits:

"The fragrance positioning will not work in Mexico. The naming convention reads as gendered in a way that's been declining. They are testing it as if it's still 2019."

#### 2. Teams are equipped with structured dissent mechanisms, and those mechanisms trigger escalation, not insulation.

The following quarter, L'Oreal introduces a new layer to its global critical process: Creative Challenge Windows.

Each regional team is required to fill in a one-page document before product localization proceeds:

- What would make this product fail in your market?
- What are we assuming about this consumer that may not hold?
- If this product fails, what would you point to first?

Key signals it's not a form exercise:

- If any region submits a yellow or red flag, it triggers a live escalation: not a quiet memo.

During the next Fragrance sub-segment reporting cycle, the Middle East team flags a concern in the Mood & Scent category:

- They produce data that indicates that the social-perception profile has shifted.

The structured path didn't prevent dissent, it made it consequential.

#### 3. Dissenting views are tested, not smoothed over, through deliberate red-teaming, pre-mortems, or dissent pairings.

A follow-up initiative launches during the next creative briefing cycle — a deliberate pairing exercise:

Cross-Brand Red Teams.

One lead defends while another critiques the campaign for Latin America.

During testing, the West African team highlights shifts in the demographics:

"We're seeing a shift in under-30 beauty preferences toward culturally-rooted brands. Our current positioning — global, aspirational — isn't landing with this cohort."

The launch doesn't halt altogether. Rather, it enters selective testing in 3 West African markets. The campaign is recalibrated for local resonance.

A senior brand executive observes:

"The launch would've performed OK on paper. But the red team surfaced a risk we couldn't have seen from Paris."

---

### Theme 2: Underestimated Complexity

**Tension:** Intuitive Decisions vs. Structured Dynamics

**Executives face tension between maintaining structured, analytical decision-making processes and cultivating intuitive, adaptive judgment, often creating decision environments that unintentionally stifle agility, learning, and human development.**

Executives struggle to strike a balance between analysis and judgment, often creating environments that hinder agility.

Strategic decisions treated as static events oversimplify complex realities and lead to weak outcomes. High-stakes choices face analysis paralysis and consensus bottlenecks, while organizational politics and silos expose weak decision frameworks.

Corporate cultures that dismiss intuition undervalue vital leadership skills, such as experience and emotional intelligence. Rigidly analytical environments ultimately constrain both exploratory thinking and leadership growth.

**[speculated]**

#### How might we know if we've solved this problem?

At the moment, its difficult to picture success measures that could potentially scale across work environments and industries.

---

### Theme 3: Emotional Barriers to Change

**Tension:** Cognitive Flexibility vs. Cognitive Inertia

**Executives unintentionally suppress both experimentation and timely reassessment of assumptions by reinforcing risk-averse norms, weakening their adaptive capacity and leaving organizations vulnerable to missed opportunities and delayed responses to change.**

Empirical insights reveal that many executive environments default to rigid analytics and penalize failure, making it more challenging to experiment safely or take small, exploratory bets.

Research also shows that leaders often exhibit confirmation bias, relying on long-held cognitive frames that once brought success but are now misaligned with fast-changing conditions.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine that DocuSign's VP of Product Strategy is leading the annual planning cycle amid rising concern that the company's traditional envelope-based pricing model is losing margin and becoming outdated in the eyes of its customers.

#### 1. Senior stakeholders challenge legacy narratives and document how (or why not) those narrative challenges materially alter strategic prioritization, risk assumptions, or investment bets.

During the initial planning meetings, the VP of Product Strategy explores a critical question:

"Are we clinging to envelope counts because customers truly demand it, or because we fear destabilizing what feels familiar?"

This is a real challenge at DocuSign, as publicly noted by content creators, as customers often take advantage of the fact that DocuSign does not penalize them for exceeding their usage. Rather than leaving it as a philosophical musing, they document impacts:

- They allocate a budget for research on customer pricing sensitivity.
- They elevate "customer perceived value" metrics in pricing success criteria.
- They reframe pricing risks in terms of failing to adapt, not just failing to retain customers.

This structural discipline forces the narrative challenge to drive fundamental shifts in prioritization and assumptions, not just dialogue.

#### 2. Executives create space for controlled contrarian trials where non-obvious moves are explicitly exempted from conventional KPIs at initiation, and where results, regardless of success, are formally reviewed for integration into core strategic decisions.

Building on this narrative reframe, the Chief Product Officer and VP of Pricing Strategy green-light a pilot for Value Assurance Pricing.

- Customers are charged based on the total contract value managed, not the number of envelopes used.
- The pilot's success is not judged solely by traditional key performance indicators (KPIs), such as short-term revenue growth.
- Learning goals, such as "customer acceptance of value-based tiers" and "elasticity thresholds," are prioritized.
- Regardless of the pilot's commercial outcome, its findings are formally reviewed in the following quarterly business review for potential core model integration.

This protects experimental divergence, without demanding early political consensus or artificially safe metrics.

---

### Theme 4: Technology and Human Tension

**Tension:** Ethical Integrity vs. AI-Driven Efficiency

**Executives fear that rapid AI adoption erodes leadership values like empathy and ethical judgment, yet face pressure to prioritize efficiency over principle.**

Research from executive interviews highlight the tension between efficiency gains from generative AI and the degradation of human leadership capacities such as emotional intelligence and ethical reasoning.

This isn't just theoretical; leaders explicitly express concern that over-reliance on AI risks weakening the very skills that build long-term trust and relational leadership.

**[speculated]**

#### How might we know if we've solved this problem?

Imagine a scenario.

Headspace integrates GenAI into its coaching platform to meet growing B2B demand across HR wellness programs. The rollout is smooth and technically successful. AI assists with session prep, resource suggestions, and content consistency.

But something quieter emerges: client teams report lower satisfaction, and coaches disengage. The issue isn't performance, it's presence.

Leadership recognizes that real success means designing AI not just for scale, but for relational trust at scale.

#### 1. Teams use explicit decision structures for AI use cases that include both efficiency goals and relational or reputational risks.

As GenAI expands across the coaching workflow, Headspace codifies a Dual-Impact Criteria into all feature planning. Every AI-driven enhancement must show:

- Efficiency ROI (e.g., reduced prep-time, faster content deployment).
- Relational Integrity (e.g., coach autonomy preserved, rapport-building unaffected).

Instead of slowing progress, this framing shapes faster alignment.

Teams now know how to scope features that win operationally and relationally.

#### 2. The conversation shifts from "Will AI replace humans here?" to "Where is human judgment essential — and how do we amplify it through AI?"

In a leadership review, the Chief Product Officer reframes the roadmap:

"This isn't automation, it's augmentation. The question isn't if AI fits. It's where humans add the most differentiated value."

This shifts investment toward features like:
- Real-time mood-mirroring: AI surfaces emotional cues from past sessions to help coaches tailor tone.
- Session briefings: AI gives context, not content — freeing coaches to focus on presence, not prep.

Coaching satisfaction scores stabilize, enterprise renewal rates increase, and session velocity holds steady, without sacrificing brand ethos.
