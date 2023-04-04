"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 9308:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FaustProvider)
/* harmony export */ });
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var _server_getProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9951);
/* harmony import */ var _gqty_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_getProps_js__WEBPACK_IMPORTED_MODULE_2__, _gqty_client_js__WEBPACK_IMPORTED_MODULE_3__]);
([_server_getProps_js__WEBPACK_IMPORTED_MODULE_2__, _gqty_client_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/**
 * The FaustProvider is a React component required to properly facilitate SSR and SSG for Faust.js.
 *
 * @see https://faustjs.org/docs/next/guides/ssr-ssg#rehydration-using-faustprovider-
 */
function FaustProvider({ children, pageProps, client, }) {
    client.setAsRoot();
    const { useHydrateCache, auth: { useHydrateCache: useAuthHydrateCache }, } = client;
    const cacheSnapshot = pageProps === null || pageProps === void 0 ? void 0 : pageProps[_server_getProps_js__WEBPACK_IMPORTED_MODULE_2__/* .CLIENT_CACHE_PROP */ .wS];
    const authSnapshot = pageProps === null || pageProps === void 0 ? void 0 : pageProps[_server_getProps_js__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_CLIENT_CACHE_PROP */ .S3];
    useHydrateCache({
        cacheSnapshot: lodash_isNil_js__WEBPACK_IMPORTED_MODULE_0__(cacheSnapshot) ? undefined : cacheSnapshot,
    });
    useAuthHydrateCache({
        cacheSnapshot: lodash_isNil_js__WEBPACK_IMPORTED_MODULE_0__(authSnapshot) ? undefined : authSnapshot,
    });
    const value = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
        client,
    }), [client]);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gqty_client_js__WEBPACK_IMPORTED_MODULE_3__/* .FaustContext.Provider */ .l.Provider, { value: value }, children));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4323:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* reexport safe */ _FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__.O)
/* harmony export */ });
/* harmony import */ var _FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__]);
_FaustProvider_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8656);

let nextConfig = {
    revalidate: 900,
};
function config(cfg) {
    nextConfig = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_0__({}, cfg, nextConfig, {
        revalidate: 900,
    });
    return nextConfig;
}


/***/ }),

/***/ 732:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: config, createRedirects, withFaust

// EXTERNAL MODULE: ./node_modules/@faustjs/next/dist/mjs/config/config.js
var config = __webpack_require__(6265);
// EXTERNAL MODULE: external "lodash/trim.js"
var trim_js_ = __webpack_require__(3197);
// EXTERNAL MODULE: external "lodash/isFunction.js"
var isFunction_js_ = __webpack_require__(1361);
;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/config/withFaust.js


async function createRedirects(nextConfig, redirectFn, previewDestination = '/preview') {
    let redirects = [];
    const previewQuery = [
        {
            type: 'query',
            key: 'preview',
            value: 'true',
        },
    ];
    if (isFunction(redirectFn)) {
        redirects = await redirectFn();
    }
    let previewPath = trim(previewDestination, '/');
    if (nextConfig === null || nextConfig === void 0 ? void 0 : nextConfig.trailingSlash) {
        previewPath += '/';
    }
    redirects.unshift({
        source: `/((?!${previewPath}).*)`,
        has: previewQuery,
        destination: `/${previewPath}`,
        permanent: false,
    });
    if (nextConfig === null || nextConfig === void 0 ? void 0 : nextConfig.i18n) {
        /**
         * All redirect sources are automatically prefixed with available locales
         * when i18n is configured, so our previous rule won't match '/'. We need
         * an extra rule to catch each locale's root path.
         *
         * https://nextjs.org/docs/api-reference/next.config.js/redirects#redirects-with-i18n-support
         */
        redirects.unshift({
            source: nextConfig.trailingSlash ? '/:lang/' : '/:lang',
            has: previewQuery,
            destination: `/:lang/${previewPath}`,
            permanent: false,
            locale: false,
        });
    }
    return redirects;
}
/**
 * A helper function to merge Faust.js related Next.js config with a user defined Next.js config.
 *
 * @param {NextConfig} config
 * @param {withFaustConfig} withFaustConfig
 * @returns {NextConfig}
 */
function withFaust(config, withFaustConfig) {
    const { previewDestination } = withFaustConfig || {};
    const nextConfig = config !== null && config !== void 0 ? config : {};
    const existingRedirects = nextConfig.redirects;
    nextConfig.redirects = () => createRedirects(nextConfig, existingRedirects, previewDestination);
    return nextConfig;
}

;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/config/index.js




/***/ }),

/***/ 3253:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ou": () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_4__.O),
/* harmony export */   "bM": () => (/* reexport safe */ _server_index_js__WEBPACK_IMPORTED_MODULE_3__.bM),
/* harmony export */   "fJ": () => (/* reexport safe */ _server_index_js__WEBPACK_IMPORTED_MODULE_3__.fJ),
/* harmony export */   "s3": () => (/* reexport safe */ _gqty_index_js__WEBPACK_IMPORTED_MODULE_1__.s3)
/* harmony export */ });
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(732);
/* harmony import */ var _gqty_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);
/* harmony import */ var _log_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2238);
/* harmony import */ var _server_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5895);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4323);
/* harmony import */ var _middleware_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_gqty_index_js__WEBPACK_IMPORTED_MODULE_1__, _log_index_js__WEBPACK_IMPORTED_MODULE_2__, _server_index_js__WEBPACK_IMPORTED_MODULE_3__, _components_index_js__WEBPACK_IMPORTED_MODULE_4__]);
([_gqty_index_js__WEBPACK_IMPORTED_MODULE_1__, _log_index_js__WEBPACK_IMPORTED_MODULE_2__, _server_index_js__WEBPACK_IMPORTED_MODULE_3__, _components_index_js__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 428:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ FaustContext),
/* harmony export */   "s": () => (/* binding */ getClient)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var _gqty_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8593);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8700);
/* harmony import */ var lodash_merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9010);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__, _gqty_react__WEBPACK_IMPORTED_MODULE_1__, _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__]);
([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__, _gqty_react__WEBPACK_IMPORTED_MODULE_1__, _hooks_index_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FaustContext = react__WEBPACK_IMPORTED_MODULE_5__.createContext({});
/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/explicit-module-boundary-types */
function getClient(clientConfig, createReactClientOpts) {
    var _a;
    const coreClient = (0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.getClient)(clientConfig);
    let reactClientOpts = {
        defaults: {
            // Set this flag as "true" if your usage involves React Suspense
            // Keep in mind that you can overwrite it in a per-hook basis
            suspense: false,
            // Set this flag based on your needs
            staleWhileRevalidate: false,
        },
    };
    if (lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(createReactClientOpts)) {
        reactClientOpts = lodash_merge_js__WEBPACK_IMPORTED_MODULE_4__(reactClientOpts, createReactClientOpts);
    }
    const reactClient = (0,_gqty_react__WEBPACK_IMPORTED_MODULE_1__.createReactClient)(coreClient, reactClientOpts);
    const authReactClient = (0,_gqty_react__WEBPACK_IMPORTED_MODULE_1__.createReactClient)(coreClient.auth, reactClientOpts);
    const haveServerContext = lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__((_a = clientConfig.context) === null || _a === void 0 ? void 0 : _a.apiClient);
    let nextClient;
    function useClient() {
        var _a;
        let client = (_a = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext)) === null || _a === void 0 ? void 0 : _a.client;
        if (haveServerContext || !lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(client)) {
            client = nextClient;
        }
        return client;
    }
    function useAuthClient() {
        var _a;
        let client = (_a = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext)) === null || _a === void 0 ? void 0 : _a.client;
        if (haveServerContext || !lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(client)) {
            client = nextClient;
        }
        return client.auth;
    }
    const hooks = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .createHooks */ .H)(useClient);
    const authHooks = (0,_hooks_index_js__WEBPACK_IMPORTED_MODULE_6__/* .createAuthHooks */ .N)(useAuthClient);
    function useIsLoading() {
        const { isLoading } = nextClient.useQuery().$state;
        const isAuthLoading = nextClient.auth.useQuery().$state.isLoading;
        return isLoading || isAuthLoading;
    }
    function setAsRoot() {
        nextClient.useQuery = reactClient.useQuery;
        nextClient.useLazyQuery = reactClient.useLazyQuery;
        nextClient.useTransactionQuery = reactClient.useTransactionQuery;
        nextClient.usePaginatedQuery = reactClient.usePaginatedQuery;
        nextClient.useMutation = reactClient.useMutation;
        nextClient.useSubscription = reactClient.useSubscription;
        nextClient.useClient = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext);
            return nextClient;
        };
        nextClient.auth.useQuery = authReactClient.useQuery;
        nextClient.auth.useLazyQuery = authReactClient.useLazyQuery;
        nextClient.auth.useTransactionQuery = authReactClient.useTransactionQuery;
        nextClient.auth.usePaginatedQuery = authReactClient.usePaginatedQuery;
        nextClient.auth.useMutation = authReactClient.useMutation;
        nextClient.auth.useSubscription = authReactClient.useSubscription;
        nextClient.auth.useClient = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(FaustContext);
            return nextClient.auth;
        };
        nextClient.setAsRoot = lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__;
    }
    nextClient = Object.assign(Object.assign(Object.assign(Object.assign({ client: coreClient }, reactClient), { auth: Object.assign(Object.assign(Object.assign({ client: coreClient.auth }, authReactClient), authHooks), { useClient: useAuthClient, useIsLoading }), setAsRoot, context: clientConfig.context }), hooks), { useClient,
        useIsLoading });
    return nextClient;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2903:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ createHooks),
