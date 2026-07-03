const navItems = document.querySelectorAll(".nav-item");
const sectionNavItems = document.querySelectorAll(".panel-nav .nav-item");
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
    title: "Sales Workbench is an AI-assisted sales operation tool used by Palo Alto Networks to manage their accounts.",
    hero: {
      src: "assets/figma-nodes/panw-hero.png",
      alt: "Sales Workbench table interface and account research panels",
    },
    intro: [
      "I led the end-to-end design of Sales Workbench by rethinking:",
    ],
    emphasizedIntro: [0],
    emphasizedIntroList: true,
    introList: [
      "How we design data-dense interactive tables.",
      "How AI converses with spreadsheet-native users.",
      "What “source” means for internal teams.",
    ],
    meta: [
      ["Stakeholder", "Palo Alto Networks"],
      ["Skills", "AI-assisted front-end development\nInteraction Design\nPrototyping"],
      ["Year", "2025-26"],
    ],
    sections: [
      {
        title: "AI-interactions for spreadsheet-native users.",
        body: [
          [
            { text: "The project began with a push to bring AI into the sales workflow and specifically as a chatbot. " },
            { text: "The real disconnect was between the narrative form that AI takes and the fluency users had formed over decades of industry practice.", tone: "primary" },
          ],
          [
            { text: "By experimenting with " },
            { text: "CopilotKit", tone: "link" },
            { text: ", I designed tabular responses with interactive rows and columns to enable follow-up interactions. This allowed the users to engage in exploratory analysis rather than single-prompt interactions." },
          ],
          [
            { text: "Through observation, we found users using this combination as a means to triangulate root causes rather than using it for one-off questions, ", tone: "primary" },
            { text: "which led us to the placeholder tagline:" },
          ],
          "“Ask what usually takes four tools to answer.”",
          "In later phases, we also expanded the interaction pattern to allow context from UI tables to trigger new chats.",
        ],
        blocks: [
          {
            type: "copy",
            body: [
              [
                { text: "The project began with a push to bring AI into the sales workflow and specifically as a chatbot. " },
                { text: "The real disconnect was between the narrative form that AI takes and the fluency users had formed over decades of industry practice.", tone: "primary" },
              ],
              [
                { text: "By experimenting with " },
                { text: "CopilotKit", tone: "link" },
                { text: ", I designed tabular responses with interactive rows and columns to enable follow-up interactions. This allowed the users to engage in exploratory analysis rather than single-prompt interactions." },
              ],
              [
                { text: "Through observation, we found users using this combination as a means to triangulate root causes rather than using it for one-off questions, ", tone: "primary" },
                { text: "which led us to the placeholder tagline:" },
              ],
              "“Ask what usually takes four tools to answer.”",
              "In later phases, we also expanded the interaction pattern to allow context from UI tables to trigger new chats.",
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-680-328",
                items: [
                  {
                    src: "assets/figma-elements/panw-ai-early-opinion-primary.png",
                    alt: "Early AI interaction exploration interface",
                    caption: "Forming early opinions on AI interactions for our users.",
                  },
                  {
                    src: "assets/figma-elements/panw-ai-early-opinion-secondary.png",
                    alt: "Secondary early AI interaction exploration interface",
                  },
                ],
              },
              {
                layout: "layout-768-240",
                items: [
                  {
                    src: "assets/figma-elements/panw-ai-context-chat.png",
                    alt: "Context-aware chat interaction concept",
                  },
                  {
                    type: "caption",
                    caption: "A user pulling context into their chat, and identifying potential sales plays.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/panw-ai-interaction-panel.png",
                    alt: "AI interaction panel",
                    caption: "AI Interaction Panel",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Designing traceability for a response.",
        blocks: [
          {
            type: "copy",
            compact: true,
            body: [
              "With teams being well-versed with AI tools, “thinking” and “sources” were initially considered as having a standard approach. However 2 observations led me to rethink these critical features.",
            ],
            listType: "ol",
            list: [
              "Traditionally, “thinking” shows a meandered path models take to reach a conclusion, while our users needed a structured “derivation” of a response, leading with the conclusion.",
              {
                text: "A platform’s name does not pass as a “source” for internal teams. What’s more important:",
                listType: "ol",
                sublist: [
                  "Which dataset within the platform?",
                  "How recently was the data updated?",
                ],
              },
            ],
          },
          {
            type: "copy",
            body: [
              [
                { text: "These observations led me to design ", tone: "primary" },
                { text: "Trace", tone: "primary", weight: "bold" },
                { text: " (previously ‘Derivation’)." },
              ],
              "Trace breaks down a model’s thinking into 4–7 concrete steps, with pathways and timestamps for last refresh.",
              [
                { text: "In practice, we discovered that team members would snap a response and its trace together, and drop it in Slack threads to defend a number. The pattern became frequent enough that snapshotting was promoted to an enhancement.", tone: "primary" },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-768-240",
                items: [
                  {
                    src: "assets/figma-elements/panw-trace-early-narrative.png",
                    alt: "Early narrative traceability exploration",
                  },
                  {
                    type: "caption",
                    caption: "Early exploration using a narrative structure to show an LLM’s process.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/panw-trace-final.png",
                    alt: "Trace interface outlining response derivation and sources",
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
        title: "Consolidating the digital footprint.",
        body: [
          [
            { text: "Teams had a scattered landscape of multiple single-purpose tools built by distinct teams. " },
            { text: "The typical approach to consolidation involved a 15+ column table.", tone: "primary" },
          ],
          [
            { text: "To address this, " },
            { text: "I redesigned the table experience by using interactive tags as the atomic unit of data instead of cells", tone: "primary" },
            { text: ", and thematically grouping them." },
          ],
          [
            { text: "Post-launch feedback led to the cluster table becoming the default pattern for future table designs with multiple columns. ", tone: "primary" },
            { text: "The consolidation also led to a sustained reduction in traffic for 7 independently designed tools." },
          ],
        ],
        blocks: [
          {
            type: "copy",
            body: [
              [
                { text: "Teams had a scattered landscape of multiple single-purpose tools built by distinct teams. " },
                { text: "The typical approach to consolidation involved a 15+ column table.", tone: "primary" },
              ],
              [
                { text: "To address this, " },
                { text: "I redesigned the table experience by using interactive tags as the atomic unit of data instead of cells", tone: "primary" },
                { text: ", and thematically grouping them." },
              ],
              [
                { text: "Post-launch feedback led to the cluster table becoming the default pattern for future table designs with multiple columns. ", tone: "primary" },
                { text: "The consolidation also led to a sustained reduction in traffic for 7 independently designed tools." },
              ],
            ],
          },
          {
            type: "mediaSet",
            rows: [
              {
                layout: "layout-328-680",
                items: [
                  {
                    src: "assets/figma-elements/panw-consolidation-landscape.png",
                    alt: "Existing landscape of separate sales tools",
                    caption: "Existing landscape of tools for our users. ",
                  },
                  {
                    src: "assets/figma-elements/panw-consolidation-tags.png",
                    alt: "Interactive tags replacing table cells",
                    caption: "Interactive tags as a replacement to cells.",
                  },
                ],
              },
              {
                layout: "layout-full",
                items: [
                  {
                    src: "assets/figma-elements/panw-consolidation-workbench.png",
                    alt: "Account and Opportunity Workbench interface",
                    caption: "Account and Opportunity Workbench.",
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
              "Progress begins somewhere between blind acceptance and complete dismissal.",
            ],
          },
          {
            type: "copy",
            body: [
              "It was certainly uncomfortable being yet another team trying to add a chatbot with tiny chips that simulate “thinking” and treat citations as checkboxes. But acknowledging discomfort while taking action led to some of the more unique experiences in the application, with a lasting impact.",
              [
                { text: "The question was never “how do we add a chatbot?” but rather " },
                { text: "“what assumptions do we carry about the chatbot experience that will fail our users?”", tone: "primary" },
              ],
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
  window.scrollTo({ top: 0, behavior: "instant" });
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  window.setTimeout(() => {
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

const renderCaseBlock = (block) => {
  if (block.type === "media") {
    return renderMedia(block.media, block.caption, block.variant);
  }

  if (block.type === "mediaSet") {
    return renderMediaSet(block.rows || []);
  }

  if (block.type === "statement") {
    return `
      <div class="case-statement case-reveal-text${block.compact ? " case-block-compact" : ""}">
        ${createParagraphs(block.body || [])}
      </div>
    `;
  }

  return `
    <div class="case-copy case-reveal-text${block.compact ? " case-block-compact" : ""}">
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

  const heading = caseStudyStage.querySelector(".case-heading-motion");
  const hero = caseStudyStage.querySelector(".case-hero-media");
  const revealElements = [...caseStudyStage.querySelectorAll(".case-reveal-text, .case-reveal-image")];

  if (reducedMotionMedia.matches) {
    heading?.classList.add("is-visible");
    hero?.classList.add("is-visible");
    revealElements.forEach((element) => revealCaseElement(element, 0));
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
    if (revealFrame) {
      window.cancelAnimationFrame(revealFrame);
      revealFrame = 0;
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
  caseStudyStage.innerHTML = `
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
  const mediaButton = event.target.closest(".case-media[data-full-src]");
  if (!mediaButton || !lightbox || !lightboxImage || !lightboxCaption) return;

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
