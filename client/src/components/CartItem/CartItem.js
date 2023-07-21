import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage";

export default function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);
  return <div>CartItem</div>;
}
