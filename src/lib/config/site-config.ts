import { SiteConfig } from "@/types";
import { APP_CONFIG, ROUTES, SOCIAL_LINKS } from "../constants";

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || APP_CONFIG.SITE_NAME,
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION || APP_CONFIG.SITE_DESCRIPTION,
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/images/og-image.jpg",
  links: {
    email: SOCIAL_LINKS.EMAIL,
    github: SOCIAL_LINKS.GITHUB,
    linkedin: SOCIAL_LINKS.LINKEDIN,
    x: SOCIAL_LINKS.X,
  },
  author: {
    name: APP_CONFIG.AUTHOR,
    email: APP_CONFIG.CONTACT_EMAIL,
  },
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  endpoints: {
    blog: {
      list: `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.BLOG}`,
      detail: (slug: string) =>
        `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.BLOG}/${slug}`,
    },
    portfolio: {
      list: `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.PORTFOLIO}`,
      detail: (id: string) =>
        `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.PORTFOLIO}/${id}`,
    },
    landing: {
      home: `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.HOME}`,
    },
  },
};
