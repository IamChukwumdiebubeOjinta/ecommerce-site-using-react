import React from "react";
import { Hero, Categories, QuoteOne, Options, BestDeals } from "../components";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Hero />
      {/* Router T */}
      <Options />
      <div className="flex flex-col gap-9 mb-8">
        <Categories text={"New Arrivals"} />
        <Categories text={"Recommend for you"} />
      </div>
      <BestDeals />
      <QuoteOne />
    </React.Fragment>
  );
};

export default LandingPage;
