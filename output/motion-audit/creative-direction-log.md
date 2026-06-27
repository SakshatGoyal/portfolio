# Portfolio Motion Direction Log

This is the current motion direction for the portfolio experience. It is a design record and critique surface, not a completion certificate.

## Creative Goal

The portfolio should feel measured, editorial, and precise. Motion should support the viewer's reading order: first orientation, then evidence, then deeper inspection. Nothing should feel like a decorative animation layer placed on top of the work.

The current direction is:
- The shell establishes place before content asks for attention.
- Selected Work appears as a set of structured records, not as generic cards.
- Case pages read like essays: argument first, visual proof second, supporting evidence on scroll.
- Route changes should clarify location without making the right-side navigation feel unstable.
- Hover should confirm clickability without changing layout or adding ornamental effects.
- The motion system should have unity, not uniformity: related timing and restraint, but different treatments for metadata, reading text, media, captions, and route feedback.
- Typography should stay in one family. The site uses Fustat throughout; hierarchy comes from weight, scale, spacing, and motion, not switching to mono or alternate sans families.

## End-To-End Journey

| Moment | Viewer Need | Motion Responsibility |
|---|---|---|
| URL entry | Understand whose site this is and where to look | Header and right navigation fade-rise first; selected-work content waits until the shell is readable. |
| First scan | Compare the four project records | Project records reveal as paired evidence rows: label and thumbnail arrive close together, then the claim and year close each record. This avoids isolated project-name fragments. |
| Choosing a project | Receive feedback without being lied to | Target nav item enters a pending state; active state updates only after the route renders. The next route now appears before the stage goes visually dead. |
| Case page opening | Read the argument, then inspect the proof | Heading now uses a small editorial rise with opacity. The hero follows 260ms later as a fade-only proof image so it does not compete with an unresolved title. |
| Case page reading | Move through evidence without interruption | Intro, meta, section headings, copy, media, and captions stay gated until the heading/hero opening beat has resolved, then reveal on scroll. |
| Image inspection | Inspect a piece of evidence | Non-hero media opens a focused inspection surface with its own quiet opacity/settle motion. Hero images establish the case and do not advertise zoom/inspection. The media radius has already settled to 6px before hover. |
| Returning or switching | Keep orientation | Existing route exits quietly; the route swap happens early enough that the next route has a readable anchor instead of a blank interval. Shell/nav stays calm. |
| About route | Shift from work evidence to bio | Side bio begins receding immediately on route intent; main bio paragraphs wait until the panel bio has mostly collapsed, then own the stage without duplicate content. |
| Exit/support actions | Know what is actually available | Contact labels remain visually placed at the panel bottom but are intentionally non-interactive until real destinations are supplied. |
| Mobile navigation | Navigate without shadows or false depth | Drawer is full-height, slides from the right, and uses the same nav states without shadow. |
| Reduced motion | Preserve access and hierarchy | All hidden/moving content appears immediately; hover remains simple. |

## Element Inventory And Motion Role

