import React from "react";
import Accent from "@/app/components/accent";

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities?: React.ReactNode[];
  stack?: string[];
}

function Experience({
  title,
  company,
  location,
  period,
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
          title="Full Stack Engineer"
          company="Stealth Company"
          location="Bay Area"
          period="Jul 2024 – Present"
        />

        <Experience
          title="Front-end Developer"
          company="Taiga Motors"
          location="Montréal"
          period="Jan 2022 – Jul 2024"
          responsibilities={[
            "Led the design and integration of the front-end architecture across various applications",
            "Led the launch of the official Taiga mobile application",
            <>
              Integrated reactive and dynamic UIs using <Accent>HTML</Accent>,{" "}
              <Accent>CSS</Accent>, <Accent>JavaScript</Accent>,{" "}
              <Accent>Svelte</Accent> and <Accent>Rollup</Accent> for an
              embedded system
            </>,
            <>
              Led the design and integration for a modern web app using{" "}
              <Accent>React</Accent>, <Accent>NextJS</Accent> and{" "}
              <Accent>Docker</Accent>
            </>,
            <>
              Helped design, scope, develop and release 2 mobile apps using{" "}
              <Accent>React Native</Accent>
            </>,
            "Created and maintained documentation",
            "Assisted in defining priorities for various projects",
          ]}
          stack={[
            "React Native",
            "JavaScript",
            "TypeScript",
            "Svelte",
            "Rollup",
            "NextJS",
            "Docker",
            "AWS",
            "Git",
          ]}
        />

        <Experience
          title="Tech Lead – Customer Experience"
          company="Cook it"
          location="Montréal"
          period="Feb 2021 – Jan 2022"
          responsibilities={[
            <>
              Acted as interim <Accent>Scrum Master</Accent> and interim{" "}
              <Accent>Product Owner</Accent>
            </>,
            "Held interviews, hired and trained new employees",
            "Improved hiring process and onboarding process",
            <>
              Created internal tools and automated processes to improve the{" "}
              <Accent>deployment pipeline</Accent>
            </>,
            <>
              Contributed to migrating the front-end legacy to{" "}
              <Accent>React</Accent>, <Accent>TypeScript</Accent> and{" "}
              <Accent>Material UI</Accent>
            </>,
            <>
              Contributed to migrating the back-end legacy to{" "}
              <Accent>TypeScript</Accent> and <Accent>Node</Accent>
            </>,
            "Implemented a Learning Day during sprints to boost team morale",
          ]}
        />

        <Experience
          title="Front-end Developer"
          company="Cook it"
          location="Montréal"
          period="Dec 2017 – Feb 2021"
          responsibilities={[
            "Joined the team when the tech department was just the CTO; helped build the platform from scratch",
            "Designed and integrated new tools depending on internal and external needs",
            <>
              Created reusable <Accent>React</Accent> components used throughout
              the platform
            </>,
            "Helped design various components with the Product Designer",
            <>
              Assisted with the implementation of <Accent>GraphQL</Accent> and{" "}
              <Accent>REST API</Accent> using Node
            </>,
            <>
              Assisted with the maintenance of a <Accent>MongoDB</Accent>{" "}
              database
            </>,
            <>
              Helped plan migration of legacy code towards an{" "}
              <Accent>Onion Architecture</Accent> API in <Accent>Node</Accent>
            </>,
          ]}
          stack={[
            "React",
            "Meteor",
            "Node",
            "TypeScript",
            "GraphQL",
            "Docker",
            "Git",
          ]}
        />

        <Experience
          title="Freelance Web Developer"
          company="Spotlyne"
          location="Montréal"
          period="Jan 2019 – Sep 2020"
          responsibilities={[
            "Designed and integrated new pages depending on client needs",
            <>
              Created reusable <Accent>React</Accent> components used throughout
              the platform
            </>,
            "Integrated pages and components based on mockups from an external Web Designer",
            <>
              Assisted with the maintenance of a <Accent>MongoDB</Accent>{" "}
              database
            </>,
            "Spearheaded the migration of the application's design system to Ant Design",
          ]}
          stack={["React", "Meteor", "Node", "GraphQL", "Git"]}
        />

        <Experience
          title="Front-end Developer Intern"
          company="DFuse"
          location="Montréal"
          period="May 2017 – Aug 2017"
          responsibilities={[
            <>
              Designed and built UIs communicating with the database via{" "}
              <Accent>Meteor DDP</Accent> and <Accent>WebSockets</Accent>
            </>,
            "Helped design and provided creative input on mockups",
            "Added, modified and maintained functionality on the main platform",
          ]}
          stack={["Meteor", "HTML", "SASS", "Handlebars", "Git"]}
        />
      </div>
    </div>
  );
}
