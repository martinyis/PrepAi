import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const StartButton = (props) => {
  const { text, handleSubmit } = props;
  const navigate = useNavigate();
  return (
      <Button
        onClick={() => {
          console.log("click");
          handleSubmit();
          navigate("/result")
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
