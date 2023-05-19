import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cart from "./components/cart.jsx";
import Checkout from "./components/checkout.jsx";
import MyNavbar from "./components/navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route
          exact
          path="/category/:categoryName"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route exact path="/cart/*" element={<Cart />} />
        <Route exact path="/checkout/*" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
