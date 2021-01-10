import React from "react";
import styled from "styled-components";
import { FlexColumn } from "../elements/Flex";
import { Heading2 } from "../elements/Typography";

interface DiagramProps {
  title: string;
}

const DiagramContainer = styled(FlexColumn)`
  border: 1px solid ${({ theme }) => theme.palette.grey["400"]};
  margin: ${({ theme }) => theme.spacing.d2}px;
  width: 100%;

  @media (min-width: 600px) {
    width: 560px;
  }
`;

const DiagramInner = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Diagram = ({ title }: DiagramProps) => (
  <DiagramContainer>
    <Heading2>{title}</Heading2>
    <DiagramInner></DiagramInner>
  </DiagramContainer>
);

export default Diagram;
