"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_structure_Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/structure/Video */ \"(app-client)/./app/components/structure/Video.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ \"(app-client)/./node_modules/react-transition-group/esm/CSSTransition.js\");\n/* harmony import */ var _components_structure_svgComponents_FondoDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/structure/svgComponents/FondoDesk */ \"(app-client)/./app/components/structure/svgComponents/FondoDesk.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Simula una carga de datos o tiempo de espera antes de mostrar la página\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 10000); // Cambia este valor al tiempo que desees que dure la animación\n    }, []);\n    const [showVideo, setShowVideo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Cambiar el valor de showVideo después de que se complete la animación de carga\n        const timeout = setTimeout(()=>{\n            setShowVideo(false);\n        }, 1000); // Cambia este valor al tiempo que desees que dure la transición del video\n        return ()=>clearTimeout(timeout);\n    }, [\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                in: showVideo && isLoading,\n                timeout: 1000,\n                classNames: \"fade\",\n                unmountOnExit: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_structure_Video__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nreta\\\\OneDrive\\\\Escritorio\\\\paralax\\\\Nueva carpeta\\\\dtaller\\\\app\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nreta\\\\OneDrive\\\\Escritorio\\\\paralax\\\\Nueva carpeta\\\\dtaller\\\\app\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nreta\\\\OneDrive\\\\Escritorio\\\\paralax\\\\Nueva carpeta\\\\dtaller\\\\app\\\\page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                in: !showVideo && !isLoading,\n                timeout: 1000,\n                classNames: \"fade\",\n                unmountOnExit: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_structure_svgComponents_FondoDesk__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nreta\\\\OneDrive\\\\Escritorio\\\\paralax\\\\Nueva carpeta\\\\dtaller\\\\app\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nreta\\\\OneDrive\\\\Escritorio\\\\paralax\\\\Nueva carpeta\\\\dtaller\\\\app\\\\page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nreta\\\\OneDrive\\\\Escritorio\\\\paralax\\\\Nueva carpeta\\\\dtaller\\\\app\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"LF7/NTyxHHorGIlYpH/oknclK+8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWlEO0FBQ0w7QUFDVztBQUVnQjtBQUV4RCxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLDBFQUEwRTtRQUMxRU0sV0FBVztZQUNURCxhQUFhO1FBQ2YsR0FBRyxRQUFRLCtEQUErRDtJQUM1RSxHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNFLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsaUZBQWlGO1FBQ2pGLE1BQU1TLFVBQVVILFdBQVc7WUFDekJFLGFBQWE7UUFDZixHQUFHLE9BQU8sMEVBQTBFO1FBRXBGLE9BQU8sSUFBTUUsYUFBYUQ7SUFDNUIsR0FBRztRQUFDTDtLQUFVO0lBRWQscUJBQ0U7OzBCQUNFLDhEQUFDSCw4REFBYUE7Z0JBQ1pVLElBQUlKLGFBQWFIO2dCQUNqQkssU0FBUztnQkFDVEcsWUFBVztnQkFDWEMsYUFBYTswQkFFYiw0RUFBQ0M7OEJBQ0MsNEVBQUNoQixtRUFBS0E7Ozs7Ozs7Ozs7Ozs7OzswQkFJViw4REFBQ0csOERBQWFBO2dCQUNaVSxJQUFJLENBQUNKLGFBQWEsQ0FBQ0g7Z0JBQ25CSyxTQUFTO2dCQUNURyxZQUFXO2dCQUNYQyxhQUFhOzBCQUViLDRFQUFDQzs4QkFDQyw0RUFBQ1oscUZBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQTBCcEI7R0FuRXdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgVmlkZW8gZnJvbSBcIi4vY29tcG9uZW50cy9zdHJ1Y3R1cmUvVmlkZW9cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuXG5pbXBvcnQgRm9uZG9EZXNrIGZyb20gXCIuL2NvbXBvbmVudHMvc3RydWN0dXJlL3N2Z0NvbXBvbmVudHMvRm9uZG9EZXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNpbXVsYSB1bmEgY2FyZ2EgZGUgZGF0b3MgbyB0aWVtcG8gZGUgZXNwZXJhIGFudGVzIGRlIG1vc3RyYXIgbGEgcMOhZ2luYVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCAxMDAwMCk7IC8vIENhbWJpYSBlc3RlIHZhbG9yIGFsIHRpZW1wbyBxdWUgZGVzZWVzIHF1ZSBkdXJlIGxhIGFuaW1hY2nDs25cbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzaG93VmlkZW8sIHNldFNob3dWaWRlb10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENhbWJpYXIgZWwgdmFsb3IgZGUgc2hvd1ZpZGVvIGRlc3B1w6lzIGRlIHF1ZSBzZSBjb21wbGV0ZSBsYSBhbmltYWNpw7NuIGRlIGNhcmdhXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvd1ZpZGVvKGZhbHNlKTtcbiAgICB9LCAxMDAwKTsgLy8gQ2FtYmlhIGVzdGUgdmFsb3IgYWwgdGllbXBvIHF1ZSBkZXNlZXMgcXVlIGR1cmUgbGEgdHJhbnNpY2nDs24gZGVsIHZpZGVvXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LCBbaXNMb2FkaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgaW49e3Nob3dWaWRlbyAmJiBpc0xvYWRpbmd9IC8vIE1vc3RyYXIgZWwgdmlkZW8gc29sbyBzaSBpc0xvYWRpbmcgZXMgdHJ1ZSB5IHNob3dWaWRlbyBlcyB0cnVlXG4gICAgICAgIHRpbWVvdXQ9ezEwMDB9IC8vIEVsIHRpZW1wbyBkZSBkdXJhY2nDs24gZGUgbGEgdHJhbnNpY2nDs24gZGVsIHZpZGVvICgxIHNlZ3VuZG8gZW4gZXN0ZSBlamVtcGxvKVxuICAgICAgICBjbGFzc05hbWVzPVwiZmFkZVwiXG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VmlkZW8gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG5cbiAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgIGluPXshc2hvd1ZpZGVvICYmICFpc0xvYWRpbmd9IC8vIE1vc3RyYXIgRm9uZG9EZXNrIHNvbG8gc2kgaXNMb2FkaW5nIGVzIGZhbHNlIHkgc2hvd1ZpZGVvIGVzIGZhbHNlXG4gICAgICAgIHRpbWVvdXQ9ezEwMDB9IC8vIEVsIHRpZW1wbyBkZSBkdXJhY2nDs24gZGUgbGEgdHJhbnNpY2nDs24gZGUgRm9uZG9EZXNrICgxIHNlZ3VuZG8gZW4gZXN0ZSBlamVtcGxvKVxuICAgICAgICBjbGFzc05hbWVzPVwiZmFkZVwiXG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Rm9uZG9EZXNrIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgey8qIFxuICAgICAgPHN0eWxlPlxuICAgICAgICB7YFxuICAgICAgICAgIC5mYWRlLWVudGVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYWRlLWVudGVyLWFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZhZGUtZXhpdCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmFkZS1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPiAqL31cblxuICAgICAgey8qIDxkaXY+e2lzTG9hZGluZyA/IDxWaWRlbyAvPiA6IDxGb25kb0Rlc2sgLz59PC9kaXY+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlZpZGVvIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDU1NUcmFuc2l0aW9uIiwiRm9uZG9EZXNrIiwiSG9tZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNldFRpbWVvdXQiLCJzaG93VmlkZW8iLCJzZXRTaG93VmlkZW8iLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaW4iLCJjbGFzc05hbWVzIiwidW5tb3VudE9uRXhpdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});