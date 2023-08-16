import React from "react";
import { items } from "../Data/AllData";
import { Link } from "react-router-dom";

export default function CategoriesItemChairs() {
  const filteredItems = items.filter((item) => item.category === "chair");
  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link>
                  <div className="product-header">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="product-details">
                    <p>{item.description}</p>
                    <p>${item.price}</p>
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
