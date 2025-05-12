"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var button_1 = require("../ui/button");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var carousel_1 = require("../ui/carousel");
var PostCard_1 = require("./PostCard");
var Blog = function (_a) {
    var paginatedPost = _a.paginatedPost;
    var t = next_intl_1.useTranslations("Blog");
    var sectionRef = react_1.useRef(null);
    var _b = react_1.useState(false), isHover = _b[0], setIsHover = _b[1];
    var tButton = next_intl_1.useTranslations("Button");
    var _c = react_1["default"].useState(null), api = _c[0], setApi = _c[1];
    var _d = react_1["default"].useState(false), canScrollPrev = _d[0], setCanScrollPrev = _d[1];
    var _e = react_1["default"].useState(false), canScrollNext = _e[0], setCanScrollNext = _e[1];
    react_1["default"].useEffect(function () {
        if (!api)
            return;
        var updateButtons = function () {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };
        updateButtons();
        api.on("select", updateButtons);
        api.on("reInit", updateButtons);
        return function () {
            api.off("select", updateButtons);
            api.off("reInit", updateButtons);
        };
    }, [api]);
    return (react_1["default"].createElement("section", { ref: sectionRef, className: "py-4 space-y-4", id: "experience" },
        react_1["default"].createElement(button_1.Button, { className: "hover:bg-primary/5 relative text-sm px-5 py-0.5 bg-background rounded-full text-foreground font-medium transition-all duration-300 border border-transparent", style: {
                backgroundClip: "padding-box"
            } },
            react_1["default"].createElement("span", { className: "relative z-10" }, t("title")),
            react_1["default"].createElement("span", { className: "absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-primary to-background p-0.5 -m-0.5" })),
        react_1["default"].createElement(carousel_1.Carousel, { setApi: setApi, className: "w-full", opts: {
                align: "start"
            } },
            react_1["default"].createElement(carousel_1.CarouselContent, null, paginatedPost &&
                paginatedPost.data.length > 0 &&
                paginatedPost.data.map(function (post, index) { return (react_1["default"].createElement(carousel_1.CarouselItem, { key: post.slug, className: "flex basis-1/2 lg:basis-1/3" },
                    react_1["default"].createElement("div", { className: "w-full" },
                        react_1["default"].createElement(PostCard_1["default"], { index: index, post: post, sectionRef: sectionRef })))); })),
            canScrollPrev && (react_1["default"].createElement(carousel_1.CarouselPrevious, { className: "left-2 bg-muted text-muted-foreground" })),
            canScrollNext && (react_1["default"].createElement(carousel_1.CarouselNext, { className: "right-2 bg-muted text-muted-foreground" }))),
        react_1["default"].createElement(link_1["default"], { href: "/blog/", className: "font-semibold flex items-center gap-1 hover:opacity-80", onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
            react_1["default"].createElement("span", null, tButton("viewMore")),
            react_1["default"].createElement(lucide_react_1.MoveRight, { className: "w-4 h-4 transition-transform", style: {
                    transform: isHover ? "translateX(4px)" : "translateX(0)",
                    transition: "opacity 0.3s ease, transform 0.3s ease 0.3s"
                } }))));
};
exports["default"] = Blog;
