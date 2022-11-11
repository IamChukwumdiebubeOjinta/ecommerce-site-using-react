import { Flex, Tag, TagLabel } from "@chakra-ui/react";
import { useState } from "react";
import Product from "./Product";
import { tags } from "./products";
import { callouts } from "./products";

export default function TopProducts() {
  const [data, setData] = useState(callouts);

  const handleFilter = (data) => {
    const newItem = callouts.filter((item) => item)
  }

  
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-12 lg:max-w-none lg:py-16">
          <Flex justifyContent={"space-between"}>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 pointer-events-none">
              Lots to <span className="text-[#f6ab29]">pick</span> from!
            </h2>
            <div className="sm:flex gap-2 hidden">
              {tags.map((item, id) => (
                <Tag
                  size={"lg"}
                  key={id}
                  borderRadius="full"
                  variant="solid"
                  onClick={() => handleFilter(tags)}
                  className="cursor-pointer tags"
                >
                  <TagLabel>{item.name}</TagLabel>
                </Tag>
              ))}
            </div>
          </Flex>

          <Product data={data} />
        </div>
      </div>
    </div>
  );
}
