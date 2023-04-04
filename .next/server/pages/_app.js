"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7653:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

if (false) {}
/**
 * @type {import("@faustjs/core").Config}
 */ /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)({
    wpUrl: "https://apriatst.artez.nl",
    apiClientSecret: process.env.FAUSTWP_SECRET_KEY
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faust_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7653);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3253);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([faust_config__WEBPACK_IMPORTED_MODULE_1__, _faustjs_next__WEBPACK_IMPORTED_MODULE_2__, client__WEBPACK_IMPORTED_MODULE_4__]);
([faust_config__WEBPACK_IMPORTED_MODULE_1__, _faustjs_next__WEBPACK_IMPORTED_MODULE_2__, client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_faustjs_next__WEBPACK_IMPORTED_MODULE_2__/* .FaustProvider */ .Ou, {
            client: client__WEBPACK_IMPORTED_MODULE_4__/* .client */ .Lp,
            pageProps: pageProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
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

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [253,770], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();