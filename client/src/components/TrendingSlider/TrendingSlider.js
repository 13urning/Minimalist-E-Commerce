import React from "react";
import TrendingItem from "./TrendingItem";

export default function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollRight = slider.scrollRight + 235;
  };
  return (
    <div className="trending">
      <div className="container mx-auto max-w-[1200px]">
        <div className="title-btns">
          <h3>Hot Now</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              <i>left</i>
            </button>
            <button title="scroll right" onClick={slideRight}>
              <i>right</i>
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}
