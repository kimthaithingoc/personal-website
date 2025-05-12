import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  page: number;
  pathname: string;
  createQueryString: (name: string, value: string) => void;
}
const CommonPagination = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
  page,
  createQueryString,
  pathname,
}: Props) => {
  const maxPagesMiddle = 2;
  const showFirstPage = true;
  const showLastPage = true;

  const createPageUrl = (pageNumber: number) => {
    return pathname + "?" + createQueryString("page", pageNumber.toString());
  };

  const renderPaginationItem = () => {
    const items = [];
    const pageNumber = new Set<number>();

    // First page number
    if (showFirstPage && totalPages > 0) {
      pageNumber.add(1);
    }

    // Current page number
    pageNumber.add(page);

    // Around current page
    for (let i = 1; i <= maxPagesMiddle - 1; i++) {
      if (page - i > 1) {
        pageNumber.add(page - i);
      }

      if (page + i < totalPages) {
        pageNumber.add(page + i);
      }
    }

    // Last page number
    if (showLastPage && totalPages > 1) {
      pageNumber.add(totalPages);
    }

    // Complete page number array
    const sortedPageNumber = Array.from(pageNumber).sort((a, b) => a - b);

    // UI
    let prevPage = 0;
    for (const pageNum of sortedPageNumber) {
      // Ellipsis
      if (pageNum - prevPage > 1) {
        items.push(
          <PaginationItem key={`ellipsis-${pageNum}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      // Button

      items.push(
        <PaginationItem key={pageNum}>
          <PaginationLink
            href={createPageUrl(pageNum)}
            isActive={page === pageNum}
          >
            {pageNum}
          </PaginationLink>
        </PaginationItem>
      );
      prevPage = pageNum;
    }

    return items;
  };
  return (
    <Pagination>
      <PaginationContent>
        {hasPrevPage && (
          <PaginationItem key="prev">
            <PaginationPrevious href={createPageUrl(page - 1)} />
          </PaginationItem>
        )}

        {renderPaginationItem()}

        {hasNextPage && (
          <PaginationItem key="next">
            <PaginationNext href={createPageUrl(page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default CommonPagination;
