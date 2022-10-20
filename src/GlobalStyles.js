import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Bebas Neue";
    src: local("BebasNeue-Regular") url("/src/fonts/BebasNeue-Regular.woff") format("woff"),
    url("./fonts/BebasNeue-Regular.woff2") format("woff2"),
    url("./fonts/BebasNeue-Regular.ttf") format("truetype"),
    url("./fonts/BebasNeue-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Timeless";
    src: local("Timeless") url("./fonts/Timeless.ttf") format("truetype");
  }

  :root {
    font-size: 16px;
    --darkBlue: hsl(214, 60%, 5%);
    --veryLightBlue: hsl(150, 41%, 97%);
    --brightGreen: hsl(103, 82%, 60%);
    --mediumGreen: hsl(103, 82%, 30%);
    --shadow: 0 1px 15px hsla(130, 30%, 5%, 0.7)
  }

  body {
    background-color: var(--veryLightBlue);
    margin: 0;
  }

  * {
    box-sizing: border-box;
    line-height: 1.7;
  }

  h1, h2 {
    font-family: "Bebas Neue", Helvetica, sans-serif;
    margin: 0;
  }

  h2 {
    font-size: 1.6rem;

    @media screen and (min-width: 1000px) {
      font-size: 2.2rem;
    }
  }

  h3 {
    font-family: Khula, Arial, sans-serif;
  }

  p, a {
    font-family: 'Timeless', 'Times New Roman', serif;
  }
`;

export default GlobalStyles;
