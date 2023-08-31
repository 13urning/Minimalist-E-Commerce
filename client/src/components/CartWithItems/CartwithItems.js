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
      <div className="overflow-y-scroll p-2 h-[70%] mt-8 mr-[-0.5rem]">
        <div className="w-full h-full flex flex-col gap-8">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} />
            ) : (
              <EmptyCart />
            )
          )}
        </div>
      </div>
      <div className="flex w-full h-[12rem] border-t-2 border-dashed border-red-600 justify-between mt-6 py-6">
        <div className="flex flex-col gap-4 text-2xl font-semibold">
          <p>Subtotal</p>
          <p className="total-price">{"$" + totalPrice + ".00"}</p>
        </div>
        <div className="mt-5">
          <Link className="text-3xl text-black border-2 border-black bg-transparent p-6 transition-all duration-200 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-sm">
            Go to Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
