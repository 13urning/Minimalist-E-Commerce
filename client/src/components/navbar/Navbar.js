import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Navbar() {
  const [userScroll, setUserScroll] = useState(false);
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
      <nav
        className={`sticky top-0 w-full text-xl z-[200] bg-white items-center shadow-md flex px-10 py-5 justify-between ${
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
          <li className="text-3xl md:hidden mr-4">
            <Badge badgeContent={4} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </li>
          <li className="text-3xl md:hidden">
            <MenuRoundedIcon />
          </li>
        </ul>
      </nav>
    </>
  );
}
