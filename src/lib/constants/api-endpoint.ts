export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "/api",
  ENDPOINTS: {
    BLOG: {
      LIST: "/posts",
    },
  },
  TIMEOUT: "10000", // 10 seconds
} as const;
