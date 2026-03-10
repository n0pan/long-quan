import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-pink font-bold">{children}</span>;
}

export default function Panel() {
  return (
    <aside className="[grid-area:panel] bg-secondary p-6 flex flex-col gap-4 max-w-[400px]">
      <div>
        <h2>Contact Details</h2>
        <ul className="list-none m-0 p-0 [&_li]:ml-4 [&_li]:mb-4">
          <li>
            <Mail size={16} className="text-primary inline mr-2.5" />
            <a href="mailto:longquanhp@gmail.com">longquanhp@gmail.com</a>
          </li>
          <li>
            <Github size={16} className="text-primary inline mr-2.5" />
            <a href="https://github.com/n0pan">n0pan</a>
          </li>
          <li>
            <Linkedin size={16} className="text-primary inline mr-2.5" />
            <a href="https://www.linkedin.com/in/longquanhp/">longquanhp</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        <ul className="list-none m-0 p-0 [&_li]:ml-4 [&_li]:mb-4">
          <li>
            DEC - Arts, Lettres & Communications (Création multimédia) @{" "}
            <Accent>Collège Jean-de-Brébeuf, Montréal</Accent>
            <p className="mt-1">2011 - 2013</p>
          </li>
        </ul>
      </div>
      <div>
        <h2>Technical Skills</h2>
        <ul className="list-none m-0 p-0 [&_li]:ml-4 [&_li]:mb-4">
          <li>
            HTML, CSS, SASS, JavaScript, TypeScript, React, Node, Apollo,
            GraphQL, Git, MongoDB, Jest, VIM, Docker, Azure, Vercel, Next
          </li>
        </ul>
      </div>
      <div>
        <h2>Soft Skills</h2>
        <ul className="list-none m-0 p-0 [&_li]:ml-4 [&_li]:mb-4">
          <li>
            Leadership, organization, communication, team work, adaptability,
            problem solving, active listening.
          </li>
        </ul>
      </div>
      <div>
        <h2>Languages</h2>
        <ul className="list-none m-0 p-0 [&_li]:ml-4 [&_li]:mb-4">
          <li>French (native), English (native), Vietnamese (fluent)</li>
        </ul>
      </div>
    </aside>
  );
}
