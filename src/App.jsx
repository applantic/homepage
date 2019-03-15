import React from "react";
import { ThemeProvider } from "styled-components";
import { ButtonPrimary, ButtonSecondary } from "./components/Button";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyle />
      <Header />
      <Hero />
    </main>
  </ThemeProvider>
);

export default App;
