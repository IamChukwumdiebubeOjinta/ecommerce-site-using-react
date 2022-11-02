import React from "react";
import {
  NavBanner,
  Navbar,
  Hero,
  Categories,
  QuoteOne,
  Options,
  BestDeals,
  Footer,
} from "../components";

const LandingPage = () => {
  return (
    <React.Fragment>
      <NavBanner />
      <Navbar />
      <Hero />
      {/* Router T */}
      <Options />
      <div className="flex flex-col gap-9 mb-8">
        <Categories text={"New Arrivals"} />
        <Categories text={"Recommend for you"} />
      </div>
      <BestDeals />
      <QuoteOne />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
