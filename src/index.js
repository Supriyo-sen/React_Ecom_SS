import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
      <Auth0Provider
    domain="dev-25akvrdtc3v14f8t.us.auth0.com"
    clientId="up4LM7erViNPn2vt8KxefP1dTxbtJkri"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
  </Auth0Provider>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
