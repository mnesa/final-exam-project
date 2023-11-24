import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "react-query";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:3000/shopProducts?email=${user?.email}`;

  const { data: shopProducts = [] } = useQuery({
    queryKey: ["shopProducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="m-top">
      <h2>my order</h2>
    </div>
  );
};

export default MyOrder;
