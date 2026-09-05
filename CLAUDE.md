# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A bilingual (Vietnamese-first) learning roadmap for becoming an "Applied AI Engineer" in 2026, packaged as a static content site (`docs/`) plus an **Interactive Web Tracker** SPA (`src/`) for tracking progress through the curriculum, running Pomodoro study sessions, and managing a "Quit Criteria" decision matrix.

## Commands

```bash
npm install       # install deps
npm run dev       # start Vite dev server with HMR
npm run build     # tsc --noEmit type-check, then vite build -> dist/
npm run typecheck # tsc --noEmit only
npm run preview   # preview the production build locally
```

There is no test suite and no linter configured in this repo — `npm run build` (type-check + bundle) is the only verification gate. CI (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` on every push to `master` that touches `src/`, `public/`, `index.html`, or the build config, then deploys `dist/` to GitHub Pages.

## Where the docs are

`docs/guides/` is authoritative and kept in sync with the codebase — more complete than anything summarized here. Read the relevant guide before any non-trivial change.

| Need | Read |
| --- | --- |
| Architecture, stack, design patterns, view lifecycle | `docs/guides/architecture_guide.md` |
| Directory tree, per-file responsibilities | `docs/guides/project_structure.md` |
| CSS tokens, `@layer` order, icons, page layouts | `docs/guides/ui_system_design_guide.md` |
| What each view must do (UX spec) | `docs/guides/interactive_components_guide.md` |
| GitHub Pages deploy, `vite.config.ts` base path | `docs/guides/github_pages_deployment_guide.md` |

## Hard rules

- Never rename or reassign an existing `id` in `src/data/planData.vi.ts` / `planData.en.ts` — `id` is the localStorage primary key for completion state.
- Curriculum edits touch both language files together; their `id` sets must not drift (a dev-only check in `src/data/planData.ts` logs drift).
- Read curriculum through the `planData.ts` facade (`getSprintModules()` / `getMetaData()` / `getTechStackLayers()` / `getQuitCriteriaData()`), never import the arrays directly.
- `vite.config.ts` keeps `base: './'` — changing it breaks asset paths on GitHub Pages.
- Edits under `docs/content/` are content edits (Vietnamese learning material), not code changes.
