import styled from "styled-components";

const ColorBlock = styled.span<{ color: string; active: boolean }>`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.d1}px;
  width: ${({ theme }) => theme.spacing.d2}px;
  height: ${({ theme }) => theme.spacing.d2}px;
  background-color: ${({ color }) => color};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, active }) =>
    active ? theme.palette.primary.contrastText : theme.palette.text.primary};
`;

export default ColorBlock;
