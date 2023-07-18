import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="p-6 md:pt-10">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid h-[40rem] grid-cols-2 gap-4 md:mt-5 md:grid-cols-4 md:grid-rows-2 md:h-[30rem]">
            <div className="overflow-hidden relative cursor-pointer md:row-span-2 md:col-span-2 ">
              <Link to="categories/furnitures">
                <div className="absolute w-full h-full top-0 left-0 bg-slate-950/25 transition-all ease-in duration-300 hover:bg-slate-950/40"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY1"
                  alt="img1"
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-xl md:text-2xl">
                  Live Comfortably
                </p>
              </Link>
            </div>
            <div className="overflow-hidden relative cursor-pointer md:row-span-2">
              <Link to="categories/skin-care">
                <div className="absolute w-full h-full top-0 left-0 bg-slate-950/25 transition-all ease-in duration-300 hover:bg-slate-950/40"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY2"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-xl md:text-2xl">
                  Skin care
                </p>
              </Link>
            </div>
            <div className="md:col-start-4 overflow-hidden relative cursor-pointer">
              <Link to="categories/kitchen">
                <div className="absolute w-full h-full top-0 left-0 bg-slate-950/25 transition-all ease-in duration-300 hover:bg-slate-950/40"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY3"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-xl md:text-2xl">
                  Kitchen
                </p>
              </Link>
            </div>
            <div className=" md:col-start-4 overflow-hidden relative cursor-pointer">
              <Link to="categories/electronics">
                <div className="absolute w-full h-full top-0 left-0 bg-slate-950/25 transition-all ease-in duration-300 hover:bg-slate-950/40"></div>
                <img
                  src="https://placehold.co/300x300?text=CATEGORY4"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <p className="absolute bottom-4 left-4 text-xl md:text-2xl">
                  Electronics
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
