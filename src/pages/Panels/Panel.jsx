import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import BreadCrumb from "./BreadCrumb";

const Panel = ({ children }) => {
  const [crumbs, setCrumbs] = useState(["Home", "Category", "Sub-category"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <section className="min-h-[85vh] h-full bg-gray-50">
      {/* BreadCrumbs */}
      <Box className={"bg-[#f6ab29] w-full"}>
        <Box className={`container mx-auto py-2  sm:px-36 px-6`}>
          <BreadCrumb crumbs={crumbs} selected={selected} />
        </Box>
      </Box>

      {/* Children */}
      <Box className="mx-auto h-full sm:px-36 px-6">{children}</Box>
    </section>
  );
};

export default Panel;
