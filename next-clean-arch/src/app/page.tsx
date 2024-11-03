import { http } from "@/utils/http";
import { Product } from "@/utils/models";

export default async function Home() {
  
  const { data:products } = await http.get<Product[]>(
    "http://localhost:8000/products"
  );
 
  
  return (
    <div>
      <h1>Ecommerce</h1>

      <ul>
        {products.map((item, key) => (
          <li key={key}>
            <label htmlFor="">Nome: </label>
            {item.name} |<a href="#"> Ver</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
