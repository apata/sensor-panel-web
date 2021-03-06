import React, { useContext } from "react";
import { FlexRowMultiline } from "../elements/Flex";
import Spacer from "../elements/Spacer";
import { Heading2 } from "../elements/Typography";
import GridContainer from "../elements/GridContainer";
import "react-datepicker/dist/react-datepicker.css";
import DateRangeButton from "./DateRangeButton";
import PremadeTimeRangeButton from "./PremadeTimeRangeButton";
import FilterContext from "../context/FilterContext";

const TimeRangeRow = () => {
  const {
    params: { startTime, endTime },
    setStartTime,
    setEndTime,
  } = useContext(FilterContext);

  return (
    <FlexRowMultiline>
      <Heading2>Show data from</Heading2>
      <Spacer widthSpacing="d2"></Spacer>
      <GridContainer spacing="d1">
        <DateRangeButton
          setTime={setStartTime}
          time={startTime}
          buttonLabel="Choose start time"
          buttonLabelWhenTimeActive="Start:"
        />
        <DateRangeButton
          setTime={setEndTime}
          time={endTime}
          buttonLabel="Choose end time"
          buttonLabelWhenTimeActive="End:"
        />
        <PremadeTimeRangeButton
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          label="Last 1h"
          timeToPrevious={60 * 60 * 1000}
        />
        <PremadeTimeRangeButton
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          label="Last 24h"
          timeToPrevious={24 * 60 * 60 * 1000}
        />
        <PremadeTimeRangeButton
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          label="Last 7 days"
          timeToPrevious={7 * 24 * 60 * 60 * 1000}
        />
        <PremadeTimeRangeButton
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          label="Last 30 days"
          timeToPrevious={31 * 24 * 60 * 60 * 1000}
        />
      </GridContainer>
    </FlexRowMultiline>
  );
};

export default TimeRangeRow;
