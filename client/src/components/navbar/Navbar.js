import React, { useState } from "react";
import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Navbar() {
  const [userScroll, setUserScroll] = useState(false);
  const [mobMenu, setMobMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setUserScroll(true);
    } else {
      setUserScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className={mobMenu ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="right-6 top-12 absolute cursor-pointer"
          onClick={() => setMobMenu(!mobMenu)}
        >
          <CloseRoundedIcon fontSize="large" />
        </div>
        <div className="uppercase flex flex-col gap-8 justify-center absolute top-[44] left-[50] text-3xl text-center">
          <Link to="/categories/all">categories</Link>
          <Link to="/categories/lamps">lamps</Link>
          <Link to="/categories/product/1">featured product</Link>
        </div>
      </div>

      {/* navbar */}
      <nav className="sticky bg-white top-0 w-full z-[100] shadow-md">
        <div className="container mx-auto max-w-[1200px] px-6 md:px-0">
          <div
            className={`flex justify-between items-center  transition-all ease-in duration-100 ${
              userScroll ? "h-[8rem]" : "h-[12rem]"
            }`}
          >
            <Link to="/">
              <img
                src="https://placehold.co/500x500?text=LOGO"
                alt="logo"
                onClick={scrollToTop}
                className="w-[8.5rem] h-auto"
              />
            </Link>
            <div className="text-3xl flex gap-10 uppercase">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/all"
                className="hidden md:block"
              >
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/19"
                className="hidden md:block"
              >
                product page
              </Link>
              <Badge badgeContent={4} color="error">
                <ShoppingCartOutlinedIcon fontSize="large" />
              </Badge>
              <div
                className="text-3xl md:hidden"
                onClick={() => setMobMenu((prev) => !prev)}
              >
                <MenuRoundedIcon fontSize="inherit" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        .hideMenuNav{
            display: none;
        }
        .showMenuNav{
            display: block;
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 250;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
    `}</style>
    </>
  );
}
