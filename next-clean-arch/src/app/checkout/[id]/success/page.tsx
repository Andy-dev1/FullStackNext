

import { Order } from "@/@core/domain/entities/order";
import { http } from "@/@core/infra/http";
import React from "react";

export default async function success({ params }: { params: { id: string } }) {
  const id = params.id;

  const { data: order } = await http.get<Order>(`orders/${id}`);

  return (
    <div>
      <h3>Parabéns, sua compra ID {params.id} foi efetivada</h3>
      <ul>
        {order.products.map((item, key) => (
          <li key={key}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
