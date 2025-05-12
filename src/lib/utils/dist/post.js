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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getPostPagination = exports.getPostsDescending = exports.retrieveMetadataFromMdx = exports.getAllPostSlugs = exports.getPostBySlug = exports.contentDirectory = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
exports.contentDirectory = path_1["default"].join(process.cwd(), "src/content/blog");
exports.getPostBySlug = function (slug) { return __awaiter(void 0, void 0, void 0, function () {
    var metadata;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("@/content/blog/" + slug + ".mdx"); })];
            case 1:
                metadata = (_a.sent()).metadata;
                return [2 /*return*/, __assign({ slug: slug }, metadata)];
        }
    });
}); };
// Retrieve slugs from post routes
exports.getAllPostSlugs = function () { return __awaiter(void 0, void 0, Promise, function () {
    var slugs;
    return __generator(this, function (_a) {
        slugs = fs_1.readdirSync(exports.contentDirectory, { encoding: "utf-8" }).map(function (dirent) { return dirent.replace(/\.mdx$/, ""); });
        return [2 /*return*/, slugs];
    });
}); };
// Retrieve all posts
exports.retrieveMetadataFromMdx = function () { return __awaiter(void 0, void 0, void 0, function () {
    var slugs, posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getAllPostSlugs()];
            case 1:
                slugs = _a.sent();
                posts = Promise.all(slugs.map(function (slug) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, exports.getPostBySlug(slug)];
                    });
                }); }));
                return [2 /*return*/, posts];
        }
    });
}); };
// Get sort by newest posts
exports.getPostsDescending = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.retrieveMetadataFromMdx()];
            case 1:
                posts = _a.sent();
                posts.sort(function (a, b) { return +new Date(b.publishDate) - +new Date(a.publishDate); });
                return [2 /*return*/, posts];
        }
    });
}); };
// Get post pagination
exports.getPostPagination = function (_a) {
    var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, _d = _a.search, search = _d === void 0 ? "" : _d, _e = _a.sort, sort = _e === void 0 ? "publishDate" : _e, _f = _a.order, order = _f === void 0 ? "desc" : _f, _g = _a.fields, fields = _g === void 0 ? [] : _g, _h = _a.filters, filters = _h === void 0 ? {} : _h;
    return __awaiter(void 0, void 0, Promise, function () {
        var allPosts, currentPage, pageSize, filteredPosts, keyword_1, startIndex, endIndex, paginatedPosts, posts, total, totalPages;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, exports.retrieveMetadataFromMdx()];
                case 1:
                    allPosts = _j.sent();
                    currentPage = Math.max(1, page);
                    pageSize = Math.max(1, Math.min(limit, 100));
                    filteredPosts = allPosts;
                    // Search
                    if (search !== "") {
                        keyword_1 = search.toLowerCase();
                        filteredPosts = filteredPosts.filter(function (post) {
                            return post.title.toLowerCase().includes(keyword_1) ||
                                post.description.toLowerCase().includes(keyword_1);
                        });
                    }
                    // Filter
                    if (Object.keys(filters).length > 0) {
                        filteredPosts = filteredPosts.filter(function (post) {
                            return Object.entries(filters).every(function (_a) {
                                var key = _a[0], value = _a[1];
                                if (key in post) {
                                    //@ts-expect-error - key is in post
                                    var postValue = post[key];
                                    if (typeof value === "string") {
                                        return postValue.toLowerCase().includes(value.toLowerCase());
                                    }
                                    else if (Array.isArray(value)) {
                                        return value.includes(postValue);
                                    }
                                    else {
                                        return postValue === value;
                                    }
                                }
                                return false;
                            });
                        });
                    }
                    // Sort
                    if (sort && sort !== "") {
                        filteredPosts = filteredPosts.sort(function (a, b) {
                            // @ts-expect-error -- sort is in post
                            var valueA = a[sort];
                            // @ts-expect-error -- sort is in post
                            var valueB = b[sort];
                            if (sort === "publishDate") {
                                return order === "asc"
                                    ? +new Date(valueA) - +new Date(valueB)
                                    : +new Date(valueB) - +new Date(valueA);
                            }
                            if (typeof valueA === "string" && typeof valueB === "string") {
                                return order === "asc"
                                    ? valueA.localeCompare(valueB)
                                    : valueB.localeCompare(valueA);
                            }
                            return order === "asc"
                                ? valueA > valueB
                                    ? 1
                                    : -1
                                : valueA < valueB
                                    ? 1
                                    : -1;
                        });
                    }
                    startIndex = (currentPage - 1) * pageSize;
                    endIndex = startIndex + pageSize;
                    paginatedPosts = filteredPosts.slice(startIndex, endIndex);
                    posts = paginatedPosts;
                    if (fields && fields.length > 0) {
                        posts = paginatedPosts.map(function (post) {
                            var selectedFields = {};
                            fields.forEach(function (field) {
                                // @ts-expect-error - field is in post
                                selectedFields[field] = post[field];
                            });
                            return selectedFields;
                        });
                    }
                    total = filteredPosts.length;
                    totalPages = Math.ceil(total / pageSize);
                    return [2 /*return*/, {
                            data: posts,
                            meta: {
                                page: currentPage,
                                limit: pageSize,
                                total: total,
                                totalPages: totalPages,
                                hasPrevPage: currentPage > 1,
                                hasNextPage: currentPage < totalPages
                            }
                        }];
            }
        });
    });
};
