import React from "react";
import { Link } from "react-router-dom";
import { items } from "../Data/AllData";

export default function CategoriesItem() {
  return (
    <>
      <div className="py-[10rem]  p-6">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
            {items.map((items) => (
              <div
                key={items.id}
                className="outline outline-2 outline-offset-[-2px] outline-gray-300 transition-all ease-in duration-150 cursor-pointer hover:outline-black"
              >
                <Link
                  onClick={() => window.top(0, 0)}
                  to={`/categories/product/${items.id}`}
                >
                  <div key={items.id}>
                    <img src={items.img} alt="product1" className="w-full" />
                  </div>
                  <div className="text-xl p-3">
                    <p>{items.description}</p>
                    <p className="font-semibold text-2xl mt-4">
                      ${items.price}
                    </p>
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
