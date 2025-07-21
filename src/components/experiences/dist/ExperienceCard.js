"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var next_intl_1 = require("next-intl");
var link_1 = require("next/link");
var react_1 = require("react");
var ExperienceCard = function (_a) {
    var experience = _a.experience, sectionRef = _a.sectionRef, index = _a.index, experienceLength = _a.experienceLength;
    var _b = react_1.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    var tExp = next_intl_1.useTranslations("Experience");
    var tProject = next_intl_1.useTranslations("ProjectData");
    var tExperience = next_intl_1.useTranslations("ExperienceData." + experience.code);
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
    return (react_1["default"].createElement("div", { className: utils_1.cn("group transition-all cursor-default py-3 hover:bg-primary/5", index === experienceLength - 1 ? "" : "border-b"), style: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease " + index * 0.1 + "s"
        } },
        react_1["default"].createElement("div", { className: "flex justify-between items-center gap-2" },
            react_1["default"].createElement("div", { className: "transition-all space-y-3 w-5/6" },
                react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                    react_1["default"].createElement("h3", { className: "text-xl font-semibold" }, experience.position),
                    react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                        react_1["default"].createElement("div", { className: "flex items-center text-gray-700 dark:text-gray-300" },
                            react_1["default"].createElement(lucide_react_1.Briefcase, { className: "mr-1 h-4 w-4" }),
                            react_1["default"].createElement("span", null, tExperience("company", { fallback: experience.company }))),
                        react_1["default"].createElement("div", { className: "mt-1 flex items-center text-gray-500 dark:text-gray-400 sm:mt-0" },
                            react_1["default"].createElement(lucide_react_1.MapPin, { className: "mr-1 h-4 w-4" }),
                            react_1["default"].createElement("span", null, tExperience("location", { fallback: experience.location }))))),
                react_1["default"].createElement("ul", { className: "ml-5 list-disc space-y-1 text-gray-600 dark:text-gray-400 text-justify" }, experience.description.map(function (_, i) { return (react_1["default"].createElement("li", { key: i }, tExperience("description." + i))); })),
                react_1["default"].createElement("div", { className: "flex flex-wrap gap-2" },
                    react_1["default"].createElement("span", { className: "font-semibold" },
                        tExp("projects"),
                        ":"),
                    experience.projects.length === 0
                        ? "-"
                        : experience.projects.map(function (project) { return (react_1["default"].createElement(link_1["default"], { href: "/portfolio/project/" + project.id, key: project.id, className: "rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200" }, tProject(project.code + ".title"))); }))),
            react_1["default"].createElement("span", { className: "flex items-center justify-end font-semibold text-lg w-1/6" },
                experience.startDate,
                " - ",
                experience.endDate))));
};
exports["default"] = ExperienceCard;
