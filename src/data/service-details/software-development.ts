import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const softwareDevelopmentDetail: ServiceDetail = {
  id: "software-development",
  slug: "software-development",
  title: "Software Development",
  badge: "Service Discipline",
  heroHeadline: "Custom software systems and platforms built for operational resilience",
  heroSubheadline:
    "We engineer tailored enterprise software, distributed backends, and internal tooling to solve complex operational challenges, eradicate manual bottlenecks, and support long-term company growth.",
  metaDescription:
    "SMEWSYS builds bespoke enterprise software, microservices, and internal operations platforms. Engineered with modern architectures for scale, security, and mission-critical reliability.",

  summary: {
    headline: "Engineering systems tailored to your unique operational logic",
    description:
      "When off-the-shelf software forces compromise, bespoke software creates competitive leverage. SMEWSYS develops custom platforms, APIs, and business systems designed around your proprietary processes. We prioritize strict type safety, modular microservice architecture, and defensive data design to deliver software that scales effortlessly.",
    highlights: [
      {
        title: "High-Throughput Concurrency",
        description: "Engineered to handle high transaction volumes with low latency and resilient failover architecture.",
        metric: "99.99% Uptime Architecture",
      },
      {
        title: "Clean Domain Architecture",
        description: "Decoupled domain models, strict boundary interfaces, and automated test coverage that eliminate architectural decay.",
        metric: "Enterprise Grade",
      },
      {
        title: "Zero Vendor Lock-In",
        description: "100% client code ownership with portable containerized deployments and open, well-documented standards.",
        metric: "Full Ownership",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Need custom software engineered for your organization?",
    description: "Whether you require a new operational system, API modernization, or internal tooling, our senior engineers are ready to scope your technical blueprint.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "Overcoming the limitations of packaged software",
    description:
      "Growing companies frequently hit walls with commercial SaaS products that cannot accommodate bespoke business logic or scale with data demands.",
    items: [
      {
        title: "Disjointed SaaS Fragmentation",
        description:
          "Managing ten different SaaS subscriptions creates data silos, sync errors, and escalating subscription overhead across departments.",
        impact: "A unified custom platform consolidates tooling and lowers total cost of ownership by up to 45%.",
      },
      {
        title: "Infrequent & Inflexible Workflows",
        description:
          "Forcing teams to adapt their core operating procedures to match rigid third-party software constraints handicaps productivity.",
        impact: "Bespoke logic engineered around your operational workflow accelerates internal turnaround by 60%.",
      },
      {
        title: "Legacy Monolith Degradation",
        description:
          "Outdated internal systems become brittle over time, creating critical business risk and making new feature implementation prohibitively slow.",
        impact: "Systematic modernization and API refactoring eliminate technical debt and risk.",
      },
      {
        title: "Data Sovereignty & Security Exposure",
        description:
          "Storing proprietary business intelligence on external third-party multi-tenant clouds complicates regulatory compliance and audit tracking.",
        impact: "Private, dedicated architecture guarantees compliance, data isolation, and granular auditability.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Custom software solutions engineered for performance",
    description:
      "We design and build bespoke software systems engineered specifically to solve mission-critical business requirements.",
    items: [
      {
        title: "Enterprise Management Systems",
        description:
          "Centralized platforms that manage core operational workflows, multi-department approvals, inventory, resource scheduling, and reporting.",
        features: [
          "Role-based access control (RBAC) and enterprise SSO",
          "Comprehensive audit logging and historical tracing",
          "Automated scheduled jobs and background worker pipelines",
        ],
      },
      {
        title: "API & Microservice Architectures",
        description:
          "High-performance REST and GraphQL microservices designed for elastic autoscaling, decoupled service boundaries, and low-latency response times.",
        features: [
          "Type-safe API gateways and contract validation",
          "Distributed caching and message queue queuing",
          "Automated schema documentation and SDK generation",
        ],
      },
      {
        title: "Internal Operations & Analytics Portals",
        description:
          "Tailored internal tools and operational dashboards that give business stakeholders real-time visibility and direct control over operations.",
        features: [
          "Real-time event streaming and live data dashboards",
          "Custom data modeling and automated report generation",
          "Bi-directional data sync with external systems",
        ],
      },
      {
        title: "Legacy System Modernization",
        description:
          "Phased refactoring of legacy codebases into modern containerized architectures without interrupting day-to-day business continuity.",
        features: [
          "Strangler fig pattern migration to reduce cutover risk",
          "Database schema normalization and zero-loss ETL",
          "Modern CI/CD automated deployment pipelines",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Core software engineering capabilities",
    description:
      "Our software engineering practice focuses on robust backend architectures, distributed messaging, and enterprise maintainability.",
    items: [
      {
        title: "Distributed Systems Architecture",
        description:
          "Designing resilient, horizontally scalable services using message brokers, event streaming, and fault-tolerant patterns.",
        icon: Layers,
        details: [
          "Event-driven architecture (EDA)",
          "Kafka and RabbitMQ message queues",
          "Resilient circuit breakers and retries",
        ],
      },
      {
        title: "Database Design & Optimization",
        description:
          "Architecting performant relational and document databases with optimized indexing, partitioning, and automated migrations.",
        icon: Cpu,
        details: [
          "PostgreSQL, MySQL, and Redis caching",
          "Schema normalization and partition indexing",
          "Zero-downtime database migrations",
        ],
      },
      {
        title: "API Gateway & Microservices",
        description:
          "Building secure, standardized API layers that handle rate limiting, token authentication, and high-concurrency request routing.",
        icon: Workflow,
        details: [
          "FastAPI, Node.js, and Go services",
          "GraphQL and OpenAPI specifications",
          "JWT, OAuth2, and mutual TLS security",
        ],
      },
      {
        title: "Enterprise Security & Compliance",
        description:
          "Implementing defense-in-depth security measures to protect customer data, intellectual property, and transactional integrity.",
        icon: ShieldCheck,
        details: [
          "Data encryption at rest and in transit",
          "Granular role-based access control",
          "OWASP and SOC2 compliance alignment",
        ],
      },
      {
        title: "Automated QA & Test Engineering",
        description:
          "Ensuring total system reliability through rigorous unit testing, integration tests, mock environments, and load testing.",
        icon: Terminal,
        details: [
          "Unit, integration, and contract testing",
          "Automated regression suites in CI/CD",
          "K6 load testing and concurrency stress testing",
        ],
      },
      {
        title: "Full-Stack System Integration",
        description:
          "Seamlessly connecting proprietary software with existing enterprise ERPs, CRMs, banking gateways, and third-party web services.",
        icon: Code2,
        details: [
          "Custom webhook ingestion engines",
          "Bidirectional sync and reconciliation",
          "Legacy SOAP to modern REST adapters",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "From technical domain modeling through automated container deployment, we build software with architectural discipline.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Domain analysis & system boundaries",
        description:
          "We analyze your business logic, user roles, transactional bottlenecks, and integration requirements to map out the domain model.",
        deliverables: [
          "Domain entity model & user stories",
          "Technical feasibility & constraint report",
          "Architecture scope & milestone roadmap",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Technical architecture & data design",
        description:
          "We establish database schemas, API contracts, security protocols, and hosting topology before writing production code.",
        deliverables: [
          "Entity Relationship Diagram (ERD)",
          "API specifications (OpenAPI / Swagger)",
          "Infrastructure & scaling blueprint",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "System workflows & user interfaces",
        description:
          "We design intuitive operational UI flows, administrative layouts, and interactive dashboard wireframes that empower users.",
        deliverables: [
          "High-fidelity UI mockups & component specs",
          "Interactive UX prototypes for key workflows",
          "Accessibility & ergonomic UI guidelines",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "Modular backend & frontend implementation",
        description:
          "Senior engineers write clean, maintainable, type-safe code with automated testing, continuous integration, and regular code reviews.",
        deliverables: [
          "Modular, type-safe codebase (TypeScript/Go/Python)",
          "Automated unit & integration test suites",
          "Continuous staging deployment previews",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "Load, security, and edge-case validation",
        description:
          "We perform concurrency testing, data integrity verification, security penetration scans, and user acceptance walkthroughs.",
        deliverables: [
          "Concurrency & load performance audit",
          "Security vulnerability remediation report",
          "User Acceptance Testing (UAT) sign-off",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Production deployment & live monitoring",
        description:
          "We manage data migrations, production cutover, health telemetry setup, and comprehensive technical documentation handoff.",
        deliverables: [
          "Zero-downtime deployment execution",
          "Real-time alerting & APM instrumentation",
          "Repository & architecture documentation",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "Proven backend languages and engineering standards",
    description:
      "We choose backend languages, frameworks, and storage engines known for high concurrency, memory safety, and long-term maintainability.",
    stack: [
      {
        category: "Backend & Languages",
        technologies: [
          "Node.js & TypeScript",
          "Python & FastAPI",
          "Go (Golang)",
          "NestJS",
          "Express",
        ],
      },
      {
        category: "Databases & Caching",
        technologies: [
          "PostgreSQL",
          "Redis",
          "MongoDB",
          "Prisma & TypeORM",
          "ClickHouse",
        ],
      },
      {
        category: "Messaging & Architecture",
        technologies: [
          "RabbitMQ",
          "Apache Kafka",
          "RESTful APIs",
          "GraphQL",
          "gRPC",
        ],
      },
      {
        category: "DevOps & Containers",
        technologies: [
          "Docker",
          "Kubernetes",
          "AWS ECS / EKS",
          "GitHub Actions",
          "Terraform IaC",
        ],
      },
    ],
    considerations: [
      {
        title: "Resilient Concurrency",
        description:
          "Background queues and non-blocking I/O architectures ensure that intensive background processing never degrades real-time API latency.",
        standard: "Asynchronous Queue Workers",
      },
      {
        title: "Data Integrity & Transactions",
        description:
          "Strict ACID transaction boundaries and idempotent API endpoints prevent data duplication and race conditions.",
        standard: "ACID Compliance & Idempotency",
      },
      {
        title: "Strict Interface Contracts",
        description:
          "Type-safe contracts and runtime schema validation (Zod / Pydantic) guarantee that corrupt inputs fail immediately before reaching business logic.",
        standard: "End-to-End Type Safety",
      },
      {
        title: "Automated Regression Gates",
        description:
          "Every pull request must pass automated unit, integration, and static security analysis before deployment to staging.",
        standard: "100% CI Automated Gates",
      },
    ],
  },

  relevantWork: {
    headline: "Custom software engineering case studies",
    description:
      "Explore how SMEWSYS has helped organizations replace legacy bottlenecks with high-performance software systems.",
    projects: [
      {
        title: "Enterprise Resource Platform (ERP)",
        category: "Custom Platform",
        description:
          "Architected an end-to-end ERP that unified procurement, inventory control, and multi-warehouse logistics across five international entities.",
        outcome: "Consolidated 5 legacy tools into one platform and cut operational overhead by 40%.",
        technologies: ["TypeScript", "PostgreSQL", "FastAPI", "Docker", "Redis"],
        href: "/work",
      },
      {
        title: "High-Throughput Telemetry Ingestion API",
        category: "API & Microservices",
        description:
          "Engineered a distributed event processing pipeline ingesting millions of daily device telemetry signals with zero packet loss.",
        outcome: "Sub-50ms query latency under peak load with 99.99% operational uptime.",
        technologies: ["Go", "Kafka", "PostgreSQL", "Kubernetes"],
        href: "/work",
      },
      {
        title: "Automated Compliance & Audit Suite",
        category: "Internal Software",
        description:
          "Developed an automated data validation platform for a regulated financial service firm, eliminating manual spreadsheet verifications.",
        outcome: "Saved 1,500+ compliance review hours per quarter with immutable audit trails.",
        technologies: ["Node.js", "TypeScript", "React", "PostgreSQL"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "web-development",
    "cloud-solutions",
    "automation",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Clear answers to key questions about planning, developing, and deploying custom software solutions with SMEWSYS.",
    items: [
      {
        question: "When is custom software development preferable over commercial off-the-shelf software?",
        answer:
          "Off-the-shelf software is ideal for commodity workflows like generic email or standard office accounting. However, when your core operational processes define your competitive advantage, when commercial tools cannot integrate with your infrastructure, or when per-seat licensing becomes economically punitive, custom software provides vastly superior ROI, complete workflow alignment, and permanent asset ownership.",
      },
      {
        question: "How do you ensure data security and regulatory compliance?",
        answer:
          "Security is integrated at every tier. We enforce role-based access control, cryptographic token authentication, automated input sanitization to eliminate injection attacks, and strict TLS encryption in transit and AES-256 at rest. We also provide immutable audit logging to support compliance reviews (SOC2, GDPR, HIPAA-readiness).",
      },
      {
        question: "Can custom software integrate with our existing legacy systems?",
        answer:
          "Yes. A significant portion of our work involves building modern integration layers, REST/GraphQL middleware, or message queues that securely interface with legacy databases, on-premise ERPs, and external partner APIs without requiring complete legacy system teardown.",
      },
      {
        question: "What does code ownership and licensing look like?",
        answer:
          "You own 100% of the custom code, architecture diagrams, and database schemas created for your project. SMEWSYS retains zero proprietary claim on your custom solution upon final project delivery.",
      },
      {
        question: "How do you handle software maintenance and system scaling post-launch?",
        answer:
          "We offer comprehensive ongoing engineering SLAs that include 24/7 uptime monitoring, critical security patching, performance optimization, database vacuuming/indexing, and allocated engineering sprint cycles for roadmap feature development.",
      },
      {
        question: "What is your development methodology and delivery cadence?",
        answer:
          "We operate in disciplined two-week agile sprints. Each sprint includes clear milestone commitments, staging environment deployments for client review, automated testing reports, and direct engineer-to-client communication.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to build scalable custom software?",
    description:
      "Let's turn complex operational logic into a reliable, high-performance software system. Contact our engineering team today to discuss your architecture and requirements.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

