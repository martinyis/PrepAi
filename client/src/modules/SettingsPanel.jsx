import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import CheckBoxes from "../UI/CheckBoxes";
import InputFiled from "../UI/InputFiled";
import { Button } from "@mui/material";

const SettingsPanel = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        className="info_panels-panel"
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          borderRadius: 6,
          border: theme.palette.border.primary,
          padding: theme.spacing(0.5),
        }}
      >
        <CheckBoxes />
        <Typography
          style={{
            paddingBottom: 10,
            paddingLeft: 10,
          }}
          variant="h3"
        >
          Number of thesis
        </Typography>
        <InputFiled />
        <Typography
          style={{
            paddingBottom: 10,
            paddingLeft: 10,
          }}
          variant="h3"
        >
          Number of questions
        </Typography>
        <InputFiled />
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "10px", margin: "auto" }}
        >
          Create
        </Button>
      </Box>
    </>
  );
};

export default SettingsPanel;
