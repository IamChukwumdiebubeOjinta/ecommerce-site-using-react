import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {styles} from '../utils/styles'
import ChakraModel from "./Common/Modal/ChakraModel";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  Flex,
  Box,
  LinkBox,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`z-20 bg-gray-50 ${styles.paddingX}`}
    >
      <Flex
        alignItems={"center"}
        py={2}
        pr={10}
        justifyContent={"space-between"}
        w={"100%"}
        className="container mx-auto"
      >
        {/* Logo */}
        <Link to={'./'}>
        
        <img src="./logo.png" alt="" />
        </Link>

        {/* Search Bar */}
        <Box
          as={"div"}
          maxW={600}
          flex={1}
          alignItems={"center"}
          className="hidden lg:flex"
        >
          <Flex bgColor={"transparent"} flex={1} className="">
            <Box
              flex={1}
              borderWidth={1}
              borderColor={"gray.600"}
              borderTopLeftRadius={5}
              borderBottomLeftRadius={5}
            >
              <input
                type={"text"}
                placeholder="Search for products, brands and categories..."
                className={
                  "w-full block p-[0.5em] bg-transparent text-black outline-none"
                }
              />
            </Box>

            <LinkBox
              className="bg-[#f6ab29] text-white"
              borderBottomRightRadius={5}
              borderTopRightRadius={5}
            >
              <motion.button
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.8 }}
                className={
                  "flex items-center justify-center h-full w-full text-inherit px-[1.3em] outline-none"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </LinkBox>
          </Flex>
        </Box>

        {/* Others */}
        <HStack spacing={"20px"}>
          {/* Help */}
          <Menu>
            <MenuButton className="flex items-center h-full">
              <div className="flex items-center gap-2">
                <QuestionMarkCircleIcon /> Help{" "}
                <ChevronDownIcon className="h-11 w-11" />
              </div>
            </MenuButton>
            <MenuList className="">
              {["FAQs", "Contact Us", "Coming soon"].map((item, id) => (
                <MenuItem key={id} _focus={{ bg: "#f6ab29", color: "#fff" }}>
                  <Link>{item}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          {!isLoggedIn && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap>
              <ChakraModel title={"Login/Sign Up"} danger="Cancel" />
            </motion.div>
          )}
          {isLoggedIn && (
            <>
              <motion.div whileHover={{ scale: 1.1 }}>
                <ChakraModel title={"Logout"} />
              </motion.div>

              <motion.div onClick={() => null} whileHover={{ scale: 1.1 }}>
                <Box className="flex items-center justify-center gap-1 hover:underline cursor-pointer">
                  <ShoppingCartIcon className="w-6" /> <p>My Cart </p>
                </Box>
              </motion.div>
            </>
          )}
        </HStack>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
