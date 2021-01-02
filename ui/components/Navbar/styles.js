import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 50px 50px 20px 50px;
  height: 350px;
`;

export const NameContainer = styled.div`
  text-align: center;
`

export const NavigationContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  text-align: center;
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
