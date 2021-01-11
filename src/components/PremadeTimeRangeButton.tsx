import React from "react";
import FilterButton from "../elements/FilterButton";
import getTimeRangeToNow from "./getTimeRangeToNow";

interface PremadeTimeRangeButtonProps {
  setStartTime: React.Dispatch<React.SetStateAction<string | undefined>>;
  setEndTime: React.Dispatch<React.SetStateAction<string | undefined>>;
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
