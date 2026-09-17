import React from "react";

import Accent from "@/app/components/accent";
import { type Experience as ExperienceProps, EXPERIENCES } from "@/lib/resume";

import PrintButton from "./print-button";

export default function Page() {
  return (
    <div className="px-10 py-10 print:px-0 print:py-3 max-w-3xl print:max-w-none">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-2">
        <span className="term-section-label">Experience</span>
        <span aria-hidden className="flex-1 h-px bg-border-strong/40" />
        <PrintButton />
      </div>

      <div className="flex flex-col">
        {EXPERIENCES.map((experience) => (
          <Experience
            key={`${experience.company}-${experience.period}`}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
}

function Experience({
  company,
  description,
  location,
  period,
  stack,
  title,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4 py-6 print:gap-2 print:py-3 print:break-inside-avoid border-b border-border last:border-b-0">
      {/* Header row */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div className="text-sm font-semibold text-fg leading-snug">
          {title} <span className="text-fg-dim font-normal">@</span>{" "}
          <Accent>{company}</Accent>
          <span className="text-fg-dim font-normal">, {location}</span>
        </div>
        <div className="text-xs text-yellow-dim tracking-wider uppercase shrink-0">
          {period}
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-fg-muted leading-relaxed m-0">
          {description}
        </p>
      )}

      {/* Tech stack */}
      {stack && <p className="text-xs text-fg-dim m-0">{stack.join(" · ")}</p>}
    </div>
  );
}
