import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {styles} from './utils/styles'
import { Footer, NavBanner, Navbar } from "./components";
import {
  ErrorPage,
  LandingPage,
  UserPanel,
  AdminPanel,
  ProductPage,
} from "./pages";

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const routes = [
    {
      path: "*",
      component: <ErrorPage />,
    },
    {
      path: "/",
      component: <LandingPage />,
    },
    {
      path: "/products",
      component: <UserPanel />,
    },
    {
      path: "/dashboard",
      component: <AdminPanel />,
    },
    {
      path: "/products/:id",
      component: <ProductPage />,
    },
  ];
  return (
    <React.Fragment>
      <div className={`sticky top-0 z-20 bg-gray-50`}>
        <NavBanner />
        <Navbar />
      </div>
      <Routes>
        {routes.map(({ path, component }, index) => (
          <Route key={`${path}-${index}`} path={path} element={component} />
        ))}
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
