import React from "react";
import Category01 from "../../../assets/images/Category01.png";
import Category02 from "../../../assets/images/Category02.png";
import Category03 from "../../../assets/images/Category03.png";
import Category from "./Category";

const Categories = () => {
  const ccardData = [
    {
      id: 1,
      category: "Gaming Accessories",
      description: "keyboard, chair, headsets, computer mice",
      pic: Category01,
    },
    {
      id: 2,
      category: "Watches",
      description: "smartwatches, trackers, formal watches",
      pic: Category02,
    },
    {
      id: 3,
      category: "Fashion Treads",
      description: "dress, jackets, jewellers",
      pic: Category03,
    },
  ];
  return (
    <div className="container my-5">
      <h2 className="my-3">Top Categories</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {ccardData.map((card) => (
          <Category key={card.id} card={card}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
