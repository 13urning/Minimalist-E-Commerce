import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import { CartContext } from "./pages/ProductPage";
import Categories from "./pages/Categories";

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
        <Route path="categories" element={<Categories />}></Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
