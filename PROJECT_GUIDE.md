# Canonical website guide

## Status and boundaries

This repository is the main Sakshat Goyal portfolio website. Make website
changes here; do not create a numbered replacement. The canonical local path is
`/Users/sakshatgoyal/Documents/GitHub/portfolio/website` and the canonical
branch is `main`.

The adjacent `portfolio-content-folder/` contains protected source material.
The adjacent `Archive/` contains historical versions and pre-cleanup material.
Do not modify either unless the user explicitly places it in scope.

## Architecture

- `src/pages/` owns the home page and seven case-study routes.
- `src/drafts/about.astro` preserves the unpublished About page.
- `src/components/`, `src/layouts/`, and `src/styles/` own shared UI behavior.
- `public/` contains every asset required to run and build the website.
- `scripts/` contains validation and asset tooling.

The optional Memory Lane source rebuild reads
`../portfolio-content-folder/homepage-carousel`; generated runtime assets remain
committed in `public/assets/memory-lane/`.

## Working agreement

Preserve supplied content and completed interactions unless the user requests a
change. Use the smallest sufficient edit. For visual work, run the site and
inspect the actual responsive result in the Codex built-in Browser.

Before handing off a change, run:

```sh
git diff --check
npm run check
npm run build
```

Keep `main` clean and synchronized with `origin/main` after finalized work.

For changes to media loading or entry animations, also run the rendered
first-paint checks in `docs/media-first-paint.md`. Source contracts and a passing
build alone cannot detect the visible → hidden → swipe regression.

## About publication hold

About is intentionally absent from production and its navigation. Continue About
work on a local review branch with a localhost preview. Do not push, merge, or
publish that work until the user explicitly finalizes and approves publishing it.
