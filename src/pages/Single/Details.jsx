import React from "react";
import { Box, Flex, HStack, useRadioGroup } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/24/outline";
import { RadioHooks } from "../../components";
import { sizes } from "./constants";
import { useDispatch } from "react-redux";
import { ADD } from "../../helpers/action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Details = ({ data, addToCart }) => {
  const dispatch = useDispatch();

  

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Flex direction={"column"} className="flex-[0.6]">
      {data.map((item) => (
        <div key={item.id}>
          {/* Logo for seller */}
          <div className="w-60">
            <img src="/logo.png" alt="logo" />
          </div>
          <Box w={"100%"}>
            <h4 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {item.name}
            </h4>
            {/* Options */}
            <Box className="mt-4 lg:row-span-3 lg:mt-0">
              <p className="text-3xl tracking-tight text-gray-900">
                $ {item.price}
              </p>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          4 > rating ? "text-gray-900" : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">average something out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    totalCount reviews
                  </a>
                </div>
              </div>
            </Box>
            <button className="mt-10 flex max-w-[500px] self-start border border-transparent bg-[#3e2c40] py-3 px-8 text-center font-medium text-white cursor-default hover:brightness-[1.2]" onClick={() => addToCart(item)}>
                Add to bag
              </button>
            <form>
              <div className="mt-10">
                {/* Sizes */}
                <useControllable />
                <div className="flex items-center justify-between my-4">
                  <h3 className="text-sm font-medium text-gray-900">Sizes</h3>
                </div>
                {/* Radio */}
                <HStack {...group} className="clothSize">
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

            </form>
              

            {/* Description */}
            <Box className="mt-5">
              <div className="space-y-6 max-w-[500px]">
                <p className="text-base text-gray-900">{item.description}</p>
              </div>
            </Box>
          </Box>
        </div>
      ))}
    </Flex>
  );
};

export default Details;
