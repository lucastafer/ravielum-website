import { Button } from "@mui/material";
import React from "react";

interface Props {
  icon: JSX.Element;
  link: string;
}

const SocialMediaIcon = ({ icon, link }: Props) => {
  return (
    <Button
      variant="text"
      href={link}
      target="_blank"
      sx={{
        color: "#FFF",
        fontFamily: "Dosis",
        fontSize: "20px",
        fontWeight: "400",
        paddingBottom: "1.5rem",
        transition: "ease-in 0.3s",
        "&:hover": {
          cursor: "pointer",
          transform: " scale(1.3)",
          transition: "0.3s",
        },
      }}
    >
      {icon}
    </Button>
  );
};

export default SocialMediaIcon;
