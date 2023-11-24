import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OrderModal from "../OrderModal/OrderModal";

const Product = ({ product }) => {
  const {
    img,
    category,
    name,
    resalePrice,
    price,
    timeOfUse,
    seller,
    ratings,
  } = product;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOrderOpen = () => setShow(true);
  return (
    <div>
      <div className="col shadow-lg">
        <div className="card h-100 border-0">
          <img src={img} className="img-fluid p-2" alt="items" />
          <div className="card-body">
            <h6 className="card-title primare-text">{name}</h6>
            <p className="card-text">Resale price: ${resalePrice}</p>
            <p className="card-text">
              Original price: <del>${price}</del>
            </p>
            <p className="card-text">Time of Use: {timeOfUse}month</p>
            <p className="card-text">Rating: {ratings}</p>
            <p className="card-text">Seller name: {seller}</p>
            <p className="card-text">Category: {category}</p>
            <button onClick={handleOrderOpen} className="primare-btn">
              Order now
            </button>
            {/* <Button
              variant="primary"
              className="primare-btn"
              onClick={handleOrderOpen(setProductItem(product))}
            >
              Order Now
            </Button> */}
          </div>
        </div>
      </div>
      {product && (
        <OrderModal
          show={show}
          handleClose={handleClose}
          product={product}
        ></OrderModal>
      )}
    </div>
  );
};

export default Product;
