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
var Code_1 = require("./components/code/Code");
var InlineCode_1 = require("./components/code/InlineCode");
var PostLink_1 = require("./components/link/PostLink");
var button_1 = require("./components/ui/button");
function useMDXComponents(components) {
    return __assign({ img: function (props) { return (React.createElement(image_1["default"], __assign({ style: { width: "100%", height: "auto" } }, props, { alt: props.alt }))); }, h1: function (_a) {
            var children = _a.children;
            return (React.createElement("h1", { className: "text-4xl text-accent font-bold mb-3" }, children));
        }, h2: function (_a) {
            var children = _a.children;
            return (React.createElement("h2", { className: "text-lg font-bold mb-3" }, children));
        }, h3: function (_a) {
            var children = _a.children;
            return (React.createElement("h3", { className: "text-base font-bold mb-3" }, children));
        }, ul: function (props) { return (React.createElement("ul", __assign({ className: "list-disc pl-6 pb-4 w-full mb-0" }, props))); }, ol: function (props) { return React.createElement("ol", __assign({ className: "list-decimal pl-6 pb-4 w-full" }, props)); }, p: function (_a) {
            var children = _a.children;
            return React.createElement("h1", { className: "mb-3 text-justify" }, children);
        }, blockquote: function (props) { return (React.createElement("blockquote", __assign({ className: "border-l-3 pl-3 my-3" }, props))); }, a: PostLink_1["default"], pre: function (_a) {
            var children = _a.children;
            return React.createElement("pre", { className: "mb-3" }, children);
        }, hr: function () { return React.createElement("hr", { className: "mb-4" }); }, code: function (props) {
            var className = props.className, children = props.children;
            if (className) {
                return React.createElement(Code_1["default"], __assign({}, props));
            }
            return React.createElement(InlineCode_1["default"], null, children);
        }, button: function (_a) {
            var children = _a.children;
            return React.createElement(button_1.Button, { className: "mb-3" }, children);
        } }, components);
}
exports.useMDXComponents = useMDXComponents;
