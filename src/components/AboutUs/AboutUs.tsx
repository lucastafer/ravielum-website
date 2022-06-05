import React from "react";
import LandingContainer from "../Container";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import map from "../../assets/map.png";
import ship from "../../assets/ship.jpg";
import truck from "../../assets/truck.jpeg";

const AboutUs = () => {
  return (
    <LandingContainer
      minHeight="80vh"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.9))`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Card
        sx={{
          background: "#fff",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          maxWidth: "70%",
          position: "absolute",
          top: { xs: "-2%", sm: "-5%", xl: "-10%" },
          left: 0,
          right: 0,
          margin: "auto",
          padding: "1rem",
        }}
      >
        <CardContent
          sx={{
            display: { sx: "block", md: "flex" },
            flexDirection: { sx: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={map} alt="Map" width="250px" />
          </Box>
          <Box paddingLeft="1rem">
            <Typography
              sx={{
                fontFamily: "Dosis",
                fontSize: "30px",
                fontWeight: "600",
                paddingBottom: "0.5rem",
              }}
            >
              High performance and excellence in freight forwarding from sender
              to the final address, without delay or paperwork
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dosis",
                fontSize: "18px",
                fontWeight: "300",
                paddingBottom: "1.5rem",
              }}
            >
              Ravielum Logistics has been delivering goods to consumers since
              2014. No matter the size or volume of your operation, we connect
              your business to a global market with predictability and cost
              saving. Thanks to our extensive experience and complete structure
              in international logistics, we provide high quality and reliable
              services, seeking to understand and meet the real needs of our
              customers.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Stack
        sx={{
          paddingTop: { xs: 130, sm: 70, lg: 45, xl: 30 },
          boxShadow: "none",
        }}
      >
        <Card
          sx={{
            background: "transparent",
            maxWidth: "100%",
            position: "relative",
            margin: "auto",
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{
              display: { sx: "block", md: "flex" },
              flexDirection: { sx: "column", md: "row" },
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                img: {
                  borderRadius: "2%",
                },
              }}
            >
              <img src={ship} alt="Map" width="450px" />
            </Box>
            <Box paddingLeft="2rem" color="#FFF">
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: "30px",
                  fontWeight: "600",
                  paddingBottom: "0.5rem",
                }}
              >
                Discover why we are the company that evolves every day and wins
                customers in Brazil and around the world
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: "22px",
                  fontWeight: "300",
                  paddingBottom: "1.5rem",
                }}
              >
                Don't waste any more time and get rid of any worries, because
                with Ravielum Logistics your delivery is in good hands! Increase
                your revenue and strengthen your position worldwide with our
                help. We take your business wherever you want and function as a
                foundation for exponential growth in your sales. In addition to
                ensuring your company's autonomy and progress, we will also
                revolutionize your customer's shopping experience.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: "transparent",
            maxWidth: "100%",
            position: "relative",
            margin: "auto",
            boxShadow: "none",
          }}
        >
          <CardContent
            sx={{
              display: { sx: "block", md: "flex" },
              flexDirection: { sx: "column", md: "row" },
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box paddingRight="2rem" color="#FFF">
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: "30px",
                  fontWeight: "600",
                  paddingBottom: "0.5rem",
                }}
              >
                You sell and we deliver: responsibility and commitment from
                beginning to end
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: "22px",
                  fontWeight: "300",
                  paddingBottom: "1.5rem",
                }}
              >
                Count on Ravielum Logistics for the logistics operation
                waterway, air or road. We prioritize the value of our services
                to ensure the full satisfaction of our customers in all aspects.
                We develop a relationship of trust and transparency, to provide
                personalized deliveries through integrated support and constant
                availability.
              </Typography>
            </Box>
            <Box
              id="Services"
              sx={{
                img: {
                  borderRadius: "2%",
                },
              }}
            >
              <img src={truck} alt="Map" width="450px" />
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </LandingContainer>
  );
};

export default AboutUs;
