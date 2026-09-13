import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  surface?: "white" | "soft" | "dark";
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  surface = "white",
  as: Component = "div",
  ...props
}) => {
  const surfaceStyles = {
    white: "bg-white text-[#0B0D0E] border-[#D9E1E1]",
    soft: "bg-[#F4F7F7] text-[#0B0D0E] border-[#D9E1E1]",
    dark: "bg-[#15191B] text-white border-[#2A3135]",
  };

  return (
    <Component
      className={cn(
        "relative rounded-[12px] border p-6 sm:p-8 transition-all duration-200",
        surfaceStyles[surface],
        hoverEffect &&
          "hover:border-[#19B5A5] hover:shadow-[0_8px_24px_rgba(11,13,14,0.06)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

