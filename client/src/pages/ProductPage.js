import React, { createContext, useContext, useState } from "react";
import { items } from "../components/Data/AllData";
import { useParams } from "react-router-dom";

import TrendingSlider from "../components/TrendingSlider/TrendingSlider";
import Footer from "../components/Footer/Footer";

export const CartContext = createContext();

export default function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

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
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Items has been added to your cart </p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{items[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img
                  src={items[0].img}
                  alt="product"
                  onMouseOver={changeImage}
                />
                <img
                  src={items[0].otherImgs[0]}
                  alt="product"
                  onMouseOver={changeImage}
                />
                <img
                  src={items[0].otherImgs[1]}
                  alt="product"
                  onMouseOver={changeImage}
                />
              </div>
            </div>
            <div className="product-right">
              <p>{items[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">${calcPrice(quantity)}.00</p>
              </div>
              <div className="atc-buy">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                    showNotify();
                  }}
                  className="atc-btn"
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{items[0].texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{items[0].weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{items[0].size}</p>
            </div>
          </div>
        </div>
        <TrendingSlider />
        <Footer />
      </div>
    </>
  );
}
