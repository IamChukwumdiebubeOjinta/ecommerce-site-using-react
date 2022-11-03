import { useState, useContext, createContext } from "react";
export let Authenticate = createContext();

export const Auth = ({ children }) => {
  const [login, setLogin] = useState(false);
  const loggedIn = () => setLogin(true);
  const logOut = () => setLogin(false);
  const values = {
    login,
    loggedIn,
    logOut,
  };
  return (
    <Authenticate.Provider value={values}>{children}</Authenticate.Provider>
  );
};

export const AuthContext = () => {
  return useContext(Authenticate);
};
