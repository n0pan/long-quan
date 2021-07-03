import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #__next {
    height: 100%;
  }

  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 36px;
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

  main {
    padding: 25px 50px;
    height: calc(100% - 450px); 
    @media (min-width: 1920px) {
      width: 30vw;
    }
    @media (min-width: 1200px) and (max-width: 1920px) {
      width: 40vw;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      width: 80vw;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
    margin: 0 auto;
  }

  button {
    font-family: "JetBrains Mono", monospace;
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
