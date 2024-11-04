"use client";
import { Product } from "@/utils/models";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type CartContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clear: () => void;
  total: number;
};

const defaultContext: CartContextType = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  clear: () => {},
  total: 0,
};

export const CartContext = createContext(defaultContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProducts = localStorage.getItem("products");
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    }
  }, []);

  useEffect(() => {
    if (!products) {
      return;
    }
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product: Product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const clear = () => {
    setProducts([]);
  };

  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <CartContext.Provider
      value={{ products, addProduct, removeProduct, clear, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
