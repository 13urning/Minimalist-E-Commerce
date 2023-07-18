import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ title, text, img }) {
  return (
    <div className="pb-40 px-6">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex justify-between h-[40rem] overflow-hidden">
          <div className="w-full md:w-1/2 text-start flex flex-col justify-center items-center px-[4rem] py-0 md:px-[11rem] bg-[#e9e9e9]">
            <div className="text">
              <h2 className="text-[2.5rem] md:text-3xl font-semibold mb-6">
                {title}
              </h2>
              <p className="text-[1.2rem] md:text-base">{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button
                  className="bg-black text-white text-xl md:text-xl font-bold p-3 md:p-4 uppercase mt-8 cursor-pointer outline-black outline
                 transition-all ease-in duration-150 hover:bg-transparent hover:text-black"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block w-1/2 h-full object-cover">
            <img
              src={img}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
