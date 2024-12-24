import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-button-color: #0077b6;
    --primary-button-color-light: #00b4d8;
    --primary-button-color-dark: #023e8a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    padding: 2rem;
    position: relative;
  }

`;

export default GlobalStyles;
