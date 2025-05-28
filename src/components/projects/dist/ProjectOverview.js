"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var image_1 = require("next/image");
var react_1 = require("react");
var ResourceLink_1 = require("./ResourceLink");
var constants_1 = require("@/lib/constants");
var Resource_1 = require("./Resource");
var ProjectOverview = function (_a) {
    var _b, _c, _d, _e;
    var project = _a.project;
    var t = next_intl_1.useTranslations();
    return (react_1["default"].createElement("div", null,
        project.videoDemo ? (react_1["default"].createElement("video", { className: "w-full aspect-video", controls: true, preload: "none", poster: project.videoThumbnail },
            react_1["default"].createElement("source", { src: project.videoDemo, type: "video/mp4" }),
            t("Empty.video.description"))) : (react_1["default"].createElement("div", { className: "w-full aspect-video relative" },
            react_1["default"].createElement(image_1["default"], { className: "object-cover rounded-md aspect-video", fill: true, src: (_b = project.videoThumbnail) !== null && _b !== void 0 ? _b : project.images[0], alt: project.title }))),
        react_1["default"].createElement("div", { className: "flex items-center gap-1" },
            react_1["default"].createElement("h3", { className: "text-2xl font-bold mt-4 mb-2" }, project.title),
            ((_c = project.resources) === null || _c === void 0 ? void 0 : _c.find(function (r) { return r.type === constants_1.ResourceType.Demo; })) && (react_1["default"].createElement(ResourceLink_1["default"], { ariaLabel: "View resource of " + project.title + " on Demo", href: (_e = (_d = project.resources) === null || _d === void 0 ? void 0 : _d.find(function (r) { return r.type === constants_1.ResourceType.Demo; })) === null || _e === void 0 ? void 0 : _e.url, icon: Resource_1.getResourceIcon(constants_1.ResourceType.Demo) }))),
        react_1["default"].createElement("span", { className: "text-muted-foreground" }, project.summary)));
};
exports["default"] = ProjectOverview;
