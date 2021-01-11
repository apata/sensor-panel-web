import React, { useMemo } from "react";
import styled from "styled-components";
import DataType from "../../functions/src/models/DataType";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";
import D3Diagram from "../components/D3Diagram";
import useQuery from "../hooks/useQuery";
import { FlexColumn } from "../elements/Flex";
import { Heading2 } from "../elements/Typography";
import getMeasurements from "../api/getMeasurements";

interface DiagramProps {
  dataType: DataType;
  queryParams: GetMeasurementsParams;
  deviceColorMap: Map<string, string>;
}

const DiagramContainer = styled(FlexColumn)`
  margin: ${({ theme }) => theme.spacing.d2}px;
  width: 100%;

  @media (min-width: 1072px) {
    width: 500px;
  }
`;

const DiagramInner = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Diagram = ({ dataType, queryParams, deviceColorMap }: DiagramProps) => {
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
          <D3Diagram
            data={measurements}
            deviceColorMap={deviceColorMap}
          ></D3Diagram>
        )}
      </DiagramInner>
    </DiagramContainer>
  );
};

export default Diagram;
