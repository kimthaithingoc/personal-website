"use client";
"use strict";
exports.__esModule = true;
exports.PostSearch = void 0;
var input_1 = require("@/components/ui/input");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var next_intl_1 = require("next-intl");
function PostSearch(_a) {
    var onSearch = _a.onSearch, _b = _a.initialValue, initialValue = _b === void 0 ? "" : _b;
    var _c = react_1.useState(initialValue), keyword = _c[0], setKeyword = _c[1];
    var t = next_intl_1.useTranslations();
    var onChange = function (e) {
        setKeyword(e.target.value);
        onSearch(e.target.value);
    };
    var clearSearch = function () {
        setKeyword("");
        onSearch("");
    };
    return (React.createElement("div", { className: "flex items-center gap-1 border rounded-full px-3 dark:bg-input" },
        React.createElement(lucide_react_1.Search, { className: "w-4 h-4" }),
        React.createElement(input_1.Input, { value: keyword, onChange: onChange, className: "border-0 focus-visible:ring-0", placeholder: t("Posts.search.placeholder") }),
        keyword && (React.createElement(lucide_react_1.X, { onClick: clearSearch, className: "w-4 h-4 cursor-pointer hover:text-accent" }))));
}
exports.PostSearch = PostSearch;
