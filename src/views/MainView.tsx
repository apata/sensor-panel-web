import React from "react";
import getDataTypes from "../api/getDataTypes";
import DeviceFilterRow from "../components/DeviceFilterRow";
import Diagram from "../components/Diagram";
import TimeRangeRow from "../components/TimeRangeRow";
import { FlexColumn } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
import Label from "../elements/Label";
import useQuery from "../hooks/useQuery";

const MainView = () => {
  const { responseData: dataTypes, error, isLoading } = useQuery({
    query: getDataTypes,
  });
  return (
    <FlexColumn>
      <TimeRangeRow />
      <DeviceFilterRow />
      {isLoading && <Label>Loading data types...</Label>}
      {error && <Label>Error loading data types.</Label>}
      {dataTypes && (
        <GridContainer spacing="d2">
          {dataTypes.map((dataType) => (
            <Diagram key={dataType.id} dataType={dataType} />
          ))}
        </GridContainer>
      )}
    </FlexColumn>
  );
};

export default MainView;