| Element | Role | Current Motion Direction |
|---|---|---|
| Fixed header: name | Site identity / anchor | First-load fade-rise, then stable. |
| Fixed header: role | Context label | Follows name with a slight delay, then stable. Copy reads "Product Designer"; the first identity read must be typo-free. |
| Mobile menu button | Navigation affordance | Joins first-load shell motion; line rotation handles open/close. In the open-drawer state, it remains a flat white line control rather than a grey hover tile. |
| Right side panel | Persistent navigation region | Desktop panel remains stable. Direct children enter once with the shell. |
| Primary nav links | Route control | Rest radius 2px, hover radius 6px, pressed radius 0px. Pending state appears during route transition. |
| Project nav links | Case route control | Same nav behavior; no separate decorative motion. |
| Side bio card | Persistent context | Present on work/case pages; begins its exit as soon as About is requested, then collapses because the stage owns that content. |
| Contact labels | Exit/support placeholders | Anchored at panel bottom; non-interactive and excluded from hover/pressed nav motion until real LinkedIn, resume, email, and phone targets are supplied. |
| Selected-work stage | Landing content | Route-level soft entry. Initial URL entry waits briefly after the shell. |
| Selected-work tile label | Project identity | Reveals in a row-paired cadence, close to its thumbnail, so labels do not sit on the page as unsupported fragments. |
| Selected-work thumbnail | Main click target / evidence | Resolves just after its label with a small scale/clip change and no vertical travel. Hover rounds from 2px to 8px; press tightens to 6px. |
| Selected-work title | Project claim | Fades in place after the thumbnail has begun, but early enough that the row reads as one record. It no longer rises or uses a clip mask, because mid-animation clipped letter fragments looked inelegant. Line-height and descender space are set to avoid clipped text at every tested width. |
| Selected-work year | Secondary metadata | Reveals last with the same quiet metadata language as the label, after the claim begins to read. |
| About stage | Autobiographical route | Route-level entry stays quiet while the side-panel bio hands off to the stage. |
| About paragraphs | Bio content | Deferred keyframe reveal after the panel bio recedes; paragraph-level drift and opacity with modest stagger, no scale, because prose should not behave like media. |
| Case stage | Essay container | Route-level entry is intentionally small so it does not fight child motion. |
| Case heading | Case argument | Small `18px -> 0` editorial rise with quicker opacity and longer physical settling. The earlier `translateY(70%)` movement was rejected after measured frames showed the heading colliding with the hero and producing chopped text. |
| Case hero image | First visual proof | Fade-only entry. It stays spatially stable so it does not use the same physical language as later inspection media. Starts 260ms after heading. Not a lightbox trigger and no hover-radius interaction. |
| Case intro | Opening explanation | Scroll reveal, delayed until the opening title/hero beat has resolved; paragraph-level drift without scaling so prose reads in rather than arriving as one block. |
| Case meta rows | Structured context | Row line resolves while label/value text rises independently with a small internal offset. This is a table-like reveal, not body-copy motion. |
| Case section headings | Reading landmarks | Small lateral editorial entrance; not the same rise as body copy. |
| Case copy blocks | Main reading material | Paragraph/list children drift in quietly; the copy block itself does not move as a single card-like object. |
| Case statements | Emphasized argument | Shorter child-level drift than body copy; more declarative, less theatrical. |
| Case media images | Visual evidence | Scroll reveal uses opacity, subtle scale, radius, and light clipping. Wide, row, and media-set images use different amounts of lift/clip so evidence does not repeat one identical entrance. Hover moves to 12px. |
| Case captions | Supporting interpretation | Remain real Fustat text and fade only; never blended into media and never use the same physical motion as images. |
| Lightbox | Focused media inspection | Opens from an explicit initial state instead of popping in: backdrop, surface, and image settle together. Close control is icon-only and follows the same line-button language as the mobile menu. |
| Mobile drawer | Full-height navigation panel | Slides in from right as an opaque white surface; no shadow and no panel fade during route changes. Children keep shell/nav language. The close control remains visually flat so the drawer does not introduce a card-like control surface. |

## Current Timing Decisions

| Motion | Timing |
|---|---|
| Shell first-load | 420ms opacity / 520ms transform, short child delays. |
| Initial selected-work delay | First label starts at 180ms after initial route render. Records now use row-paired delays: row offset 170ms, column offset 40ms, thumbnail 55ms after label, claim 90ms after thumbnail, year 250ms after thumbnail. Route returns keep a short 20ms base delay. |
| Selected-work label/year | 260ms metadata fade. |
| Selected-work thumbnail | 580ms in-place scale/clip resolve, beginning just after the label so identity and evidence pair together. |
| Selected-work title | 380ms title fade after the thumbnail has begun, not after it fully settles. |
| Selected-work year | Begins after the claim layer as the record close. |
| About route handoff | Panel bio collapse starts on route intent. Stage paragraphs wait 220ms after About render, then animate with 620ms keyframes and a 130ms paragraph stagger. |
| Case heading | 360ms opacity / 680ms transform from `translateY(18px)` to `0`. Opacity uses the faster editorial rise curve so route swaps do not leave a blank stage. |
| Case hero | 400ms opacity, 600ms transform property present but no visible transform value because hero scale/radius were intentionally unspecified. |
| Case heading-to-hero offset | 260ms. |
| Route swap delay | 90ms after route intent. The old route begins exiting, then the new route renders before the stage loses all readable content. |
| Case intro/copy reveal | Gated until 940ms after the case opening delay on desktop and 860ms on mobile/drawer widths. Intro children use 720ms/520ms drift+opacity; copy children use 620ms/420ms; internal child delays create prose rhythm without moving whole text blocks. |
| Case metadata reveal | 520ms row line, 480ms/360ms label/value child reveal. |
| Case section heading reveal | 500ms transform, 360ms opacity, lateral -10px to 0. |
| Case caption reveal | 360ms opacity only. |
| Case media reveal | Base media resolves from subtle scale/clip/radius 0px to radius 6px over roughly 700-780ms depending on layout role. |
| Case image hover | 6px to 12px over 400ms. |
| Lightbox open | Backdrop/surface opacity resolves over 220-240ms; surface settles from `translateY(10px) scale(0.992)` to `0/1` over 320ms; image resolves from opacity 0 and scale 0.992 over 260-360ms. |
| Lightbox close | Backdrop/surface fade over 220ms; surface settles out over 260ms; image softens out without introducing a different direction of travel. |
| Mobile drawer open | Panel moves over 260ms transform as an opaque white surface; close control stays white with 2px radius even if the pointer remains over it after tap. |

