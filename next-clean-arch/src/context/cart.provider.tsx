"use client";
import { AddProductInCartUseCase } from "@/@core/application/cart/add-product-in-cart.use-case";
import { ClearCartUseCase } from "@/@core/application/cart/clear-cart.use-case";
import { GetCartUseCase } from "@/@core/application/cart/get-cart.use-case";
import { RemoveProductFromCartUseCase } from "@/@core/application/cart/remove-product-from-cart.use-case";
import { Cart } from "@/@core/domain/entities/cart";
import { Product } from "@/@core/domain/entities/product";
import { container, Registry } from "@/@core/infra/container-registry";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

export type CartContextType = {
  cart: Cart;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  clear: () => void;
  reload: () => void;
};

const defaultContext: CartContextType = {
  cart: new Cart({ products: [] }),
  addProduct: (product: Product) => {},
  removeProduct: (productId: string) => {},
  clear: () => {},
  reload: () => {},
};

export const CartContext = createContext(defaultContext);

const getUseCase = container.get<GetCartUseCase>(Registry.GetCartUseCase);

const addProductUseCase = container.get<AddProductInCartUseCase>(
  Registry.AddProductInCartUseCase
);
const removeProductUseCase = container.get<RemoveProductFromCartUseCase>(
  Registry.RemoveProductFromCartUseCase
);
const clearCartUseCase = container.get<ClearCartUseCase>(
  Registry.ClearCartUseCase
);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart>(defaultContext.cart);

  const addProduct = (product: Product) => {
    const cart = addProductUseCase.execute(product);
    setCart(cart);
  };

  const removeProduct = (productId: string) => {
    const cart = removeProductUseCase.execute(productId);
    setCart(cart);
  };

  const clear = () => {
    const cart = clearCartUseCase.execute();
    setCart(cart);
  };

  const reload = () => {
    const cart = getUseCase.execute();
    setCart(cart);
  };

  useEffect(() => {
    reload();
  }, [reload]);
  
  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, clear, reload }}
    >
      {children}
    </CartContext.Provider>
  );
};
