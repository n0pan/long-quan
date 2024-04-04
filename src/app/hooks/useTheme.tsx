import { useState, useEffect } from "react";

import { lightTheme, darkTheme, defaultTheme, ThemeName, Theme, ThemeEnum } from "../theme";

function getTheme(themeName: ThemeName) {
  switch (themeName) {
    case ThemeEnum.Light:
      return { ...defaultTheme, ...lightTheme };
    case ThemeEnum.Dark:
      return { ...defaultTheme, ...darkTheme };
    default:
      return { ...defaultTheme, ...lightTheme };
  }
}

function useTheme() {
  const [themeName, setThemeName] = useState<ThemeName>(ThemeEnum.Dark);
  const [theme, setTheme] = useState<Theme>({
    text: "",
    background: "",
    primary: ""
  });

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (
      (!!localStorageTheme && localStorageTheme === ThemeEnum.Light) ||
      localStorageTheme === ThemeEnum.Dark
    ) {
      setThemeName(localStorageTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeName(ThemeEnum.Dark);
    } else {
      setThemeName(ThemeEnum.Light);
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