/* harmony export */   "N": () => (/* binding */ createAuthHooks)
/* harmony export */ });
/* harmony import */ var _useAuth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2257);
/* harmony import */ var _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6991);
/* harmony import */ var _useMutation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(437);
/* harmony import */ var _usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1223);
/* harmony import */ var _useQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4799);
/* harmony import */ var _useSubscription_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9199);
/* harmony import */ var _useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9478);
/* harmony import */ var _useHydrateCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4003);
/* harmony import */ var _useCategory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8630);
/* harmony import */ var _usePosts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8263);
/* harmony import */ var _usePost_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1003);
/* harmony import */ var _usePage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9860);
/* harmony import */ var _usePreview_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6038);
/* harmony import */ var _usePreviewNode_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4750);
/* harmony import */ var _useLogin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8381);
/* harmony import */ var _useLogout_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1564);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAuth_js__WEBPACK_IMPORTED_MODULE_0__, _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__, _useMutation_js__WEBPACK_IMPORTED_MODULE_2__, _usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_3__, _useQuery_js__WEBPACK_IMPORTED_MODULE_4__, _useSubscription_js__WEBPACK_IMPORTED_MODULE_5__, _useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_6__, _useCategory_js__WEBPACK_IMPORTED_MODULE_8__, _usePost_js__WEBPACK_IMPORTED_MODULE_10__, _usePage_js__WEBPACK_IMPORTED_MODULE_11__, _usePreview_js__WEBPACK_IMPORTED_MODULE_12__, _usePreviewNode_js__WEBPACK_IMPORTED_MODULE_13__, _useLogin_js__WEBPACK_IMPORTED_MODULE_14__, _useLogout_js__WEBPACK_IMPORTED_MODULE_15__]);
([_useAuth_js__WEBPACK_IMPORTED_MODULE_0__, _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__, _useMutation_js__WEBPACK_IMPORTED_MODULE_2__, _usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_3__, _useQuery_js__WEBPACK_IMPORTED_MODULE_4__, _useSubscription_js__WEBPACK_IMPORTED_MODULE_5__, _useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_6__, _useCategory_js__WEBPACK_IMPORTED_MODULE_8__, _usePost_js__WEBPACK_IMPORTED_MODULE_10__, _usePage_js__WEBPACK_IMPORTED_MODULE_11__, _usePreview_js__WEBPACK_IMPORTED_MODULE_12__, _usePreviewNode_js__WEBPACK_IMPORTED_MODULE_13__, _useLogin_js__WEBPACK_IMPORTED_MODULE_14__, _useLogout_js__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function createHooks(useClient) {
    const useQuery = (0,_useQuery_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .U)(useClient);
    const useMutation = (0,_useMutation_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .U)(useClient);
    return {
        useQuery,
        useLazyQuery: (0,_useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .U)(useClient),
        useMutation,
        usePaginatedQuery: (0,_usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .U)(useClient),
        useSubscription: (0,_useSubscription_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .U)(useClient),
        useTransactionQuery: (0,_useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .U)(useClient),
        useHydrateCache: (0,_useHydrateCache_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .U)(useClient),
        useCategory: (0,_useCategory_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .U)(useQuery),
        usePosts: (0,_usePosts_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .U)(useQuery),
        usePost: (0,_usePost_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .U)(useQuery),
        usePage: (0,_usePage_js__WEBPACK_IMPORTED_MODULE_11__/* .create */ .U)(useQuery),
    };
}
function createAuthHooks(useClient) {
    const useQuery = (0,_useQuery_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .U)(useClient);
    const useAuth = (0,_useAuth_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .U)();
    const useMutation = (0,_useMutation_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .U)(useClient);
    return {
        useQuery,
        useAuth,
        useLazyQuery: (0,_useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .U)(useClient),
        useMutation,
        usePaginatedQuery: (0,_usePaginatedQuery_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .U)(useClient),
        useSubscription: (0,_useSubscription_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .U)(useClient),
        useTransactionQuery: (0,_useTransactionQuery_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .U)(useClient),
        useHydrateCache: (0,_useHydrateCache_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .U)(useClient),
        useCategory: (0,_useCategory_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .U)(useQuery),
        usePosts: (0,_usePosts_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .U)(useQuery),
        usePost: (0,_usePost_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .U)(useQuery),
        usePage: (0,_usePage_js__WEBPACK_IMPORTED_MODULE_11__/* .create */ .U)(useQuery),
        usePreview: (0,_usePreview_js__WEBPACK_IMPORTED_MODULE_12__/* .create */ .U)(useAuth, useQuery),
        usePreviewNode: (0,_usePreviewNode_js__WEBPACK_IMPORTED_MODULE_13__/* .create */ .U)(useAuth, useQuery),
        useLogin: (0,_useLogin_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .U)(useMutation),
        useLogout: (0,_useLogout_js__WEBPACK_IMPORTED_MODULE_15__/* .create */ .U)(),
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2257:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9577);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8700);
/* harmony import */ var lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7187);
/* harmony import */ var lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8593);
/* harmony import */ var lodash_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__]);
([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// eslint-disable-next-line import/extensions







function create() {
    return (useAuthOptions) => {
        const options = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__({}, useAuthOptions, {
            shouldRedirect: true,
        });
        const { shouldRedirect } = options;
        const { authType, loginPagePath } = (0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)();
        const [{ isAuthenticated, isLoading, authResult }, setState] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
            isAuthenticated: undefined,
            isLoading: true,
            authResult: undefined,
        });
        // Check if a user is authenticated
        (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
            if (typeof window === 'undefined') {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            let mounted = true;
            /* eslint-disable @typescript-eslint/no-floating-promises */
            (async () => {
                if (!mounted) {
                    return;
                }
                const auth = await (0,_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_1__.ensureAuthorization)({
                    redirectUri: window.location.href,
                    loginPageUri: `/${lodash_trim_js__WEBPACK_IMPORTED_MODULE_6__(loginPagePath, '/')}/?redirect_uri=${encodeURIComponent(window.location.href)}`,
                });
                if (!mounted) {
                    return;
                }
                setState({
                    authResult: auth,
                    isAuthenticated: auth === true,
                    isLoading: false,
                });
            })();
            return () => {
                mounted = false;
            };
        }, [loginPagePath]);
        // Redirect the user to the login page if they are not authenticated
        (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
            // Do not redirect if specified in UseAuthOptions.
            if (!shouldRedirect) {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            if (typeof window === 'undefined') {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_4__(isAuthenticated) || isAuthenticated === true) {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_5__;
            }
            // The user is not authenticated. Redirect them to the login page.
            const timeout = setTimeout(() => {
                if (!lodash_isObject_js__WEBPACK_IMPORTED_MODULE_3__(authResult)) {
                    return;
                }
                if (authType === 'local' && authResult.login) {
                    window.location.replace(authResult.login);
                }
                if (authType === 'redirect' && authResult.redirect) {
                    window.location.replace(authResult.redirect);
                }
            }, 200);
            return () => {
                clearTimeout(timeout);
            };
        }, [shouldRedirect, isAuthenticated, authResult, authType]);
        return { isAuthenticated, isLoading, authResult };
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8630:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3108);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8656);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions





