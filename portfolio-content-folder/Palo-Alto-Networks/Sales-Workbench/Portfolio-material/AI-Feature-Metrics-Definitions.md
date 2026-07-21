# AI Feature Metrics: Definitions and Reference Targets

This note defines the metrics used to evaluate **Anchored Follow-Ups** and **Trace** in the Sales Workbench.

## Basic units

- **Session:** One continuous sitting in which an account executive or account-team member uses the AI tool.
- **Step:** One question-and-answer or click-and-answer interaction within a session.
- **One-and-done session:** A session containing only one step.
- **Multi-turn session / arc:** A session in which the user continues through two or more related, object-anchored steps.

## Types of continuation

- **Follow-up:** The user goes deeper into an object already visible in the answer. Example: after seeing a sales play, the user selects it and asks which contacts are relevant.
- **Expansion:** The user branches from a visible object into a related but new subject. Example: after reviewing an opportunity, the user selects its platform and asks for relevant sales plays.

Both follow-ups and expansions extend the analytical chain and count toward arc growth.

## Primary metrics

### Arc rate

**Definition:** Percentage of sessions containing two or more related, object-anchored steps.

```text
Arc rate = sessions with 2+ object-anchored steps ÷ all eligible sessions
```

This measures how often a one-step interaction becomes a connected analytical chain. It is the primary adoption metric for Anchored Follow-Ups.

### Arc depth

**Definition:** Average number of steps among sessions that became arcs. One-and-done sessions are excluded.

```text
Arc depth = total steps in all arcs ÷ number of arcs
```

This measures how far users continue after beginning a multi-turn chain. A depth of 3.0 could represent a sequence such as opportunity → sales play → relevant contacts.

Arc depth is measured in **steps**, not percentage points. It must be interpreted alongside resolution and abandonment: a longer chain may indicate useful exploration or unresolved wandering.

### Snapshot rate

**Definition:** Percentage of eligible sessions ending in a snapshot or export to Slack.

```text
Snapshot rate = sessions ending in a Slack export ÷ all eligible sessions
```

This is a practical adoption signal for Trace: users found the result sufficiently useful and defensible to carry into another team's workflow. It does not by itself prove that the recipient trusted or acted on the snapshot.

### Abandonment rate

**Definition:** Percentage of all eligible sessions containing at least three steps but ending without a resolution.

```text
Abandonment rate = unresolved sessions with 3+ steps ÷ all eligible sessions
```

This is the principal guardrail. It should not increase as arc rate or arc depth increases.

### Questions per session

**Definition:** Average number of questions or interaction steps across all sessions, including one-and-done sessions.

```text
Questions per session = total questions or steps ÷ all sessions
```

This is a broad engagement measure. It is less diagnostic than arc rate because it does not confirm that consecutive questions concern the same object or analytical chain.

## Pre-launch reference assumptions and proposed targets

These are user-supplied planning references drawn from general enterprise conversational-system knowledge. They are **not validated PANW baselines** and should be replaced after approximately two weeks of internal telemetry.

| Metric | Pre-launch reference | Proposed indication that the feature is working |
|---|---:|---:|
| Questions per session | 1.2–1.4 | Establish from PANW telemetry |
| Arc or multi-turn rate | 11%–15% | 25% or higher |
| Arc depth | 2.0–2.1 steps | 3.0 steps or higher |
| Snapshot rate | 5%–8% | 15% or higher |
| Abandonment rate | No supplied baseline | Must not rise with arc rate or depth |

The portfolio case study reports an **arc rate of 23%** and **arc depth of 4.3 steps**. Against the references above, that implies:

- Arc rate: 8–12 percentage points above the reference range, but 2 points below the proposed 25% target.
- Arc depth: 2.2–2.3 steps above the reference range and above the 3.0-step target.

These engagement results should not be treated as operational value without the sample size, observation period, feature exposure, abandonment, verified-resolution time, and downstream-action data.
