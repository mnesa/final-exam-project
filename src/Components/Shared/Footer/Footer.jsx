import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="saecondare-bg lighte-text py-5">
        <div className="row container mx-auto">
          <div className="col-12 col-md-4 mb-4">
            <li>
              <h5>Get to Know Us</h5>
            </li>
            <li>Career</li>
            <li>Blog</li>
            <li>About Square </li>
            <li>Investor Relation</li>
            <li></li>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <li>
              <h5>Make Money with Us</h5>
            </li>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Become an Affiliate </li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li></li>
          </div>
          <div className="col-12 col-md-4">
            <li>
              <h5>Let Us Help You</h5>
            </li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies </li>
            <li>Returns & Replacements</li>
            <li>Help</li>
          </div>
        </div>
      </div>

      <div className="darke-bg lighte-text">
        <div className="container mx-auto p-3">
          <p>&copy; 2014-201-23, Square.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
