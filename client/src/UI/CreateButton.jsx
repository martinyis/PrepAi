import React from "react";
import { Button } from "@mui/material";
const CreateButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: "60%",
        height: "40px",
        backgroundColor: "#235c72",
        maxWidth: "200px",
        marginBottom: "100px",
      }}
      style={{
        backgroundColor: "#235c72",
        color: "#9dcad4",
        fontSize: "15px",
      }}
    >
      Start
    </Button>
  );
};

export default CreateButton;
