---
name: smewsys-ui-design
description: Apply the SMEWSYS website design system when designing, implementing, reviewing, or refining UI. Use for pages, components, responsive layouts, visual QA, accessibility, and Stitch/Figma handoff.
---

# SMEWSYS UI Design Skill

Before modifying UI, read:
- `/design.md`
- `/design-tokens.json`
- `/sitemap.md`
- `/content.md`
- the relevant file under `/prompts/`

## Required behavior

### Brand
Use:
- Primary: #19B5A5
- Near black: #0B0D0E
- Dark surface: #15191B
- White: #FFFFFF
- Soft surface: #F4F7F7
- Border: #D9E1E1
- Muted text: #5F686B

Never substitute another teal as the SMEWSYS brand color.

### Layout
Use a centered 1200–1280px desktop container, 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid.

Base spacing is 8px.

### Components
Prefer shared:
- Header
- MobileMenu
- Button
- Breadcrumb
- ServiceCard
- ProjectCard
- ProcessStep
- FilterChip
- Accordion
- FormField
- CTASection
- Footer

### UX
Every page needs a clear purpose and a primary conversion path.
Primary CTA: Start a Project.
Contextual alternatives: Get in Touch / Send Enquiry.

### Accessibility
Target WCAG 2.2 AA.
Maintain contrast, semantic headings, keyboard navigation, visible focus, labelled forms, and 44px minimum interactive targets.

### Visual QA
If a browser is available, inspect:
- desktop
- tablet
- mobile
- navigation
- CTA hierarchy
- spacing
- typography
- card consistency
- form states
- overflow
- accessibility

Do not call a UI task complete based only on successful compilation.
