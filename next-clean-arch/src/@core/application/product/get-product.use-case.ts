import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@/@core/domain/gateways/product.gateway";

export class GetProductUseCase {
  constructor(private productGate: ProductGateway) {}

  async execute(id: string): Promise<Product> {
    return this.productGate.findById(id);
  }
}
