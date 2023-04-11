import React from "react";
import { Button } from "@mui/material";
import { Link, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const CreateButton = () => {
  const navigate = useNavigate();
  return (
//     <Link to="create">
      <Button
        onClick={() => navigate("/create")}
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
//     </Link>
  );
};

export default CreateButton;
