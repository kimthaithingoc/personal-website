"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SkillCard_1 = require("./SkillCard");
var Skill = function () {
    var sectionRef = react_1.useRef(null);
    var skills = [
        "TypeScript",
        "HTML5",
        "React",
        "Next",
        "Express",
        "ShadcnUI",
        "Bootstrap",
        "AntDesign",
        "TailwindCSS",
        "Github",
        "Jira",
        "Figma",
    ];
    return (React.createElement("section", { ref: sectionRef, className: "py-4", id: "skill" },
        React.createElement("div", { className: "grid grid-cols-4 gap-2 sm:grid-cols-3 lg:grid-cols-6" }, skills.map(function (skill, index) { return (React.createElement(SkillCard_1["default"], { icon: skill, index: index, sectionRef: sectionRef, key: index })); }))));
};
exports["default"] = Skill;
