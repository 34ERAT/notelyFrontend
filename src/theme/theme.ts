import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#8c7a83",
    },
    background: {
      default: "#f0e4d3",
    },
  },
};
export default createTheme(themeOptions);
