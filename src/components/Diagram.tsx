import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import DataType from "../../functions/src/models/DataType";
import GetMeasurementsParams from "../../functions/src/models/GetMeasurementsParams";
import D3Diagram from "../components/D3Diagram";
import useQuery from "../hooks/useQuery";
import { FlexColumn } from "../elements/Flex";
import { Heading2 } from "../elements/Typography";
import getMeasurements from "../api/getMeasurements";
import measurementsContainDataPoints from "./measurementsContainDataPoints";
import Overlay from "../elements/Overlay";

interface DiagramProps {
  dataType: DataType;
  queryParams: GetMeasurementsParams;
  deviceColorMap: Map<string, string>;
  autoRefreshPeriod: number;
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
  position: relative;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const Diagram = ({
  dataType,
  queryParams,
  deviceColorMap,
  autoRefreshPeriod,
}: DiagramProps) => {
  const [updateKey, setUpdateKey] = useState(0);
  useEffect(() => {
    let interval: any = 0;
    if (autoRefreshPeriod !== 0) {
      interval = setInterval(
        () => setUpdateKey(Date.now()),
        autoRefreshPeriod * 1000
      );
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [autoRefreshPeriod]);
  const query = useMemo(() => {
    return getMeasurements(queryParams);
  }, [queryParams]);

  const { responseData: measurements, error, isLoading } = useQuery({
    query,
    compare: updateKey,
  });

  const canShowRealData =
    measurements &&
    measurements.length &&
    measurementsContainDataPoints(measurements);

  return (
    <DiagramContainer>
      <Heading2>
        {dataType.name} ({dataType.unit})
      </Heading2>
      <DiagramInner>
        <D3Diagram
          data={canShowRealData ? measurements! : [["0000000000000000", []]]}
          deviceColorMap={deviceColorMap}
        />
        {isLoading ? (
          <Overlay>Loading data...</Overlay>
        ) : error ? (
          <Overlay>Error loading data.</Overlay>
        ) : !canShowRealData ? (
          <Overlay>No data to display</Overlay>
        ) : null}
      </DiagramInner>
    </DiagramContainer>
  );
};

export default Diagram;
