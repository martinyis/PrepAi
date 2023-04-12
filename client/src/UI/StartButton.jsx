import React from "react";
import { Button } from "@mui/material";
const StartButton = (props) => {
  const { text, handleSubmit } = props;
  return (
    <Button
      onClick={() => {
        console.log("click");
        handleSubmit();
      }}
      variant="contained"
      color="primary"
      sx={{
        width: "60%",
        height: "40px",
        marginTop: "20%",
        backgroundColor: "#235c72",
      }}
      style={{
        backgroundColor: "#235c72",
        color: "#9dcad4",
        fontSize: "15px",
      }}
    >
      {text}
    </Button>
  );
};

export default StartButton;
