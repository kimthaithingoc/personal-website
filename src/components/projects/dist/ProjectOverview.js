"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var ProjectOverview = function (_a) {
    var project = _a.project;
    var t = next_intl_1.useTranslations();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("video", { className: "w-full aspect-video", controls: true, preload: "none", poster: project.videoThumbnail },
            react_1["default"].createElement("source", { src: project.videoDemo, type: "video/mp4" }),
            t("Empty.video.description")),
        react_1["default"].createElement("h3", { className: "text-2xl font-bold mt-4 mb-2" }, project.title),
        react_1["default"].createElement("span", { className: "text-muted-foreground" }, project.summary)));
};
exports["default"] = ProjectOverview;
