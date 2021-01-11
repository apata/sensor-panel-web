import React, { useMemo } from "react";
import styled from "styled-components";
import DataType from "../../functions/src/models/DataType";
import useQuery from "../hooks/useQuery";
import getMeasurements from "../api/getMeasurements";
import { FlexColumn } from "../elements/Flex";
import { Heading2 } from "../elements/Typography";

interface DiagramProps {
  dataType: DataType;
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

const Diagram = ({ dataType }: DiagramProps) => {
  const query = useMemo(() => getMeasurements({ dataTypes: [dataType.id] }), [
    dataType,
  ]);
  // const { responseData: measurements, error, isLoading } =   useQuery({
  //   query,
  // });

  useQuery({
    query,
  });

  return (
    <DiagramContainer>
      <Heading2>
        {dataType.name} ({dataType.unit})
      </Heading2>
      <DiagramInner></DiagramInner>
    </DiagramContainer>
  );
};

export default Diagram;
