import { getPostPagination } from "@/lib/utils/post";
import React from "react";
import Blog from "./Blog";

const BlogContainer = async () => {
  const paginatedPost = await getPostPagination({ page: 1, limit: 6 });
  return <Blog paginatedPost={paginatedPost} />;
};

export default BlogContainer;
