import React from "react";

import Logo from "../Logo";
import ProfilePicture from "../ProfilePicture";
import { HeaderContainer, NameContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <NameContainer>
        <ProfilePicture />
        <Logo />
      </NameContainer>
    </HeaderContainer>
  );
}

export default Header;
