import { Box, Flex, HStack, Input } from "@chakra-ui/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import styles from "../utils/styles";

const NewsLetter = () => {
  return (
    <div className="w-full bg-[#f2f1f1]">
      <Box
        display={"flex"}
        alignItems={"center"}
        className={`container mx-auto ${styles.paddingY}`}
      >
        <Flex
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          className=" sm:flex flex-col sm:gap-0 gap-2 sm:px-0 px-2"
        >
          {/* Title */}
          <Flex direction={"column"} gap={"5px"}>
            <h2 className="text-2xl font-light text-[#3e2c40]">
              GET LATEST <span className="text-[#f6ab29]">DEALS</span>{" "}
            </h2>
            <span className="text-[#3e2c40]">
              Our best <span className="text-[#f6ab29]">promotions</span> sent
              to your inbox.
            </span>
          </Flex>

          {/* Input */}
          <Flex alignItems={"center"} gap={"10px"}>
            <Box
              padding={"5px"}
              display={"flex"}
              gap={"10px"}
              alignItems="center"
            >
              <EnvelopeIcon className="w-6 h-6" />
              <Input
                variant={"flushed"}
                type="email"
                placeholder="Enter Your Email Address"
                w={"250px"}
              />
            </Box>
            <Input type={"submit"} borderRadius={0} paddingInline={6} backgroundColor='#3e2c40' className='cursor-pointer text-[#f2f1f1]' value="Register" />
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default NewsLetter;
