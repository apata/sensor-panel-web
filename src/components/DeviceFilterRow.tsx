import React from "react";
import FilterButton from "../elements/FilterButton";
import { FlexRowMultiline } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";
import { Paragraph } from "../elements/Typography";

const DeviceFilterRow = () => (
  <FlexRowMultiline>
    <Paragraph>Select devices to show</Paragraph>
    <GridContainer spacing="d1">
      <FilterButton>11114</FilterButton>
      <FilterButton>11115</FilterButton>
    </GridContainer>
  </FlexRowMultiline>
);

export default DeviceFilterRow;
