import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

import Accent from "./accent";

interface PanelSectionProps {
  children: React.ReactNode;
  title: string;
}

const STACK = [
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

const CONTACTS = [
  { href: "mailto:lq@long-quan.com", Icon: Mail, label: "lq@long-quan.com" },
  { href: "https://github.com/n0pan", Icon: Github, label: "github.com/n0pan" },
  {
    href: "https://www.linkedin.com/in/longquanhp/",
    Icon: Linkedin,
    label: "in/longquanhp",
  },
];

export function ContactLinks() {
  return (
    <ul className="flex flex-col gap-2.5 print:flex-row print:gap-6">
      {CONTACTS.map(({ href, Icon, label }) => (
        <li
          className="flex items-center gap-2.5 print:gap-1.5 text-sm"
          key={href}
        >
          <Icon className="text-green shrink-0" size={13} />
          <a
            className="text-fg-muted hover:text-pink transition-colors duration-150 break-all"
            href={href}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Panel() {
  return (
    <aside className="bg-bg-dim w-full h-full border-r border-border print:border-r-0">
      <div className="flex flex-col gap-8 p-10 sticky top-0 print:gap-2 print:px-0 print:py-3">
        {/* Contact — printed under the header instead */}
        <div className="print:hidden">
          <PanelSection title="Contact">
            <ContactLinks />
          </PanelSection>
        </div>

        {/* Education */}
        <PanelSection title="Education">
          <div className="flex flex-col gap-1 print:flex-row print:items-baseline print:justify-between">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="text-sm print:text-xs font-semibold text-fg leading-snug m-0">
                Arts, Lettres & Communications (DEC){" "}
                <span className="text-fg-dim font-normal">@</span>{" "}
                <Accent>Collège Jean-de-Brébeuf</Accent>
                <span className="text-fg-dim font-normal">, Montréal</span>
              </div>
            </div>

            <div className="text-xs text-yellow-dim tracking-wider uppercase shrink-0">
              2011 - 2013
            </div>
          </div>
        </PanelSection>

        {/* Technical Skills */}
        <PanelSection title="Stack">
          <div className="flex flex-col gap-4 print:gap-0.5 text-sm text-fg-muted">
            {STACK.map(({ group, items }) => (
              <div
                className="flex flex-col gap-2 print:flex-row print:items-baseline"
                key={group}
              >
                <p className="m-0 font-medium text-fg print:text-xs print:w-20 print:shrink-0">
                  {group}
                </p>
                <p className="m-0 text-xs">{items.join(" • ")}</p>
              </div>
            ))}
          </div>
        </PanelSection>

        {/* Soft Skills */}
        <PanelSection title="Soft Skills">
          <p className="text-xs text-fg-muted leading-relaxed m-0">
            Leadership &bull; Organization &bull; Communication &bull; Teamwork
            &bull; Adaptability &bull; Problem solving &bull; Active listening
          </p>
        </PanelSection>

        {/* Languages */}
        <PanelSection title="Languages">
          <ul className="flex flex-col gap-2 text-xs print:flex-row print:gap-6">
            {[
              { lang: "French", level: "native" },
              { lang: "English", level: "native" },
              { lang: "Vietnamese", level: "fluent" },
            ].map(({ lang, level }) => (
              <li
                className="flex items-center justify-between print:gap-1.5"
                key={lang}
              >
                <span className="text-fg-muted">{lang}</span>
                <span className="text-green text-xs">✓ {level}</span>
              </li>
            ))}
          </ul>
        </PanelSection>
      </div>
    </aside>
  );
}

function PanelSection({ children, title }: PanelSectionProps) {
  return (
    <div className="flex flex-col gap-3 print:grid print:grid-cols-[7rem_1fr] print:items-baseline print:gap-2">
      {/* ─── SECTION TITLE ─────────────────────────────────── */}
      <div className="flex items-center gap-2">
        <span className="term-section-label">{title}</span>
        <span
          aria-hidden
          className="flex-1 h-px bg-border-strong/40 print:hidden"
        />
      </div>
      {children}
    </div>
  );
}
