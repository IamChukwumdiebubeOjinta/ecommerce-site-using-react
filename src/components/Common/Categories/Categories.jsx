import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../utils/styles";
import Category from "./Category";

const Categories = ({ text, item }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef();
  useEffect(() => {
console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    
  }, []);
  return (
    <div className="w-full bg-gray-50 ">
     <Box margin={"auto"} className="container">
        <h2 className="text-2xl leading-9 font-bold tracking-tight mb-6">
          {text}
        </h2>
        <motion.div ref={carousel} className="carousel h-[50rem]">
          <Category width={width} />
        </motion.div>
      </Box> 
    </div>
  );
};

export default Categories;
