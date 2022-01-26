import styled from "styled-components";

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

type ButtonProps = {
  isSelected: boolean;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background: transparent;
  outline: transparent;
  border: none;
  color: ${(props) => (props.isSelected ? props.theme.primary : props.theme.text)};
  font-size: inherit;
`;
