import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

import Accent from "./accent";

interface PanelSectionProps {
  children: React.ReactNode;
  title: string;
}

export default function Panel() {
  return (
    <aside className="bg-bg-dim w-full h-full border-r border-border">
      <div className="flex flex-col gap-8 p-10 sticky top-0">
        {/* Contact */}
        <PanelSection title="Contact">
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 text-sm">
              <Mail className="text-green shrink-0" size={13} />
              <a
                className="text-fg-muted hover:text-pink transition-colors duration-150 break-all"
                href="mailto:lq@long-quan.com"
              >
                lq@long-quan.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Github className="text-green shrink-0" size={13} />
              <a
                className="text-fg-muted hover:text-pink transition-colors duration-150"
                href="https://github.com/n0pan"
              >
                github.com/n0pan
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Linkedin className="text-green shrink-0" size={13} />
              <a
                className="text-fg-muted hover:text-pink transition-colors duration-150"
                href="https://www.linkedin.com/in/longquanhp/"
              >
                in/longquanhp
              </a>
            </li>
          </ul>
        </PanelSection>

        {/* Education */}
        <PanelSection title="Education">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div className="text-sm font-semibold text-fg leading-snug m-0">
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
          <div className="flex flex-col gap-2 text-sm text-fg-muted">
            <p className="m-0 font-medium text-fg">Frontend</p>
            <p className="m-0 text-xs">
              React &bull; React Native &bull; NextJS &bull; TypeScript &bull;
              Svelte &bull; SASS
            </p>
            <p className="m-0 font-medium text-fg mt-2">Backend</p>
            <p className="m-0 text-xs">
              Node &bull; Meteor &bull; GraphQL &bull; Python &bull; PostgreSQL
              &bull; Supabase
            </p>
            <p className="m-0 font-medium text-fg mt-2">DevOps</p>
            <p className="m-0 text-xs">Docker &bull; AWS</p>
            <p className="m-0 font-medium text-fg mt-2">AI</p>
            <p className="m-0 text-xs">OpenAI API &bull; MCP &bull; LiveKit</p>
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
          <ul className="flex flex-col gap-2 text-xs">
            {[
              { lang: "French", level: "native" },
              { lang: "English", level: "native" },
              { lang: "Vietnamese", level: "fluent" },
            ].map(({ lang, level }) => (
              <li className="flex items-center justify-between" key={lang}>
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
    <div className="flex flex-col gap-3">
      {/* ─── SECTION TITLE ─────────────────────────────────── */}
      <div className="flex items-center gap-2">
        <span className="term-section-label">{title}</span>
        <span aria-hidden className="flex-1 h-px bg-border-strong/40" />
      </div>
      {children}
    </div>
  );
}
