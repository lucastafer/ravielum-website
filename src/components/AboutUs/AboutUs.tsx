import React from "react";
import LandingContainer from "../Container";
import { Box, Card, CardContent, Typography } from "@mui/material";
import map from "../../assets/map.png";

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
          boxShadow: "#00C2CB 5px 20px 30px 5px;",
          maxWidth: "70%",
          position: "absolute",
          top: "-120%",
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
              A ILG Comex une produtos a consumidores desde 2014. Não importa o
              tamanho ou o volume da sua operação, conectamos o seu negócio a um
              mercado globalizado com previsibilidade e economia. Graças a nossa
              ampla experiência e estrutura completa em logística internacional,
              proporcionamos serviços de alta qualidade e confiabilidade,
              buscando compreender e atender as reais necessidades dos nossos
              clientes.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </LandingContainer>
  );
};

export default AboutUs;
