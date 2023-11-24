import React from "react";

const ExcitingDeal = ({ deal }) => {
  const { name, price, pic } = deal;
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4">
              <div className="single-box">
                <div className="img-area">
                  <img src={pic} alt="" />
                </div>
                <div className="img-text">
                  <h2>person01</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti magnam perspiciatis fuga distinctio, consectetur
                    odio? Sunt reiciendis quod velit illo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-box">
                <div className="img-area">
                  <a href="#">
                    <img src={pic} alt="" />
                  </a>
                </div>
                <div className="img-text">
                  <h2>person02</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti magnam perspiciatis fuga distinctio, consectetur
                    odio? Sunt reiciendis quod velit illo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingDeal;
