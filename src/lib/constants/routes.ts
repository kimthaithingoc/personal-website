export const ROUTES = {
  HOME: "/",
  PORTFOLIO: "/portfolio",
  PORTFOLIO_DETAIL: "/portfolio/:id",
  BLOG: "/blog",
  BLOG_DETAIL: "/blog/:id",
} as const;

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.BLOG,
  ROUTES.PORTFOLIO,
  ROUTES.BLOG_DETAIL,
  ROUTES.PORTFOLIO_DETAIL,
];
