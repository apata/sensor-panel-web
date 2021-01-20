import styled from "styled-components";

const ViewContainer = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.d1}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: 0 ${({ theme }) => theme.spacing.d2}px;
  }
`;

export default ViewContainer;
