import { Button } from "@chakra-ui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  
  const dispatch = useDispatch();
  const addToCart = (e) => {
    dispatch(ADD(e));
  };
  return (
    <>
      <div className="sm:mt-6 mt-0 lg:grid lg:grid-cols-3 lg:gap-x-6 gap-y-3 lg:space-y-0 space-y-3">
        {data.map((callout, id) => (
          <>
            <div
              key={id}
              className="group relative p-3 bg-white rounded-md sm:px-4 px-0"
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg  duration-500 group-hover:opacity-80  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <h3 className="text-sm absolute top-2 left-2 text-gray-500 transition-all ease-in-out">
                  <span className="absolute inset-0" />
                  {callout.name}
                </h3>
                <div className=" absolute bottom-2 right-2 transition-all ease-in-out z-20">
                  <Button className="z-30" onClick={() => addToCart(callout)}>
                    <ShoppingBagIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <Link to={`/products/${callout.id}`}>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
                <p className="py-1">price</p>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Product;
