import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "neutral" | "primary" | "dark" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  className,
  ...props
}) => {
  const variantStyles = {
    neutral: "bg-[#F4F7F7] text-[#0B0D0E] border-[#D9E1E1]",
    primary: "bg-[#19B5A5]/10 text-[#19B5A5] border-[#19B5A5]/20 font-medium",
    dark: "bg-[#0B0D0E] text-white border-transparent",
    outline: "bg-transparent text-[#5F686B] border-[#D9E1E1]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px] font-semibold tracking-wide uppercase transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

