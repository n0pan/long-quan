import Head from "next/head";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { Header, Footer, ThemeSwitcher } from "../ui/components";
import { useTheme } from "../ui/hooks";
import { GlobalStyles } from "../ui/globalStyles";

function MyApp({ Component, pageProps }) {
  const { theme, themeName, setThemeName } = useTheme();

  if (!theme) return null;
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Long-Quan</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Container>
        <ThemeSwitcher onChange={setThemeName} currentTheme={themeName} />
        <Main>
          <Header />
          <Component {...pageProps} />
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  text-align: center;
`;
