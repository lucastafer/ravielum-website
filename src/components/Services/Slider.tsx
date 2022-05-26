import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          ".css-15q1o67-MuiPaper-root-MuiCard-root": {
            boxShadow: 0,
          },
          ".swiper-button-prev, .swiper-button-next": {
            color: "#00C2CB",
          },
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 500000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              padding={6}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  background: "#FFF",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: { xs: "20px", md: "30px" },
                      fontWeight: "300",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    Especialistas em frete internacional expresso, com o menor
                    custo e sem complicações.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Slider;
