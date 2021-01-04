import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <div>
      <Section id="work-experience">
        <h1>Work Experience</h1>
        <List>
          <li>
            <div>
              <a href="/" target="_blank">
                <h2>DFuse</h2>
              </a>
              <p>
                Application made to match up students with employers and
                recruiters.
              </p>
              <p>Stack used: Handlebars, Meteor, MongoDB</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://chefcookit.com" target="_blank">
                <h2>Cook it</h2>
              </a>
              <p>
                Allow clients to make their weekly recipe choices for their Cook
                it subscription.
              </p>
              <p>
                Stack used: React, Meteor, MongoDB, Apollo Server + Client,
                GraphQL
              </p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://spotlyne.com" target="_blank">
                <h2>Spotlyne</h2>
              </a>
              <p>
                Application made to match up clients to working professionnals.
                Allows calls, chatting, booking and payment.
              </p>
              <p>
                Stack used: React, Meteor, MongoDB, Apollo Server + Client,
                GraphQL
              </p>
            </div>
          </li>
        </List>
      </Section>
      <Section id="projects">
        <h1>Projects</h1>
        <List>
          <li>
            <div>
              <a href="/" target="_blank">
                <h2>CDC</h2>
              </a>
              <p>
                Quick application made to track beer pong games. Displays match
                history and statistics about players.
              </p>
              <p>Stack used: React, Typescript, Firebase</p>
            </div>
          </li>
          <li>
            <div>
              <a href="/" target="_blank">
                <h2>Sprint Planner</h2>
              </a>
              <p>
                Application made to facilitate sprint planning meetings
                virtually.
              </p>
              <p>Stack used: React, Typescript, AWS Cloudify</p>
            </div>
          </li>
        </List>
      </Section>
    </div>
  );
}

export default Projects;

const Section = styled.section`
  padding-bottom: 25px;
`;

const List = styled.ul`
  padding-left: 0;
`;
