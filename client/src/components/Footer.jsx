import React from "react";
import { Box, Container } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        px: {
          xs: 2,
          sm: 3,
          md: 5,
          lg: 10,
          xl: 15,
        },
        backgroundColor: "rgb(10, 60, 74, 0.1)",
        height: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Footer
    </Box>
  );
};

export default Footer;
