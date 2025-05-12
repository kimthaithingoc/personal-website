"use client";
"use strict";
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
var next_intl_1 = require("next-intl");
var react_1 = require("react");
var PostPagination_1 = require("./PostPagination");
var PostContainer_1 = require("./PostContainer");
var PostSearch_1 = require("./PostSearch");
var hooks_1 = require("@/lib/hooks");
var Empty_1 = require("../shared/Empty");
var navigation_1 = require("next/navigation");
var PostFilter_1 = require("./PostFilter");
var Post = function () {
    var t = next_intl_1.useTranslations();
    var pathname = navigation_1.usePathname();
    var searchParams = navigation_1.useSearchParams();
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var _b = react_1.useState({}), filters = _b[0], setFilters = _b[1];
    var _c = react_1.useState(""), search = _c[0], setSearch = _c[1];
    var _d = react_1.useState([]), posts = _d[0], setPosts = _d[1];
    var _e = react_1.useState(0), totalPages = _e[0], setTotalPages = _e[1];
    var _f = react_1.useState(false), hasNextPage = _f[0], setHasNextPage = _f[1];
    var _g = react_1.useState(false), hasPrevPage = _g[0], setHasPrevPage = _g[1];
    var _h = react_1.useState(0), total = _h[0], setTotal = _h[1];
    var _j = react_1.useState(false), isLoading = _j[0], setIsLoading = _j[1];
    var deboucedSearch = hooks_1.useDebouce(search, 3000);
    var createQueryString = react_1.useCallback(function (name, value) {
        var params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
        return params.toString();
    }, [searchParams]);
    react_1.useEffect(function () {
        var _a, _b, _c;
        if (searchParams.get("page") &&
            ((_a = searchParams.get("page")) === null || _a === void 0 ? void 0 : _a.toString()) !== page.toString()) {
            setPage(parseInt((_c = (_b = searchParams.get("page")) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "1"));
        }
    }, [searchParams, page]);
    react_1.useEffect(function () {
        setIsLoading(true);
        var fetchPosts = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setPosts([]);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("/api/posts", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    page: page,
                                    search: deboucedSearch,
                                    filters: filters
                                })
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        result = _a.sent();
                        setPosts(result.data);
                        setTotalPages(result.meta.totalPages);
                        setHasNextPage(result.meta.hasNextPage);
                        setHasPrevPage(result.meta.hasPrevPage);
                        setTotal(result.meta.total);
                        if (result.meta.page !== page) {
                            createQueryString("page", result.meta.page.toString());
                        }
                        setIsLoading(false);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        setIsLoading(false);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchPosts();
    }, [filters, page, t, deboucedSearch, createQueryString]);
    var onSearch = function (query) {
        setSearch(query);
    };
    return (react_1["default"].createElement("div", { className: "px-8 space-y-4" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4 sm:px-10 lg:px-28 xl:px-44 2xl:px-56 space-y-4" },
            react_1["default"].createElement("div", { className: "w-2/3 mx-auto" },
                react_1["default"].createElement(PostSearch_1.PostSearch, { onSearch: onSearch, initialValue: search })),
            react_1["default"].createElement("div", { className: "mx-auto w-fit" },
                react_1["default"].createElement(PostFilter_1["default"], { setFilters: setFilters, initialFilters: filters === null || filters === void 0 ? void 0 : filters.category })),
            !isLoading && total > 0 && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(PostContainer_1["default"], { posts: posts }),
                react_1["default"].createElement("div", { className: "mt-auto" },
                    react_1["default"].createElement(PostPagination_1["default"], { page: page, hasNextPage: hasNextPage, hasPrevPage: hasPrevPage, totalPages: totalPages, createQueryString: createQueryString, pathname: pathname })))),
            !isLoading && total === 0 && (react_1["default"].createElement("div", { className: "my-auto h-full" },
                react_1["default"].createElement(Empty_1["default"], { item: "posts" }))))));
};
exports["default"] = Post;
