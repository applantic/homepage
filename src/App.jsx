import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Main from "./sections/Main";


const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main />
    </main>
  </ThemeProvider>
);

export default App;
