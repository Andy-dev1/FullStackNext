import { PostModel } from "@/@core/domain/models/post.model";
import React from "react";

type Props = {
  post: PostModel;
};

const ItemPost = ({ post }: Props) => {
  return (
    <div
      key={post.id}
      className="hover:text-black hover:cursor-pointer hover:bg-white mx-auto w-1/2 border border-white rounded-md mt-4 p-4"
    >
      <h1 className="text-center text-4xl uppercase font-bold">{post.title}</h1>
      <p className="text-center font-extralight text-sm">{post.body}</p>
    </div>
  );
};

export default ItemPost;
