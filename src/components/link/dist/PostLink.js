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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var config_1 = require("@/lib/config");
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var PostLink = function (_a) {
    var children = _a.children, href = _a.href, props = __rest(_a, ["children", "href"]);
    var isInternal = href === null || href === void 0 ? void 0 : href.startsWith(config_1.siteConfig.url);
    if (isInternal && href) {
        return (React.createElement(link_1["default"], { href: href, className: "text-blue-500 font-medium" }, children));
    }
    return (React.createElement("a", __assign({ className: "text-blue-500 font-medium gap-1 inline-flex items-center", href: href, target: "_blank", rel: "noopener noreferrer", "data-link-type": "mdx-link", "aria-label": "Link to " + href }, props),
        children,
        React.createElement(lucide_react_1.MoveUpRight, { className: "w-4 h-4" })));
};
exports["default"] = PostLink;
