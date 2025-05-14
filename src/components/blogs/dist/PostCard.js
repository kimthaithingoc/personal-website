"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var link_1 = require("next/link");
var utils_1 = require("@/lib/utils");
var next_intl_1 = require("next-intl");
var PostCard = function (_a) {
    var post = _a.post, sectionRef = _a.sectionRef, index = _a.index, _b = _a.orientation, orientation = _b === void 0 ? "vertical" : _b;
    var _c = react_1.useState(false), isVisible = _c[0], setIsVisible = _c[1];
    var t = next_intl_1.useTranslations();
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (react_1["default"].createElement(link_1["default"], { href: "/blog/" + post.slug },
        react_1["default"].createElement("div", { className: "group overflow-hidden rounded-md transition-all h-full", style: {
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease " + index * 0.1 + "s"
            } },
            react_1["default"].createElement("div", { className: utils_1.cn("h-full", orientation === "horizontal" && "flex gap-3 items-start") },
                react_1["default"].createElement("div", { className: utils_1.cn("relative overflow-hidden rounded-md", orientation === "horizontal"
                        ? "w-1/2 sm:h-60 h-44"
                        : "sm:h-52 h-36") },
                    react_1["default"].createElement(image_1["default"], { src: post.thumbnail, alt: "Thumbnail of " + post.title, fill: true, className: "object-cover rounded-md transition-transform duration-500 group-hover:scale-105" }),
                    react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" })),
                react_1["default"].createElement("div", { className: utils_1.cn("mt-3 pb-2 space-y-1", orientation === "horizontal" && "w-1/2") },
                    react_1["default"].createElement("p", { className: "text-gray-600 dark:text-gray-400 text-justify text-xs" }, t("Date.short", { value: new Date(post.publishDate) }, {
                        dateTime: {
                            short: {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                            }
                        }
                    })),
                    react_1["default"].createElement("h3", { className: "font-bold" }, post.title),
                    react_1["default"].createElement("p", { className: utils_1.cn("text-gray-600 dark:text-gray-400 text-justify sm:text-sm text-xs overflow-ellipsis", orientation === "vertical" ? "line-clamp-3" : "line-clamp-6") }, post.description))))));
};
exports["default"] = PostCard;
