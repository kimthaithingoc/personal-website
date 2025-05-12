"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var Icons = require("@/components/icons/");
var link_1 = require("next/link");
var react_1 = require("react");
var CopyToClipboard_1 = require("../shared/CopyToClipboard");
var next_themes_1 = require("next-themes");
var config_1 = require("@/lib/config");
var Footer = function () {
    var t = next_intl_1.useTranslations();
    var theme = next_themes_1.useTheme().theme;
    var currentYear = new Date().getFullYear();
    return (react_1["default"].createElement("footer", { className: "mt-auto bg-white dark:border-gray-800 dark:bg-gray-900" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4 md:px-6 lg:px-8 space-y-3 pt-3" },
            react_1["default"].createElement("div", { className: "flex md:flex-row flex-col items-center justify-between w-full md:gap-6 gap-3" },
                react_1["default"].createElement("div", { className: "flex items-center gap-12 w-full" }, config_1.navigationConfig.mainNav.map(function (link) { return (react_1["default"].createElement(link_1["default"], { key: link.title, href: link.href, className: "uppercase font-semibold text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100" }, t("Navbar." + link.title))); })),
                react_1["default"].createElement("div", { className: "bg-muted rounded-full flex items-center gap-2 px-5 py-2 hover:opacity-80" },
                    react_1["default"].createElement(link_1["default"], { href: "mailto:" + config_1.siteConfig.links.email, "aria-label": "Email", className: "flex items-center gap-2" },
                        Icons.Email && (react_1["default"].createElement(Icons.Email, { className: "w-3.5 h-3.5", color: theme === "dark" ? "white" : "black" })),
                        react_1["default"].createElement("span", null, config_1.siteConfig.links.email)),
                    react_1["default"].createElement(CopyToClipboard_1["default"], { text: config_1.siteConfig.links.email, className: "shadow-inner rounded-full w-8 h-8" }))),
            react_1["default"].createElement("div", { className: "flex items-center justify-between py-3 border-t border-gray-400 dark:border-gray-800" },
                react_1["default"].createElement("div", { className: "flex md:flex-1 justify-start" },
                    react_1["default"].createElement("span", { className: "hidden w-full text-justify md:inline-block text-xl uppercase font-bold bg-gradient-to-r from-gray-800 to-gray-300 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400" }, t("config.myName"))),
                react_1["default"].createElement("div", { className: "flex space-x-4 flex-1 justify-center" },
                    config_1.socialLinks.slice(1).map(function (link) {
                        var Icon = Icons[link.icon];
                        return (react_1["default"].createElement(link_1["default"], { key: link.name, href: link.href, "aria-label": link.name, className: "transition-all bg-muted p-2 rounded-full text-muted-foreground hover:text-muted-foreground hover:bg-muted/80" },
                            Icon && (react_1["default"].createElement(Icon, { className: "w-4 h-4", color: theme === "dark" ? "white" : "black" })),
                            react_1["default"].createElement("span", { className: "sr-only" }, link.name)));
                    }),
                    react_1["default"].createElement("div", null)),
                react_1["default"].createElement("div", { className: "flex justify-end flex-1" },
                    react_1["default"].createElement("p", { className: "text-center text-sm text-gray-600 dark:text-gray-400" },
                        "\u00A9 ",
                        t("Copyright.title"),
                        " ",
                        currentYear))))));
};
exports["default"] = Footer;
