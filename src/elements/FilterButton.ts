import styled, { DefaultTheme } from "styled-components";

interface FilterButtonProps {
  active: boolean;
  spacing?: keyof DefaultTheme["spacing"];
}

const FilterButton = styled.button.attrs({ type: "button" })<FilterButtonProps>`
  display: flex;
  margin: ${({ theme, spacing }) =>
    spacing ? theme.spacing[spacing] + "px" : 0};
  padding: ${({ theme }) => theme.spacing.d1}px
    ${({ theme }) => theme.spacing.d2}px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.button.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  border-radius: ${({ theme }) => theme.shapes.borderRadius}px;
  color: ${({ theme, active }) =>
    active ? theme.palette.primary.contrastText : "inherit"};
  background-color: ${({ theme, active }) =>
    active ? theme.palette.primary.main : "inherit"};
  border: 1px solid
    ${({ theme, active }) =>
      active ? theme.palette.primary.main : theme.palette.text.primary};
  outline: none;
`;

export default FilterButton;
