import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

import { AxiosInstance } from "axios";

export class ProductHttpGateway implements ProductGateway {
  constructor(private http: AxiosInstance) {}

  findAll(): Promise<Product[]> {
    return this.http.get<Product[]>("/products").then((res) =>
      res.data.map(
        (data) =>
          new Product({
            id: data.id,
            description: data.description,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
          })
      )
    );
  }
  findById(id: string): Promise<Product> {
    return this.http.get<Product>(`/products/${id}`).then((res) => {
      return new Product({
        id: res.data.id,
        description: res.data.description,
        name: res.data.name,
        price: res.data.price,
        quantity: res.data.quantity,
      });
    });
  }
}
