import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div className="m-top">
      <Banner></Banner>
      <Categories></Categories>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
