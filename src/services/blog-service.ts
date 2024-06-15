import { requestHandler } from "@/utils/requestHandler";
import api from "@/services/api";

interface Blog {
  id: string;
  cover_image: string;
  title: string;
  updated_at: string;
}

export interface BlogPaginationInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogListResponse[];
}

export interface BlogListResponse extends Blog {
  summary: string;
}

export interface BlogDetailResponse extends Blog {
  content: string;
  author: string;
}

export const getBlogs = requestHandler<{ page: string | number }, any>(
  (params) => {
    if (!params) {
      return Promise.reject(new Error("Params are required"));
    }
    // 正确地将 `page` 参数和其他查询参数传递给 `api.get`
    return api.get(`blogs/`, {
      params: {
        page: params.page,
        // sort: JSON.stringify({ updated_at: -1 }),
      },
    });
  }
);

export const getBlog = requestHandler<{ id: string }, BlogDetailResponse>(
  (params) => {
    if (!params) {
      return Promise.reject(new Error("Params are required"));
    }
    return api.get(`blogs/${params.id}`);
  }
);
