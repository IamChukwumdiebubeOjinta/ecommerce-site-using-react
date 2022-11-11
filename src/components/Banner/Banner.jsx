import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Banner = ({ text }) => {
  return (
    <div className={``}>
      <Box className="container mx-auto">
        <Heading className="">{text}</Heading>
      </Box>
    </div>
  );
};

export default Banner;
