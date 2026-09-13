import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  children,
  withArrow = true,
  external = false,
  className,
  ...props
}) => {
  const isExternal = external || href.startsWith("http");

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-sans text-[15px] font-semibold text-[#0B0D0E] transition-colors duration-150 hover:text-[#19B5A5] min-h-[44px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] focus-visible:ring-offset-2 rounded-[6px]",
        className
      )}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
};

