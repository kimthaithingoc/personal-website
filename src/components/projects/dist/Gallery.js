"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var next_intl_1 = require("next-intl");
var image_1 = require("next/image");
var react_1 = require("react");
var Gallery = function (_a) {
    var images = _a.images, title = _a.title, alt = _a.alt, _b = _a.type, type = _b === void 0 ? "website" : _b;
    var t = next_intl_1.useTranslations();
    return (images &&
        images.length > 0 && (react_1["default"].createElement("div", { className: "space-y-3 w-full" },
        react_1["default"].createElement("h3", { className: "text-lg font-semibold" }, t(title)),
        react_1["default"].createElement("div", { className: utils_1.cn("grid items-center", images.length > 1 && type === "website"
                ? "grid-cols-2 gap-2"
                : images.length > 1 && "sm:grid-cols-3 gap-2 grid-cols-2") }, images.map(function (image, index) { return (react_1["default"].createElement("div", { className: utils_1.cn("relative overflow-hidden rounded-md", type === "mobile" ? "h-[100vh]" : "h-36 sm:h-52"), key: image + index },
            react_1["default"].createElement(image_1["default"], { src: image, alt: alt, fill: true, className: "object-cover rounded-md transition-transform duration-500 group-hover:scale-105" }))); })))));
};
exports["default"] = Gallery;
