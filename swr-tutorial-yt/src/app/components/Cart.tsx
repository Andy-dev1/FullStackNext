"use client";
import React from "react";
import { useCart, useUser } from "../services/queries";

const Cart = () => {
  const userQuery = useUser();
  const cartQuery = useCart();

  return (
    <div>
      <p>
        username:{userQuery.isLoading ? "Loading..." : userQuery.data?.userName}
      </p>
      <p>
        total cart cost:{" "}
        {cartQuery.data
          ? cartQuery.data.totalCost
          : cartQuery.isLoading
          ? "Loading..."
          : "No user found!"}
      </p>
    </div>
  );
};

export default Cart;
