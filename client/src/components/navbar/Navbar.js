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
          <CloseRoundedIcon />
        </div>
        <div className="uppercase flex flex-col gap-8 justify-center absolute top-[44] left-[50] text-3xl text-center">
          <Link to="/categories/all">categories</Link>
          <Link to="/categories/lamps">lamps</Link>
          <Link to="/categories/product/1">featured product</Link>
        </div>
      </div>
      <nav
        className={`sticky top-0 w-full text-xl z-[200] bg-white items-center shadow-md flex px-4 md:px-10 py-5 justify-between ${
          userScroll ? "h-20" : "h-24"
        }  transition-all ease-in duration-300 left-0  md:px-20`}
      >
        <Link to="/">
          <img
            src="https://placehold.co/150x50?text=LOGO"
            alt="logo"
            onClick={scrollToTop}
          />
        </Link>

        <ul className="flex gap-2 md:gap-4">
          <li className="hidden md:flex">
            <a href="#home">CATEGORIES</a>
          </li>
          <li className="hidden md:flex">
            <a href="#about">PRODUCT PAGE</a>
          </li>
          <li className="text-3xl md:text-[3px] mr-4">
            <Badge badgeContent={4} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </li>
          <li
            className="text-3xl md:hidden"
            onClick={() => setMobMenu((prev) => !prev)}
          >
            <MenuRoundedIcon />
          </li>
        </ul>
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
