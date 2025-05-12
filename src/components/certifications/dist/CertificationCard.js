"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var react_1 = require("react");
var link_1 = require("next/link");
var next_intl_1 = require("next-intl");
var CertificationCard = function (_a) {
    var certification = _a.certification, sectionRef = _a.sectionRef, index = _a.index;
    var t = next_intl_1.useTranslations();
    var _b = react_1.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    react_1.useEffect(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (react_1["default"].createElement(link_1["default"], { href: certification.credentialUrl || "", target: "_blank", rel: "noopener noreferrer", "aria-label": "View live demo of " + certification.name, className: "group overflow-hidden rounded-md shadow-inner transition-all border", style: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease " + index * 0.1 + "s"
        } },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "relative h-36 overflow-hidden sm:h-52 rounded-md " },
                react_1["default"].createElement(image_1["default"], { src: certification.image, alt: certification.name, fill: true, className: "object-cover rounded-md transition-transform duration-500 group-hover:scale-105" }),
                react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
                react_1["default"].createElement("div", { className: "absolute bottom-0 left-0 right-0 flex items-end gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" },
                    react_1["default"].createElement("div", { className: "flex flex-col gap-1" },
                        react_1["default"].createElement("h3", { className: "font-bold text-white" }, certification.name),
                        react_1["default"].createElement("span", { className: "text-gray-200 dark:text-gray-400 text-justify sm:text-sm text-xs" }, certification.issuer),
                        react_1["default"].createElement("span", { className: "text-gray-200 dark:text-gray-400 text-justify text-xs" },
                            t("Date.normal", { value: new Date(certification.date) }),
                            certification.expires &&
                                " - " + t("Date.normal", {
                                    value: new Date(certification.expires)
                                }))),
                    certification.credentialUrl && (react_1["default"].createElement("div", { className: "rounded-full p-2 text-gray-200 transition-transform hover:scale-110 dark:text-white" },
                        react_1["default"].createElement(lucide_react_1.ExternalLink, { className: "h-5 w-5" }))))))));
};
exports["default"] = CertificationCard;
