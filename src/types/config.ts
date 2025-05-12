export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
    locale: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    creator: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      "max-video-preview": number;
      "max-image-preview": "large" | "none" | "standard";
      "max-snippet": number;
    };
  };
}

export interface ThemeConfig {
  defaultTheme: "light" | "dark" | "system";
  disableTransitionOnThemeChange: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: Record<string, string>;
  author: {
    name: string;
    email: string;
  };
  isDevelopment: boolean;
  isProduction: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
