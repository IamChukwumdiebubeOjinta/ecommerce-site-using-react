import { Box, Flex, Heading, HStack, Input } from "@chakra-ui/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";

const NewsLetter = () => {
  return (
    <Box display={"flex"} alignItems={"center"} className="container mx-auto">
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        {/* Title */}
        <Flex alignItems={"center"} gap={"10px"}>
          <Box padding={"5px"} borderRadius={"50%"}>
            <EnvelopeIcon className="w-6 h-6" />
          </Box>
          <Flex direction={"column"} gap={"5px"}>
            <h2>GET LATEST DEALS</h2>
            <span>Our best promotions sent to your inbox.</span>
          </Flex>
        </Flex>
        {/* Input */}
        <HStack spacing={"10px"} alignItems='baseline'>
          <Input
            variant={"flushed"}
            type="email"
            placeholder="Enter Your Email Address"
            w={'100%'}
          />
          <Input type={'submit'} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NewsLetter;
