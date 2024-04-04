import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

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
            <NavLink isSelected={router.pathname === "/contact"}>
              Contact
            </NavLink>
          </Link>
        </li>
      </NavigationContainer>
    </FooterContainer>
  );
}

export default Footer;

export const FooterContainer = styled.footer`
  text-align: left;
  display: flex;
`;

export const NavigationContainer = styled.ul`
  list-style-type: none;
  text-align: left;
  li {
    margin-right: 25px;
    display: inline;
  }
`;

type NavLinkProps = {
  isSelected: boolean;
};

export const NavLink = styled.a<NavLinkProps>`
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? props.theme.primary : props.theme.text};
`;
