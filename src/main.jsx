import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CurrencyProvider } from "./context/CurrencyContext";

import router from "./router/router";

import { CartProvider } from "./context/CartContext";

import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrencyProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CurrencyProvider>
  </React.StrictMode>
);