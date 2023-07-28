import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage";

export default function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const calcPrice = (quantity, item) => {
    return quantity * item;
  };
  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);
  return (
    <>
      {cartItem.map((item, id) => (
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>{item.description}</p>
            <div>
              <button>-</button>
              <p>{quantity}</p>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
