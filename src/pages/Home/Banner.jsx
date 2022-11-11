import { Box } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <div className=" flex lg:flex justify-around gap-5">
      {/* Boxes */}
      <Box maxW={"35rem"} w={"100%"}>
        <img src="/thrift1.jpg" alt="" />
      </Box>
      <Box maxW={"35rem"} w={"100%"}>
        <img src="/thrift1.jpg" alt="" />
      </Box>
    </div>
  );
};

export default Banner;
