import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Navbar, Footer } from "../ui/components";
import { useTheme } from "../ui/hooks";
import { GlobalStyles } from "../ui/globalStyles";

import "../styles/globals.css";

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
      </Head>
      <GlobalStyles />
      <Navbar onChangeTheme={setThemeName} currentTheme={themeName} />
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default MyApp;
