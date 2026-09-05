# UI SYSTEM DESIGN & COMPONENT LAYOUT GUIDE

This document serves as the official **UI System Design & Component Layout Guide** for developers and AI Agents. Its purpose is to specify the design language, design tokens, component dictionary, **layout assembly, and component integration across all views/pages**.

This document focuses 100% on **User Interface (UI), Styling, and Layout Assembly**. Software architecture, state management, and data flow specifications are documented separately in [architecture_guide.md](./architecture_guide.md).

---

## 1. Visual Design Philosophy & Tokens

### 1.1. Modern Dark-First Aesthetic with Light Mode Fallback
- **Primary Aesthetic**: Sleek Dark-First design tailored for developer and AI tech applications. Features a deep dark background (`#0b0f19`), elevated contrast cards (`#111827`), semi-transparent borders (`rgba(255, 255, 255, 0.1)`), glassmorphic blur effects, and vibrant color gradients.
- **Light Mode Support**: Seamless color scheme transitions via CSS Custom Properties activated when `data-theme="light"` is present on the root `<html>` element.

### 1.2. Color Palette System (`_tokens.css`)

All color variables are declared as CSS Custom Properties in `src/styles/_tokens.css`:

| Token Variable | Dark Mode (Default) | Light Mode | Visual Context & Usage |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#0b0f19` | `#f8fafc` | Main body background |
| `--bg-card` | `#111827` | `#ffffff` | Surface card background (Card, Modal, Header, Container) |
| `--bg-card-hover` | `#1f2937` | `#f1f5f9` | Surface card background on hover |
| `--bg-glass` | `rgba(17, 24, 39, 0.75)` | `rgba(255, 255, 255, 0.85)` | Glassmorphism background for sticky header (`backdrop-filter: blur(12px)`) |
| `--border-color` | `rgba(255, 255, 255, 0.1)` | `rgba(0, 0, 0, 0.1)` | Card, Input, and Separator border color |
| `--border-color-strong` | `rgba(255, 255, 255, 0.2)` | `rgba(0, 0, 0, 0.18)` | Hover state and active element border color |
| `--text-primary` | `#f9fafb` | `#0f172a` | Primary text (Headings, titles, primary content) |
| `--text-secondary` | `#9ca3af` | `#475569` | Secondary text (Descriptions, subtitles, unactive tabs) |
| `--text-muted` | `#6b7280` | `#94a3b8` | Muted text (Metadata, footers, timestamps) |
| `--primary` | `#6366f1` (Indigo) | `#4f46e5` | Brand color (Active tab indicator, primary buttons) |
| `--primary-hover` | `#4f46e5` | `#4338ca` | Primary button hover state |
| `--primary-glow` | `rgba(99, 102, 241, 0.35)` | `rgba(79, 70, 229, 0.2)` | Glowing box-shadow effect |
| `--accent-emerald` | `#10b981` (Emerald) | `#059669` | Success / 100% completion indicator (Checked task, success toast) |
| `--accent-amber` | `#f59e0b` (Amber) | `#d97706` | Warning / medium progress indicator (Pending status) |
| `--accent-rose` | `#f43f5e` (Rose) | `#f43f5e` | Danger action indicator (Data reset button, error toast) |
| `--accent-sky` | `#0ea5e9` (Sky) | `#0ea5e9` | Info indicator (Info toast, external links) |
| `--accent-purple` | `#a855f7` (Purple) | `#a855f7` | Secondary accent gradient paired with Primary |

### 1.3. Border Radius, Shadows & Transition Tokens

```css
/* Radius Tokens */
--radius-sm: 6px;     /* Small Badges, Tags, Small Buttons */
--radius-md: 12px;    /* Standard Buttons, Inputs, Action Icons */
--radius-lg: 18px;    /* Container Cards, Sprint Cards, Metric Cards */
--radius-full: 9999px;/* Circular Progress Rings, Status Pill Badges */

/* Shadow Tokens */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.4);

/* Transition Tokens */
--transition-fast: 0.15s ease;    /* Hover states, Button clicks */
--transition-normal: 0.25s ease;  /* Tab switches, Card transitions, FadeIn animations */
```

