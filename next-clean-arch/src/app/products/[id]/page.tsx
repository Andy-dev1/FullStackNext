
import ProductDetail from "@/components/ProductDetail";
import { http } from "@/utils/http";
import { Product } from "@/utils/models";


export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const { data: product } = await http.get<Product>(
    `http://localhost:8000/products/${id}`
  );

  return <ProductDetail product={product} />;
}
