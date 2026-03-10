import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Accent from "./accent";

interface PanelSectionProps {
  title: string;
  children: React.ReactNode;
}

function PanelSection({ title, children }: PanelSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* ─── SECTION TITLE ─────────────────────────────────── */}
      <div className="flex items-center gap-2">
        <span className="term-section-label">{title}</span>
        <span className="flex-1 h-px bg-border-strong/40" aria-hidden />
      </div>
      {children}
    </div>
  );
}

export default function Panel() {
  return (
    <aside className="bg-bg-dim w-full h-full border-r border-border">
      <div className="flex flex-col gap-8 p-10 sticky top-0">
        {/* Contact */}
        <PanelSection title="Contact">
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5 text-sm">
              <Mail size={13} className="text-green shrink-0" />
              <a
                href="mailto:longquanhp@gmail.com"
                className="text-fg-muted hover:text-pink transition-colors duration-150 break-all"
              >
                longquanhp@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Github size={13} className="text-green shrink-0" />
              <a
                href="https://github.com/n0pan"
                className="text-fg-muted hover:text-pink transition-colors duration-150"
              >
                github.com/n0pan
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Linkedin size={13} className="text-green shrink-0" />
              <a
                href="https://www.linkedin.com/in/longquanhp/"
                className="text-fg-muted hover:text-pink transition-colors duration-150"
              >
                in/longquanhp
              </a>
            </li>
          </ul>
        </PanelSection>

        {/* Education */}
        <PanelSection title="Education">
          <div className="flex flex-col gap-0.5 text-sm text-fg leading-relaxed">
            <p className="text-fg-muted m-0">
              DEC – Arts, Lettres &amp; Communications
            </p>
            <p className="text-fg-dim text-xs m-0">Création multimédia</p>
            <p className="m-0 mt-1">
              <Accent>Collège Jean-de-Brébeuf</Accent>
              <span className="text-fg-muted">, Montréal</span>
            </p>
            <p className="text-fg-dim text-xs m-0">2011 – 2013</p>
          </div>
        </PanelSection>

        {/* Technical Skills */}
        <PanelSection title="Stack">
          <p className="text-sm text-fg-muted leading-relaxed m-0">
            HTML &bull; CSS &bull; SASS &bull; JavaScript &bull; TypeScript
            &bull; React &bull; Node &bull; Apollo &bull; GraphQL &bull; Git
            &bull; MongoDB &bull; Jest &bull; Docker &bull; Azure &bull; Vercel
            &bull; Next
          </p>
        </PanelSection>

        {/* Soft Skills */}
        <PanelSection title="Soft Skills">
          <p className="text-sm text-fg-muted leading-relaxed m-0">
            Leadership &bull; Organization &bull; Communication &bull; Teamwork
            &bull; Adaptability &bull; Problem solving &bull; Active listening
          </p>
        </PanelSection>

        {/* Languages */}
        <PanelSection title="Languages">
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { lang: "French", level: "native" },
              { lang: "English", level: "native" },
              { lang: "Vietnamese", level: "fluent" },
            ].map(({ lang, level }) => (
              <li key={lang} className="flex items-center justify-between">
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