---

## 2. Layered CSS File Breakdown

All application stylesheets are split into dedicated partials in `src/styles/` and imported into `main.css` via `@layer` directives:

```text
src/styles/
├── main.css        # Entry point declaring layer order @layer (reset, base, components, views, utilities)
├── _tokens.css     # CSS Variables (Colors, Fonts, Spacing, Radius, Shadows) -> @layer base
├── _reset-base.css # CSS Reset & Body/Typography rules -> @layer reset
├── _header.css     # Header Bar layout & component styles -> @layer components
├── _tabs.css       # Navigation Tab Bar layout & component styles -> @layer components
├── _main-layout.css# Main layout container & Toast Notification styles -> @layer components
├── _views.css      # Detailed UI component styles across Views -> @layer views
└── _responsive.css # Media query breakpoints for Mobile & Tablet screens -> @layer utilities
```

---

## 3. UI Component Dictionary

### 3.1. Header Bar Component (`.app-header`)
- **Position**: Sticky at top (`position: sticky; top: 0; z-index: 100;`).
- **Layout**: Flexbox space-between (`justify-content: space-between`), padding `0.85rem 1.5rem`.
- **Children**:
  - `header-brand`: 38x38px gradient Logo block + Brand Title ("Applied AI Engineer Roadmap 2026") and Subtitle ("Enterprise Knowledge AI Assistant").
  - `header-actions`: Quick action button group (`.action-btn` Export, Import, `.action-btn-danger` Reset), Language Toggle button (`.lang-toggle-btn`, shows the language you'd switch *to*), and Theme Toggle button (`.theme-toggle-btn`).

### 3.2. Navigation Tab Bar Component (`.nav-tabs-container`, `.nav-tab`)
- **Position**: Directly below Header Bar (`border-bottom: 1px solid var(--border-color)`).
- **Layout**: Smooth horizontal scroll (`overflow-x: auto; scrollbar-width: none`). Centered container `.nav-tabs` (`max-width: 1200px`).
- **Tab States (`.nav-tab`)**:
  - Unactive: `--text-secondary` font color, transparent background.
  - Active: `--primary` font color, active indicator line (`border-bottom: 3px solid var(--primary)`).
  - Badge (`.tab-badge`): Pill badge displaying overall progress percentage, glowing with `var(--primary-glow)` when active.

### 3.3. Metric Summary Card Component (`.metric-card`)
- **Layout**: Flexbox block (`align-items: center; gap: 1.25rem;`), padding `1.25rem 1.5rem`, `--bg-card` background, `--border-color` border, `--radius-lg` border radius.
- **Children**:
  - `metric-icon`: 48x48px rounded square containing an SVG icon with metric-specific accent background (Trophy, Target, Pomodoro, Clock).
  - `metric-info`: Contains `metric-value` (Bold 1.6rem text) and `metric-label` (Secondary 0.8rem text).

### 3.4. Progress Overview Card Component (`.progress-card`)
- **Layout**: Card block with `--bg-card` background, `--radius-lg` border radius, padding `1.5rem`.
- **Children**:
  - `progress-header`: Project title + Emerald completion percentage label (`font-weight: 800; font-size: 1.25rem`).
  - `progress-bar-bg`: 12px pill-shaped track background.
  - `progress-bar-fill`: Overlay bar filled with an Indigo `--primary` to Emerald `--accent-emerald` gradient, dynamically sized via `--progress` CSS property.

### 3.5. Sprint Card & Task Checklist Component (`.sprint-card`, `.task-item`)
- **Sprint Card Layout**: Card container displaying Sprint details, including Header with Status Badge ("Not Started", "In Progress", "Completed") and Body with learning goals + deliverables checklist.
- **Task Checklist Item (`.task-item`)**:
  - Task row with custom checkbox (`.task-checkbox`), task title, short description, estimated Pomodoro sessions, and Hashtag list (`.task-tag`).
  - When checked (`.task-item.checked`): Strikethrough text (`line-through`), opacity reduced to `0.7`, background shaded with subtle green tint `rgba(16, 185, 129, 0.05)`.

### 3.6. Interactive Pomodoro Widget Component (`.pomodoro-card`)
- **Layout**: 2-column or centered timer widget container.
- **Children**:
  - Large digital clock display (3.5rem `font-weight: 800`).
  - SVG Progress Ring (`svg.progress-ring`) wrapping countdown digits.
  - Action button row (Start, Pause, Reset) with high contrast styling.
  - Preset duration selection cards (25/5 min, 50/10 min).
  - Completed Pomodoro session history table.

### 3.7. Resource Card Grid Component (`.resource-card`)
- **Layout**: Learning resource card with category badge (`Video Course`, `Official Docs`, `Code Repo`), Module association badge (`Module X`), title, description, and external link button (`.btn-resource-primary`).
- **Module Association Badge (`.task-tag--primary`)**: Displays the specific Module number (`Module 1`, `Module 8`, `Module 11`) adjacent to the resource type badge, preventing ambiguity when resources are referenced across multiple modules in the "All Modules" view.
- **Star Bookmark Button (`.btn-flag-resource`)**: Star button at top-right corner to toggle favorite resources.

### 3.8. Tech Stack Ecosystem Layer Cards (`.tech-layer-card`, `.tech-table`)
- **Layout**: Architectural layer cards (7 Layers) containing technology tables (`.tech-table`) with columns: Technology, System Role, Market Share, and Recommendation Badge (`.badge-primary-choice`).

### 3.9. Quit Criteria Dashboard & Stepper Protocol Components (`.quitcriteria-container`, `.stepper-ribbon-card`, `.quit-matrix-grid`, `.quit-module-card`)
- **Container Layout**: Flexbox block (`.quitcriteria-container`) with vertical gap `1.25rem`.
- **4-Step Daily Protocol Stepper Ribbon (`.stepper-ribbon-card`)**:
  - Horizontal step container (`.stepper-ribbon-steps`) with smooth horizontal scrolling (`overflow-x: auto`).
  - Individual step items (`.ribbon-step`): Contains circular step number badge (`.ribbon-step-num`), bold step title (`.ribbon-step-title`), and description (`.ribbon-step-desc`). Connected by direction arrow separators (`.ribbon-arrow`).
- **Control & Search Bar (`.quit-control-bar`, `.quit-search-input`)**:
  - Flex wrapper containing search input field (`#quit-search-input`) with rounded pill border (`--radius-full`), real-time query filtering across 11 decision cards.
- **Decision Matrix Cards Grid (`.quit-matrix-grid`, `.quit-module-card`)**:
  - Responsive grid (`grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`).
  - Card Header (`.quit-card-header`): Module title (`.quit-module-name`), Optional tag badge (`.badge-optional-tag` with rose tint), and Quota Poms pill badge (`.quit-poms-badge`).
  - Card Body (`.quit-card-body`): Warning Trigger Box (`.quit-box--trigger` with Amber warning icon) + Pivot Action Box (`.quit-box--pivot` with Corner-up-right action icon).

### 3.10. Toast Notification Widget Component (`.toast-container`, `.toast`)
- **Position**: Fixed at bottom-right corner (`position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 1000;`).
- **Visual**: Slide-up animation (`translateY(0)`), color-coded left border (4px): Emerald (Success), Sky (Info), Amber (Warning), Rose (Error).

### 3.11. SVG Icon Dictionary & Strict No-Emoji Rule (`src/utils/icons.ts`)
- **Strict No-Emoji Rule for Web UI**: All icons and button labels across the web application **MUST** use pure inline SVG elements from the SVG Dictionary (`src/utils/icons.ts`). Using system emoji characters for web UI components is strictly prohibited to guarantee cross-platform visual consistency and CSS variable color customization.
- All icons are pure SVG strings formatted with `stroke="currentColor"` (or `fill="currentColor"`) to match parent text color, accompanied by `aria-hidden="true"`.

---

## 4. Page-by-Page Layout Assembly

The diagram below outlines the overall layout structure and component composition across views:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        APP HEADER BAR (.app-header)                     │
│  [Logo Brand]                                   [Export][Import][Theme]│
├────────────────────────────────────────────────────────────────────────┤
│                     NAVIGATION TAB BAR (.nav-tabs)                      │
│ [Dashboard (Active)] [Roadmap] [Schedule] [Resources] [Tech] [Quit]   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                      MAIN VIEW CONTAINER (.app-main)                   │
│                                                                        │
│  (Active View Content rendered based on selected Tab)                  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│                    TOAST CONTAINER (#toast-container)                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.1. Page 1: Dashboard View (`<roadmap-view-dashboard>`)

The Overview page provides a high-level summary of learning progress, key metrics, and recommended next actions.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. KEY METRICS GRID (.dashboard-grid: 4-column responsive grid)         │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ Progress %   │ │ Tasks Done   │ │ Pomodoros    │ │ Total Time   │ │
│ │ (Trophy Icon)│ │ (Target Icon)│ │ (Poms Icon)  │ │ (Clock Icon) │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. PROGRESS OVERVIEW CARD (.progress-card)                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Enterprise Knowledge AI Assistant Project           [ 45% Complete ]│ │
│ │ [===== Progress Bar Fill (Gradient Indigo->Emerald) =============] │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 3. NEXT TASK RECOMMENDATION CARD (.progress-card--primary)             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 🚀 Recommended Next Task: Build FastAPI Backend API Streaming      │ │
│ │ Sprint 1 - Core Backend & Streaming API                            │ │
│ │ [ Mark This Task Complete Button ]                                 │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 4. SPRINT PROGRESS OVERVIEW LIST (.sprint-list)                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Module 1: LangChain Foundations   [In Progress] 60% Progress Bar   │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ Module 2: Prompt Eng & Parsers    [Not Started] 0% Progress Bar    │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ Module 3: Advanced RAG System     [Not Started] 0% Progress Bar    │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.2. Page 2: Roadmap Sprints View (`<roadmap-view-roadmap>`)

The Detailed Roadmap page displays all 11 Master Modules across the 12-week schedule, learning goals, and practical task checklists (Deliverables).

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Title "Detailed 11-Module Roadmap" + Subtitle)         │
├────────────────────────────────────────────────────────────────────────┤
│ SPRINT LIST CONTAINER (.sprint-list: Stack of 11 Module Cards)         │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ MODULE CARD HEADER                                                 │ │
│ │ Module 1 Header • ⏱️ 24 Pomodoros (20h)    Status: 3/5 Tasks (60%) │ │
│ ├────────────────────────────────────────────────────────────────────┤ │
│ │ MODULE CARD BODY                                                   │ │
│ │ 🎓 Learning Objectives & Skills:                                   │ │
│ │   • Agentic AI Foundations, LCEL, Multi-LLM Provider, Smart Q&A Bot  │ │
│ │                                                                    │ │
│ │ 💻 Practical Tasks (Deliverables Checklist):                       │ │
│ │   [x] Task 1.1: Setup LangChain & Multi-LLM Providers [ 4 Poms ]   │ │
│ │   [x] Task 1.2: Build LCEL Runnable Chain             [ 6 Poms ]   │ │
│ │   [ ] Task 1.3: Build Streaming FastAPI Endpoint      [ 8 Poms ]   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ MODULE CARD 2 (Structured identically to Module 1)                 │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.3. Page 3: Pomodoro Schedule View (`<roadmap-view-schedule>`)

The Pomodoro Timer & Schedule page combines an interactive countdown timer widget with daily/weekly focus schedules (12 Weeks / 351 Pomodoros).

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. TOP SECTION (2-Column Grid: Left = Timer Widget, Right = Today Plan)│
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ INTERACTIVE POMODORO TIMER CARD  │ │ TODAY'S FOCUS SCHEDULE CARD   │ │
│ │                                  │ │                               │ │
│ │        🎯 Focus Session          │ │  📅 Today's Schedule          │ │
│ │             25:00                │ │  • [x] S1-P1: FastAPI Setup   │ │
│ │     [ Start ]  [ Reset ]         │ │  • [ ] S1-P2: LangChain Core  │ │
│ │  Preset: (25/5 min) (50/10 min)  │ │  • [ ] S1-P3: SSE Streaming   │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. WEEKLY SCHEDULE SECTION                                             │
│  [Week 1 Tab]  [Week 2 Tab]  ...  [Week 12 Tab]                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ DAYS GRID (.days-grid: Day cards representing Day 1, Day 2...)     │ │
│ │ ┌──────────────────────┐ ┌──────────────────────┐                  │ │
│ │ │ Day 1 (6 Pomodoros)  │ │ Day 2 (6 Pomodoros)  │ ...              │ │
│ │ │ • P1-3: Prompt Eng   │ │ • P1-3: Vector DBs   │                  │ │
│ │ └──────────────────────┘ └──────────────────────┘                  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 3. HISTORY LOG & TIMER SETTINGS SECTION                                │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ POMODORO SESSIONS HISTORY TABLE  │ │ TIMER SETTINGS PANEL          │ │
│ │ Timestamp | Task | Mode | Action │ │ Focus: [ 25 ]  Break: [ 5 ]   │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.4. Page 4: Learning Resources View (`<roadmap-view-resources>`)

The Learning Resources Library page features module filter tabs (Modules 1–11) and a card grid displaying courses, repos, and documentation links.

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Title "Learning Resource Library" + Subtitle)          │
├────────────────────────────────────────────────────────────────────────┤
│ 1. FILTER BAR CONTAINER (.filter-bar-container)                        │
│ [ All Modules ] [ Module 1 ] [ Module 2 ] ... [ Module 11 ]            │
├────────────────────────────────────────────────────────────────────────┤
│ 2. RESOURCE CARDS GRID (.resources-grid: 3-column responsive grid)     │
│ ┌──────────────────────────┐ ┌──────────────────────────┐             │
│ │ [Video Course][Module 6] [⭐]│ │ [Official Docs][Module 8] [⭐]│            │
│ │ DeepLearning.AI Agents   │ │ FastMCP Python SDK       │             │
│ │ 100% Free Course         │ │ Official Reference Guide │             │
│ │ 🏷️ 100% Free             │ │ 🏷️ 100% Free             │             │
│ │ [ Open Link ↗ ]          │ │ [ Open Link ↗ ]          │             │
│ └──────────────────────────┘ └──────────────────────────┘             │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.5. Page 5: Tech Stack View (`<roadmap-view-techstack>`)

