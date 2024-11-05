import { Cart } from "@/@core/domain/entities/cart";
import { CartGateway } from "@/@core/domain/gateways/cart.gateway";
import { injectable } from "inversify";

@injectable()
export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = "cart";

  get(): Cart {
    const products = JSON.parse(localStorage.getItem(this.CART_KEY) || "[]");
    return new Cart({ products });
  }
  save(cart: Cart): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.products));
  }
}
