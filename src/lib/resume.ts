// Single source for resume content: rendered on /resume and fed to the chat prompt

export interface Experience {
  company: string;
  description?: string;
  location: string;
  period: string;
  stack?: string[];
  title: string;
}

export const PROFILE = {
  email: "lq@long-quan.com",
  github: "n0pan",
  linkedin: "longquanhp",
  location: "Montréal, Canada",
  name: "Long-Quan Hoang-Pham",
  role: "Software Developer",
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Floating Point Labs",
    description:
      "Build AI solutions that help Canadian organizations adopt AI while keeping their sensitive data in Canada and under their control. Lead product and design, taking projects from planning to delivery with no hand-offs.",
    location: "Canada",
    period: "Mar 2026 - Current",
    title: "Co-Founder",
  },
  {
    company: "Woodside AI Venture Studio",
    description:
      "Collaborated within a stealth AI venture studio to identify and engineer high-impact AI applications for different sectors. Focused on moving from 0-to-1 by building reusable foundational technology that accelerated the development of mission-critical, AI-native products.",
    location: "Palo Alto (remote)",
    period: "Jul 2024 – Mar 2026",
    stack: [
      "React",
      "NextJS",
      "TypeScript",
      "MCP",
      "LiveKit",
      "Supabase",
      "PostgreSQL",
      "OpenAI API",
    ],
    title: "Software Engineer",
  },
  {
    company: "Taiga Motors",
    description:
      "Led the design and integration of the front-end architecture across various applications, including the official Taiga mobile application.",
    location: "Montréal",
    period: "Jan 2022 – Jul 2024",
    stack: [
      "React Native",
      "TypeScript",
      "Svelte",
      "Rollup",
      "NextJS",
      "Docker",
      "AWS",
    ],
    title: "Front-end Developer",
  },
  {
    company: "Cook it",
    description:
      "Led the customer experience team, acting as interim Scrum Master and Product Owner while improving hiring and onboarding processes.",
    location: "Montréal",
    period: "Feb 2021 – Jan 2022",
    title: "Tech Lead – Customer Experience",
  },
  {
    company: "Cook it",
    description:
      "Joined when the tech department was just the CTO; helped build the platform from scratch and created reusable React components used throughout the platform.",
    location: "Montréal",
    period: "Dec 2017 – Feb 2021",
    stack: ["React", "Meteor", "Node", "TypeScript", "GraphQL", "Docker"],
    title: "Front-end Developer",
  },
  {
    company: "Spotlyne",
    description:
      "Designed and integrated new pages based on client needs, created reusable React components, and spearheaded the migration of the application's design system to Ant Design.",
    location: "Montréal",
    period: "Jan 2019 – Sep 2020",
    stack: ["React", "Meteor", "Node", "GraphQL"],
    title: "Freelance Web Developer",
  },
  {
    company: "DFuse",
    description:
      "Designed and built UIs communicating with the database via Meteor DDP and WebSockets, and helped design mockups for the main platform.",
    location: "Montréal",
    period: "May 2017 – Aug 2017",
    stack: ["Meteor", "HTML", "SASS", "Handlebars"],
    title: "Front-end Developer Intern",
  },
];

export const STACK = [
  {
    group: "Frontend",
    items: [
      "React",
      "React Native",
      "NextJS",
      "TypeScript",
      "Svelte",
      "Astro, Tailwind",
      "Shadcn",
      "Mantine",
    ],
  },
  {
    group: "Backend",
    items: ["Node", "Meteor", "GraphQL", "Python", "PostgreSQL", "Supabase"],
  },
  { group: "DevOps", items: ["Docker", "AWS", "Terraform"] },
];

export const SOFT_SKILLS = [
  "Leadership",
  "Organization",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Problem solving",
  "Active listening",
];

export const EDUCATION = {
  degree: "Arts, Lettres & Communications (DEC)",
  location: "Montréal",
  period: "2011 - 2013",
  school: "Collège Jean-de-Brébeuf",
};

export const LANGUAGES = [
  { lang: "French", level: "native" },
  { lang: "English", level: "native" },
  { lang: "Vietnamese", level: "fluent" },
];