The Tech Stack Report page provides reference architecture cards and technical tables analyzing the 7 layers of AI technology.

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Title "AI Application Tech Stack Report 2026")         │
├────────────────────────────────────────────────────────────────────────┤
│ 1. REFERENCE ARCHITECTURE COMPARISON GRID (2-Column Grid)              │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ Architecture A: Modern Full-stack│ │ Architecture B: Private Stack │ │
│ │ Next.js + FastAPI + LangGraph... │ │ vLLM + Llama 3.3 + Qdrant...  │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. 7-LAYER ECOSYSTEM CARDS (.tech-layer-card Stack)                    │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Layer 1: LLM Serving & Model Layer                                 │ │
│ │ TECH TABLE (.tech-table):                                          │ │
│ │  Technology   │ System Role             │ Market Share / Rating   │ │
│ │  Claude 3.7   │ Frontier Reasoning Model│ Primary Choice          │ │
│ │  DeepSeek-R1  │ Open-weights Reasoning  │ Trending                │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Layer 2: Agent Orchestration Frameworks (Structured like Layer 1)  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.6. Page 6: Quit Criteria View (`<roadmap-view-quitcriteria>`)

The Quit Criteria & Sunk Cost Management page presents the 4-step daily execution protocol ribbon alongside an interactive search-enabled decision matrix grid covering all 11 modules.

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Title "Tiêu Chí Từ Bỏ & Quản Trị Chi Phí Chìm")       │
├────────────────────────────────────────────────────────────────────────┤
│ 1. 4-STEP PROTOCOL RIBBON CARD (.stepper-ribbon-card)                  │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 📋 Quy Trình 4 Bước Thực Thi Hàng Ngày:                            │ │
│ │ (1) Nhận Diện ➔ (2) Đánh Giá Định Mức ➔ (3) Kiểm Tra Trigger ➔ (4) Pivot │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 2. CONTROL BAR (.quit-control-bar)                                     │
│                                  [ Search Input: "Tìm kiếm module..." ]│
├────────────────────────────────────────────────────────────────────────┤
│ 3. DECISION MATRIX CARDS GRID (.quit-matrix-grid: 11 Module Cards)     │
│ ┌─────────────────────────────────┐ ┌────────────────────────────────┐ │
│ │ Module 4: Advanced RAG System   │ │ Module 11: Production Deploy   │ │
│ │ ⏱️ 43 Poms                        │ │ ⏱️ 22 Poms [Optional Module]   │ │
│ │ ├───────────────────────────────┤ │ ├──────────────────────────────┤ │
│ │ │ ⚠️ Trigger Kích Hoạt (Warning) │ │ │ ⚠️ Trigger Kích Hoạt (Warning)│ │
│ │ │ Quá 15 Poms debug pgvector... │ │ │ Mắc kẹt CI/CD quá 10 Poms... │ │
│ │ ├───────────────────────────────┤ │ ├──────────────────────────────┤ │
│ │ │ ↗️ Pivot Action (Thực Thi)    │ │ │ ↗️ Pivot Action (Thực Thi)   │ │
│ │ │ Đổi sang ChromaDB In-memory   │ │ │ Skip Mod 11, deploy Vercel   │ │
│ └─────────────────────────────────┘ └────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Responsive Layout Breakpoints

