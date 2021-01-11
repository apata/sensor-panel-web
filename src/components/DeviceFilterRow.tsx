import React, { useEffect, useMemo } from "react";
import UseQueryResponseProps from "../api/models/UseQueryResponseProps";
import FilterButton from "../elements/FilterButton";
import { FlexRowMultiline } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
import Label from "../elements/Label";
import { Heading2 } from "../elements/Typography";
import * as d3 from "d3";
import Spacer from "../elements/Spacer";
import ColorBlock from "../elements/ColorBlock";

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
  const colorMap = useMemo(() => {
    const newMap = new Map<string, string>();

    if (devices && devices.length) {
      const colorStep = 1 / (devices.length + 1);
      devices.forEach((device, index) => {
        newMap.set(device, d3.interpolateTurbo(0 + index * colorStep));
      });
    }
    return newMap;
  }, [devices]);

  useEffect(() => {
    setDeviceColorMap(colorMap);
  }, [colorMap, setDeviceColorMap]);

  return (
    <FlexRowMultiline>
      <Heading2>Filter by devices</Heading2>
      <Spacer widthSpacing="d2" />
      <GridContainer spacing="d1">
        {isLoading && <Label>Loading devices...</Label>}
        {error && <Label>Failed to load devices.</Label>}
        {!isLoading &&
          devices &&
          devices.map((device) => {
            const isActive = selectedDevices.includes(device);
            return (
              <FilterButton
                spacing="d1"
                key={device}
                onClick={() => toggleDevice(device)}
                active={isActive}
              >
                <span>{device}</span>
                <ColorBlock
                  color={colorMap.get(device) || "#000"}
                  active={isActive}
                />
              </FilterButton>
            );
          })}
      </GridContainer>
    </FlexRowMultiline>
  );
};

export default DeviceFilterRow;
