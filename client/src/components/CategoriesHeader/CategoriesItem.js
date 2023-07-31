import React from "react";
import { Link } from "react-router-dom";
import { items } from "../Data/AllData";

export default function CategoriesItem() {
  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {items.map((items) => (
              <div key={items.id} className="product normal">
                <Link onClick={() => window.top(0, 0)}>
                  <div key={items.id} className="product-header">
                    <img src={items.img} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{items.description}</p>
                    <p className="item-price">${items.price}</p>
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
