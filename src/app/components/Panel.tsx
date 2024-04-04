"use client";

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Panel() {
  return (
    <Aside>
      <h2>Contact Details</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          longquanhp@gmail.com
        </li>
        <li>
          <span>Email</span>longquanhp@gmail.com
        </li>
        <li>
          <span>Email</span>longquanhp@gmail.com
        </li>
      </ul>
    </Aside>
  );
}

const Aside = styled.aside`
  grid-area: panel;
  background-color: ${(props) => props.theme.panelBackground};
  padding: 24px;
`;
