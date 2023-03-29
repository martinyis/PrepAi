import theme from "../theme";

export const styles = {
  root: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  },
  infoPanels: {
    px: {
      xs: 5,
      sm: 10,
      md: 10,
    },
    display: "flex",
    gap: {
      xs: theme.spacing(0.5), // set gap to 2 for screen sizes below sm
      md: theme.spacing(1.5),
      sm: theme.spacing(1), // set gap to 4 for screen sizes sm and up
    },
    width: "100%",
    justifyContent: "center",
    height: "100%",
  },
  infoPanel: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    borderRadius: 6,
    padding: theme.spacing(0.5),
  },
  panelInput: {
    backgroundColor: "#0f2031",
    borderRadius: 6,
    marginTop: 35,
    border: "1px solid #0f2031",
    transition: "border-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
    "&:hover": {
      borderColor: "#0f2031",
      borderRadius: 10,
    },
  },
};
