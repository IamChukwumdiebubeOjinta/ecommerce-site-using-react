import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Text = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="sm:max-w-lg sm:px-0 px-3 flex flex-col items-center sm:gap-4 gap-2 sm:py-0 py-28"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="text-[#f4ab29] sm:text-8xl text-6xl">Summer</span>{" "}
          styles <br className="sm:hidden" /> are finally here
        </h1>
        <p className="mt-2 sm:text-xl text-sm text-gray-500 text-justify">
          We are the Curators of modern fashion and the believers of simplicity
          in ties to what we wear. Bube's Store is a destination concept store
          and online haven for style seekers with simplistic taste. A fashion
          selection with a personal touch
          <span className="text-[#f4ab29]">.</span>
        </p>

        <motion.div
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.8 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className="self-start border border-transparent bg-[#3e2c40] py-3 px-8 text-center font-medium text-white cursor-default hover:brightness-[1.2]"
        >
          {" "}
          <Link to={"/products"} onClick={() => null}>
            Shop Collection
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Text;
