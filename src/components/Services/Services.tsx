import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import LandingContainer from "../Container";
import CardComponent from "./CardComponent";
import background from "../../assets/services-bg.jpg";
import card1 from "../../assets/card1.jpeg";
import card2 from "../../assets/card2.jpeg";
import card3 from "../../assets/card3.png";

const Services = () => {
  return (
    <LandingContainer
      id="Services"
      minHeight="90vh"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.5)), url(${background})`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          paddingBottom: 10,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Dosis",
            fontSize: { xs: "40px", md: "50px" },
            fontWeight: "600",
            paddingBottom: "0.25rem",
            color: "#00C2CB",
          }}
        >
          Meet our services
        </Typography>
      </Box>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CardComponent
          image={`linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 1)), url(${card1})`}
          message="Door-to-Door Logistic"
          details="Door-to-door (D2D) describes a shipping method where the product is picked up at the door of the vendor and delivered to the recipient's door."
        />
        <br />
        <br />
        <CardComponent
          image={`linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 1)), url(${card2})`}
          message="Storage and Transport"
          details="We at Ravielum Logistics also only offer local storage or transport of your products. Count on us for air, road or sea transport."
        />
        <br />
        <br />
        <CardComponent
          image={`linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 1)), url(${card3})`}
          message="Cross Docking"
          details="Cross Docking is defined as a distribution system in which the products received are not stored, but prepared for loading and distribution, in order to be delivered to the final recipient in the shortest possible time."
        />
      </Stack>
    </LandingContainer>
  );
};

export default Services;
