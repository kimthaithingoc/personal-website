export interface IPaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: "asc" | "desc";
  search?: string;
  filters?: Record<string, unknown>;
  fields?: string[];
}

export interface IPaginationResult<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}
