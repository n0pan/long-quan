import React from "react";

import { ButtonContainer, Button } from "./styles";

const LIGHT = "light";
const DARK = "dark";
const DARKER = "darker";

function ThemeSwitcher({ onChange, currentTheme }) {
  return (
    <ButtonContainer>
      <li>
        <Button
          isSelected={currentTheme === LIGHT}
          value={LIGHT}
          onClick={e => onChange(e.currentTarget.value)}
        >
          Light
        </Button>
      </li>
      <li>
        <Button
          isSelected={currentTheme === DARK}
          value={DARK}
          onClick={e => onChange(e.currentTarget.value)}
        >
          Dark
        </Button>
      </li>
      <li>
        <Button
          isSelected={currentTheme === DARKER}
          value={DARKER}
          onClick={e => onChange(e.currentTarget.value)}
        >
          Darker
        </Button>
      </li>
    </ButtonContainer>
  );
}

export default ThemeSwitcher;
