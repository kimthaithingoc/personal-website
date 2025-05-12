import { SeoConfig } from "@/types";
import { siteConfig } from "./site-config";
import { Metadata } from "next";

export const defaultSeoConfig: SeoConfig = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["portfolio", "developer", "web development", "next.js", "react"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourtwitterhandle",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function generateMetadata(options: Partial<SeoConfig> = {}): Metadata {
  return {
    title: options.title || defaultSeoConfig.title,
    description: options.description || defaultSeoConfig.description,
    keywords: options.keywords || defaultSeoConfig.keywords,
    openGraph: {
      ...defaultSeoConfig.openGraph,
      ...options.openGraph,
    },
    twitter: {
      ...defaultSeoConfig.twitter,
      ...options.twitter,
    },
    robots: {
      ...defaultSeoConfig.robots,
      ...options.robots,
    },
  };
}
