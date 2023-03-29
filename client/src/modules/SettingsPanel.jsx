import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

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
          padding: theme.spacing(0.5),
        }}
      ></Box>
    </>
  );
};

export default SettingsPanel;
