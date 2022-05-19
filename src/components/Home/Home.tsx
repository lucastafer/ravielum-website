import React from "react";
import "../../App.css";
import Navbar from "../Navbar";
import background from "../../assets/world.png";
import LandingContainer from "../Container";
import MuiSwiper from "./MuiSwiper";

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingContainer
        minHeight="80vh"
        backgroundImage={`linear-gradient(rgba(0, 0, 0, 1),rgba(0, 194, 203, 0.4)),url(${background})`}
        backgroundPosition="center"
        backgroundSize="cover"
        position="relative"
      >
        <MuiSwiper />
      </LandingContainer>
    </>
  );
};

export default Home;
