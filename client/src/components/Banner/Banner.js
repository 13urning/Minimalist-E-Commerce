import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ title, text, img }) {
  return (
    <div className="banner">
      <div className="container mx-auto">
        <div className="banner-container">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
