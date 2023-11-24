import React from "react";
import { Link } from "react-router-dom";

const Category = ({ card }) => {
  const { category, pic, description } = card;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={pic} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <p className="card-text">
            <Link to="/shop" className="primare-text text-decoration-none">
              Explore More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
