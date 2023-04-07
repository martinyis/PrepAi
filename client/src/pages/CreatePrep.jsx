import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import InfoPanel from "../modules/InfoPanel";
import SettingsPanel from "../modules/SettingsPanel";

const CreatePrep = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          paddingTop: 20,
          paddingBottom: 10,
          backgroundColor: theme.palette.background.default,
          height: "100%",
        }}
      >
        <Box
          className="info__panels"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 10,
              xl: 15,
            },
            display: "flex",
            gap: {
              xs: theme.spacing(0.3), // set gap to 2 for screen sizes below sm
              sm: theme.spacing(0.5), // set gap to 4 for screen sizes sm and up
              md: theme.spacing(1),
              lg: theme.spacing(1.5),
              xl: theme.spacing(2),
            },
            width: "100%",
            justifyContent: "center",
            height: "100%",
            flexDirection: {
              xs: "column", // set flex-direction to column for screen sizes below sm
              sm: "row",
              md: "row",
            },
          }}
        >
          <InfoPanel />
          <SettingsPanel />
        </Box>
      </Box>
    </div>
  );
};

export default CreatePrep;
