import React from "react";
import LandingContainer from "../Container";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <LandingContainer
      minHeight="30vh"
      backgroundImage={`linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.95))`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    ></LandingContainer>
  );
};

export default Contacts;
