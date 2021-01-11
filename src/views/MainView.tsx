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

  // undefined time means no filter applied
  const [startTime, setStartTime] = useState<string | undefined>(undefined);
  const [endTime, setEndTime] = useState<string | undefined>(undefined);

  // color map determines which device is which color on diagram (key: device, value: rgb())
  const [deviceColorMap, setDeviceColorMap] = useState(
    new Map<string, string>()
  );

  return (
    <FlexColumn style={{ overflowX: "hidden" }}>
      <TimeRangeRow
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
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
                  startTime: startTime,
                  endTime: endTime,
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
