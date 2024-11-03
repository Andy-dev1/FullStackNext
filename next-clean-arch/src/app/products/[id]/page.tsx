import { http } from "@/utils/http";
import { Product } from "@/utils/models";


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id
  const { data: product } = await http.get<Product>(
    `http://localhost:8000/products/${id}`
  );

  return (
    <div>
      <h3>{product.name}</h3>
      <label htmlFor="">Preço: </label> {product.price} <br />
      <button>Adicionar no carrinho</button>
    </div>
  );
}
