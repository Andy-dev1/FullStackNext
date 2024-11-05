"use client";
import { ProcessOrderUseCase } from "@/@core/application/order/process-order.use-case";
import { container, Registry } from "@/@core/infra/container-registry";
import { http } from "@/@core/infra/http";
import { CartContext } from "@/context/cart.provider";

import { useRouter } from "next/navigation";
import React, { FormEvent, useContext } from "react";

export default function Checkout() {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credit_card_number = event.currentTarget.credit_card_number.value;
    const processOrderUseCase=container.get<ProcessOrderUseCase>(Registry.ProcessOrderUseCase);
    const order = await processOrderUseCase.execute({
      products:cartContext.cart.products,
      credit_card_number
    })
   
    cartContext.reload();
    router.push(`/checkout/${order.id}/success`);
  };

  return (
    <div>
      <h3>Meu carrinho</h3>
      <ul>
        {cartContext.cart.props.products.map((product, key) => (
          <li key={key}>
            Produto {product.props.name} - {product.props.price}
          </li>
        ))}
      </ul>

      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Cartão de crédito</label>
          <input
            type="text"
            name="credit_card_number"
            id="credit_card_number"
            className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Comprar
          </button>
        </div>
      </form>
    </div>
  );
}
