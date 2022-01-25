import { useState, useEffect } from "react";

import { LIGHT, DARK } from "../enums/theme";
import { lightTheme, darkTheme, defaultTheme, ThemeName, Theme } from "../theme";

function getTheme(themeName: ThemeName) {
  switch (themeName) {
    case LIGHT:
      return { ...defaultTheme, ...lightTheme };
    case DARK:
      return { ...defaultTheme, ...darkTheme };
    default:
      return { ...defaultTheme, ...lightTheme };
  }
}

function useTheme() {
  const [themeName, setThemeName] = useState<ThemeName>("dark");
  const [theme, setTheme] = useState<Theme>({});

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setThemeName(localStorage.getItem("theme"));
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeName(DARK);
    } else {
      setThemeName(LIGHT);
    }
  }, []);

  useEffect(() => {
    setTheme(getTheme(themeName));
  }, [themeName]);

  const onSetThemeName = (themeName: ThemeName) => {
    localStorage.setItem("theme", themeName);
    setThemeName(themeName);
  };

  return { theme, themeName, setThemeName: onSetThemeName };
}

export default useTheme;
