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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout/Layout */ \"./components/Layout/Layout.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services */ \"./services/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Post = function(param) {\n    var adminData = param.adminData;\n    _s();\n    console.log(adminData);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-25\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"firstname\",\n                            children: \"Firstname\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            type: \"text\",\n                            name: \"firstname\",\n                            id: \"firstname\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"lastname\",\n                            children: \" Lastname \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            type: \"text\",\n                            name: \"lastname\",\n                            id: \"lastname\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            type: \"email\",\n                            name: \"email\",\n                            id: \"email\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \" Password \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"form-control\",\n                            type: \"password\",\n                            name: \"password\",\n                            id: \"password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"footer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn btn-secondary\",\n                                    \"data-bs-dismiss\": \"modal\",\n                                    children: \"\\u0E22\\u0E01\\u0E40\\u0E25\\u0E34\\u0E01\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"btn btn-primary\",\n                                    onClick: function() {\n                                        return onSubmitEdit();\n                                    },\n                                    children: \"\\u0E1A\\u0E31\\u0E19\\u0E17\\u0E36\\u0E01\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                            lineNumber: 50,\n                            columnNumber: 12\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Post page\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: adminData.user.email\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: adminData.user.firstname\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\[id].js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ29CO0FBQ0w7QUFFRDtBQUNBOztBQUl4QyxJQUFNSyxJQUFJLEdBQUcsZ0JBQW1CO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7O0lBQ3ZCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDO0lBQ3RCLElBQU1HLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUUxQixJQUFJTSxNQUFNLENBQUNDLFVBQVUsRUFBRTtRQUNyQixxQkFBTyw4REFBQ0MsS0FBRztzQkFBQyxZQUFVOzs7OztpQkFBTSxDQUFDO0tBQzlCO0lBRUQscUJBQ0UsOERBQUNWLGdFQUFNOzswQkFDTCw4REFBQ1UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjswQkFDN0IsNEVBQUNDLE1BQUk7O3NDQUNILDhEQUFDQyxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsV0FBVztzQ0FBQyxXQUFTOzs7OztpQ0FBUTtzQ0FDNUMsOERBQUNDLE9BQUs7NEJBQ0pKLFNBQVMsRUFBQyxjQUFjOzRCQUN4QkssSUFBSSxFQUFDLE1BQU07NEJBQ1hDLElBQUksRUFBQyxXQUFXOzRCQUNoQkMsRUFBRSxFQUFDLFdBQVc7Ozs7O2lDQUNkO3NDQUNGLDhEQUFDTCxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsVUFBVTtzQ0FBQyxZQUFVOzs7OztpQ0FBUTtzQ0FDNUMsOERBQUNDLE9BQUs7NEJBQ0pKLFNBQVMsRUFBQyxjQUFjOzRCQUN4QkssSUFBSSxFQUFDLE1BQU07NEJBQ1hDLElBQUksRUFBQyxVQUFVOzRCQUNmQyxFQUFFLEVBQUMsVUFBVTs7Ozs7aUNBQ2I7c0NBQ0YsOERBQUNMLE9BQUs7NEJBQUNDLE9BQU8sRUFBQyxPQUFPO3NDQUFDLE9BQUs7Ozs7O2lDQUFRO3NDQUNwQyw4REFBQ0MsT0FBSzs0QkFDSkosU0FBUyxFQUFDLGNBQWM7NEJBQ3hCSyxJQUFJLEVBQUMsT0FBTzs0QkFDWkMsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLEVBQUUsRUFBQyxPQUFPOzs7OztpQ0FDVjtzQ0FDRiw4REFBQ0wsT0FBSzs0QkFBQ0MsT0FBTyxFQUFDLFVBQVU7c0NBQUMsWUFBVTs7Ozs7aUNBQVE7c0NBQzVDLDhEQUFDQyxPQUFLOzRCQUNKSixTQUFTLEVBQUMsY0FBYzs0QkFDeEJLLElBQUksRUFBQyxVQUFVOzRCQUNmQyxJQUFJLEVBQUMsVUFBVTs0QkFDZkMsRUFBRSxFQUFDLFVBQVU7Ozs7O2lDQUNiO3NDQUNELDhEQUFDUixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsUUFBUTs7OENBQ2hCLDhEQUFDUSxRQUFNO29DQUFDSCxJQUFJLEVBQUMsUUFBUTtvQ0FBQ0wsU0FBUyxFQUFDLG1CQUFtQjtvQ0FBQ1MsaUJBQWUsRUFBQyxPQUFPOzhDQUFDLHNDQUFNOzs7Ozt5Q0FBcUI7OENBQzNGLDhEQUFYRCxRQUFNO29DQUFDSCxJQUFJLEVBQUMsUUFBUTtvQ0FBQ0wsU0FBUyxFQUFDLGlCQUFpQjtvQ0FBQ1UsT0FBTyxFQUFFOytDQUFNQyxZQUFZLEVBQUU7cUNBQUE7OENBQUUsc0NBQU07Ozs7O3lDQUFTOzs7Ozs7aUNBQ2hHOzs7Ozs7eUJBQ0g7Ozs7O3FCQUNIOzBCQUNOLDhEQUFDQyxJQUFFOzBCQUFDLFdBQVM7Ozs7O3FCQUFLOzBCQUNsQiw4REFBQ0MsSUFBRTswQkFBRW5CLFNBQVMsQ0FBQ29CLElBQUksQ0FBQ0MsS0FBSzs7Ozs7cUJBQU07MEJBQy9CLDhEQUFDQyxHQUFDOzBCQUFFdEIsU0FBUyxDQUFDb0IsSUFBSSxDQUFDRyxTQUFTOzs7OztxQkFBSzs7Ozs7O2FBQzFCLENBQ1Q7Q0FDSDtHQW5ES3hCLElBQUk7O1FBRU9GLGtEQUFTOzs7QUFGcEJFLEtBQUFBLElBQUk7O0FBcURWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW2lkXS5qcz81ODMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFkbWluU2VydmljZSB9IGZyb20gXCJzZXJ2aWNlc1wiO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5jb25zdCBiYXNlVXJsID0gYCR7cHVibGljUnVudGltZUNvbmZpZy5hcGlVcmx9YDtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBhZG1pbkRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFkbWluRGF0YSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctMjVcIiA+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0bmFtZVwiPkZpcnN0bmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgaWQ9XCJmaXJzdG5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdG5hbWVcIj4gTGFzdG5hbWUgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0bmFtZVwiXHJcbiAgICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPiBQYXNzd29yZCA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+4Lii4LiB4LmA4Lil4Li04LiBPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IG9uU3VibWl0RWRpdCgpfT7guJrguLHguJnguJfguLbguIE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgxPlBvc3QgcGFnZTwvaDE+XHJcbiAgICAgIDxoMj57YWRtaW5EYXRhLnVzZXIuZW1haWx9PC9oMj5cclxuICAgICAgPHA+e2FkbWluRGF0YS51c2VyLmZpcnN0bmFtZX08L3A+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llKTtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZVxyXG4gIGNvbnN0IHBhcmFtID0gY29udGV4dC5wYXJhbXMuaWRcclxuICBjb25zdCB0ID0gY29va2llLnNwbGl0KFwiO1wiLCAxKVxyXG4gIGNvbnN0IHRva2VuID0gdFswXS5zcGxpdChcImFjY2Vzc190b2tlbj1cIilcclxuICBjb25zdCBhZG1pbkJ5SWQgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9nZXRCeUlkLyR7cGFyYW19YCwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VuWzFdfWAgfSxcclxuICB9KVxyXG4gIGNvbnN0IGFkbWluRGF0YSA9IGF3YWl0IGFkbWluQnlJZC5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYWRtaW5EYXRhOiBhZG1pbkRhdGEuZGF0YSwgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJMYXlvdXQiLCJnZXRDb29raWUiLCJ1c2VSb3V0ZXIiLCJhZG1pblNlcnZpY2UiLCJQb3N0IiwiYWRtaW5EYXRhIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImlzRmFsbGJhY2siLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiYnV0dG9uIiwiZGF0YS1icy1kaXNtaXNzIiwib25DbGljayIsIm9uU3VibWl0RWRpdCIsImgxIiwiaDIiLCJ1c2VyIiwiZW1haWwiLCJwIiwiZmlyc3RuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogs/[id].js\n");

/***/ })

});