import React from "react";
import { ThemeProvider } from "styled-components";
import { DeviceColorsContextProvider } from "./context/DeviceColorsContext";
import { FilterContextProvider } from "./context/FilterContext";
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
    <FilterContextProvider>
      <DeviceColorsContextProvider>
        <Header />
        <ViewContainer>
          <MainView />
        </ViewContainer>
      </DeviceColorsContextProvider>
    </FilterContextProvider>
  </ThemeProvider>
);

export default App;
