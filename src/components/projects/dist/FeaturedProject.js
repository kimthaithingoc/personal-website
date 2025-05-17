"use client";
"use strict";
exports.__esModule = true;
var data_1 = require("@/lib/data");
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var button_1 = require("../ui/button");
var ProjectCard_1 = require("./ProjectCard");
var FeaturedProject = function () {
    var _a = react_1.useState(false), isHover = _a[0], setIsHover = _a[1];
    var t = next_intl_1.useTranslations("FeaturedProject");
    var tButton = next_intl_1.useTranslations("Button");
    var sectionRef = react_1.useRef(null);
    return (react_1["default"].createElement("section", { ref: sectionRef, className: "py-4 space-y-4", id: "featuredProject" },
        react_1["default"].createElement(button_1.Button, { className: "hover:bg-primary/5 relative text-sm px-5 py-0.5 bg-background rounded-full text-foreground font-medium transition-all duration-300 border border-transparent", style: {
                backgroundClip: "padding-box"
            } },
            react_1["default"].createElement("span", { className: "relative z-10" }, t("title")),
            react_1["default"].createElement("span", { className: "absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-primary to-background p-0.5 -m-0.5" })),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" }, data_1.projects.slice(0, 3).map(function (project, index) { return (react_1["default"].createElement(ProjectCard_1["default"], { key: project.id, project: project, sectionRef: sectionRef, index: index })); })),
        react_1["default"].createElement(link_1["default"], { href: "/portfolio/", className: "font-semibold flex items-center gap-1 hover:opacity-80", onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
            react_1["default"].createElement("span", null, tButton("viewMore")),
            react_1["default"].createElement(lucide_react_1.MoveRight, { className: "w-4 h-4 transition-transform", style: {
                    transform: isHover ? "translateX(4px)" : "translateX(0)",
                    transition: "opacity 0.3s ease, transform 0.3s ease 0.3s"
                } }))));
};
exports["default"] = FeaturedProject;
