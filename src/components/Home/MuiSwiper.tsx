import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FaShippingFast } from "react-icons/fa";
import { MdPriceCheck, MdTrackChanges } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import AvatarCard from "./AvatarCard";

const MuiSwiper = () => {
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
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
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
                  background: "transparent",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: { xs: "30px", md: "40px" },
                      fontWeight: "300",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    How to export ?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: { xs: "40px", md: "50px" },
                      fontWeight: "600",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Your business faster and easier.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: { xs: "20px", md: "30px" },
                      fontWeight: "300",
                      paddingBottom: "1.5rem",
                    }}
                  >
                    Specialists in International Express Shipping, at the lowest
                    cost and without any complication
                  </Typography>

                  <Button
                    href="https://wa.me/5519988237706"
                    target="_blank"
                    variant="contained"
                    sx={{
                      marginTop: 5,
                      background: "#00C2CB",
                      fontFamily: "Dosis",
                      fontWeight: "Bold",
                      fontSize: { xs: "15px", md: "18px" },
                      borderRadius: 5,
                      "&:hover": {
                        background: "#02a6ad",
                      },
                    }}
                  >
                    Request budget
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box padding={6}>
              <Card
                sx={{
                  background: "transparent",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: { xs: "38px", md: "50px" },
                      fontWeight: "600",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Optimize your logistics and expand your competitive
                    advantage.
                  </Typography>

                  <Stack
                    display={{ xs: "none", sm: "flex" }}
                    paddingTop={3}
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <AvatarCard
                      icon={<MdPriceCheck />}
                      message="Reduce your logistics costs"
                    />
                    <AvatarCard
                      icon={<FaShippingFast />}
                      message="Advantages with speed and punctuality"
                    />

                    <AvatarCard
                      icon={<AiOutlineSafetyCertificate />}
                      message="Safety and ease"
                    />

                    <AvatarCard
                      icon={<MdTrackChanges />}
                      message="Monitoring the process on our platform"
                    />
                  </Stack>

                  {/*Mobile */}

                  <Stack
                    display={{ xs: "flex", sm: "none" }}
                    paddingTop={3}
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <AvatarCard
                      icon={<MdPriceCheck />}
                      message="Reduce your logistics costs"
                    />
                    <AvatarCard
                      icon={<FaShippingFast />}
                      message="Speed and punctuality"
                    />
                  </Stack>
                  <Stack
                    display={{ xs: "flex", sm: "none" }}
                    paddingTop={3}
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <AvatarCard
                      icon={<AiOutlineSafetyCertificate />}
                      message="Safety and ease"
                    />

                    <AvatarCard
                      icon={<MdTrackChanges />}
                      message="Tracking on our platform"
                    />
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { sx: "center", md: "left" },
                    }}
                  >
                    <Button
                      href="https://wa.me/5519988237706"
                      target="_blank"
                      id="About Us"
                      variant="contained"
                      sx={{
                        marginBottom: 3,
                        background: "#00C2CB",
                        fontFamily: "Dosis",
                        fontWeight: "Bold",
                        fontSize: { xs: "15px", md: "18px" },
                        borderRadius: 5,
                        "&:hover": {
                          background: "#02a6ad",
                        },
                      }}
                    >
                      Talk to an expert
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default MuiSwiper;
