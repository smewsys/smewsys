import { LucideIcon } from "lucide-react";

export interface ServiceHighlight {
  title: string;
  description: string;
  metric?: string;
}

export interface BusinessNeedItem {
  title: string;
  description: string;
  impact: string;
}

export interface WhatWeBuildItem {
  title: string;
  description: string;
  features: string[];
}

export interface CapabilityItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  details?: string[];
}

export interface ApproachStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface TechnicalConsideration {
  title: string;
  description: string;
  standard: string;
}

export interface RelevantProject {
  title: string;
  category: string;
  description: string;
  outcome: string;
  technologies: string[];
  href?: string;
  image?: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaDescription: string;
  summary: {
    headline: string;
    description: string;
    highlights: ServiceHighlight[];
  };
  primaryCtaPrompt: {
    headline: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  businessNeed: {
    headline: string;
    description: string;
    items: BusinessNeedItem[];
  };
  whatWeBuild: {
    headline: string;
    description: string;
    items: WhatWeBuildItem[];
  };
  capabilities: {
    headline: string;
    description: string;
    items: CapabilityItem[];
  };
  approach: {
    headline: string;
    description: string;
    steps: ApproachStep[];
  };
  technologyAndStandards: {
    headline: string;
    description: string;
    stack: TechStackCategory[];
    considerations: TechnicalConsideration[];
  };
  relevantWork: {
    headline: string;
    description: string;
    projects: RelevantProject[];
  };
  relatedServiceSlugs: string[];
  faqs: {
    headline: string;
    description: string;
    items: FAQItem[];
  };
  closingCta: {
    heading: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

