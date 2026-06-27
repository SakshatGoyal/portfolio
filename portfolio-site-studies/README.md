# Portfolio Site Capture Archive

This folder contains browser-captured research archives for the supplied portfolio sites.

Each site folder contains:

- `source-url.txt`: original URL supplied for the site.
- `first-project-url.txt`: selected first project or case-study URL when one was available.
- `session.har`: browser network archive for the capture session.
- `01-cover-page/`: captured cover page.
- `02-first-project/`: captured first project/case-study page when available.

Each captured page folder contains:

- `hydrated.html`: the DOM after browser rendering and page hydration.
- `visible-text.txt`: extracted readable text.
- `design-extract.json`: colors, fonts, element samples, links, layout rectangles, and interaction targets.
- `interactions.json`: hover targets and their matching hover screenshots.
- `network/manifest.json`: saved network responses and metadata.
- `network/files/`: downloaded document, CSS, JS, image, media, font, fetch, and XHR responses.
- `screenshots/`: desktop, tablet, mobile, scroll-position, and hover-state screenshots.

Notes:

- `vvichael.com` is a Webflow wrapper around `https://portfolio.vvichael.workers.dev/`, so the cover capture follows that embedded experience.
- Some first project links are external because the portfolio links directly out to a live project rather than a local case-study page.
- This archive is for private design analysis and reference. It should not be redistributed as a cloned site.

High-level capture summary is in `summary.json`.
