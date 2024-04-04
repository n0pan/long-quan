import React from "react";
import styled from "styled-components";

import { ThemeEnum, ThemeName } from "../theme/theme";

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
          onClick={(event) => onChange(event.currentTarget.value)}
        >
          Light
        </Button>
      </li>
      <li>
        <Button
          isSelected={currentTheme === ThemeEnum.Dark}
          value={ThemeEnum.Dark}
          onClick={(event) => onChange(event.currentTarget.value)}
        >
          Dark
        </Button>
      </li>
    </ButtonContainer>
  );
}

export default ThemeSwitcher;

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

type ButtonProps = {
  isSelected: boolean;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background: transparent;
  outline: transparent;
  border: none;
  color: ${(props) =>
    props.isSelected ? props.theme.primary : props.theme.text};
  font-size: inherit;
`;
