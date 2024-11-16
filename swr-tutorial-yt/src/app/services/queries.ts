import useSWR from "swr";
import { Cart } from "../types/cart";
import { User } from "../types/user";
import { Product } from "../types/product";
import { logger } from "../utils/logger";
import { Post, Posts } from "../types/post";
import useSWRInfinite from "swr/infinite";
import { Todo, Todos } from "../types/todo";

export function useUser() {
  return useSWR<User>("/user");
}

export function useCart() {
  const { data } = useUser();

  return useSWR<Cart>(data ? "/cart" : null);
}

export function useProducts() {
  return useSWR<Product[]>("/products", { use: [logger] });
}

export function usePosts(pageIndex: number) {
  return useSWR<Posts>(`/posts?_page=${pageIndex}&_per_page=3`);
}

export function useTodos() {
  const getKey = (pageIndex: number, previousPageData: Todo[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/todos?_page=${pageIndex + 1}&_per_page=3`;
  };

  return useSWRInfinite<Todos>(getKey);
}
