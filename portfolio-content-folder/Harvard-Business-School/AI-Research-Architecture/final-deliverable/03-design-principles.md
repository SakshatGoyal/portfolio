# Design Principles for AI

> [Back to Index](./00-index.md) | [Defined Archetypes](./01-defined-archetypes.md) | [Insights from User Interviews](./04-user-interview-insights.md)

---

## Our approach to design principles

Too often, design principles fall into the trap of **sounding good without actually being useful.**

When principles read like truisms

"AI should be trustworthy," "prioritize the user," "support human judgment"

they're hard to disagree with, but even harder to design from. That's why we took a different approach.

Instead of treating principles as declarations of truth, **we treated them as reasoned tradeoffs**. We wrote each principle so that its opposite is also plausible -- something a smart, thoughtful team might believe, in a different context, or with different goals. This forces us to confront the nuance behind real design choices. It pushes us past default thinking and asks: What are we really optimizing for? And why?

**What this approach looks like:**

- Each principle takes a clear stance with a credible counterpoint.
- The principle and its opposite both hold water -- but imply different values, priorities, or assumptions.
- The goal isn't to win a debate, but to clarify the lens through which we're designing.

---

## Principle 01: Conclusion-First vs. Reasoning-First

### The Tradeoff

| Conclusion-First | vs. | Reasoning-First |
|---|---|---|
| AI should lead with a clear, strategic takeaway, and let the user drill down into reasoning, caveats, or inputs if desired. | | AI should first walk the user through the data, pattern recognition, and trade-offs -- letting the human derive the strategic conclusion. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**Conclusion-First AI Response:**
> Given your brand's demographic overlap with beauty (especially in the 25-34 segment), and the 32% gross margin lift seen by DTC peers like Glossier post-expansion, beauty offers a more defensible adjacency than home goods.
>
> Recommend prioritizing beauty pilots with limited SKU depth, and testing co-branding through influencers.

**Reasoning-First AI Response:**
> There are two primary expansion paths among DTC apparel brands: home goods and beauty. Beauty offers higher margins and marketing synergies, but is also more crowded and operationally distinct. Home goods tends to scale slower but reinforces lifestyle branding.
>
> Which dimensions matter most to you -- margin, logistics, or brand fit?

### Insight

When internal signals are absent, ambiguity isn't a failure, it's the landscape. Strategic executives are used to navigating fuzziness, but they need help seeing where and why certainty breaks down. Yet in some contexts (e.g., board alignment, crisis comms), surfacing ambiguity can undermine confidence.

**This is a tension between narrative clarity and transparent terrain-mapping.**

Conclusion-first compresses complexity into action. Reasoning-first opens space for interpretation and shared sensemaking. The right posture depends on what the moment demands - alignment, or exploration.

---

## Principle 02: Explicit Uncertainty vs. Inferential Uncertainty

### The Tradeoff

| Explicit Uncertainty | vs. | Inferential Uncertainty |
|---|---|---|
| AI should clearly express uncertainty, confidence intervals, or knowledge gaps. | | Let uncertainty be sensed through hedging, conflicting evidence, or vagueness -- as humans often do when interpreting others. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**Explicit Uncertainty AI Response:**
> I'm moderately confident about this...
>
> Available industry data supports beauty as a stronger adjacency, based on DTC brand transitions and margin trends.
>
> However, outcome variance is high -- especially in supply chain and regulatory complexity. Recommend time-boxed pilots to validate consumer alignment before deeper investment.

**Inferential Uncertainty AI Response:**
> Some DTC brands have successfully expanded into beauty, citing strong audience overlap and favorable margins.
>
> Others have struggled with differentiation and operational complexity. Home goods tends to grow slower, but can deepen brand presence across channels.
>
> Expansion paths remain context-sensitive.

### Insight

When AI speaks in clean lines, we assume it knows more than it does. But ambiguity in strategy isn't always about lack of data, sometimes it's about irreducible complexity.

This principle is about calibrating how that complexity shows up.
- Explicit uncertainty builds trust through transparency, showing where the limits are.
- Inferential uncertainty feels more naturalistic, mirroring how human advisors hedge -- and inviting interpretation.

**This is a tension between rational trust calibration and intuitive ambiguity sensing.**

Executives toggling between analysis and instinct may prefer one mode over the other depending on the stakes, the audience, or the style of decision-making culture they're in.

---

## Principle 03: Decision-Anchored vs. Domain-Anchored

### The Tradeoff

| Decision-Anchored | vs. | Domain-Anchored |
|---|---|---|
| Shape all outputs to align with the specific choice the exec is facing -- not just topical expertise. | | Provide domain-rich context (trends, frameworks, risks), and let the exec map this knowledge to their decision. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**Decision-Anchored AI Response:**
> If your goal is near-term revenue growth and influencer-aligned positioning, beauty tends to outperform home goods among DTC brands with millennial female segments.
>
> But if logistics simplicity and brand extension are priorities, home goods offers lower operational complexity and tighter SKU control.

**Domain-Anchored AI Response:**
> In the DTC landscape, beauty and home goods represent two dominant expansion verticals.
>
> Beauty brings higher margins but also more competitive noise and regulatory hurdles. Home goods often reflects brand identity and values -- think Parachute or Brooklinen -- and supports durable bundling strategies.
>
> Both are adjacent, but with different scaling patterns.

### Insight

In fast-moving strategic moments, what matters isn't just what's happening out there, it's how that landscape gets bent around your fork in the road.

- The decision-anchored style forces alignment: it narrows fuzzy market signals into a judgment scaffolding.
- The domain-anchored style preserves expansion: it contextualizes, but leaves the framing of the question open.

