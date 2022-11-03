import React from "react";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { LandingPage } from "./pages";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <React.Fragment>
      <Routes>
        <LandingPage />
      </Routes>
    </React.Fragment>
  );
};

export default App;
