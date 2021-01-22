import styled from "styled-components";

const DiagramInner = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export default DiagramInner;
