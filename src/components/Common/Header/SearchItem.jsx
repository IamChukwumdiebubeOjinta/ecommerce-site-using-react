import React from "react";

const SearchItem = ({ value, product, onSearch }) => {
  return (
    <div>
      <div className="searchItem">
        <div className="product_item">
          {product
            .filter((items) => {
              const searchKey = value.toLowerCase();
              const title = items.title.toLowerCase();

              return (
                searchKey && title.startWith(searchKey) && title !== searchKey
              );
            })
            .slice(0, 10)
            .map((items) => (
              <>
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
                      product={product}
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
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
