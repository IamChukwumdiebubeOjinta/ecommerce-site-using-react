import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./styles/index.css";
import { Provider } from "react-redux";
// import { store } from "./helpers/store";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./helpers/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
