"use client";

import React from "react";
import styled from "styled-components";
import ProfileHeader from "./components/ProfileHeader";

export default function Home() {
  return (
    <Background>
      <ProfileHeader />
      <Navigation>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </Navigation>
    </Background>
  );
}

const Background = styled.main`
  background-color: ${(props) => props.theme.primary};
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ul {
    list-style-type: none;
    color: ${(props) => props.theme.white};
    margin: 0;
    li {
      display: inline;
      margin-right: 50px;
    }
  }
`;
