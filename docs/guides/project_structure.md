# PROJECT DIRECTORY STRUCTURE

This document provides a detailed overview of the directory structure, file responsibilities, module layout, and codebase organization in the **Applied AI Engineer Roadmap 2026 Tracker** project. All information is accurately synchronized with the latest codebase.

---

## 1. Overview Directory Tree

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions workflow for automated build & deployment to GitHub Pages
├── docs/                           # Documentation folder for technical guides & web application content (Markdown)
│   ├── content/                    # Content documents rendered across web pages
│   │   ├── async_python_guide.md   # Modern Asynchronous Python guide (Part A: Module 0 Chap 1-2 + Up-to-date Python; Part B: Module 12 Optional Chap 3-6)
│   │   ├── online_learning_guide.md# Detailed free online course roadmap covering 13 Master Modules (Module 0 + 10 Core + 2 Optional)
│   │   ├── quit_criteria_guide.md  # Quit Criteria & Sunk Cost Management guide establishing decision matrix thresholds & 4-step daily process
│   │   ├── resources.md            # Directory of free learning resources, tools, and reference links
│   │   ├── schedule.md             # Sample study schedule & 12-week Pomodoro time allocation (373 Pomodoros)
│   │   └── tech_stack.md           # Analysis of 7 AI Engineer tech stack layers for 2026
│   └── guides/                     # Technical developer & AI Agent guides for codebase maintenance & replication
│       ├── architecture_guide.md   # Master blueprint for architecture, tech stack, design patterns & replication steps
│       ├── github_pages_deployment_guide.md # CI/CD deployment guide for GitHub Pages via GitHub Actions
│       ├── interactive_components_guide.md # Product Requirement Document (PRD) & UX interaction specs
│       ├── project_structure.md    # Detailed directory tree & file responsibility specification (This file)
│       └── ui_system_design_guide.md # UI design system specifications, CSS Layers, Tokens & SVG Icons
├── public/                         # Static assets (Served directly without bundler compilation)
│   └── favicon.svg                 # Web application SVG Favicon
├── src/                            # TypeScript application source code
│   ├── actions/                    # Business logic for user data import/export & backup operations
│   │   └── backup.ts               # JSON export backup, JSON import restoration & progress reset handlers
│   ├── data/                       # Pure static business data layer
│   │   ├── planData.ts             # Facade: getSprintModules()/getMetaData()/getTechStackLayers()/getQuitCriteriaData(), picks a bundle by state.lang
│   │   ├── planData.vi.ts          # Vietnamese curriculum content (14 Modules, Resources, 7 Tech Layers, Quit Criteria)
│   │   └── planData.en.ts          # English curriculum content - same ids/shape as planData.vi.ts
│   ├── i18n/                       # UI chrome translation (Vietnamese/English)
│   │   ├── strings.ts              # UI_STRINGS table, one flat key -> string map per language
│   │   ├── index.ts                # t(key, params) lookup + plural(n, vi, enOne, enOther)
│   │   └── dom.ts                  # applyStaticTranslations() - data-i18n sweep for header markup renderAll() doesn't reach
│   ├── state/                      # Application State Management
│   │   └── storage.ts              # State Store singleton - Manages AppState, localStorage & Pomodoro logs
│   ├── styles/                     # Layered CSS system utilizing CSS Custom Properties (Tokens)
│   │   ├── main.css                # CSS Entry point importing partials in specified @layer order
│   │   ├── _tokens.css             # CSS Custom Properties (Colors, Light/Dark themes, Spacing, Fonts)
│   │   ├── _reset-base.css         # CSS Reset & base element styling rules
│   │   ├── _header.css             # Styling rules for App Header & Brand bar
│   │   ├── _tabs.css               # Styling rules for Navigation Tab bar
│   │   ├── _main-layout.css        # Layout styling rules for main container & toast notifications
│   │   ├── _views.css              # Detailed styling rules for all Custom Element Views
│   │   └── _responsive.css         # Media queries optimizing layouts for Mobile & Tablet screens
│   ├── types/                      # TypeScript type definitions and interfaces
│   │   └── appState.ts             # Application-wide interfaces (Task, Module, Schedule, QuitCriteria, AppState, Logs...)
│   ├── utils/                      # Pure Utility functions
│   │   ├── audio.ts                # Pomodoro chime synthesizer using Web Audio API (no external mp3 files)
│   │   ├── icons.ts                # Centralized dictionary of SVG icon strings for the UI
│   │   └── notification.ts         # Web Notification API utility for browser push alerts
│   ├── views/                      # UI Components (Native Light-DOM Web Component Views)
│   │   ├── roadmap-view-dashboard.ts  # <roadmap-view-dashboard> - Overview dashboard with progress stats & next task
│   │   ├── roadmap-view-roadmap.ts    # <roadmap-view-roadmap> - Detailed view for 13 Master Modules, tasks & resources
│   │   ├── roadmap-view-schedule.ts   # <roadmap-view-schedule> - Interactive Pomodoro timer & 12-week schedule
│   │   ├── roadmap-view-resources.ts  # <roadmap-view-resources> - Learning resource catalog with module filter
│   │   ├── roadmap-view-techstack.ts  # <roadmap-view-techstack> - Visual breakdown of 7 AI Engineer tech stack layers
│   │   └── roadmap-view-quitcriteria.ts # <roadmap-view-quitcriteria> - Interactive 13-module decision matrix & 4-step daily process
│   ├── constants.ts                # Shared constants (STORAGE_KEY, THEME_KEY, LANG_KEY, ROUTE_IDS)
│   ├── main.ts                     # Application Bootstrap - Initializes theme/language, router, event listeners & render loop
│   ├── progress.ts                 # Pure Domain Logic - Engine calculating progress %, study hours & next task
│   ├── renderer.ts                 # Central Observer Renderer - Registers listeners & triggers renderAll()
│   ├── router.ts                   # Hash Router - Handles location hash routing (#/route), tab switching & state sync
│   ├── toast.ts                    # Lightweight UI toast notification utility
│   └── vite-env.d.ts               # Vite client type declarations (enables import.meta.env)
├── .gitignore                      # List of files/folders excluded from Git version control (node_modules, dist)
├── index.html                      # Main HTML Shell (Header, Nav Tabs, View Containers & Toast container)
├── package.json                    # Project configuration, npm scripts (dev, build, preview) & devDependencies
├── package-lock.json               # Lockfile specifying exact versions of npm dependencies
├── README.md                       # Main project overview & AI Engineer 2026 roadmap document
├── tsconfig.json                   # TypeScript compiler configuration (Strict mode, ES2022 target)
└── vite.config.ts                  # Vite bundler configuration (defines base: './' for GitHub Pages deployment)
```

---

## 2. Directory Responsibilities and Details

### 2.1. `.github/` Directory
- **`.github/workflows/deploy.yml`**: Automated CI/CD pipeline built with GitHub Actions. On every `push` to the `main`/`master` branch, the workflow executes `npm ci`, `npm run build`, and deploys the `dist/` bundle to GitHub Pages.

### 2.2. `docs/` Directory
Divided into 2 distinct subdirectories according to purpose:

#### 📂 `docs/guides/` (Technical developer & AI Agent guides)
- **`architecture_guide.md`**: Master blueprint covering application architecture, tech stack, design patterns, and codebase replication steps.
- **`github_pages_deployment_guide.md`**: CI/CD setup guide for automated Vite SPA deployment to GitHub Pages via GitHub Actions.
- **`interactive_components_guide.md`**: Product Requirement Document (PRD) & UX specs describing component lifecycles, user flows, and state contracts.
- **`project_structure.md`**: This document, specifying directory layout and individual file responsibilities.
- **`ui_system_design_guide.md`**: UI design manual covering CSS tokens, CSS `@layer` structure, and SVG icon dictionary.

#### 📂 `docs/content/` (Web application content documentation)
- **`async_python_guide.md`**: Comprehensive Async Python reference guide (Part A: Module 0 Essentials Chap 1-2 + Up-to-date Python; Part B: Module 12 Optional Advanced Chap 3-6).
- **`online_learning_guide.md`**: Detailed breakdown of 13 Master Modules (Module 0 + 10 Core + 2 Optional), recommended video courses, and hands-on exercises.
- **`quit_criteria_guide.md`**: Comprehensive guide to Sunk Cost Management, tripwire mechanisms, 13-module warning triggers, and pivot execution protocols.
- **`resources.md`**: Catalog of free learning tools, cheat sheets, repositories, and documentation links.
- **`schedule.md`**: 12-week sample study schedule allocating 373 Pomodoro sessions.
- **`tech_stack.md`**: Deep dive into the 7 AI Engineer tech stack layers for 2026 (Model Layer, Agent Framework, RAG & Vector DB, LLMOps, Client Integration, Observability & Guardrails, Cloud Deployment).

### 2.3. `public/` Directory
Contains static assets served as-is without processing or compilation by Vite:
- **`favicon.svg`**: Web application logo icon displayed in the browser tab.

### 2.4. `src/` Directory (Application Source Code)
#### `src/actions/`
Contains business actions for data import/export:
- **`backup.ts`**: Provides `exportBackup()`, `importBackup()`, and `resetProgress()` functions allowing users to backup application state to JSON, restore state, or reset progress.

#### `src/data/`
- **`planData.vi.ts`** / **`planData.en.ts`**: Source of truth for static business data, one file per language with identical `id`s: 14 Master Modules (`SPRINT_MODULES`), Resources (nested in each module's `resources`), 7 Tech Stack Layers (`TECH_STACK_LAYERS`), and the Quit Criteria Decision Matrix (`QUIT_CRITERIA_DATA`).
- **`planData.ts`**: Thin facade exposing `getSprintModules()` / `getMetaData()` / `getTechStackLayers()` / `getQuitCriteriaData()`, selecting a bundle by `state.lang`. Also runs a dev-only check comparing both files' `id` sets and logging any drift.

#### `src/i18n/`
- **`strings.ts`**: `UI_STRINGS` - a flat, dot-namespaced key -> string map for each language, covering header chrome, toasts, and every hardcoded label in the six views.
- **`index.ts`**: `t(key, params?)` looks up the current language's string (falling back to Vietnamese, then the raw key) with `{param}` interpolation; `plural(n, vi, enOne, enOther)` picks an English singular/plural form (Vietnamese has no plural inflection).
- **`dom.ts`**: `applyStaticTranslations()` sweeps `[data-i18n]` / `[data-i18n-attr]` elements in `index.html`, and updates `document.title` + the meta description. Registered as a render listener in `main.ts` since `renderAll()` only repaints the six Custom Elements, not the static header/nav markup.

#### `src/state/`
- **`storage.ts`**: Manages state storage. Reads and persists user data (`checked`, `activeTab`, `theme`, `lang`, `pomodoroSessions`) to `localStorage`.

#### `src/styles/`
Modular CSS architecture organized into partials and connected via `@layer`:
- **`main.css`**: Entry point importing all partials and declaring layer order `@layer reset, base, components, views, utilities;`.
- **`_tokens.css`**: Declares global CSS Custom Properties for color schemes, Light/Dark themes, spacing, font families, and z-indices.
- **`_reset-base.css`**: Normalizes HTML elements and base typography styling.
- **`_header.css`**: Layout and styling rules for the App Header, Theme Switcher button, and Language toggle button.
- **`_tabs.css`**: Layout and styling rules for the Navigation Tab bar.
- **`_main-layout.css`**: Layout container styling for view wrappers.
- **`_views.css`**: Styling rules for each individual Custom Element view.
- **`_responsive.css`**: Media queries optimizing layout responsiveness across mobile and tablet devices.

#### `src/types/`
- **`appState.ts`**: TypeScript interfaces and type definitions providing type safety across the entire application.

#### `src/utils/`
Pure utility modules containing no state:
- **`audio.ts`**: Utilizes the Web Audio API to synthesize alert chimes for Pomodoro completion without requiring external `.mp3` files.
- **`icons.ts`**: Dictionary of SVG icon strings used throughout the user interface.
- **`notification.ts`**: Handles browser notification permissions and triggers Web Notification alerts when Pomodoro sessions end.

#### `src/views/`
Contains 6 Native Custom Elements (Light-DOM Web Components) representing the 6 main UI tabs:
- **`roadmap-view-dashboard.ts`**: Dashboard overview showing overall progress %, stats cards, active Sprint, and Next Task recommendations.
- **`roadmap-view-roadmap.ts`**: Detailed 14-Module roadmap showing objectives, knowledge to load, and the deliverables checklist.
- **`roadmap-view-schedule.ts`**: Interactive Pomodoro timer with session history and today's focus metrics.
- **`roadmap-view-resources.ts`**: Learning resource catalog supporting search and module filtering.
- **`roadmap-view-techstack.ts`**: Visual breakdown of the 7 AI Engineer tech stack layers.
- **`roadmap-view-quitcriteria.ts`**: Interactive 14-module decision matrix and 4-step daily process view with real-time search filtering.

#### Root Files of `src/`
- **`constants.ts`**: System-wide constants (`STORAGE_KEY`, `THEME_KEY`, `ROUTE_IDS`).
- **`main.ts`**: Application entry point responsible for initializing state, applying themes, setting up router, attaching event listeners, and triggering initial rendering.
- **`progress.ts`**: Pure progress calculation logic (Weighted model: 60% Deliverables + 40% Pomodoros), computing completed study hours and next task.
- **`renderer.ts`**: Observer pattern renderer registering callbacks and triggering `renderAll()` whenever state mutates.
- **`router.ts`**: Hash router managing location hash changes (`#/dashboard`, `#/roadmap`, `#/schedule`, `#/resources`, `#/techstack`, `#/quitcriteria`) and state synchronization.
- **`toast.ts`**: Lightweight toast notification banner utility.

---

## 3. Architectural Conventions

1. **Component Isolation**:
   - View modules are named `roadmap-view-[name].ts` in `src/views/`.
   - Each view defines a native Custom Element registered under `<roadmap-view-[name]>`.
2. **CSS Layering**:
   - All CSS partial files reside in `src/styles/` prefixed with `_[name].css`, except for `main.css`.
   - Always reference CSS Variables from `_tokens.css` instead of hardcoding static hex/rgb color values.
3. **Data Protection & Primary Keys**:
   - `src/data/planData.vi.ts` / `planData.en.ts` contain zero UI logic or user state; `planData.ts` is a pure accessor facade over them.
   - Task and item `id`s must remain static and unchanged, as they function as primary keys for `localStorage` persistence — and must be identical in both language files, since the two are read interchangeably depending on `state.lang`.
4. **UI Text vs. Curriculum Data**:
   - Static, non-curriculum UI text (buttons, toasts, headings, placeholders) lives in `src/i18n/strings.ts` behind the `t()` lookup, not hardcoded in view templates.
   - Curriculum content (module/task/resource text) lives in the `planData.*.ts` files, not in `src/i18n/`.
