import { GetProductUseCase } from "@/@core/application/product/get-product.use-case";
import { container, Registry } from "@/@core/infra/container-registry";
import ProductDetail from "@/components/ProductDetail";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const useCase = container.get<GetProductUseCase>(Registry.GetProductUseCase);
  const { props: product } = await useCase.execute(id);

  return <ProductDetail product={product} />;
}
