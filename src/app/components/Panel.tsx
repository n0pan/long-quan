"use client";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Panel() {
  return (
    <Aside>
      <div>
        <h2>Contact Details</h2>
        <List>
          <li>
            <StyledIcon icon={faEnvelope} height={16} />
            <a href="mailto:longquanhp@gmail.com">longquanhp@gmail.com</a>
          </li>
          <li>
            <StyledIcon icon={faGithub} height={16} />
            <a href="https://github.com/n0pan">n0pan</a>
          </li>
          <li>
            <StyledIcon icon={faLinkedin} height={16} />
            <a href="https://www.linkedin.com/in/longquanhp/">longquanhp</a>
          </li>
        </List>
      </div>
      <div>
        <h2>Education</h2>
        <List>
          <li>
            Computer Science (Software Systems) @{" "}
            <Accent>Concordia University, Montréal</Accent>
            <p style={{ marginTop: 4 }}>2013 - 2015</p>
          </li>
          <li>
            DEC - Arts, Lettres & Communications (Création multimédia) @{" "}
            <Accent>Collège Jean-de-Brébeuf, Montréal</Accent>
            <p style={{ marginTop: 4 }}>2011 - 2013</p>
          </li>
        </List>
      </div>
      <div>
        <h2>Technical Skills</h2>
        <List>
          <li>
            HTML, CSS, SASS, JavaScript, TypeScript, React, Node, Apollo,
            GraphQL, Git, MongoDB, Jest, VIM, Docker, Azure, Vercel, Next
          </li>
        </List>
      </div>
      <div>
        <h2>Soft Skills</h2>
        <List>
          <li>
            Leadership, organization, communication, team work, adaptability,
            problem solving, active listening.
          </li>
        </List>
      </div>
      <div>
        <h2>Languages</h2>
        <List>
          <li>French (native), English (native), Vietnamese (fluent)</li>
        </List>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  grid-area: panel;
  background-color: ${(props) => props.theme.secondary};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.primary};
  margin-right: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-left: 15px;
    margin-bottom: 15px;
  }
`;

const Accent = styled.span`
  color: ${(props) => props.theme.pink};
  font-weight: 700;
`;
