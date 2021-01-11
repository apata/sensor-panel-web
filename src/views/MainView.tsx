import React, { useState } from "react";
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

  // empty list state means are all selected
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const toggleDevice = (device: string) =>
    setSelectedDevices((currentSelectedDevices) => {
      if (!currentSelectedDevices.length) {
        return [device];
      } else {
        if (currentSelectedDevices.includes(device)) {
          return currentSelectedDevices.filter((d) => d !== device);
        } else {
          return [...currentSelectedDevices, device];
        }
      }
    });

  return (
    <FlexColumn>
      <TimeRangeRow />
      <DeviceFilterRow
        selectedDevices={selectedDevices}
        toggleDevice={toggleDevice}
      />
      {isLoading && <Label>Loading data types...</Label>}
      {error && <Label>Error loading data types.</Label>}
      {!isLoading && dataTypes && (
        <GridContainer spacing="d2">
          {dataTypes.map((dataType) => {
            return (
              <Diagram
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
