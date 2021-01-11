import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  palette: {
    primary: {
      main: "#7BCDBA",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4190C8",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#4caf50",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#2196f3",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    grey: {
      "100": "#f5f5f5",
      "400": "#bdbdbd",
      "800": "#424242",
    },
    background: {
      default: "#fff",
      paper: "#fafafa",
    },
  },
  shapes: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.75,
    },
  },
  spacing: {
    d0_5: 4,
    d1: 8,
    d2: 16,
    d4: 32,
    d5: 40,
  },
};

export default theme;
