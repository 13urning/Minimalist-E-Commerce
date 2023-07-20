import React from "react";
import TrendingItem from "./TrendingItem";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    <div className="pb-[10rem] px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold mb-[4.2rem]">Hot Now</h3>
          <div className="flex gap-[0.4rem]">
            <button
              className="text-white bg-[#373737] p-[1rem] text-xl h-[4rem] w-[4rem] 
              cursor-pointer hover:bg-black transition-all ease-in duration-150"
              title="scroll left"
              onClick={slideLeft}
            >
              <i>
                <ArrowBackIcon />
              </i>
            </button>
            <button
              className="text-white bg-[#373737] p-[1rem] text-xl h-[4rem] w-[4rem] 
              cursor-pointer hover:bg-black transition-all ease-in duration-150"
              title="scroll right"
              onClick={slideRight}
            >
              <ArrowForwardIcon />
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
