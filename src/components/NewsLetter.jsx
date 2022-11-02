import { Box, Flex, HStack, Input } from "@chakra-ui/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import styles from "../utils/styles";

const NewsLetter = () => {
  return (
    <Box display={"flex"} alignItems={"center"} className={`container mx-auto ${styles.paddingY}`}>
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        {/* Title */}
        <Flex direction={"column"} gap={"5px"}>
          <h2>GET LATEST DEALS</h2>
          <span>Our best promotions sent to your inbox.</span>
        </Flex>

        {/* Input */}
        <HStack spacing={"10px"} alignItems="baseline">
          <Flex alignItems={"center"} gap={"10px"}>
            <Box padding={"5px"} borderRadius={"50%"}>
              <EnvelopeIcon className="w-6 h-6" />
            </Box>

            <Flex gap={"20px"}>
              <Input
                variant={"flushed"}
                type="email"
                placeholder="Enter Your Email Address"
                w={"250px"}
              />
              <Input w={"200px"} type={"submit"} value='Register' />
            </Flex>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NewsLetter;
