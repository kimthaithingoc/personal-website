"use strict";
exports.__esModule = true;
exports.PUBLIC_ROUTES = exports.ROUTES = void 0;
exports.ROUTES = {
    HOME: "/",
    PORTFOLIO: "/portfolio",
    PORTFOLIO_DETAIL: "/portfolio/:id",
    BLOG: "/blog",
    BLOG_DETAIL: "/blog/:id"
};
exports.PUBLIC_ROUTES = [
    exports.ROUTES.HOME,
    exports.ROUTES.BLOG,
    exports.ROUTES.PORTFOLIO,
    exports.ROUTES.BLOG_DETAIL,
    exports.ROUTES.PORTFOLIO_DETAIL,
];
