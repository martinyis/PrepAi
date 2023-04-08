import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["Cyntho Next", "Roboto", "Arial", "sans-serif"].join(","),
    h3: {
      color: "#496673",
      fontSize: "2rem",
    },
    caption: {
      color: "rgb(113, 149, 160)",
      fontSize: "1.5rem",
    },
  },
  palette: {
    primary: {
      main: "rgb(10, 60, 74, 1)",
    },
    secondary: {
      main: "rgb(13, 46, 64)",
    },
    background: {
      default: "rgb(15, 29, 46, 1)",
      paper: "rgb(14, 43, 61, 1)",
      header: "rgb(11, 53, 69, 1)",
    },
    text: {
      primary: "rgb(113, 149, 160)",
    },
    border: {
      primary: "1px solid #0f4f5f",
    },
  },
});

export default theme;
