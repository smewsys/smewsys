import {
  Code2,
  Gauge,
  ShieldCheck,
  Smartphone,
  Workflow,
  Search,
  CheckCircle,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const webDevelopmentDetail: ServiceDetail = {
  id: "web-development",
  slug: "web-development",
  title: "Web Development",
  badge: "Service Discipline",
  heroHeadline: "Modern web applications and digital platforms engineered for scale",
  heroSubheadline:
    "We architect and build high-performance, accessible, and conversion-focused web systems. From bespoke web applications to high-converting marketing engines, we deliver clean codebases that compound business value.",
  metaDescription:
    "SMEWSYS engineers modern web applications, high-performance portals, and scalable digital platforms built with Next.js, React, and TypeScript. Optimized for speed, WCAG 2.2 AA accessibility, and real conversion.",
  
  summary: {
    headline: "Engineering discipline meets commercial performance",
    description:
      "A modern web application is more than a digital brochure — it is a central operational asset and primary revenue driver. SMEWSYS builds web applications from first principles using modern component architecture, rigorous type safety, and edge-first delivery to guarantee sub-second response times, rock-solid security, and effortless maintenance.",
    highlights: [
      {
        title: "Sub-Second Performance",
        description: "Optimized for top-tier Core Web Vitals (LCP < 1.5s, INP < 100ms, CLS < 0.05) across all devices and network conditions.",
        metric: "99+ Lighthouse Score",
      },
      {
        title: "WCAG 2.2 AA Accessibility",
        description: "Inclusive design and strict semantic HTML ensuring full keyboard navigation, screen reader support, and compliance.",
        metric: "100% Audit Ready",
      },
      {
        title: "Production Architecture",
        description: "Modular React and Next.js foundations with strict TypeScript typing, automated CI/CD checks, and zero template bloat.",
        metric: "Zero Technical Debt",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Have an upcoming web project or application rebuild?",
    description: "Whether you require a ground-up platform build or a performance migration, our senior engineers are ready to scope your technical requirements.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "Why engineering-grade web development matters",
    description:
      "Off-the-shelf templates and hasty builds often crumble under commercial growth. We eliminate the hidden costs of poor web engineering.",
    items: [
      {
        title: "Sluggish Speed & High Bounce Rates",
        description:
          "Every second of load delay destroys conversion rates and organic search authority. Bloated plugins and unoptimized scripts cost businesses millions in lost pipeline.",
        impact: "Sub-second response times boost user retention by up to 35%.",
      },
      {
        title: "Fragile Architecture & Technical Debt",
        description:
          "Relying on brittle plugins and monolithic CMS templates slows down feature development and creates recurring maintenance firefighting.",
        impact: "Clean modular codebases cut future feature delivery cycles by half.",
      },
      {
        title: "Inconsistent Mobile & Device UX",
        description:
          "Web visitors use everything from low-bandwidth mobile handsets to ultra-wide displays. Clunky unresponsive layouts alienate valuable prospects.",
        impact: "Fluid responsive breakpoints ensure a seamless multi-device brand impression.",
      },
      {
        title: "Compliance & Security Vulnerabilities",
        description:
          "Ignoring accessibility standards exposes organisations to legal risk, while vulnerable third-party dependencies jeopardize customer data and reputation.",
        impact: "Strict adherence to WCAG 2.2 AA and modern security headers protects your organization.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Web systems designed for your specific business requirements",
    description:
      "We do not recycle boilerplate templates. Every system is built to address targeted business workflows, user journeys, and technical integrations.",
    items: [
      {
        title: "Custom Web Applications",
        description:
          "Rich, interactive Single-Page and Multi-Page Applications (SPAs / MPAs) with state-driven user interfaces, complex authentication, and backend integrations.",
        features: [
          "Complex state management and real-time syncing",
          "Role-based access control and OAuth / SSO integration",
          "Automated offline caching and service worker resilience",
        ],
      },
      {
        title: "Corporate Portals & Marketing Sites",
        description:
          "Lightning-fast digital flagships engineered for international brands, providing high conversion rates, technical SEO authority, and editorial flexibility.",
        features: [
          "Server-Side Rendering (SSR) and Static Site Generation (SSG)",
          "Structured schema markup and internationalization (i18n)",
          "Dynamic lead capture and CRM pipeline integrations",
        ],
      },
      {
        title: "Customer & Partner Dashboards",
        description:
          "Secure, data-dense web portals that allow customers, vendors, or internal stakeholders to interact with services, manage accounts, and view metrics.",
        features: [
          "Interactive data visualizations and analytics grids",
          "Secure file workflows and document generation",
          "Granular team permissions and audit trail logging",
        ],
      },
      {
        title: "Headless Web Frontends",
        description:
          "Decoupled web frontends connected to headless content systems, microservices, or ERP backends for ultimate publishing speed and design autonomy.",
        features: [
          "Headless CMS integration (Contentful, Strapi, Sanity)",
          "Incremental Static Regeneration (ISR) for instant updates",
          "Edge routing and global CDN cache distribution",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Full-stack engineering capabilities",
    description:
      "Our web engineering discipline covers every layer of modern web delivery — from low-level bundle optimization to resilient API architectures.",
    items: [
      {
        title: "Modern Frontend Architecture",
        description:
          "Architecting maintainable design systems and component libraries using React, Next.js, and TypeScript that guarantee consistency across product suites.",
        icon: Code2,
        details: [
          "Design token synchronization",
          "Reusable atomic component libraries",
          "Strict TypeScript type safety",
        ],
      },
      {
        title: "Core Web Vitals & Performance",
        description:
          "Deep optimization of resource delivery, script execution budgets, layout shifts, and asset delivery pipelines to ensure industry-leading speed scores.",
        icon: Gauge,
        details: [
          "Next-gen image optimization (AVIF/WebP)",
          "Critical CSS and font subsetting",
          "Code splitting and lazy hydration",
        ],
      },
      {
        title: "Security & Accessibility (WCAG 2.2 AA)",
        description:
          "Building inclusive, compliant web solutions with strict adherence to WCAG accessibility criteria and modern security standards.",
        icon: ShieldCheck,
        details: [
          "Screen reader and keyboard focus audits",
          "Content Security Policy (CSP) & CORS configuration",
          "Input sanitization and OWASP Top 10 mitigation",
        ],
      },
      {
        title: "Responsive & Fluid User Experience",
        description:
          "Crafting responsive layouts that adapt intuitively across mobile handsets, tablets, desktops, and high-density monitors without visual compromises.",
        icon: Smartphone,
        details: [
          "Mobile-first fluid typography and spacing",
          "Adaptive touch targets (min 44×44px)",
          "Native-like gestures and transitions",
        ],
      },
      {
        title: "API Integration & Middleware",
        description:
          "Connecting web applications with external REST and GraphQL APIs, third-party payment gateways, CRM systems, and internal corporate databases.",
        icon: Workflow,
        details: [
          "Type-safe API client contracts",
          "Resilient error boundaries and retry logic",
          "Serverless API route middlewares",
        ],
      },
      {
        title: "Technical SEO & Discoverability",
        description:
          "Structuring HTML semantics, meta architectures, canonical graphs, and sitemaps so search engines index your pages accurately and promptly.",
        icon: Search,
        details: [
          "Automatic XML sitemap and robots generation",
          "Open Graph and Twitter social card tags",
          "Rich snippet JSON-LD structured data",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "We follow the proven SMEWSYS delivery model to mitigate risk, maintain transparency, and ensure on-time delivery with zero surprises.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Technical audit & business goals",
        description:
          "We analyze user personas, current system limitations, operational goals, analytics data, and technical constraints to establish clear benchmarks.",
        deliverables: [
          "Technical requirement specification",
          "Current architecture & performance audit",
          "Project scope and milestone timeline",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Architecture & tech stack selection",
        description:
          "We define the component hierarchy, API integrations, data models, state flows, and infrastructure requirements before writing code.",
        deliverables: [
          "System architecture diagram",
          "Data contract and API schemas",
          "Performance budget targets",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "UI systems & interactive prototypes",
        description:
          "We create high-fidelity design systems, responsive wireframes, and interactive flows adhering strictly to brand tokens and accessibility standards.",
        deliverables: [
          "Comprehensive design token library",
          "Responsive component designs",
          "WCAG color contrast verification",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "Clean, type-safe implementation",
        description:
          "Our engineers write modular, thoroughly documented code with strict typing, automated linting, and continuous integration pipeline deployments.",
        deliverables: [
          "Production-grade Next.js / TypeScript codebase",
          "Integrated CMS or API endpoints",
          "Staging environment previews",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "Rigorous automated & manual QA",
        description:
          "Comprehensive testing across browsers, screen sizes, network conditions, automated end-to-end user journeys, and accessibility audits.",
        deliverables: [
          "Lighthouse 95+ performance report",
          "Cross-browser and mobile device verification",
          "Automated test coverage suite",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Zero-downtime deployment & rollout",
        description:
          "We execute domain cutovers, cache warm-ups, DNS management, and real-time observability setup with comprehensive documentation and team handoff.",
        deliverables: [
          "Production rollout checklist",
          "Analytics and monitoring instrumentation",
          "Codebase documentation and handoff",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "Modern tools and architectural standards",
    description:
      "We select technologies based on stability, performance, developer ergonomics, and ecosystem longevity — avoiding passing fads in favor of enterprise durability.",
    stack: [
      {
        category: "Core Frontend",
        technologies: [
          "Next.js (App Router)",
          "React 18 / 19",
          "TypeScript",
          "Tailwind CSS",
          "HTML5 Semantic",
        ],
      },
      {
        category: "State & Data Layer",
        technologies: [
          "React Query / TanStack",
          "Zustand",
          "GraphQL",
          "REST APIs",
          "Zod Validation",
        ],
      },
      {
        category: "Performance & Edge",
        technologies: [
          "Vercel Edge Network",
          "Cloudflare Workers",
          "Node.js Runtime",
          "Web Workers",
          "Core Web Vitals APIs",
        ],
      },
      {
        category: "Testing & Quality",
        technologies: [
          "Playwright E2E",
          "Vitest / Jest",
          "ESLint & Prettier",
          "GitHub Actions CI/CD",
          "Axe Accessibility Audits",
        ],
      },
    ],
    considerations: [
      {
        title: "Performance Budgets",
        description:
          "Every build enforces strict JavaScript bundle budgets and CSS thresholds to prevent performance degradation over time.",
        standard: "LCP < 1.5s · CLS < 0.05 · FID/INP < 100ms",
      },
      {
        title: "Accessibility Standards",
        description:
          "Built from the ground up for full screen reader support, semantic heading outlines, and WCAG 2.2 AA compliant focus indicators.",
        standard: "WCAG 2.2 AA Compliance",
      },
      {
        title: "Type Safety & Maintainability",
        description:
          "End-to-end TypeScript contracts across API boundaries prevent runtime defects and dramatically speed up refactoring.",
        standard: "Strict TypeScript · Zero 'any' types",
      },
      {
        title: "Security & Headers",
        description:
          "Hardened HTTP response headers (CSP, HSTS, X-Frame-Options) and automated vulnerability scans run on every deployment.",
        standard: "OWASP Top 10 Hardened",
      },
    ],
  },

  relevantWork: {
    headline: "Web development case studies",
    description:
      "Explore real-world platforms and high-performance web systems engineered by SMEWSYS for demanding business environments.",
    projects: [
      {
        title: "High-Scale B2B Client Portal",
        category: "Custom Web Application",
        description:
          "Engineered a unified client management portal for a financial consultancy, consolidating legacy spreadsheets into an intuitive real-time dashboard.",
        outcome: "Reduced client enquiry turnaround by 65% with sub-second page loads.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
        href: "/work",
      },
      {
        title: "Global Technology Brand Flagship",
        category: "Corporate Web Platform",
        description:
          "Designed and delivered a headless digital flagship with multi-region localization, dynamic case study filtering, and instantaneous page transitions.",
        outcome: "Achieved 99+ mobile Lighthouse scores and a 42% increase in qualified sales inquiries.",
        technologies: ["Next.js", "Headless CMS", "TypeScript", "Edge CDN"],
        href: "/work",
      },
      {
        title: "Enterprise Operations Dashboard",
        category: "Internal Web Platform",
        description:
          "Built an interactive analytics and workflow coordination suite used daily by 450+ field engineers and support coordinators across 12 territories.",
        outcome: "Decreased dispatch latency by 50% and eliminated duplicate data entry.",
        technologies: ["React", "TypeScript", "Playwright", "WebSockets"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "software-development",
    "cms-solutions",
    "cloud-solutions",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Straightforward answers to the common technical and delivery questions businesses ask before partnering with SMEWSYS for web development.",
    items: [
      {
        question: "How does custom web development compare to website builders or CMS templates?",
        answer:
          "Website builders and bloated templates are built for quick generic setups, but they quickly become liabilities when you need custom business logic, high-volume transactions, custom integrations, or top-tier Core Web Vitals. Our custom builds use modern engineering frameworks (such as Next.js and React) with zero unnecessary third-party plugins. You get full ownership of your code, lightning-fast speeds, bespoke user journeys, and an asset that can adapt as your company expands.",
      },
      {
        question: "Can you migrate or modernize an existing web platform without losing SEO equity?",
        answer:
          "Yes. SEO preservation is a core phase in our Planning and Launch lifecycle. We perform comprehensive crawl audits of your current site, map 1:1 301 redirects for every legacy URL, preserve or improve structured metadata, and ensure internal link parity. In addition, our speed and accessibility optimizations typically yield notable improvements in organic rankings post-launch.",
      },
      {
        question: "Do you provide ongoing support, hosting, and technical maintenance?",
        answer:
          "Yes. We offer structured Service Level Agreements (SLAs) that include uptime monitoring, continuous dependency updates, security patches, proactive performance auditing, and allocated engineering hours for iterative feature enhancements.",
      },
      {
        question: "How do you ensure our web application meets accessibility requirements?",
        answer:
          "Accessibility is baked into every phase rather than patched on at the end. We write semantic HTML5, implement standard ARIA landmarks, verify full keyboard navigability with visible focus indicators, validate 4.5:1 color contrast ratios, and conduct automated Axe audits alongside real screen-reader testing to meet WCAG 2.2 AA standards.",
      },
      {
        question: "What is the typical timeline for a custom web development engagement?",
        answer:
          "Timelines depend on scope and complexity. A focused corporate portal or marketing platform typically spans 6 to 10 weeks from discovery through launch. Complex web applications with rich user state, custom authentication, and multi-system integrations generally take 12 to 18 weeks. We work in transparent bi-weekly sprints with regular staging previews.",
      },
      {
        question: "Who owns the code and intellectual property once the project is finished?",
        answer:
          "You do. SMEWSYS builds solutions for our clients, and 100% of the custom codebase, design assets, and intellectual property belong to you upon final invoice settlement. We provide comprehensive documentation and repository handoffs.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to engineer a high-performance web system?",
    description:
      "Whether you are launching a new digital platform or modernizing a legacy web application, our engineers are ready to partner with you. Let's discuss your requirements and build something that delivers real business impact.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

