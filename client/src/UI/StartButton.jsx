import React from "react";
import { Button } from "@mui/material";
const StartButton = (props) => {
  const { text } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "10px",
        width: "100%",
        height: "75px",
        marginTop: "25%",
        backgroundColor: "#235c72",
      }}
      style={{
        backgroundColor: "#235c72",
      }}
    >
      {text}
    </Button>
  );
};

export default StartButton;
