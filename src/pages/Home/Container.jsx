import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full py-[20px] ">
      <div className="mx-auto container max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-2xl py-6 sm:py-12 lg:max-w-none lg:py-16 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
