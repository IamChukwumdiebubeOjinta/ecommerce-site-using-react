import { Box, Flex, Grid, Heading, Tag, TagLabel } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../../components";
import Panel from "./Panel";
import { tags } from "../../components/TopProducts/products";
import Product from "../../components/TopProducts/Product";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserPanel = () => {
  // const {
  //   productDispatch,
  //   productState: { sort },
  // } = CartState();
  return (
    <Panel>
      <Flex
        alignItems={"baseline"}
        className="justify-between border-b border-gray-200 sm:py-6 py-2 sm:px-36 px-6"
      >
        <Banner text={"Products"} />
        <div className="sm:flex gap-2 hidden">
          {tags.map((item, id) => (
            <Tag
              size={"lg"}
              key={id}
              borderRadius="full"
              variant="solid"
              // colorScheme="cyan"
              className="cursor-pointer tags"
            >
              <TagLabel>{item.name}</TagLabel>
            </Tag>
          ))}
        </div>
      </Flex>

      <Box aria-labelledby="products-heading" className="">
        <Heading as={"h2"} className="sr-only">
          Products
        </Heading>
        <Grid className="grid-cols-1 gap-y-10 lg:grid-cols-5">
          {/* <FilterBar /> */}
          <div className="block"></div>
          {/* Product grid */}
          <div className="lg:col-span-3 h-[75vh] overflow-y-scroll">
            <div className="relative overflow-hidden">
              <Product />
              <Product />
            </div>
            {/* /End replace */}
          </div>
        </Grid>
      </Box>
    </Panel>
  );
};

export default UserPanel;
