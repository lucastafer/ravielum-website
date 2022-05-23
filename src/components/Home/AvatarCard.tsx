import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";

interface Props {
  icon: JSX.Element;
  message: string;
}

const AvatarCard = ({ icon, message }: Props) => {
  return (
    <Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            paddingTop: 2,
            maxWidth: { xs: "120px", md: "230px" },
            fontFamily: "Dosis",
            fontSize: { sx: "16px", md: "22px" },
            fontWeight: "700",
            paddingBottom: "1.5rem",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AvatarCard;
