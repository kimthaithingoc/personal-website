"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../international/LocaleSwitcher";
import { ModeToggle } from "../theme/ModeToggle";
import { navigationConfig } from "@/lib/config";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const tConfig = useTranslations("config");
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "backdrop-blur-md shadow-sm" : ""
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                {tConfig("myFirstName")}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 items-center">
              {navigationConfig.mainNav.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100",
                      pathname === link.href
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-400"
                    )}
                  >
                    {t(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex justify-end flex-1 items-center gap-2">
            <LocaleSwitcher />
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex gap-2">
              <LocaleSwitcher />
              <ModeToggle />
            </div>
            <div className="flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2 shadow-lg bg-white dark:bg-gray-900">
          {navigationConfig.mainNav.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              )}
            >
              {t(link.title)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
