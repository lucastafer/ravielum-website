import React from "react";
import LandingContainer from "../Container";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import map from "../../assets/map.png";
import ship from "../../assets/ship.jpg";
import truck from "../../assets/truck.jpeg";

const AboutUs = () => {
  return (
    <LandingContainer
      minHeight="93vh"
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
              Alta performance e excelência no agenciamento de sua carga da
              origem até o endereço final, sem demora e sem burocracia
            </Typography>
            <Typography
              sx={{
                fontFamily: "Dosis",
                fontSize: "18px",
                fontWeight: "300",
                paddingBottom: "1.5rem",
              }}
            >
              A Ravielum Logistics une produtos a consumidores desde 2019. Não
              importa o tamanho ou o volume da sua operação, conectamos o seu
              negócio a um mercado globalizado com previsibilidade e economia.
              Graças a nossa ampla experiência e estrutura completa em logística
              internacional, proporcionamos serviços de alta qualidade e
              confiabilidade, buscando compreender e atender as reais
              necessidades dos nossos clientes.
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Stack
        sx={{
          paddingTop: { xs: 110, lg: 45, xl: 30 },
        }}
      >
        <Card
          sx={{
            background: "transparent",
            maxWidth: "100%",
            position: "relative",
            margin: "auto",
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
                Alta performance e excelência no agenciamento de sua carga da
                origem até o endereço final, sem demora e sem burocracia
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: "18px",
                  fontWeight: "300",
                  paddingBottom: "1.5rem",
                }}
              >
                A Ravielum Logistics une produtos a consumidores desde 2019. Não
                importa o tamanho ou o volume da sua operação, conectamos o seu
                negócio a um mercado globalizado com previsibilidade e economia.
                Graças a nossa ampla experiência e estrutura completa em
                logística internacional, proporcionamos serviços de alta
                qualidade e confiabilidade, buscando compreender e atender as
                reais necessidades dos nossos clientes.
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
                Alta performance e excelência no agenciamento de sua carga da
                origem até o endereço final, sem demora e sem burocracia
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  fontSize: "18px",
                  fontWeight: "300",
                  paddingBottom: "1.5rem",
                }}
              >
                A Ravielum Logistics une produtos a consumidores desde 2019. Não
                importa o tamanho ou o volume da sua operação, conectamos o seu
                negócio a um mercado globalizado com previsibilidade e economia.
                Graças a nossa ampla experiência e estrutura completa em
                logística internacional, proporcionamos serviços de alta
                qualidade e confiabilidade, buscando compreender e atender as
                reais necessidades dos nossos clientes.
              </Typography>
            </Box>
            <Box
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
