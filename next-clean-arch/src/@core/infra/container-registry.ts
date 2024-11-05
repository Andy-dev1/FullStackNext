import "reflect-metadata";
import { Container } from "inversify";
import { http } from "./http";
import { ProductHttpGateway } from "./gateways/product-http.gateway";
import { ListProductUseCase } from "../application/product/list-products.use-case";
import { GetProductUseCase } from "../application/product/get-product.use-case";
import { CartLocalStorageGateway } from "./gateways/cart-local-storage.gateway";
import { GetCartUseCase } from "../application/cart/get-cart.use-case";
import { AddProductInCartUseCase } from "../application/cart/add-product-in-cart.use-case";
import { RemoveProductFromCartUseCase } from "../application/cart/remove-product-from-cart.use-case";
import { ClearCartUseCase } from "../application/cart/clear-cart.use-case";


export const Registry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),

  ProductGateway: Symbol.for("ProductGateway"),
  CartGateway: Symbol.for("CartGateway"),

  ListProductUseCase: Symbol.for("ListProductUseCase"),
  GetProductUseCase: Symbol.for("GetProductUseCase"),

  GetCartUseCase:Symbol.for("GetCartUseCase"),
  AddProductInCartUseCase:Symbol.for("AddProductInCartUseCase"),
  RemoveProductFromCartUseCase:Symbol.for("RemoveProductFromCartUseCase"),
  ClearCartUseCase:Symbol.for("ClearCartUseCase"),
};

export const container = new Container();

//#region HTTP
container.bind(Registry.AxiosAdapter).toConstantValue(http);
//#endregion

//#region GATEWAYS
container.bind(Registry.ProductGateway).toDynamicValue((context) => {
  return new ProductHttpGateway(context.container.get(Registry.AxiosAdapter));
});
container.bind(Registry.CartGateway).to(CartLocalStorageGateway);
//#endregion 

//#region USE CASE
container.bind(Registry.ListProductUseCase).toDynamicValue((context) => {
  return new ListProductUseCase(context.container.get(Registry.ProductGateway));
});

container.bind(Registry.GetProductUseCase).toDynamicValue((context) => {
    return new GetProductUseCase(context.container.get(Registry.ProductGateway));
  });

container.bind(Registry.GetCartUseCase).toDynamicValue((context)=>{
  return new GetCartUseCase(context.container.get(Registry.CartGateway));
})
container.bind(Registry.AddProductInCartUseCase).toDynamicValue((context)=>{
  return new AddProductInCartUseCase(context.container.get(Registry.CartGateway));
})
container.bind(Registry.RemoveProductFromCartUseCase).toDynamicValue((context)=>{
  return new RemoveProductFromCartUseCase(context.container.get(Registry.CartGateway));
})
container.bind(Registry.ClearCartUseCase).toDynamicValue((context)=>{
  return new ClearCartUseCase(context.container.get(Registry.CartGateway));
})
//#endregion USE CASE