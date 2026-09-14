"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIndex,
  className,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("divide-y divide-[#D9E1E1] border-y border-[#D9E1E1]", className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headingId = `faq-heading-${index}`;
        const contentId = `faq-content-${index}`;

        return (
          <div key={item.id || index} className="group">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleIndex(index)}
                className="flex w-full min-h-[56px] items-center justify-between py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] focus-visible:ring-offset-2 rounded-[6px]"
              >
                <span className="text-[17px] sm:text-[19px] font-bold text-[#0B0D0E] group-hover:text-[#19B5A5] transition-colors pr-6">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D9E1E1] bg-white transition-transform duration-200",
                    isOpen && "rotate-180 border-[#19B5A5] bg-[#19B5A5]/10 text-[#19B5A5]"
                  )}
                  aria-hidden="true"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-[#5F686B] transition-colors",
                      isOpen && "text-[#19B5A5]"
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                isOpen ? "pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-[15px] sm:text-[16px] text-[#5F686B] leading-relaxed max-w-3xl pr-4 sm:pr-12">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

