"use client";
import { usePosts } from "../services/queries";

const Posts = ({ pageIndex }: { pageIndex: number }) => {
  const { data, error, isLoading } = usePosts(pageIndex);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Loading...</p>;

  return (
    <ul>
      {data?.data?.map((post, key) => (
        <li key={key}>
          <p>Title:{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
