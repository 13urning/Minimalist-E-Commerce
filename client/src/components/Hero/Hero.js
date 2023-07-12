import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="pt-48">
        <div className="container">
          <div className="grid h-auto grid-col-4 grid-rows-4 gap-4">
            <div className="overflow-hidden relative cursor-pointer grid-one">
              <Link to="categories/furnitures">
                <img
                  src="https://placehold.co/300x300?text=CATEGORY1"
                  alt="img1"
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-md">
                  Live Comfortably
                </p>
              </Link>
            </div>
            <div className="overflow-hidden relative cursor-pointer grid-two">
              <Link to="categories/skin-care">
                <div className="lil-overlay"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY2"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-md">Skin care</p>
              </Link>
            </div>
            <div className="row-start-2 overflow-hidden relative cursor-pointer">
              <Link to="categories/kitchen">
                <div className="lil-overlay"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY3"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-md">Kitchen</p>
              </Link>
            </div>
            <div className="row-start-2 overflow-hidden relative cursor-pointer">
              <Link to="categories/electronics">
                <div className="lil-overlay"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY4"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-md">Electronics</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
