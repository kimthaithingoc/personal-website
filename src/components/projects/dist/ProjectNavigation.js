"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var next_intl_1 = require("next-intl");
var lucide_react_1 = require("lucide-react");
var ProjectNavigation = function (_a) {
    var prevProject = _a.prevProject, nextProject = _a.nextProject;
    var t = next_intl_1.useTranslations();
    return (react_1["default"].createElement("div", { className: "flex items-center justify-between" },
        prevProject && (react_1["default"].createElement(link_1["default"], { href: "/portfolio/project/" + prevProject.id, className: "font-semibold hover:text-primary/80 flex items-center gap-2" },
            react_1["default"].createElement(lucide_react_1.MoveLeft, null),
            t("Common.prev"),
            ": ",
            prevProject.title)),
        nextProject && (react_1["default"].createElement(link_1["default"], { href: "/portfolio/project/" + nextProject.id, className: "font-semibold hover:text-primary/80 flex items-center gap-2 ml-auto" },
            t("Common.next"),
            ": ",
            nextProject.title,
            react_1["default"].createElement(lucide_react_1.MoveRight, null)))));
};
exports["default"] = ProjectNavigation;
