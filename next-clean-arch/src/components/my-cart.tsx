import { CartContext } from "@/context/cart.provider";
import React, { useContext } from "react";

const MyCart = (props: any) => {
  const cartContext = useContext(CartContext);
  return (
    <nav>
      
      Cart - Total {cartContext.cart.total} | Items {cartContext.cart.products.length}
    </nav>
  );
};

export default MyCart;
