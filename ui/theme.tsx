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
  Light = "light",
  Dark = "dark"
}

export type ThemeName = ThemeEnum.Light | ThemeEnum.Dark

export interface Theme {
  text: string;
  background: string;
  primary?: string;
}
