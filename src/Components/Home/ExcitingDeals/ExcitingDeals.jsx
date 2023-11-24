import React from "react";
import ExcitingDeal from "./ExcitingDeal";
import off01 from "../../../assets/images/off01.png";

const ExcitingDeals = () => {
  const offDeals = [
    {
      id: 1,
      name: "The Big Cheese (The Food Group)",
      price: "$15",
      listprice: "$20",
      offprice: "25% off",
      pic: off01,
    },
    {
      id: 2,
      name: "Melissa & Doug Animal Hand Puppets ",
      price: "$15",
      listprice: "$20",
      offprice: "25% off",
      pic: off01,
    },
    {
      id: 3,
      name: "Bulova Men's Classic Stainless Steel 3-Hand Date Quartz Watch",
      price: "$15",
      listprice: "$20",
      offprice: "25% off",
      pic: off01,
    },
    {
      id: 4,
      name: "Capstone Games: Gaia Project, Strategy Board Game",
      price: "$15",
      listprice: "$20",
      offprice: "25% off",
      pic: off01,
    },
  ];
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        {offDeals.map((deal) => (
          <ExcitingDeal key={deal.id} deal={deal}></ExcitingDeal>
        ))}

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ExcitingDeals;
