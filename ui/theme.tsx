export const lightTheme = {
  text: "#000",
  background: "#FFF"
};

export const darkTheme = {
  text: "#FFF",
  background: "#0F2032"
};

export const defaultTheme = {
  primary: "#E7555A"
};

export enum ThemeEnum {
  light = "light",
  dark = "dark"
}

export interface ThemeName {
  themeName: ThemeEnum.light | ThemeEnum.dark;
}
export interface Theme {
  text: string;
  background: string;
  primary?: string;
}
