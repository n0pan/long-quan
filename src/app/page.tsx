"use client";

import React from "react";
import styled from "styled-components";
import ProfileHeader from "./components/ProfileHeader";

export default function Home() {
  return (
    <Background>
      <ProfileHeader />
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
