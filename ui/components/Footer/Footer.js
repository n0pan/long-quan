import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FooterContainer, NavigationContainer, NavLink } from "./styles";

function Footer() {
  const router = useRouter();
  return (
    <FooterContainer>
      <NavigationContainer>
        <li>
          <Link href="/">
            <NavLink isSelected={router.pathname === "/"}>Home</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <NavLink isSelected={router.pathname === "/contact"}>Contact</NavLink>
          </Link>
        </li>
      </NavigationContainer>
    </FooterContainer>
  );
}

export default Footer;
