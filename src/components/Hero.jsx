import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full container mx-auto overflow-hidden bg-white">
      <div className="w-full relative flex flex-wrap justify-center items-center sm:justify-between sm:gap-5 gap-0">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="sm:max-w-lg sm:px-0 px-3 flex flex-col items-center gap-4"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
          </h1>
          <p className="mt-2 text-xl text-gray-500 text-justify">
            We are the Curators of modern fashion and the believers of
            simplicity in ties to what we wear. Bube's Store is a destination
            concept store and online haven for style seekers with simplistic
            taste. A fashion selection with a personal touch.
          </p>

          <motion.div
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.8 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="self-start border border-transparent bg-[#3e2c40] py-3 px-8 text-center font-medium text-white cursor-default hover:brightness-[1.2]"
          >
            {" "}
            <Link to={"/user/items"} onClick={() => null}>
              Shop Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative image grid */}
        <div aria-hidden="true" className="pointer-events-none relative ">
          <div className="flex items-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {/* Left */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4"
              >
                <div className="h-64 w-44 overflow-hidden rounded-lg ">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </motion.div>
              {/* Center */}
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }} className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </motion.div>
              {/* Right */}
              <motion.div initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }} className="grid flex-shrink-0 grid-cols-1 gap-y-2 lg:gap-y-4">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
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
      </div>
    </div>
  );
}
