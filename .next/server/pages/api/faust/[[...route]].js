"use strict";
(() => {
var exports = {};
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 4298:
/***/ ((module) => {

module.exports = import("@faustjs/core");;

/***/ }),

/***/ 5974:
/***/ ((module) => {

module.exports = import("@faustjs/core/api");;

/***/ }),

/***/ 9942:
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

/***/ 3403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var faust_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9942);
/* harmony import */ var _faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([faust_config__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__]);
([faust_config__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_faustjs_core_api__WEBPACK_IMPORTED_MODULE_1__.apiRouter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3403));
module.exports = __webpack_exports__;

})();