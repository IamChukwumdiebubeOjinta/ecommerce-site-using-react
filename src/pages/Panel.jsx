import React, { useState } from "react";
import { styles } from "../utils/styles";
import { Box, Flex } from "@chakra-ui/react";
import { BreadCrumb, Banner } from "../components/Common/Panels";

const Panel = ({ children }) => {
  const [crumbs, setCrumbs] = useState(["Home", "Category", "Sub-category"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <section className="min-h-[650px]">
      {/* BreadCrumbs */}
      <Box className={"bg-[#f6ab29] w-full"}>
        <Box className={`container mx-auto py-2`}>
          <BreadCrumb crumbs={crumbs} selected={selected} />
        </Box>
      </Box>
      {/* Use the this part  */}
      <Box className="mx-auto">{children}</Box>
    </section>
  );
};

export default Panel;