function create(useQuery) {
    return (args) => {
        const { query } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { category } = useQuery();
        let params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_3__({}, args);
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasCategoryId */ .Uh)(query)) {
            params = Object.assign({ id: query.categoryId, idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.ID }, params);
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasCategorySlug */ .gD)(query)) {
            params = Object.assign({ id: query.categorySlug, idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.SLUG }, params);
        }
        if (!lodash_isString_js__WEBPACK_IMPORTED_MODULE_2__(params.id)) {
            throw new Error('Invalid parameters for useCategory, you must send in an id or specify known URL params in your config');
        }
        return category(params);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useCheckFaustContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);

function useCheckFaustContext(reactContext) {
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(reactContext);
    const client = context === null || context === void 0 ? void 0 : context.client;
    if (client === undefined) {
        throw new Error(`Could not find "client" in the context. Wrap the root component in a <FaustProvider>. See: https://faustjs.org/docs/next/reference/faust-provider`);
    }
    return context;
}


/***/ }),

/***/ 4003:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3108);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8700);
/* harmony import */ var lodash_isFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1361);




function create(useClient) {
    return ({ cacheSnapshot, shouldRefetch }) => {
        const snapshotCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
        const { client } = useClient();
        if (lodash_isString_js__WEBPACK_IMPORTED_MODULE_1__(cacheSnapshot) && snapshotCache.current !== cacheSnapshot) {
            snapshotCache.current = cacheSnapshot;
            client.hydrateCache({ cacheSnapshot, shouldRefetch: false });
        }
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
            if (!lodash_isObject_js__WEBPACK_IMPORTED_MODULE_2__(client) || !lodash_isFunction_js__WEBPACK_IMPORTED_MODULE_3__(client.refetch)) {
                return;
            }
            if (shouldRefetch) {
                client.refetch(client.query).catch(console.error);
            }
        }, [shouldRefetch, client]);
    };
}


/***/ }),

/***/ 6991:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_1__]);
_client_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function create(useClient) {
    return (...args) => {
        (0,_useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useCheckFaustContext */ .l)(_client_js__WEBPACK_IMPORTED_MODULE_1__/* .FaustContext */ .l);
        return useClient().useLazyQuery(...args);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8381:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9577);
/* harmony import */ var _faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2866);
/* harmony import */ var lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8593);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__]);
([_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions



function create(useMutation) {
    return (options) => {
        const { useMutationOptions } = options || {};
        const [loginMutation, { isLoading, data, error }] = useMutation((mutation, args) => {
            const { username, email, password } = args;
            const { code, error: mutationError } = mutation.generateAuthorizationCode({
                input: {
                    username,
                    email,
                    password,
                },
            }) || {};
            if (mutationError) {
                return { error: mutationError };
            }
            return { code };
        }, useMutationOptions);
        /**
         * Exchange a username/email and password for an authorization code
         *
         * @param {string} usernameEmail A WordPress username or email
         * @param {string} password The password for the username/email
         *
         * @returns Promise<void>
         */
        async function login(usernameEmail, password) {
            await loginMutation({
                args: {
                    username: (0,_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(usernameEmail) ? undefined : usernameEmail,
                    email: (0,_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__.isValidEmail)(usernameEmail) ? usernameEmail : undefined,
                    password,
                },
            });
        }
        // If there is a successful login, and a redirect_uri query param present in the
        // url, then redirect the user to the redirect_uri.
        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
            if (typeof window === 'undefined') {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__;
            }
            if (!data || !data.code) {
                return lodash_noop_js__WEBPACK_IMPORTED_MODULE_2__;
            }
            let mounted = true;
            void (async () => {
                if (!mounted) {
                    return;
                }
                await (0,_faustjs_core_auth__WEBPACK_IMPORTED_MODULE_0__.fetchAccessToken)(data.code);
                if (!mounted) {
                    return;
                }
                const redirectUri = (0,_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_1__.getQueryParam)(window.location.href, 'redirect_uri');
                if (redirectUri) {
                    window.location.replace(redirectUri);
                }
            })();
            return () => {
                mounted = false;
            };
        }, [data]);
        return { login, isLoading, data, error };
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1564:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4298);
/* harmony import */ var _faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7326);
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__]);
([_faustjs_core__WEBPACK_IMPORTED_MODULE_0__, _faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// eslint-disable-next-line import/extensions



function create() {
    return () => {
        const { apiBasePath } = (0,_faustjs_core__WEBPACK_IMPORTED_MODULE_0__.config)();
        if (lodash_isNil_js__WEBPACK_IMPORTED_MODULE_2__(apiBasePath)) {
            throw new Error('apiBasePath needs to be defined to use the useLogout hook');
        }
        const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
        const [isLoggedOut, setIsLoggedOut] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
        /**
         * Callable function to logout the existing user.
         */
        async function logout() {
            setIsLoading(true);
            const res = await fetch(`${apiBasePath}/${_faustjs_core_config__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_ENDPOINT_PARTIAL_PATH}`, {
                method: 'POST',
            });
            setIsLoading(false);
            if (res.ok) {
                setIsLoggedOut(true);
            }
            else {
                setIsLoggedOut(false);
            }
        }
        return { logout, isLoggedOut, isLoading };
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 437:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_1__]);
_client_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function create(useClient) {
    return (...args) => {
        (0,_useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useCheckFaustContext */ .l)(_client_js__WEBPACK_IMPORTED_MODULE_1__/* .FaustContext */ .l);
        return useClient().useMutation(...args);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9860:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3108);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions





function create(useQuery) {
    return (args) => {
        const { query } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { page } = useQuery();
        let params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__({}, args);
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPageId */ .jj)(query)) {
            params = Object.assign({ id: query.pageId, idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.ID }, params);
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPageUri */ .S5)(query)) {
            params = Object.assign({ id: query.pageUri.join('/'), idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.URI }, params);
        }
        if (!lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__(params.id)) {
            throw new Error('Invalid parameters for usePage, you must send in an id or specify known URL params in your config');
        }
        return page(params);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1223:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_1__]);
