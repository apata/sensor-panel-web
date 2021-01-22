import React from "react";
import FilterButton from "../elements/FilterButton";
import getTimeRangeToNow from "../utils/getTimeRangeToNow";

interface PremadeTimeRangeButtonProps {
  setStartTime: (time: string | undefined) => void;
  setEndTime: (time: string | undefined) => void;
  label: string;
  timeToPrevious: number;
}

const PremadeTimeRangeButton = ({
  setStartTime,
  setEndTime,
  label,
  timeToPrevious,
}: PremadeTimeRangeButtonProps) => (
  <FilterButton
    active={false}
    spacing="d1"
    onClick={() => {
      const { startTime, endTime } = getTimeRangeToNow(timeToPrevious);
      setEndTime(endTime);
      setStartTime(startTime);
    }}
  >
    {label}
  </FilterButton>
);

export default PremadeTimeRangeButton;
