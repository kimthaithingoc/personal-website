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
exports.generateMetadata = exports.defaultSeoConfig = void 0;
var site_config_1 = require("./site-config");
exports.defaultSeoConfig = {
    title: site_config_1.siteConfig.name,
    description: site_config_1.siteConfig.description,
    keywords: ["portfolio", "developer", "web development", "next.js", "react"],
    openGraph: {
        title: site_config_1.siteConfig.name,
        description: site_config_1.siteConfig.description,
        url: site_config_1.siteConfig.url,
        siteName: site_config_1.siteConfig.name,
        images: [
            {
                url: "" + site_config_1.siteConfig.url + site_config_1.siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: site_config_1.siteConfig.name
            },
        ],
        locale: "vi_VN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: site_config_1.siteConfig.name,
        description: site_config_1.siteConfig.description,
        creator: "@yourtwitterhandle",
        images: ["" + site_config_1.siteConfig.url + site_config_1.siteConfig.ogImage]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};
function generateMetadata(options) {
    if (options === void 0) { options = {}; }
    return {
        title: options.title || exports.defaultSeoConfig.title,
        description: options.description || exports.defaultSeoConfig.description,
        keywords: options.keywords || exports.defaultSeoConfig.keywords,
        openGraph: __assign(__assign({}, exports.defaultSeoConfig.openGraph), options.openGraph),
        twitter: __assign(__assign({}, exports.defaultSeoConfig.twitter), options.twitter),
        robots: __assign(__assign({}, exports.defaultSeoConfig.robots), options.robots)
    };
}
exports.generateMetadata = generateMetadata;
