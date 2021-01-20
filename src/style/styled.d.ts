import "styled-components";

declare module "styled-components" {
  // Based on MaterialUI theme object, trimmed as necessary

  interface GreyPalette {
    // "50": string;
    "100": string;
    // "200": string;
    // "300": string;
    "400": string;
    // "500": string;
    // "600": string;
    // "700": string;
    "800": string;
    // "900": string;
  }

  interface TextPalette {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  }

  interface BackgroundPalette {
    default: string;
    paper: string;
  }

  interface SingleColorPalette {
    main: string;
    // light: string;
    // dark: string;
    contrastText: string;
  }

  interface Typeset {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
  }

  export interface DefaultTheme {
    palette: {
      primary: SingleColorPalette;
      secondary: SingleColorPalette;
      error: SingleColorPalette;
      success: SingleColorPalette;
      warning: SingleColorPalette;
      info: SingleColorPalette;
      text: TextPalette;
      background: BackgroundPalette;
      grey: GreyPalette;
    };
    shapes: {
      borderRadius: number;
    };
    typography: {
      fontSize: number;
      fontFamily: string;
      h1: Typeset;
      h2: Typeset;
      body1: Typeset;
      button: Typeset;
    };
    spacing: {
      d1: number;
      d2: number;
      d4: number;
      d5: number;
      d0_5: number;
    };
    breakpoints: {
      sm: number;
    };
  }
}
