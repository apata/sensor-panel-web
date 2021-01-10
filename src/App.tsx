import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import ResetStyle from "./style/ResetStyle";
import theme from "./style/theme";
import MainView from "./views/MainView";

const App = () => (
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <GlobalStyle />
    <MainView />
  </ThemeProvider>
);

export default App;
