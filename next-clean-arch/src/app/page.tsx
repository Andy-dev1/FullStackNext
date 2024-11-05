import { ListProductUseCase } from "@/@core/application/product/list-products.use-case";
import { container, Registry } from "@/@core/infra/container-registry";

import Link from "next/link";

export default async function Home() {
  const useCase = container.get<ListProductUseCase>(
    Registry.ListProductUseCase
  );
  const products = await useCase.execute();

  return (
    <div>
      <h1>Ecommerce</h1>

      <ul>
        {products.map((item, key) => (
          <li key={key}>
            <label htmlFor="">Nome: </label>
            {item.name} |
            <Link className="text-blue-500" href={`/products/${item.id}`}>
              Ver
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// class ListProductsUseCaseFactory {
//   static create() {
//     const gateway = new ProductHttpGateway(http);
//     return new ListProductUseCase(gateway);
//   }
// }
