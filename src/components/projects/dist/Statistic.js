"use client";
"use strict";
exports.__esModule = true;
var next_intl_1 = require("next-intl");
var data_1 = require("@/lib/data");
var StatisticCard_1 = require("./StatisticCard");
var react_1 = require("react");
var Statistic = function () {
    var t = next_intl_1.useTranslations("Statistic");
    var sectionRef = react_1.useRef(null);
    return (React.createElement("section", { ref: sectionRef, className: "py-4 space-y-5 bg-gray-50 dark:bg-gray-800/50" },
        React.createElement("div", { className: "text-center space-y-1" },
            React.createElement("h2", { className: "text-lg font-bold tracking-tight sm:text-xl" }, t("title")),
            React.createElement("p", { className: "text-base text-gray-600 dark:text-gray-400" }, t("description"))),
        React.createElement("div", { className: "grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3" }, data_1.statistics.slice(0, 3).map(function (stat, index) { return (React.createElement(StatisticCard_1["default"], { key: stat.label, stat: stat, index: index, sectionRef: sectionRef })); }))));
};
exports["default"] = Statistic;