## Current Judgment Calls

- The originally specified `translateY(70%)` heading movement is rejected. A measured opening-frame audit showed the transformed heading overlapping the hero area and creating visibly chopped text at 520ms.
- The case heading now uses a small editorial rise with opacity. It keeps the intended sense of entry without making the title look as if it is emerging from behind the image.
- Route swaps now render the next route sooner, and case headings begin immediately on route navigation. This removes the earlier dead white interval between Selected Work and case pages.
- The hero image no longer rises or scales during entry. It fades in after a longer 260ms offset so the opening reads as "argument first, evidence second" without making the hero compete with an unresolved heading.
- The case scroll reveal is now gated until the opening beat has effectively resolved, so intro/meta content does not compete with the title and hero on tall screens.
- On mobile case openings, the intro remains held until after the title and hero have both settled. This prevents heading, hero, intro, and separator from all asking for attention in the first second.
- Mobile case intros now reveal earlier once the hero has resolved. The previous longer hold left faint, unreadable intro text visible at the bottom of the first viewport.
- Selected Work now participates in first-load choreography; it is not treated as a static exception to the rest of the site.
- On direct URL entry, Selected Work now waits longer than route returns. The first project should not ask for attention before the shell has established identity and navigation.
- Selected Work now uses row-paired evidence reveal. A later audit showed that the earlier "all labels first" direction left the lower project names visible without thumbnails at 180ms, which felt like unfinished fragments. Labels now stay close to their thumbnails, while claims still close each record.
- Selected Work remains two-column from 700px through 1024px. This avoids the earlier giant single-column tablet/wide-mobile layout where one image dominated the first viewport too early.
- On short desktop viewports, Selected Work uses a tighter vertical rhythm so the fourth project is still visibly present without changing the normal desktop composition.
- On phone-width Selected Work, each project record gets a clear inter-record pause after its year. The previous 8px gap made separate projects read like one continuous block.
- Selected Work no longer uses vertical travel for thumbnails or titles. Thumbnails resolve in place; claims fade in place. This avoids making the landing records feel like the same motion family as case-page scroll content.
- A clipped project-title reveal was tested and rejected because mid-animation frames produced broken-looking partial letterforms.
- Metadata, captions, reading copy, section headings, and media no longer share the same reveal pattern. The family resemblance is timing restraint, shared curves, and editorial calm, not identical transforms.
- Case-page motion now follows unity without uniformity: title, hero, prose, metadata, section headings, captions, and media each have a distinct job while sharing the same restrained editorial timing family.
- Prose no longer animates as one rectangular block. Intro, copy, and statement children move internally so reading content has rhythm without behaving like media.
- Media reveal no longer relies on a repeated large lift. The current system uses smaller layout-aware scale/clip/radius changes so images feel like evidence settling into place.
- The hierarchy rule is now explicit: only media uses scale; long reading text uses drift; captions fade only; metadata behaves like structured rows; the case heading is a masked title entrance.
- Selected Work now holds thumbnails just long enough for the label to establish identity, but not long enough to orphan labels. This keeps the image from becoming the only event without making the page feel unfinished.
- Route-level movement is intentionally small because the child elements already carry the meaningful motion.
- The About route uses a pre-render handoff state for the side bio, and the stage paragraphs now wait until the side bio has mostly collapsed. Earlier audits showed the same bio fully visible in both places at the first About frame.
- About prose uses keyframes rather than normal transitions because the hidden-to-visible route swap caused the second paragraph to snap to full opacity. The keyframe uses `animation-fill-mode: both` so delayed prose remains hidden during its delay.
- The About route now owns the actual `#about` identity. The persistent side-panel bio uses `#side-about`, so browser hashes, route logic, and audit selectors no longer confuse supporting bio context with the About page itself.
- The right panel remains calm on desktop. It is the orientation system, not a content performer.
- The mobile drawer close control is intentionally flat in the open state. The previous grey hover tile made the close button feel like a separate card and conflicted with the otherwise shadowless, flat navigation language.
- Contact actions are not being faked. Without confirmed destinations, they remain quiet labels rather than live links with placeholder hashes.
- Mono and alternate-sans typography were removed from active case/lightbox surfaces. The portfolio should feel like one editorial system, not a code/demo artifact.
- The lightbox close control is not a text button. It uses a minimal line icon so image inspection does not introduce a generic app-control artifact.
- The lightbox previously had a closing transition but no measured opening transition; at the first open sample it was already opacity 1 and transform none. It now uses a separate `is-open` state so the open interaction is actually observable and stylistically distinct from scroll-rise motion.
- The header role label was corrected to "Product Designer." First-viewport identity copy is part of the designed experience, not a placeholder detail.
- Hero images no longer open the lightbox. They act as opening proof, while later non-hero media remains available for focused inspection.

