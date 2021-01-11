import React from "react";
import getDevices from "../api/getDevices";
import FilterButton from "../elements/FilterButton";
import { FlexRowMultiline } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
// import GridElement from "../elements/GridElement";
import Label from "../elements/Label";
import { Paragraph } from "../elements/Typography";
import useQuery from "../hooks/useQuery";

const DeviceFilterRow = () => {
  const { responseData: devices, isLoading, error } = useQuery({
    query: getDevices,
  });

  return (
    <FlexRowMultiline>
      <Paragraph>Select devices to show</Paragraph>
      <GridContainer spacing="d1">
        {isLoading && <Label>Loading devices...</Label>}
        {error && <Label>Failed to load devices.</Label>}
        {!!devices &&
          devices.map((device) => (
            <FilterButton key={device}>{device}</FilterButton>
          ))}
      </GridContainer>
    </FlexRowMultiline>
  );
};

export default DeviceFilterRow;
