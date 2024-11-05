import { Order } from "@/@core/domain/entities/order";
import { Product } from "@/@core/domain/entities/product";
import { OrderGateway } from "@/@core/domain/gateways/order.gateway";
import { AxiosInstance } from "axios";

export class OrderHttpGateway implements OrderGateway {
  constructor(private readonly http: AxiosInstance) {}

  insert(order: Order): Promise<Order> {
    return this.http.post("/orders", order).then((response) => {
      order.props.id = response.data.id;
      return order;
    });
  }
  findById(id: string): Promise<Order> {
    return this.http.get(`/orders/${id}`).then(
      (response) =>
        new Order({
          id: response.data.id,
          credit_card_number: response.data.credit_card_number,
          products: response.data.products.map(
            (product: Product) =>
              new Product({
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                quantity: product.quantity,
              })
          ),
        })
    );
  }
}
