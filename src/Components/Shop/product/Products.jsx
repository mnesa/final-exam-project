import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Products = () => {
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["shopProducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/shopProducts");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((items) => (
          <Product refetch={refetch} key={items._id} product={items}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

{
  /* 
<p>{slots.length > 0 ? slots[0] : "Out of Stock"} </p>
<p>{slots.length} {slots.length > 1 ? "spaces" : "space"} Available</p> */
}
