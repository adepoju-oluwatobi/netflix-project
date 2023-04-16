"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Row.tsx":
/*!****************************!*\
  !*** ./components/Row.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Thumbnail */ \"./components/Thumbnail.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Row(param) {\n    let { title , movies  } = param;\n    _s();\n    const rowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isMoved, setIsMoved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = (direction)=>{\n        setIsMoved(true);\n        if (rowRef.current) {\n            const {} = rowRef;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-40 space-y-0.5 md:space-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"w-56 cursor-pointer text-sm    font-semibold text-[#e5e5e5] transition    duration-200 hover:text-white md:text-2xl\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group relative md:-ml-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {\n                        className: \"absolute   top-0 bottom-0 left-2 z-48 m-auto    h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125    group-hover:opacity-100\",\n                        onClick: ()=>handleClick(\"left\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: rowRef,\n                        className: \"flex items-center space-x-0.5    overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2\",\n                        children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Thumbnail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {\n                        className: \"absolute   top-0 bottom-0 left-2 z-48 m-auto    h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125    group-hover:opacity-100\",\n                        onClick: ()=>handleClick(\"right\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Adepoju\\\\Documents\\\\Projects\\\\netflix-clone\\\\components\\\\Row.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Row, \"aLewmdgUqLDWjkPJ2FT0W2IM1qg=\");\n_c = Row;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzJFO0FBQzVCO0FBQ1g7QUFTcEMsU0FBU00sSUFBSSxLQUFzQixFQUFFO1FBQXhCLEVBQUNDLE1BQUssRUFBRUMsT0FBTSxFQUFRLEdBQXRCOztJQUNULE1BQU1DLFNBQVNOLDZDQUFNQSxDQUFDLElBQUk7SUFDMUIsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsTUFBTVEsY0FBYyxDQUFDQyxZQUFzQjtRQUNuQ0YsV0FBVyxJQUFJO1FBRWYsSUFBR0YsT0FBT0ssT0FBTyxFQUFDO1lBQ2QsTUFBTSxFQUFFLEdBQUdMO1FBQ2YsQ0FBQztJQUNUO0lBRUYscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFHVFQ7Ozs7OzswQkFFTCw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDaEIsbUVBQWVBO3dCQUFDZ0IsV0FBVTt3QkFJM0JFLFNBQVMsSUFBTU4sWUFBWTs7Ozs7O2tDQUUzQiw4REFBQ0c7d0JBQUlJLEtBQU9WO3dCQUFRTyxXQUFVO2tDQUd6QlIsT0FBT1ksR0FBRyxDQUFDLENBQUNDLHNCQUNULDhEQUFDaEIsa0RBQVNBO2dDQUFnQmdCLE9BQU9BOytCQUFqQkEsTUFBTUMsRUFBRTs7Ozs7Ozs7OztrQ0FJaEMsOERBQUNyQixvRUFBZ0JBO3dCQUFDZSxXQUFVO3dCQUk1QkUsU0FBUyxJQUFNTixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7R0ExQ1NOO0tBQUFBO0FBNENULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm93LnRzeD9hOGNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdmllIH0gZnJvbSAnQC90eXBpbmdzJztcclxuaW1wb3J0IHsgQ2hldnJvbkxlZnRJY29uLCBDaGV2cm9uUmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi9UaHVtYm5haWwnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIC8vd2hlbiB1c2luZyBmaXJlYmFzZVxyXG4gICAgLy9tb3ZpZTogTW92aWUgfCBEb2N1bWVudERhdGFcclxuICAgIG1vdmllczogTW92aWVbXVxyXG59XHJcblxyXG5mdW5jdGlvbiBSb3coe3RpdGxlLCBtb3ZpZXN9OiBQcm9wcykge1xyXG4gICAgY29uc3Qgcm93UmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbaXNNb3ZlZCwgc2V0SXNNb3ZlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChkaXJlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc01vdmVkKHRydWUpXHJcblxyXG4gICAgICAgICAgICBpZihyb3dSZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7fSA9IHJvd1JlZlxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC00MCBzcGFjZS15LTAuNSBtZDpzcGFjZS15LTInPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3ctNTYgY3Vyc29yLXBvaW50ZXIgdGV4dC1zbSBcclxuICAgICAgICBmb250LXNlbWlib2xkIHRleHQtWyNlNWU1ZTVdIHRyYW5zaXRpb24gXHJcbiAgICAgICAgZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtd2hpdGUgbWQ6dGV4dC0yeGwnPlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JvdXAgcmVsYXRpdmUgbWQ6LW1sLTInPlxyXG4gICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT0nYWJzb2x1dGVcclxuICAgICAgICAgICAgdG9wLTAgYm90dG9tLTAgbGVmdC0yIHotNDggbS1hdXRvIFxyXG4gICAgICAgICAgICBoLTkgdy05IGN1cnNvci1wb2ludGVyIG9wYWNpdHktMCB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTEyNSBcclxuICAgICAgICAgICAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAnIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcImxlZnRcIil9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgcmVmID0ge3Jvd1JlZn0gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTAuNSBcclxuICAgICAgICAgICAgb3ZlcmZsb3cteC1zY3JvbGwgc2Nyb2xsYmFyLWhpZGUgbWQ6c3BhY2UteC0yLjUgbWQ6cC0yJ1xyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbCBrZXk9e21vdmllLmlkfSBtb3ZpZT17bW92aWV9Lz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT0nYWJzb2x1dGVcclxuICAgICAgICAgICAgdG9wLTAgYm90dG9tLTAgbGVmdC0yIHotNDggbS1hdXRvIFxyXG4gICAgICAgICAgICBoLTkgdy05IGN1cnNvci1wb2ludGVyIG9wYWNpdHktMCB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTEyNSBcclxuICAgICAgICAgICAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwicmlnaHRcIil9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdzsiXSwibmFtZXMiOlsiQ2hldnJvbkxlZnRJY29uIiwiQ2hldnJvblJpZ2h0SWNvbiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJUaHVtYm5haWwiLCJSb3ciLCJ0aXRsZSIsIm1vdmllcyIsInJvd1JlZiIsImlzTW92ZWQiLCJzZXRJc01vdmVkIiwiaGFuZGxlQ2xpY2siLCJkaXJlY3Rpb24iLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJvbkNsaWNrIiwicmVmIiwibWFwIiwibW92aWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Row.tsx\n"));

/***/ })

});