_client_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function create(useClient) {
    return (...args) => {
        (0,_useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useCheckFaustContext */ .l)(_client_js__WEBPACK_IMPORTED_MODULE_1__/* .FaustContext */ .l);
        return useClient().usePaginatedQuery(...args);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1003:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5925);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3108);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions





function create(useQuery) {
    return (args) => {
        const router = (0,next_router_js__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        const { post } = useQuery();
        let params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_2__({}, args);
        const { query } = router;
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPostId */ .OJ)(query)) {
            params = Object.assign({ id: query.postId, idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.ID }, params);
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPostSlug */ .nh)(query)) {
            params = Object.assign({ id: query.postSlug, idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.SLUG }, params);
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__/* .hasPostUri */ .kN)(query)) {
            params = Object.assign({ id: query.postUri.join('/'), idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.URI }, params);
        }
        if (!lodash_isString_js__WEBPACK_IMPORTED_MODULE_3__(params.id)) {
            throw new Error('Invalid parameters for usePost, you must send in an id or specify known URL params in your config');
        }
        return post(params);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8263:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5925);
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8656);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1825);



function create(useQuery) {
    return (args) => {
        const { query } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
        const { posts } = useQuery();
        const params = lodash_defaults_js__WEBPACK_IMPORTED_MODULE_1__({}, args);
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .hasCategoryId */ .Uh)(query)) {
            params.where = Object.assign({ categoryId: Number(query.categoryId) }, params.where);
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .hasCategorySlug */ .gD)(query)) {
            params.where = Object.assign({ categoryName: query.categorySlug }, params.where);
        }
        return posts(params);
    };
}


/***/ }),

/***/ 6038:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7187);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5925);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions




function create(useAuth, useQuery) {
    function usePreview() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const { query: { p, page_id: pageId }, } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const { isAuthenticated } = useAuth();
        const { post: postQuery, page: pageQuery } = useQuery();
        const isPage = !!pageId;
        const args = {
            pageId: isPage ? p : undefined,
            postId: !isPage ? p : undefined,
        };
        if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_1__(isAuthenticated) || isAuthenticated !== true) {
            return;
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .hasPageId */ .jj)(args)) {
            const page = pageQuery({
                id: (_a = args === null || args === void 0 ? void 0 : args.pageId) !== null && _a !== void 0 ? _a : '',
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.DATABASE_ID,
            });
            const mostRecentPageRevision = (_d = (_c = (_b = page === null || page === void 0 ? void 0 : page.revisions({ first: 1 })) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.node;
            // eslint-disable-next-line consistent-return
            return {
                type: 'page',
                page: (mostRecentPageRevision === null || mostRecentPageRevision === void 0 ? void 0 : mostRecentPageRevision.id) ? mostRecentPageRevision : page,
            };
        }
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__/* .hasPostId */ .OJ)(args)) {
            const post = postQuery({
                id: (_e = args === null || args === void 0 ? void 0 : args.postId) !== null && _e !== void 0 ? _e : '',
                idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.DATABASE_ID,
            });
            const mostRecentPostRevision = (_h = (_g = (_f = post === null || post === void 0 ? void 0 : post.revisions({ first: 1 })) === null || _f === void 0 ? void 0 : _f.edges) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.node;
            // eslint-disable-next-line consistent-return
            return {
                type: 'post',
                post: (mostRecentPostRevision === null || mostRecentPostRevision === void 0 ? void 0 : mostRecentPostRevision.id) ? mostRecentPostRevision : post,
            };
        }
    }
    return usePreview;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4750:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8086);
/* harmony import */ var lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7187);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// eslint-disable-next-line import/extensions




function create(useAuth, useQuery) {
    function usePreviewNode() {
        var _a;
        const { isReady, query: { p: postIdQuery, preview: previewQuery, typeName: typeNameQuery }, } = (0,next_router_js__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
        const { isAuthenticated } = useAuth();
        const { contentNode } = useQuery();
        const unreadyResponse = {
            typeName: undefined,
            node: undefined,
        };
        const notFoundResponse = {
            typeName: null,
            node: null,
        };
        if (!isReady) {
            return unreadyResponse;
        }
        if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__(isAuthenticated) || isAuthenticated !== true) {
            return unreadyResponse;
        }
        if (lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(postIdQuery) || lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(previewQuery) || previewQuery !== 'true') {
            throw new Error(`usePreviewNode() requires the "p" and "preview" ` +
                `URL query parameters i.e. ?p=123&preview=true`);
        }
        if (Array.isArray(postIdQuery)) {
            throw new Error('usePreviewNode() requires the "p" URL query parameter to be a string');
        }
        const node = contentNode({
            id: postIdQuery,
            idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.ContentNodeIdTypeEnum.DATABASE_ID,
            asPreview: true,
        });
        /**
         * `contentNode` returns null if the post does not exist
         * or if the preview has not been generated yet
         *
         * @link https://github.com/wp-graphql/wp-graphql/issues/2166
         */
        if (node === null) {
            return notFoundResponse;
        }
        if (!lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(typeNameQuery) && Array.isArray(typeNameQuery)) {
            throw new Error('usePreviewNode() requires the "postType" URL' +
                'query parameter to be a string');
        }
        // eslint-disable-next-line no-underscore-dangle
        const previewNodeTypeName = typeNameQuery !== null && typeNameQuery !== void 0 ? typeNameQuery : node === null || node === void 0 ? void 0 : node.__typename;
        if (lodash_isNil_js__WEBPACK_IMPORTED_MODULE_1__(previewNodeTypeName)) {
            return notFoundResponse;
        }
        const previewNode = (_a = node === null || node === void 0 ? void 0 : node.$on) === null || _a === void 0 ? void 0 : _a[previewNodeTypeName];
        /**
         * `previewNodeTypeName` could be `undefined` here if the postType
         * URL query param is manually specified and it is not valid.
         */
        if (lodash_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__(previewNode)) {
            return notFoundResponse;
        }
        return {
            typeName: previewNodeTypeName,
            node: previewNode,
        };
    }
    return usePreviewNode;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4799:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_1__]);
_client_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function create(useClient) {
    return (...args) => {
        (0,_useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useCheckFaustContext */ .l)(_client_js__WEBPACK_IMPORTED_MODULE_1__/* .FaustContext */ .l);
        return useClient().useQuery(...args);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9199:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_1__]);
