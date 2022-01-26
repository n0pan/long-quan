import React from "react";

import { ThemeEnum, ThemeName } from "../../theme";
import { ButtonContainer, Button } from "./styles";

interface IThemeSwitcherProps {
  onChange: (event: string) => void;
  currentTheme: ThemeName;
}

function ThemeSwitcher({ onChange, currentTheme }: IThemeSwitcherProps) {
  return (
    <ButtonContainer>
      <li>
        <Button
          isSelected={currentTheme === ThemeEnum.Light}
          value={ThemeEnum.Light}
          onClick={(event) => onChange(event.currentTarget.value)}>
          Light
        </Button>
      </li>
      <li>
        <Button
          isSelected={currentTheme === ThemeEnum.Dark}
          value={ThemeEnum.Dark}
          onClick={(event) => onChange(event.currentTarget.value)}>
          Dark
        </Button>
      </li>
    </ButtonContainer>
  );
}

export default ThemeSwitcher;
