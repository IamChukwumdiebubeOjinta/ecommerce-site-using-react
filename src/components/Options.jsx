import { Box, Flex, HStack, LinkBox } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styles from "../utils/styles";

const Options = () => {
  return (
    <motion.div
      className={`${styles.paddingY} flex flex-wrap items-center justify-center gap-[10px]`}
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
    </motion.div>
  );
};

export default Options;
