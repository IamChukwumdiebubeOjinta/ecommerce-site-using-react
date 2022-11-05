import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Footer, NavBanner, Navbar } from "./components";
import { ErrorPage, LandingPage, UserPanel, AdminPanel, ProductPage } from "./pages";

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
      <NavBanner />
      <Navbar />
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
