import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #__next {
    height: 100%;
  }

  span.highlight {
    color: ${({ theme }) => theme.primary};
  }

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

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }

  * {
    box-sizing: border-box;
  }

  .rounded {
    border-radius: 100%;
  }

  ul {
    list-style-type: none;
  }
`;
