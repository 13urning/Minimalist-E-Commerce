import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../pages/ProductPage";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
export default function CartwithItems() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
    console.log(newTotalPrice);
  }, [cartItem]);
  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} />
            ) : (
              <EmptyCart />
            )
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{"$" + totalPrice + ".00"}</p>
        </div>
        <div className="sub-left">
          <Link>Checkout</Link>
        </div>
      </div>
    </>
  );
}
