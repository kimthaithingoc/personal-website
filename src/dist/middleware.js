"use strict";
exports.__esModule = true;
exports.config = void 0;
var middleware_1 = require("next-intl/middleware");
var routing_1 = require("./i18n/routing");
exports["default"] = middleware_1["default"](routing_1.routing);
exports.config = {
    matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
