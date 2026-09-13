import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TechnologyTag } from "@/components/ui/TechnologyTag";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  outcome?: string;
  technologies?: string[];
  image?: string | null;
  href?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  outcome,
  technologies = [],
  image = null,
  href = "/work",
  className,
}) => {
  return (
    <Card
      surface="white"
      className={cn("flex flex-col justify-between group", className)}
    >
      <div>
        {/* Project Media Placeholder / Image */}
        <div className="mb-6 aspect-[16/10] w-full overflow-hidden rounded-[8px] border border-[#D9E1E1] bg-[#F4F7F7] flex items-center justify-center transition-colors group-hover:border-[#19B5A5]/40">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#5F686B]/50">
                Case Study
              </span>
              <span className="mt-1 text-[13px] font-medium text-[#0B0D0E]/60">
                {title}
              </span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <Badge variant="outline" className="mb-3">
          {category}
        </Badge>

        {/* Project Title */}
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0B0D0E] transition-colors group-hover:text-[#19B5A5]">
          <Link
            href={href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] rounded-[4px] after:absolute after:inset-0 after:z-10"
          >
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 text-[15px] text-[#5F686B] leading-relaxed">
          {description}
        </p>

        {/* Measurable Outcome */}
        {outcome && (
          <div className="mt-4 rounded-[8px] bg-[#F4F7F7] border border-[#D9E1E1]/80 p-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F686B]">
              Key Result
            </span>
            <p className="mt-0.5 text-[13px] font-semibold text-[#0B0D0E]">
              {outcome}
            </p>
          </div>
        )}

        {/* Tech Tags */}
        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
            {technologies.map((tech) => (
              <TechnologyTag key={tech} name={tech} variant="outline" />
            ))}
          </div>
        )}
      </div>

      {/* Action Affordance */}
      <div className="mt-6 pt-2 flex items-center gap-1.5 font-sans text-[15px] font-semibold text-[#0B0D0E] transition-colors group-hover:text-[#19B5A5] pointer-events-none">
        <span>View Project</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Card>
  );
};

