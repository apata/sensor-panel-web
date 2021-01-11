import { createGlobalStyle } from "styled-components";

const DatePickerStyle = createGlobalStyle`
  // addition 
  .sp-datepicker-wrapper {
    display: flex;
  }

  // override
  .react-datepicker__input-container {
    display: flex;
  }
`;

export default DatePickerStyle;
