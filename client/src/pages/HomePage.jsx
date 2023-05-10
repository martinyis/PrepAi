import { Link, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import About from "../UI/About";
import Steps from "../UI/Steps";
import CreateButton from "../UI/CreateButton";
const HomePage = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          paddingTop: 10,
          backgroundColor: theme.palette.background.default,
          height: "100%",
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 10,
            xl: 15,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <About />
        <Steps />
        <CreateButton />
      </Box>
    </div>
  );
};

export default HomePage;
