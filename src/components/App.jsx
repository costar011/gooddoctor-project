import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
