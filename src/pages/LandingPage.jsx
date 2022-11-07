import React from "react";
import { Hero, Categories, QuoteOne, Options, BestDeals } from "../components";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Hero />
      {/* Router T */}
      <Options />
      <div className="flex flex-col ">
        <Categories text={"New Arrivals"} />
        <BestDeals />
        <Categories text={"Recommend for you"} />
      </div>
      <QuoteOne />
    </React.Fragment>
  );
};

export default LandingPage;
