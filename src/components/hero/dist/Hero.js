"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var DownloadResume_1 = require("../shared/DownloadResume");
var Hero = function () {
    var t = next_intl_1.useTranslations();
    return (react_1["default"].createElement("section", { className: "py-4", id: "hero" },
        react_1["default"].createElement("div", { className: "flex flex-col gap-3" },
            react_1["default"].createElement("div", { className: "space-y-2" },
                react_1["default"].createElement("h3", { className: "font-bold tracking-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl" },
                    t("Hero.hi"),
                    " ",
                    t("config.myName")),
                react_1["default"].createElement("span", { className: "text-muted-foreground text-lg lg:text-4xl md:text-3xl sm:text-2xl font-semibold" }, t("Hero.i")),
                react_1["default"].createElement("span", { className: "text-xl lg:text-5xl md:text-4xl sm:text-3xl font-semibold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent" }, t("Hero.jobTitle"))),
            react_1["default"].createElement("span", { className: "sm:text-base lg:text-lg text-sm font-medium text-muted-foreground text-justify" }, t("Hero.description")),
            react_1["default"].createElement("div", { className: "flex flex-1" },
                react_1["default"].createElement(DownloadResume_1["default"], null)))));
};
exports["default"] = Hero;
