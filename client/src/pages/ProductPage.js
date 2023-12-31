import React, { createContext, useContext, useEffect, useState } from "react";
import { items } from "../components/Data/AllData";
import { useParams } from "react-router-dom";

import TrendingSlider from "../components/TrendingSlider/TrendingSlider";
import Footer from "../components/Footer/Footer";

export const CartContext = createContext();

export default function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  useEffect(() => {
    console.log(item[0].description);
  });

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);
  const changeImage = (e) => {
    setImage(e.target.src);
  };
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
  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };
  const [notify, setNotify] = useState(false);
  const showNotify = () => {
    setNotify(!notify);
  };
  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""} hidden`}
      >
        <p>Items has been added to your cart </p>
      </div>

      <div className="">
        <div className="container mx-auto max-w-[1200px] p-6">
          <div className="flex flex-col mb-[5rem] items-center gap-12 md:relative md:w-full md:flex-row">
            <h3 className="w-[31rem] text-center font-bold md:absolute text-4xl md:top-[8px] md:left-1/2 md:translate-x-[-50%] md:translate-y-[50%]">
              {item[0].description}
            </h3>
            <div className="w-full md:w-1/2 h-full pt-[5rem]">
              <div className="w-full h-[70%] flex justify-center">
                <img
                  src={image}
                  alt="product"
                  className="w-[75%] h-full object-cover"
                />
              </div>
              <div className="w-full flex gap-5 justify-center items-center p-12">
                <img
                  src={item[0].img}
                  alt="product"
                  onMouseOver={changeImage}
                  className="w-[22%] h-[20%] object-cover cursor-pointer"
                />
                <img
                  src={item[0].otherImgs[0]}
                  alt="product"
                  onMouseOver={changeImage}
                  className="w-[22%] h-[20%] object-cover cursor-pointer"
                />
                <img
                  src={item[0].otherImgs[1]}
                  alt="product"
                  onMouseOver={changeImage}
                  className="w-[22%] h-[20%] object-cover cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full bg-[#e5e5e5] p-16 md:pt-[15rem] md:pb-[8rem] md:px-[5rem]">
              <p className="text-2xl mb-[5rem] leading-loose">
                {item[0].specs}
              </p>
              <div className="flex flex-col justify-between text-3xl mb-[5rem] gap-8 font-semibold items-center md:flex-row">
                <p>Quantity</p>
                <div className="flex border border-solid border-black">
                  <button
                    onClick={decrease}
                    className="text-2xl w-[5.5rem] h-[5.5rem] text-black cursor-pointer bg-white border-r-[1px] border-black transition-all duration-200 hover:bg-transparent"
                  >
                    -
                  </button>
                  <p className="outline-offset-[-2px] w-[6rem] h-[5rem] text-center pt-6">
                    {quantity}
                  </p>
                  <button
                    onClick={increase}
                    className="text-3xl w-[5.5rem] h-[5.5rem] text-black cursor-pointer bg-white border-l-[1px] border-black transition-all duration-200 hover:bg-transparent"
                  >
                    +
                  </button>
                </div>
                <p className="text-3xl font-semibold">
                  ${calcPrice(quantity)}.00
                </p>
              </div>
              <div className="flex flex-col gap-[2rem] md:flex-row">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                    showNotify();
                  }}
                  className="bg-transparent border-2 border-black w-full md:w-1/2 h-[5.5rem] text-2xl uppercase font-bold cursor-pointer transition-all duration-200 hover:bg-black hover:text-white"
                >
                  add to cart
                </button>
                <button className="bg-red-600 text-white border-2 border-red-600 w-full md:w-1/2 h-[5.5rem] text-2xl uppercase font-bold cursor-pointer transition-all duration-200 hover:bg-transparent hover:text-red-600">
                  buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12 justify-between w-full md:flex-row mb-[10rem]">
            <div className="bg-[#e5e5e5] w-full flex flex-col justify-between p-[2rem]">
              <p className="text-3xl font-semibold">Texture:</p>
              <p className="text-2xl mt-4">{item[0].texture}</p>
            </div>
            <div className="bg-[#e5e5e5] w-full flex flex-col justify-between p-[2rem]">
              <p className="text-3xl font-semibold">Weight:</p>
              <p className="text-2xl mt-4">{item[0].weight}</p>
            </div>
            <div className="bg-[#e5e5e5] w-full flex flex-col justify-between p-[2rem]">
              <p className="text-3xl font-semibold">Size:</p>
              <p className="text-2xl mt-4">{item[0].size}</p>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Footer />
      </div>
    </>
  );
}
