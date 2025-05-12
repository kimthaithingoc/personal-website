import { NavItem } from "@/types";
import { ROUTES } from "../constants";

export const navigationConfig = {
  mainNav: [
    {
      title: "link.home",
      href: ROUTES.HOME,
    },
    {
      title: "link.portfolio",
      href: ROUTES.PORTFOLIO,
    },
    {
      title: "link.blog",
      href: ROUTES.BLOG,
    },
  ] as NavItem[],
};