_client_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function create(useClient) {
    return (...args) => {
        (0,_useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useCheckFaustContext */ .l)(_client_js__WEBPACK_IMPORTED_MODULE_1__/* .FaustContext */ .l);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return useClient().useSubscription(...args);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9478:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_1__]);
_client_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function create(useClient) {
    return (fn, ...args) => {
        (0,_useCheckFaustContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useCheckFaustContext */ .l)(_client_js__WEBPACK_IMPORTED_MODULE_1__/* .FaustContext */ .l);
        return useClient().useTransactionQuery(fn, ...args);
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 332:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s3": () => (/* reexport safe */ _client_js__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2903);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_js__WEBPACK_IMPORTED_MODULE_0__, _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__]);
([_client_js__WEBPACK_IMPORTED_MODULE_0__, _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2238:
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9771);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_log_js__WEBPACK_IMPORTED_MODULE_0__]);
_log_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9771:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export logQueries */
/* harmony import */ var lodash_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8656);
/* harmony import */ var _gqty_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_gqty_logger__WEBPACK_IMPORTED_MODULE_1__]);
_gqty_logger__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function logQueries(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
client, options) {
    try {
        const logOptions = defaults({}, options, {
            showSelections: false,
            showCache: false,
        });
        const logger = /* #__PURE__ */ createLogger(client.client, logOptions);
        const authLogger = /* #__PURE__ */ createLogger(client.auth.client, logOptions);
        const unsubLogger = logger.start();
        const unsubAuthLogger = authLogger.start();
        return /* #__PURE__ */ () => {
            unsubLogger();
            unsubAuthLogger();
        };
    }
    catch (e) {
        return () => { };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _sitemaps_handleSitemapRequests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6758);



/***/ }),

/***/ 7367:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports createRootSitemapIndex, createPagesSitemap, handleSitemapPath, handleRobotsTxt */
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5234);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5861);
/* harmony import */ var _handleSitemapRequests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6758);




const parserConfig = {
    ignoreAttributes: false,
    preserveOrder: false,
    unpairedTags: ['xml', 'xml-stylesheet'],
    processEntities: true,
    htmlEntities: true,
};
/**
 * Creates the root XML sitemap index (e.g. /sitemap.xml) that lists all the
 * sitemaps provided as the sitemapPaths property in the config, in addition to
 * a sitemap for the Next.js pages provided as the pages property in the config.
 *
 * @param {NextRequest} req The Next.js middleware request object
 * @param {NormalizedConfig} normalizedConfig A normalized config object
 * @returns {Response|undefined}
 */
async function createRootSitemapIndex(req, normalizedConfig, isMiddleware = true) {
    var _a;
    const { pages, sitemapPathsToIgnore, replaceUrls, wpUrl } = normalizedConfig;
    if (!req.url) {
        throw new Error('Request object must have URL');
    }
    let wpSitemapUrl = '';
    let frontendUrl = '';
    if (isMiddleware) {
        const { pathname, origin } = new URL(req.url);
        frontendUrl = origin;
        wpSitemapUrl = `${trimSlashes(wpUrl)}/${trimSlashes(pathname)}`;
    }
    else {
        // get sitemapIndexPath config param
        // fetch sitemap from WP
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        wpSitemapUrl = `${trimSlashes(wpUrl)}/${trimSlashes(normalizedConfig.sitemapIndexPath)}`;
        frontendUrl = normalizedConfig.frontendUrl;
    }
    let sitemaps = [];
    if (!isUndefined(pages) && isArray(pages) && pages.length) {
        let sitemapFaustPagesUrl = '';
        if (isMiddleware) {
            sitemapFaustPagesUrl = `${trimSlashes(frontendUrl)}/${trimSlashes(FAUST_PAGES_PATHNAME)}`;
        }
        else {
            sitemapFaustPagesUrl = `${trimSlashes(frontendUrl)}/sitemap.xml?sitemap=${trimSlashes(FAUST_PAGES_PATHNAME)}`;
        }
        sitemaps = [
            ...sitemaps,
            {
                loc: encodeURI(sitemapFaustPagesUrl),
            },
        ];
    }
    const res = await fetch(wpSitemapUrl);
    // Don't proxy the sitemap index if the response was not ok.
    if (!res.ok) {
        return undefined;
    }
    const xmlRes = await res.text();
    /**
     * Create a parser to convert our XML data into a JS object
     *
     * @link https://github.com/NaturalIntelligence/fast-xml-parser/blob/HEAD/docs/v4/6.HTMLParsing.md
     */
    const parser = new XMLParser(Object.assign(Object.assign({}, parserConfig), { 
        /**
         * FXP can not determine if a single tag should be parsed as an array or
         * an object, so we need to specify we always want "sitemap" tags to be an
         * array.
         *
         * @see https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/docs/v4/2.XMLparseOptions.md#isarray
         */
        isArray: (tagName) => {
            return tagName === 'sitemap';
        } }));
    // JS object representation of the XML sitemap index
    const parsedSitemapIndex = parser.parse(xmlRes);
    let wpSitemaps = (_a = parsedSitemapIndex === null || parsedSitemapIndex === void 0 ? void 0 : parsedSitemapIndex.sitemapindex) === null || _a === void 0 ? void 0 : _a.sitemap;
    // The XML we parsed was not a proper sitemap
    if (isUndefined(wpSitemaps)) {
        return undefined;
    }
    /**
     * Ignore paths with exact matches to the sitemapPathsToIgnore property
     */
    wpSitemaps = wpSitemaps.filter((sitemap) => {
        const { pathname: sitemapPathname } = new URL(sitemap.loc);
        return !(sitemapPathsToIgnore === null || sitemapPathsToIgnore === void 0 ? void 0 : sitemapPathsToIgnore.includes(sitemapPathname));
    });
    /**
     * Ignore paths from sitemapPathsToIgnore property that end in a wildcard
     */
    const wildcardPathsToIgnore = sitemapPathsToIgnore === null || sitemapPathsToIgnore === void 0 ? void 0 : sitemapPathsToIgnore.filter((path) => path.endsWith('*'));
    wpSitemaps = wpSitemaps.filter((sitemap) => {
        const { pathname: sitemapPathname } = new URL(sitemap.loc);
        let hasWildcard = false;
        wildcardPathsToIgnore === null || wildcardPathsToIgnore === void 0 ? void 0 : wildcardPathsToIgnore.forEach((path) => {
            const pathLessWildcard = path.slice(0, -1);
            if (sitemapPathname.startsWith(pathLessWildcard)) {
                hasWildcard = true;
            }
        });
        return !hasWildcard;
    });
    /**
     * Replace the existing WordPress URL in each "loc" with the headless URL
     * if necessary
     *
     * @example
     * Replaces http://headless.local/wp-sitemap-posts-page-1.xml with
     * http://localhost:3000/wp-sitemap-posts-page-1.xml
     */
    if (replaceUrls) {
        wpSitemaps.forEach((sitemap) => {
            let sitemapUrl = '';
            if (isMiddleware) {
                sitemapUrl = sitemap.loc.replace(trimSlashes(wpUrl), trimSlashes(frontendUrl));
            }
            else {
                const url = new URL(sitemap.loc);
                sitemapUrl = `${trimSlashes(frontendUrl)}/sitemap.xml?sitemap=${trimSlashes(url.pathname)}`;
            }
            sitemaps = [
                ...sitemaps,
                Object.assign(Object.assign({}, sitemap), { loc: sitemapUrl }),
            ];
        });
    }
    else {
        sitemaps = [...sitemaps, ...wpSitemaps];
    }
    return createSitemapIndex(sitemaps);
}
/**
 * Creates a sitemap for the Next.js pages specified in the "pages" config option
 *
 * @param req The Next.js middleware request object
 * @param normalizedConfig A normalized config object
 * @returns {Response|undefined}
 */
