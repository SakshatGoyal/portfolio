# 4. What alternatives were seriously considered before deciding on Reports, AMA, and Analysis?

**Category:** The work appears not to have gone far enough  
**Caliber markers:** Contested decisions, problem altitude, defensibility

**Question:** What competing product architectures were considered—for example, alerts plus drill-down, personalized digests, a responsive version of the existing BI layer, an analyst-assisted concierge, a meeting-mode search tool, or a single universal surface—and why did the three-surface model of Reports, AMA, and Analysis win? What tradeoff did that decision knowingly accept?

**Reason for investigation:** The case says the scenarios “helped us shift” to three surfaces, but it does not expose the alternatives or the decision criteria. Each surface is individually understandable, yet I am not convinced that three separate modes reduce executive cognitive load. Reports, natural-language retrieval, and exploratory flow analysis may overlap, and a low-frequency user may not know which surface to enter for a given question.

At Staff level, an evaluator needs a choice a competent peer could disagree with. The current story presents the architecture as inevitable. A public-product PM would ask about discoverability, repeat use, and the cost of maintaining three paradigms. An enterprise leader would ask whether every surface relied on the same semantic and permissions layer or quietly created three governance problems.

**Learning objective and decision relevance:** I want to see the option set, evaluation criteria, evidence from prototype tests, and the downside that the team consciously accepted. A clear explanation of why one combined interface failed, or why each mode mapped to a distinct time horizon and confidence need, would demonstrate mature product judgment. Without that, the three-surface architecture reads as a tidy storytelling device rather than a defensible product decision.

## Answer

The alternatives existed as conversations, not designs. Nothing else got past a whiteboard. Over roughly two weeks of working sessions — mostly me, Piyush, and the director of product management, once with the engineering lead — four other shapes came up, each killed verbally.

First: a responsive web layer over the existing BI stack. Cheapest by far, and the engineering lead's instinctive opening bid. Killed on the argument that became the project's central lesson — it's a mobile version of the desktop, and the desktop was the thing executives already weren't using. Shrinking a cluttered dashboard doesn't change whose day it fits into.

Second: a scheduled digest — a daily briefing email or notification card. This was the strongest alternative. It matches the morning scenario perfectly, requires almost no new interaction model, and is push rather than pull. We killed it for two reasons: it collapses under the mid-meeting retrieval scenario (a digest can't answer an arbitrary question during a call), and distribution of sensitive numbers through email/notification channels raised the same governance problem that killed the alerts scenario. The cost we accepted: we gave up the one delivery mechanism that doesn't depend on the executive remembering to open an app.

Third: an analyst-concierge model — a staffed channel where an executive asks and a human answers with a chart. Piyush pointed out this already informally existed; that's what his team was. The concept felt like formalizing a workaround rather than removing it, and it doesn't scale past a handful of askers. But it planted the seed AMA grew from: the interaction we were replacing was "ask a person a short question," which is why AMA's grammar is terse phrases, not analysis.

Fourth: one universal surface — a single search-first screen where everything is a query. Elegant on the whiteboard, and closest to how I'd design it today in an LLM era. Killed because the three scenarios have incompatible interaction budgets: morning reading wants sequence and no typing; mid-meeting wants typing and no browsing; deep-dive wants direct manipulation. One surface forces one entry behavior on three mindsets.

So the three-surface decision was really the scenario mapping asserting itself: each surface is one mindset with one interaction budget. The tradeoff we knowingly accepted is the one this question names — three paradigms in one app, and a low-frequency user must know where a question lives. Does "how's churn" start in Reports, AMA, or Analysis? All three can answer it differently. In testing, one director did exactly this — asked AMA a question that Reports answered better — and we papered over it with the "Find out more in these reports" cross-links under AMA answers rather than solving it structurally.

No alternative was prototyped, no evaluation matrix was scored, and the decision criteria lived in three people's heads and a whiteboard photo. I'd call the architecture defensible and the decision process thin — conversational conviction, tested only after the fact through director sessions on the chosen design, never comparatively.
