import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
const CreatePrep = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          paddingTop: 30,
          paddingBottom: 10,
          backgroundColor: theme.palette.background.default,
          height: "100vh",
        }}
      >
        <Box
          className="info__panels"
          sx={{
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
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              width: "100%",
              borderRadius: 6,
            }}
          >
            <Typography variant="h4">Create Prep</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              width: "100%",
              borderRadius: 6,
            }}
          ></Box>
        </Box>
      </Box>
    </div>
  );
};

export default CreatePrep;
