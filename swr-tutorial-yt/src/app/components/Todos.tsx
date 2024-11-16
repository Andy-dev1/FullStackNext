"use client";
import React from "react";
import { useTodos } from "../services/queries";

const Todos = () => {
  const { data, setSize, size } = useTodos();

  if (!data) return "Loading...";
  console.log(data);

  return (
    <div>
      {data?.map((todos) => {
        return todos.data.map((todo, key) => <div key={key}>{todo.title}</div>);
      })}
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </div>
  );
};

export default Todos;
