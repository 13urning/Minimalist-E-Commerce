import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import ProductPage, { CartContext } from "./pages/ProductPage";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Chairs from "./components/Categories-pages/Chairs";
import Electronics from "./components/Categories-pages/Electronics";
import Furnitures from "./components/Categories-pages/Furnitures";
import Kitchen from "./components/Categories-pages/Kitchen";
import Lamps from "./components/Categories-pages/Lamps";
import SkinCare from "./components/Categories-pages/SkinCare";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };
  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);
  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
