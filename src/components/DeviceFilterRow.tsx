import React, { useEffect, useMemo } from "react";
import UseQueryResponseProps from "../api/models/UseQueryResponseProps";
import FilterButton from "../elements/FilterButton";
import { FlexRowMultiline } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
import Label from "../elements/Label";
import { Paragraph, Heading2 } from "../elements/Typography";
import * as d3 from "d3";
import Spacer from "../elements/Spacer";

interface DeviceFilterRowProps {
  toggleDevice: (device: string) => void;
  selectedDevices: string[];
  queryResponse: UseQueryResponseProps<string[]>;
  setDeviceColorMap: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

const DeviceFilterRow = ({
  toggleDevice,
  selectedDevices,
  queryResponse,
  setDeviceColorMap,
}: DeviceFilterRowProps) => {
  const { responseData: devices, error, isLoading } = queryResponse;

  useEffect(() => {
    if (devices && devices.length) {
      const colorMap = new Map<string, string>();
      const colorStep = 1 / (devices.length + 1);
      devices.forEach((device, index) => {
        colorMap.set(device, d3.interpolateTurbo(0 + index * colorStep));
      });
      setDeviceColorMap(colorMap);
    }
  }, [devices]);

  return (
    <FlexRowMultiline>
      <Heading2>Filter by devices</Heading2>
      <Spacer widthSpacing="d2" />
      <GridContainer spacing="d1">
        {isLoading && <Label>Loading devices...</Label>}
        {error && <Label>Failed to load devices.</Label>}
        {!isLoading &&
          devices &&
          devices.map((device) => (
            <FilterButton
              key={device}
              onClick={() => toggleDevice(device)}
              active={selectedDevices.includes(device)}
            >
              {device}
            </FilterButton>
          ))}
      </GridContainer>
    </FlexRowMultiline>
  );
};

export default DeviceFilterRow;
