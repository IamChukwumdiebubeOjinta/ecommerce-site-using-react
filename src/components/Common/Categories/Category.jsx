import { Badge, Box, Flex, Image } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

function Category() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    category: "men",
    title: "Product",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 3
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.category}'s Wear
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
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>
        </Flex>

        <Box display="flex" mt="2" alignItems="center" justifyContent={'space-between'}>
          <Box display={'flex'}>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
                className="w-6 h-6"
              />
            ))}
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Category;
