"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var data_1 = require("@/lib/data");
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var ProjectCard_1 = require("./ProjectCard");
var button_1 = require("../ui/button");
var utils_1 = require("@/lib/utils");
var ProjectGrid = function () {
    var t = next_intl_1.useTranslations();
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(t("Common.all")), selectedCategory = _a[0], setSelectedCategory = _a[1];
    var _b = react_1.useState(t("Common.all")), selectedPlatform = _b[0], setSelectedPlatform = _b[1];
    var allExitsCategory = __spreadArrays([
        t("Common.all")
    ], Array.from(new Set(data_1.projects.flatMap(function (project) { return project.category; }))));
    var allExitsPlatform = __spreadArrays([
        t("Common.all")
    ], Array.from(new Set(data_1.projects.flatMap(function (project) { return project.platform; }))));
    var filterProjects = selectedCategory === t("Common.all") && selectedPlatform === t("Common.all")
        ? data_1.projects
        : selectedCategory !== t("Common.all") &&
            selectedPlatform !== t("Common.all")
            ? data_1.projects
                .filter(function (project) {
                return project.category.includes(selectedCategory);
            })
                .filter(function (project) {
                return project.platform.includes(selectedPlatform);
            })
            : selectedCategory !== t("Common.all")
                ? data_1.projects.filter(function (project) {
                    return project.category.includes(selectedCategory);
                })
                : data_1.projects.filter(function (project) {
                    return project.platform.includes(selectedPlatform);
                });
    return (react_1["default"].createElement("div", { ref: sectionRef, className: "py-4 space-y-4", id: "projectGrid" },
        react_1["default"].createElement("div", { className: "flex items-center gap-4" }, allExitsPlatform.map(function (platform) { return (react_1["default"].createElement(button_1.Button, { className: utils_1.cn("rounded-xs hover:text-primary/80 hover:bg-transparent", selectedPlatform === platform && "border-b-2 border-primary"), variant: "ghost", onClick: function () { return setSelectedPlatform(platform); }, key: platform }, platform)); })),
        react_1["default"].createElement("div", { className: "flex items-center gap-4" }, allExitsCategory.map(function (category) { return (react_1["default"].createElement(button_1.Button, { className: utils_1.cn("rounded-full", selectedCategory === category
                ? "hover:bg-primary/80"
                : "border-primary hover:bg-muted hover:text-primary", selectedCategory === category &&
                category !== t("Common.all") &&
                "hover:line-through"), onClick: function () {
                if (category !== selectedCategory) {
                    setSelectedCategory(category);
                }
                else {
                    setSelectedCategory(t("Common.all"));
                }
            }, key: category, variant: selectedCategory === category ? "default" : "outline" }, category)); })),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" }, filterProjects.map(function (project, index) { return (react_1["default"].createElement(ProjectCard_1["default"], { sectionRef: sectionRef, index: index, project: project, key: index })); }))));
};
exports["default"] = ProjectGrid;
