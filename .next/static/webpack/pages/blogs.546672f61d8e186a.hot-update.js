"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Blog = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var query = router.query;\n    console.log(query);\n    var getPermission = function(e) {\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://192.168.1.51:3000/api/admin/getpermission\").then(function(res) {\n            console.log(res.data);\n        }).catch(function(err) {\n            console.log(err.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Blogs \",\n                    query.name\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getPermission,\n                children: \"get User\"\n            }, void 0, false, {\n                fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\NextJs\\\\pages\\\\blogs\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_s(Blog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ007QUFDbkI7O0FBRTFCLElBQU1HLElBQUksR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3BCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNTSxLQUFLLEdBQUdELE1BQU0sQ0FBQ0MsS0FBSztJQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUNsQixJQUFNRyxhQUFhLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3pCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtRQUNsQlQsZ0RBQVMsQ0FBRSxrREFBZ0QsQ0FBRSxDQUN4RFcsSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7WUFDVFAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNWVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztTQUN6QixDQUFDO0tBQ1Q7SUFDRCxxQkFDSSw4REFBQ2QsMERBQU07OzBCQUNILDhEQUFDaUIsSUFBRTs7b0JBQUMsUUFBTTtvQkFBQ1osS0FBSyxDQUFDYSxJQUFJOzs7Ozs7cUJBQU07MEJBQzNCLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVaLGFBQWE7MEJBQUUsVUFBUTs7Ozs7cUJBQVM7Ozs7OzthQUU1QyxDQUNYO0NBQ0w7R0FyQktOLElBQUk7O1FBQ1NILGtEQUFTOzs7QUFEdEJHLEtBQUFBLElBQUk7QUF1QlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanM/YTQwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBCbG9nID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocXVlcnkpXHJcbiAgICBjb25zdCBnZXRQZXJtaXNzaW9uID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xOTIuMTY4LjEuNTE6MzAwMC9hcGkvYWRtaW4vZ2V0cGVybWlzc2lvbmApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDE+QmxvZ3Mge3F1ZXJ5Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRQZXJtaXNzaW9ufT5nZXQgVXNlcjwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2ciXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGF5b3V0IiwiYXhpb3MiLCJCbG9nIiwicHJvcHMiLCJyb3V0ZXIiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJnZXRQZXJtaXNzaW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsImgxIiwibmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/index.js\n");

/***/ })

});