import React from "react";
import "./ShopBanner.css";
import Products from "../product/Products";

const ShopBanner = () => {
  return (
    <div>
      <div className="shopBanner">
        <div className="container m-auto py-5 text-light">
          <h2>Wild Shopping Place</h2>
          <p>Arrive New Collection</p>
          <button className="primare-btn">Try Now</button>
        </div>
      </div>

      <Products></Products>
    </div>
  );
};

export default ShopBanner;
