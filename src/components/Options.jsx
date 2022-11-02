import { Box, HStack, LinkBox } from "@chakra-ui/react";
import React from "react";
import styles from "../utils/styles";

const Options = () => {
  return (
    <HStack
      alignItems={"center"}
      justifyContent={"center"}
      spacing={20}
      className={`${styles.paddingY}`}
    >
      {[
        ["Men", "/men"],
        ["Women", "/women"],
        ["Teens", "/teens"],
        ["Kids", "/kids"],
      ].map(([item, link]) => (
        <LinkBox href={link} key={item}>
          <Box
            w={"250px"}
            h={"100px"}
            className="flex items-center justify-center shadow-lg w-full cursor-pointer rounded-md"
          >
            {item}
          </Box>
        </LinkBox>
      ))}
    </HStack>
  );
};

export default Options;
