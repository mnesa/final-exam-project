import React from "react";
import review01 from "../../../assets/images/review01.jpeg";
import review02 from "../../../assets/images/review02.jpg";
import review03 from "../../../assets/images/review03.jpg";
import quote from "../../../assets/images/quote.png";
import Review from "./Review";

const Reviews = () => {
  const Reviews = [
    {
      id: 1,
      name: "Lili Dash",
      description:
        "Sit amet consectetur adipisicing elit. Esse ut earum dicta nisi numquam id odit fuga dolorum necessitatibus",
      pic: review02,
    },
    {
      id: 2,
      name: "Maria gosen",
      description:
        "Sit amet consectetur adipisicing elit. Esse ut earum dicta nisi numquam id odit fuga dolorum necessitatibus",
      pic: review01,
    },
    {
      id: 3,
      name: "Jhon jai",
      description:
        "Sit amet consectetur adipisicing elit. Esse ut earum dicta nisi numquam id odit fuga dolorum necessitatibus",
      pic: review03,
    },
  ];
  return (
    <div className="skye-bg py-5">
      <div className="d-flex  justify-content-between mx-5">
        <h3 className="mt-5 darke-text">Buyer Reviews</h3>
        <img src={quote} alt="" />
      </div>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Reviews.map((card) => (
            <Review key={card.id} card={card}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
