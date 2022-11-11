import React from "react";
import { Banner, Container, List } from ".";
import { Hero, Products, TopProducts } from "../../components";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Hero />
      <List />
      <Container>
        <Products />
        <Banner />
        <TopProducts />
      </Container>
    </div>
  );
};

export default Home;
