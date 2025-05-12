"use strict";
exports.__esModule = true;
exports.API = void 0;
exports.API = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || "/api",
    ENDPOINTS: {
        BLOG: {
            LIST: "/posts"
        }
    },
    TIMEOUT: "10000"
};
