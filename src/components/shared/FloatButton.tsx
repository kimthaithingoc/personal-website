"use client";

import React from "react";
import * as Icons from "../icons/index";
import Link from "next/link";
import { useTheme } from "next-themes";
import { socialLinks } from "@/lib/config";

const FloatButton = () => {
  const { theme } = useTheme();

  return (
    <div
      className="sm:block fixed right-8 top-1/2 hidden"
      style={{ transform: "translateY(-50%)" }}
    >
      <div className="rounded-full bg-muted shadow-inner px-3 py-6 gap-4 flex flex-col">
        {socialLinks.map((link) => {
          const Icon = Icons[link.icon as keyof typeof Icons];
          return (
            <Link
              href={link.href}
              key={link.name}
              className="rounded-full shadow-inner p-2.5 bg-primary hover:bg-primary/80"
            >
              <Icon
                color={theme === "dark" ? "black" : "white"}
                className="w-4 h-4  dark:text-primary-foreground"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FloatButton;
