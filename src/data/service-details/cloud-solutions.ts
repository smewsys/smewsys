import {
  Cloud,
  Cpu,
  Database,
  Lock,
  RefreshCw,
  Server,
} from "lucide-react";
import { ServiceDetail } from "@/types/service-detail";

export const cloudSolutionsDetail: ServiceDetail = {
  id: "cloud-solutions",
  slug: "cloud-solutions",
  title: "Cloud Solutions",
  badge: "Service Discipline",
  heroHeadline: "Resilient cloud infrastructure and automated DevOps engineering",
  heroSubheadline:
    "We architect secure, cost-optimized cloud environments, containerized clusters, and automated CI/CD pipelines designed for continuous resilience, elastic autoscaling, and zero downtime.",
  metaDescription:
    "SMEWSYS delivers enterprise cloud architecture, AWS/GCP migrations, Infrastructure as Code (Terraform), and automated DevOps CI/CD pipelines. Cut cloud waste and ensure 99.99% uptime.",

  summary: {
    headline: "Engineering elastic cloud foundations that scale without cost sprawl",
    description:
      "Modern cloud computing should provide agility and resilience, not unmanageable bills and fragile server sprawl. SMEWSYS designs and manages production cloud environments on AWS, Google Cloud, and edge platforms using Infrastructure as Code (IaC) and immutable containerization. We eliminate single points of failure, automate deployments, and enforce security policies so your engineering teams can ship features with complete confidence.",
    highlights: [
      {
        title: "High Availability & Zero Downtime",
        description: "Multi-availability zone redundancy, automated failover, and rolling zero-downtime blue/green deployments.",
        metric: "99.99% Uptime Architecture",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description: "100% reproducible environments provisioned via Terraform and OpenTofu, eliminating manual configuration drift.",
        metric: "100% Declarative Stacks",
      },
      {
        title: "FinOps Cloud Cost Optimization",
        description: "Right-sizing instances, auto-scaling thresholds, and reserved allocation strategies to eliminate waste.",
        metric: "Average 35% Cost Reduction",
      },
    ],
  },

  primaryCtaPrompt: {
    headline: "Ready to modernize your cloud infrastructure or streamline DevOps?",
    description: "Whether planning a migration from on-premise, reducing runaway cloud bills, or implementing container orchestration, our cloud architects are ready to assist.",
    buttonLabel: "Start a Project",
    buttonHref: "/contact",
  },

  businessNeed: {
    headline: "Overcoming the operational risks of unmanaged infrastructure",
    description:
      "Ad-hoc cloud setups and legacy servers create crippling downtime risks, security liabilities, and runaway operational expenses.",
    items: [
      {
        title: "Runaway Cloud Spend & Idle Waste",
        description:
          "Unmonitored resources, unattached storage volumes, and over-provisioned virtual machines quietly drain corporate budgets month after month.",
        impact: "Rigorous FinOps auditing and automated auto-scaling cut unnecessary cloud spend by 30% to 50%.",
      },
      {
        title: "Downtime Risk & Single Points of Failure",
        description:
          "Monolithic single-server setups and manual backup processes leave companies vulnerable to sudden outages and catastrophic data loss.",
        impact: "Multi-region redundancy and automated disaster recovery guarantee rapid RTO and RPO recovery.",
      },
      {
        title: "Slow, Error-Prone Manual Deployments",
        description:
          "Deploying code via manual SSH access or fragile scripts creates inconsistent environments, regressions, and deployment anxiety.",
        impact: "Automated CI/CD pipelines enable safe, repeatable, multi-stage deployments in minutes.",
      },
      {
        title: "Security Exposure & Misconfigurations",
        description:
          "Publicly exposed buckets, unrotated credentials, and open firewall ports represent the most common entry points for enterprise data breaches.",
        impact: "Zero-trust IAM policies and automated vulnerability scanning enforce ironclad protection.",
      },
    ],
  },

  whatWeBuild: {
    headline: "Cloud solutions engineered for enterprise reliability",
    description:
      "We design, provision, and maintain production-grade cloud environments tailored to your specific application requirements and compliance standards.",
    items: [
      {
        title: "Cloud Migration & Modernization",
        description:
          "End-to-end migration of legacy on-premise applications or virtual machines to modern AWS, GCP, or hybrid cloud environments.",
        features: [
          "Zero-downtime database replication and cutover strategies",
          "Re-platforming monoliths into lightweight containerized workloads",
          "Comprehensive post-migration validation and latency benchmarks",
        ],
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Declarative, version-controlled infrastructure definitions using Terraform and OpenTofu that make creating staging and prod environments trivial.",
        features: [
          "Modular Terraform modules with strict parameterization",
          "Automated drift detection and state locking in remote backends",
          "Repeatable multi-region disaster recovery deployments",
        ],
      },
      {
        title: "Automated CI/CD & GitOps Pipelines",
        description:
          "Robust continuous integration and continuous deployment pipelines using GitHub Actions, GitLab CI, or ArgoCD for containerized workloads.",
        features: [
          "Automated linting, testing, and security scanning on pull requests",
          "Zero-downtime blue/green and canary deployment rollouts",
          "One-click automated rollbacks for incident remediation",
        ],
      },
      {
        title: "Container Orchestration & Microservices",
        description:
          "High-density container environments powered by Kubernetes (EKS / GKE) or lightweight serverless container runtimes (AWS ECS / Cloud Run).",
        features: [
          "Horizontal Pod Autoscaling (HPA) driven by traffic metrics",
          "Service mesh networking, mTLS, and internal load balancing",
          "Centralized log aggregation and distributed tracing",
        ],
      },
    ],
  },

  capabilities: {
    headline: "Our cloud engineering capabilities",
    description:
      "Our team of certified cloud architects and DevOps engineers covers every tier of modern infrastructure design and maintenance.",
    items: [
      {
        title: "Cloud Architecture Design",
        description:
          "Designing highly available, well-architected cloud topologies on AWS and Google Cloud optimized for performance and resilience.",
        icon: Cloud,
        details: [
          "Multi-AZ and multi-region network topologies",
          "VPC subnetting, NAT gateways, and private peering",
          "Elastic Load Balancing (ALB / NLB) routing",
        ],
      },
      {
        title: "Kubernetes & Containerization",
        description:
          "Dockerizing applications and orchestrating production Kubernetes clusters with automated healing, scaling, and rolling updates.",
        icon: Server,
        details: [
          "Amazon EKS, Google Cloud GKE, and AWS ECS",
          "Helm chart packaging and GitOps management",
          "Resource limits, requests, and node autoscaling",
        ],
      },
      {
        title: "Automated CI/CD Pipeline Engineering",
        description:
          "Building lightning-fast deployment pipelines that validate code quality, run automated tests, and deploy to staging and production safely.",
        icon: RefreshCw,
        details: [
          "GitHub Actions, GitLab CI, and CircleCI workflows",
          "Container image caching and multi-arch builds",
          "Automated preview environments for open pull requests",
        ],
      },
      {
        title: "Security, IAM & Zero-Trust Governance",
        description:
          "Hardening cloud environments with least-privilege IAM roles, automated secret management, and continuous vulnerability scanning.",
        icon: Lock,
        details: [
          "Least-privilege IAM policies and service account mapping",
          "AWS Secrets Manager and HashiCorp Vault integration",
          "Vulnerability scanning in container registries (ECR / Artifact Registry)",
        ],
      },
      {
        title: "Database Scaling & Disaster Recovery",
        description:
          "Configuring managed databases with automated point-in-time recovery, multi-region read replicas, and fast failover.",
        icon: Database,
        details: [
          "Amazon Aurora, RDS PostgreSQL, and Google Cloud SQL",
          "Automated cross-region snapshot replication",
          "Point-in-Time Recovery (PITR) with verified recovery drills",
        ],
      },
      {
        title: "FinOps & Cloud Cost Optimization",
        description:
          "Auditing active infrastructure to eliminate zombie assets, right-size compute instances, and utilize Savings Plans / Spot instances.",
        icon: Cpu,
        details: [
          "Comprehensive resource utilization audits",
          "Automated non-production environment shutdowns",
          "Reserved Instance (RI) and Savings Plan strategy",
        ],
      },
    ],
  },

  approach: {
    headline: "Our structured 6-stage engineering process",
    description:
      "We apply disciplined DevOps methodologies to plan, build, and validate infrastructure with zero disruption to active business operations.",
    steps: [
      {
        step: 1,
        title: "Discover",
        subtitle: "Infrastructure audit & workload analysis",
        description:
          "We analyze your current servers, resource utilization, deployment bottlenecks, security configurations, and monthly cloud expenditures.",
        deliverables: [
          "Infrastructure health & security vulnerability audit",
          "Cloud spending breakdown and optimization recommendations",
          "Migration readiness and architecture roadmap",
        ],
      },
      {
        step: 2,
        title: "Plan",
        subtitle: "Cloud architecture & topology design",
        description:
          "We design target VPC topologies, security boundaries, container specs, and database replication schemes to establish a robust blueprint.",
        deliverables: [
          "Well-Architected Cloud Topology Diagram",
          "Disaster recovery SLA targets (RTO & RPO)",
          "Step-by-step migration and cutover strategy",
        ],
      },
      {
        step: 3,
        title: "Design",
        subtitle: "Terraform modules & pipeline architecture",
        description:
          "We write clean, modular Terraform declarations and design multi-stage CI/CD workflows tailored to your development team's workflow.",
        deliverables: [
          "Parameterized Terraform infrastructure code",
          "CI/CD workflow diagrams and deployment pipeline specs",
          "IAM privilege matrix and security guardrail policies",
        ],
      },
      {
        step: 4,
        title: "Develop",
        subtitle: "Environment provisioning & containerization",
        description:
          "Our engineers provision the VPCs, configure container clusters, set up managed databases, and build the automated deployment workflows.",
        deliverables: [
          "Fully functional staging and production cloud environments",
          "Automated CI/CD pipelines connected to Git repositories",
          "Container registries with automated image vulnerability scans",
        ],
      },
      {
        step: 5,
        title: "Test",
        subtitle: "Chaos testing, failovers & load stress",
        description:
          "We simulate node failures, database master failovers, heavy synthetic traffic surges, and verify automated recovery mechanisms.",
        deliverables: [
          "Disaster recovery and failover drill verification",
          "Synthetic load and autoscaling benchmark report",
          "Security penetration and compliance scan sign-off",
        ],
      },
      {
        step: 6,
        title: "Launch",
        subtitle: "Zero-downtime cutover & 24/7 observability",
        description:
          "We orchestrate DNS transitions, warm up edge caches, activate real-time APM telemetry, and provide complete documentation and runbooks.",
        deliverables: [
          "Zero-downtime production cutover execution",
          "Real-time monitoring dashboards and alerting integrations",
          "Operational runbooks, architecture diagrams, and team training",
        ],
      },
    ],
  },

  technologyAndStandards: {
    headline: "Cloud technologies and DevOps standards",
    description:
      "We build on leading cloud providers, container orchestration platforms, and Infrastructure as Code runtimes.",
    stack: [
      {
        category: "Cloud Providers",
        technologies: [
          "Amazon Web Services (AWS)",
          "Google Cloud Platform (GCP)",
          "Microsoft Azure",
          "Cloudflare (Workers & CDN)",
          "Vercel (Edge Platform)",
        ],
      },
      {
        category: "Containers & Orchestration",
        technologies: [
          "Docker",
          "Kubernetes (EKS / GKE)",
          "AWS ECS / Fargate",
          "Google Cloud Run",
          "Helm",
        ],
      },
      {
        category: "Infrastructure as Code",
        technologies: [
          "Terraform",
          "OpenTofu",
          "AWS CloudFormation",
          "Terragrunt",
          "Ansible",
        ],
      },
      {
        category: "CI/CD & Observability",
        technologies: [
          "GitHub Actions",
          "GitLab CI",
          "Datadog",
          "Prometheus & Grafana",
          "AWS CloudWatch",
        ],
      },
    ],
    considerations: [
      {
        title: "Zero-Downtime Deployments",
        description:
          "All production deployments utilize blue/green or rolling canary deployments to ensure zero service interruption for end users.",
        standard: "Rolling Zero-Downtime Rollouts",
      },
      {
        title: "Immutable Infrastructure as Code",
        description:
          "Zero manual configuration changes in production consoles. 100% of infrastructure changes are code-reviewed and deployed via Git.",
        standard: "Strict GitOps & Terraform",
      },
      {
        title: "Rapid Disaster Recovery",
        description:
          "Automated point-in-time database backups and multi-region templates enable complete environment reconstruction in under an hour.",
        standard: "RPO < 5 min · RTO < 60 min",
      },
      {
        title: "Least-Privilege Security Posture",
        description:
          "IAM roles, security groups, and encryption keys are strictly partitioned with automated rotation and zero hardcoded credentials.",
        standard: "SOC2 & ISO 27001 Ready",
      },
    ],
  },

  relevantWork: {
    headline: "Cloud infrastructure case studies",
    description:
      "Discover how SMEWSYS has helped organizations modernize infrastructure, improve uptime, and eliminate cloud waste.",
    projects: [
      {
        title: "Multi-Region Cloud Migration",
        category: "Cloud Migration",
        description:
          "Migrated a mission-critical financial analytics platform from an aging on-premise datacenter to a resilient multi-AZ AWS architecture.",
        outcome: "Achieved 99.99% uptime and reduced monthly infrastructure operational costs by 38%.",
        technologies: ["AWS", "Terraform", "PostgreSQL Aurora", "Docker", "GitHub Actions"],
        href: "/work",
      },
      {
        title: "Kubernetes Cluster Modernization",
        category: "Container Orchestration",
        description:
          "Engineered an autoscaling Google Kubernetes Engine (GKE) environment running 40+ microservices with automated Canary rollouts and Datadog APM.",
        outcome: "Deployment frequency increased from bi-weekly to 15+ automated production deploys daily.",
        technologies: ["GCP", "Kubernetes", "Helm", "GitLab CI", "Datadog"],
        href: "/work",
      },
      {
        title: "Enterprise FinOps Cloud Optimization",
        category: "Cost Optimization",
        description:
          "Conducted an extensive cloud infrastructure audit for a high-growth SaaS company, identifying unattached volumes, idle databases, and over-provisioned nodes.",
        outcome: "Saved over $140,000 annually in recurring cloud expenses without impacting system performance.",
        technologies: ["AWS Cost Explorer", "Terraform", "AWS Compute Optimizer", "CloudWatch"],
        href: "/work",
      },
    ],
  },

  relatedServiceSlugs: [
    "software-development",
    "automation",
    "web-development",
  ],

  faqs: {
    headline: "Frequently Asked Questions",
    description:
      "Answers to frequent questions about cloud architecture, migrations, DevOps automation, and ongoing infrastructure management.",
    items: [
      {
        question: "How do you ensure zero downtime during a cloud migration?",
        answer:
          "We execute phased migrations using data synchronization replication. We set up real-time bidirectional database replication between your legacy server and the target cloud database. Once data is verified in sync, we run parallel tests, conduct smoke testing in staging, warm up caches, and perform an instant DNS cutover with low TTLs. Your users experience seamless continuity throughout the process.",
      },
      {
        question: "Why is Infrastructure as Code (IaC) critical for our team?",
        answer:
          "Managing infrastructure manually by clicking buttons in the AWS or GCP console leads to configuration drift, undocumented changes, and disaster recovery nightmares. With Infrastructure as Code (Terraform), every server, database, firewall rule, and bucket is defined in human-readable code stored in Git. This allows you to track changes, review infrastructure modifications like software PRs, and spin up identical staging environments in minutes.",
      },
      {
        question: "Can you help reduce our existing monthly AWS or Google Cloud bill?",
        answer:
          "Yes. Our FinOps cloud optimization audit evaluates instance utilization, identifies unattached EBS storage and idle resources, optimizes container pod density, and implements intelligent auto-scaling. We also formulate strategic Reserved Instance (RI) and Savings Plan strategies to maximize volume discounts, typically reducing client bills by 30% to 50%.",
      },
      {
        question: "Should we use Kubernetes or managed serverless containers (like AWS ECS or Cloud Run)?",
        answer:
          "If your application consists of a few microservices with standard traffic patterns, serverless container platforms (like AWS ECS Fargate or Google Cloud Run) are often ideal because they eliminate cluster management overhead. For complex multi-service architectures requiring advanced service meshes, custom networking, and cross-cloud portability, Kubernetes (EKS / GKE) provides unparalleled power. We evaluate your engineering capabilities and technical needs to choose the most pragmatic option.",
      },
      {
        question: "How do you handle secrets, credentials, and regulatory compliance?",
        answer:
          "We enforce a zero-trust model. No passwords, API tokens, or SSH keys are ever stored in code repositories. All secrets are stored in encrypted vaults (AWS Secrets Manager, HashiCorp Vault) and injected into container runtimes at launch. All network traffic is encrypted with TLS 1.3, and data stores are encrypted at rest with managed KMS keys.",
      },
      {
        question: "Do you offer ongoing DevOps support and cloud monitoring?",
        answer:
          "Yes. We offer Managed Cloud SLAs that include 24/7 incident response, continuous security patching, proactive capacity planning, automated backup verification, and dedicated DevOps sprint support for engineering teams.",
      },
    ],
  },

  closingCta: {
    heading: "Ready to modernize and scale your cloud infrastructure?",
    description:
      "Eliminate downtime, automate deployments, and cut cloud waste. Contact our cloud architects today to discuss your infrastructure goals.",
    primaryLabel: "Start a Project",
    primaryHref: "/contact",
    secondaryLabel: "Get in Touch",
    secondaryHref: "/contact",
  },
};

