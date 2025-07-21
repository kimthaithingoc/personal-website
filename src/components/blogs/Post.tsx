"use client";

import { IPaginationResult } from "@/types/pagination";
import { IPost } from "@/types/post";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import PostPagination from "./PostPagination";
import PostContainer from "./PostContainer";
import { PostSearch } from "./PostSearch";
import { useDebouce } from "@/lib/hooks";
import Empty from "../shared/Empty";
import { usePathname, useSearchParams } from "next/navigation";
import PostFilter from "./PostFilter";

const Post = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, unknown>>({});
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [hasPrevPage, setHasPrevPage] = useState<boolean>(false);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const deboucedSearch = useDebouce(search, 3000);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (
      searchParams.get("page") &&
      searchParams.get("page")?.toString() !== page.toString()
    ) {
      setPage(parseInt(searchParams.get("page")?.toString() ?? "1"));
    }
  }, [searchParams, page]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      setPosts([]);

      try {
        const response = await fetch(`/api/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page,
            search: deboucedSearch,
            filters,
          }),
        });
        const result: IPaginationResult<IPost> = await response.json();
        setPosts(result.data);
        setTotalPages(result.meta.totalPages);
        setHasNextPage(result.meta.hasNextPage);
        setHasPrevPage(result.meta.hasPrevPage);
        setTotal(result.meta.total);
        if (result.meta.page !== page) {
          createQueryString("page", result.meta.page.toString());
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [filters, page, t, deboucedSearch, createQueryString]);

  const onSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <div className="px-8 space-y-4">
      <div className="container mx-auto px-4 sm:px-10 lg:px-28 xl:px-44 2xl:px-56 space-y-4">
        <div className="w-2/3 mx-auto">
          <PostSearch onSearch={onSearch} initialValue={search} />
        </div>
        <div className="mx-auto w-fit">
          <PostFilter
            setFilters={setFilters}
            initialFilters={filters?.category as Array<string>}
          />
        </div>
        {!isLoading && total > 0 && (
          <>
            <PostContainer posts={posts} />
            <div className="mt-auto mb-4">
              <PostPagination
                page={page}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}
                totalPages={totalPages}
                createQueryString={createQueryString}
                pathname={pathname}
              />
            </div>
          </>
        )}
        {!isLoading && total === 0 && (
          <div className="my-auto h-full">
            <Empty item="posts" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
