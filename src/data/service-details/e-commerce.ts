import {
  CreditCard,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const ecommerceDetail: ServiceDetail = {
  id: "e-commerce",
  slug: "e-commerce",
  title: "E-commerce",
  badge: "Service Discipline",
  heroHeadline: "Scalable digital commerce platforms built for high-volume transactions",
  heroSubheadline:
    "We engineer resilient e-commerce systems, custom headless storefronts, and automated inventory pipelines designed for instantaneous checkouts, enterprise security, and measurable conversion growth.",
  metaDescription:
    "SMEWSYS builds enterprise-grade e-commerce solutions, headless storefronts, and automated order management platforms. Engineered for sub-second checkout speeds, B2B/B2C scalability, and global payment compliance.",

  summary: {
    headline: "High-performance commerce engineering that drives revenue",
    description:
      "Modern e-commerce requires far more than listing products online. It demands millisecond-fast catalog search, frictionless checkout funnels, automated omnichannel inventory sync, and rock-solid payment security. SMEWSYS designs and delivers tailored commerce platforms that eliminate checkout drop-off and scale effortlessly during seasonal traffic surges.",
    highlights: [
      {
        title: "Sub-Second Checkout Funnels",
        description: "Zero-friction single-page and headless checkouts optimized to minimize cart abandonment and increase conversion rates.",
        metric: "+28% Conversion Rate",
      },
      {
        title: "Automated Omnichannel Sync",
        description: "Real-time bidirectional synchronization between storefronts, warehouses, ERP systems, and logistics partners.",
        metric: "100% Stock Accuracy",
      },
      {
        title: "PCI-DSS Compliant Architecture",
        description: "Tokenized payment gateways, multi-currency processing, and automated fraud prevention out of the box.",
        metric: "Bank-Grade Security",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Planning an e-commerce platform build or replatforming migration?",
    description: "Whether migrating from an inflexible legacy store or building a custom B2B wholesale portal, our commerce engineers are ready to assist.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "The commercial cost of outdated e-commerce infrastructure",
    description:
      "Legacy commerce platforms with bloated themes and fragile plugins throttle revenue and inflate operating expenses.",
    items: [
      {
        title: "Checkout Friction & Cart Abandonment",
        description:
          "Multi-step, sluggish checkouts and unexpected redirect lags cause over 70% of prospective buyers to abandon carts before purchasing.",
        impact: "Instantaneous, streamlined headless checkout funnels recapture lost transactions.",
      },
      {
        title: "Inventory Desynchronization & Stockouts",
        description:
          "Manual inventory reconciliations between physical warehouses, online stores, and ERPs lead to accidental overselling and client frustration.",
        impact: "Real-time event-driven inventory synchronization guarantees true stock visibility across all channels.",
      },
      {
        title: "Rigid B2B Purchasing Complexities",
        description:
          "Consumer-only store templates cannot accommodate custom wholesale price sheets, tiered credit lines, or corporate purchase order workflows.",
        impact: "Bespoke B2B portals support custom contract pricing, net-term invoicing, and approval workflows.",
      },
      {
        title: "Traffic Spikes Crashing Infrastructure",
        description:
          "Monolithic stores buckle under seasonal flash sales and marketing campaign surges, losing thousands in revenue per minute of downtime.",
        impact: "Serverless, horizontally autoscaling architectures absorb viral traffic spikes without breaking a sweat.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Custom commerce solutions built to scale",
    description:
      "We engineer purpose-built e-commerce architectures for high-growth direct-to-consumer (D2C) brands and complex B2B enterprises.",
    items: [
      {
        title: "Headless Commerce Storefronts",
        description:
          "Decoupled, lightning-fast frontend storefronts built with Next.js connected to robust commerce backends like Shopify Plus, Medusa, or custom microservices.",
        features: [
          "Instantaneous product page transitions with zero layout shift",
          "Advanced faceted search and real-time filtering (Algolia / Meilisearch)",
          "Rich localized content integration via headless CMS",
        ],
      },
      {
        title: "B2B Wholesale & Ordering Portals",
        description:
          "Tailored business-to-business commerce platforms supporting customer-specific pricing catalogs, bulk ordering, invoice payments, and credit terms.",
        features: [
          "Custom corporate pricing tiers and volume discounts",
          "Purchase order (PO) workflows and Net 30/60 invoice support",
          "Multi-user corporate accounts with approval hierarchies",
        ],
      },
      {
        title: "Custom Multi-Vendor Marketplaces",
        description:
          "Scalable marketplace platforms supporting vendor onboarding, automated commission splits, seller dashboards, and unified customer checkout.",
        features: [
          "Automated payout routing via Stripe Connect",
          "Individual vendor management portals and inventory controls",
          "Aggregated reviews, dispute management, and moderation tools",
        ],
      },
      {
        title: "Omnichannel Logistics & ERP Integrations",
        description:
          "Automated middleware pipelines connecting e-commerce stores with ERPs (SAP, NetSuite), Warehouse Management Systems (WMS), and shipping carriers.",
        features: [
          "Real-time carrier rate calculations and label generation",
          "Automated order routing to nearest regional fulfillment centers",
          "Automated tracking notifications and return merchandise management",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Full-spectrum e-commerce capabilities",
    description:
      "From high-conversion UI design to deep backend payment tokenization, our engineering team covers the entire transactional lifecycle.",
    items: [
      {
        title: "Headless Storefront Engineering",
        description:
          "Building decoupled frontends that load product catalogs instantaneously and deliver seamless user experiences across mobile and desktop.",
        icon: ShoppingCart,
        details: [
          "Next.js App Router & React Server Components",
          "Edge-cached product catalog caching",
          "Optimistic cart updates and instant micro-interactions",
        ],
      },
      {
        title: "Global Payment Gateway Integration",
        description:
          "Integrating multi-currency payment providers, localized alternative payment methods (APMs), digital wallets, and tokenized subscriptions.",
        icon: CreditCard,
        details: [
          "Stripe, Adyen, and PayPal Enterprise integrations",
          "Apple Pay, Google Pay, and Klarna / Afterpay BNPL",
          "SCA / 3D Secure 2.0 automated compliance",
        ],
      },
      {
        title: "Inventory & Fulfillment Automation",
        description:
          "Connecting digital storefronts with physical fulfillment hubs to automate order allocation, tracking updates, and return logistics.",
        icon: PackageCheck,
        details: [
          "Automated inventory reservation during checkout",
          "Multi-location fulfillment routing logic",
          "Real-time dispatch webhooks to logistics partners",
        ],
      },
      {
        title: "Faceted Search & Merchandising",
        description:
          "Implementing lightning-fast search engines with typo tolerance, faceted filtering, personalized recommendations, and dynamic merchandising rules.",
        icon: Zap,
        details: [
          "Algolia, Meilisearch, and Elasticsearch indexing",
          "Predictive search autocomplete and synonym handling",
          "Automated out-of-stock deprioritization",
        ],
      },
      {
        title: "Continuous Sync & Middleware",
        description:
          "Engineering fault-tolerant event-driven pipelines that synchronize catalog data, customer accounts, and sales ledgers with ERP systems.",
        icon: RefreshCw,
        details: [
          "Webhook event ingestion with automated retries",
          "Idempotent order queue processing",
          "Data cleansing and schema transformation",
        ],
      },
      {
        title: "Security, Fraud & Compliance",
        description:
          "Protecting customer transactional data and corporate revenue with automated fraud scoring, bot mitigation, and data privacy safeguards.",
        icon: ShieldCheck,
        details: [
          "Radar / Signifyd automated fraud prevention",
          "PCI-DSS Level 1 compliant architecture",
          "GDPR / CCPA consent and data anonymization",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "We follow a rigorous methodology to ensure transactional accuracy, data integrity, and flawless execution for your commerce platform.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Commercial requirements & catalog audit",
        description:
          "We analyze your SKU structures, pricing tiers, payment flows, customer journeys, and existing fulfillment workflows to define the ideal architecture.",
        deliverables: [
          "Catalog architecture & SKU taxonomy specification",
          "Payment gateway and fulfillment integration matrix",
          "Replatforming migration strategy and timeline",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Data modeling & API architecture",
        description:
          "We design data pipelines for products, inventory, customers, and orders, establishing strict schemas and synchronization contracts.",
        deliverables: [
          "Product Information Management (PIM) schema",
          "ERP/WMS integration specification",
          "Security and PCI-DSS compliance architecture",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "Conversion-optimized UX & checkout flows",
        description:
          "We craft frictionless product detail pages, quick-view modals, cart drawer flows, and streamlined single-page checkouts verified on mobile devices.",
        deliverables: [
          "Frictionless checkout UX flows",
          "Responsive mobile-first storefront design system",
          "Micro-animations for cart and add-to-bag interactions",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "Clean headless & backend integration",
        description:
          "Our engineers build performant frontends, configure commerce APIs, establish event queues, and connect payment and shipping webhooks.",
        deliverables: [
          "Production-ready Next.js / TypeScript commerce frontend",
          "Resilient order and inventory synchronization middleware",
          "Staging sandbox with simulated payment processing",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "End-to-end checkout & stress testing",
        description:
          "We run automated end-to-end purchasing tests, load-test checkout concurrency under simulated peak conditions, and test failover recovery.",
        deliverables: [
          "High-concurrency load and checkout stress report",
          "Payment gateway scenario validation (cards, wallets, errors)",
          "Cross-device mobile checkout verification",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Zero-loss migration & live deployment",
        description:
          "We execute zero-loss customer and order history migrations, DNS cutovers, real-time transaction monitoring, and operational team training.",
        deliverables: [
          "Customer credential and order history migration",
          "Live payment gateway verification and telemetry",
          "Post-launch operational documentation and support",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "Enterprise commerce platforms and modern tooling",
    description:
      "We utilize proven commerce engines, headless frameworks, and enterprise payment architectures to ensure scalability and rock-solid reliability.",
    stack: [
      {
        category: "Frontend & Headless",
        technologies: [
          "Next.js Commerce",
          "React 18 / 19",
          "Tailwind CSS",
          "TypeScript",
          "GraphQL",
        ],
      },
      {
        category: "Commerce Engines",
        technologies: [
          "Shopify Plus / Storefront API",
          "Medusa.js",
          "Commerce Layer",
          "BigCommerce",
          "Custom Node/Go Engines",
        ],
      },
      {
        category: "Payments & Fraud",
        technologies: [
          "Stripe & Stripe Connect",
          "Adyen",
          "PayPal Enterprise",
          "Stripe Radar",
          "Klarna / Affirm",
        ],
      },
      {
        category: "Search & Operations",
        technologies: [
          "Algolia Search",
          "Meilisearch",
          "ShipStation API",
          "NetSuite ERP Connectors",
          "Redis Cache",
        ],
      },
    ],
    considerations: [
      {
        title: "Zero Checkout Abandonment",
        description:
          "Our checkout flows are stripped of unnecessary redirects, account creation friction, and script bloat to maximize completed conversions.",
        standard: "Single-Page Checkout · <2s Finalization",
      },
      {
        title: "PCI-DSS Data Protection",
        description:
          "Cardholder data is tokenized directly at the client level, meaning sensitive financial credentials never touch your internal servers.",
        standard: "PCI-DSS Level 1 Compliance",
      },
      {
        title: "Idempotent Order Ingestion",
        description:
          "All order creation requests enforce cryptographic idempotency keys, preventing accidental duplicate charges or double dispatches.",
        standard: "Zero Duplicate Transactions",
      },
      {
        title: "Elastic Peak Scaling",
        description:
          "Static generation of product detail pages combined with serverless cart APIs guarantees instant page loads regardless of visitor spikes.",
        standard: "99.99% Availability During Spikes",
      },
    ],
  },

  relevantWork: {
    headline: "E-commerce case studies",
    description:
      "Review how SMEWSYS has helped brands accelerate digital sales and automate complex commerce workflows.",
    projects: [
      {
        title: "Multi-Vendor Marketplace Platform",
        category: "Custom Marketplace",
        description:
          "Architected a scalable marketplace supporting 200+ vendor stores with automated multi-split payouts, real-time inventory, and single-cart checkouts.",
        outcome: "Supported $12M+ in annual GMV with 99.98% operational uptime during holiday sales.",
        technologies: ["Next.js", "Stripe Connect", "TypeScript", "PostgreSQL", "Redis"],
        href: "/work",
      },
      {
        title: "Headless Storefront Replatform",
        category: "Headless D2C Commerce",
        description:
          "Migrated an international apparel retailer from a slow legacy monolithic store to a custom Next.js headless storefront on Shopify Plus.",
        outcome: "Decreased page load times by 74% and improved mobile checkout conversion by 31%.",
        technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Algolia"],
        href: "/work",
      },
      {
        title: "B2B Wholesale Ordering Portal",
        category: "B2B Commerce Platform",
        description:
          "Engineered a private wholesale portal for an industrial equipment distributor, replacing manual PDF orders with automated contract pricing and Net 30 invoicing.",
        outcome: "Eliminated 100% of order entry errors and cut fulfillment processing time from 4 days to 4 hours.",
        technologies: ["React", "Node.js", "ERP Integration", "PostgreSQL"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "web-development",
    "cms-solutions",
    "automation",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Direct answers to typical questions regarding replatforming, headless architecture, and custom e-commerce engineering.",
    items: [
      {
        question: "What is headless commerce and why should our brand consider it?",
        answer:
          "In traditional e-commerce, the frontend user interface and backend database are locked into a single monolithic system, making design changes slow and page performance sluggish. Headless commerce separates the frontend display (built with Next.js) from the backend engine (such as Shopify Plus or a custom API). This decoupling provides near-instantaneous page transitions, complete freedom over your brand experience, superior SEO scores, and the agility to adapt without backend rewrites.",
      },
      {
        question: "Can we migrate from our existing store without losing order history or customer accounts?",
        answer:
          "Yes. We specialize in zero-loss migrations. We write custom ETL scripts to extract, sanitize, and transfer all historical orders, product catalogs, customer profiles, and SEO redirect maps into the new system. We ensure all URL structures are mapped with 301 redirects to protect your organic search rankings.",
      },
      {
        question: "How do you handle complex B2B pricing, wholesale accounts, and credit terms?",
        answer:
          "We build bespoke B2B workflows tailored to your sales process. This includes customer account segmentation, customer-specific price tiering, volume-based tiered discounts, purchase order upload capabilities, tax exemption certificate management, and Net payment terms backed by digital invoicing.",
      },
      {
        question: "How do you ensure our store can handle massive traffic surges during promotions?",
        answer:
          "We engineer for elasticity. By pre-rendering product catalog pages with Incremental Static Regeneration (ISR) and distributing them across global edge CDN nodes, millions of concurrent shoppers can browse your catalog with zero server load. Dynamic cart and checkout actions are served by auto-scaling serverless microservices that automatically scale up during traffic spikes.",
      },
      {
        question: "What payment gateways and international payment methods do you support?",
        answer:
          "We integrate with all tier-one global processors, including Stripe, Adyen, Braintree, and PayPal Enterprise. We also configure local payment methods (such as iDEAL, Bancontact, Giropay), digital wallets (Apple Pay, Google Pay), and buy-now-pay-later (BNPL) providers (Klarna, Affirm, Afterpay).",
      },
      {
        question: "What post-launch maintenance and technical support do you provide?",
        answer:
          "We provide dedicated e-commerce support agreements that include 24/7 uptime monitoring, payment gateway API version updates, seasonal peak readiness audits, continuous performance tuning, and ongoing development for promotional merchandising campaigns.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to scale your digital commerce revenue?",
    description:
      "Whether building a custom storefront, creating a B2B wholesale platform, or migrating from legacy infrastructure, our engineers are ready to help. Let's discuss your project today.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

