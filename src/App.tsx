import React from "react";
import { ThemeProvider } from "styled-components";
import SensorSimulator from "./components/SensorSimulator";
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
    <ViewContainer>
      <MainView />
      {process.env.NODE_ENV !== "production" ? <SensorSimulator /> : <></>}
    </ViewContainer>
  </ThemeProvider>
);

export default App;
