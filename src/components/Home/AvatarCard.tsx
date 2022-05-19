import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

interface Props {
  icon: JSX.Element;
  message: string;
}

const AvatarCard = ({ icon, message }: Props) => {
  return (
    <Box>
      <Avatar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80px",
          height: "80px",
          background: "#00C2CB",
          fontSize: "35px",
        }}
      >
        {icon}
      </Avatar>
      <Typography
        sx={{
          paddingTop: 2,
          maxWidth: "220px",
          fontFamily: "Dosis",
          fontSize: "22px",
          fontWeight: "700",
          paddingBottom: "1.5rem",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default AvatarCard;
