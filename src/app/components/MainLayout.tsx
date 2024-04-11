"use client";
import React, { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme } from "../theme/theme";

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
        {children}
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
