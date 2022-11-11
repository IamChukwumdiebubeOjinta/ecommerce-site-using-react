import React, { useState } from "react";
import Product from "./Product";
import { callouts } from "./products";

const Products = () => {
  const [data, setData] = useState(callouts);

  return (
    <>
      <h2 className="sm:text-4xl text-2xl font-bold text-gray-900">
        Collections <span className="text-[#f6ab29]">for</span> you
      </h2>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-4 gap-y-4 lg:space-y-0 space-y-3 pt-6">
        <Product data={data} />
      </div>
    </>
  );
};

export default Products;
