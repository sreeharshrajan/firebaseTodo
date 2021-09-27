import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: linear-gradient(
      90deg,
      rgba(145, 214, 254, 1) 0%,
      rgba(110, 169, 259, 1) 100%
    );
    overflow: hidden;
    margin: 0 auto;
    font-family: "poppins", sans-serif;
  }
`