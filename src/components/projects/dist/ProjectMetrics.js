"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var TeamSizeChart_1 = require("./TeamSizeChart");
var badge_1 = require("../ui/badge");
var UserChart_1 = require("./UserChart");
var ContributionChart_1 = require("./ContributionChart");
var Resource_1 = require("./Resource");
var ProjectMetrics = function (_a) {
    var _b;
    var project = _a.project;
    var t = next_intl_1.useTranslations();
    return (react_1["default"].createElement("div", { className: "space-y-3 p-4 border rounded-sm" },
        react_1["default"].createElement("div", { className: "space-y-2" },
            react_1["default"].createElement("p", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.timeline")),
            react_1["default"].createElement("p", { className: "space-x-2 text-muted-foreground flex items-center text-sm" },
                react_1["default"].createElement("p", { className: "space-x-1 flex items-center" },
                    react_1["default"].createElement(lucide_react_1.Calendar, { className: "w-4 h-4" }),
                    react_1["default"].createElement("span", null, t("Date.normal", { value: new Date(project.startTime) }))),
                react_1["default"].createElement("span", null, "-"),
                react_1["default"].createElement("p", { className: "space-x-1 flex items-center" },
                    react_1["default"].createElement(lucide_react_1.Calendar, { className: "w-4 h-4" }),
                    react_1["default"].createElement("span", null, t("Date.short", { value: new Date(project.endTime) }, {
                        dateTime: {
                            short: {
                                day: "numeric",
                                month: "numeric",
                                year: "numeric"
                            }
                        }
                    }))))),
        react_1["default"].createElement("span", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.categories")),
        react_1["default"].createElement("div", { className: "space-x-1" }, project.category.map(function (category) { return (react_1["default"].createElement(badge_1.Badge, { variant: "secondary", key: category }, category)); })),
        react_1["default"].createElement("div", { className: "space-y-2" },
            react_1["default"].createElement("p", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.platforms")),
            react_1["default"].createElement("div", { className: "space-x-1" }, project.platform.map(function (platform) { return (react_1["default"].createElement(badge_1.Badge, { variant: "secondary", key: platform }, platform)); })),
            project.metrics && project.metrics.users && (react_1["default"].createElement(UserChart_1.UserChart, { users: project.metrics.users }))),
        react_1["default"].createElement("div", { className: "space-y-2" },
            react_1["default"].createElement("span", { className: "text-muted-foreground font-semibold" },
                t("ProjectDetail.teamSize"),
                " ",
                !project.team && ": 1"),
            project.team && react_1["default"].createElement(TeamSizeChart_1["default"], { team: project.team })),
        react_1["default"].createElement("div", { className: "flex flex-col sm:flex-row md:flex-col gap-2" },
            project.contribution && project.contribution.role && (react_1["default"].createElement("div", { className: "space-y-2 md:w-full sm:w-3/4 w-full" },
                react_1["default"].createElement("p", null,
                    react_1["default"].createElement("span", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.roles"))),
                react_1["default"].createElement("div", { className: "flex items-center flex-wrap gap-1" }, project.contribution.role.map(function (role) { return (react_1["default"].createElement(badge_1.Badge, { variant: "secondary", key: role }, role)); })))),
            project.contribution && project.contribution.percentage && (react_1["default"].createElement("div", { className: "space-y-2 md:w-full sm:w-1/4 w-full" },
                react_1["default"].createElement("span", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.contribution")),
                react_1["default"].createElement(ContributionChart_1.ContributionChart, { percentage: project.contribution.percentage })))),
        react_1["default"].createElement("div", { className: "space-y-2" },
            react_1["default"].createElement("span", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.techStack")),
            react_1["default"].createElement("div", { className: "space-y-2" }, project.techStack.map(function (techStack) { return (react_1["default"].createElement("div", { key: techStack.category, className: "flex items-center flex-wrap space-x-1" },
                react_1["default"].createElement("span", { className: "text-sm text-muted-foreground font-medium" },
                    techStack.category,
                    ":"),
                react_1["default"].createElement("p", { className: "space-x-1" }, techStack.tech.map(function (tech) { return (react_1["default"].createElement(badge_1.Badge, { key: tech, variant: "secondary" }, tech)); })))); }))),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "space-y-2" },
                react_1["default"].createElement("span", { className: "text-muted-foreground font-semibold" }, t("ProjectDetail.resources")),
                react_1["default"].createElement("div", null, !project.resources ||
                    (project.resources.length === 0 && react_1["default"].createElement("span", null,
                        " ",
                        t("Empty.na")))),
                react_1["default"].createElement("div", { className: "flex flex-wrap gap-1" },
                    react_1["default"].createElement(Resource_1["default"], { resources: (_b = project.resources) !== null && _b !== void 0 ? _b : [], title: project.title }))))));
};
exports["default"] = ProjectMetrics;
