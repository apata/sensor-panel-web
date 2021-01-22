import styled from "styled-components";
import { FlexColumn } from "./Flex";

const DiagramContainer = styled(FlexColumn)`
  margin: ${({ theme }) => theme.spacing.d2}px;
  width: 100%;

  @media (min-width: 1072px) {
    width: 500px;
  }
`;

export default DiagramContainer;
