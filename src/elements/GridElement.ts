import styled, { DefaultTheme } from "styled-components";

const GridElement = styled.div<{ spacing: keyof DefaultTheme["spacing"] }>`
  display: flex;
  margin: ${({ theme, spacing }) => theme.spacing[spacing]}px;
`;

export default GridElement;
