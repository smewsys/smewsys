import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  showCapabilities?: boolean;
  actionLabel?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  showCapabilities = false,
  actionLabel = "Learn More",
  className,
}) => {
  const Icon = service.icon;

  return (
    <Card
      surface="white"
      className={cn("flex flex-col justify-between group", className)}
    >
      <div>
        {/* Header: Icon & optional Index indicator */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#19B5A5]/10 transition-colors group-hover:bg-[#19B5A5]/20">
            <Icon className="h-5 w-5 text-[#19B5A5]" aria-hidden="true" />
          </div>

          {typeof index === "number" && (
            <span className="font-mono text-[13px] font-semibold text-[#5F686B]/60 tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-5 text-[20px] sm:text-[22px] font-bold text-[#0B0D0E] transition-colors group-hover:text-[#19B5A5]">
          <Link
            href={service.href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] rounded-[4px] after:absolute after:inset-0 after:z-10"
          >
            {service.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 text-[15px] text-[#5F686B] leading-relaxed">
          {service.description}
        </p>

        {/* Key capabilities (for Services Index view) */}
        {showCapabilities && service.capabilities && service.capabilities.length > 0 && (
          <div className="mt-5 pt-5 border-t border-[#D9E1E1]/70">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#5F686B]">
              Key Capabilities
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {service.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-2 text-[13px] text-[#5F686B]"
                >
                  <Check className="h-3.5 w-3.5 text-[#19B5A5] flex-shrink-0" aria-hidden="true" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Navigation Affordance */}
      <div className="mt-6 pt-2 flex items-center gap-1.5 font-sans text-[15px] font-semibold text-[#0B0D0E] transition-colors group-hover:text-[#19B5A5] pointer-events-none">
        <span>{actionLabel}</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Card>
  );
};

