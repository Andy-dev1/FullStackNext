import { Order } from "../entities/order";

export interface OrderGateway {
  insert(order:Order): Promise<Order>;
  findById(id: string): Promise<Order>;
}
