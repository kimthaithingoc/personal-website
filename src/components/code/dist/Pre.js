"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CopyToClipboard_1 = require("../shared/CopyToClipboard");
var Pre = function (_a) {
    var _b;
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "relative rounded-md border" },
        react_1["default"].createElement("div", { className: "absolute right-0.5 top-0.5" },
            react_1["default"].createElement(CopyToClipboard_1["default"], { text: (_b = children === null || children === void 0 ? void 0 : children.toString()) !== null && _b !== void 0 ? _b : "" })),
        react_1["default"].createElement("pre", { className: "overflow-auto p-3" }, children)));
};
exports["default"] = Pre;
