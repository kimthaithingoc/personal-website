"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Icons = require("../icons/index");
var link_1 = require("next/link");
var next_themes_1 = require("next-themes");
var config_1 = require("@/lib/config");
var FloatButton = function () {
    var theme = next_themes_1.useTheme().theme;
    console.log(theme);
    return (react_1["default"].createElement("div", { className: "sm:block fixed right-8 top-1/2 hidden", style: { transform: "translateY(-50%)" } },
        react_1["default"].createElement("div", { className: "rounded-full bg-muted shadow-inner px-3 py-6 gap-4 flex flex-col" }, config_1.socialLinks.map(function (link) {
            var Icon = Icons[link.icon];
            return (react_1["default"].createElement(link_1["default"], { href: link.name === "Email" ? "mailto:" + link.href : link.href, key: link.name, className: "rounded-full shadow-inner p-2.5 bg-primary hover:bg-primary/80" },
                react_1["default"].createElement(Icon, { color: theme === "light" ? "white" : "black", className: "w-4 h-4" })));
        }))));
};
exports["default"] = FloatButton;
