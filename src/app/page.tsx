import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import {
  Globe,
  Code2,
  ShoppingCart,
  Database,
  Cog,
  Cloud,
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Search,
  ClipboardList,
  Palette,
  Terminal,
  FlaskConical,
  Rocket,
  CheckCircle2,
  Clock,
  Headphones,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern frameworks, optimised for speed, accessibility, and conversion.",
    href: "/services/web-development",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions engineered to solve specific business problems — from internal tools to full-scale platforms.",
    href: "/services/software-development",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Scalable online stores and commerce platforms with secure payments, inventory management, and seamless checkout experiences.",
    href: "/services/e-commerce",
  },
  {
    icon: Database,
    title: "CMS Solutions",
    description:
      "Content management systems that give your team full control — headless, traditional, or hybrid architectures.",
    href: "/services/cms-solutions",
  },
  {
    icon: Cog,
    title: "Automation",
    description:
      "Workflow automation and system integrations that eliminate manual processes, reduce errors, and free your team to focus on growth.",
    href: "/services/automation",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure, migration, and DevOps — designed for reliability, scalability, and cost efficiency.",
    href: "/services/cloud-solutions",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description:
      "Practical AI and machine learning integrations that enhance decision-making, automate tasks, and unlock new capabilities.",
    href: "/services/ai-solutions",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Accelerate Growth",
    description:
      "Launch digital products faster with engineering that scales. We build the systems so you can focus on what drives revenue.",
  },
  {
    icon: Shield,
    title: "Reduce Risk",
    description:
      "Reliable architecture, automated testing, and proven patterns reduce downtime and protect your critical business operations.",
  },
  {
    icon: Zap,
    title: "Increase Efficiency",
    description:
      "Automation and smart integrations eliminate repetitive tasks, cut operational costs, and keep your team focused on impact.",
  },
  {
    icon: Users,
    title: "Better Experiences",
    description:
      "Intuitive interfaces and performant systems that delight users, improve retention, and build lasting customer loyalty.",
  },
];

const projects = [
  {
    title: "Enterprise Resource Platform",
    category: "Software Development",
    description:
      "A custom ERP system that consolidated five legacy tools into a single unified platform, reducing operational overhead by 40%.",
    image: null,
  },
  {
    title: "Multi-Vendor Marketplace",
    category: "E-commerce",
    description:
      "A scalable marketplace supporting 200+ vendors with real-time inventory, automated payouts, and a 99.9% uptime SLA.",
    image: null,
  },
  {
    title: "Workflow Automation Suite",
    category: "Automation",
    description:
      "End-to-end automation of procurement and approval workflows, saving 2,000+ staff hours per quarter across three departments.",
    image: null,
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand your goals, users, constraints, and the landscape before writing a single line of code.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Define scope, architecture, milestones, and success criteria so every decision is intentional.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Create interfaces and system blueprints that balance usability, aesthetics, and technical feasibility.",
  },
  {
    icon: Terminal,
    title: "Develop",
    description: "Engineer production-grade code with clean architecture, automated testing, and continuous integration.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Rigorous QA across devices, edge cases, performance, and security before anything reaches production.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy with confidence — monitoring, rollback plans, and post-launch support to ensure a smooth go-live.",
  },
];

