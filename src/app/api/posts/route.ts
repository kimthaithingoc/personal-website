import { getPostPagination } from "@/lib/utils/post";
import { IPaginationParams } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as IPaginationParams;
  const { filters, fields, page, limit, sort, order, search } = body;
  try {
    const paginatedPost = await getPostPagination({
      page,
      limit,
      sort,
      order,
      fields,
      search,
      filters,
    });
    return NextResponse.json(paginatedPost, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
