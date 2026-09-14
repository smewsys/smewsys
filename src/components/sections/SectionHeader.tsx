import React from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  label?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  heading,
  description,
  align = "left",
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <Badge
          variant={dark ? "primary" : "primary"}
          className={cn("mb-4", dark && "bg-[#19B5A5]/15 text-[#19B5A5] border-[#19B5A5]/25")}
        >
          {label}
        </Badge>
      )}
      <h2
        className={cn(
          "text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-tight leading-tight",
          dark ? "text-white" : "text-[#0B0D0E]"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[16px] sm:text-[18px] leading-relaxed",
            dark ? "text-[#A0ABAE]" : "text-[#5F686B]",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

