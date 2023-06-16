import React from "react";
import Cart from "./components/cart.jsx";
import Checkout from "./components/checkout.jsx";
import MyNavbar from "./components/navbar.jsx";
import ThankYouPage from "./components/ThankYouPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
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
          <Route exact path="/thankyoupage/*" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
