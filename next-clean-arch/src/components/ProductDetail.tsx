

"use client";

import { CartContext } from "@/context/cart.provider";
import { Product } from "@/utils/models";
import { useContext } from "react";

export default function ProductDetail({ product }: { product: Product }) {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <label htmlFor="">Preço: </label> {product.price} <br />
      <button
        onClick={() => cartContext.addProduct(product)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
