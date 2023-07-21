import React, { createContext, useContext, useState } from "react";
import { items } from "../components/Data/AllData";
import { useParams } from "react-router-dom";

export const CartContext = createContext();

export default function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);
  return <div>ProductPage</div>;
}
