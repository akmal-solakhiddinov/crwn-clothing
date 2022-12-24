import React from "react";
import HomePage from "./pages/homepage/homePage.comoponent";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
