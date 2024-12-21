import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h1>The Blog</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-1">Post 2</Link>
      </p>
    </div>
  );
};

export default BlogPage;
