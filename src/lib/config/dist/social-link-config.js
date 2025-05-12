"use strict";
exports.__esModule = true;
exports.socialLinks = void 0;
var social_link_1 = require("../utils/social-link");
var site_config_1 = require("./site-config");
exports.socialLinks = social_link_1.getSocialLinks(site_config_1.siteConfig);
