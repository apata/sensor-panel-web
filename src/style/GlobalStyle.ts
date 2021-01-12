import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) =>
      theme.typography
        .fontFamily} !important; // HACK: in production builds this gets overridden by "Times New Roman" out of nowhere
    font-size: ${({ theme }) => theme.typography.fontSize}px;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;

export default GlobalStyle;
