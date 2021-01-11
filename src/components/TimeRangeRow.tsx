import React from "react";
import { FlexRowMultiline } from "../elements/Flex";
import Spacer from "../elements/Spacer";
import { Heading2, Paragraph } from "../elements/Typography";

const TimeRangeRow = () => (
  <FlexRowMultiline>
    <Heading2>Select time range</Heading2>
    <Spacer widthSpacing="d2"></Spacer>
    <FlexRowMultiline>
      <Paragraph>Start</Paragraph>
      <Spacer widthSpacing="d2"></Spacer>
      <Paragraph>Stop</Paragraph>
    </FlexRowMultiline>
  </FlexRowMultiline>
);

export default TimeRangeRow;
