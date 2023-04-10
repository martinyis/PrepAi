import { Typography } from "@material-ui/core";
import React from "react";

const Steps = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        width: "100%",
        margin: "0 auto",
        marginTop: 100,
        backgroundColor: "rgb(14, 43, 61, 1)",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Typography variant="h2">How to use?</Typography>
      <Typography variant="h4">1. Click on the Create Button</Typography>
      <Typography variant="h4">
        2. Insert information about your course
      </Typography>
      <Typography variant="h4">3. Pick options for getting a result</Typography>
      <Typography variant="h4">4. Start your prep</Typography>
    </div>
  );
};

export default Steps;
