import React from "react";

const Review = ({ card }) => {
  const { name, pic, description } = card;
  return (
    <div className="col">
      <div className="card h-100 border-0">
        <img
          src={pic}
          className="img-fluid rounded-circle w-25 mt-3 ms-3 border border-info border-3"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
