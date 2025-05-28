"use client";
"use strict";
exports.__esModule = true;
var ProjectMetrics_1 = require("./ProjectMetrics");
var ProjectOverview_1 = require("./ProjectOverview");
var ProjectInformation_1 = require("./ProjectInformation");
var Gallery_1 = require("./Gallery");
var ProjectDetail = function (_a) {
    var _b, _c;
    var project = _a.project;
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement(ProjectOverview_1["default"], { project: project }),
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between gap-10" },
            React.createElement("div", { className: "md:w-4/6 w-full space-y-5" },
                React.createElement(ProjectInformation_1["default"], { project: project })),
            React.createElement("div", { className: "md:w-2/6 w-full" },
                React.createElement(ProjectMetrics_1["default"], { project: project }))),
        project.images.length > 1 && (React.createElement(Gallery_1["default"], { images: (_b = project.images.slice(1, project.images.length)) !== null && _b !== void 0 ? _b : [], title: "ProjectDetail.webPreview", alt: "View image of " + project.title })),
        project.mobileImages && project.mobileImages.length > 0 && (React.createElement(Gallery_1["default"], { images: (_c = project.mobileImages) !== null && _c !== void 0 ? _c : [], title: "ProjectDetail.mobileAppPreview", alt: "View image of " + project.title, type: "mobile" }))));
};
exports["default"] = ProjectDetail;
