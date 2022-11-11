import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../../components";
import { Panel } from "../Panels";
import Card from "./Card";

const Checkout = () => {
  return (
    <Panel>
      <Flex
        alignItems={"baseline"}
        className="justify-between border-b border-gray-200 sm:py-6 py-2 sm:px-36 px-6"
      >
        <Banner text={"Check Out"} />
      </Flex>
      <div className="mx-auto container sm:py-11 py-5 px-[0.9375rem]">
        <Flex className="sm:p-[1.5rem] flex sm:gap-[2rem] flex-1">
          {/* Image */}
          <div className="flex-[0.5]">
            <img src="./thrift2.jpg" alt="" />
          </div>
          <div className="flex-[0.5]">
            <h3 className="text-lg font-semibold">Your Items</h3>
            <hr />

            <div className="flex flex-col gap-3 px-4 overflow-y-auto my-2">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="flex justify-between mt-2 px-4 items-center">
<h2 className="text-2xl">Price :</h2><p className="text-xl font-semibold">$900</p>
            </div>
          </div>
        </Flex>
      </div>
    </Panel>
  );
};

export default Checkout;
