"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 8163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent),
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1770);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4515);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_next__WEBPACK_IMPORTED_MODULE_1__, client__WEBPACK_IMPORTED_MODULE_2__, components__WEBPACK_IMPORTED_MODULE_3__]);
([_faustjs_next__WEBPACK_IMPORTED_MODULE_1__, client__WEBPACK_IMPORTED_MODULE_2__, components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function PostComponent({ post  }) {
    const { useQuery  } = client__WEBPACK_IMPORTED_MODULE_2__/* .client */ .Lp;
    const generalSettings = useQuery().generalSettings;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h4, {
                title: generalSettings.title,
                description: generalSettings.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        post?.title(),
                        " - ",
                        generalSettings.title
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "content content-single",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wrap",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: post?.content() ?? ""
                        }
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$_, {
                copyrightHolder: generalSettings.title
            })
        ]
    });
}
function Page() {
    const { usePost  } = client__WEBPACK_IMPORTED_MODULE_2__/* .client */ .Lp;
    const post = usePost();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostComponent, {
        post: post
    });
}
async function getStaticProps(context) {
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page,
        client: client__WEBPACK_IMPORTED_MODULE_2__/* .client */ .Lp,
        notFound: await (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .is404 */ .bM)(context, {
            client: client__WEBPACK_IMPORTED_MODULE_2__/* .client */ .Lp
        })
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

/***/ })

};
;