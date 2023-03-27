import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(12, 51, 52, 1)",
    },
    secondary: {
      main: "rgb(13, 46, 64)",
    },
    background: {
      default: "rgb(15, 29, 46, 1)",
      paper: "rgb(36, 86, 102)",
      header: "rgb(11, 53, 69, 1)",
    },
    text: {
      primary: "rgb(113, 149, 160)",
    },
  },
});

export default theme;
