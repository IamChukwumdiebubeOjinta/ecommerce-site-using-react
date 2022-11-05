import { Box, Flex, HStack, useRadioGroup } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Banner } from "../components/Common/Panels";
import { RadioHooks } from "../components/hooks";

import Panel from "./Panel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sizes = [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "2XL", inStock: true },
  { name: "3XL", inStock: true },
];

const ProductPage = () => {
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Panel>
      <Flex
        alignItems={"baseline"}
        className="justify-between border-b border-gray-200 py-6 px-36"
      >
        <Banner text={"Product Item"} />
      </Flex>
      <Box w={"100%"} position="relative">
        <div className="mx-auto container py-11 px-[0.9375rem]">
          <Flex className="p-[1.5rem] gap-[1.5rem] flex-1">
            <Box className="min-h-[18.75rem] flex-[0.4] md:min-h-[25rem]">
              Image
            </Box>
            <Flex direction={"column"} className="flex-[0.6]">
              {/* Logo for seller */}
              <div className="w-7 h-7">
                <img src="" alt="logo" />
              </div>
              <Box w={"100%"}>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Product Title
                </h4>
                {/* Options */}
                <Box className="mt-4 lg:row-span-3 lg:mt-0">
                  <p className="text-3xl tracking-tight text-gray-900">
                    Product Price
                  </p>
                  <div className="mt-6">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              3 > rating ? "text-gray-900" : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        average something out of 5 stars
                      </p>
                      <a
                        href="#"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        totalCount reviews
                      </a>
                    </div>
                  </div>
                </Box>
                <form>
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Sizes
                      </h3>
                    </div>
                    {/* Radio */}
                    <HStack {...group}>
                      {sizes.map((value) => {
                        const radio = getRadioProps({ value });
                        return (
                          <RadioHooks key={value.name} {...radio}>
                            {value.name}
                          </RadioHooks>
                        );
                      })}

                      {/* Fix Later */}
                      {({ active, checked }) => (
                        <>
                          <label as="span">{value.name}</label>
                          {value.inStock ? (
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                "pointer-events-none absolute -inset-px rounded-md"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </HStack>
                  </div>

                  <button
                    type="submit"
                    className="mt-10 flex max-w-[500px] w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </form>

                {/*  */}
              </Box>
            </Flex>
          </Flex>
        </div>
      </Box>
    </Panel>
  );
};

export default ProductPage;
