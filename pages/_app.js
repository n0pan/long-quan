import Head from "next/head";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { Navbar, Footer } from "../ui/components";
import { GlobalStyles } from "../ui/globalStyles";
import { lightTheme, darkTheme, darkerTheme } from "../ui/theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme || "light");
  }, []);
  const onSetTheme = theme => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };
  const getTheme = theme => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      case "darker":
        return darkerTheme;
      default:
        return lightTheme;
    }
  };
  return (
    <ThemeProvider theme={getTheme(theme)}>
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
      <main>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
