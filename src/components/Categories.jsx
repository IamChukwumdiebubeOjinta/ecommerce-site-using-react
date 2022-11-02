import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import styles from "../utils/styles";
import Category from "./Category";

const Categories = () => {
  return (
    <React.Fragment>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={20}
        className={`${styles.paddingY}`}
      >
        {[
          ["Men", "/men"],
          ["Women", "/women"],
          ["Kids", "/kids"],
          ["Others", "/others"],
        ].map(([item, link]) => (
          <a href={link} key={item}>
            <Box
              w={"250px"}
              h={"100px"}
              className="flex items-center justify-center shadow-lg w-full cursor-pointer rounded-md"
            >
              {item}
            </Box>
          </a>
        ))}
      </HStack>
      <Box margin={"auto"} className="container">
        <h2 className="text-3xl leading-9 font-medium mb-6 tracking-wider">
          Fresh Deals
        </h2>
        <Flex className="overflow-y-auto">
          {/* <Category /> */}
          
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Categories;