The application adapts smoothly across viewports via breakpoints defined in `src/styles/_responsive.css`:

### 5.1. Desktop Layout (`> 768px`)
- Max container width `1200px` centered horizontally.
- Metric Grid renders as 4 columns.
- Resource Grid renders as 3 columns.
- Schedule Section renders as 2 parallel columns.

### 5.2. Tablet Layout (`<= 768px`)
- Metric Grid adjusts to 2 columns (`grid-template-columns: 1fr 1fr`).
- Header Bar wraps elements smoothly, hiding text labels on Export/Import buttons to preserve space.
- Main content container `app-main` reduces padding to `1.25rem 1rem`.

### 5.3. Mobile Layout (`<= 480px`)
- Metric Grid converts to a single column (`grid-template-columns: 1fr`).
- Resource Grid converts to a single column.
- Schedule Days Grid converts to a single column.
- Heading typography font size and card padding scale down slightly for mobile viewports.

---

## 6. Visual Styling Best Practices & Pitfalls to Avoid

To maintain visual excellence, AI Agents **MUST** adhere to these visual design rules:

1. **Never Hardcode Color Values**: Always use `var(--bg-main)`, `var(--text-primary)`, and `var(--border-color)` instead of static hex values like `#111827` or `#ffffff`.
2. **Test Contrast Across Both Themes**: Ensure text and icon contrast remains clear on both Dark (`data-theme="dark"`) and Light (`data-theme="light"`) themes.
3. **Wrap Scrollable Tables & Tab Bars**: Always specify `overflow-x: auto` on `.nav-tabs-container` and `.table-wrapper` to prevent horizontal layout overflow on mobile screens.
4. **Maintain SVG Icon Consistency**: Use `stroke="currentColor"` or `fill="currentColor"` in `src/utils/icons.ts` so icons inherit parent element font colors.
5. **Keep Hover Animations Subtle**: Use subtle transforms like `transform: translateY(-1px)` with `transition: all var(--transition-fast)` for natural interactive feedback.
6. **No Emoji Rule for Web UI**: All UI icons and button labels **MUST** use pure SVG shapes from `src/utils/icons.ts`. System emoji characters are strictly forbidden in UI components.

---

*This document defines the official UI Design System & Component Layout for the AI Engineer LangChain Roadmap 2026 repository. Any UI additions or modifications must strictly comply with these guidelines.*
