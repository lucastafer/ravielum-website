import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Typography
        sx={{
          color: "#00C2CB",
          paddingTop: 2,
          fontFamily: "Dosis",
          fontSize: "22px",
          fontWeight: "400",
          paddingBottom: "1.5rem",
        }}
      >
        Copyright © Ravielum Logistics {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
