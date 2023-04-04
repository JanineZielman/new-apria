"use strict";
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 7878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4515);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_3__, client__WEBPACK_IMPORTED_MODULE_5__]);
([_faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_3__, client__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const POSTS_PER_PAGE = 6;
function Page() {
    const { useQuery , usePosts , useCategory  } = client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp;
    const { query ={}  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { categorySlug , paginationTerm , categoryCursor  } = query;
    const generalSettings = useQuery().generalSettings;
    const category = useCategory();
    const isBefore = paginationTerm === "before";
    const posts = usePosts({
        after: !isBefore ? categoryCursor : undefined,
        before: isBefore ? categoryCursor : undefined,
        first: !isBefore ? POSTS_PER_PAGE : undefined,
        last: isBefore ? POSTS_PER_PAGE : undefined
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h4, {
                title: generalSettings.title,
                description: generalSettings.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Posts - ",
                        generalSettings?.title
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "content content-single",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            children: [
                                "Category: ",
                                category?.name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Posts */ .V8, {
                            posts: posts.nodes
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .tl, {
                            pageInfo: posts.pageInfo,
                            basePath: `/category/${categorySlug}`
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$_, {
                copyrightHolder: generalSettings.title
            })
        ]
    });
}
async function getStaticProps(context) {
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page,
        client: client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp,
        notFound: await (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .is404 */ .bM)(context, {
            client: client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp
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