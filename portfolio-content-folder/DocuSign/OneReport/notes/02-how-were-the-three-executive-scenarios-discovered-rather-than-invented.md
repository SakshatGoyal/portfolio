# 2. How were the three executive scenarios discovered rather than invented?

**Category:** Missing information or evidence  
**Caliber markers:** Provenance, decisions, defensibility

**Question:** Who specifically contributed evidence for the three scenarios—reviewing performance before the day starts, retrieving a number during a meeting or call, and conducting deeper analysis when time permits—and what observations, interviews, calendar studies, or artifact reviews showed that these were the highest-value executive moments? Which scenario was most important, which was weakest, and what scenario did you deliberately leave out?

**Reason for investigation:** The scenarios are plausible and the illustrated chair, couch, and desk sequences communicate them clearly. But plausibility is not evidence. The source material says the team initially had little insight into executive metric use, and that testing was constrained because the data was sensitive. It never states how many executives or directors participated, their functions, how their workflows differed, or whether the scenarios came from observed behavior or the design team's intuition.

At Staff level, the concern is not whether the scenarios are reasonable; it is whether the designer can show how ambiguity was reduced without turning assumptions into facts. A public-product PM would ask whether the scenarios represent a meaningful job-to-be-done rather than a convenient information architecture. An enterprise leader would expect role differences—Finance, Sales, Product, and Marketing executives do not necessarily use the same data, cadence, or confidence threshold.

**Learning objective and decision relevance:** I want a research sample, method, specific evidence, contradictions between participants, and at least one scenario that changed or was rejected. Evidence that the designer revised the scenarios in response to directors would show triangulated judgment. If the answer relies mainly on “executives are busy and mobile,” the attractive scenario framing would read as product theater rather than grounded strategy.

## Answer

They were invented. The case study's polish can make them read as research outputs, and they weren't. Nobody observed an executive's day. The scenarios came from a framing question I forced on myself in the first week: at what points during the day does an executive take out their phone, and what is their mindset at each point? Sipping coffee before the day starts is a different cognitive state than sitting in a meeting needing one number, which is different again from evening couch time when there's finally slack to poke at something. I storyboarded candidate moments as rough frames — the chair, couch, and desk illustrations in the case are cleaned-up versions of those storyboards — and pressure-tested them in working sessions with Piyush and the director of product management, both of whom sat in rooms with executives weekly and could at least say "that rings true" or "that never happens."

The deliberate structure underneath was a mapping from mindset to interaction budget. Morning review: low interaction, high sequence — you read, you don't operate. Mid-meeting retrieval: near-zero interaction budget, time-to-number is everything. Deep-dive: the only moment with an exploration budget, and even then a thumb-scale one. That mapping is what later became Reports, AMA, and Analysis — the scenarios were load-bearing for the architecture, which is exactly why their provenance deserves scrutiny.

We deliberately left out a notification/alert moment — "something crossed a threshold, ping the CEO." It was arguably the most obviously mobile-native scenario of all, and both Piyush and I cut it early. My reason was governance: pushing revenue numbers into lock-screen notifications on personal devices was a security and definitional nightmare (who sets the threshold? who answers when the number is wrong?), and it would have made the sensitive-data conversation fatal on day one. The cost of that cut is real: we removed the one scenario where the product reaches out to the user, leaving three scenarios that all require the executive to remember the app exists.

The weakest of the three was the deep-analysis scenario. The proxy evidence for it was thinnest — directors themselves wanted to explore data, but nobody could confidently say their executives did. I kept it partly because the Sankey work gave the concept its distinctive spine. That was my thumb on the scale. The strongest was mid-meeting retrieval; every director we later tested with recognized it immediately from their own calls.

The scenarios did shift once under proxy feedback: my first storyboard had the morning scenario at a desk with coffee, and the director of product management flatly said executives at that hour are in cars, kitchens, and elevators — which pushed the design toward one-handed, glanceable cards rather than the tablet-ish layout I'd first sketched.

These were three plausible, internally consistent, director-endorsed speculations: useful as a hypothesis structure that made the concept testable, but not research findings.
