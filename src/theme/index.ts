import { DefaultTheme } from "styled-components";
import breakpoints from "./breakpoints";

const theme: DefaultTheme = {
  fontFamily: {
    primary: "Baloo2",
  },
  fontWeight: {
    primary: {
      regular: 400,
      bold: 600,
    },
  },
  colors: {
    primary: '#274171',
    primaryLight: '#E9EEF8',
    yellow: '#FFCB66',
    red: '#FF9899',
    blue: '#61C0F9',
    teal: '#02B4C1',
  },
  shadows: {},
  breakpoints,
};

export default theme;
