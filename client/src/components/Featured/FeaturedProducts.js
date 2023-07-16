import React from "react";
import ProductItems from "./ProductItems";

export default function FeaturedProducts() {
  return (
    <div className="px-3 py-20 md:py-20">
      <h2 className="container text-3xl font-semibold mb-16 mx-auto">
        Products we are proud of
      </h2>
      <div className="container">
        <div className="products-grid">
          <ProductItems />
        </div>
      </div>
    </div>
  );
}
