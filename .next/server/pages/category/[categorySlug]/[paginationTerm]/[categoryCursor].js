"use strict";
(() => {
var exports = {};
exports.id = 997;
exports.ids = [997,630,679,36,954];
exports.modules = {

/***/ 5450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var pages_category_categorySlug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7878);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pages_category_categorySlug___WEBPACK_IMPORTED_MODULE_0__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, client__WEBPACK_IMPORTED_MODULE_2__]);
([pages_category_categorySlug___WEBPACK_IMPORTED_MODULE_0__, _faustjs_next__WEBPACK_IMPORTED_MODULE_1__, client__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pages_category_categorySlug___WEBPACK_IMPORTED_MODULE_0__["default"]);
async function getStaticProps(context) {
    const { paginationTerm  } = context.params;
    if (!(paginationTerm === "after" || paginationTerm === "before")) {
        return {
            notFound: true
        };
    }
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page: pages_category_categorySlug___WEBPACK_IMPORTED_MODULE_0__["default"],
        client: client__WEBPACK_IMPORTED_MODULE_2__/* .client */ .Lp
    });
}
function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5234:
/***/ ((module) => {

module.exports = require("common-tags");

/***/ }),

/***/ 5861:
/***/ ((module) => {

module.exports = require("fast-xml-parser");

/***/ }),

/***/ 8656:
/***/ ((module) => {

module.exports = require("lodash/defaults.js");

/***/ }),

/***/ 9923:
/***/ ((module) => {

module.exports = require("lodash/isArray.js");

/***/ }),

/***/ 1126:
/***/ ((module) => {

module.exports = require("lodash/isBoolean.js");

/***/ }),

/***/ 1361:
/***/ ((module) => {

module.exports = require("lodash/isFunction.js");

/***/ }),

/***/ 8086:
/***/ ((module) => {

module.exports = require("lodash/isNil.js");

/***/ }),

/***/ 8700:
/***/ ((module) => {

module.exports = require("lodash/isObject.js");

/***/ }),

/***/ 3108:
/***/ ((module) => {

module.exports = require("lodash/isString.js");

/***/ }),

/***/ 7187:
/***/ ((module) => {

module.exports = require("lodash/isUndefined.js");

/***/ }),

/***/ 9010:
/***/ ((module) => {

module.exports = require("lodash/merge.js");

/***/ }),

/***/ 8593:
/***/ ((module) => {

module.exports = require("lodash/noop.js");

/***/ }),

/***/ 3197:
/***/ ((module) => {

module.exports = require("lodash/trim.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5925:
/***/ ((module) => {

module.exports = require("next/router.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4298:
/***/ ((module) => {

module.exports = import("@faustjs/core");;

/***/ }),

/***/ 9577:
/***/ ((module) => {

module.exports = import("@faustjs/core/auth");;

/***/ }),

/***/ 1305:
/***/ ((module) => {

module.exports = import("@faustjs/core/client");;

/***/ }),

/***/ 7326:
/***/ ((module) => {

module.exports = import("@faustjs/core/config");;

/***/ }),

/***/ 2866:
/***/ ((module) => {

module.exports = import("@faustjs/core/utils");;

/***/ }),

/***/ 1542:
/***/ ((module) => {

module.exports = import("@gqty/logger");;

/***/ }),

/***/ 48:
/***/ ((module) => {

module.exports = import("@gqty/react");;

/***/ }),

/***/ 1676:
/***/ ((module) => {

module.exports = import("gqty");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [253,676,664,770,515,878], () => (__webpack_exec__(5450)));
module.exports = __webpack_exports__;

})();