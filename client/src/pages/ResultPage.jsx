import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
const ResultPage = () => {
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          paddingTop: 50,
          backgroundColor: theme.palette.background.default,
          height: "100vh",
        }}
      >
        <Typography variant="h4">Result Page</Typography>
      </Box>
    </div>
  );
};

export default ResultPage;
