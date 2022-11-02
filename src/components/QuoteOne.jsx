import React from "react";
import { styles, layout } from "../utils/styles";
("../utils/styles");

const QuoteOne = () => {
  return (
    <React.Fragment>
      <section
        className={`${layout.sectionInfo} ${styles.marginX} ${styles.paddingX} ${styles.marginY} ${styles.flexCenter}`}
      >
        {/* <h2 className="text-3xl leading-9 font-medium mb-6 tracking-wider">
          <i>Who we are...</i>
        </h2> */}
        <img src="./logo.png" alt="logo" className="mb-6" />
        <blockquote className="text-xl tracking-wide leading-8 text-justify">
        Bube's Store is Nigeria’s number one thrift online shopping destination. We pride ourselves in having everything you could possibly need for in terms of thrift clothings at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include Men's wear, Women's wear, Teen's wear and a whole lot more for kids as well. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or credit card, whichever one you feel is a convenient and secure payment solution for you. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly.
        </blockquote>
      </section>
    </React.Fragment>
  );
};

export default QuoteOne;
