"use client";
import React, { ChangeEvent, useState } from "react";
import { useProducts } from "../services/queries";
import { axiosInstance } from "../services/fetcher";
import { useCreateProduct } from "../services/mutations";

const Products = () => {
  const { data, mutate, isValidating } = useProducts();
  const { trigger, isMutating } = useCreateProduct();

  const [inputValue, setInputValue] = useState("");

  const handleUpdateInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateProduct = async () => {
    // await axiosInstance.post("/products", { title: inputValue });
    // mutate();
    trigger(
      { title: inputValue },
      {
        optimisticData: data && [
          ...data,
          { title: `${inputValue} (optimistic data)` },
        ],
        rollbackOnError: true,
      }
    );
  };

  return (
    <div>
      <p>Products:</p>
      <ul>
        {data?.map((product,key) => (
          <li key={key}>{product.title}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Product title"
        value={inputValue}
        onChange={handleUpdateInputValue}
      />
      <button
        onClick={handleCreateProduct}
        disabled={isMutating || isValidating}
      >
        {isMutating || isValidating ? "Creating..." : "Create Product"}
      </button>
    </div>
  );
};

export default Products;
