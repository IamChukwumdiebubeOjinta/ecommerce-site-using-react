import React from "react";
import Panel from "./Panel";
import { tags } from "../../components/TopProducts/products";
import { Box, Button, Flex, Grid, Heading, Tag, TagLabel } from "@chakra-ui/react";
import { Banner } from "../../components";
import AddItem from "./AddItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AdminPanel = () => {
  return (
    <Panel>
      <Flex
        alignItems={"baseline"}
        className="justify-between border-b border-gray-200 sm:py-6 py-2 sm:px-36 px-6"
      >
        <Banner text={"Admin Dashboard"} />

        <AddItem />
        
      </Flex>

      <Box aria-labelledby="products-heading" className="">
        <Heading as={"h2"} className="sr-only">
          Products
        </Heading>
        <Grid className="grid-cols-1 gap-y-10 lg:grid-cols-5">
          <h3>Something</h3>
          <h3>Something</h3>
          <h3>Something</h3>
        </Grid>
      </Box>
    </Panel>
  );
};

export default AdminPanel;
