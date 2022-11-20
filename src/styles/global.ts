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
    background-color: black;
    -webkit-font-smoothing: antialiased;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
}
`
