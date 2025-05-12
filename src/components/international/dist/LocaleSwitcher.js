"use strict";
exports.__esModule = true;
var react_1 = require("react");
var next_intl_1 = require("next-intl");
var routing_1 = require("@/i18n/routing");
var utils_1 = require("@/lib/utils");
var select_1 = require("../ui/select");
var LocaleSwitcherSelect_1 = require("./LocaleSwitcherSelect");
var LocaleSwitcher = function () {
    var t = next_intl_1.useTranslations("LocaleSwitcher");
    var locale = next_intl_1.useLocale();
    return (react_1["default"].createElement(LocaleSwitcherSelect_1["default"], { defaultValue: locale }, routing_1.routing.locales.map(function (cur) { return (react_1["default"].createElement(select_1.SelectItem, { className: utils_1.cn("cursor-pointer", cur === locale && "bg-secondary"), key: cur, value: cur }, t("locale", { locale: cur }))); })));
};
exports["default"] = LocaleSwitcher;
