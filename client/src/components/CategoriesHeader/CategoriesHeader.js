import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");
  const handleBtnName = (e) => {
    setBtnName(e);
  };
  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link>
              <i></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div>
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="furnitures" onClick={() => handleBtnName("all")}>
              <button>Furnitures</button>
            </Link>
            <Link to="electonics" onClick={() => handleBtnName("all")}>
              <button>Electronics</button>
            </Link>
            <Link to="lamps" onClick={() => handleBtnName("all")}>
              <button>Lamps</button>
            </Link>
            <Link to="kitchen" onClick={() => handleBtnName("all")}>
              <button>Kitchen</button>
            </Link>
            <Link to="chairs" onClick={() => handleBtnName("all")}>
              <button>Chairs</button>
            </Link>
            <Link to="skin-care" onClick={() => handleBtnName("all")}>
              <button>Skin Care</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
