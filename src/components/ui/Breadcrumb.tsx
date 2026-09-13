import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("py-3 text-[13px] sm:text-[14px]", className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[#5F686B]">
        <li>
          <Link
            href="/"
            className="font-medium transition-colors hover:text-[#19B5A5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] rounded-[4px] px-1 py-0.5"
          >
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className="h-3.5 w-3.5 text-[#5F686B]/60 flex-shrink-0"
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="font-semibold text-[#0B0D0E] px-1 py-0.5"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium transition-colors hover:text-[#19B5A5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] rounded-[4px] px-1 py-0.5"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

