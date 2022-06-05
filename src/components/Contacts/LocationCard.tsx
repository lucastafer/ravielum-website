import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface LocationProps {
  country: any;
  address: string;
}

const LocationCard = ({ country, address }: LocationProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: "1rem",
        maxWidth: { xs: "none", md: "300px" },
        height: 100,
        transition: "0.5s",
        "&:hover": {
          transform: " scale(1.05)",
          transition: "0.3s",
        },
      }}
    >
      <CardContent>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Avatar alt="Remy Sharp" src={country} />
          </Box>
          <Box sx={{ flex: 2 }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "#FFF",
                fontFamily: "Dosis",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: "600",
              }}
            >
              {address}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
