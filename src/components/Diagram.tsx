import React, { useMemo } from "react";
import styled from "styled-components";
import DataType from "../../functions/src/models/DataType";
import Measurement from "../../functions/src/models/Measurement";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";
import D3Diagram from "../components/D3Diagram";
import useQuery from "../hooks/useQuery";
import { Query } from "../api/API";
import { FlexColumn } from "../elements/Flex";
import { Heading2 } from "../elements/Typography";
import getMeasurements from "../api/getMeasurements";

interface DiagramProps {
  dataType: DataType;
  // queryCreator: (dataType: DataType) => Query<Measurement[]>;
  queryParams: GetMeasurementsParams;
}

const DiagramContainer = styled(FlexColumn)`
  margin: ${({ theme }) => theme.spacing.d2}px;
  width: 100%;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const DiagramInner = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Diagram = ({ dataType, queryParams }: DiagramProps) => {
  const query = useMemo(() => {
    return getMeasurements(queryParams);
  }, [queryParams]);

  const { responseData: measurements, error, isLoading } = useQuery({
    query,
    compare: queryParams,
  });

  return (
    <DiagramContainer>
      <Heading2>
        {dataType.name} ({dataType.unit})
      </Heading2>
      <DiagramInner>
        {isLoading && "Loading data..."}
        {error && "Failed to load data."}
        {!isLoading && measurements && (
          <D3Diagram data={measurements}></D3Diagram>
        )}
      </DiagramInner>
    </DiagramContainer>
  );
};

export default Diagram;
