import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  </ThemeProvider>
);

export default App;
