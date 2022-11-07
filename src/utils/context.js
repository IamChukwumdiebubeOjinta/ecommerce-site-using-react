import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./reducers";

const Cart = createContext()

const Context = ({ children }) => {
  // try out faker later
  const products = []

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: ""
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context;