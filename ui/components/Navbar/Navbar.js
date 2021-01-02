import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../Logo";
import ThemeSwitcher from "../ThemeSwitcher";
import ProfilePicture from "../ProfilePicture";
import { Header, NameContainer, NavigationContainer, NavLink } from "./styles";

function Navbar({ onChangeTheme, currentTheme }) {
  const router = useRouter();
  return (
    <Header>
      <NameContainer>
        <ProfilePicture />
        <Logo />
      </NameContainer>
      {/* <NavigationContainer> */}
      {/*   <li> */}
      {/*     <Link href="/"> */}
      {/*       <NavLink isSelected={router.pathname === "/"}>Home</NavLink> */}
      {/*     </Link> */}
      {/*   </li> */}
      {/*   <li> */}
      {/*     <Link href="/about"> */}
      {/*       <NavLink isSelected={router.pathname === "/about"}> */}
      {/*         About me */}
      {/*       </NavLink> */}
      {/*     </Link> */}
      {/*   </li> */}
      {/*   <li> */}
      {/*     <Link href="/contact"> */}
      {/*       <NavLink isSelected={router.pathname === "/contact"}> */}
      {/*         Contact */}
      {/*       </NavLink> */}
      {/*     </Link> */}
      {/*   </li> */}
      {/* </NavigationContainer> */}
      <div style={{ position: "absolute", right: 50, top: 15 }}>
        <ThemeSwitcher onChange={onChangeTheme} currentTheme={currentTheme} />
      </div>
    </Header>
  );
}

export default Navbar;
