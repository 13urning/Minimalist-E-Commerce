import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export default function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");
  const handleBtnName = (e) => {
    setBtnName(e);
  };
  return (
    <>
      <div className="container mx-auto max-w-[1200px] p-6">
        <div className="pt-[3rem] flex flex-col items-center mb-[-4rem]">
          <div className="flex items-center w-full mb-[6rem]">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <KeyboardArrowLeftIcon fontSize="large" />
              Home
            </Link>
            <h3 className="text-4xl uppercase text-center mx-auto my-0 font-semibold">
              {btnName}
            </h3>
          </div>
          <div className="justify-center flex gap-2 w-full flex-wrap items-center text-xl">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                All
              </button>
            </Link>
            <Link to="furnitures" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                Furnitures
              </button>
            </Link>
            <Link to="electonics" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                Electronics
              </button>
            </Link>
            <Link to="lamps" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                Lamps
              </button>
            </Link>
            <Link to="kitchen" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                Kitchen
              </button>
            </Link>
            <Link to="chairs" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                Chairs
              </button>
            </Link>
            <Link to="skin-care" onClick={() => handleBtnName("all")}>
              <button className="px-6 py-[0.6rem] bg-transparent border transition-all duration-200 hover:border-black">
                Skin Care
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