const whyReasons = [
  {
    icon: CheckCircle2,
    title: "Engineering-First Approach",
    description:
      "We solve problems with architecture and code, not templates. Every solution is built for your specific requirements.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description:
      "Transparent timelines, milestone-driven progress, and consistent communication from discovery through launch.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Clean, maintainable codebases with documentation and testing — so your investment compounds over time, not decays.",
  },
  {
    icon: Headphones,
    title: "Genuine Partnership",
    description:
      "We work as an extension of your team, not a vendor. Your success is the only metric that matters.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO                                                       */}
      {/* ============================================================ */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary">Technology. Systems. Solutions.</Badge>

            <h1 className="mt-6 text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold tracking-tight text-[#0B0D0E] leading-[1.08]">
              We build the technology that powers your next chapter
            </h1>

            <p className="mt-6 max-w-xl text-[16px] sm:text-[18px] lg:text-[20px] text-[#5F686B] leading-relaxed">
              SMEWSYS helps businesses turn ideas, operational needs, and digital opportunities into practical, scalable technology solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 2. TRUST / PROOF                                              */}
      {/* ============================================================ */}
      <section className="border-y border-[#D9E1E1] bg-[#F4F7F7] py-12 sm:py-14 lg:py-16">
        <Container>
          <p className="text-center text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider text-[#5F686B]">
            Trusted by businesses building real products
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-12 items-center justify-center rounded-[8px] border border-[#D9E1E1] bg-white px-4"
              >
                <span className="text-[13px] font-semibold text-[#5F686B]/50 select-none">
                  Client {i + 1}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 3. SERVICES                                                   */}
      {/* ============================================================ */}
      <section
        className="py-20 sm:py-24 lg:py-32"
        aria-labelledby="services-heading"
      >
        <Container>
          <SectionHeader
            label="Services"
            heading="What We Do"
            description="End-to-end technology services — from strategy and design through engineering, deployment, and ongoing support."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} surface="white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#19B5A5]/10">
                    <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[20px] sm:text-[22px] font-bold text-[#0B0D0E]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#5F686B] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <TextLink href={service.href}>Learn More</TextLink>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary" size="md">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 4. BUSINESS NEEDS / REAL SOLUTIONS                            */}
      {/* ============================================================ */}
      <section
        className="border-y border-[#D9E1E1] bg-[#F4F7F7] py-20 sm:py-24 lg:py-32"
        aria-labelledby="outcomes-heading"
      >
        <Container>
          <SectionHeader
            align="center"
            label="Outcomes"
            heading="Business Needs. Real Solutions."
            description="Technology should drive measurable business outcomes — not just look good in a demo. Here's what working with SMEWSYS means for your organisation."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <Card
                  key={outcome.title}
                  surface="white"
                  className="border-[#D9E1E1]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#19B5A5]/10">
                    <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[20px] sm:text-[22px] font-bold text-[#0B0D0E]">
                    {outcome.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#5F686B] leading-relaxed">
                    {outcome.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 5. SELECTED WORK                                              */}
      {/* ============================================================ */}
      <section
        className="py-20 sm:py-24 lg:py-32"
        aria-labelledby="work-heading"
      >
        <Container>
          <SectionHeader
            label="Portfolio"
            heading="Selected Work"
            description="Real projects, real outcomes. Here's a look at some of the systems we've built for businesses like yours."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} surface="white" className="flex flex-col">
                {/* Image placeholder */}
                <div className="mb-6 aspect-[16/10] w-full rounded-[8px] bg-[#F4F7F7] border border-[#D9E1E1] flex items-center justify-center">
                  <span className="text-[13px] font-medium text-[#5F686B]/40 select-none">
                    Project Image
                  </span>
                </div>

                <Badge variant="outline" className="self-start">
                  {project.category}
                </Badge>
                <h3 className="mt-3 text-[20px] sm:text-[22px] font-bold text-[#0B0D0E]">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] text-[#5F686B] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6">
                  <TextLink href="/work">View Project</TextLink>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/work" variant="secondary" size="md">
              View All Work
            </Button>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 6. PROCESS                                                    */}
      {/* ============================================================ */}
      <section
        className="border-y border-[#D9E1E1] bg-[#F4F7F7] py-20 sm:py-24 lg:py-32"
        aria-labelledby="process-heading"
      >
        <Container>
          <SectionHeader
            align="center"
            label="Process"
            heading="How We Work"
            description="A structured, transparent process that keeps projects on track and delivers results — every time."
          />

          <div className="relative mt-14">
            {/* Connector line — desktop only */}
            <div
              className="absolute top-[52px] left-[calc(8.33%+22px)] right-[calc(8.33%+22px)] hidden h-px bg-[#D9E1E1] lg:block"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Step number + icon */}
                    <div className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border-2 border-[#19B5A5] bg-white">
                      <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
                    </div>

                    <span className="mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0B0D0E] text-[11px] font-bold text-white">
                      {index + 1}
                    </span>

                    <h3 className="mt-3 text-[18px] sm:text-[20px] font-bold text-[#0B0D0E]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-[#5F686B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/process" variant="secondary" size="md">
              Learn About Our Process
            </Button>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 7. WHY SMEWSYS                                                */}
      {/* ============================================================ */}
      <section
        className="bg-[#0B0D0E] py-20 sm:py-24 lg:py-32"
        aria-labelledby="why-heading"
      >
        <Container>
          <SectionHeader
            align="center"
            dark
            label="Why Us"
            heading="Why SMEWSYS"
            description="We're not a template shop and we're not a body-shop. We're an engineering team that cares about building the right thing, the right way."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyReasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={reason.title}
                  surface="dark"
                  className="border-[#2A3135]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#19B5A5]/15">
                    <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[20px] sm:text-[22px] font-bold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-[#A0ABAE] leading-relaxed">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 8. CLOSING CTA                                                */}
      {/* ============================================================ */}
      <CTASection
        heading="Ready to start your next project?"
        description="Whether you have a detailed brief or just an idea, we'd love to hear about it. Let's build something that matters."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />
    </>
  );
}
