
"use client";

import { CartProvider } from "@/context/cart.provider";
import MyCart from "@/components/my-cart";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <MyCart />
      {children}
    </CartProvider>
  );
}
