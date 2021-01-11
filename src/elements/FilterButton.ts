import styled from "styled-components";

const FilterButton = styled.button.attrs({ type: "button" })<{
  active: boolean;
}>`
  display: flex;
  margin: ${({ theme }) => theme.spacing.d1}px;
  padding: ${({ theme }) => theme.spacing.d1}px
    ${({ theme }) => theme.spacing.d2}px;
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
