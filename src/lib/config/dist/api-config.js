"use strict";
exports.__esModule = true;
exports.apiConfig = void 0;
var constants_1 = require("../constants");
exports.apiConfig = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || constants_1.API.BASE_URL,
    timeout: Number.parseInt(process.env.API_TIMEOUT || constants_1.API.TIMEOUT, 10),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    endpoints: {
        blog: {
            posts: "" + constants_1.API.BASE_URL + constants_1.API.ENDPOINTS.BLOG
        }
    }
};
