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
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import {
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import ChakraModel from "./Common/Modal/ChakraModel";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  
  return (
    <React.Fragment>
      <Flex
        alignItems={"center"}
        py={2}
        pr={10}
        justifyContent={"space-between"}
        w={"100%"}
        className="container mx-auto"
      >
        {/* Logo */}
        <img src="./logo.png" alt="" />

        {/* Search Bar */}
        <Flex maxW={600} flex={1} alignItems={"center"}>
          <Flex bgColor={"transparent"} flex={1}>
            <Box
              flex={1}
              borderWidth={1}
              borderColor={"gray.600"}
              borderTopLeftRadius={15}
              borderBottomLeftRadius={15}
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
              bgColor={"gray.600"}
              borderBottomRightRadius={15}
              borderTopRightRadius={15}
            >
              <button
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
              </button>
            </LinkBox>
          </Flex>
        </Flex>

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
            <MenuList>
              <MenuItem>FAQs</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>Coming soon</MenuItem>
            </MenuList>
          </Menu>
          {!isLoggedIn && (
            <motion.div whileHover={{ scale: 1.1 }}>
              <ChakraModel
                title={"Login/Sign Up"}
                // heading={isSignUp ? "Sign Up" : "Login"}
                danger="Cancel"
              />
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
    </React.Fragment>
  );
};

export default Navbar;