## Verification Sources

- Live computed inventory: `output/motion-audit/element-inventory.json`
- Creative audit screenshots: `output/playwright/creative-audit-31/`
- Motion role sample data: `output/playwright/creative-audit-31/motion-samples.json`
- Non-hero media radius verification: `output/playwright/creative-audit-31/nonhero-media-radius-check.json`
- Selected Work motion verification: `output/playwright/creative-audit-33/selected-work-motion-samples.json`
- Selected Work rejected clip-mask evidence: `output/playwright/creative-audit-32/selected-820ms.png`
- Expanded journey audit across all four cases, mobile drawer, and lightbox: `output/playwright/creative-audit-34/journey-audit.json`
- Mobile drawer close-control verification: `output/playwright/creative-audit-35/phone-nav-open-state.json`
- Rejected case-heading overlap evidence: `output/playwright/creative-audit-37/case-opening-stitching.json`
- Revised case-opening stitching verification: `output/playwright/creative-audit-38/case-opening-stitching.json`
- Route identity and transition verification after moving `#about` to the route stage: `output/playwright/creative-audit-40/route-transition-audit.json`
- Mobile drawer opaque route verification: `output/playwright/creative-audit-42/mobile-drawer-opaque-route-audit.json`, `output/playwright/creative-audit-43/mobile-drawer-route-summary.json`
- Motion-direction-33 role variation verification: `output/playwright/creative-audit-44/case-motion-role-samples.json`, `output/playwright/creative-audit-44/case-motion-cross-route-audit.json`
- Motion-direction-34 Selected Work and mobile case opening verification: `output/playwright/creative-audit-46/focused-motion-samples.json`, `output/playwright/creative-audit-46/focused-motion-summary.json`
- Motion-direction-36 route-stitching verification: `output/playwright/creative-audit-49/route-heading-timing.json`, `output/playwright/creative-audit-49/route-heading-timing-summary.json`
- Motion-direction-37 lightbox opening verification: `output/playwright/creative-audit-50/lightbox-current-summary.json`, `output/playwright/creative-audit-50/lightbox-updated-summary.json`, `output/playwright/creative-audit-50/lightbox-reduced-motion.json`, `output/playwright/creative-audit-50/updated-open-120ms.png`, `output/playwright/creative-audit-50/updated-open-420ms.png`
- Motion-direction-38 Selected Work row-paired entry verification: `output/playwright/creative-audit-51/journey-samples.json`, `output/playwright/creative-audit-52/selected-entry-final.json`, `output/playwright/creative-audit-52/final-selected-entry-0520ms.png`, `output/playwright/creative-audit-52/final-selected-entry-0900ms.png`
- Motion-direction-42 About handoff verification: `output/playwright/creative-audit-53/about-route-audit.json`, `output/playwright/creative-audit-53/about-route-verified.json`, `output/playwright/creative-audit-53/verified-desktop-selected-to-about-0520ms.png`
- Mobile case-opening screenshots: `output/playwright/creative-audit-31/phone-case-open-1000.png`, `output/playwright/creative-audit-31/phone-case-open-1600.png`
- About handoff verification: `output/playwright/creative-audit-28/about-handoff.json`
- Selected Work spacing verification: `output/playwright/creative-audit-25/selected-work-spacing.json`
- Focused short-desktop selected-work check: `output/playwright/creative-audit-23/short-desktop-selected.json`
- Phone selected-work screenshot: `output/playwright/creative-audit-25/phone-selected.png`
- Tablet selected-work screenshot: `output/playwright/creative-audit-25/tablet-selected.png`
- Desktop selected-work screenshot: `output/playwright/creative-audit-25/desktop-selected.png`
- Short desktop selected-work screenshot: `output/playwright/creative-audit-25/short-desktop-selected.png`
- About handoff screenshot: `output/playwright/creative-audit-28/desktop-selected-to-about-260.png`
