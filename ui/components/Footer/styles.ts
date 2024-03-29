import styled from "styled-components";

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
  color: ${(props) => (props.isSelected ? props.theme.primary : props.theme.text)};
`;
