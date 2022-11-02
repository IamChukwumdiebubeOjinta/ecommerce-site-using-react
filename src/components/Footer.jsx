import React from "react";
import NewsLetter from "./NewsLetter";
import { footerLinks } from "../utils/constants";
import styles from "../utils/styles";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <React.Fragment>
      <NewsLetter />

      {/* Footer */}

      <Box className="container mx-auto">
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
          <div
            className={`${styles.flexStart} md:flex-row flex-col w-full`}
          >
            <div className="flex-1 flex flex-col justify-start mr-10">
              <Box className="w-[266px] h-[72px]">
                <img src="./logo.png" alt="logo" className="w-full" />
              </Box>
              <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                The best platform to get reliable, affordable clothes.
              </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
              {footerLinks.map((footerLink) => (
                <div
                  key={footerLink.key}
                  className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                >
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white cursor-default">
                    {footerLink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerLink.links.map((link, index) => (
                      <li
                        key={link.name}
                        className={`"font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary hover:transition hover:duration-500 cursor-pointer " ${
                          index !== footerLink.links.length - 1
                            ? "mb-4"
                            : "mb-0"
                        }`}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Box>
      <div className="w-full flex justify-center items-center md:flex-row flex-col py-1 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
          Copyright &copy; 2021 Bube's Store. All Rights Reserved.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
