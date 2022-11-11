import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import {
  UserIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { AvatarBadge, Badge } from "@chakra-ui/react";

// import Faq from "./FaqPopover";
import ChakraModel from "../../../pages/Auth/ChakraModel";
import FaqPopover from "./FaqPopover";
import CartPopover from "./CartPopover";
import { DELETE } from "../../../helpers/action";

const Header = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (key) => {
    setValue(key);
    console.log("search", key);
  };

  // cartopen and close
  const [cartList, setCartList] = useState(false);
  const handleClose = () => {
    setCartList(null);
  };

  // cart add in shop
  const getdata = useSelector((state) => state.cartReducer.carts);

  // delete cart
  const dispatch = useDispatch();
  const del = (id) => {
    dispatch(DELETE(id));
  };

  // total prcie
  const [price, setPrice] = useState(0);
  console.log(price);

  const totals = () => {
    let price = 0;
    getdata.map((e, i) => {
      price = parseFloat(e.price) * e.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    totals();
  }, [totals]);

  const handleCloses = () => {
    setCartList(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={`bg-gray-50 sticky top-0 w-full py-4 px-3 sm:px-0 z-50`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          {/* Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Sidebar />
            {/* Logo */}
            <div className="w-32 block sm:hidden">
              <Link to={"/"}>
                {" "}
                <img src="/logo.png" alt="logo" className="w-full" />
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="w-32 hidden sm:block">
            <Link to={"/"} className="cursor-default">
              {" "}
              <img src="/logo.png" alt="logo" className="w-full" />
            </Link>
          </div>

          {/* Search and Others */}
          <div className="flex items-center gap-3">
            <div className="h-[45px] bg-white rounded-[50px] p-[15px] shadow-md sm:flex items-center hidden ">
              <div className="w-[80%]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="focus:outline-none focus-within:outline-none focus:border-0"
                  placeholder="Search here..."
                  onChange={onChange}
                  value={value}
                  // product={Products}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.8 }}
                className={
                  "flex items-center justify-center w-[20%] text-inherit outline-none"
                }
                onClick={() => onSearch(value)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>

            <div className="p-2 bg-white rounded-full">
              <div className="w-[24px]">
                <FaqPopover
                  text={<QuestionMarkCircleIcon className="w-full" />}
                />
              </div>
            </div>
            <div className="p-2 bg-white rounded-full">
              <div className="w-[24px]">
                <ChakraModel
                  title={<UserIcon className="w-full" />}
                  danger="Cancel"
                />
              </div>
            </div>
            <div className="p-2 bg-white rounded-full">
              <div className="flex">
                <div
                  className="w-[24px]"
                  onClick={() => setCartList((cartList) => !cartList)}
                >
                  <CartPopover
                    text={<ShoppingBagIcon className="w-full" />}
                    cartList={cartList}
                    getdata={getdata}
                    // del={() => del()}
                  />
                </div>
                <Badge borderColor="papayawhip" bg="tomato" boxSize="1.25em">
                  {getdata.length}
                </Badge>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);
