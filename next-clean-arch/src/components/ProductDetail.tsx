"use client";

import { Product, ProductProps } from "@/@core/domain/entities/product";
import { CartContext } from "@/context/cart.provider";

import { useContext } from "react";

export default function ProductDetail({ product }: { product: ProductProps }) {
  const productEntity=new Product({...product});
  const cartContext = useContext(CartContext);
  
  return (
    <div>
      <h3>{productEntity.name}</h3>
      <label htmlFor="">Preço: </label> {productEntity.price} <br />
      <button
        onClick={() => cartContext.addProduct(productEntity)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
