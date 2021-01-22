import React, { useEffect } from "react";
import UseQueryResponseProps from "../api/models/UseQueryResponseProps";
import FilterButton from "../elements/FilterButton";
import { FlexRowMultiline } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
import Label from "../elements/Label";
import { Heading2 } from "../elements/Typography";
import Spacer from "../elements/Spacer";
import ColorBlock from "../elements/ColorBlock";

interface DeviceFilterRowProps {
  toggleDevice: (device: string) => void;
  selectedDevices: string[];
  queryResponse: UseQueryResponseProps<string[]>;
  colorMap: Map<string, string>;
  createColorMap: (devices: string[]) => void;
}

const DeviceFilterRow = ({
  toggleDevice,
  selectedDevices,
  queryResponse,
  colorMap,
  createColorMap,
}: DeviceFilterRowProps) => {
  const { responseData: devices, error, isLoading } = queryResponse;

  useEffect(() => {
    if (devices) {
      createColorMap(devices);
    }
  }, [devices, createColorMap]);

  return (
    <FlexRowMultiline>
      <Heading2>Filter data by devices</Heading2>
      <Spacer widthSpacing="d2" />
      <GridContainer spacing="d1">
        {isLoading ? (
          <Label>Loading devices...</Label>
        ) : error ? (
          <Label>Failed to load devices.</Label>
        ) : devices && devices.length ? (
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
          })
        ) : (
          <Label>No devices loaded.</Label>
        )}
      </GridContainer>
    </FlexRowMultiline>
  );
};

export default DeviceFilterRow;
