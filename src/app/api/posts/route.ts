import { getPostPagination } from "@/lib/utils/post";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
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
    return NextResponse.json(error, { status: 500 });
  }
}
