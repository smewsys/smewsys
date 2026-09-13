# SMEWSYS Website — Google Stitch Design Package

This package is prepared for generating the SMEWSYS website in Google Stitch.

## Source of truth
1. SMEWSYS sitemap / information architecture
2. SMEWSYS low-fidelity wireframe board
3. SMEWSYS UI Specification / Design System v1.0
4. SMEWSYS brand foundation, including the retained brand teal `#19B5A5`

## Recommended Stitch workflow
1. Start with `design.md` as the persistent visual/design brief.
2. Generate the Home page first using `prompts/01-home.md`.
3. Refine the theme before generating the remaining pages.
4. Generate pages in the order defined in `sitemap.md`.
5. Use the wireframe image as a visual reference when generating screens.
6. Keep the same design language across every subsequent Stitch generation.
7. Export/paste the approved design to Figma for detailed design-system refinement.
8. Export frontend code only after the visual system and responsive layouts are approved.

Google's Stitch workflow supports generating UI from natural-language prompts and image/wireframe inputs, iterating on designs, and moving results toward Figma/frontend code.
