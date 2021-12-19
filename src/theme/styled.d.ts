import "styled-components";

declare module "styled-components" {
  import { DefaultBreakpointName } from "styled-components-breakpoint";

  export interface DefaultTheme {
    fontFamily: {
      primary: string;
    };
    fontWeight: {
      primary: {
        regular: number;
        bold: number;
      };
    };
    colors: {
      primary: string;
      primaryLight: string;
      yellow: string;
      red: string;
      blue: string;
      teal: string;
    };
    shadows: {};
    breakpoints: {
      [name in DefaultBreakpointName]: number;
    };
  }
}
