"use client";

import { useTranslations } from "next-intl";
import * as Icons from "@/components/icons/";
import Link from "next/link";
import React from "react";
import CopyToClipboard from "../shared/CopyToClipboard";
import { useTheme } from "next-themes";
import { navigationConfig, siteConfig, socialLinks } from "@/lib/config";

const Footer = () => {
  const t = useTranslations();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-3 pt-3">
        {/* Nav links */}
        <div className="flex md:flex-row flex-col items-center justify-between w-full md:gap-6 gap-3">
          <div className="flex items-center gap-12 w-full">
            {navigationConfig.mainNav.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="uppercase font-semibold text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                {t(`Navbar.${link.title}`)}
              </Link>
            ))}
          </div>
          <div className="bg-muted rounded-full flex items-center gap-2 px-5 py-2 hover:opacity-80">
            <Link
              href={`mailto:${siteConfig.links.email}`}
              aria-label="Email"
              className="flex items-center gap-2"
            >
              {Icons.Email && (
                <Icons.Email
                  className="w-3.5 h-3.5"
                  color={theme === "dark" ? "white" : "black"}
                />
              )}
              <span>{siteConfig.links.email}</span>
            </Link>
            <CopyToClipboard
              text={siteConfig.links.email}
              className="shadow-inner rounded-full w-8 h-8"
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-400 dark:border-gray-800">
          {/* Name */}
          <div className="flex md:flex-1 justify-start">
            <span className="hidden w-full text-justify md:inline-block text-xl uppercase font-bold bg-gradient-to-r from-gray-800 to-gray-300 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
              {t("config.myName")}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 flex-1 justify-center">
            {socialLinks.slice(1).map((link) => {
              const Icon = Icons[link.icon as keyof typeof Icons];
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="transition-all bg-muted p-2 rounded-full text-muted-foreground hover:text-muted-foreground hover:bg-muted/80"
                >
                  {Icon && (
                    <Icon
                      className="w-4 h-4"
                      color={theme === "dark" ? "white" : "black"}
                    />
                  )}
                  <span className="sr-only">{link.name}</span>
                </Link>
              );
            })}

            <div></div>
          </div>

          {/* Copyright */}
          <div className="flex justify-end flex-1">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              &copy; {t("Copyright.title")} {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
