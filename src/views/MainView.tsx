import React from "react";
import DeviceFilterLogic from "../components/DeviceFilterLogic";
import TimeRangeRow from "../components/TimeRangeRow";
import { FlexColumn } from "../elements/Flex";
import Diagrams from "../components/Diagrams";

const MainView = () => (
  <FlexColumn style={{ overflowX: "hidden" }}>
    <TimeRangeRow />
    <DeviceFilterLogic />
    <Diagrams />
  </FlexColumn>
);

export default MainView;
