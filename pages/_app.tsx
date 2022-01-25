import Head from "next/head";
import { AppProps } from "next/app";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import { ProfileHeader, Footer, ThemeSwitcher } from "../ui/components";
import { useTheme } from "../ui/hooks";
import { GlobalStyles } from "../ui/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
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
      <AppContainer>
        <ThemeSwitcher onChange={setThemeName} currentTheme={themeName} />
        <ContentContainer>
          <ProfileHeader />
          <Component {...pageProps} currentTheme={themeName} />
        </ContentContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default MyApp;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  text-align: center;
`;
