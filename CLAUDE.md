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

## Architecture

The SPA is **zero-framework**: Vanilla TypeScript + native Custom Elements (Light DOM, no Shadow DOM) + layered vanilla CSS. No React/Vue, no bundler magic beyond Vite. Full authoritative details live in `docs/guides/` — read `architecture_guide.md` and `project_structure.md` before making non-trivial changes; they are kept in sync with the codebase and are more complete than this summary.

### Core data flow (unidirectional, observer-based)

```
User action (checkbox, timer) -> mutate state in src/state/storage.ts
  -> saveState() to localStorage -> renderer.renderAll()
  -> each registered view's refresh() re-renders its innerHTML
```

- **`src/data/planData.ts`** — single source of truth for all curriculum content (modules, schedule, resources, tech stack, quit criteria). Pure data, zero UI logic. **Every item has a static `id` used as a localStorage primary key for completion state — never rename or reassign an existing `id`.**
- **`src/state/storage.ts`** — singleton `AppState` (checked items, resourceFlags, activeTab, theme, pomodoroSettings, pomodoroSessions), persisted to `localStorage` under `STORAGE_KEY`/`THEME_KEY` (`src/constants.ts`).
- **`src/progress.ts`** — pure function `calculateProgress()`: overall % = (deliverables % × 0.6) + (pomodoros % × 0.4); also derives the active sprint (first incomplete) and the recommended "next task".
- **`src/renderer.ts`** — observer registry: `registerRenderListener(cb)` / `unregisterRenderListener(cb)` / `renderAll()`.
- **`src/router.ts`** — hash router (`#/dashboard`, `#/roadmap`, `#/schedule`, `#/resources`, `#/techstack`, `#/quitcriteria`), syncs URL hash, active tab DOM state, and persisted `activeTab`.
- **`src/views/roadmap-view-*.ts`** — one native Custom Element per tab (`<roadmap-view-dashboard>`, `-roadmap`, `-schedule`, `-resources`, `-techstack`, `-quitcriteria`). Each extends `HTMLElement`, registers itself with the renderer in `connectedCallback`, unregisters in `disconnectedCallback`, and implements `refresh()` to rebuild its `innerHTML` and rebind event listeners.
- **`src/actions/backup.ts`** — JSON export/import of full app state, and progress reset.
- **`src/utils/`** — pure helpers: `icons.ts` (SVG string dictionary), `audio.ts` (Web Audio API Pomodoro chime, no mp3 assets), `notification.ts` (browser Notification API), `url.ts`.
- **`src/main.ts`** — bootstrap: load state -> apply theme -> init router -> attach global listeners -> initial `renderAll()`.

### Styling

`src/styles/main.css` declares `@layer reset, base, components, views, utilities;` and imports each `_*.css` partial into its layer. Always use CSS custom properties from `_tokens.css` for colors/spacing rather than hardcoding values; dark/light theme is toggled via `[data-theme]` on `<html>`. See `docs/guides/ui_system_design_guide.md` for the token catalog and icon system.

### Conventions worth preserving

- New tabs/views follow the `roadmap-view-[name].ts` naming and Custom Element lifecycle pattern shown in `architecture_guide.md` (Pattern 2).
- `vite.config.ts` uses `base: './'` — required for correct relative asset paths on GitHub Pages; don't change this without checking the deploy guide.
- Deployment specifics (Pages source config, workflow triggers) are documented in `docs/guides/github_pages_deployment_guide.md`.
- Interaction/UX specs (what each view must do) are documented in `docs/guides/interactive_components_guide.md`.

## Content docs

`docs/content/` holds the actual curriculum text referenced from `README.md` (module guides, schedule, resources, tech stack, quit criteria). These are Vietnamese-language learning materials, separate from the app code — treat edits there as content edits, not code changes.
