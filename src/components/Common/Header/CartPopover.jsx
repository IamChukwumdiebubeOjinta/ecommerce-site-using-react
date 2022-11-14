import {
  Button,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DELETE } from "../../../helpers/action";

const CartPopover = ({ text, cartList, getdata }) => {
  const [price, setPrice] = useState(0);
  // const { id } = useParams();
  // console.log(id);

  const totals = () => {
    let price = 0;
    if (getdata.length) {
      setPrice(
        getdata
          ?.map((item, id) => parseFloat(item.price) * item.qty)
          ?.reduce((acc, curr) => acc + curr)
      );
    }
  };

  // delete cart
  const dispatch = useDispatch();
  const del = (id) => {
    dispatch(DELETE(id));
  };

  useEffect(() => {
    totals();
  }, [totals]);

  return (
    <div>
      <Popover className="max-w-[200px] w-full">
        <PopoverTrigger>{text}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            {" "}
            <h2 className="font-bold"> My Cart</h2>
          </PopoverHeader>
          <PopoverBody className="!ring-0 flex flex-col gap-1">
            {getdata.length ? (
              <>
                {getdata.map((e) => (
                  <div className="w-full flex items-center">
                    <div className="w-10 h-10 rounded-full">
                      <img src={e.imageSrc} alt="" className="rounded-full" />
                    </div>

                    <div className="w-full p-4 flex flex-col gap-3">
                      <div className="flex justify-between">
                        <div className="flex gap-x-px">
                          <p>
                            Name:{" "}
                            <span className="font-semibold">
                              {e.name.slice(0, 20)}
                            </span>{" "}
                          </p>
                          <span></span>
                        </div>
                        <TrashIcon
                          className="w-6 h-6"
                          aria-label="delete"
                          onClick={() => del(e.id)}
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-x-px">
                          <p>
                            Price:{" "}
                            <span className="font-semibold">
                              $ {e.price * e.qty}{" "}
                            </span>{" "}
                          </p>
                          <span></span>
                        </div>
                        <div className="flex gap-x-px">
                          <p>
                            Qty:{" "}
                            <span className="font-semibold"> {e.qty} </span>{" "}
                          </p>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between">
                  <p>Total:</p>
                  <span className="font-semibold"> $ {price} </span>
                </div>
              </>
            ) : (
              <>
                <p>Nothing in cart </p>
              </>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CartPopover;
