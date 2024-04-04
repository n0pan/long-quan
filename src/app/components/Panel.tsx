"use client";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Panel() {
  return (
    <Aside>
      <h2>Contact Details</h2>
      <List>
        <li>
          <StyledIcon icon={faEnvelope} />
          <a href="mailto:longquanhp@gmail.com">longquanhp@gmail.com</a>
        </li>
        <li>
          <StyledIcon icon={faGithub} />
          <a href="https://github.com/n0pan">n0pan</a>
        </li>
        <li>
          <StyledIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/longquanhp/">longquanhp</a>
        </li>
      </List>
    </Aside>
  );
}

const Aside = styled.aside`
  grid-area: panel;
  background-color: ${(props) => props.theme.panelBackground};
  padding: 24px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.background};
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
