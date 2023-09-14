import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#344767",
      light: "#1484D6",
    },
    secondary: {
      light: "#1f283e",
      main: "#1d2843",
    },
    info: {
      main: "#1976d2",
    },
  },
});

export const fonts = {
  "system-ui": "system-ui",
};
export default theme;
