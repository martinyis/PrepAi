import { Box, Typography } from "@material-ui/core";
import React from "react";

const ResultView = (props) => {
  const { overviewText } = props;
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Typography
        variant="h1"
        align="center"
        style={{
          //icnrefotnsize
          fontSize: "3rem",
        }}
      >
        Overview
      </Typography>
      <Typography
        variant="caption"
        style={{
          marginTop: "40px",
          letterSpacing: "0.03rem",
          lineHeight: "2em",
          textAlign: "left",
        }}
      >
        {overviewText}
      </Typography>
    </Box>
  );
};

export default ResultView;
