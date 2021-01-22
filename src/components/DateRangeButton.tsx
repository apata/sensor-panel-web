import React from "react";
import Spacer from "../elements/Spacer";
import FilterButton from "../elements/FilterButton";
import GridElement from "../elements/GridElement";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TimeRangeRowProps {
  buttonLabel: string;
  buttonLabelWhenTimeActive: string;
  time?: string;
  setTime: (time: string | undefined) => void;
}

const DateRangeButton = ({
  buttonLabel,
  buttonLabelWhenTimeActive,
  time,
  setTime,
}: TimeRangeRowProps) => {
  const CustomInputButton = (
    <FilterButton active={!!time}>
      <span>
        {time
          ? `${buttonLabelWhenTimeActive} ${new Date(
              time
            ).toLocaleDateString()}`
          : buttonLabel}
      </span>
      {!!time && <Spacer widthSpacing="d2" />}
    </FilterButton>
  );
  return (
    <GridElement spacing="d1">
      <DatePicker
        isClearable
        selected={time ? new Date(time) : null}
        showTimeInput
        wrapperClassName="sp-datepicker-wrapper"
        dateFormat="d.MM.yyyy HH:mm"
        onChange={(d) => setTime(d ? (d as Date).toISOString() : undefined)}
        customInput={CustomInputButton}
      />
    </GridElement>
  );
};

export default DateRangeButton;
