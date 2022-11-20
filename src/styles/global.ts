import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px blue;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem sans-serif;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
