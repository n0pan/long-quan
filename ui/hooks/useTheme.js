import React, { useState, useEffect } from "react";

import { LIGHT, DARK, DARKER } from "../enums/theme";
import { lightTheme, darkTheme, darkerTheme } from "../theme";

function getTheme(themeName) {
  switch (themeName) {
    case LIGHT:
      return lightTheme;
    case DARK:
      return darkTheme;
    case DARKER:
      return darkerTheme;
    default:
      return lightTheme;
  }
}

function useTheme() {
  const [themeName, setThemeName] = useState("");
  const [theme, setTheme] = useState({});

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setThemeName(localStorage.getItem("theme"));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setThemeName(DARK);
    } else {
      setThemeName(LIGHT);
    }
  }, []);

  useEffect(() => {
    setTheme(getTheme(themeName));
  }, [themeName]);

  const onSetThemeName = themeName => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };

  return { theme, themeName, setThemeName: onSetThemeName };
}

export default useTheme;
