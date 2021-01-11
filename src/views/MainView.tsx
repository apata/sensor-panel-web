import React, { useState } from "react";
import getDataTypes from "../api/getDataTypes";
import DeviceFilterLogic from "../components/DeviceFilterLogic";
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

  // empty list state means are all selected
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [deviceColorMap, setDeviceColorMap] = useState(
    new Map<string, string>()
  );

  return (
    <FlexColumn>
      <TimeRangeRow />
      <DeviceFilterLogic
        selectedDevices={selectedDevices}
        setSelectedDevices={setSelectedDevices}
        setDeviceColorMap={setDeviceColorMap}
      />
      {isLoading && <Label>Loading data types...</Label>}
      {error && <Label>Error loading data types.</Label>}
      {!isLoading && dataTypes && (
        <GridContainer spacing="d2">
          {dataTypes.map((dataType) => {
            return (
              <Diagram
                deviceColorMap={deviceColorMap}
                key={dataType.id}
                dataType={dataType}
                queryParams={{
                  dataTypes: [dataType.id],
                  devices: selectedDevices,
                  startTime: "2020-12-10T23:29:10.169Z",
                }}
              />
            );
          })}
        </GridContainer>
      )}
    </FlexColumn>
  );
};

export default MainView;
