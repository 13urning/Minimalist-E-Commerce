import React from "react";
import { items } from "../Data/AllData";
import { Link } from "react-router-dom";

export default function CategoriesItemElectronics() {
  const filteredItems = items.filter((item) => item.category === "electronic");
  return (
    <>
      <div className="py-[10rem]  p-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="outline outline-2 outline-offset-[-2px] outline-gray-300 transition-all ease-in duration-150 cursor-pointer hover:outline-black"
              >
                <Link to={`/categories/product/${item.id}`}>
                  <div>
                    <img src={item.img} alt="" className="w-full" />
                  </div>
                  <div className="text-xl p-3">
                    <p>{item.description}</p>
                    <p className="font-semibold text-2xl mt-4">${item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
