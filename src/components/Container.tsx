import React from "react";
import { Box, Container, BoxProps, ContainerProps } from "@mui/material";

interface LandingContainerProps {
  id?: string;
  children?: React.ReactNode;
  /**@default 'background.paper' */
  backgroundColor?: BoxProps["bgcolor"];
  backgroundImage?: any;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  component?: BoxProps["component"];
  paddingX?: BoxProps["paddingX"];
  paddingY?: BoxProps["paddingY"];
  paddingTop?: BoxProps["paddingTop"];
  paddingBottom?: BoxProps["paddingBottom"];
  paddingLeft?: BoxProps["paddingLeft"];
  paddingRight?: BoxProps["paddingRight"];
  minHeight?: BoxProps["minHeight"];
  position?: BoxProps["position"];
  borderRadius?: BoxProps["borderRadius"];
  marginTop?: BoxProps["marginTop"];
  maxWidth?: ContainerProps["maxWidth"];
}

const LandingContainer: React.FC<LandingContainerProps> = ({
  children,
  paddingX = { xs: 2, md: 6, lg: 10 },
  paddingY = 6,
  backgroundColor = "background.paper",
  component,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  minHeight = 500,
  id,
  position,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borderRadius,
  marginTop,
  maxWidth = "xl",
}) => {
  return (
    <Box
      id={id}
      component={component}
      sx={{
        backgroundColor,
        minHeight,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        borderRadius,
        marginTop,
      }}
    >
      <Container
        maxWidth={maxWidth}
        sx={{
          height: 1,
          paddingX,
          paddingY,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          position,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default LandingContainer;