function createPagesSitemap(req, normalizedConfig, isMiddleware = true) {
    if (!req.url) {
        throw new Error('Request object must have URL');
    }
    let frontendUrl = '';
    if (isMiddleware) {
        const { origin } = new URL(req.url);
        frontendUrl = origin;
    }
    else {
        frontendUrl = normalizedConfig.frontendUrl;
    }
    const { pages } = normalizedConfig;
    if (isUndefined(pages) || !isArray(pages) || !pages.length) {
        return undefined;
    }
    let urls = [];
    pages.forEach((page) => {
        urls = [
            ...urls,
            {
                loc: `${trimSlashes(frontendUrl)}/${trimSlashes(page.path)}`,
                lastmod: page === null || page === void 0 ? void 0 : page.lastmod,
                changefreq: page === null || page === void 0 ? void 0 : page.changefreq,
                priority: page === null || page === void 0 ? void 0 : page.priority,
            },
        ];
    });
    return createSitemap(urls);
}
/**
 * Handles a request to a sitemap path listed in the sitemapPaths config option
 *
 * @param req The Next.js middleware request object
 * @param normalizedConfig A normalized config object
 * @returns {Promise<Response|Undefined>}
 */
async function handleSitemapPath(req, normalizedConfig, isMiddleware = true) {
    var _a;
    const { wpUrl, replaceUrls } = normalizedConfig;
    if (!req.url) {
        throw new Error('Request object must have URL');
    }
    let wpSitemapUrl = '';
    let frontendUrl = '';
    if (isMiddleware) {
        const { pathname, origin } = new URL(req.url);
        frontendUrl = origin;
        wpSitemapUrl = `${trimSlashes(wpUrl)}/${trimSlashes(pathname)}`;
    }
    else {
        const paramsIndex = req.url.indexOf('?');
        const searchParamString = req.url.substr(paramsIndex);
        const urlParams = new URLSearchParams(searchParamString);
        const sitemapPath = urlParams.get('sitemap');
        wpSitemapUrl = `${trimSlashes(wpUrl)}/${trimSlashes(sitemapPath)}`;
        frontendUrl = normalizedConfig.frontendUrl;
    }
    const res = await fetch(wpSitemapUrl);
    // Don't proxy the sitemap if the response was not ok.
    if (!res.ok) {
        return undefined;
    }
    const xmlRes = await res.text();
    /**
     * Create a parser to convert our XML data into a JS object
     *
     * @link https://github.com/NaturalIntelligence/fast-xml-parser/blob/HEAD/docs/v4/6.HTMLParsing.md
     */
    const parser = new XMLParser(Object.assign(Object.assign({}, parserConfig), { 
        /**
         * FXP can not determine if a single tag should be parsed as an array or
         * an object, so we need to specify we always want "url" tags to be an
         * array.
         *
         * @see https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/docs/v4/2.XMLparseOptions.md#isarray
         */
        isArray: (tagName) => {
            return tagName === 'url';
        } }));
    // JS object representation of the XML sitemap
    const parsedSitemap = parser.parse(xmlRes);
    const wpSitemapUrls = (_a = parsedSitemap === null || parsedSitemap === void 0 ? void 0 : parsedSitemap.urlset) === null || _a === void 0 ? void 0 : _a.url;
    // The XML we parsed was not a proper sitemap
    if (isUndefined(wpSitemapUrls)) {
        return undefined;
    }
    let urls = [];
    if (replaceUrls) {
        /**
         * Replace the existing WordPress URL in each "loc" with the headless URL
         *
         * @example
         * Replaces http://headless.local/wp-sitemap-posts-page-1.xml with
         * http://localhost:3000/wp-sitemap-posts-page-1.xml
         */
        wpSitemapUrls.forEach((url) => {
            urls = [
                ...urls,
                Object.assign(Object.assign({}, url), { loc: url.loc.replace(trimSlashes(wpUrl), trimSlashes(frontendUrl)) }),
            ];
        });
    }
    else {
        urls = wpSitemapUrls;
    }
    return createSitemap(urls);
}
/**
 * Handles a request to the `/robots.txt` path
 *
 * @param req The Next.js middleware request object
 * @param normalizedConfig A normalized config object
 * @returns {Promise<Response|Undefined>}
 */
async function handleRobotsTxt(req, normalizedConfig) {
    const { origin } = new URL(req.url);
    const { sitemapIndexPath, robotsTxt } = normalizedConfig;
    if (robotsTxt === undefined || robotsTxt === null) {
        return undefined;
    }
    const sitemapUrl = `${trimSlashes(origin)}/${trimSlashes(sitemapIndexPath)}`;
    let text = await robotsTxt(sitemapUrl);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    text = stripIndent `
    ${text}
  `;
    const response = new Response(text);
    response.headers.set('Content-Type', 'text/plain');
    return response;
}


/***/ }),

/***/ 6758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports FAUST_PAGES_PATHNAME, FAUST_ROBOTS_PATHNAME, validateConfig, handleSitemapRequests */
/* harmony import */ var _createSitemaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7367);


/**
 * The pathname to the Next.js pages sitemap file. We may want to make this
 * configurable in the future.
 */
const FAUST_PAGES_PATHNAME = '/sitemap-faust-pages.xml';
/**
 * The pathname to the robots.txt file.
 */
const FAUST_ROBOTS_PATHNAME = '/robots.txt';
/**
 * Validates the structure of the user defined config.
 *
 * @param {Partial<HandleSitemapRequestsConfig>} config The user provided config
 */
