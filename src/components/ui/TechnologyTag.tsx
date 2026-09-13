import React from "react";
import { cn } from "@/lib/utils";

export interface TechnologyTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  category?: string;
  variant?: "default" | "brand" | "outline";
  className?: string;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  name,
  category,
  variant = "default",
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-white text-[#0B0D0E] border-[#D9E1E1] hover:border-[#19B5A5]/60",
    brand: "bg-[#19B5A5]/10 text-[#19B5A5] border-[#19B5A5]/25 font-medium",
    outline: "bg-transparent text-[#5F686B] border-[#D9E1E1]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[6px] border px-2.5 py-1 text-[13px] font-medium transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {category && (
        <span className="text-[11px] font-mono text-[#5F686B]/70 uppercase">
          {category}:
        </span>
      )}
      <span>{name}</span>
    </span>
  );
};

