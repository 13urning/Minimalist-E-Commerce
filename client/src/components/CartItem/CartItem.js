import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/ProductPage";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
        <div
          key={id}
          className="w-full h-[15rem] grid grid-cols-3 rounded-sm bg-[#f2f2f2]"
        >
          <div className="w-full h-full">
            <img
              src={item.img}
              alt="product"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col justify-between p-6">
            <p className="text-3xl">{item.description}</p>
            <div className="flex">
              <button
                onClick={decrease}
                className="w-[3rem] h-[3rem] bg-black text-white cursor-pointer text-3xl"
              >
                -
              </button>
              <p className="text-3xl border border-black w-[3rem] text-center outline-offset-2 pt-1">
                {quantity}
              </p>
              <button
                onClick={increase}
                className="w-[3rem] h-[3rem] bg-black text-white cursor-pointer text-3xl"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col text-right justify-between p-6 text-3xl font-semibold">
            <p>${calcPrice(quantity, item.price)}.00</p>
            <i onClick={() => removeFromCart(item.id)}>
              <CloseRoundedIcon fontSize="large" />
            </i>
          </div>
        </div>
      ))}
    </>
  );
}
