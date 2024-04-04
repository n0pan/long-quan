"use client";
import React, { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider, styled } from "styled-components";
import { darkTheme } from "../theme/theme";
import ProfileHeader from "./ProfileHeader";
import Panel from "./Panel";

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-weight: 400;
    margin: 0px;
    min-height: 90vh;
    padding: 0px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  a {
    color: ${(props) => props.theme.pink};
    text-decoration: none;
    font-weight: 500;
  }
`;

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Grid>
          <ProfileHeader />
          <Panel />
          <Main>{children}</Main>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    "header header header"
    "panel main main"
    "panel main main"
    "panel main main"
    "panel main main"
    "panel main main";
`;

const Main = styled.main`
  grid-area: main;
`;
