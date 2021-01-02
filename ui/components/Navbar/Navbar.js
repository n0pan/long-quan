import React from "react";

import Logo from "../Logo";
import ThemeSwitcher from "../ThemeSwitcher";
import { Header } from "./styles";

function Navbar({ onChangeTheme, currentTheme }) {
  return (
    <Header>
      <Logo />
      <ThemeSwitcher onChange={onChangeTheme} currentTheme={currentTheme} />
    </Header>
  );
}

export default Navbar;
