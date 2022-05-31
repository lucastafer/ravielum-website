import React, { useState } from "react";
import { Box, Card, CardContent, Slide, Typography } from "@mui/material";

interface Props {
  image: string;
  message: string;
  details: string;
}

const CardComponent = ({ image, message, details }: Props) => {
  const [cardHover, setCardHover] = useState(false);

  const handleMouseEnter = () => {
    setCardHover(true);
  };

  const handleMouseOut = () => {
    setCardHover(false);
  };

  return (
    <Card
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseOut}
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "left",
        backgroundImage: image,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "1rem",
        boxShadow: "none",
        width: 300,
        height: 500,
        transition: "0.5s",
        "&:hover": {
          transform: " scale(1.05)",
          transition: "0.3s",
        },
      }}
    >
      <CardContent>
        <Box>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Dosis",
              fontSize: { xs: "30px", md: "40px" },
              fontWeight: "600",
              paddingBottom: "0.25rem",
            }}
          >
            {message}
          </Typography>
        </Box>
        <Slide direction="up" in={cardHover} mountOnEnter unmountOnExit>
          <Typography
            sx={{
              textAlign: "left",
              color: "#FFF",
              fontFamily: "Dosis",
              fontSize: { xs: "14px", md: "20px" },
              fontWeight: "600",
              paddingBottom: "0.25rem",
            }}
          >
            {details}
          </Typography>
        </Slide>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
