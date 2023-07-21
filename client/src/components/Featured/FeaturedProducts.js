import React from "react";
import ProductItems from "./ProductItems";

export default function FeaturedProducts() {
  return (
    <div className="px-6 md:px-0 py-20 md:py-20 max-w-[1200px] mx-auto">
      <h2 className="container text-4xl font-semibold mb-12 mx-auto md:text-3xl md:mb-16 ">
        Products we are proud of
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductItems />
        </div>
      </div>
    </div>
  );
}
