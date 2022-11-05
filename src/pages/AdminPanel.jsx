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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AdminPanel = () => {
  return (
    <Panel>
      <Flex
        alignItems={"baseline"}
        className="justify-between border-b border-gray-200 py-6 px-36"
      >
        <Banner text={"Admin Dashboard"} />
        <Flex alignItems={"center"}>
          
        </Flex>
      </Flex>
      <Box aria-labelledby="products-heading" className="">
        <Heading as={"h2"} className="sr-only">
          Products
        </Heading>
        <Grid className="grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <form className="hidden lg:block border-r-4  pt-6">
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
                <AccordionItem key={section.id}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
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
          <div className="lg:col-span-3 min-h-[75vh] pt-6">
            {/* Cut and remove from user to admin */}
            {/* Replace with your content */}
            {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" /> */}
             <h3>Something</h3>
            <h3>Something</h3>
            <h3>Something</h3>
            {/* /End replace */}
          </div>
        </Grid>
      </Box>
    </Panel>
  );
};

export default AdminPanel;
