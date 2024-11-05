import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class ListProductUseCase {
  constructor(private productGate: ProductGateway) {}

  async execute(): Promise<Product[]> {
    return this.productGate.findAll();
  }
}
