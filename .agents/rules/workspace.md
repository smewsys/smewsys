# SMEWSYS Workspace Rules

## Project identity
This workspace contains the SMEWSYS public website.

Brand:
- SMEWSYS
- Tagline: From idea to impact.
- Descriptor: Technology. Systems. Solutions.
- Primary brand color: #19B5A5

## Source-of-truth hierarchy
When making UI/design decisions, use this order:
1. Approved SMEWSYS wireframe / sitemap / information architecture
2. `design.md`
3. `design-tokens.json`
4. Page-specific prompts under `prompts/`
5. Existing implementation
6. Agent judgement only when the above do not define the decision

Do not silently contradict a higher-priority source.

## Design constraints
- Preserve the existing sitemap and user flow.
- Do not invent new pages or major sections unless explicitly requested.
- Do not change the SMEWSYS primary color.
- Use white and near-black as the dominant visual foundation.
- Use teal as a controlled accent.
- Keep the interface modern, technical, systematic, premium, and readable.
- Avoid generic SaaS/AI aesthetics, excessive gradients, neon effects, giant blobs, and decorative noise.
- Reuse components rather than creating one-off visual patterns.
- Desktop, tablet, and mobile must be intentionally designed.

## Engineering constraints
- Prefer reusable components.
- Centralize design tokens.
- Avoid hard-coded repeated colors, spacing, radii, and typography values.
- Preserve accessibility.
- Do not add dependencies unless necessary and explain why.
- Do not replace the existing framework without explicit approval.
- Before major implementation changes, create or update an implementation plan.
- Run the project's available lint/build/test commands after meaningful changes.

## Agent behavior
For significant tasks:
1. Inspect the existing workspace.
2. Read the relevant SMEWSYS design files.
3. Produce a concise implementation plan.
4. Ask for approval when the task is high-impact or destructive.
5. Implement incrementally.
6. Verify visually and technically.
7. Summarize changed files and remaining issues.

## Visual verification
When a browser/preview is available:
- compare the implementation against the approved Stitch/Figma reference;
- inspect desktop and mobile;
- check spacing, typography, CTA hierarchy, overflow, forms, and navigation;
- fix visual regressions before declaring completion.
