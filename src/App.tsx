import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Heading1, Paragraph } from "./elements/Typography";
import GlobalStyle from "./style/GlobalStyle";
import ResetStyle from "./style/ResetStyle";
import theme from "./style/theme";

const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <GlobalStyle />
    <AppContainer>
      <Heading1>Sensor Panel</Heading1>
      <Paragraph>View data from building sensors</Paragraph>
    </AppContainer>
  </ThemeProvider>
);

export default App;
