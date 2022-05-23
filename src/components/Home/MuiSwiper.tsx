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
                  background: "transparent",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
                    Como exportar ?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: { xs: "40px", md: "50px" },
                      fontWeight: "600",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Rapidez e facilidade sob medida para seu negócio.
                  </Typography>
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
                  <Button
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
                    Faça uma cotação
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
                    Otimize sua logística e amplie sua vantagem competitiva
                  </Typography>

                  <Stack
                    display={{ xs: "none", sm: "flex" }}
                    paddingTop={3}
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <AvatarCard
                      icon={<MdPriceCheck />}
                      message="Reduza seus custos logísticos"
                    />
                    <AvatarCard
                      icon={<FaShippingFast />}
                      message="Vantagens com rapidez e pontualidade"
                    />

                    <AvatarCard
                      icon={<AiOutlineSafetyCertificate />}
                      message="Segurança e facilidade"
                    />

                    <AvatarCard
                      icon={<MdTrackChanges />}
                      message="Acompanhamento do processo em nossa plataforma"
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
                      message="Reduza seus custos logísticos"
                    />
                    <AvatarCard
                      icon={<FaShippingFast />}
                      message="Rapidez e pontualidade"
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
                      message="Segurança e facilidade"
                    />

                    <AvatarCard
                      icon={<MdTrackChanges />}
                      message="Rastreio em nossa plataforma"
                    />
                  </Stack>
                  <Button
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
                    Fale com um especialista
                  </Button>
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
