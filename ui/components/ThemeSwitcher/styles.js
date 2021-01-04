import styled from "styled-components";

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  outline: transparent;
  border: none;
  color: ${props => (props.isSelected ? props.theme.primary : props.theme.text)};
  font-size: inherit;
`;
