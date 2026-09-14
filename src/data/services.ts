import {
  Globe,
  Code2,
  ShoppingCart,
  Database,
  Cog,
  Cloud,
  Sparkles,
  LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  href: string;
  capabilities: string[];
}

export const services: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "High-performance websites and web applications built with modern frameworks, optimised for speed, accessibility, and conversion.",
    description:
      "High-performance websites and digital experiences engineered for lightning speed, search visibility, and frictionless user journeys that convert visitors into clients.",
    icon: Globe,
    href: "/services/web-development",
    capabilities: [
      "Custom Web Applications",
      "Corporate & Marketing Portals",
      "Performance & SEO Architecture",
      "Accessibility & WCAG 2.2 Compliance",
    ],
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom software solutions engineered to solve specific business problems — from internal tools to full-scale platforms.",
    description:
      "Tailored software platforms and internal engineering systems built to automate operations, resolve complex business logic, and scale with organizational growth.",
    icon: Code2,
    href: "/services/software-development",
    capabilities: [
      "Custom Enterprise Software",
      "APIs & Microservices Architecture",
      "Internal Business Dashboards",
      "Legacy Software Modernization",
    ],
  },
  {
    id: "e-commerce",
    slug: "e-commerce",
    title: "E-commerce",
    shortDescription:
      "Scalable online stores and commerce platforms with secure payments, inventory management, and seamless checkout experiences.",
    description:
      "Robust digital commerce infrastructure engineered for high transactional volume, secure multi-currency checkouts, and frictionless omnichannel selling.",
    icon: ShoppingCart,
    href: "/services/e-commerce",
    capabilities: [
      "Custom Storefronts & Platforms",
      "Payment Gateway Integrations",
      "Inventory & Order Automation",
      "B2B & B2C Commerce Portals",
    ],
  },
  {
    id: "cms-solutions",
    slug: "cms-solutions",
    title: "CMS Solutions",
    shortDescription:
      "Content management systems that give your team full control — headless, traditional, or hybrid architectures.",
    description:
      "Flexible content management platforms that give marketing and editorial teams total publishing agility while preserving engineering control and performance.",
    icon: Database,
    href: "/services/cms-solutions",
    capabilities: [
      "Headless CMS Architectures",
      "Content Modeling & Migrations",
      "Multi-Brand Publishing Engines",
      "Role-Based Editorial Workflows",
    ],
  },
  {
    id: "automation",
    slug: "automation",
    title: "Automation",
    shortDescription:
      "Workflow automation and system integrations that eliminate manual processes, reduce errors, and free your team to focus on growth.",
    description:
      "Intelligent workflows and deep API integrations designed to eradicate repetitive data entry, synchronize disparate systems, and accelerate turnaround times.",
    icon: Cog,
    href: "/services/automation",
    capabilities: [
      "System & API Integrations",
      "Workflow Automation Pipelines",
      "Data Synchronization Tools",
      "Automated Reporting & Alerts",
    ],
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription:
      "Cloud infrastructure, migration, and DevOps — designed for reliability, scalability, and cost efficiency.",
    description:
      "Secure, cost-optimized cloud architectures and automated DevOps pipelines designed for continuous resilience, elastic autoscaling, and zero downtime.",
    icon: Cloud,
    href: "/services/cloud-solutions",
    capabilities: [
      "Cloud Architecture & Migration",
      "CI/CD & DevOps Automation",
      "Infrastructure as Code (IaC)",
      "High Availability & Disaster Recovery",
    ],
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription:
      "Practical AI and machine learning integrations that enhance decision-making, automate tasks, and unlock new capabilities.",
    description:
      "Pragmatic generative AI, intelligent search, and machine learning models embedded directly into your business workflows for real, measurable productivity gains.",
    icon: Sparkles,
    href: "/services/ai-solutions",
    capabilities: [
      "Custom LLM & AI Integrations",
      "Intelligent Search & RAG Systems",
      "Automated Content & Data Extraction",
      "Predictive Analytics & Smart Agents",
    ],
  },
];
