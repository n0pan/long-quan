import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px;
  height: 100px;
`;

export const NavigationContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  li {
    margin-right: 25px;
    display: flex;
    align-self: center;
  }
`;

export const NavLink = styled.a`
  cursor: pointer;
  color: ${props =>
    props.isSelected ? props.theme.primary : props.theme.text};
`;
