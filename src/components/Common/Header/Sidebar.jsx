import { useState } from "react";
// import { Button } from "../components";
// import { navLinks } from "../constants";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {!toggle ? (
        <button
          id="menu-btn"
          className={`hamburger focus:outline-none ${
            toggle ? "open" : ""
          } z-10`}
          onClick={() => setToggle((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      ) : (
        <button
          id="menu-btn"
          className={`hamburger focus:outline-none fixed ${
            toggle ? "open" : ""
          } z-10`}
          onClick={() => setToggle((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      )}
      <div
        className={`top-0 right-0 fixed w-full h-full bg-white ${
          toggle ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500`}
      >
        <div className="w-[250px] mt-[117px] ml-[32px]">
          {/* Buttons */}
          

          <ul className="list-none flex flex-col justify-center items-start flex-1 ">
          {/* <div className="p-2 bg-white rounded-full">
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
            </div> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
