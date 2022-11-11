import React from "react";
// import { useSelector } from "react-redux";

import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { AdminPanel, Checkout, ErrorPage, Home, SinglePage, UserPanel } from "./pages";

const App = () => {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const routes = [
    {
      path: "*",
      component: <ErrorPage />,
    },
    {
      path: "/",
      component: <Home />,
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
      component: <SinglePage />,
    },
    {
      path: "/checkout",
      component: <Checkout />,
    },
  ];
  return (
    <React.Fragment>
      <Header />
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
