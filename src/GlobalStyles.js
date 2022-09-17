import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
    --darkBlue: hsl(214, 60%, 5%);
    --veryLightBlue: hsl(150, 41%, 97%);
    --brightGreen: hsl(103, 82%, 60%);
    --mediumGreen: hsl(103, 82%, 30%)
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
    font-family: Cabin, Helvetica, sans-serif;
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
    font-family: Gudea, 'Times New Roman', serif;
  }
`;

export default GlobalStyles;
