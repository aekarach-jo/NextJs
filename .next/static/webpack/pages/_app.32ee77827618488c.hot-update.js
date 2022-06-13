"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./services/fetch-wrapper.js":
/*!***********************************!*\
  !*** ./services/fetch-wrapper.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchWrapper\": function() { return /* binding */ fetchWrapper; }\n/* harmony export */ });\n/* harmony import */ var D_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services */ \"./services/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nvar publicRuntimeConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()().publicRuntimeConfig;\nvar fetchWrapper = {\n    get: get,\n    post: post,\n    post_regis: post_regis,\n    put: put,\n    delete: _delete\n};\nfunction get(url) {\n    console.log(url);\n    var requestOptions = {\n        method: \"GET\",\n        headers: authHeader(url)\n    };\n    console.log(requestOptions);\n    return fetch(url, requestOptions).then(handleResponse);\n}\nfunction post(url, body) {\n    var requestOptions = {\n        method: \"POST\",\n        headers: _objectSpread({\n            \"Content-Type\": \"application/json\"\n        }, authHeader(url)),\n        credentials: \"include\",\n        body: JSON.stringify(body)\n    };\n    console.log(requestOptions);\n    return fetch(url, requestOptions).then(handleResponse);\n}\nfunction post_regis(url, body) {\n    return _post_regis.apply(this, arguments);\n}\nfunction _post_regis() {\n    _post_regis = _asyncToGenerator(D_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, body) {\n        var requestOptions;\n        return D_NextJs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    requestOptions = {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        // credentials: 'include',\n                        body: JSON.stringify(body)\n                    };\n                    console.log(requestOptions);\n                    _ctx.next = 4;\n                    return fetch(url, requestOptions);\n                case 4:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _post_regis.apply(this, arguments);\n}\nfunction put(url, body) {\n    var requestOptions = {\n        method: \"PUT\",\n        headers: _objectSpread({\n            \"Content-Type\": \"application/json\"\n        }, authHeader(url)),\n        body: JSON.stringify(body)\n    };\n    return fetch(url, requestOptions).then(handleResponse);\n}\nfunction _delete(url) {\n    var requestOptions = {\n        method: \"DELETE\",\n        headers: authHeader(url)\n    };\n    return fetch(url, requestOptions).then(handleResponse);\n}\nfunction authHeader(url) {\n    var access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"access_token\");\n    var refresh_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"refresh_token\");\n    var isLoggedIn = services__WEBPACK_IMPORTED_MODULE_3__.adminService.adminValue;\n    var isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl); // url.startsWith =>  return boolean\n    if (isLoggedIn && isApiUrl) {\n        console.log(access_token);\n        return {\n            Authorization: \"Bearer \".concat(access_token),\n            RefreshToken: \"Bearer \".concat(refresh_token)\n        };\n    } else {\n        return {};\n    }\n}\nfunction handleResponse(response) {\n    return response.text().then(function(text) {\n        var data = text && JSON.parse(text);\n        if (!response.ok) {\n            if ([\n                401,\n                403\n            ].includes(response.status) && services__WEBPACK_IMPORTED_MODULE_3__.adminService.adminValue) {\n            // adminService.signout();\n            }\n            var error = data && data.message || response.statusText;\n            return Promise.reject(error);\n        }\n        return data;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q00sT0FBTyxJQUFLUixRQUFRLENBQUNTLFVBQVU7WUFDM0QsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBT0wsSUFBSSxDQUFDO0tBQ2YsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZmV0Y2gtd3JhcHBlci5qcz8zNDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmltcG9ydCB7IGFkbWluU2VydmljZSB9IGZyb20gXCJzZXJ2aWNlc1wiO1xyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hXcmFwcGVyID0ge1xyXG4gICAgZ2V0LFxyXG4gICAgcG9zdCxcclxuICAgIHBvc3RfcmVnaXMsXHJcbiAgICBwdXQsXHJcbiAgICBkZWxldGU6IF9kZWxldGVcclxufTtcclxuZnVuY3Rpb24gZ2V0KHVybCkge1xyXG4gICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiBhdXRoSGVhZGVyKHVybClcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3QodXJsLCBib2R5KSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC4uLmF1dGhIZWFkZXIodXJsKSwgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHBvc3RfcmVnaXModXJsLCBib2R5KSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAvLyBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cocmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1dCh1cmwsIGJvZHkpIHtcclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAuLi5hdXRoSGVhZGVyKHVybCksIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9kZWxldGUodXJsKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IGF1dGhIZWFkZXIodXJsKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGF1dGhIZWFkZXIodXJsKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBnZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICBjb25zdCByZWZyZXNoX3Rva2VuID0gZ2V0Q29va2llKFwicmVmcmVzaF90b2tlblwiKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBhZG1pblNlcnZpY2UuYWRtaW5WYWx1ZTtcclxuICAgIGNvbnN0IGlzQXBpVXJsID0gdXJsLnN0YXJ0c1dpdGgocHVibGljUnVudGltZUNvbmZpZy5hcGlVcmwpOyAvLyB1cmwuc3RhcnRzV2l0aCA9PiAgcmV0dXJuIGJvb2xlYW5cclxuICAgIGlmIChpc0xvZ2dlZEluICYmIGlzQXBpVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICByZXR1cm4geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsIFJlZnJlc2hUb2tlbjogYEJlYXJlciAke3JlZnJlc2hfdG9rZW59YCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0ZXh0ICYmIEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAoWzQwMSwgNDAzXS5pbmNsdWRlcyhyZXNwb25zZS5zdGF0dXMpICYmIGFkbWluU2VydmljZS5hZG1pblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZG1pblNlcnZpY2Uuc2lnbm91dCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IChkYXRhICYmIGRhdGEubWVzc2FnZSkgfHwgcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSk7XHJcbn0iXSwibmFtZXMiOlsiZ2V0Q29va2llIiwiZ2V0Q29uZmlnIiwiYWRtaW5TZXJ2aWNlIiwicHVibGljUnVudGltZUNvbmZpZyIsImZldGNoV3JhcHBlciIsImdldCIsInBvc3QiLCJwb3N0X3JlZ2lzIiwicHV0IiwiZGVsZXRlIiwiX2RlbGV0ZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRoSGVhZGVyIiwiZmV0Y2giLCJ0aGVuIiwiaGFuZGxlUmVzcG9uc2UiLCJib2R5IiwiY3JlZGVudGlhbHMiLCJKU09OIiwic3RyaW5naWZ5IiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaF90b2tlbiIsImlzTG9nZ2VkSW4iLCJhZG1pblZhbHVlIiwiaXNBcGlVcmwiLCJzdGFydHNXaXRoIiwiYXBpVXJsIiwiQXV0aG9yaXphdGlvbiIsIlJlZnJlc2hUb2tlbiIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJwYXJzZSIsIm9rIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0IiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/fetch-wrapper.js\n");

/***/ })

});