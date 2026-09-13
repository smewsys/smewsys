import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Phase 3 Foundation Header */}
        <div className="border-b border-[#D9E1E1] pb-10">
          <Badge variant="primary">Phase 3 — Design Foundations</Badge>
          <h1 className="mt-4 text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-[#0B0D0E] leading-tight">
            SMEWSYS Design System Foundations
          </h1>
          <p className="mt-4 max-w-2xl text-[18px] sm:text-[20px] text-[#5F686B] leading-relaxed">
            Shared tokens, typography scale, responsive grid, primitive components, header, and footer verified according to <code className="font-mono text-[16px] text-[#0B0D0E] bg-[#F4F7F7] px-2 py-0.5 rounded-[4px]">design.md</code> and <code className="font-mono text-[16px] text-[#0B0D0E] bg-[#F4F7F7] px-2 py-0.5 rounded-[4px]">design-tokens.json</code>.
          </p>
        </div>

        {/* 1. Design Tokens & Color System */}
        <section className="py-12 border-b border-[#D9E1E1]" aria-labelledby="tokens-heading">
          <h2 id="tokens-heading" className="text-[26px] sm:text-[32px] font-bold text-[#0B0D0E]">
            1. Brand Color System
          </h2>
          <p className="mt-2 text-[16px] text-[#5F686B]">
            Primary teal (#19B5A5) as restrained accent; white and near-black as dominant foundation.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-[#19B5A5]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">Brand Teal</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#19B5A5</p>
            </div>
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-[#0B0D0E]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">Near Black</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#0B0D0E</p>
            </div>
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-[#15191B]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">Dark Surface</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#15191B</p>
            </div>
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-white border border-[#D9E1E1]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">White</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#FFFFFF</p>
            </div>
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-[#F4F7F7] border border-[#D9E1E1]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">Soft Surface</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#F4F7F7</p>
            </div>
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-[#D9E1E1]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">Border</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#D9E1E1</p>
            </div>
            <div className="rounded-[10px] border border-[#D9E1E1] p-4 bg-white shadow-subtle">
              <div className="h-14 rounded-[6px] bg-[#5F686B]" />
              <p className="mt-3 font-semibold text-[14px] text-[#0B0D0E]">Muted Text</p>
              <p className="font-mono text-[12px] text-[#5F686B]">#5F686B</p>
            </div>
          </div>
        </section>

        {/* 2. Typography Hierarchy */}
        <section className="py-12 border-b border-[#D9E1E1]" aria-labelledby="typography-heading">
          <h2 id="typography-heading" className="text-[26px] sm:text-[32px] font-bold text-[#0B0D0E]">
            2. Typography Scale (Manrope)
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#D9E1E1] pb-4">
              <span className="font-mono text-[13px] text-[#5F686B] sm:w-48">Display (56-72px)</span>
              <p className="text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold text-[#0B0D0E] tracking-tight leading-tight">
                From idea to impact.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#D9E1E1] pb-4">
              <span className="font-mono text-[13px] text-[#5F686B] sm:w-48">H1 (44-52px)</span>
              <p className="text-[34px] sm:text-[44px] font-bold text-[#0B0D0E] tracking-tight">
                Engineering Practical Systems
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#D9E1E1] pb-4">
              <span className="font-mono text-[13px] text-[#5F686B] sm:w-48">H2 (32-38px)</span>
              <p className="text-[26px] sm:text-[34px] font-bold text-[#0B0D0E]">
                Business Needs / Real Solutions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#D9E1E1] pb-4">
              <span className="font-mono text-[13px] text-[#5F686B] sm:w-48">H3 (22-26px)</span>
              <p className="text-[22px] sm:text-[24px] font-semibold text-[#0B0D0E]">
                Scalable Cloud & Software Architecture
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[#D9E1E1] pb-4">
              <span className="font-mono text-[13px] text-[#5F686B] sm:w-48">Body Large (18-20px)</span>
              <p className="text-[18px] text-[#5F686B] max-w-xl">
                SMEWSYS helps modern enterprises engineer maintainable digital products, web platforms, and automated workflows.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-4">
              <span className="font-mono text-[13px] text-[#5F686B] sm:w-48">Body (16px)</span>
              <p className="text-[16px] text-[#5F686B] max-w-xl">
                Standard paragraph text maintains generous line-height and accessible contrast across desktop and mobile screens.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Button Component Matrix */}
        <section className="py-12 border-b border-[#D9E1E1]" aria-labelledby="buttons-heading">
          <h2 id="buttons-heading" className="text-[26px] sm:text-[32px] font-bold text-[#0B0D0E]">
            3. Button Primitives & Micro-Interactions
          </h2>
          <p className="mt-2 text-[16px] text-[#5F686B]">
            Near-black primary button, bordered secondary button, and text link with 44px min touch target.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" withArrow>
              Start a Project
            </Button>
            <Button variant="primary" size="md">
              Start a Project
            </Button>
            <Button variant="secondary" size="md">
              View All Services
            </Button>
            <Button variant="primary" size="md" isLoading>
              Submitting
            </Button>
            <Button variant="secondary" size="md" disabled>
              Disabled Action
            </Button>
            <TextLink href="/services">View Project Details</TextLink>
          </div>
        </section>

        {/* 4. Base Card Component Matrix */}
        <section className="py-12 border-b border-[#D9E1E1]" aria-labelledby="cards-heading">
          <h2 id="cards-heading" className="text-[26px] sm:text-[32px] font-bold text-[#0B0D0E]">
            4. Base Card System
          </h2>
          <p className="mt-2 text-[16px] text-[#5F686B]">
            1px border (#D9E1E1), 12px radius, subtle hover lift, and surface variants.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card surface="white">
              <Badge variant="primary">White Surface</Badge>
              <h3 className="mt-4 text-[20px] font-bold text-[#0B0D0E]">Standard Service Card</h3>
              <p className="mt-2 text-[15px] text-[#5F686B] leading-relaxed">
                Default card used for service categories, portfolio previews, and technical capability highlights.
              </p>
              <div className="mt-6">
                <TextLink href="/services">Learn more</TextLink>
              </div>
            </Card>

            <Card surface="soft">
              <Badge variant="neutral">Soft Surface</Badge>
              <h3 className="mt-4 text-[20px] font-bold text-[#0B0D0E]">Outcome Card</h3>
              <p className="mt-2 text-[15px] text-[#5F686B] leading-relaxed">
                Subtle #F4F7F7 background providing visual rhythm without distracting decorative noise.
              </p>
              <div className="mt-6">
                <TextLink href="/work">Explore case studies</TextLink>
              </div>
            </Card>

            <Card surface="dark">
              <Badge variant="dark" className="border-[#2A3135] text-[#19B5A5]">Dark Surface</Badge>
              <h3 className="mt-4 text-[20px] font-bold text-white">System Card</h3>
              <p className="mt-2 text-[15px] text-[#A0ABAE] leading-relaxed">
                Used in highlighted sections, architecture overviews, and high-impact calls to action.
              </p>
              <div className="mt-6">
                <Button variant="primary" size="sm" className="bg-[#19B5A5] text-[#0B0D0E] hover:bg-[#1fd3c1]">
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* 5. Responsive Grid & Verification Status */}
        <section className="py-12" aria-labelledby="grid-heading">
          <h2 id="grid-heading" className="text-[26px] sm:text-[32px] font-bold text-[#0B0D0E]">
            5. Responsive Grid & Layout Discipline
          </h2>
          <p className="mt-2 text-[16px] text-[#5F686B]">
            Centered container (max 1280px), 12-column desktop, 8-column tablet, 4-column mobile grid.
          </p>

          <div className="mt-8 rounded-[12px] border border-[#D9E1E1] bg-[#F4F7F7] p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#19B5A5]" />
              <span className="text-[17px] font-bold text-[#0B0D0E]">
                Phase 3 Shared Design Foundations Ready
              </span>
            </div>
            <p className="mt-2 text-[14px] text-[#5F686B]">
              Ready for Phase 4 (Home page baseline implementation per <code className="font-mono text-[#0B0D0E]">prompts/01-home.md</code>).
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}

