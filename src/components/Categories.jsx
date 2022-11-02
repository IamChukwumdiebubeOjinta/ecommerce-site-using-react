import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../utils/styles";
import Category from "./Category";

const Categories = ({text}) => {
  return (
    <React.Fragment>
      <Box margin={"auto"} className="container">
        <h2 className="text-2xl leading-9 font-bold tracking-tight mb-6">
          {text}
        </h2>
        <Flex className="overflow-y-auto">
          <Category />
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Categories;
