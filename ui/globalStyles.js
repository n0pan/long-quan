import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: "JetBrains Mono", monospace;
    font-weight: 400;
    min-height: 90vh;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
  }
  main {
    padding: 50px;
  }
  button {
    font-family: "JetBrains Mono", monospace;
  }
  a {
    text-decoration: none;
    color: red;
  }
`;
