import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  sortOptions,
  userFilters,
  userSubCategories,
} from "../utils/constants";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Banner } from "../components/Common/Panels";
import Panel from "./Panel";
import { Link } from "react-router-dom";
import Products from "../components/Common/Products/Products";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserPanel = () => {
  return (
    <Panel>
      <Flex
        alignItems={"baseline"}
        className="justify-between border-b border-gray-200 py-6 px-36"
      >
        <Banner text={"Products"} />
        <Flex alignItems={"center"}>
          <Menu className="relative inline-block text-left">
            <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              <Flex>
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Flex>
            </MenuButton>

            {/* Menu Items */}
            <MenuList>
              <div className="py-1">
                {sortOptions.map((option, id) => (
                  <MenuItem key={option.name}>
                    <Link
                      to={option.href}
                      className={classNames(
                        option.current
                          ? "font-medium text-gray-900"
                          : "text-gray-500"
                      )}
                    >
                      {option.name}
                    </Link>
                  </MenuItem>
                ))}
              </div>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Box aria-labelledby="products-heading" className="">
        <Heading as={"h2"} className="sr-only">
          Products
        </Heading>
        <Grid className="grid-cols-1 gap-y-10 lg:grid-cols-4">
          <form className="hidden lg:block border-r-4 sticky  pt-6">
            <Heading as={"h3"} className="sr-only">
              Categories
            </Heading>
            <ul
              role="list"
              className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
            >
              {userSubCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href}>{category.name}</a>
                </li>
              ))}
            </ul>
            <Accordion allowToggle>
              {userFilters.map((section) => (
                <AccordionItem key={section.id} className="!border-y-0">
                  <h2>
                    <AccordionButton paddingInline={2}>
                      <Box flex="1" textAlign="left" className="px-2">
                        {section.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </form>

          {/* Product grid */}
          <div className="lg:col-span-3 h-[65vh] overflow-y-scroll">
            {/* Cut and remove from user to admin */}
            {/* Replace with your content */}
            <div className="relative overflow-hidden">
              <Products />
              <Products />
            </div>
            {/* /End replace */}
          </div>
        </Grid>
      </Box>
    </Panel>
  );
};

export default UserPanel;
