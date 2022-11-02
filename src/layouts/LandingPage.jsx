import React from "react";
import { NavBanner, Navbar, Hero, Categories, QuoteOne } from "../components";

const LandingPage = () => {
  return (
    <React.Fragment>
      <NavBanner />
      <Navbar />
      <Hero />
      {/* Router T */}
      <Categories />
      <QuoteOne />
    </React.Fragment>
  );
};

export default LandingPage;
