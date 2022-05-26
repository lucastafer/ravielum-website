import React from "react";
import LandingContainer from "../Container";
import Slider from "./Slider";

type Props = {};

const Services = (props: Props) => {
  return (
    <LandingContainer
      minHeight="93vh"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 1))`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Slider />
    </LandingContainer>
  );
};

export default Services;
