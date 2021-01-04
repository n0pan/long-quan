import styled from "styled-components";

export const TextLogo = styled.h1`
  display: inline-block;
  font-weight: 400;
  font-size: 24px;

  span {
    text-transform: uppercase;
    font-weight: 800;
    color: ${({ theme }) => theme.primary};
  }
`;
