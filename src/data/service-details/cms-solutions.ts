import {
  Database,
  FileEdit,
  FolderSync,
  Globe2,
  Lock,
  Workflow,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const cmsSolutionsDetail: ServiceDetail = {
  id: "cms-solutions",
  slug: "cms-solutions",
  title: "CMS Solutions",
  badge: "Service Discipline",
  heroHeadline: "Flexible content management platforms engineered for marketing agility",
  heroSubheadline:
    "We architect modern headless, traditional, and hybrid CMS solutions that give editorial teams total publishing autonomy while preserving engineering control, performance, and brand consistency across every digital channel.",
  metaDescription:
    "SMEWSYS delivers enterprise headless CMS platforms, structured content modeling, and omnichannel publishing architectures. Empower your marketing team with total agility and zero developer bottlenecks.",

  summary: {
    headline: "Unlocking publishing speed without compromising engineering integrity",
    description:
      "Marketing and content teams shouldn't need a software deployment just to launch a landing page or update copy. SMEWSYS designs headless and modular content architectures that empower non-technical editors to compose pages with structured, pre-approved design tokens and atomic components. By decoupling the presentation layer from content storage, your digital assets stay organized, secure, and deliverable across web, mobile, and omnichannel applications.",
    highlights: [
      {
        title: "Zero-Developer Content Deployment",
        description: "Intuitive visual block builders and modular page assembly that allow marketing teams to launch campaigns in hours instead of weeks.",
        metric: "10x Faster Publishing",
      },
      {
        title: "Omnichannel Content Modeling",
        description: "Structured content schemas designed as single sources of truth, reusable across websites, apps, and digital signage.",
        metric: "Unified Single Source",
      },
      {
        title: "Sub-Second Edge Rendering",
        description: "Instantaneous content invalidation and Incremental Static Regeneration ensuring global readers always receive fresh content instantly.",
        metric: "Instant Worldwide Cache",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Tired of slow publishing cycles and brittle CMS plugins?",
    description: "Whether planning a migration to a modern headless architecture or upgrading an enterprise publishing workflow, our CMS specialists are here to assist.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "Why legacy CMS platforms stifle commercial growth",
    description:
      "Outdated monolithic CMS installations often become tangled webs of vulnerable plugins, slow page loads, and continuous developer bottlenecks.",
    items: [
      {
        title: "Developer Dependency & Slow Turnaround",
        description:
          "When simple marketing updates or new landing page templates require days of engineering backlog time, critical campaign velocity is lost.",
        impact: "Modular component systems give non-technical teams full drag-and-drop autonomy within brand guardrails.",
      },
      {
        title: "Plugin Vulnerabilities & Maintenance Overhead",
        description:
          "Traditional CMS setups rely on dozens of third-party plugins that constantly conflict, introduce security exploits, and break during core updates.",
        impact: "Decoupled headless architectures completely eliminate plugin-based attack vectors and maintenance bloat.",
      },
      {
        title: "Inflexible Content Silos Across Channels",
        description:
          "Managing separate, duplicated copies of content for desktop sites, mobile apps, customer portals, and partner feeds creates inconsistencies.",
        impact: "A unified headless content repository distributes clean structured JSON to any platform automatically.",
      },
      {
        title: "Sluggish Loading & Poor SEO Performance",
        description:
          "Monolithic database queries executed on every page request create severe latency, damaging Core Web Vitals and organic search traffic.",
        impact: "Static generation and edge CDN caching deliver instant page loads with 99+ Lighthouse speed scores.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Enterprise content architectures built for scale",
    description:
      "We design custom content management solutions tailored to the exact operational needs of editorial teams, global enterprises, and multi-brand organizations.",
    items: [
      {
        title: "Headless CMS Implementations",
        description:
          "Modern decoupled content repositories (Sanity, Strapi, Contentful) integrated seamlessly with high-performance Next.js frontends.",
        features: [
          "Bespoke content schemas matched exactly to your domain model",
          "Real-time live preview environments for draft content validation",
          "Instantaneous webhook-driven incremental regeneration",
        ],
      },
      {
        title: "Multi-Brand & Localization Publishing Engines",
        description:
          "Centralized content management systems supporting multi-region translations, localized assets, and multiple brand storefronts from a single dashboard.",
        features: [
          "Granular regional localization and multi-language routing",
          "Shared design systems with brand-specific theme variations",
          "Centralized asset management and automated image transformation",
        ],
      },
      {
        title: "Role-Based Editorial & Approval Workflows",
        description:
          "Structured publishing governance with custom user roles, stage-gate editorial approvals, audit tracking, and scheduled releases.",
        features: [
          "Draft, review, legal sign-off, and scheduled publication states",
          "Granular field-level editing permissions based on user role",
          "Complete version history with one-click revision rollbacks",
        ],
      },
      {
        title: "Content Modeling & Legacy Migrations",
        description:
          "Comprehensive automated migration of existing articles, media libraries, SEO metadata, and user accounts from legacy CMS systems.",
        features: [
          "Automated ETL data extraction, sanitization, and structured mapping",
          "1:1 SEO redirect preservation and URL structure continuity",
          "Zero downtime cutover with complete data integrity validation",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Our CMS engineering capabilities",
    description:
      "We combine structured data architecture with intuitive editorial ergonomics to give your organization a competitive publishing advantage.",
    items: [
      {
        title: "Structured Content Modeling",
        description:
          "Architecting flexible, reusable data schemas that treat content as modular data rather than static blobs of unstructured HTML.",
        icon: Database,
        details: [
          "Atomic content block design",
          "Hierarchical taxonomy and category graphs",
          "Strict data typing and field validation",
        ],
      },
      {
        title: "Editorial Experience & Visual Previews",
        description:
          "Designing intuitive editor workspaces with split-screen live previews, contextual help text, and visual drag-and-drop page composition.",
        icon: FileEdit,
        details: [
          "Side-by-side live draft previewing",
          "Visual block builder layouts within brand guidelines",
          "Rich text formatting with custom interactive embeds",
        ],
      },
      {
        title: "Omnichannel API Distribution",
        description:
          "Exposing performant GraphQL and REST endpoints that distribute approved content seamlessly to web apps, native iOS/Android, and external APIs.",
        icon: Globe2,
        details: [
          "GraphQL query optimization and caching",
          "Webhook event triggers for downstream sync",
          "Automated schema documentation and SDKs",
        ],
      },
      {
        title: "Automated Content Migration & ETL",
        description:
          "Engineering reliable data translation pipelines to migrate thousands of legacy pages, images, and tax records into clean modern schemas.",
        icon: FolderSync,
        details: [
          "Custom scrapers and database extractors",
          "HTML content sanitization and markdown conversion",
          "Asset deduplication and cloud storage relocation",
        ],
      },
      {
        title: "Editorial Governance & Security",
        description:
          "Implementing granular access permissions, single sign-on (SSO), and cryptographic audit trails to maintain publishing compliance.",
        icon: Lock,
        details: [
          "Enterprise SSO (Okta, Azure AD, Google)",
          "Field-level permission rules",
          "Comprehensive change tracking and revision histories",
        ],
      },
      {
        title: "Edge Delivery & Dynamic Revalidation",
        description:
          "Leveraging Incremental Static Regeneration (ISR) and edge CDN purges to deliver pre-rendered pages that update globally in milliseconds.",
        icon: Workflow,
        details: [
          "On-demand Next.js tag and path revalidation",
          "Cloudflare and Fastly edge cache purging",
          "Sub-100ms global response times",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "We approach CMS implementation as a core business infrastructure project, ensuring seamless editorial adoption and zero content loss.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Content audit & editorial workflow analysis",
        description:
          "We analyze your existing content assets, editorial bottlenecks, publishing frequency, and cross-channel distribution requirements.",
        deliverables: [
          "Comprehensive content inventory and taxonomy audit",
          "Editorial workflow map and pain point assessment",
          "CMS platform evaluation and technical recommendation",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Content schema & architectural blueprint",
        description:
          "We define structured content models, validation rules, relationship hierarchies, and API integration specifications.",
        deliverables: [
          "Entity schema definitions (Sanity/Strapi/Contentful)",
          "Editorial permission matrix and governance protocol",
          "Data migration and URL redirection plan",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "Modular component library & editor UX",
        description:
          "We design reusable modular layout blocks and customize the editor dashboard interface to ensure an intuitive authoring experience.",
        deliverables: [
          "Atomic UI component design library",
          "Custom CMS studio layout and visual preview configs",
          "Brand typography and styling guardrails",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "CMS schema setup & frontend integration",
        description:
          "Our engineers configure the CMS schemas, build API revalidation webhooks, and integrate the frontend with Next.js Server Components.",
        deliverables: [
          "Fully configured headless CMS instance",
          "Next.js App Router frontend with real-time previews",
          "Automated ETL migration scripts execution",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "Data verification & editorial training",
        description:
          "We verify migrated content accuracy, validate 301 redirects, run performance audits, and conduct live editorial training workshops.",
        deliverables: [
          "100% data migration accuracy sign-off",
          "Live editorial training session and recorded walk-throughs",
          "Core Web Vitals and SEO audit reports",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Production cutover & continuous support",
        description:
          "We coordinate domain cutovers, activate live webhooks, monitor publishing pipelines, and provide post-launch editorial assistance.",
        deliverables: [
          "Seamless zero-downtime production cutover",
          "Real-time webhook and build monitoring",
          "Comprehensive editor guides and SLA support",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "Headless CMS technologies and standards",
    description:
      "We partner with leading headless content platforms and open-source systems to deliver flexible, maintainable publishing architectures.",
    stack: [
      {
        category: "Headless CMS Platforms",
        technologies: [
          "Sanity.io",
          "Strapi (Self-Hosted / Cloud)",
          "Contentful",
          "Payload CMS",
          "Storyblok",
        ],
      },
      {
        category: "Frontend & Rendering",
        technologies: [
          "Next.js (App Router)",
          "React Server Components",
          "Tailwind CSS",
          "TypeScript",
          "Portable Text / MDX",
        ],
      },
      {
        category: "Data & APIs",
        technologies: [
          "GraphQL",
          "REST APIs",
          "GROQ (Sanity)",
          "Zod Validation",
          "Edge Revalidation Webhooks",
        ],
      },
      {
        category: "Assets & Storage",
        technologies: [
          "Cloudinary CDN",
          "AWS S3",
          "Uploadthing",
          "Vercel Blob",
          "Automated Image Optimization",
        ],
      },
    ],
    considerations: [
      {
        title: "Modular Content Reusability",
        description:
          "Content is stored as clean structured JSON, enabling seamless reuse across multiple digital surfaces without rewriting copy.",
        standard: "Structured Content Architecture",
      },
      {
        title: "Instant Draft Previews",
        description:
          "Authors can preview draft articles and layout changes in real-time on live staging URLs before publishing publicly.",
        standard: "Live Side-by-Side Previews",
      },
      {
        title: "On-Demand Incremental Revalidation",
        description:
          "Publishing an article invalidates only the specific page path and affected taxonomy tags, avoiding full-site rebuild delays.",
        standard: "Sub-Second Global Cache Purge",
      },
      {
        title: "Strict Brand Guardrails",
        description:
          "Editors have creative freedom within pre-approved typography, color tokens, and layout components, preventing accidental visual breaks.",
        standard: "Zero Visual Degradation",
      },
    ],
  },

  relevantWork: {
    headline: "CMS engineering case studies",
    description:
      "Discover how SMEWSYS has transformed publishing workflows and eliminated developer bottlenecks for content-heavy businesses.",
    projects: [
      {
        title: "Global Multi-Language Publishing Portal",
        category: "Headless CMS Platform",
        description:
          "Architected a centralized Sanity.io CMS powering 8 localized international sites with custom translation workflows and instant previews.",
        outcome: "Accelerated article publication from 3 days to 20 minutes across 6 languages.",
        technologies: ["Sanity.io", "Next.js", "TypeScript", "Tailwind CSS", "GROQ"],
        href: "/work",
      },
      {
        title: "Enterprise Knowledge Base & Documentation",
        category: "Documentation Platform",
        description:
          "Replaced a fragmented legacy wiki with a structured headless content engine featuring fast full-text search and versioned API guides.",
        outcome: "Over 8,000 articles migrated with 100% redirect fidelity and sub-second search speeds.",
        technologies: ["Strapi", "React", "Meilisearch", "Tailwind CSS"],
        href: "/work",
      },
      {
        title: "Multi-Brand Marketing Engine",
        category: "Modular Page Builder",
        description:
          "Engineered a modular component-driven CMS enabling marketing teams across three subsidiary brands to launch bespoke campaign pages without developers.",
        outcome: "Over 45 campaign landing pages launched in the first quarter with zero engineering tickets.",
        technologies: ["Payload CMS", "Next.js", "TypeScript", "PostgreSQL"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "web-development",
    "e-commerce",
    "cloud-solutions",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Practical answers to questions regarding headless CMS platforms, content migration, and editor training.",
    items: [
      {
        question: "How does a headless CMS differ from traditional WordPress or Drupal?",
        answer:
          "Traditional CMS platforms combine the content database and the website frontend into a single monolithic codebase. This architecture often leads to heavy plugin dependencies, security vulnerabilities, and slow page speeds. A headless CMS stores and organizes your content as clean data and delivers it via APIs to modern frontends (like Next.js). This separation makes your website lightning fast, completely eliminates plugin security exploits, and allows the same content to be published to mobile apps, customer dashboards, and IoT displays.",
      },
      {
        question: "Can non-technical editors build new pages without writing code?",
        answer:
          "Yes, absolutely. We configure custom visual block builders and component palettes within the CMS. Editorial teams can assemble new pages by choosing from pre-approved, responsive components (such as heroes, testimonial sliders, comparison tables, and FAQ accordions) with complete control over ordering and copy, all while brand tokens guarantee design integrity.",
      },
      {
        question: "How do you migrate thousands of existing blog posts and media assets without losing SEO?",
        answer:
          "We build bespoke ETL data pipelines that extract your content, clean up legacy styling artifacts, convert markup to structured blocks, and upload media to modern CDNs. We retain all legacy URL slugs or implement exact 1:1 301 redirect mappings to ensure zero loss in search visibility, domain authority, or page rankings.",
      },
      {
        question: "Which headless CMS platform is best for our business?",
        answer:
          "Platform selection depends on your workflow. For marketing teams seeking deep real-time visual previews and structured schemas, Sanity.io is outstanding. For teams requiring an open-source, self-hosted solution with custom relational database control, Strapi or Payload CMS are ideal. For large global enterprises with complex governance, Contentful is frequently chosen. We help you evaluate and select the best fit during our Discovery phase.",
      },
      {
        question: "Can editors preview draft content before it goes live?",
        answer:
          "Yes. We configure real-time preview environments that show editors exactly how their content will look across mobile, tablet, and desktop devices before they press publish, with complete support for draft states and password-protected staging links.",
      },
      {
        question: "Do you provide editorial training and post-launch support?",
        answer:
          "Yes. Every CMS rollout includes live interactive training sessions for your marketing and content staff, recorded video walkthroughs, comprehensive documentation guides, and ongoing support for schema evolution as your business grows.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to empower your marketing and editorial teams?",
    description:
      "Transform your publishing workflow with a modern, high-performance CMS platform. Contact our solutions architects today to discuss your content strategy.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

