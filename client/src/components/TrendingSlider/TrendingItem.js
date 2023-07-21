import React from "react";
import { items } from "../Data/AllData";
import { Link } from "react-router-dom";

export default function TrendingItem() {
  const filteredItems = items.filter((items) => items.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div
          className="outline-[rgba(0,0,0,.205)] outline outline-2 cursor-pointer transition-all ease-in duration-150 hover:outline-[rgba(0,0,0,.6)]"
          key={item.id}
        >
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div className="w-[21.6rem]">
              <img src={item.img} alt="product" className="w-full" />
            </div>
            <div className="text-[1.7rem] p-4">
              <p className="text-xl">{item.description}</p>
              <p className="text-2xl font-semibold mt-[1.4rem]">
                ${item.price}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
