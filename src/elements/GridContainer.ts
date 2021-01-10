import styled, { DefaultTheme } from "styled-components";

const GridContainer = styled.div<{ spacing: keyof DefaultTheme["spacing"] }>`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -${({ theme, spacing }) => theme.spacing[spacing]}px;
`;

export default GridContainer;
