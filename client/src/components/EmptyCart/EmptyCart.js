import React from "react";
import EmptyCartImg from "../../images/empty-cart.png";

export default function EmptyCart({ openCart }) {
  return (
    <div className="flex flex-col text-center w-[16rem] mx-auto my-[15rem]">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p className="text-xl font-semibold mt-[1rem]">Your cart is empty</p>
      <button
        onClick={openCart}
        className="w-full h-[4.4rem] text-xl mt-[3rem] font-semibold cursor-pointer bg-red-600 text-white border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition-all duration-200"
      >
        Keep Browsing
      </button>
    </div>
  );
}
