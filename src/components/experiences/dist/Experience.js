"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var ExperienceCard_1 = require("./ExperienceCard");
var data_1 = require("@/lib/data");
var button_1 = require("../ui/button");
var Experience = function () {
    var t = next_intl_1.useTranslations("Experience");
    var sectionRef = react_1.useRef(null);
    return (react_1["default"].createElement("section", { ref: sectionRef, className: "py-4 space-y-4", id: "experience" },
        react_1["default"].createElement(button_1.Button, { className: "hover:bg-primary/5 relative text-sm px-5 py-0.5 bg-background rounded-full text-foreground font-medium transition-all duration-300 border border-transparent", style: {
                backgroundClip: "padding-box"
            } },
            react_1["default"].createElement("span", { className: "relative z-10" }, t("title")),
            react_1["default"].createElement("span", { className: "absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-primary to-background p-0.5 -m-0.5" })),
        data_1.experiences.map(function (experience, index) { return (react_1["default"].createElement(ExperienceCard_1["default"], { key: experience.id, experience: experience, sectionRef: sectionRef, index: index, experienceLength: data_1.experiences.length })); })));
};
exports["default"] = Experience;
