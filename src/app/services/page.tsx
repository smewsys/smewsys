import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Layers, Target, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Technology, Systems & Engineering Solutions",
  description:
    "Explore SMEWSYS engineering services: Web Development, Software Development, E-commerce, CMS Solutions, Automation, Cloud Solutions, and AI Solutions. Engineered for business impact.",
};

const approachPillars = [
  {
    icon: Layers,
    title: "Engineering-First Architecture",
    description:
      "We design resilient systems and clean codebases tailored specifically to your business logic, avoiding fragile shortcuts and generic templates.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Delivery",
    description:
      "Every architecture decision, technology selection, and integration is prioritized to improve conversion, operational efficiency, and revenue.",
  },
  {
    icon: RefreshCw,
    title: "Full Lifecycle Ownership",
    description:
      "From technical discovery and planning through deployment and ongoing scaling, we act as an integrated technical partner for the long haul.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. BREADCRUMB CONTEXT                                         */}
      {/* ============================================================ */}
      <section className="border-b border-[#D9E1E1]/60 bg-[#F4F7F7]/50">
        <Container>
          <Breadcrumb items={[{ label: "Services" }]} />
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 2. SERVICES HERO                                              */}
      {/* ============================================================ */}
      <section className="pt-14 pb-18 sm:pt-18 sm:pb-22 lg:pt-24 lg:pb-28">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="primary">Technology. Systems. Solutions.</Badge>

            <h1 className="mt-6 text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-[#0B0D0E] leading-[1.1]">
              End-to-end engineering and technology services
            </h1>

            <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] lg:text-[20px] text-[#5F686B] leading-relaxed">
              From web applications and custom software to automation, cloud infrastructure, and practical AI, SMEWSYS designs and delivers systems that turn business goals into real operational impact.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="#services-grid" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 3. SERVICES INTRODUCTION / HOW WE WORK                        */}
      {/* ============================================================ */}
      <section
        className="border-y border-[#D9E1E1] bg-[#F4F7F7] py-16 sm:py-20 lg:py-24"
        aria-labelledby="services-approach-heading"
      >
        <Container>
          <SectionHeader
            label="Our Approach"
            heading="Built for performance, reliability, and business growth"
            description="We combine technical rigor with commercial awareness. Whether you need a standalone digital product or a deep enterprise modernization, our teams build systems engineered to perform."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {approachPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.title} surface="white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#19B5A5]/10">
                    <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[18px] sm:text-[20px] font-bold text-[#0B0D0E]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] text-[#5F686B] leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 4. SERVICES GRID / LIST                                       */}
      {/* ============================================================ */}
      <section
        id="services-grid"
        className="py-20 sm:py-24 lg:py-32 scroll-mt-20"
        aria-labelledby="all-services-heading"
      >
        <Container>
          <SectionHeader
            label="Service Disciplines"
            heading="Comprehensive technology capabilities"
            description="Seven focused service practices designed to solve critical operational problems and build lasting digital advantages."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                showCapabilities
                actionLabel="Explore Service"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 5. CUSTOM SOLUTION CTA                                        */}
      {/* ============================================================ */}
      <CTASection
        heading="Need a custom solution or multi-disciplinary architecture?"
        description="Many of our client partnerships involve cross-functional engineering — combining web, automated data pipelines, cloud architecture, and AI models into a unified system. Let's discuss your unique requirements."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Get in Touch"
        secondaryHref="/contact"
      />
    </>
  );
}