function validateConfig(config, isMiddleware = true) {
    var _a, _b;
    if (isUndefined(config === null || config === void 0 ? void 0 : config.wpUrl)) {
        throw new Error('wpUrl is required.');
    }
    if (!isString(config === null || config === void 0 ? void 0 : config.wpUrl)) {
        throw new Error('wpUrl must be a string.');
    }
    try {
        // eslint-disable-next-line no-new
        new URL(config.wpUrl);
    }
    catch (e) {
        throw new Error('wpUrl must be a valid URL.');
    }
    if (!isMiddleware) {
        if (isUndefined(config === null || config === void 0 ? void 0 : config.frontendUrl)) {
            throw new Error('frontendUrl is required');
        }
        if (!isString(config === null || config === void 0 ? void 0 : config.frontendUrl)) {
            throw new Error('frontendUrl must be a string');
        }
        try {
            // eslint-disable-next-line no-new
            new URL(config.frontendUrl);
        }
        catch (e) {
            throw new Error('frontendUrl must be a valid URL.');
        }
    }
    if (isUndefined(config === null || config === void 0 ? void 0 : config.sitemapIndexPath)) {
        throw new Error('sitemapIndexPath is required');
    }
    if (!isString(config === null || config === void 0 ? void 0 : config.sitemapIndexPath)) {
        throw new Error('sitemapIndexPath must be a string');
    }
    if (!(config === null || config === void 0 ? void 0 : config.sitemapIndexPath.startsWith('/'))) {
        throw new Error('sitemapIndexPath must start with a forward slash');
    }
    if (!isUndefined(config === null || config === void 0 ? void 0 : config.sitemapPathsToIgnore)) {
        if (!isArray(config.sitemapPathsToIgnore)) {
            throw new Error('sitemapPathsToIgnore must be an array');
        }
        (_a = config === null || config === void 0 ? void 0 : config.sitemapPathsToIgnore) === null || _a === void 0 ? void 0 : _a.forEach((path) => {
            if (!isString(path)) {
                throw new Error('sitemapPathsToIgnore must be an array of strings');
            }
            if (!path.startsWith('/')) {
                throw new Error('Each sitemapPathsToIgnore must start with a forward slash');
            }
            if (path.includes('*') && !path.endsWith('*')) {
                throw new Error('sitemapPathsToIgnore with a wildcard must end with a wildcard');
            }
        });
    }
    // Validate pages structure and required values
    if (!isUndefined(config === null || config === void 0 ? void 0 : config.pages)) {
        if (!isArray(config.pages)) {
            throw new Error('pages must be an array');
        }
        (_b = config === null || config === void 0 ? void 0 : config.pages) === null || _b === void 0 ? void 0 : _b.forEach((page) => {
            if (!isObject(page)) {
                throw new Error('pages must be an array of objects');
            }
            if (isUndefined(page.path)) {
                throw new Error('pages must have a path property');
            }
            if (!isString(page.path)) {
                throw new Error('The pages path property must be a string');
            }
        });
    }
    // Validate replaceUrls is a boolean
    if (!isUndefined(config === null || config === void 0 ? void 0 : config.replaceUrls) && !isBoolean(config === null || config === void 0 ? void 0 : config.replaceUrls)) {
        throw new Error('replaceUrls must be a boolean');
    }
    // Validate robotsTxt is a function
    if (!isUndefined(config === null || config === void 0 ? void 0 : config.robotsTxt) && !isFunction(config === null || config === void 0 ? void 0 : config.robotsTxt)) {
        throw new Error('robotsTxt must be a function');
    }
}
/**
 * Next.js middleware to proxy sitemap requests from the WordPress site.
 *
 * @param req The Next.js middleware request object
 * @param config The user specified config object
 * @returns {Response|undefined} A response object if the current request
 * is for a sitemap that needs to be handled, undefined otherwise
 */
async function handleSitemapRequests(req, config) {
    var _a;
    // Validate config structure
    validateConfig(config);
    // Normalize config if some optional values are missing
    // eslint-disable-next-line prefer-object-spread
    const normalizedConfig = Object.assign({}, { replaceUrls: true }, config);
    const { pathname } = new URL(req.url);
    const { sitemapIndexPath, pages, robotsTxt } = normalizedConfig;
    // Handle the root XML sitemap if specified in the config
    if (pathname === sitemapIndexPath) {
        return createRootSitemapIndex(req, normalizedConfig);
    }
    // Handle the sitemap for the specified Next.js pages if specified in the config
    if (pathname === FAUST_PAGES_PATHNAME && (pages === null || pages === void 0 ? void 0 : pages.length)) {
        return createPagesSitemap(req, normalizedConfig);
    }
    // Handle the robots.txt file if specified in the config
    if (pathname === FAUST_ROBOTS_PATHNAME && robotsTxt) {
        return handleRobotsTxt(req, normalizedConfig);
    }
    // Handle the sitemap index paths specified in the config
    if (pathname.includes('sitemap') &&
        pathname.endsWith('.xml') &&
        !((_a = normalizedConfig === null || normalizedConfig === void 0 ? void 0 : normalizedConfig.sitemapPathsToIgnore) === null || _a === void 0 ? void 0 : _a.includes(pathname))) {
        return handleSitemapPath(req, normalizedConfig);
    }
    /**
     * If the above conditions are not met, return undefined and go on to the
     * next middleware
     */
    return undefined;
}


/***/ }),

