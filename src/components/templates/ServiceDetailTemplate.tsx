import React from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TechnologyTag } from "@/components/ui/TechnologyTag";
import { Accordion } from "@/components/ui/Accordion";
import { ServiceDetail } from "@/types/service-detail";
import { ServiceItem } from "@/data/services";
import { Check, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from "lucide-react";

export interface ServiceDetailTemplateProps {
  serviceDetail: ServiceDetail;
  relatedServices: ServiceItem[];
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({
  serviceDetail,
  relatedServices,
}) => {
  return (
    <>
      {/* ============================================================ */}
      {/* 2. BREADCRUMB CONTEXT                                         */}
      {/* ============================================================ */}
      <section className="border-b border-[#D9E1E1]/60 bg-[#F4F7F7]/50">
        <Container>
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: serviceDetail.title },
            ]}
          />
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 3. SERVICE HERO                                               */}
      {/* ============================================================ */}
      <section className="pt-14 pb-18 sm:pt-18 sm:pb-22 lg:pt-24 lg:pb-28">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="primary">{serviceDetail.badge || "Service Discipline"}</Badge>

            <h1 className="mt-6 text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold tracking-tight text-[#0B0D0E] leading-[1.1]">
              {serviceDetail.heroHeadline}
            </h1>

            <p className="mt-6 max-w-3xl text-[16px] sm:text-[18px] lg:text-[20px] text-[#5F686B] leading-relaxed">
              {serviceDetail.heroSubheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a Project
              </Button>
              <Button href="#capabilities" variant="secondary" size="lg">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 4. SERVICE SUMMARY                                            */}
      {/* ============================================================ */}
      <section
        id="summary"
        className="border-t border-[#D9E1E1] bg-[#F4F7F7] py-16 sm:py-20 lg:py-24"
        aria-labelledby="summary-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Badge variant="primary" className="mb-4">
                Service Overview
              </Badge>
              <h2
                id="summary-heading"
                className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0B0D0E] leading-tight"
              >
                {serviceDetail.summary.headline}
              </h2>
              <p className="mt-5 text-[15px] sm:text-[16px] text-[#5F686B] leading-relaxed">
                {serviceDetail.summary.description}
              </p>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {serviceDetail.summary.highlights.map((highlight) => (
                <Card
                  key={highlight.title}
                  surface="white"
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6"
                >
                  <div className="max-w-md">
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0B0D0E]">
                      {highlight.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-[#5F686B] leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                  {highlight.metric && (
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center rounded-[8px] bg-[#19B5A5]/10 border border-[#19B5A5]/25 px-3 py-1.5 font-mono text-[13px] font-semibold text-[#19B5A5]">
                        {highlight.metric}
                      </span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 5. PRIMARY CONVERSION CALLOUT / PROMPT                        */}
      {/* ============================================================ */}
      <section className="border-b border-[#D9E1E1] bg-white py-12 sm:py-14">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-[16px] border border-[#D9E1E1] bg-[#0B0D0E] p-8 sm:p-10 lg:flex-row text-white shadow-sm">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-[#19B5A5] text-[13px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>Immediate Consultation</span>
              </div>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white leading-snug">
                {serviceDetail.primaryCtaPrompt.headline}
              </h3>
              <p className="mt-2 text-[14px] sm:text-[15px] text-[#A0ABAE] leading-relaxed">
                {serviceDetail.primaryCtaPrompt.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                href={serviceDetail.primaryCtaPrompt.buttonHref}
                variant="secondary"
                size="lg"
                withArrow
                className="bg-white text-[#0B0D0E] hover:bg-[#F4F7F7] border-transparent font-bold"
              >
                {serviceDetail.primaryCtaPrompt.buttonLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 6. THE BUSINESS NEED                                          */}
      {/* ============================================================ */}
      <section
        id="business-need"
        className="py-20 sm:py-24 lg:py-32"
        aria-labelledby="business-need-heading"
      >
        <Container>
          <SectionHeader
            label="The Need"
            heading={serviceDetail.businessNeed.headline}
            description={serviceDetail.businessNeed.description}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {serviceDetail.businessNeed.items.map((item) => (
              <Card key={item.title} surface="white" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-red-50 text-red-600 border border-red-200/60 flex-shrink-0">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0B0D0E]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] text-[#5F686B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9E1E1]/70 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#19B5A5] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[13px] font-semibold text-[#0B0D0E] leading-snug">
                    {item.impact}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 7. WHAT WE BUILD                                              */}
      {/* ============================================================ */}
      <section
        id="what-we-build"
        className="border-y border-[#D9E1E1] bg-[#F4F7F7] py-20 sm:py-24 lg:py-32"
        aria-labelledby="what-we-build-heading"
      >
        <Container>
          <SectionHeader
            label="Deliverables"
            heading={serviceDetail.whatWeBuild.headline}
            description={serviceDetail.whatWeBuild.description}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {serviceDetail.whatWeBuild.items.map((buildItem) => (
              <Card key={buildItem.title} surface="white" className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0B0D0E]">
                    {buildItem.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] text-[#5F686B] leading-relaxed">
                    {buildItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#D9E1E1]/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F686B]">
                    Included Capabilities
                  </span>
                  <ul className="mt-3 space-y-2">
                    {buildItem.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[13px] text-[#0B0D0E]">
                        <Check className="h-4 w-4 text-[#19B5A5] flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 8. OUR CAPABILITIES                                           */}
      {/* ============================================================ */}
      <section
        id="capabilities"
        className="py-20 sm:py-24 lg:py-32 scroll-mt-20"
        aria-labelledby="capabilities-heading"
      >
        <Container>
          <SectionHeader
            label="Capabilities"
            heading={serviceDetail.capabilities.headline}
            description={serviceDetail.capabilities.description}
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetail.capabilities.items.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card key={capability.title} surface="white" className="flex flex-col justify-between">
                  <div>
                    {Icon && (
                      <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#19B5A5]/10 mb-5">
                        <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
                      </div>
                    )}
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0B0D0E]">
                      {capability.title}
                    </h3>
                    <p className="mt-2 text-[14px] sm:text-[15px] text-[#5F686B] leading-relaxed">
                      {capability.description}
                    </p>
                  </div>

                  {capability.details && capability.details.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-[#D9E1E1]/60">
                      <ul className="space-y-1.5">
                        {capability.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#5F686B]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#19B5A5] flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 9. OUR APPROACH (6-STEP LIFECYCLE)                            */}
      {/* ============================================================ */}
      <section
        id="approach"
        className="border-y border-[#D9E1E1] bg-[#F4F7F7] py-20 sm:py-24 lg:py-32"
        aria-labelledby="approach-heading"
      >
        <Container>
          <SectionHeader
            align="center"
            label="Methodology"
            heading={serviceDetail.approach.headline}
            description={serviceDetail.approach.description}
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetail.approach.steps.map((step) => (
              <Card
                key={step.step}
                surface="white"
                className="relative flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0D0E] text-[13px] font-bold text-white">
                      0{step.step}
                    </span>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#19B5A5]">
                      Phase {step.step}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[19px] sm:text-[20px] font-bold text-[#0B0D0E]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-semibold text-[#19B5A5]">
                    {step.subtitle}
                  </p>
                  <p className="mt-2.5 text-[14px] text-[#5F686B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D9E1E1]/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F686B]">
                    Key Deliverables
                  </span>
                  <ul className="mt-2 space-y-1">
                    {step.deliverables.map((deliv) => (
                      <li key={deliv} className="text-[12px] text-[#0B0D0E] flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-[#19B5A5] flex-shrink-0" aria-hidden="true" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 10. TECHNOLOGY & TECHNICAL CONSIDERATIONS                     */}
      {/* ============================================================ */}
      <section
        id="technology"
        className="py-20 sm:py-24 lg:py-32"
        aria-labelledby="tech-heading"
      >
        <Container>
          <SectionHeader
            label="Technical Credibility"
            heading={serviceDetail.technologyAndStandards.headline}
            description={serviceDetail.technologyAndStandards.description}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Tech Stack Column */}
            <div className="lg:col-span-6">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0B0D0E] mb-6 flex items-center gap-2">
                <span>Core Technology Ecosystem</span>
              </h3>
              <div className="space-y-6">
                {serviceDetail.technologyAndStandards.stack.map((cat) => (
                  <div
                    key={cat.category}
                    className="rounded-[10px] border border-[#D9E1E1] bg-[#F4F7F7] p-5"
                  >
                    <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#5F686B]">
                      {cat.category}
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cat.technologies.map((tech) => (
                        <TechnologyTag key={tech} name={tech} variant="default" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Considerations Column */}
            <div className="lg:col-span-6">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0B0D0E] mb-6">
                Architectural Standards
              </h3>
              <div className="space-y-4">
                {serviceDetail.technologyAndStandards.considerations.map((item) => (
                  <Card key={item.title} surface="white" className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0B0D0E]">
                        {item.title}
                      </h4>
                      <span className="inline-flex rounded-full bg-[#19B5A5]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#19B5A5]">
                        {item.standard}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-[#5F686B] leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 11. RELEVANT WORK                                             */}
      {/* ============================================================ */}
      <section
        id="relevant-work"
        className="border-t border-[#D9E1E1] bg-[#F4F7F7] py-20 sm:py-24 lg:py-32"
        aria-labelledby="relevant-work-heading"
      >
        <Container>
          <SectionHeader
            label="Portfolio"
            heading={serviceDetail.relevantWork.headline}
            description={serviceDetail.relevantWork.description}
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceDetail.relevantWork.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                outcome={project.outcome}
                technologies={project.technologies}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/work" variant="secondary" size="md">
              View All Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 12. RELATED SERVICES                                          */}
      {/* ============================================================ */}
      {relatedServices.length > 0 && (
        <section
          id="related-services"
          className="border-t border-[#D9E1E1] py-20 sm:py-24 lg:py-32"
          aria-labelledby="related-services-heading"
        >
          <Container>
            <SectionHeader
              label="Ecosystem"
              heading="Complementary engineering disciplines"
              description="Technology solutions produce maximum ROI when integrated cleanly across platforms, infrastructure, and workflows."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service, index) => (
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
      )}

      {/* ============================================================ */}
      {/* 13. FREQUENTLY ASKED QUESTIONS                                */}
      {/* ============================================================ */}
      <section
        id="faqs"
        className="border-t border-[#D9E1E1] bg-[#F4F7F7] py-20 sm:py-24 lg:py-32"
        aria-labelledby="faqs-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              align="center"
              label="FAQ"
              heading={serviceDetail.faqs.headline}
              description={serviceDetail.faqs.description}
            />

            <div className="mt-12">
              <Accordion items={serviceDetail.faqs.items} />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 14. CLOSING CTA                                               */}
      {/* ============================================================ */}
      <CTASection
        heading={serviceDetail.closingCta.heading}
        description={serviceDetail.closingCta.description}
        primaryLabel={serviceDetail.closingCta.primaryLabel}
        primaryHref={serviceDetail.closingCta.primaryHref}
        secondaryLabel={serviceDetail.closingCta.secondaryLabel}
        secondaryHref={serviceDetail.closingCta.secondaryHref}
      />
    </>
  );
};

