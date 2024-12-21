import React from "react";

const BlogPostPage = ({ params }: any) => {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
};

export default BlogPostPage;
