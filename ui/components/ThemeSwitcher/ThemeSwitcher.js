import React from "react";

import { LIGHT, DARK } from "../../enums/theme";
import { ButtonContainer, Button } from "./styles";

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
    </ButtonContainer>
  );
}

export default ThemeSwitcher;
