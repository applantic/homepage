import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 16px;
    font-family:
      Poppins,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      "Helvetica Neue",
      sans-serif;
  }

  a { color: white; text-decoration: none; }
  a:link { color: white } /* unvisited links */
  a:visited { color: white } /* visited links */
  a:hover { color: white; text-decoration: underline; } /* user hovers */
  a:active { color: white }
`;
