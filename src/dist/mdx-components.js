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
exports.useMDXComponents = void 0;
var image_1 = require("next/image");
function useMDXComponents(components) {
    return __assign({ img: function (props) { return (React.createElement(image_1["default"], __assign({ style: { width: "100%", height: "auto" } }, props, { alt: props.alt }))); } }, components);
}
exports.useMDXComponents = useMDXComponents;