/***/ 9951:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S3": () => (/* binding */ AUTH_CLIENT_CACHE_PROP),
/* harmony export */   "bM": () => (/* binding */ is404),
/* harmony export */   "fJ": () => (/* binding */ getNextStaticProps),
/* harmony export */   "wS": () => (/* binding */ CLIENT_CACHE_PROP)
/* harmony export */ });
/* unused harmony exports getProps, getNextServerSideProps */
/* harmony import */ var _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);
/* harmony import */ var lodash_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8700);
/* harmony import */ var lodash_isBoolean_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1126);
/* harmony import */ var lodash_isNil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8086);
/* harmony import */ var next_dist_shared_lib_router_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4964);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6265);
/* harmony import */ var _gqty_client_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(428);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__, _gqty_client_js__WEBPACK_IMPORTED_MODULE_7__]);
([_faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__, _gqty_client_js__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-children-prop */
// eslint-disable-next-line import/extensions









const CLIENT_CACHE_PROP = '__CLIENT_CACHE_PROP';
const AUTH_CLIENT_CACHE_PROP = '__AUTH_CLIENT_CACHE_PROP';
async function getProps(context, { client, Page, props, }) {
    let cacheSnapshot;
    let authSnapshot;
    client.setAsRoot();
    if (!lodash_isNil_js__WEBPACK_IMPORTED_MODULE_3__(Page)) {
        const authClient = client.auth.client;
        const { cacheSnapshot: coreAuthSnapshot } = await authClient.prepareRender(async () => {
            const { cacheSnapshot: coreSnapshot } = await client.prepareReactRender(react__WEBPACK_IMPORTED_MODULE_5__.createElement(next_dist_shared_lib_router_context_js__WEBPACK_IMPORTED_MODULE_4__.RouterContext.Provider
            // eslint-disable-next-line @typescript-eslint/no-explicit-any,react/jsx-no-constructed-context-values
            , { 
                // eslint-disable-next-line @typescript-eslint/no-explicit-any,react/jsx-no-constructed-context-values
                value: { query: Object.assign({}, context.params) } },
                react__WEBPACK_IMPORTED_MODULE_5__.createElement(_gqty_client_js__WEBPACK_IMPORTED_MODULE_7__/* .FaustContext.Provider */ .l.Provider, { value: { client } },
                    react__WEBPACK_IMPORTED_MODULE_5__.createElement(Page, Object.assign({}, props)))));
            cacheSnapshot = coreSnapshot;
        });
        authSnapshot = coreAuthSnapshot;
    }
    return {
        props: Object.assign({ [CLIENT_CACHE_PROP]: cacheSnapshot !== null && cacheSnapshot !== void 0 ? cacheSnapshot : null, [AUTH_CLIENT_CACHE_PROP]: authSnapshot !== null && authSnapshot !== void 0 ? authSnapshot : null }, props),
    };
}
async function is404({ params }, { client }) {
    if (!params) {
        return false;
    }
    const { client: { inlineResolved, query }, } = client;
    let entityExists = false;
    let result;
    try {
        if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasPostId */ .OJ)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.post({
                    id: params.postId,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.ID,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasPostSlug */ .nh)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.post({
                    id: params.postSlug,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.SLUG,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasPostUri */ .kN)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.post({
                    id: params.postUri.join('/'),
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PostIdType.URI,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasPageId */ .jj)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.page({
                    id: params.pageId,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.ID,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasPageUri */ .S5)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.page({
                    id: params.pageUri.join('/'),
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.PageIdType.URI,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasCategoryId */ .Uh)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.category({
                    id: params.categoryId,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.ID,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
        else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__/* .hasCategorySlug */ .gD)(params)) {
            result = inlineResolved(() => {
                var _a;
                return (_a = query.category({
                    id: params.categorySlug,
                    idType: _faustjs_core_client__WEBPACK_IMPORTED_MODULE_0__.CategoryIdType.SLUG,
                })) === null || _a === void 0 ? void 0 : _a.id;
            }, { refetch: true });
        }
    }
    catch (e) {
        return true;
    }
    if (result instanceof Promise) {
        entityExists = !lodash_isNil_js__WEBPACK_IMPORTED_MODULE_3__(await result);
    }
    else {
        entityExists = !lodash_isNil_js__WEBPACK_IMPORTED_MODULE_3__(result);
    }
    return !entityExists;
}
/**
 * This helper function lets you server side render your page with WordPress data
 *
 * @param {GetServerSidePropsContext} context
 * @param {GetNextServerSidePropsConfig} cfg
 * @see https://faustjs.org/docs/next/guides/ssr-ssg#ssr-using-getnextserversideprops
 */
async function getNextServerSideProps(context, cfg) {
    const { notFound, redirect } = cfg;
    if (isBoolean(notFound) && notFound === true) {
        return {
            notFound,
        };
    }
    if (isObject(redirect)) {
        return {
            redirect,
        };
    }
    return getProps(context, cfg);
}
/**
 * This helper function lets you build a static site with your WordPress data
 *
 * @param {GetStaticPropsContext} context
 * @param {GetNextStaticPropsConfig} cfg
 * @see https://faustjs.org/docs/next/guides/ssr-ssg#ssg-using-getnextstaticprops
 */
async function getNextStaticProps(context, cfg) {
    const { notFound, redirect, revalidate } = cfg;
    const nextConfig = (0,_config_config_js__WEBPACK_IMPORTED_MODULE_6__/* .config */ .v)();
    if (lodash_isBoolean_js__WEBPACK_IMPORTED_MODULE_2__(notFound) && notFound === true) {
        return {
            notFound,
        };
    }
    if (lodash_isObject_js__WEBPACK_IMPORTED_MODULE_1__(redirect)) {
        return {
            redirect,
        };
    }
    const pageProps = await getProps(context, cfg);
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (lodash_isObject_js__WEBPACK_IMPORTED_MODULE_1__(pageProps.props)) {
        pageProps.revalidate = !lodash_isNil_js__WEBPACK_IMPORTED_MODULE_3__(revalidate)
            ? revalidate
            : nextConfig.revalidate;
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
    return pageProps;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 794:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export getSitemapProps */
/* harmony import */ var _faustjs_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2866);
/* harmony import */ var _middleware_sitemaps_createSitemaps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7367);
/* harmony import */ var _middleware_sitemaps_handleSitemapRequests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6758);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_0__]);
_faustjs_core_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable import/extensions */



async function getSitemapProps(ctx, config) {
    // config validation with middleware flag
    validateConfig(config, false);
    // Normalize config if some optional values are missing
    const normalizedConfig = Object.assign(Object.assign({}, config), { replaceUrls: true });
    if (!ctx.req.url) {
        throw new Error('A context url is required.');
    }
    const queryParam = getQueryParam(ctx.req.url, 'sitemap');
    if (queryParam === '') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const response = await createRootSitemapIndex(ctx.req, normalizedConfig, false);
        if (!response || (response === null || response === void 0 ? void 0 : response.status) === 404) {
            return {
                notFound: true,
            };
        }
        ctx.res.setHeader('Content-Type', 'application/xml');
        ctx.res.write(await (response === null || response === void 0 ? void 0 : response.text()));
        ctx.res.end();
    }
    if (queryParam !== '' && queryParam !== 'sitemap-faust-pages.xml') {
        const response = await handleSitemapPath(ctx.req, normalizedConfig, false);
        if (!response || (response === null || response === void 0 ? void 0 : response.status) === 404) {
            return {
                notFound: true,
            };
        }
        ctx.res.setHeader('Content-Type', 'application/xml');
        ctx.res.write(await (response === null || response === void 0 ? void 0 : response.text()));
        ctx.res.end();
    }
    if (queryParam !== '' && queryParam === 'sitemap-faust-pages.xml') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const response = createPagesSitemap(ctx.req, normalizedConfig, false);
        ctx.res.setHeader('Content-Type', 'application/xml');
        ctx.res.write(await (response === null || response === void 0 ? void 0 : response.text()));
        ctx.res.end();
    }
    return {
        props: {},
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5895:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bM": () => (/* reexport safe */ _getProps_js__WEBPACK_IMPORTED_MODULE_0__.bM),
/* harmony export */   "fJ": () => (/* reexport safe */ _getProps_js__WEBPACK_IMPORTED_MODULE_0__.fJ)
/* harmony export */ });
/* harmony import */ var _getProps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9951);
/* harmony import */ var _getSitemapProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getProps_js__WEBPACK_IMPORTED_MODULE_0__, _getSitemapProps_js__WEBPACK_IMPORTED_MODULE_1__]);
([_getProps_js__WEBPACK_IMPORTED_MODULE_0__, _getSitemapProps_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1825:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uh": () => (/* reexport */ hasCategoryId),
  "gD": () => (/* reexport */ hasCategorySlug),
  "jj": () => (/* reexport */ hasPageId),
  "S5": () => (/* reexport */ hasPageUri),
  "OJ": () => (/* reexport */ hasPostId),
  "nh": () => (/* reexport */ hasPostSlug),
  "kN": () => (/* reexport */ hasPostUri)
});

// UNUSED EXPORTS: formatUrlPrefix

// EXTERNAL MODULE: external "lodash/isArray.js"
var isArray_js_ = __webpack_require__(9923);
// EXTERNAL MODULE: external "lodash/isObject.js"
var isObject_js_ = __webpack_require__(8700);
// EXTERNAL MODULE: external "lodash/isString.js"
var isString_js_ = __webpack_require__(3108);
// EXTERNAL MODULE: external "lodash/trim.js"
var trim_js_ = __webpack_require__(3197);
;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/utils/assert.js




function hasPropString(prop) {
    return (params) => {
        return isObject_js_(params) && isString_js_(params[prop]);
    };
}
function hasPropStringArray(prop) {
    return (params) => {
        var _a;
        return (isObject_js_(params) && isArray_js_(params[prop]) && isString_js_((_a = params[prop]) === null || _a === void 0 ? void 0 : _a[0]));
    };
}
const hasPostId = hasPropString('postId');
const hasPostSlug = hasPropString('postSlug');
const hasPostUri = hasPropStringArray('postUri');
const hasPageId = hasPropString('pageId');
const hasPageUri = hasPropStringArray('pageUri');
const hasCategoryId = hasPropString('categoryId');
const hasCategorySlug = hasPropString('categorySlug');
function formatUrlPrefix(pathPrefix) {
    if (pathPrefix.length === 1 && pathPrefix === '/') {
        return '';
    }
    const prefix = trim(pathPrefix, '/');
    return `/${prefix}`;
}

;// CONCATENATED MODULE: ./node_modules/@faustjs/next/dist/mjs/utils/index.js



/***/ })

};
;