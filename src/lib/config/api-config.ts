import { API } from "../constants";

export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || API.BASE_URL,
  timeout: Number.parseInt(process.env.API_TIMEOUT || API.TIMEOUT, 10),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  endpoints: {
    blog: {
      posts: `${API.BASE_URL}${API.ENDPOINTS.BLOG}`,
    },
  },
};
