import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import ViewContainer from "./elements/ViewContainer";
import DatePickerStyle from "./style/DatePickerStyle";
import GlobalStyle from "./style/GlobalStyle";
import ResetStyle from "./style/ResetStyle";
import theme from "./style/theme";
import MainView from "./views/MainView";

const App = () => (
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <GlobalStyle />
    <DatePickerStyle />
    <Header />
    <ViewContainer>
      <MainView />
    </ViewContainer>
  </ThemeProvider>
);

export default App;
