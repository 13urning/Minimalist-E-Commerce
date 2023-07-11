import React, { useState, useEffect } from "react";

import Badge from "@mui/material/Badge";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Navbar() {
  const [userScroll, setUserScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 60 ? setUserScroll(true) : setUserScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userScroll]);
  return (
    <div>
      <nav
        className={`sticky w-full text-xl z-[200] bg-white items-center shadow-md flex px-10 py-5 justify-between ${
          userScroll ? "h-15" : "h-auto"
        } transition-all ease-in duration-300 left-0 top-0 md:px-20`}
      >
        <img src="https://placehold.co/150x50?text=LOGO" alt="" />
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
    </div>
  );
}