**This is a tension between action-ready decision guidance and exploratory strategic immersion.**

The former is ideal when the decision is already scoped. The latter is powerful when the decision is still being shaped.

---

## Principle 04: On-Demand Structure vs. Structure-First

### The Tradeoff

| On-Demand Structure | vs. | Structure-First |
|---|---|---|
| Don't preemptively constrain thinking with frameworks. Surface them only when a lack of structure is impeding clarity. | | Default to structure -- frameworks give users handles early, even if they adjust them later. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**On-Demand Structure AI Response:**
> Is this expansion primarily about margin improvement, brand depth, or audience growth? Each vertical offers different leverage.
>
> Once we clarify your goal, I can suggest a structure to compare options.

**Structure-First AI Response:**
> Let's frame this with a vertical expansion lens: Strategic Adjacency, Operational Complexity, Consumer Synergy, and Margin Potential.
>
> I can populate each dimension for beauty and home goods based on current DTC benchmarks.

### Insight

Structure isn't neutral -- it's a lens that includes some things and filters others. In ambiguity, framing too soon can flatten insight, but framing too late can paralyze motion.

- On-demand structure honors emergent discovery, waiting until the user signals a need for scaffolding.
- Structure-first invites early alignment, letting frameworks channel thinking even in the absence of full data.

This is a tension between **exploratory fluidity and cognitive anchoring.**

Great strategists often oscillate between the two, knowing when to invite structure, and when to defer it, and AI should be fluent in both rhythms.

---

## Principle 05: Second Lens vs. Solution Mode

### The Tradeoff

| Second Lens | vs. | Solution Mode |
|---|---|---|
| Use the AI to broaden perspective, challenge assumptions, and offer alternative lenses on the problem. | | Focus the AI on solving the problem as stated -- don't widen the aperture unless asked. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**Second Lens AI Response:**
> Beauty and home goods are common adjacencies -- but have you considered wellness or experiences?
>
> Brands like Aesop and Outdoor Voices explored sensorial and lifestyle immersion rather than pure product expansion.
>
> This might be worth exploring based on your community engagement metrics.

**Solution Mode AI Response:**
> Beauty and home goods are the two most common DTC expansion paths.
>
> Beauty offers higher margins and faster trend velocity, while home goods supports bundling and loyalty.
>
> I can map success rates and risks for each -- which would you like to start with?

### Insight

Sometimes the value of AI is not in answering the question -- it's in reframing it.

- Second-lens mode injects strategic imagination, surfacing what's not being asked, but maybe should be.
- Solution mode respects the executive's framing, and focuses on executional velocity.

**This is a tension between frame disruption and frame precision.**

The former is better when the user is still exploring what to even want. The latter is sharper when they already know where they want to go, they just need the terrain mapped.

---

## Principle 06: Deliberative vs. Synthesis

### The Tradeoff

| Deliberative | vs. | Synthesis |
|---|---|---|
| Represent multiple viewpoints -- even those in tension -- to help execs see the contours of debate. | | Aim for clear synthesis -- align diverse inputs into one, compelling recommendation. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**Deliberative AI Response:**
> Some DTC brands pursue beauty for its high-margin potential and cultural cachet. Others caution against saturation and regulatory friction.
>
> Home goods, while slower to scale, is seen as deepening brand resonance and operational simplicity.
>
> Which strategic value resonates more with your growth model?

**Synthesis AI Response:**
> Beauty offers stronger margin upside and faster brand momentum in DTC markets.
>
> While home goods has lifestyle synergy, its slower revenue ramp and lower basket expansion rate make it a secondary priority.
>
> Recommend testing beauty with narrow SKU focus first.

### Insight

Sometimes leadership needs a mirror of the debate, not a pre-written verdict.

- Deliberative AI reveals the contours of the argument, helping execs practice scenario-thinking and internal dialectics.
- Synthesis AI builds narrative velocity, guiding decisions by aligning trade-offs into a path forward.

**This is a tension between cognitive expansion and cognitive convergence.**

The deliberative mode slows you down to see complexity. The synthesis mode speeds you up to act with confidence. Knowing when to switch between them is what makes great strategy conversational, not just computational.

---

## Principle 07: Self-Reflective vs. External-Facing

### The Tradeoff

| Self-Reflective | vs. | External-Facing |
|---|---|---|
| Build prompts that surface the executive's own values, assumptions, and long-term intent. | | Focus outward -- market data, competitors, benchmarks. Only reflect inward when specifically asked. |

### Example Scenario

**CEO of a mid-sized clothing brand:**
> We're a mid-size DTC clothing startup -- should we explore verticals like home goods or beauty this year?

**Self-Reflective AI Response:**
> Is this expansion about strengthening your core community, maximizing revenue velocity, or evolving brand identity?
>
> Your intent may shape whether beauty's cultural cachet or home's lifestyle depth is more aligned.
>
> I can map each path once we clarify your north star.

**External-Facing AI Response:**
> Beauty has seen a 28% YoY growth among DTC brands targeting Gen Z and Millennial audiences.
>
> Home goods, while slower to scale, shows stronger LTV in subscription bundles.
>
> I can benchmark market entrants and trendlines for each.

### Insight

Markets don't make decisions, people do. And what guides them often isn't just data, but desire.

- Self-reflective AI invites foundational clarity, helping leaders anchor strategy in purpose.
- External-facing AI prioritizes signal detection, keeping attention on what the world is doing -- and what works.

**This is a tension between values-first alignment and data-first adaptation.**

The former is essential when the stakes are identity-shaping. The latter is vital when agility and responsiveness matter most.
