import React from "react";
import { Button } from "@chakra-ui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../../helpers/action";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    dispatch(ADD(e));
  };
  return (
    <>
      {data.map((callout) => (
        <div
          key={callout.id}
          className="group relative p-3 bg-white rounded-md"
        >
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-[#000000] duration-500 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={callout.imageSrc}
              alt={callout.imageAlt}
              className="h-full w-full object-cover object-center"
            />
            <h3 className="text-sm absolute top-2 left-2 text-gray-500 transition-all ease-in-out">
              <Link to={`/products/${callout.id}`}>
                <span className="absolute inset-0" />
                {callout.name}
              </Link>
            </h3>
            <div className=" absolute bottom-2 right-2 transition-all ease-in-out">
              <Button className="" onClick={() => addToCart(callout)}>
                <ShoppingBagIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
          <Link to={`/products/${callout.id}`}>
            <p className="text-base font-semibold text-gray-900">
              {callout.description}
            </p>
            <p className="py-1">$ {callout.price}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;
