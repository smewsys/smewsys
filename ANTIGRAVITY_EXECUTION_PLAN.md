# SMEWSYS Antigravity Execution Plan

## Phase 0 — Understand
Read:
- design.md
- sitemap.md
- content.md
- design-tokens.json
- prompts/00-master-prompt.md
- prompts/01-home.md

Do not write production code yet.

## Phase 1 — Inspect
Inspect the current repository/framework and identify:
- frontend framework
- entry point
- routing
- styling system
- component architecture
- assets
- package manager
- available scripts
- existing backend/API dependencies

Return an architecture summary.

## Phase 2 — Plan
Create `implementation_plan.md` covering:
- architecture
- token strategy
- component strategy
- page order
- responsive strategy
- accessibility
- visual verification
- risks

Do not replace the framework.

## Phase 3 — Foundations
Implement:
- design tokens
- typography
- global styles
- container/grid
- buttons
- header
- footer
- base card
- form primitives

Verify the foundation before building all pages.

## Phase 4 — Home
Implement Home first.
Use `prompts/01-home.md`.
Treat Home as the visual baseline for all remaining pages.

Verify desktop and mobile.

## Phase 5 — Templates
Implement:
1. Services
2. Service Detail
3. Work
4. Case Study
5. Process
6. About
7. Technology
8. Contact
9. Legal/System

Reuse components and templates.

## Phase 6 — QA
Run:
- build
- lint
- tests if available
- browser visual verification

Fix issues before proceeding.

## Phase 7 — Final audit
Compare implementation against:
- sitemap
- design.md
- design tokens
- approved Stitch screens

Report:
- completed
- deviations
- known issues
- recommended next steps
