const navItems = document.querySelectorAll(".nav-item");
const sectionNavItems = document.querySelectorAll(".panel-nav .nav-item");
const siteNav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const sidePanel = document.querySelector(".side-panel");
const navScrim = document.querySelector(".nav-scrim");
const selectedWorkStage = document.querySelector("#selected-work");
const aboutStage = document.querySelector("#about");
const caseStudyStage = document.querySelector("#case-study");
const lightbox = document.querySelector(".lightbox");
const lightboxViewport = document.querySelector(".lightbox-viewport");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
let lastOpenedMedia = null;
let caseRevealObserver = null;
let caseMotionCleanup = null;
let currentRouteHash = null;
let routeTransitionTimer = null;
let isRouteTransitioning = false;
let pendingRouteHash = null;
let pendingNavItem = null;
let lightboxCloseTimer = null;
let isLightboxZoomed = false;
let aboutMotionTimer = null;
let isInitialRouteRender = true;

const drawerMedia = window.matchMedia("(max-width: 1024px)");
const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
const routeHashes = new Set([
  "#selected-work",
  "#about",
  "#case/palo-alto-networks",
  "#case/docusign-global-data-analytics",
  "#case/harvard-business-school",
  "#case/docusign-onereport",
]);

const caseStudies = {
  "palo-alto-networks": {
    variant: "panw-ai",
    title: "Designing AI experiences for deep analysis and traceability.",
    meta: [
      ["Stakeholder", "Palo Alto Networks"],
      ["Skills", "AI-assisted front-end development\nInteraction Design\nPrototyping"],
      ["Year", "2025-26"],
      ["Role", "UX Design Lead"],
    ],
    introCards: [
      [
        { text: "Anchored Follow-Ups", weight: "bold" },
        { text: " help users converge on findings while avoiding the drift of long AI-generated narratives." },
      ],
      [
        { text: "Trace", weight: "bold" },
        { text: " reimagines “sources” for internal tools, while reducing the cost of verification for a user." },
      ],
      "As part of leading the design for the sales workbench, I shaped the user experience for our platform from problem setting to front-end build.",
    ],
    context: {
      title: "Context",
      body: "Sales Workbench was designed as a tool to consolidate a wide range of tools into a single platform for account teams to manage their Opportunities, Accounts, Telemetry, and other sales activities.\nAlong with consolidation, the leadership wanted to incorporate an AI chatbot as a step towards AI transition.",
    },
    sections: [
      {
        blocks: [
          {
            type: "placeholder",
            id: "hero",
            label: "Hero AI interaction container",
            ratio: "1032 / 579",
            tone: "dark",
            inner: "square",
            size: "hero",
            mediaType: "video",
            src: "panw-uploads/scenario-03-square.webm",
          },
          {
            type: "introGrid",
            id: "intro",
          },
          {
            type: "mediaContext",
            id: "context",
            media: {
              label: "Sales Workbench interface",
              ratio: "16 / 9",
              size: "context",
              src: "panw-uploads/panw-image-01.png",
            },
            context: "context",
          },
          {
            type: "problem",
            id: "problem",
            eyebrow: "Problem",
            lead: "With the push to add AI experiences to platforms, there was a disconnect between AI’s narrative exchanges and the structured, tactile interaction our users knew.",
            points: [
              "Leadership wanted to introduce an AI chatbot, but users were indifferent; they see structured UIs as their bread and butter for analysis and deep-dives.",
              "The effort to verify a false response continued to outweigh the benefits of AI.",
            ],
          },
          {
            type: "placeholder",
            id: "abstract",
            label: "Abstract flow exploration",
            ratio: "856 / 481",
            size: "center-wide",
            src: "panw-uploads/pane-caricature-00.jpg",
          },
          {
            type: "copy",
            id: "approach",
            compact: true,
            body: [
              [
                { text: "Approach:", weight: "bold" },
              ],
              "Amid the push, it became critical to identify and classify tasks that could be accomplished by AI, and ones that should not be AI-fied.",
            ],
          },
          {
            type: "mediaTextGrid",
            id: "research",
            media: [
              { label: "Research interview and synthesis", ratio: "590.544 / 328", src: "assets/panw-figma/research-synthesis.png" },
              { label: "Workshop and team discussion", ratio: "592 / 332", src: "panw-uploads/panw-caricature-01.jpg" },
              { label: "Account-team feedback", ratio: "416 / 371", src: "assets/panw-figma/account-team-feedback.png" },
            ],
            text: [
              "Speaking with Account teams across Americas, EMEA, and APJC, I found different teams having mixed opinions on the introduction of AI into their workflow.",
              "Consistent themes included:",
            ],
            listType: "ol",
            list: [
              "AI is always pitched for insights, but information workers need depth",
              "It is hard to maintain focus along long chat threads.",
              "Product teams consistently try to automate parts of the work that require human judgement at every step.",
            ],
          },
          {
            type: "copy",
            id: "structured",
            body: [
              "Working through abstract unknowns became a bigger focus than one-off insights and reporting tasks.",
              "While AI was good at synthesizing information from multiple sources, identifying patterns and converging towards a finding required structured, tactile UI elements.",
            ],
          },
          {
            type: "mediaTextGrid",
            id: "prototype",
            flip: true,
            media: [
              { label: "Prototype architecture", ratio: "2990 / 1690", mediaType: "video", src: "panw-uploads/selected-cropped-webm/webm/codex shim 03.webm" },
            ],
            textTitle: "Prototyping and Technical Hurdles",
            text: [
              "Given limited engineering resources, introducing UI snippets into chat responses appeared as a burden for V1. To build confidence, I began researching generative UI.",
              [
                { text: "I built a prototype that used " },
                { text: "CopilotKit", tone: "link" },
                { text: " to connect chat prompts to the user’s current UI context, then sends that context through a " },
                { text: "Codex shim", weight: "bold" },
                { text: " that chooses an approved React component and returns structured data for it." },
              ],
              "With a prototype in place, the engineering team was able to build a more scalable solution with a forked CopilotKit repo.",
            ],
          },
          {
            type: "placeholder",
            id: "anchored-prototype",
            label: "Anchored response prototype",
            ratio: "1034 / 504",
            inner: "square",
            size: "wide-band",
            tone: "dark",
            mediaType: "video",
            src: "panw-uploads/selected-cropped-webm/webm/Anchored Responses snippet 01.webm",
          },
          {
            type: "copy",
            id: "verification-copy",
            body: [
              [
                { text: "The Verification Issue:", weight: "bold" },
              ],
              "As data sources are continually updated, it became essential for users to understand how each response was derived. Exposing a model’s thinking did not help; even smarter models tend to “meander” towards a finding.",
              [
                { text: "The challenge wasn’t transparency, but " },
                { text: "the effort spent on verification.", weight: "bold" },
              ],
              "Rather than refining a model’s thought process visibility, I explored a conclusion-derivation response approach. The system responds with an answer and produces a concise scannable evidence/decision trail.",
            ],
          },
          {
            type: "placeholder",
            id: "trace",
            label: "Trace derivation response",
            ratio: "856 / 488",
            size: "center-wide",
            src: "assets/panw-figma/trace-derivation.png",
          },
          {
            type: "placeholderPair",
            id: "verification-pair",
            items: [
              { label: "Verification sketch", ratio: "504 / 416", src: "assets/panw-figma/verification-sketch.png" },
              { label: "Verification component", ratio: "504 / 416", inner: "portrait", src: "assets/panw-figma/verification-component.png" },
            ],
          },
          {
            type: "placeholder",
            id: "trace-final",
            label: "Trace final interaction",
            ratio: "1032 / 504",
            inner: "square",
            tone: "dark",
            size: "wide-band",
            mediaType: "video",
            src: "panw-uploads/selected-cropped-webm/webm/Trace Snippet.webm",
          },
          {
            type: "impact",
            id: "impact",
            eyebrow: "Impact:",
            narratives: [
              {
                title: "Anchored Follow-Ups:",
                body: [
                  "Reference rows anchored to prompts allowed us to measure continuity in a thread without having to access user messages. We found our additions leading to engagement numbers over twice that of industry standard.",
                  "The spike in usage also gave our team the push needed to speed up data engineering activities to make more data sources available to the AI.",
                ],
              },
              {
                title: "Trace:",
                body: [
                  "Trace resulted in a feature request for users to take a snapshot of the response along with its trace to drop into slack, salesforce notes, and email threads.",
                  "A typical response included a terse conclusion, a structured data table, which combined with a clear step by step derivation made for a complete set needed to begin grounded discussions with peers.",
                ],
              },
            ],
            metrics: [
              { label: "Arc Rate", value: "23%", delta: "+ 12pts", detail: "over industry standard" },
              { label: "Arc Depth", value: "4.3", delta: "+ 12pts", detail: "over industry standard" },
              { label: "Snapshot Rate" },
            ],
          },
          {
            type: "placeholder",
            id: "final",
            label: "AI interaction prompt-entry field / trace-use entrance",
            ratio: "2992 / 1632",
            size: "wide-band",
            src: "assets/panw-figma/final-trace.png",
          },
          {
            type: "takeaway",
            id: "takeaway",
            eyebrow: "Takeaway:",
            body: [
              [{ text: "Progress begins somewhere between blind acceptance and complete dismissal.", weight: "bold" }],
              "It was certainly uncomfortable being yet another team trying to add a chatbot with tiny chips that simulate “thinking” and treat citations as checkboxes. But acknowledging discomfort while taking action led to some of the more unique experiences in the application, with a lasting impact.",
              [{ text: "The question was never “how do we add a chatbot?” but rather “what assumptions do we carry about the chatbot experience that will fail our users?”", weight: "bold" }],
            ],
          },
        ],
      },
    ],
  },
  "docusign-global-data-analytics": {
    title: "Global Data Analytics is a team within DocuSign that builds data analytic tools for every division at the organization.",
    hero: {
      src: "assets/figma-nodes/gda-hero.png",
      alt: "DocuSign Global Data Analytics case study hero",
    },
    intro: [
      "I initiated research to explore how internal dashboards could evolve from reporting metrics to helping teams act on them, resulting in two internal tools.",
      [
        { text: "Feature Usage Baseline ", tone: "primary" },
        { text: "leading to value driven sales. " },
      ],
      [
        { text: "Book of Business ", tone: "primary" },
        { text: "resulting in teams spending less time recognizing patterns among accounts. " },
      ],
    ],
    emphasizedIntro: [0],
    meta: [
      ["Stakeholder", "DocuSign"],
      ["Skills", "Product Discovery\nHypothesis-Driven Design\nUser Experience"],
      ["Year", "2023-24"],
    ],
    sections: [
      {
        title: "Designing Feature Usage Baseline",
        blocks: [
          {
            type: "copy",
            body: [
              "The feature usage dashboard began as one of two different ways to interpret a single hypothesis:",
              "“Rather than understanding performance metrics of a customer QoQ or WoW in isolation, we must understand them relative to a fine-tuned cohort of similar customers.”",
              [
                { text: "While testing contrasting interpretations of this hypothesis with users, I found a deeper issue. " },
                { text: "To identify which features matched a customer's needs, account owners often conducted extensive research or depended on discussions with colleagues.", tone: "primary" },
              ],
              [
                { text: "When I looked at the available schemas in Alation, I saw that the required data was already being collected; it just needed someone to connect the dots.", tone: "primary" },
              ],
            ],
          },
          {
            type: "media",
            variant: "medium",
            media: [
              { src: "assets/figma-nodes/gda-feature-comparison-media.png", alt: "Feature Usage Baseline comparison criteria media from the Figma case study frame" },
            ],
          },
          {
            type: "copy",
            body: [
              [
                { text: "I designed a tool that leveraged these overlooked internal data points, such as “use-case” and “sub-industry” and cross-referenced them with feature success measures.", tone: "primary" },
              ],
              "For each feature, the dashboard shows a key success measure for the customer compared to the median, along with the range for similar customers who had purchased that feature.",
              "To find “similar” customers, the tool, by default, selects a cohort of customers that match the selected Salesforce account attributes. The user can still fine-tune the cohort.",
              [
                { text: "While tool was designed to make discovery easier, users said they included snapshots from the tool in their slide decks, resulting in more evidence-based, value-driven sales. Customers were also more willing to pay for features and upgrade their plans when they saw how their peers worked with DocuSign.", tone: "primary" },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-680-328",
                items: [
                  {
                    src: "assets/figma-elements/gda-feature-controls.png",
                    alt: "Controls for a user finding similar customers",
                    caption: "Controls for a user finding ‘similar’ customers.",
                  },
                  {
                    src: "assets/figma-elements/gda-feature-grouping-small.png",
                    alt: "Feature grouping interface",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/gda-feature-grouping-full-a.png",
                    alt: "Feature grouping dashboard",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/gda-feature-grouping-full-b.png",
                    alt: "Feature grouping dashboard variant",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Designing Book of Business.",
        blocks: [
          {
            type: "copy",
            body: [
              [
                { text: "While many metrics were available for internal teams, ", tone: "primary" },
                { text: "Account Owners had to update internal documents with their BDRs twice a week to organize the data, prioritize customers, and spot anomalies.", tone: "primary" },
                { text: " This process was especially time-consuming for Mid-Market to Virtual Account Execs, who managed between 200 and 3,000 customers." },
              ],
            ],
          },
          {
            type: "media",
            variant: "text",
            media: [
              { src: "assets/figma-nodes/gda-book-illustration-media.png", alt: "Book of Business illustration from the Figma case study frame" },
            ],
          },
          {
            type: "copy",
            body: [
              "My initial takeaway after speaking with Account Executives was: each AE had a unique approach based on their vertical, customer count, and region. While it remained true, synthesizing the information through different iterations helped me create a 6-bucket model (with every customer in an AE’s book uniquely fitting in only one bucket). ",
              "I started by designing workflows to identify these six customer types. This was later simplified into a set of filters that acted as a custom control center, helping to spot patterns among customers.",
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-328-680",
                items: [
                  {
                    src: "assets/figma-elements/gda-bob-patterns-small.png",
                    alt: "Pattern drawing for account executives",
                    caption: "Inductively drawing patterns on how AEs narrow down on customers.",
                  },
                  {
                    src: "assets/figma-elements/gda-bob-ae-model.png",
                    alt: "Model for how account executives sort customers",
                    caption: "Model for how AEs sort all customers.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/gda-bob-grouping-a.png",
                    alt: "Book of Business grouping interface",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/gda-bob-grouping-b.png",
                    alt: "Book of Business grouping interface variant",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "",
        blocks: [
          {
            type: "copy",
            body: [
              [
                { text: "While the tool saved 4–6 hours per AE and per BDR per week, the real benefit was that teams could iterate faster on their own customer segmentation approach.", tone: "primary" },
              ],
              "For example, an AE would have a fixed threshold of $1000 MRR to separate high- and low-MRR accounts, but building this tool allowed them to iterate on their notion of high and low MRR accounts.",
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/gda-book-outcome-image.png",
                    alt: "Book of Business outcome interface",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Takeaway:",
        blocks: [
          {
            type: "statement",
            compact: true,
            body: [
              "Lesson #1: Discomfort is signal before it moves to strategy.",
            ],
          },
          {
            type: "copy",
            compact: true,
            body: [
              "The roadmap was not a feature request. It was:",
            ],
          },
          {
            type: "statement",
            compact: true,
            body: [
              "Discomfort → Curiosity → Research → Hypothesis → Design → Test → Validate → Build.",
            ],
          },
          {
            type: "copy",
            compact: true,
            body: [
              "My design work spanned sales, marketing, finance, product, and operations. At that scale, dashboard work can drift toward serving metrics rather than supporting decisions. The signal was discomfort: a sense that more data points existed, but judgment had not become easier.",
              "I saw that discomfort as a sign to improve the product, instead of letting it turn into frustration.",
            ],
          },
          {
            type: "statement",
            compact: true,
            body: [
              "Lesson #2: Range beats rigid expertise.",
            ],
          },
          {
            type: "copy",
            body: [
              "This project involved research, synthesis, design, data analysis, storytelling, and delivery.",
              "The fast pace meant there was little time for formalities. I talked to users, found patterns, formed opinions, tested options, refined the system, shaped the story, and pushed the work toward launch.",
              [
                { text: "The key was staying flexible without losing good judgment, and not getting stuck on following the process perfectly.", tone: "primary" },
              ],
            ],
          },
        ],
      },
    ],
  },
  "harvard-business-school": {
    title: "HBS AI Institute is a global research center that provides research-driven insights on using AI to advance business and society. ",
    hero: {
      src: "assets/figma-nodes/hbs-hero.png",
      alt: "Harvard Business School research architecture cover",
    },
    intro: [
      "The AI team at Harvard Business School set out to create personas for users who would use AI to support strategic thinking, not just production tasks. To address this, ",
      "I designed an AI-driven sense-making system to identify strategic problems faced by industry leaders, along with Human-AI interaction trade-offs specific to strategic thinking rather than content generation.",
    ],
    emphasizedIntro: [1],
    meta: [
      ["Stakeholder", "HBS AI Institute (Previously D^3 Institute)"],
      ["Skills", "TBD\nTBD\nTBD"],
      ["Year", "2025"],
    ],
    sections: [
      {
        title: "Structuring the abstract scope.",
        blocks: [
          {
            type: "copy",
            body: [
              [
                { text: "The terms “executives” and “strategy” were too broad to treat as one user group or use case.", tone: "primary" },
              ],
              "To make the field researchable, I distilled the research into 3 fundamental questions while simultaneously breaking down “strategy” into 6 classifications by combining academic literature and industry contexts.",
              [
                { text: "Instead of starting with predefined archetypes, I focused on identifying the problems people face and the types of people who show up in those situations or solve those problems.", tone: "primary" },
              ],
              "This choice helped us avoid bias and the limits of my own experience, but it meant the research had to be much larger. To prepare, I used well-known reasoning models at the time: GPT 4o, GPT 4.5, and GPT o3.",
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-680-328",
                items: [
                  {
                    src: "assets/figma-elements/hbs-pipeline-stack.png",
                    alt: "AI research pipeline modules and classification process",
                  },
                  {
                    type: "caption",
                    caption: "A user pulling context into their chat, and identifying potential sales plays.",
                  },
                ],
              },
              {
                layout: "layout-680-328",
                items: [
                  {
                    src: "assets/figma-elements/hbs-pipeline-data-collection.png",
                    alt: "Pipeline data collection row",
                  },
                  {
                    type: "caption",
                    caption: "Reasoning models gave reliable answers but missed hidden meanings. Creativity models could go beyond basic understanding, but they weren’t consistent in applying logic across different sets.\n\nPrompt engineering brought everything together. It helped me use the creative and strengths of GPT 4.5 to gain the steady reliability of o3. I kept the same goal but tried several versions of the AI pipeline.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Triangulating",
        body: [
          "The clusters were still too big to give useful insights, so we tried breaking them down by industry. But this risked turning industries into stereotypes, since even within a single industry, activities can vary widely. (Marketing within Pharmaceuticals, Legal Operations within a Late Night Show)",
          [
            { text: "To address this, I created a novel framework for mapping activities — Situational Axes.", tone: "primary" },
          ],
          [
            { text: "Situational axes map each activity along shared scales like regulation, modularity, timing, value horizon, knowledge transfer, and market spread. This quickly gave us better ways to compare and contrast, helping our team narrow the focus by seeing the extremes and deciding what not to explore further.", tone: "primary" },
          ],
        ],
        blocks: [
          {
            type: "copy",
            body: [
              "The clusters were still too big to give useful insights, so we tried breaking them down by industry. But this risked turning industries into stereotypes, since even within a single industry, activities can vary widely. (Marketing within Pharmaceuticals, Legal Operations within a Late Night Show)",
              [
                { text: "To address this, I created a novel framework for mapping activities — Situational Axes.", tone: "primary" },
              ],
              [
                { text: "Situational axes map each activity along shared scales like regulation, modularity, timing, value horizon, knowledge transfer, and market spread. This quickly gave us better ways to compare and contrast, helping our team narrow the focus by seeing the extremes and deciding what not to explore further.", tone: "primary" },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/hbs-triangulation-tagging.png",
                    alt: "Tagging modules based on situations influencing activities",
                    caption: "Tagging each module based on the situations influencing the activity.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/hbs-triangulation-map-a.png",
                    alt: "Triangulating activities map",
                    caption: "Triangulating ",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/hbs-triangulation-map-b.png",
                    alt: "Triangulating activities map variant",
                    caption: "Triangulating ",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Determining principles for Human-AI interaction.",
        body: [
          "Design principles often sound good but aren’t actually useful. When they become truisms like “AI should be trustworthy,” “prioritize the user,” or “support human judgment,” they’re easy to agree with but hard to use in real design work.",
          "Having many modules in Research Question 3 let us dig deeper and find hidden meanings. This helped me develop a way to frame principles as thoughtful trade-offs, grounded in context rather than as absolute truths.",
          [
            { text: "I wrote each principle so its opposite could also make sense; something a smart team might choose in another situation or with different goals.", tone: "primary" },
          ],
          [
            { text: "This allowed us to test different scenarios and contexts, helping us fine-tune the voice of an AI system designed specifically for executives.", tone: "primary" },
          ],
        ],
        blocks: [
          {
            type: "copy",
            body: [
              "Design principles often sound good but aren’t actually useful. When they become truisms like “AI should be trustworthy,” “prioritize the user,” or “support human judgment,” they’re easy to agree with but hard to use in real design work.",
              "Having many modules in Research Question 3 let us dig deeper and find hidden meanings. This helped me develop a way to frame principles as thoughtful trade-offs, grounded in context rather than as absolute truths.",
              [
                { text: "I wrote each principle so its opposite could also make sense; something a smart team might choose in another situation or with different goals.", tone: "primary" },
              ],
              [
                { text: "This allowed us to test different scenarios and contexts, helping us fine-tune the voice of an AI system designed specifically for executives.", tone: "primary" },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/hbs-principles-trace.png",
                    alt: "Human-AI interaction principles trace",
                    caption: [
                      { text: "Trace", weight: "bold" },
                      { text: ", outlining steps taken to derive a conclusion, Sources, and when they were last updated. " },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Takeaway:",
        blocks: [
          {
            type: "copy",
            compact: true,
            body: [
              "This was, hands down, the hardest project of my life. Not only was the space too ambiguous and broad, but it also involved",
            ],
            list: [
              "critically evaluating large blocks of texts,",
              "…spanning a wide range of industries,",
              "…in subject matters that was not my expertise,",
              "….written by a system I knew was more knowledgeable than I was,",
              "…in a language that is deliberately designed to sound like an expert.",
            ],
          },
          {
            type: "copy",
            body: [
              [
                { text: "The biggest challenge was reading well crafted, plausible responses, but constantly wondering if the response was productive or ‘plausibly’ productive.", tone: "primary" },
              ],
            ],
          },
          {
            type: "statement",
            compact: true,
            body: [
              "Lesson #1: If we see AI as a very smart output machine, one surprising way to keep up is to continuously move backward.",
            ],
          },
          {
            type: "copy",
            body: [
              "For example, if you just ask for an insight, you’ll only get highlights. An AI system might even have its own idea of what ‘insight’ means.",
              "To get an AI to produce something ‘insightful’ within the space means defining what is, and more importantly, what isn’t an insight. It means going back to basics and understanding what makes a sentence insightful, how an insight is pulled from an ocean of data.",
              "Spotting a theme isn’t the same as figuring it out from scratch. Understanding what someone says isn’t the same as finding hidden meanings in their words.",
              [
                { text: "It’s important to know how AI works to use it well, but it might be even more important to keep learning about the fields we think we already know.", tone: "primary" },
              ],
            ],
          },
          {
            type: "statement",
            compact: true,
            body: [
              "Lesson #2: When you scale up using AI, human-centered discovery can quickly turn into managing a pipeline.",
            ],
          },
          {
            type: "copy",
            body: [
              [
                { text: "I realized this when an engineer said, " },
                { text: "“You’ve built a pipeline! Maybe you should try running it with Gemini and Claude to see how it works differently.”", tone: "primary" },
              ],
              "But acknowledging this can help us avoid a trap. Otherwise, we might end up admiring the complexity of what we built, instead of remembering that our real goal was to get across, not get stuck in the process.",
            ],
          },
        ],
      },
    ],
  },
  "docusign-onereport": {
    title: "OneReport was designed as a way for DocuSign’s leadership to access  data on mobile.",
    hero: {
      src: "assets/figma-nodes/onereport-hero.png",
      alt: "DocuSign OneReport report experience",
    },
    intro: [
      "After a large-scale migration of the internal dashboards I'd designed for the product, finance, marketing, sales, and executive teams, the Director of Data & Analytics asked me to explore how the same data could be made available to VP and C-level leaders on mobile devices.",
      "I set the brief, product requirements, interaction model, and mobile designs. The concept was presented to the C-suite and used to evaluate cost and feasibility.",
    ],
    emphasizedIntro: [1],
    meta: [
      ["Stakeholder", "DocuSign"],
      ["Skills", "TBD\nTBD\nTBD"],
      ["Year", "2023"],
    ],
    sections: [
      {
        title: "Deciding what to build.",
        blocks: [
          {
            type: "copy",
            body: [
              "This was not just a mobile version of the internal tool. It was to be designed as a custom, easy way for a select group to access sensitive data. We also had little insight into how DocuSign executives used company metrics.",
              "To start, I outlined three executive scenarios: reviewing business performance before the day starts, quickly checking data during a meeting, and conducting deeper analysis when time permits.",
              [
                { text: "This approach helped us shift from asking if dashboards could be mobile to defining three main surfaces:", tone: "primary" },
              ],
              [
                { text: "Reports, Analysis, and AMA (Ask Me Anything,", tone: "primary" },
                { text: " inspired by reddit ;)" },
                { text: ")", tone: "primary" },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-three",
                items: [
                  {
                    type: "stack",
                    items: [
                      { src: "assets/figma-elements/onereport-scenario-couch.png", alt: "Executive reviewing reports before the day starts" },
                      { src: "assets/figma-elements/onereport-scenario-report-phone.png", alt: "OneReport reports mobile screen" },
                    ],
                  },
                  {
                    type: "stack",
                    items: [
                      { src: "assets/figma-elements/onereport-scenario-desk.png", alt: "Executive searching during a work session" },
                      { src: "assets/figma-elements/onereport-scenario-ama-phone.png", alt: "OneReport AMA mobile screen" },
                    ],
                  },
                  {
                    type: "stack",
                    items: [
                      { src: "assets/figma-elements/onereport-scenario-chair.png", alt: "Executive reviewing flow analysis on mobile" },
                      { src: "assets/figma-elements/onereport-scenario-flow-phone.png", alt: "OneReport analysis mobile screen" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Designing ‘Analysis’",
        blocks: [
          {
            type: "copy",
            body: [
              [
                { text: "After reviewing dashboards from every department, I saw that " },
                { text: "each unit could appear as a metric, a dimension, or a filter, depending on which team used it.", tone: "primary" },
              ],
              [
                { text: "The challenge was to create a single analytical layer in which the same unit could appear in all three forms.", tone: "primary" },
              ],
              "To solve this, I designed analytics using a Sankey flow. This allowed users to follow a selected metric through business lenses like Partners, Region, Product, Channel, and Customers. 'Focus' and 'Filters' let users pick from the same dataset (and subsets) as the business lenses.",
              "As more Directors shared their priorities, the framework scaled easily. This meant one surface could support deep dives for every business area.",
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-medium",
                items: [
                  {
                    src: "assets/figma-elements/onereport-analysis-columns.png",
                    alt: "OneReport analysis columns interaction",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
              {
                layout: "layout-medium",
                items: [
                  {
                    src: "assets/figma-elements/onereport-analysis-sankey.png",
                    alt: "OneReport Sankey analysis interaction",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
              {
                layout: "layout-medium",
                items: [
                  {
                    src: "assets/figma-elements/onereport-analysis-focus.png",
                    alt: "OneReport focus interaction",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Designing ‘Reports’",
        blocks: [
          {
            type: "copy",
            body: [
              "The next challenge was fitting the dense internal reporting systems onto a mobile screen.",
              [
                { text: "A key metric is always shown alongside other primary metrics at the same level, with secondary and tertiary metrics below. ", tone: "primary" },
                { text: "Clutter is a common issue on desktops, so it has become even more of a problem on mobile devices." },
              ],
              "To solve this, I designed the Reports surface with a fixed-format, card-based layout that reads like a news story. Sheets were used to reveal dense information step by step. I made sure that every dataset with dense information included a visual representation.",
              "This approach allowed me to include every metric without overwhelming viewers with too much information.",
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-medium",
                items: [
                  {
                    src: "assets/figma-elements/onereport-reports-card.png",
                    alt: "OneReport reports card layout",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Designing ‘AMA’",
        blocks: [
          {
            type: "copy",
            body: [
              "The last scenario was important because it focused on an executive needing a number during a call. Time-to-value, or how quickly a user can find the right metric, had to be as short as possible for real-time use.",
              [
                { text: "Despite chat-like UIs being common, I designed AMA with a search bar instead of a chat box. This signaled to users that short phrases were sufficient, as validated through internal testing with directors interacting with the prototypes.", tone: "primary" },
              ],
              [
                { text: "While it gave the impression of sophisticated AI interaction, the outcome could be achieved without LLMs, using low-cost frameworks like Google Action. " },
                { text: "The design decision had the greatest impact, enabling the project to move toward cost estimation at a time when AI projects were considered too expensive.", tone: "primary" },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-medium",
                items: [
                  {
                    src: "assets/figma-elements/onereport-ama-search.png",
                    alt: "OneReport AMA search interface",
                    caption: "Grouping features based on the problem they solve for a customer.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Takeaway:",
        blocks: [
          {
            type: "statement",
            compact: true,
            body: [
              "Designing for moments a user might want to take out their phone, rather than a ‘mobile version’ of the desktop experience.",
            ],
          },
          {
            type: "copy",
            body: [
              "Throughout the process, it was important not to see the experience as ‘fitting a dashboard on a mobile’. That would have limited our possibilities.",
              "The context was different. C-Suite executives are rarely sitting down to “use software.” They are moving between meetings, checking something before the day starts, looking for a number during a call, or deciding what is worth a deeper look later.",
              [
                { text: "The concept did not gain traction because it was a mobile version of internal dashboards (it wasn’t). It gained traction because it appeared to have its own place within an executive’s day.", tone: "primary" },
              ],
            ],
          },
        ],
      },
    ],
  },
};

const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
}[character]));

const escapeLines = (value = "") => escapeHtml(value).replace(/\n/g, "<br>");

const renderInlineContent = (item) => {
  if (!Array.isArray(item)) return escapeLines(item);

  return item.map((segment) => {
    const classes = [
      segment.tone === "primary" ? "text-primary" : "",
      segment.tone === "link" ? "text-link" : "",
      segment.weight === "bold" ? "text-bold" : "",
    ].filter(Boolean).join(" ");

    return `<span${classes ? ` class="${classes}"` : ""}>${escapeLines(segment.text)}</span>`;
  }).join("");
};

const createParagraphs = (items) => items.map((item) => `<p>${renderInlineContent(item)}</p>`).join("");

const renderList = (items = [], type = "ul") => {
  if (!items.length) return "";
  const tag = type === "ol" ? "ol" : "ul";

  return `
    <${tag}>
      ${items.map((item) => {
        if (typeof item === "string") return `<li>${escapeLines(item)}</li>`;

        return `
          <li>
            ${escapeLines(item.text)}
            ${renderList(item.sublist || [], item.listType || "ul")}
          </li>
        `;
      }).join("")}
    </${tag}>
  `;
};

const renderIntro = (study) => `
  <div class="case-intro case-reveal-text${study.emphasizedIntroList ? " case-intro-list-emphasis" : ""}">
    ${study.intro.map((item, index) => `<p${study.emphasizedIntro?.includes(index) ? ` class="case-intro-emphasis"` : ""}>${renderInlineContent(item)}</p>`).join("")}
    ${study.introList?.length ? `
      <ol>
        ${study.introList.map((item) => `<li>${escapeLines(item)}</li>`).join("")}
      </ol>
    ` : ""}
  </div>
`;

const setActiveNavItem = (hash) => {
  const targetHash = hash.startsWith("#case/") ? hash : hash || "#selected-work";

  sectionNavItems.forEach((navItem) => {
    navItem.classList.remove("is-pending");
    const isActive = navItem.getAttribute("href") === targetHash;
    navItem.classList.toggle("is-active", isActive);

    if (isActive) {
      navItem.setAttribute("aria-current", "page");
    } else {
      navItem.removeAttribute("aria-current");
    }
  });

  pendingNavItem = null;
};

const setPendingNavItem = (hash) => {
  pendingNavItem?.classList.remove("is-pending");
  pendingNavItem = null;

  const target = [...sectionNavItems].find((navItem) => navItem.getAttribute("href") === hash);
  if (!target || target.classList.contains("is-active")) return;

  target.classList.add("is-pending");
  pendingNavItem = target;
};

const normalizeRouteHash = (hash = window.location.hash) => {
  if (!hash || hash === "#") return "#selected-work";
  if (hash.startsWith("#case/")) return hash;
  return routeHashes.has(hash) ? hash : "#selected-work";
};

const getActiveRouteElement = () => {
  if (selectedWorkStage && !selectedWorkStage.hidden) return selectedWorkStage;
  if (aboutStage && !aboutStage.hidden) return aboutStage;
  if (caseStudyStage && !caseStudyStage.hidden) return caseStudyStage;
  return null;
};

const enterRouteView = (element) => {
  if (!element) return;

  element.classList.remove("route-view-exit", "route-view-enter", "is-visible");

  if (reducedMotionMedia.matches) {
    element.classList.add("is-visible");
    return;
  }

  element.classList.add("route-view-enter");
  window.requestAnimationFrame(() => {
    element.classList.add("is-visible");
  });
};

const revealMotionItems = (items, stagger = 70, baseDelay = 0) => {
  const motionItems = [...items];

  motionItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${baseDelay + (index * stagger)}ms`);
    item.classList.remove("is-visible");
  });

  if (reducedMotionMedia.matches) {
    motionItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  motionItems.forEach((item) => item.getBoundingClientRect());

  window.requestAnimationFrame(() => {
    motionItems.forEach((item) => item.classList.add("is-visible"));
  });
};

const resetViewportScroll = () => {
  const pageShell = document.querySelector(".page-shell");
  pageShell?.scrollTo({ top: 0, behavior: "instant" });
  window.scrollTo({ top: 0, behavior: "instant" });
  window.requestAnimationFrame(() => {
    pageShell?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  window.setTimeout(() => {
    pageShell?.scrollTo({ top: 0, behavior: "instant" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 80);
};

const initializeShellMotion = () => {
  if (reducedMotionMedia.matches) {
    document.body.classList.add("shell-ready");
    return;
  }

  window.requestAnimationFrame(() => {
    document.body.classList.add("shell-ready");
  });
};

const initializeSelectedWorkMotion = () => {
  if (!selectedWorkStage) return;
  const items = [...selectedWorkStage.querySelectorAll(".project-tile")];
  const isFirstVisit = isInitialRouteRender;
  const baseDelay = isFirstVisit ? 180 : 0;
  const rowStep = isFirstVisit ? 155 : 34;
  const columnStep = isFirstVisit ? 78 : 20;
  const labelOffset = isFirstVisit ? 170 : 70;
  const titleOffset = isFirstVisit ? 340 : 130;
  const yearOffset = isFirstVisit ? 520 : 200;

  selectedWorkStage.classList.toggle("is-returning", !isFirstVisit);

  items.forEach((item, index) => {
    const row = Math.floor(index / 2);
    const column = index % 2;
    const rowDelay = row * rowStep;
    const columnDelay = column * columnStep;
    const thumbDelay = baseDelay + rowDelay + columnDelay;
    const labelDelay = thumbDelay + labelOffset;

    item.classList.add("project-motion-item");
    item.style.setProperty("--tile-delay", `${thumbDelay}ms`);
    item.style.setProperty("--tile-label-delay", `${labelDelay}ms`);
    item.style.setProperty("--tile-thumb-delay", `${thumbDelay}ms`);
    item.style.setProperty("--tile-title-delay", `${labelDelay + titleOffset}ms`);
    item.style.setProperty("--tile-year-delay", `${labelDelay + yearOffset}ms`);
    item.classList.remove("is-visible");
  });

  if (reducedMotionMedia.matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  window.requestAnimationFrame(() => {
    items.forEach((item) => item.classList.add("is-visible"));
  });
};

const initializeAboutMotion = () => {
  if (!aboutStage) return;
  window.clearTimeout(aboutMotionTimer);
  const items = [...aboutStage.querySelectorAll(".about-copy p")];
  items.forEach((item, index) => {
    item.classList.add("about-motion-item");
    item.style.setProperty("--reveal-delay", `${index * 130}ms`);
    item.classList.remove("is-visible");
  });

  if (reducedMotionMedia.matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  aboutStage.getBoundingClientRect();
  items.forEach((item) => item.getBoundingClientRect());

  aboutMotionTimer = window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      items.forEach((item) => item.classList.add("is-visible"));
    });
  }, 220);
};

const cleanupAboutMotion = () => {
  window.clearTimeout(aboutMotionTimer);
  aboutMotionTimer = null;

  aboutStage?.querySelectorAll(".about-motion-item").forEach((item) => {
    item.classList.remove("is-visible");
  });
};

let panwProblemBracketFrame = 0;

const updatePanwProblemBrackets = () => {
  panwProblemBracketFrame = 0;

  document.querySelectorAll(".panw-problem").forEach((problem) => {
    const lead = problem.querySelector(".panw-problem-lead");
    const list = problem.querySelector("ol");
    const items = [...problem.querySelectorAll("li")];
    if (!lead || !list || items.length < 2) return;

    const listRect = list.getBoundingClientRect();
    const leadRect = lead.getBoundingClientRect();
    const markerData = items.map((item) => {
      const itemRect = item.getBoundingClientRect();
      const markerStyle = getComputedStyle(item, "::before");
      const markerHeight = Number.parseFloat(markerStyle.height) || 33;
      return {
        item,
        itemRect,
        markerHeight,
        centerY: itemRect.top + (markerHeight / 2),
        top: itemRect.top,
      };
    });

    const firstMarker = markerData[0];
    const secondMarker = markerData[1];
    const preferredTop = leadRect.bottom + 18;
    const topBeforeFirstCircle = firstMarker.top - 24;
    const lineTop = Math.min(preferredTop, topBeforeFirstCircle);
    const lineHeight = Math.max(0, secondMarker.centerY - lineTop);

    list.style.setProperty("--panw-problem-line-top", `${lineTop - listRect.top}px`);
    list.style.setProperty("--panw-problem-line-height", `${lineHeight}px`);

    markerData.forEach(({ item, markerHeight }) => {
      item.style.setProperty("--panw-problem-tick-y", `${markerHeight / 2}px`);
    });
  });
};

const queuePanwProblemBracketUpdate = () => {
  if (panwProblemBracketFrame) return;
  panwProblemBracketFrame = window.requestAnimationFrame(updatePanwProblemBrackets);
};

const renderRoute = (hash = window.location.hash) => {
  const targetHash = normalizeRouteHash(hash);

  if (targetHash.startsWith("#case/")) {
    const slug = targetHash.replace("#case/", "");
    if (renderCaseStudy(slug)) {
      setActiveNavItem(targetHash);
      currentRouteHash = targetHash;
      return;
    }
    window.location.hash = "#selected-work";
    return;
  }

  if (targetHash === "#about") {
    setActiveNavItem(targetHash);
    showAbout();
    currentRouteHash = targetHash;
    return;
  }

  setActiveNavItem("#selected-work");
  showSelectedWork();
  currentRouteHash = "#selected-work";
};

const transitionToRoute = (hash, shouldUpdateHash = true) => {
  const targetHash = normalizeRouteHash(hash);

  if (targetHash === currentRouteHash) {
    pendingNavItem?.classList.remove("is-pending");
    pendingNavItem = null;
    setNavigationOpen(false);
    return;
  }

  window.clearTimeout(routeTransitionTimer);
  pendingRouteHash = targetHash;
  setPendingNavItem(targetHash);
  document.body.classList.toggle("route-about-entering", targetHash === "#about");

  if (reducedMotionMedia.matches) {
    if (shouldUpdateHash && window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      renderRoute(targetHash);
    }
    setNavigationOpen(false);
    return;
  }

  const activeRoute = getActiveRouteElement();
  activeRoute?.classList.remove("route-view-enter", "is-visible");
  activeRoute?.classList.add("route-view-exit");
  setNavigationOpen(false);
  isRouteTransitioning = true;

  const routeSwapDelay = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--route-swap-delay")) || 90;

  routeTransitionTimer = window.setTimeout(() => {
    if (shouldUpdateHash && window.location.hash !== targetHash) {
      window.location.hash = targetHash;
      return;
    }

    renderRoute(targetHash);
    isRouteTransitioning = false;
    pendingRouteHash = null;
  }, routeSwapDelay);
};

const renderMedia = (media = [], caption = "", variant = "", isHero = false) => {
  if (!media.length) return "";
  const mediaClass = isHero
    ? "case-hero case-media-wide"
    : media.length > 1
      ? "case-media-row"
      : `case-media-wide ${variant ? `case-media-${variant}` : ""}`.trim();
  const mediaMotionClass = isHero ? "case-hero-media" : "case-reveal-image";
  return `
    <div class="${mediaClass}">
      ${media.map((item) => `
        ${isHero ? `<button class="case-media ${mediaMotionClass}" type="button" data-full-src="${escapeHtml(item.src)}" data-caption="${escapeHtml(item.alt)}">
          <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}">
        </button>` : `<button class="case-media ${mediaMotionClass}" type="button" data-full-src="${escapeHtml(item.src)}" data-caption="${escapeHtml(item.alt)}">
          <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}">
        </button>`}
      `).join("")}
    </div>
    ${caption ? `<p class="case-caption case-reveal-text">${escapeLines(caption)}</p>` : ""}
  `;
};

const renderCaption = (caption = "") => {
  if (!caption) return "";
  return `<p class="case-caption-text case-reveal-text">${renderInlineContent(caption)}</p>`;
};

const renderMediaFigure = (item) => `
  <figure class="case-media-figure${item.span ? ` ${escapeHtml(item.span)}` : ""}">
    <button class="case-media case-reveal-image" type="button" data-full-src="${escapeHtml(item.src)}" data-caption="${escapeHtml(item.alt || "")}">
      <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || "")}">
    </button>
    ${renderCaption(item.caption)}
  </figure>
`;

const renderMediaStack = (item) => `
  <div class="case-media-stack${item.span ? ` ${escapeHtml(item.span)}` : ""}">
    ${(item.items || []).map(renderMediaFigure).join("")}
  </div>
`;

const renderMediaSet = (rows = []) => `
  <div class="case-media-set">
    ${rows.map((row) => `
      <div class="case-media-set-row ${escapeHtml(row.layout || "layout-full")}">
        ${row.items.map((item) => {
          if (item.type === "caption") {
            return `<div class="case-media-side-caption${item.span ? ` ${escapeHtml(item.span)}` : ""}">${renderCaption(item.caption)}</div>`;
          }

          if (item.type === "stack") {
            return renderMediaStack(item);
          }

          return renderMediaFigure(item);
        }).join("")}
      </div>
    `).join("")}
  </div>
`;

const isPanwVideo = (item = {}) => item.mediaType === "video" || /\.(mp4|mov|webm)$/i.test(item.src || "");

const renderPanwMediaAsset = (item = {}) => {
  if (!item.src) return "";

  const src = escapeHtml(item.src);
  const label = escapeHtml(item.label || "");

  if (isPanwVideo(item)) {
    return `<video class="panw-placeholder-image panw-placeholder-video" src="${src}" aria-label="${label}" autoplay loop muted playsinline preload="metadata"></video>`;
  }

  return `<img class="panw-placeholder-image" src="${src}" alt="${label}">`;
};

const renderPanwPlaceholder = (item = {}) => `
  <div class="panw-placeholder${item.src ? " panw-placeholder-has-image" : ""} panw-placeholder-${escapeHtml(item.tone || "neutral")}${item.size ? ` panw-placeholder-${escapeHtml(item.size)}` : ""}${item.id ? ` panw-block-${escapeHtml(item.id)}` : ""} case-reveal-image" style="--placeholder-ratio: ${escapeHtml(item.ratio || "16 / 9")};" aria-label="${escapeHtml(item.label || "Image placeholder")}">
    ${item.inner ? `
      <div class="panw-placeholder-inner panw-placeholder-inner-${escapeHtml(item.inner)}">
        ${renderPanwMediaAsset(item)}
      </div>
    ` : renderPanwMediaAsset(item)}
  </div>
`;

const renderPanwIntroGrid = (study) => `
  <div class="panw-intro-grid panw-block-intro">
    <div class="panw-intro-copy case-reveal-text">
      ${(study.introCards || []).map((item) => `<p>${renderInlineContent(item)}</p>`).join("")}
    </div>
    <dl class="panw-meta case-reveal-text">
      ${study.meta.map(([label, value]) => `
        <div class="panw-meta-row">
          <dt>${escapeLines(label)}</dt>
          <dd>${escapeLines(value)}</dd>
        </div>
      `).join("")}
    </dl>
  </div>
`;

const renderPanwMediaContext = (block, study) => {
  const context = typeof block.context === "string" ? study[block.context] : block.context;

  return `
    <div class="panw-media-context${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""}">
      ${renderPanwPlaceholder(block.media)}
      ${context ? `
        <aside class="panw-side-note case-reveal-text">
          <h2>${escapeLines(context.title || "")}</h2>
          ${String(context.body || "").split("\n").map((paragraph) => `<p>${escapeLines(paragraph)}</p>`).join("")}
        </aside>
      ` : ""}
    </div>
  `;
};

const renderPanwProblem = (block) => `
  <div class="panw-problem${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""} case-reveal-text">
    <p class="panw-eyebrow">${escapeLines(block.eyebrow || "")}</p>
    <p class="panw-problem-lead">${escapeLines(block.lead || "")}</p>
    <div class="panw-problem-list-wrap">
      <img class="panw-problem-vector panw-problem-vector-long" src="assets/panw-figma/vector-357.svg" alt="">
      <img class="panw-problem-vector panw-problem-vector-short" src="assets/panw-figma/vector-358.svg" alt="">
      <ol>
        ${(block.points || []).map((point) => `<li>${escapeLines(point)}</li>`).join("")}
      </ol>
    </div>
  </div>
`;

const renderPanwPlaceholderPair = (block) => `
  <div class="panw-placeholder-pair${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""}">
    ${(block.items || []).map(renderPanwPlaceholder).join("")}
  </div>
`;

const renderPanwTextColumn = (block) => `
  <div class="panw-side-note case-reveal-text">
    ${block.textTitle ? `<h2>${escapeLines(block.textTitle)}</h2>` : ""}
    ${Array.isArray(block.text)
      ? block.text.map((item) => `<p>${renderInlineContent(item)}</p>`).join("")
      : `<p>${escapeLines(block.text || "")}</p>`}
    ${renderList(block.list || [], block.listType || "ul")}
  </div>
`;

const renderPanwResearchGrid = (block) => {
  const media = block.media || [];

  return `
    <div class="panw-media-text-grid panw-block-research">
      <div class="panw-research-column panw-research-left">
        ${media.slice(0, 2).map(renderPanwPlaceholder).join("")}
      </div>
      <div class="panw-research-column panw-research-right">
        ${renderPanwTextColumn(block)}
        ${media[2] ? renderPanwPlaceholder(media[2]) : ""}
      </div>
    </div>
  `;
};

const renderPanwMediaTextGrid = (block) => `
  <div class="panw-media-text-grid${block.flip ? " panw-media-text-grid-flip" : ""}${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""}">
    <div class="panw-media-column">
      ${(block.media || []).map(renderPanwPlaceholder).join("")}
    </div>
    ${renderPanwTextColumn(block)}
  </div>
`;

const renderPanwImpact = (block) => `
  <div class="panw-impact${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""}">
    <div class="panw-impact-copy case-reveal-text">
      <p class="panw-eyebrow">${escapeLines(block.eyebrow || "")}</p>
      ${(block.narratives || []).map((item) => `
        <section class="panw-impact-item">
          <h2>${escapeLines(item.title || "")}</h2>
          ${(item.body || []).map((paragraph) => `<p>${escapeLines(paragraph)}</p>`).join("")}
        </section>
      `).join("")}
    </div>
    <div class="panw-metrics">
      ${(block.metrics || []).map((metric) => `
        <article class="panw-metric-card case-reveal-text">
          <p class="panw-metric-label">${escapeLines(metric.label)}</p>
          ${metric.value ? `<p class="panw-metric-value">${escapeLines(metric.value)}</p>` : ""}
          ${(metric.delta || metric.detail) ? `<p class="panw-metric-detail"><span>${escapeLines(metric.delta || "")}</span>${metric.detail ? ` ${escapeLines(metric.detail)}` : ""}</p>` : ""}
        </article>
      `).join("")}
    </div>
  </div>
`;

const renderPanwTakeaway = (block) => `
  <div class="panw-takeaway${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""} case-reveal-text">
    <p class="panw-eyebrow">${escapeLines(block.eyebrow || "")}</p>
    ${Array.isArray(block.body)
      ? block.body.map((item) => `<p>${renderInlineContent(item)}</p>`).join("")
      : `<p>${escapeLines(block.body || "")}</p>`}
  </div>
`;

const renderPanwBlock = (block, study) => {
  if (block.type === "placeholder") return renderPanwPlaceholder(block);
  if (block.type === "introGrid") return renderPanwIntroGrid(study);
  if (block.type === "mediaContext") return renderPanwMediaContext(block, study);
  if (block.type === "problem") return renderPanwProblem(block);
  if (block.type === "placeholderPair") return renderPanwPlaceholderPair(block);
  if (block.type === "mediaTextGrid" && block.id === "research") return renderPanwResearchGrid(block);
  if (block.type === "mediaTextGrid") return renderPanwMediaTextGrid(block);
  if (block.type === "impact") return renderPanwImpact(block);
  if (block.type === "takeaway") return renderPanwTakeaway(block);
  return renderCaseBlock(block);
};

const renderPanwCaseStudy = (study) => `
  <div class="case-inner panw-case-inner">
    <div class="panw-title-frame">
      <h1 class="case-title case-heading-motion">${escapeLines(study.title)}</h1>
    </div>
    ${(study.sections || []).flatMap((section) => section.blocks || []).map((block) => renderPanwBlock(block, study)).join("")}
  </div>
`;

const renderCaseBlock = (block) => {
  if (block.type === "media") {
    return renderMedia(block.media, block.caption, block.variant);
  }

  if (block.type === "mediaSet") {
    return renderMediaSet(block.rows || []);
  }

  if (block.type === "statement") {
    return `
      <div class="case-statement case-reveal-text${block.compact ? " case-block-compact" : ""}${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""}">
        ${createParagraphs(block.body || [])}
      </div>
    `;
  }

  return `
    <div class="case-copy case-reveal-text${block.compact ? " case-block-compact" : ""}${block.id ? ` panw-block-${escapeHtml(block.id)}` : ""}">
      ${createParagraphs(block.body || [])}
      ${renderList(block.list || [], block.listType || "ul")}
    </div>
  `;
};

const renderCaseSection = (section) => {
  const blocks = section.blocks || [
    { type: "copy", body: section.body || [] },
    ...(section.media?.length ? [{ type: "media", media: section.media, caption: section.caption }] : []),
  ];

  return `
    <section class="case-section">
      ${section.title ? `<h2 class="case-section-title case-reveal-text">${section.title}</h2>` : ""}
      ${blocks.map(renderCaseBlock).join("")}
    </section>
  `;
};

const getCaseRevealStagger = (element) => {
  if (element.classList.contains("case-caption") || element.classList.contains("case-caption-text")) return 35;
  if (element.classList.contains("case-section-title")) return 45;
  if (element.classList.contains("case-meta-row")) return 60;
  if (element.classList.contains("case-reveal-image") && element.closest(".case-media-row, .case-media-set")) return 55;
  return 70;
};

const revealCaseElement = (element, index = 0) => {
  element.style.setProperty("--reveal-delay", `${index * getCaseRevealStagger(element)}ms`);
  element.classList.add("is-visible");
};

const cleanupCaseMotion = () => {
  caseRevealObserver?.disconnect();
  caseRevealObserver = null;

  if (caseMotionCleanup) {
    caseMotionCleanup();
    caseMotionCleanup = null;
  }
};

const initializeCaseMotion = () => {
  if (!caseStudyStage) return;

  cleanupCaseMotion();
  queuePanwProblemBracketUpdate();
  document.fonts?.ready.then(queuePanwProblemBracketUpdate);

  const heading = caseStudyStage.querySelector(".case-heading-motion");
  const hero = caseStudyStage.querySelector(".case-hero-media");
  const revealElements = [...caseStudyStage.querySelectorAll(".case-reveal-text, .case-reveal-image")];

  if (reducedMotionMedia.matches) {
    heading?.classList.add("is-visible");
    hero?.classList.add("is-visible");
    revealElements.forEach((element) => revealCaseElement(element, 0));
    window.addEventListener("resize", queuePanwProblemBracketUpdate);
    caseMotionCleanup = () => {
      window.removeEventListener("resize", queuePanwProblemBracketUpdate);
      if (panwProblemBracketFrame) {
        window.cancelAnimationFrame(panwProblemBracketFrame);
        panwProblemBracketFrame = 0;
      }
    };
    return;
  }

  const openingDelay = isInitialRouteRender ? 220 : 0;

  window.requestAnimationFrame(() => {
    window.setTimeout(() => {
      heading?.classList.add("is-visible");
    }, openingDelay);

    window.setTimeout(() => {
      hero?.classList.add("is-visible");
    }, openingDelay + 260);
  });

  const pendingRevealElements = new Set(revealElements);
  let revealFrame = 0;
  let canRevealCaseContent = false;
  let revealStartTimer = 0;
  const caseContentRevealDelay = openingDelay + (drawerMedia.matches ? 860 : 940);

  const revealBatch = (elements) => {
    const batch = [...new Set(elements)]
      .filter((element) => pendingRevealElements.has(element))
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

    batch.forEach((element, index) => {
      pendingRevealElements.delete(element);
      revealCaseElement(element, index);
      caseRevealObserver?.unobserve(element);
    });

    if (!pendingRevealElements.size) {
      cleanupCaseMotion();
    }
  };

  const revealEligibleElements = () => {
    revealFrame = 0;
    const triggerLine = window.innerHeight * 0.88;
    revealBatch([...pendingRevealElements].filter((element) => (
      element.getBoundingClientRect().top <= triggerLine
    )));
  };

  const queueRevealCheck = () => {
    if (!canRevealCaseContent) return;
    if (revealFrame) return;
    revealFrame = window.requestAnimationFrame(revealEligibleElements);
  };

  caseMotionCleanup = () => {
    window.removeEventListener("scroll", queueRevealCheck);
    window.removeEventListener("resize", queueRevealCheck);
    window.removeEventListener("resize", queuePanwProblemBracketUpdate);
    if (revealFrame) {
      window.cancelAnimationFrame(revealFrame);
      revealFrame = 0;
    }
    if (panwProblemBracketFrame) {
      window.cancelAnimationFrame(panwProblemBracketFrame);
      panwProblemBracketFrame = 0;
    }
    window.clearTimeout(revealStartTimer);
  };

  caseRevealObserver = new IntersectionObserver((entries) => {
    if (!canRevealCaseContent) return;

    revealBatch(entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target));
  }, {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  });

  revealElements.forEach((element) => caseRevealObserver.observe(element));
  window.addEventListener("scroll", queueRevealCheck, { passive: true });
  window.addEventListener("resize", queueRevealCheck);
  window.addEventListener("resize", queuePanwProblemBracketUpdate);

  revealStartTimer = window.setTimeout(() => {
    canRevealCaseContent = true;
    queueRevealCheck();
  }, caseContentRevealDelay);
};

const renderCaseStudy = (slug) => {
  const study = caseStudies[slug];

  if (!study || !caseStudyStage || !selectedWorkStage) return false;

  cleanupAboutMotion();
  selectedWorkStage.hidden = true;
  if (aboutStage) aboutStage.hidden = true;
  document.body.classList.remove("route-about", "route-about-entering");
  caseStudyStage.hidden = false;
  caseStudyStage.classList.toggle("case-study-panw", study.variant === "panw-ai");
  caseStudyStage.innerHTML = study.variant === "panw-ai" ? renderPanwCaseStudy(study) : `
    <div class="case-inner">
      <div class="case-title-frame">
        <h1 class="case-title case-heading-motion">${escapeLines(study.title)}</h1>
      </div>
      ${renderMedia([study.hero], "", "", true)}
      ${renderIntro(study)}
      <dl class="case-meta">
        ${study.meta.map(([label, value]) => `
          <div class="case-meta-row case-reveal-text">
            <dt>${escapeLines(label)}</dt>
            <dd>${escapeLines(value)}</dd>
          </div>
        `).join("")}
      </dl>
      ${study.sections.map(renderCaseSection).join("")}
    </div>
  `;
  resetViewportScroll();
  enterRouteView(caseStudyStage);
  initializeCaseMotion();
  return true;
};

const showSelectedWork = () => {
  if (!caseStudyStage || !selectedWorkStage) return;

  cleanupCaseMotion();
  cleanupAboutMotion();
  selectedWorkStage.hidden = false;
  if (aboutStage) aboutStage.hidden = true;
  document.body.classList.remove("route-about", "route-about-entering");
  caseStudyStage.hidden = true;
  caseStudyStage.innerHTML = "";
  resetViewportScroll();
  enterRouteView(selectedWorkStage);
  initializeSelectedWorkMotion();
};

const showAbout = () => {
  if (!caseStudyStage || !selectedWorkStage || !aboutStage) return;

  cleanupCaseMotion();
  selectedWorkStage.hidden = true;
  aboutStage.hidden = false;
  document.body.classList.add("route-about");
  document.body.classList.remove("route-about-entering");
  caseStudyStage.hidden = true;
  caseStudyStage.innerHTML = "";
  resetViewportScroll();
  enterRouteView(aboutStage);
  initializeAboutMotion();
};

const syncRoute = () => {
  document.body.classList.remove("route-about-entering");
  renderRoute(window.location.hash || "#selected-work");
  isInitialRouteRender = false;
};

const setPanelAvailability = () => {
  const isDrawer = drawerMedia.matches;
  const isOpen = document.body.classList.contains("nav-open");

  if (!sidePanel) return;

  if (isDrawer && !isOpen) {
    sidePanel.setAttribute("inert", "");
    sidePanel.setAttribute("aria-hidden", "true");
    return;
  }

  sidePanel.removeAttribute("inert");
  sidePanel.removeAttribute("aria-hidden");
};

const setNavigationOpen = (isOpen) => {
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  setPanelAvailability();
};

navItems.forEach((item) => {
  item.addEventListener("pointerdown", () => {
    item.classList.add("is-pressed");
  });

  item.addEventListener("pointerup", () => {
    item.classList.remove("is-pressed");
  });

  item.addEventListener("pointerleave", () => {
    item.classList.remove("is-pressed");
  });

  item.addEventListener("click", () => {
    setNavigationOpen(false);
    item.blur();
  });
});

const resetLightboxZoom = () => {
  isLightboxZoomed = false;
  lightbox?.classList.remove("is-zoomed");
  if (lightboxImage) {
    lightboxImage.style.removeProperty("width");
    lightboxImage.removeAttribute("aria-label");
  }
  if (lightboxViewport) {
    lightboxViewport.scrollLeft = 0;
    lightboxViewport.scrollTop = 0;
  }
};

const setLightboxZoom = (shouldZoom) => {
  if (!lightbox || !lightboxImage || !lightboxViewport || lightboxImage.hidden) return;

  isLightboxZoomed = shouldZoom;
  lightbox.classList.toggle("is-zoomed", shouldZoom);

  if (!shouldZoom) {
    lightboxImage.style.removeProperty("width");
    lightboxImage.setAttribute("aria-label", "Zoom into image");
    lightboxViewport.scrollLeft = 0;
    lightboxViewport.scrollTop = 0;
    return;
  }

  const imageBox = lightboxImage.getBoundingClientRect();
  const naturalWidth = lightboxImage.naturalWidth || imageBox.width;
  const zoomWidth = Math.max(imageBox.width * 1.75, Math.min(naturalWidth, window.innerWidth * 1.8));

  lightboxImage.style.width = `${Math.round(zoomWidth)}px`;
  lightboxImage.setAttribute("aria-label", "Zoom out of image");

  window.requestAnimationFrame(() => {
    lightboxViewport.scrollLeft = Math.max(0, (lightboxViewport.scrollWidth - lightboxViewport.clientWidth) / 2);
    lightboxViewport.scrollTop = Math.max(0, (lightboxViewport.scrollHeight - lightboxViewport.clientHeight) / 2);
  });
};

document.addEventListener("click", (event) => {
  const mediaButton = event.target.closest("#case-study .case-media[data-full-src]");
  if (
    !mediaButton ||
    caseStudyStage?.hidden ||
    !lightbox ||
    !lightboxImage ||
    !lightboxCaption
  ) return;

  window.clearTimeout(lightboxCloseTimer);
  lightbox.classList.remove("is-open", "is-closing");
  resetLightboxZoom();
  lastOpenedMedia = mediaButton;
  lightboxImage.src = mediaButton.dataset.fullSrc;
  lightboxImage.alt = mediaButton.querySelector("img")?.alt || "";
  lightboxImage.setAttribute("aria-label", "Zoom into image");
  lightboxImage.hidden = false;
  lightboxCaption.textContent = mediaButton.dataset.caption || "";
  lightbox.showModal();

  if (reducedMotionMedia.matches) {
    lightbox.classList.add("is-open");
    return;
  }

  window.requestAnimationFrame(() => {
    lightbox.classList.add("is-open");
  });
});

const closeLightbox = () => {
  if (!lightbox?.open) return;

  if (reducedMotionMedia.matches) {
    lightbox.classList.remove("is-open", "is-closing");
    lightbox.close();
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.classList.add("is-closing");
  window.clearTimeout(lightboxCloseTimer);
  lightboxCloseTimer = window.setTimeout(() => {
    lightbox.close();
  }, 260);
};

lightboxClose?.addEventListener("click", closeLightbox);

lightboxImage?.addEventListener("click", (event) => {
  event.stopPropagation();
  setLightboxZoom(!isLightboxZoomed);
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightbox?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeLightbox();
});

lightbox?.addEventListener("close", () => {
  window.clearTimeout(lightboxCloseTimer);
  lightbox.classList.remove("is-open", "is-closing");
  resetLightboxZoom();
  if (lightboxImage) {
    lightboxImage.hidden = true;
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
  }
  if (lightboxCaption) {
    lightboxCaption.textContent = "";
  }
  lastOpenedMedia?.blur();
  lastOpenedMedia = null;
});

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest("a[href^='#']");
  if (!routeLink) return;

  const rawHash = routeLink.getAttribute("href");
  if (!routeHashes.has(rawHash)) return;

  const targetHash = normalizeRouteHash(rawHash);

  event.preventDefault();
  transitionToRoute(targetHash, true);
});

window.addEventListener("hashchange", () => {
  const targetHash = normalizeRouteHash(window.location.hash);

  if (isRouteTransitioning && pendingRouteHash === targetHash) {
    renderRoute(targetHash);
    isRouteTransitioning = false;
    pendingRouteHash = null;
    return;
  }

  transitionToRoute(targetHash, false);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setNavigationOpen(!isOpen);
});

navScrim?.addEventListener("click", () => {
  setNavigationOpen(false);
});

siteNav?.addEventListener("wheel", (event) => {
  const pageShell = document.querySelector(".page-shell");
  if (!pageShell) return;

  event.preventDefault();
  pageShell.scrollBy({ top: event.deltaY, left: 0, behavior: "auto" });
}, { passive: false });

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("nav-open")) return;
  if (sidePanel?.contains(event.target) || menuToggle?.contains(event.target)) return;
  setNavigationOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (lightbox?.open) return;
  setNavigationOpen(false);
  menuToggle?.focus();
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1025px)").matches) {
    setNavigationOpen(false);
    return;
  }

  setPanelAvailability();
});

drawerMedia.addEventListener("change", () => {
  setNavigationOpen(false);
  setPanelAvailability();
});

setPanelAvailability();
initializeShellMotion();
syncRoute();
