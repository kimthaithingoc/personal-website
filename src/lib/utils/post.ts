import { IPaginationParams, IPaginationResult } from "@/types/pagination";
import { IPost } from "@/types/post";
import { readdirSync } from "fs";
import path from "path";

export const contentDirectory = path.join(process.cwd(), "src/content/blog");

export const getPostBySlug = async (slug: string) => {
  const { metadata } = await import(`@/content/blog/${slug}.mdx`);
  return { slug, ...metadata };
};

// Retrieve slugs from post routes
export const getAllPostSlugs = async (): Promise<string[]> => {
  const slugs = readdirSync(contentDirectory, { encoding: "utf-8" }).map(
    (dirent) => dirent.replace(/\.mdx$/, "")
  );

  return slugs;
};

// Retrieve all posts
export const retrieveMetadataFromMdx = async () => {
  const slugs = await getAllPostSlugs();
  const posts = Promise.all(
    slugs.map(async (slug) => {
      return getPostBySlug(slug);
    })
  );
  return posts;
};

// Get sort by newest posts
export const getPostsDescending = async () => {
  const posts = await retrieveMetadataFromMdx();
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));
  return posts;
};

// Get post pagination
export const getPostPagination = async ({
  page = 1,
  limit = 10,
  search = "",
  sort = "publishDate",
  order = "desc",
  fields = [],
  filters = {},
}: IPaginationParams): Promise<IPaginationResult<IPost>> => {
  const allPosts: IPost[] = await retrieveMetadataFromMdx();

  // Normalization
  const currentPage = Math.max(1, page); // Ensure page from 1
  const pageSize = Math.max(1, Math.min(limit, 100)); // Ensure limit from 1 to 100
  let filteredPosts = allPosts;

  // Search
  if (search !== "") {
    const keyword = search.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.description.toLowerCase().includes(keyword)
    );
  }

  // Filter
  if (Object.keys(filters).length > 0) {
    filteredPosts = filteredPosts.filter((post) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key in post) {
          //@ts-expect-error - key is in post
          const postValue = post[key];

          if (typeof value === "string") {
            return postValue.toLowerCase().includes(value.toLowerCase());
          } else if (Array.isArray(value)) {
            return value.includes(postValue);
          } else {
            return postValue === value;
          }
        }
        return false;
      });
    });
  }

  // Sort
  if (sort && sort !== "") {
    filteredPosts = filteredPosts.sort((a, b) => {
      // @ts-expect-error -- sort is in post
      const valueA = a[sort];
      // @ts-expect-error -- sort is in post
      const valueB = b[sort];

      if (sort === "publishDate") {
        return order === "asc"
          ? +new Date(valueA) - +new Date(valueB)
          : +new Date(valueB) - +new Date(valueA);
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return order === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return order === "asc"
        ? valueA > valueB
          ? 1
          : -1
        : valueA < valueB
        ? 1
        : -1;
    });
  }

  // Pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Fields
  let posts = paginatedPosts;
  if (fields && fields.length > 0) {
    posts = paginatedPosts.map((post) => {
      const selectedFields: Partial<IPost> = {};
      fields.forEach((field) => {
        // @ts-expect-error - field is in post
        selectedFields[field] = post[field];
      });
      return selectedFields as IPost;
    });
  }
  const total = filteredPosts.length;
  const totalPages = Math.ceil(total / pageSize);

  return {
    data: posts,
    meta: {
      page: currentPage,
      limit: pageSize,
      total: total,
      totalPages: totalPages,
      hasPrevPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
    },
  };
};
