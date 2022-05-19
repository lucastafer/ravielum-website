import React from "react";
import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsappButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        position: "fixed",
        marginRight: "1rem",
        right: 0,
        background: "#25D366",
        fontSize: "50px",
        borderRadius: "50%",
        "&:hover": {
          background: "#25D366",
        },
      }}
    >
      <WhatsAppIcon sx={{ color: "#FFF", fontSize: "50px" }} />
    </Button>
  );
};

export default WhatsappButton;
