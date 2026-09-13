import {
  Bell,
  CheckCheck,
  Cog,
  Cpu,
  RefreshCw,
  Workflow,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const automationDetail: ServiceDetail = {
  id: "automation",
  slug: "automation",
  title: "Automation",
  badge: "Service Discipline",
  heroHeadline: "Intelligent workflow automation and enterprise system integration",
  heroSubheadline:
    "We design, build, and deploy automated data pipelines, custom middleware, and resilient workflow systems that eliminate repetitive manual labor, prevent human error, and accelerate turnaround times.",
  metaDescription:
    "SMEWSYS delivers enterprise workflow automation, API integration pipelines, and event-driven data synchronization. Eliminate operational bottlenecks and drive massive business efficiency.",

  summary: {
    headline: "Transforming manual bottlenecks into frictionless automated operations",
    description:
      "When business processes rely on manual spreadsheet copying, repetitive email handoffs, or re-entering data between disparate systems, costly delays and errors are inevitable. SMEWSYS builds reliable automation architectures and system integrations that connect your ERP, CRM, accounting, and fulfillment platforms into a cohesive, self-healing pipeline.",
    highlights: [
      {
        title: "Zero Human Error in Operations",
        description: "Automated data validation and schema transformation ensure transactional accuracy across every connected business system.",
        metric: "99.9% Accuracy Rate",
      },
      {
        title: "Drastic Cycle Time Reduction",
        description: "Transform multi-day approval and data entry workflows into real-time, event-triggered background automations.",
        metric: "90% Faster Turnaround",
      },
      {
        title: "Self-Healing Reliability",
        description: "Built-in dead-letter queues, idempotent workers, and automated retry mechanisms that handle upstream API downtime gracefully.",
        metric: "Fault-Tolerant Pipelines",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Have manual operational processes draining your team's time?",
    description: "Whether connecting enterprise platforms, automating order reconciliation, or building custom integration pipelines, our automation engineers can help.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "The true cost of manual operational friction",
    description:
      "Manual processes may feel manageable in early stages, but they quickly become expensive liabilities as transactional volume grows.",
    items: [
      {
        title: "Human Error in Manual Data Entry",
        description:
          "Manually retyping customer orders, invoices, or customer support details inevitably introduces typos, duplicate records, and lost revenues.",
        impact: "Automated end-to-end data validation eradicates manual data entry mistakes completely.",
      },
      {
        title: "Fragmented Systems & Data Silos",
        description:
          "When marketing, sales, logistics, and finance run on isolated software, leadership lacks single-source-of-truth operational visibility.",
        impact: "Unified bidirectional API integrations keep records continuously synchronized in real-time.",
      },
      {
        title: "Expensive Operational Overhead",
        description:
          "Spending valuable employee hours on repetitive copy-paste administrative chores limits your team's ability to focus on high-value growth.",
        impact: "Automating routine tasks frees thousands of hours per quarter, allowing teams to focus on strategic execution.",
      },
      {
        title: "Slow Customer & Partner Turnaround",
        description:
          "Delays in processing inquiries, generating invoices, or onboarding vendors degrade brand reputation and prompt client attrition.",
        impact: "Event-triggered automation delivers instantaneous acknowledgments, onboarding, and fulfillment.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Targeted automation solutions that drive efficiency",
    description:
      "We engineer robust, scalable automation architectures tailored to your specific organizational workflows and data ecosystems.",
    items: [
      {
        title: "Enterprise System & API Integrations",
        description:
          "Deep bidirectional connectors linking ERPs (NetSuite, SAP), CRMs (Salesforce, HubSpot), payment gateways, and custom databases.",
        features: [
          "Type-safe API contract mapping and schema transformation",
          "Automated token refreshes, rate-limiting, and backoff logic",
          "Comprehensive logging and audit trails for every data event",
        ],
      },
      {
        title: "End-to-End Workflow Automation",
        description:
          "Complex multi-stage automated pipelines spanning approval chains, document generation, digital signatures, and notification triggers.",
        features: [
          "Conditional branching logic and human-in-the-loop approvals",
          "Automated PDF document compilation and e-signature dispatch",
          "Multi-channel status notifications via Slack, SMS, and email",
        ],
      },
      {
        title: "Data Synchronization & Reconciliation",
        description:
          "Continuous event-driven synchronization tools that reconcile inventory, billing ledgers, and customer records across platforms.",
        features: [
          "Real-time event streaming and batch reconciliation fallback",
          "Automated anomaly detection and duplicate record merging",
          "Discrepancy alerting and automated rollback capabilities",
        ],
      },
      {
        title: "Automated Reporting & Analytics Pipelines",
        description:
          "Automated data extraction, aggregation, and synthesis pipelines that deliver scheduled executive dashboards and KPI summaries.",
        features: [
          "Scheduled extraction from disparate cloud databases",
          "Data warehouse loading (BigQuery, Snowflake, ClickHouse)",
          "Automated weekly summary digests delivered to management",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Our automation engineering capabilities",
    description:
      "We design resilient, enterprise-grade pipelines that maintain data integrity even when third-party services experience outages.",
    items: [
      {
        title: "Event-Driven Pipeline Architecture",
        description:
          "Building reactive systems that respond instantaneously to business events using webhooks, message brokers, and serverless functions.",
        icon: Workflow,
        details: [
          "Webhook ingestion endpoints with HMAC verification",
          "Message brokers (RabbitMQ, AWS SQS, Apache Kafka)",
          "Idempotent event processing to prevent duplicate actions",
        ],
      },
      {
        title: "Custom Middleware & API Adapters",
        description:
          "Engineering lightweight, high-throughput microservices that bridge incompatible legacy formats (SOAP, XML, CSV) into modern JSON.",
        icon: Cog,
        details: [
          "High-performance Node.js and Go micro-services",
          "Complex schema transformations and data enrichment",
          "Low-latency memory caching with Redis",
        ],
      },
      {
        title: "Resilient Retry & Dead-Letter Handling",
        description:
          "Implementing robust fault tolerance patterns so temporary network blips or partner downtime never result in dropped data.",
        icon: RefreshCw,
        details: [
          "Exponential backoff with jitter retry algorithms",
          "Isolated dead-letter queues (DLQ) for failed messages",
          "Automated administrator alerts with one-click re-drives",
        ],
      },
      {
        title: "Continuous Data Validation & Guardrails",
        description:
          "Validating every payload against strict schemas before executing writes to prevent corrupt or malformed entries in downstream systems.",
        icon: CheckCheck,
        details: [
          "Runtime schema verification with Zod and Pydantic",
          "Business rule compliance validation",
          "Automated quarantine for anomalous payloads",
        ],
      },
      {
        title: "Proactive Alerting & Health Telemetry",
        description:
          "Monitoring the status of every pipeline in real-time with latency metrics, queue depth tracking, and immediate incident notification.",
        icon: Bell,
        details: [
          "Integration with Datadog, Prometheus, and Slack",
          "Queue starvation and threshold breach alerts",
          "Real-time pipeline performance telemetry",
        ],
      },
      {
        title: "Secure Enterprise Credential Vaulting",
        description:
          "Ensuring all third-party API tokens, SSH keys, and database passwords are encrypted with enterprise-grade key management.",
        icon: Cpu,
        details: [
          "AWS Secrets Manager and HashiCorp Vault",
          "Automated token rotation protocols",
          "Zero hardcoded credentials across all repositories",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "We analyze operational processes rigorously before writing automation code, ensuring resilient and verifiable efficiency gains.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Process mapping & friction analysis",
        description:
          "We shadow your team's current manual workflows, document API endpoints, measure processing times, and identify failure points.",
        deliverables: [
          "As-Is vs. To-Be operational workflow blueprint",
          "System connectivity and API feasibility assessment",
          "ROI and time-savings projection model",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Architecture & schema design",
        description:
          "We define event schemas, error-handling policies, concurrency limits, and retry protocols to design a self-healing pipeline.",
        deliverables: [
          "Event sequence and integration architecture diagrams",
          "Data transformation and mapping specification",
          "Security, authentication, and compliance plan",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "Exception workflows & notification UX",
        description:
          "We design human-in-the-loop escalation flows, administrator notification templates, and reconciliation dashboards.",
        deliverables: [
          "Exception handling and alert notification templates",
          "Administrative reconciliation UI mockups",
          "Manual intervention and re-drive protocols",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "Middleware & pipeline implementation",
        description:
          "Our engineers write type-safe connectors, configure queue workers, implement schema validators, and connect webhook handlers.",
        deliverables: [
          "Production-ready automation codebase",
          "Configured message queues and worker services",
          "Automated unit and integration test coverage",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "Simulated load & failure testing",
        description:
          "We simulate upstream API outages, rate-limiting triggers, malformed payloads, and high-volume burst events to verify resilience.",
        deliverables: [
          "Chaos engineering and failure recovery validation",
          "Throughput and concurrency stress test report",
          "Data integrity and reconciliation sign-off",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Phased rollout & live observability",
        description:
          "We run the automated pipelines in shadow mode alongside manual processes to verify identical outcomes before final cutover.",
        deliverables: [
          "Shadow execution verification report",
          "Production cutover with live dashboard monitoring",
          "Operational runbooks and team handoff",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "Automation technologies and engineering standards",
    description:
      "We build on battle-tested integration runtimes, message brokers, and serverless compute platforms designed for high throughput.",
    stack: [
      {
        category: "Integration & Orchestration",
        technologies: [
          "Temporal.io",
          "Node.js & TypeScript",
          "Python Worker Engines",
          "AWS Step Functions",
          "n8n (Self-Hosted)",
        ],
      },
      {
        category: "Message Queues & Streaming",
        technologies: [
          "RabbitMQ",
          "AWS SQS / SNS",
          "Redis Streams & BullMQ",
          "Apache Kafka",
          "Google Cloud Pub/Sub",
        ],
      },
      {
        category: "Enterprise Connectors",
        technologies: [
          "Salesforce & HubSpot APIs",
          "SAP & NetSuite ERPs",
          "Stripe & Banking Webhooks",
          "QuickBooks & Xero",
          "Zendesk & Jira APIs",
        ],
      },
      {
        category: "Observability & Security",
        technologies: [
          "Datadog APM",
          "OpenTelemetry",
          "AWS Secrets Manager",
          "Sentry Error Tracking",
          "Prometheus & Grafana",
        ],
      },
    ],
    considerations: [
      {
        title: "Idempotent Event Execution",
        description:
          "Every message processing worker uses cryptographic idempotency keys to ensure actions are never duplicated during network retries.",
        standard: "Strict Idempotency Guarantees",
      },
      {
        title: "Dead-Letter Queue Isolation",
        description:
          "Poison-pill payloads or permanent upstream errors are safely isolated into dead-letter queues without stalling the main pipeline.",
        standard: "Zero Blocked Pipelines",
      },
      {
        title: "Comprehensive Audit Telemetry",
        description:
          "Every transactional state change is logged with timestamped request/response payloads for total regulatory visibility.",
        standard: "100% Immutable Audit History",
      },
      {
        title: "Automated Rate Limiting & Backoff",
        description:
          "Intelligent throttling ensures your automation pipelines never exceed third-party vendor API quotas or incur penalty blocks.",
        standard: "Adaptive Token-Bucket Rate Limiting",
      },
    ],
  },

  relevantWork: {
    headline: "Workflow automation case studies",
    description:
      "Review how SMEWSYS has helped organizations eliminate hundreds of manual hours and streamline core operations.",
    projects: [
      {
        title: "Automated Procurement & Approval Pipeline",
        category: "Workflow Automation",
        description:
          "Engineered an automated procurement pipeline that replaced email chains with Slack-based stage approvals and direct NetSuite purchase order creation.",
        outcome: "Saved 2,000+ staff hours per quarter across 3 departments with 100% audit accuracy.",
        technologies: ["TypeScript", "AWS SQS", "NetSuite API", "Slack Webhooks"],
        href: "/work",
      },
      {
        title: "Omnichannel Inventory Synchronization",
        category: "Real-Time Integration",
        description:
          "Connected a centralized warehouse ERP with Shopify, Amazon, and regional B2B portals using an event-driven Redis streaming architecture.",
        outcome: "Sub-second stock synchronization across 45,000 SKUs, eliminating overselling incidents entirely.",
        technologies: ["Node.js", "Redis Streams", "Shopify API", "PostgreSQL"],
        href: "/work",
      },
      {
        title: "Billing & Financial Reconciliation Engine",
        category: "Data Reconciliation",
        description:
          "Automated monthly client billing reconciliation by matching Stripe transactional records with internal usage databases and generating QuickBooks invoices.",
        outcome: "Reduced billing turnaround from 7 business days to 15 minutes each month.",
        technologies: ["Python", "Stripe API", "QuickBooks Online", "FastAPI"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "software-development",
    "cloud-solutions",
    "ai-solutions",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Direct answers to key questions about planning, deploying, and maintaining enterprise workflow automation with SMEWSYS.",
    items: [
      {
        question: "How do you prevent duplicate actions when an integration retries after a network failure?",
        answer:
          "We enforce strict idempotency at every stage of the pipeline. When an event is generated, it is stamped with a unique deterministic idempotency key. Before processing, our workers check whether an action with that key has already executed. If a network timeout occurs and the event is re-delivered, the worker recognizes the duplicate key and skips re-execution, preventing duplicate charges, double orders, or repeated notifications.",
      },
      {
        question: "What happens if an external API (like our CRM or ERP) goes down?",
        answer:
          "Our architectures are designed with fault-tolerant queuing. When an external partner API becomes unavailable, events are safely queued in durable message brokers (such as RabbitMQ or AWS SQS). Exponential backoff retries continue automatically until service is restored. If an error persists, the message is routed to an isolated Dead-Letter Queue (DLQ) with automated alerting, ensuring zero data is ever lost.",
      },
      {
        question: "Can automation connect with our custom on-premise legacy database?",
        answer:
          "Yes. We frequently build secure agent connectors or private VPN/VPC tunnels that bridge modern cloud services with on-premise SQL Server, Oracle, or proprietary file systems without exposing your internal network to the public internet.",
      },
      {
        question: "Is custom code better than no-code platforms like Zapier or Make?",
        answer:
          "No-code tools are great for lightweight, non-critical tasks. However, as transactional volume scales, no-code per-task pricing becomes prohibitively expensive, and these tools lack strict data validation, version control, complex branch orchestration, and custom security compliance. Custom-engineered automation provides infinite scalability, near-zero marginal operational cost, complete privacy compliance, and rock-solid reliability.",
      },
      {
        question: "How long does a typical automation integration project take?",
        answer:
          "Focused point-to-point integrations (such as connecting a custom web app with an ERP or billing tool) typically take 3 to 6 weeks. Multi-system enterprise orchestration spanning multiple departments and complex reconciliation logic generally takes 8 to 12 weeks, with phased milestone deliverables.",
      },
      {
        question: "How do we monitor and manage automations on a day-to-day basis?",
        answer:
          "We provide customized administrative dashboards and automated health digests. You receive real-time visibility into message throughput, active queues, and immediate notifications (via Slack or email) if an anomaly requires human intervention.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to eliminate operational bottlenecks and human error?",
    description:
      "Streamline your operations with robust, event-driven automation. Contact our engineering team today to map your workflows and scope an integration solution.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

