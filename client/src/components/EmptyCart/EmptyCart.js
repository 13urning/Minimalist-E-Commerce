import React from "react";
import EmptyCartImg from "../../images/empty-cart.png";

export default function EmptyCart({ openCart }) {
  return (
    <div>
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
}
