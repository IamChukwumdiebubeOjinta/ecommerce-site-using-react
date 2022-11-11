import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Banner } from "../../components";
// import { RadioHooks } from "../components/hooks";

import { Panel } from "../Panels";
import Details from "./Details";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DELETE, REMOVE_INT } from "../../helpers/action";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // console.log(id, "test");

  const getdata = useSelector((state) => state.cartReducer.carts);
  console.log(getdata, "test");

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  console.log(id);

  useEffect(() => {
    compare();
  }, [id]);

  // delete item
  // const history = useHistory();
  // const deletes = (id) => {
  //   dispatch(DELETE(id));
  //   history.push("/");
  // };

  // increment item
  const dispatch = useDispatch();
  const increment = (e) => {
    dispatch(ADD(e));
  };

  // descriment item
  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };
  return (
    <>
      <Panel>
        <Flex
          alignItems={"baseline"}
          className="justify-between border-b border-gray-200 sm:py-6 py-2 sm:px-36 px-6"
        >
          <Banner text={"Product Details"} />
        </Flex>
        <Box w={"100%"} position="relative">
          <div className="mx-auto container sm:py-11 py-5 px-[0.9375rem]">
            {data.map((item) => (
              <Flex className="sm:p-[1.5rem] flex sm:gap-[2rem] flex-1 single">
                {/* Image */}
                <Box className="min-h-[18.75rem] flex-[0.4] md:min-h-[25rem]">
                  <img src={item.imgSrc} alt="" />
                </Box>

                {/* Text */}
                <Details />
              </Flex>
            ))}
          </div>
        </Box>
      </Panel>
    </>
  );
};

export default SinglePage;
