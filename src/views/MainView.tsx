import React from "react";
import DeviceFilterRow from "../components/DeviceFilterRow";
import Diagram from "../components/Diagram";
import TimeRangeRow from "../components/TimeRangeRow";
import { FlexColumn } from "../elements/Flex";
import GridContainer from "../elements/GridContainer";

const MainView = () => (
  <FlexColumn>
    <TimeRangeRow />
    <DeviceFilterRow />
    <GridContainer spacing={"d2"}>
      <Diagram title={"Temperature"}></Diagram>
      <Diagram title={"CO2 level"}></Diagram>
      <Diagram title={"Humidity"}></Diagram>
    </GridContainer>
  </FlexColumn>
);

export default MainView;
