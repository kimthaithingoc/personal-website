"use strict";
exports.__esModule = true;
exports.getResourceIcon = void 0;
var react_1 = require("react");
var ResourceLink_1 = require("./ResourceLink");
var constants_1 = require("@/lib/constants");
var lucide_react_1 = require("lucide-react");
var icons_1 = require("../icons");
exports.getResourceIcon = function (type) {
    var icon;
    switch (type) {
        case constants_1.ResourceType.Demo:
            icon = lucide_react_1.ExternalLink;
            break;
        case constants_1.ResourceType.Document:
            icon = lucide_react_1.FileText;
            break;
        case constants_1.ResourceType.Github:
            icon = icons_1.Github;
            break;
        case constants_1.ResourceType.Figma:
            icon = icons_1.Figma;
            break;
        default:
            icon = lucide_react_1.Link;
            break;
    }
    return icon;
};
var Resource = function (_a) {
    var resources = _a.resources, title = _a.title;
    return (resources &&
        resources.length > 0 &&
        resources.map(function (resource) { return (react_1["default"].createElement(ResourceLink_1["default"], { ariaLabel: "View resource of " + title + " on " + resource.type, href: resource.url, icon: exports.getResourceIcon(resource.type), key: resource.type })); }));
};
exports["default"] = Resource;
