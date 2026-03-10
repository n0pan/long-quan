import React from "react";
import Accent from "@/app/components/accent";

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  responsibilities?: React.ReactNode[];
  stack?: string[];
}

function Experience({
  title,
  company,
  location,
  period,
  description,
  responsibilities,
  stack,
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
              key={i}
              className="flex gap-2 text-sm text-fg-muted leading-relaxed"
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

export default function Page() {
  return (
    <div className="px-10 py-10 max-w-3xl">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-2">
        <span className="term-section-label">Experience</span>
        <span className="flex-1 h-px bg-border-strong/40" aria-hidden />
      </div>

      <div className="flex flex-col">
        <Experience
          title="Software Engineer"
          company="AI Venture Studio (Stealth)"
          location="Palo Alto"
          period="Jul 2024 – Mar 2026"
          description="Collaborated within a stealth AI venture studio to identify and engineer high-impact AI applications for different sectors. Focused on moving from 0-to-1 by building reusable foundational technology that accelerated the development of mission-critical, AI-native products."
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
        />

        <Experience
          title="Front-end Developer"
          company="Taiga Motors"
          location="Montréal"
          period="Jan 2022 – Jul 2024"
          description="Led the design and integration of the front-end architecture across various applications, including the official Taiga mobile application."
          stack={[
            "React Native",
            "TypeScript",
            "Svelte",
            "Rollup",
            "NextJS",
            "Docker",
            "AWS",
          ]}
        />

        <Experience
          title="Tech Lead – Customer Experience"
          company="Cook it"
          location="Montréal"
          period="Feb 2021 – Jan 2022"
          description="Led the customer experience team, acting as interim Scrum Master and Product Owner while improving hiring and onboarding processes."
        />

        <Experience
          title="Front-end Developer"
          company="Cook it"
          location="Montréal"
          period="Dec 2017 – Feb 2021"
          description="Joined when the tech department was just the CTO; helped build the platform from scratch and created reusable React components used throughout the platform."
          stack={["React", "Meteor", "Node", "TypeScript", "GraphQL", "Docker"]}
        />

        <Experience
          title="Freelance Web Developer"
          company="Spotlyne"
          location="Montréal"
          period="Jan 2019 – Sep 2020"
          description="Designed and integrated new pages based on client needs, created reusable React components, and spearheaded the migration of the application's design system to Ant Design."
          stack={["React", "Meteor", "Node", "GraphQL"]}
        />

        <Experience
          title="Front-end Developer Intern"
          company="DFuse"
          location="Montréal"
          period="May 2017 – Aug 2017"
          description="Designed and built UIs communicating with the database via Meteor DDP and WebSockets, and helped design mockups for the main platform."
          stack={["Meteor", "HTML", "SASS", "Handlebars"]}
        />
      </div>
    </div>
  );
}
