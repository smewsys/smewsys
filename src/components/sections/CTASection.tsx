import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface CTASectionProps {
  heading: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  heading,
  description,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
}) => {
  return (
    <section
      className={cn(
        "bg-[#F4F7F7] py-20 sm:py-24 lg:py-32",
        className
      )}
      aria-labelledby="cta-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0B0D0E] leading-tight"
          >
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-[16px] sm:text-[18px] text-[#5F686B] leading-relaxed">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="primary" size="lg" withArrow>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

