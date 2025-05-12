"use strict";
exports.__esModule = true;
exports.siteConfig = void 0;
var constants_1 = require("../constants");
exports.siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME || constants_1.APP_CONFIG.SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || constants_1.APP_CONFIG.SITE_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/",
    ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/images/og-image.jpg",
    links: {
        email: constants_1.SOCIAL_LINKS.EMAIL,
        github: constants_1.SOCIAL_LINKS.GITHUB,
        linkedin: constants_1.SOCIAL_LINKS.LINKEDIN,
        x: constants_1.SOCIAL_LINKS.X
    },
    author: {
        name: constants_1.APP_CONFIG.AUTHOR,
        email: constants_1.APP_CONFIG.CONTACT_EMAIL
    },
    isDevelopment: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production"
};
