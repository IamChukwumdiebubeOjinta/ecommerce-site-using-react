import { Box } from "@chakra-ui/react";
import {styles} from '../utils/styles'
import React from "react";

const BestDeals = () => {
  return (
    <div className="bg-gray-50 py-7">
      <Box margin={"auto"} className={`container ${styles.paddingX}`}>
      <div className="flex items-baseline">
        <span className="font-poppins text-[40px] leading-[38px] tracking-tight font-bold">C</span><span className="font-poppins text-[28px] leading-[38px] tracking-tight font-bold italic">heck this out...</span>
      </div>
      <h1>
        
      </h1>

      <p className="font-poppins text-[20px] leading-[36px] mb-[30px]">
        Get our best deals in with specialty price for super your activity
      </p>

      <div className="grid grid-cols-2 auto-cols-max place-items-center text-2xl font-normal tracking-[0.075px]">
        
        <div className="row-span-2 h- bg-cover shadow-md hover:shadow-xl">
      
                  <img
                    src="./thrift4.jpg"
                    alt=""
                    className="h-full  object-cover object-center"
                  />
        </div>


        <div className=" shadow-md w-full p-2">
           <img
                    src="./thrift5.jpg"
                    alt=""
                    className="h-f w- object-cover object-center"
                  />
        </div>
        <div className="w-full  shadow-md p-2">
        <img
                    src="./thrift5.jpg"
                    alt=""
                    className="h-full w- object-cover object-center"
                  />
        </div>
      </div>
    </Box>
    </div>
  );
};

export default BestDeals;
