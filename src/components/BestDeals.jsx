import { Box } from "@chakra-ui/react";
import React from "react";

const BestDeals = () => {
  return (
    <Box margin={"auto"} className="container">
      <h1 className="font-poppins text-[28px] leading-[38px] tracking-tight font-bold">
        Check this out...
      </h1>

      <p className="font-poppins text-[20px] leading-[36px] mb-[30px]">
        Get our best deals in with specialty price for super your activity
      </p>

      <div className="grid grid-cols-2 auto-cols-max gap-8 place-items-center text-2xl font-normal tracking-[0.075px]">
        
        <div className="row-span-2 h-full shadow-md p-5 w-full">
          <div className="mb-[28px]">
            <p>Samsung YOGA</p>
            <h2>Top Product</h2>
          </div>
          <p>
            From <span>$ 999</span>
          </p>
        </div>


        <div className=" shadow-md w-full p-5">
          <div className="mb-[28px]">
            <p>Samsung YOGA</p>
            <h2>Top Product</h2>
          </div>
          <p>
            From <span>$ 999</span>
          </p>
        </div>
        <div className="w-full shadow-md p-5">
          <div className="mb-[28px]">
            <p>Samsung YOGA</p>
            <h2>Top Product</h2>
          </div>
          <p>
            From <span>$ 999</span>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default BestDeals;
