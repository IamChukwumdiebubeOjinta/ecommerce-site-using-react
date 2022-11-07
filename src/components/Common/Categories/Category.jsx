import { Badge, Box, Button, Flex, Image } from "@chakra-ui/react";
import { EyeIcon, StarIcon } from "@heroicons/react/20/solid";
import { property } from "../../../utils/constants";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Category({ item }) {
  const [width, setWidth] = useState(0);

  return (
    <React.Fragment>
      {/*  Inner Carousel */}

      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex border-black overflow-x-scroll gap-[40px]"
      >
        {/* Item */}
        {property.map((item, id) => (
          <div
            key={id}
            className=" sm:min-h-[20rem]  min-w-[20rem] w-full flex flex-col bg-white"
          >
            <div className=" h-full w-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                className="h-full w-full object-cover object-center pointer-events-none"
              />
            </div>
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  {item.category}'s Wear
                </Box>
              </Box>

              <Flex alignItems={"baseline"} justifyContent={"space-between"}>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {item.title}
                </Box>

                <Box>
                  {item.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>
              </Flex>

              <Box
                display="flex"
                mt="2"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Box display={"flex"}>
                  {/* {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < item.rating ? "teal.500" : "gray.300"}
                        className="w-6 h-6"
                      />
                    ))} */}
                  <Button>ADD TO CART </Button>
                </Box>
                <Box
                  as="span"
                  ml="2"
                  color="gray.600"
                  fontSize="sm"
                  display={"flex"}
                  gap={1}
                  alignItems="center"
                >
                  {item.reviewCount} <EyeIcon className="w-4 h-4" />
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </motion.div>
    </React.Fragment>
  );
}

export default Category;
