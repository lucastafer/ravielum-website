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
          paddingTop: 12,
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box>
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
                      fontSize: "40px",
                      fontWeight: "300",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Como exportar ?
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: "50px",
                      fontWeight: "600",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Rapidez e facilidade sob medida para seu negócio.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      fontSize: "30px",
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
                      background: "#00C2CB",
                      fontFamily: "Dosis",
                      fontWeight: "Bold",
                      fontSize: "18px",
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
            <Box>
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
                      fontSize: "50px",
                      fontWeight: "600",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Otimize sua logística e amplie sua vantagem competitiva
                  </Typography>

                  <Stack
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
                      message="Segurança e facilidade no processo porta-a-porta"
                    />

                    <AvatarCard
                      icon={<MdTrackChanges />}
                      message="Acompanhamento do processo em tempo real em nossa plataforma"
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#00C2CB",
                      fontFamily: "Dosis",
                      fontWeight: "Bold",
                      fontSize: "18px",
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
