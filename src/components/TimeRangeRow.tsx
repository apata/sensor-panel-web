import React from "react";
import { FlexRowMultiline } from "../elements/Flex";
import { Paragraph } from "../elements/Typography";

const TimeRangeRow = () => (
  <FlexRowMultiline>
    <Paragraph>Select time range</Paragraph>
    <FlexRowMultiline>
      <Paragraph>Start</Paragraph>
      <Paragraph>Stop</Paragraph>
    </FlexRowMultiline>
  </FlexRowMultiline>
);

export default TimeRangeRow;
