import React from "react";
import { items } from "../Data/AllData";
import { Link } from "react-router-dom";
export default function ProductItems() {
  const filteredItems = items.filter((item) => item.id <= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="outline outline-2 outline-gray-300 normal hover:outline-black transition-all ease-in duration-250"
        >
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
            <div>
              <img src={item.img} alt="products" className="w-full" />
            </div>
            <div className="text-xl p-3">
              <p>{item.description}</p>
              <p className="font-semibold text-2xl mt-4">${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
