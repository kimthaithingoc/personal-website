"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var next_intl_1 = require("next-intl");
var LocaleSwitcher_1 = require("../international/LocaleSwitcher");
var ModeToggle_1 = require("../theme/ModeToggle");
var config_1 = require("@/lib/config");
function Navbar() {
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var _b = react_1.useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
    var t = next_intl_1.useTranslations("Navbar");
    var tConfig = next_intl_1.useTranslations("config");
    var pathname = navigation_1.usePathname();
    // Handle scroll effect
    react_1.useEffect(function () {
        var handleScroll = function () {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    // Close mobile menu when route changes
    react_1.useEffect(function () {
        setIsMenuOpen(false);
    }, [pathname]);
    return (React.createElement("header", { className: utils_1.cn("fixed top-0 z-50 w-full transition-all duration-300", isScrolled ? "backdrop-blur-md shadow-sm" : "") },
        React.createElement("div", { className: "mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex h-16 items-center" },
                React.createElement("div", { className: "flex-1 flex justify-start" },
                    React.createElement(link_1["default"], { href: "/", className: "flex items-center" },
                        React.createElement("span", { className: "text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent" }, tConfig("myFirstName")))),
                React.createElement("nav", { className: "hidden md:flex flex-1 justify-center" },
                    React.createElement("ul", { className: "flex space-x-8 items-center" }, config_1.navigationConfig.mainNav.map(function (link) { return (React.createElement("li", { key: link.title },
                        React.createElement(link_1["default"], { href: link.href, className: utils_1.cn("text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100", pathname === link.href
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-600 dark:text-gray-400") }, t(link.title)))); }))),
                React.createElement("div", { className: "hidden md:flex justify-end flex-1 items-center gap-2" },
                    React.createElement(LocaleSwitcher_1["default"], null),
                    React.createElement(ModeToggle_1.ModeToggle, null)),
                React.createElement("div", { className: "flex md:hidden items-center gap-2" },
                    React.createElement("div", { className: "flex gap-2" },
                        React.createElement(LocaleSwitcher_1["default"], null),
                        React.createElement(ModeToggle_1.ModeToggle, null)),
                    React.createElement("div", { className: "flex" },
                        React.createElement("button", { type: "button", className: "inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100", onClick: function () { return setIsMenuOpen(!isMenuOpen); } },
                            React.createElement("span", { className: "sr-only" }, "Open main menu"),
                            isMenuOpen ? (React.createElement(lucide_react_1.X, { className: "h-6 w-6", "aria-hidden": "true" })) : (React.createElement(lucide_react_1.Menu, { className: "h-6 w-6", "aria-hidden": "true" }))))))),
        React.createElement("div", { className: utils_1.cn("md:hidden", isMenuOpen ? "block" : "hidden") },
            React.createElement("div", { className: "space-y-1 px-4 pb-3 pt-2 shadow-lg bg-white dark:bg-gray-900" }, config_1.navigationConfig.mainNav.map(function (link) { return (React.createElement(link_1["default"], { key: link.title, href: link.href, className: utils_1.cn("block rounded-md px-3 py-2 text-base font-medium transition-colors", pathname === link.href
                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100") }, t(link.title))); })))));
}
exports["default"] = Navbar;
