import styled, { DefaultTheme } from "styled-components";

interface SpacerProps {
  widthSpacing?: keyof DefaultTheme["spacing"];
  heightSpacing?: keyof DefaultTheme["spacing"];
}

const Spacer = styled.div<SpacerProps>`
  display: flex;
  flex-grow: 0;
  width: ${({ theme, widthSpacing }) =>
    widthSpacing ? theme.spacing[widthSpacing] + "px" : "auto"};
  height: ${({ theme, heightSpacing }) =>
    heightSpacing ? theme.spacing[heightSpacing] + "px" : "auto"};
`;

export default Spacer;
