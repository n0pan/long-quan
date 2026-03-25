import React from "react";

import Accent from "@/app/components/accent";

interface ExperienceProps {
  company: string;
  description?: string;
  location: string;
  period: string;
  responsibilities?: React.ReactNode[];
  stack?: string[];
  title: string;
}

export default function Page() {
  return (
    <div className="px-10 py-10 max-w-3xl">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-2">
        <span className="term-section-label">Experience</span>
        <span aria-hidden className="flex-1 h-px bg-border-strong/40" />
      </div>

      <div className="flex flex-col">
        <Experience
          company="Woodside AI Venture Studio"
          description="Collaborated within a stealth AI venture studio to identify and engineer high-impact AI applications for different sectors. Focused on moving from 0-to-1 by building reusable foundational technology that accelerated the development of mission-critical, AI-native products."
          location="Palo Alto"
          period="Jul 2024 – Mar 2026"
          stack={[
            "React",
            "NextJS",
            "TypeScript",
            "MCP",
            "LiveKit",
            "Supabase",
            "PostgreSQL",
            "OpenAI API",
          ]}
          title="Software Engineer"
        />

        <Experience
          company="Taiga Motors"
          description="Led the design and integration of the front-end architecture across various applications, including the official Taiga mobile application."
          location="Montréal"
          period="Jan 2022 – Jul 2024"
          stack={[
            "React Native",
            "TypeScript",
            "Svelte",
            "Rollup",
            "NextJS",
            "Docker",
            "AWS",
          ]}
          title="Front-end Developer"
        />

        <Experience
          company="Cook it"
          description="Led the customer experience team, acting as interim Scrum Master and Product Owner while improving hiring and onboarding processes."
          location="Montréal"
          period="Feb 2021 – Jan 2022"
          title="Tech Lead – Customer Experience"
        />

        <Experience
          company="Cook it"
          description="Joined when the tech department was just the CTO; helped build the platform from scratch and created reusable React components used throughout the platform."
          location="Montréal"
          period="Dec 2017 – Feb 2021"
          stack={["React", "Meteor", "Node", "TypeScript", "GraphQL", "Docker"]}
          title="Front-end Developer"
        />

        <Experience
          company="Spotlyne"
          description="Designed and integrated new pages based on client needs, created reusable React components, and spearheaded the migration of the application's design system to Ant Design."
          location="Montréal"
          period="Jan 2019 – Sep 2020"
          stack={["React", "Meteor", "Node", "GraphQL"]}
          title="Freelance Web Developer"
        />

        <Experience
          company="DFuse"
          description="Designed and built UIs communicating with the database via Meteor DDP and WebSockets, and helped design mockups for the main platform."
          location="Montréal"
          period="May 2017 – Aug 2017"
          stack={["Meteor", "HTML", "SASS", "Handlebars"]}
          title="Front-end Developer Intern"
        />
      </div>
    </div>
  );
}

function Experience({
  company,
  description,
  location,
  period,
  responsibilities,
  stack,
  title,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4 py-6 border-b border-border last:border-b-0">
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

      {/* Responsibilities */}
      {responsibilities && (
        <ul className="flex flex-col gap-1.5">
          {responsibilities.map((item, i) => (
            <li
              className="flex gap-2 text-sm text-fg-muted leading-relaxed"
              key={i}
            >
              <span className="text-green shrink-0 select-none">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech stack */}
      {stack && (
        <p className="text-xs text-fg-dim m-0">{stack.join(" \u00b7 ")}</p>
      )}
    </div>
  );
}
