import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LandingContainer from "../Container";
import SocialMediaIcon from "./SocialMediaIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <LandingContainer
      minHeight="30vh"
      backgroundImage={`linear-gradient(rgb(0, 194, 203, 1),rgba(0, 0, 0, 1))`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Stack
        id="Contact"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Dosis",
              fontSize: "50px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Let's keep in touch!
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              paddingTop: 2,
              fontFamily: "Dosis",
              fontSize: "20px",
              fontWeight: "400",
              paddingBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Contact us in your favourite channel:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItenms: "center",
              justifyContent: "center",
              maxWidth: "100%",
            }}
          >
            <SocialMediaIcon
              icon={<WhatsAppIcon />}
              link="https://wa.me/5519988237706"
            />
            <SocialMediaIcon
              icon={<InstagramIcon />}
              link="https://www.instagram.com/"
            />
            <SocialMediaIcon
              icon={<FacebookIcon />}
              link="https://www.facebook.com/"
            />
            <SocialMediaIcon
              icon={<LinkedInIcon />}
              link="https://www.linkedin.com/feed/"
            />
            <SocialMediaIcon
              icon={<EmailIcon />}
              link="mailto: lucastafer.dev@gmail.com"
            />
          </Box>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Dosis",
              fontSize: "16px",
              fontWeight: "400",
              paddingBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Ravielum Logistics is a company specialized in freight forwarding,
            logistics and international express freight that has modern
            solutions and a large team of professionals capable of expanding the
            reach of your company globally.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Dosis",
              fontSize: "50px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Let's keep in touch!
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              paddingTop: 2,
              fontFamily: "Dosis",
              fontSize: "20px",
              fontWeight: "400",
              paddingBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Contact us in your favourite channel:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItenms: "center",
              justifyContent: "center",
              maxWidth: "100%",
            }}
          >
            <SocialMediaIcon icon={<WhatsAppIcon />} link="" />
            <SocialMediaIcon icon={<InstagramIcon />} link="" />
            <SocialMediaIcon icon={<FacebookIcon />} link="" />
            <SocialMediaIcon icon={<LinkedInIcon />} link="" />
            <SocialMediaIcon icon={<EmailIcon />} link="" />
          </Box>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Dosis",
              fontSize: "16px",
              fontWeight: "400",
              paddingBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Ravielum Logistics is a company specialized in freight forwarding,
            logistics and international express freight that has modern
            solutions and a large team of professionals capable of expanding the
            reach of your company globally.
          </Typography>
        </Box>
      </Stack>
    </LandingContainer>
  );
};

export default Contacts;
