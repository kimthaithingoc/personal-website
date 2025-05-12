"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var tabs_1 = require("../ui/tabs");
var Gallery_1 = require("./Gallery");
var ProjectInformation = function (_a) {
    var _b;
    var project = _a.project;
    var t = next_intl_1.useTranslations();
    var tabs = ["overview", "features", "responsibilities", "lessons"];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(tabs_1.Tabs, { defaultValue: "overview" },
            react_1["default"].createElement(tabs_1.TabsList, { className: "flex items-center justify-start w-full overflow-x-auto" }, tabs.map(function (tab) { return (react_1["default"].createElement(tabs_1.TabsTrigger, { key: tab, value: tab, className: "cursor-pointer w-fit" }, t("ProjectDetail.tab." + tab))); })),
            react_1["default"].createElement(tabs_1.TabsContent, { value: "overview", className: "space-y-4 text-justify" },
                react_1["default"].createElement("div", { className: "space-y-2" },
                    react_1["default"].createElement("h3", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.description")),
                    react_1["default"].createElement("p", null, project.description)),
                react_1["default"].createElement("div", { className: "space-y-2" },
                    react_1["default"].createElement("h3", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.problem")),
                    react_1["default"].createElement("p", null, project.problemStatement)),
                react_1["default"].createElement("div", { className: "space-y-2" },
                    react_1["default"].createElement("h3", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.solution")),
                    react_1["default"].createElement("p", null, project.solutionOverview)),
                react_1["default"].createElement(Gallery_1["default"], { images: (_b = project.images) !== null && _b !== void 0 ? _b : [], title: "ProjectDetail.gallery", alt: "View image of " + project.title })),
            react_1["default"].createElement(tabs_1.TabsContent, { value: "features", className: "space-y-4 text-justify" },
                react_1["default"].createElement("h2", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.features")),
                react_1["default"].createElement("ul", { className: "ml-6 list-disc space-y-2" }, project.features.map(function (feature, index) { return (react_1["default"].createElement("li", { key: index }, feature)); })),
                project.achievements && (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.achievements")),
                    react_1["default"].createElement("ul", { className: "ml-6 list-disc space-y-2" }, project.achievements.map(function (achievement, index) { return (react_1["default"].createElement("li", { key: index }, achievement)); }))))),
            project.responsibilities && project.responsibilities.length > 0 && (react_1["default"].createElement(tabs_1.TabsContent, { value: "responsibilities", className: "space-y-4 text-justify" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.responsibilities")),
                    react_1["default"].createElement("ul", { className: "ml-6 list-disc space-y-2" }, project.responsibilities.map(function (responsibility, index) { return (react_1["default"].createElement("li", { key: index }, responsibility)); }))))),
            react_1["default"].createElement(tabs_1.TabsContent, { value: "lessons", className: "space-y-4 text-justify" },
                project.lessonsLearned && project.lessonsLearned.length > 0 && (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.lessons")),
                    react_1["default"].createElement("ul", { className: "ml-6 list-disc space-y-2" }, project.lessonsLearned.map(function (lesson, index) { return (react_1["default"].createElement("li", { key: index }, lesson)); })))),
                project.futurePlans && project.futurePlans.length > 0 && (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h2", { className: "mb-3 text-lg font-semibold" }, t("ProjectDetail.futurePlans")),
                    react_1["default"].createElement("ul", { className: "ml-6 list-disc space-y-2" }, project.futurePlans.map(function (plan, index) { return (react_1["default"].createElement("li", { key: index }, plan)); }))))))));
};
exports["default"] = ProjectInformation;
