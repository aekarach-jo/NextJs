"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs/[id]",{

/***/ "./pages/blogs/[id].js":
/*!*****************************!*\
  !*** ./pages/blogs/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar access_token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_3__.getCookie)(\"access_token\");\nconsole.log(access_token);\nvar Post = function(param) {\n    var adminData = param.adminData;\n    _s();\n    console.log(adminData.data);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post page\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: adminData.email\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: adminData.firstname\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDb0I7QUFDTDtBQUVEOztBQUl4QyxJQUFNSSxZQUFZLEdBQUdGLHVEQUFTLENBQUMsY0FBYyxDQUFDO0FBQzlDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsWUFBWSxDQUFDLENBQUM7QUFFMUIsSUFBTUcsSUFBSSxHQUFHLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTOztJQUV2QkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO0lBQzNCLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUUxQixJQUFJTyxNQUFNLENBQUNDLFVBQVUsRUFBRTtRQUNyQixxQkFBTyw4REFBQ0MsS0FBRztzQkFBQyxZQUFVOzs7OztpQkFBTSxDQUFDO0tBQzlCO0lBRUQscUJBQ0UsOERBQUNYLGdFQUFNOzswQkFDTCw4REFBQ1ksSUFBRTswQkFBQyxXQUFTOzs7OztxQkFBSzswQkFDbEIsOERBQUNDLElBQUU7MEJBQUVOLFNBQVMsQ0FBQ08sS0FBSzs7Ozs7cUJBQU07MEJBQzFCLDhEQUFDQyxHQUFDOzBCQUFFUixTQUFTLENBQUNTLFNBQVM7Ozs7O3FCQUFLOzs7Ozs7YUFDckIsQ0FDVDtDQUNIO0dBaEJLVixJQUFJOztRQUdPSixrREFBUzs7O0FBSHBCSSxLQUFBQSxJQUFJOztBQWtCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dzL1tpZF0uanM/NTgzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhZG1pblNlcnZpY2UgfSBmcm9tIFwic2VydmljZXNcIjtcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuY29uc3QgYmFzZVVybCA9IGAke3B1YmxpY1J1bnRpbWVDb25maWcuYXBpVXJsfWA7XHJcbmNvbnN0IGFjY2Vzc190b2tlbiA9IGdldENvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuY29uc29sZS5sb2coYWNjZXNzX3Rva2VuKTtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBhZG1pbkRhdGEgfSkgPT4ge1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKGFkbWluRGF0YS5kYXRhKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxPlBvc3QgcGFnZTwvaDE+XHJcbiAgICAgIDxoMj57YWRtaW5EYXRhLmVtYWlsfTwvaDI+XHJcbiAgICAgIDxwPnthZG1pbkRhdGEuZmlyc3RuYW1lfTwvcD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcHJvcHMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3Byb3BzJywgcGFyYW1zLmlkKTtcclxuICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pO1xyXG4gIGNvbnN0IGFkbWluQnlJZCA9IGF3YWl0IGZldGNoKCBgJHtiYXNlVXJsfS9nZXRCeUlkLyR7cGFyYW1zLmlkfWAsIHtcclxuICAgIG1ldGhvZCA6ICdHRVQnLFxyXG4gICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsYldGcGJDSTZJbUZrYldsdVFHZHRZV2xzTG1OdmJTSXNJbUYwSWpveE5qVTBPVE0xTXpVek9ETTJMQ0pwWVhRaU9qRTJOVFE1TXpVek5UTXNJbVY0Y0NJNk1UWTFOVEF5TVRjMU0zMC50TFJVQVFSWWU5VTRDbmgyd2UtU1cxRlVXQjJSeGdlTjhSZFl6a0hQdVdVYCB9XHJcbn0pXHJcbiAgY29uc29sZS5sb2coXCJhZG1pbklkXCIsYWRtaW5CeUlkKVxyXG4gIGNvbnN0IGFkbWluRGF0YSA9IGF3YWl0IGFkbWluQnlJZC5qc29uKClcclxuICBjb25zb2xlLmxvZyhhZG1pbkRhdGEuZGF0YSk7IFxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhZG1pbkRhdGEsIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1wYXRoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gIGNvbnN0IGFkbWluRGF0YSA9IGF3YWl0IGFkbWluU2VydmljZS5nZXRBZG1pbkFsbCgpXHJcbiAgLy8gY29uc29sZS5sb2coYWRtaW5EYXRhLmRhdGEudXNlcilcclxuICBjb25zdCBwb3N0cyA9IGFkbWluRGF0YS5kYXRhLnVzZXIuc2xpY2UoMCwgMTApO1xyXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoeyBwYXJhbXM6IHsgaWQ6IHBvc3QuaWQudG9TdHJpbmcoKSB9IH0pKTtcclxuICAvLyBjb25zb2xlLmxvZyhwYXRocyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG4vLyAvLyBwYWdlcy9baWRdLmpzXHJcbi8vIGltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyAvLyByb3V0ZXIgaXMgcmVxdWlyZWQgZm9yIGZhbGxiYWNrOiB0cnVlXHJcbi8vIGNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbi8vICAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbi8vICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgIDxoMT5Qb3N0IHBhZ2U8L2gxPlxyXG4vLyAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cclxuLy8gICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbi8vICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBBeGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke3BhcmFtcy5pZH1gKTtcclxuLy8gICBjb25zdCBwb3N0ID0gZGF0YTtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgcG9zdCxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IEF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuLy8gICBjb25zdCBwb3N0cyA9IGRhdGEuc2xpY2UoMCwgMTApO1xyXG4gIC8vIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKChwb3N0KSA9PiAoeyBwYXJhbXM6IHsgaWQ6IHBvc3QuaWQudG9TdHJpbmcoKSB9IH0pKTtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcGF0aHMsXHJcbi8vICAgICBmYWxsYmFjazogdHJ1ZSxcclxuLy8gICB9O1xyXG4vLyB9OyJdLCJuYW1lcyI6WyJheGlvcyIsIkxheW91dCIsImdldENvb2tpZSIsInVzZVJvdXRlciIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJQb3N0IiwiYWRtaW5EYXRhIiwiZGF0YSIsInJvdXRlciIsImlzRmFsbGJhY2siLCJkaXYiLCJoMSIsImgyIiwiZW1haWwiLCJwIiwiZmlyc3RuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs/[id].js\n");

/***/ })

});