"use client";

import React, { ReactNode } from "react";
import { styled } from "styled-components";
import ProfileHeader from "../../components/ProfileHeader";
import Panel from "../../components/Panel";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Grid>
      <ProfileHeader />
      <Panel />
      <Main>{children}</Main>
    </Grid>
  );
}

export default MainLayout;

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    "header header header header"
    "panel main main main"
    "panel main main main"
    "panel main main main"
    "panel main main main"
    "panel main main main";
`;

const Main = styled.main`
  grid-area: main;
`;
