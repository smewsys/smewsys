# SMEWSYS — Master Design Specification for Google Stitch

## 1. Project
Design and generate the public-facing SMEWSYS technology services website.

**Brand:** SMEWSYS  
**Positioning:** Technology. Systems. Solutions.  
**Tagline:** From idea to impact.  
**Primary brand color:** `#19B5A5`  
**Primary visual idea:** A modern technology systems company that feels precise, capable, trustworthy, and human.

## 2. Design Objective
Create a premium B2B technology website that communicates engineering capability without looking like a generic SaaS template.

The visual language should be:
- modern
- technical
- systematic
- confident
- minimal
- highly readable
- conversion-focused
- responsive
- premium but not luxurious
- human rather than overly corporate

Do not make the interface visually noisy. Use structure, typography, spacing, cards, and controlled teal accents to communicate sophistication.

## 3. Brand Color System

### Core
- Brand Teal: `#19B5A5`
- Near Black: `#0B0D0E`
- Dark Surface: `#15191B`
- White: `#FFFFFF`
- Soft Surface: `#F4F7F7`
- Border: `#D9E1E1`
- Muted Text: `#5F686B`

### Color rules
- Keep white and near-black as the dominant visual foundation.
- Use `#19B5A5` as an accent and interaction color, not as the dominant background.
- Use teal for active states, selected controls, small highlights, icons, links, and restrained visual accents.
- Primary CTA buttons should normally use near-black with white text.
- Do not introduce additional brand colors unless needed for semantic states.
- Semantic colors for success/error/warning must remain accessible and must not redefine the brand.

## 4. Typography

Use a contemporary grotesk/sans-serif typeface with excellent UI readability.

### Scale
- Display: 56–72 px desktop / 36–44 px mobile, weight 700–800
- H1: 44–52 px desktop / 32–38 px mobile
- H2: 32–38 px desktop / 26–30 px mobile
- H3: 22–26 px desktop / 20–23 px mobile
- Body large: 18–20 px / 16–18 px
- Body: 16 px / 15–16 px
- Small/meta: 13–14 px / 12–13 px
- Buttons: 14–15 px, weight 600–700

Use generous line height and short readable text measures.

## 5. Layout

Use a centered responsive container:
- Desktop max width: 1200–1280 px
- Desktop side padding: 40–64 px
- Tablet side padding: 28–40 px
- Mobile side padding: 20–24 px
- Desktop grid: 12 columns
- Tablet grid: 8 columns
- Mobile grid: 4 columns
- Base spacing unit: 8 px

Major sections should have approximately 96–128 px vertical spacing on desktop and 56–72 px on mobile.

## 6. Shape and Surface

- Small radius: 6 px
- Standard radius: 10–12 px
- Large radius: 16–20 px
- Pills: 999 px
- Borders: 1 px `#D9E1E1`
- Prefer borders and surface contrast over heavy shadows.
- Use subtle shadows only for elevation where needed.
- Keep cards clean and structured.

## 7. Header

Desktop:
- SMEWSYS logo at left.
- Navigation: Services, Work, Process, About, Technology, Contact.
- Primary CTA: Start a Project.
- Optional search/icon utility only if it does not compete with the CTA.

Tablet:
- Condense navigation as needed.
- Keep Start a Project prominent.

Mobile:
- Logo at left.
- Hamburger at right.
- Expanded menu contains all navigation items and a prominent Start a Project CTA.

Header should be sticky or behave consistently during scroll.

## 8. Primary Components

Create a coherent component system for:
- Primary Button
- Secondary Button
- Text Link
- Header
- Mobile Menu
- Breadcrumb
- Hero
- Service Card
- Project Card
- Filter Chip
- Process Step
- Feature/Outcome Card
- Technology Tag
- Accordion
- Form Field
- Select
- Checkbox
- Alert / Validation
- CTA Section
- Footer

All interactive components need visible hover, focus, active, disabled, loading, and relevant error/success states.

## 9. Buttons

### Primary
Near-black background, white text, 10–12 px radius.

Use for:
- Start a Project
- Send Enquiry
- Send Enquiry / submission confirmation actions

### Secondary
White/transparent background, dark border and text.

Use for:
- View Services
- Discover
- Explore
- secondary navigation actions

### Text
Minimal text link with optional arrow.

Use for:
- View Project
- View All Services
- Learn More

Minimum touch target: 44 × 44 px.

## 10. Imagery

Use technology, software, systems, interfaces, business outcomes, architecture, teams, and product visuals.

Avoid:
- generic handshake stock photography
- overly futuristic neon imagery
- excessive 3D blobs
- visual clichés about AI
- unrelated lifestyle imagery

Project imagery should use a consistent aspect ratio.

## 11. Iconography

Use one consistent icon family. Font Awesome is acceptable for implementation.

Service icon examples:
- Web Development: globe/browser
- Software Development: code/layers
- E-commerce: cart/store
- CMS: database/content
- Automation: gears/workflow
- Cloud: cloud/server
- AI: spark/brain/network

Keep icon stroke/weight visually consistent.

## 12. Motion

Motion should be restrained:
- button hover: 120–180 ms
- card hover: subtle elevation/transform
- accordion: 180–250 ms
- menu: fast fade/slide

Respect reduced-motion preferences.

## 13. Accessibility

Target WCAG 2.2 AA.
- Maintain accessible contrast.
- Never use color alone to communicate state.
- Use semantic headings.
- Make all controls keyboard accessible.
- Provide visible focus states.
- Label form controls programmatically.
- Provide clear inline validation.
- Keep touch targets at least 44 × 44 px.
- Provide meaningful alt text.

## 14. Responsive Rules

### >=1280
Full desktop composition, 12-column grid.

### 1024–1279
Reduce container width and grid gaps while preserving desktop information hierarchy.

### 768–1023
Tablet navigation, reduced columns, stack complex sections where necessary.

### <768
Single-column content, mobile menu, mobile-first card stacking.

### <480
Reduce type and section spacing while preserving hierarchy and touch targets.

## 15. UX Rules

Every page must have:
1. Clear page purpose.
2. Strong visual hierarchy.
3. One primary conversion objective.
4. A predictable navigation path.
5. A clear CTA.

Use benefit-oriented language rather than technology-only headlines.

## 16. Global Footer

Footer should contain:
- SMEWSYS logo
- short brand statement
- Services
- Company / About
- Work
- Process
- Technology
- Contact
- Legal: Privacy Policy, Terms, Cookie Policy
- Social links where applicable
- Copyright

## 17. Stitch Generation Rules

When generating any screen:
- Follow this document before inventing new visual patterns.
- Preserve the SMEWSYS brand colors.
- Preserve the information architecture from `sitemap.md`.
- Follow the wireframe hierarchy rather than redesigning the product structure.
- Do not invent additional pages.
- Do not add dashboards, login screens, pricing pages, blogs, or unrelated SaaS patterns.
- Maintain the same header, footer, buttons, card language, typography, spacing, and CTA hierarchy across pages.
- Make each screen production-oriented rather than conceptual.
- Prefer real-looking content over lorem ipsum.
- Keep desktop and mobile compositions intentionally designed, not merely scaled.
