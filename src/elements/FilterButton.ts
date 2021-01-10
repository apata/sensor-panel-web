import styled from "styled-components";

const FilterButton = styled.button.attrs({ type: "button" })`
  margin: ${({ theme }) => theme.spacing.d1}px;
`;

export default FilterButton;
