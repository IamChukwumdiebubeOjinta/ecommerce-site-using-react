import React from "react";
import { motion } from "framer-motion";

const Grid = () => {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none relative ">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 sm:space-x-6 lg:space-x-8 pointer-events-none">
            {/* Left */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4"
            >
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg ">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
            {/* Center */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4"
            >
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
            {/* Right */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4"
            >
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-48 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
