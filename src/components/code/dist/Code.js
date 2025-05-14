"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var prism_react_renderer_1 = require("prism-react-renderer");
var CopyToClipboard_1 = require("../shared/CopyToClipboard");
var Code = function (_a) {
    var _b, _c;
    var children = _a.children, className = _a.className;
    var language = (className === null || className === void 0 ? void 0 : className.replace(/language-/, "")) || "text";
    var _d = react_1.useState(false), isHovered = _d[0], setIsHovered = _d[1];
    return (react_1["default"].createElement(prism_react_renderer_1.Highlight, { language: language, theme: prism_react_renderer_1.themes.github, code: (_c = (_b = children === null || children === void 0 ? void 0 : children.toString()) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "" }, function (_a) {
        var _b, _c;
        var style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
        return (react_1["default"].createElement("pre", { style: style, className: "relative mb-3", onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } },
            react_1["default"].createElement("div", { className: "bg-secondary py-3 p-3 rounded-tl-md rounded-tr-md border" },
                react_1["default"].createElement("span", { className: "text-secondary-foreground" }, language),
                isHovered && (react_1["default"].createElement("div", { className: "absolute right-1 top-1" },
                    react_1["default"].createElement(CopyToClipboard_1["default"], { text: (_c = (_b = children === null || children === void 0 ? void 0 : children.toString()) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : "", className: "bg-gray-200 hover:bg-gray-200 text-secondary-foreground" })))),
            react_1["default"].createElement("div", { className: "p-3 rounded-bl-md rounded-br-md border" }, tokens.map(function (line, i) { return (react_1["default"].createElement("div", __assign({ key: i }, getLineProps({ line: line })),
                react_1["default"].createElement("span", { className: "mr-4 text-muted-foreground text-sm" }, i + 1),
                line.map(function (token, key) { return (react_1["default"].createElement("span", __assign({ key: key }, getTokenProps({ token: token })))); }))); }))));
    }));
};
exports["default"] = Code;
