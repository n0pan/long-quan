/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./ui/components/ProfilePicture/ProfilePicture.js":
/*!********************************************************!*\
  !*** ./ui/components/ProfilePicture/ProfilePicture.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_profilePictures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/profilePictures */ \"./ui/utils/profilePictures.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/lq/dev/long-quan/ui/components/ProfilePicture/ProfilePicture.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction getProfilePicture() {\n  return \"/images/header_pictures/lq_\".concat((0,_utils_profilePictures__WEBPACK_IMPORTED_MODULE_3__.getRandomInt)(1, 8), \".jpg\");\n}\n\nfunction ProfilePicture() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getProfilePicture()),\n      currentPicturePath = _useState[0],\n      setCurrentPicturePath = _useState[1];\n\n  function randomizeProfilePicture() {\n    setCurrentPicturePath(getProfilePicture());\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      padding: \"0px 15px\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      role: \"button\",\n      onClick: function onClick() {\n        return randomizeProfilePicture();\n      },\n      style: {\n        textAlign: \"center\",\n        height: 200,\n        width: 200,\n        position: \"relative\",\n        margin: \"0 auto\",\n        cursor: \"pointer\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: \"rounded\",\n        src: currentPicturePath,\n        alt: \"Long-Quan\",\n        layout: \"fill\",\n        objectFit: \"cover\",\n        objectPosition: \"center\",\n        quality: 75\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProfilePicture, \"ifyHfmVkivu+9FiNqClE2dx/w2k=\");\n\n_c = ProfilePicture;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePicture);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProfilePicture\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdWkvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS9Qcm9maWxlUGljdHVyZS5qcz80MzM4Il0sIm5hbWVzIjpbImdldFByb2ZpbGVQaWN0dXJlIiwiZ2V0UmFuZG9tSW50IiwiUHJvZmlsZVBpY3R1cmUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQaWN0dXJlUGF0aCIsInNldEN1cnJlbnRQaWN0dXJlUGF0aCIsInJhbmRvbWl6ZVByb2ZpbGVQaWN0dXJlIiwicGFkZGluZyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJtYXJnaW4iLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULEdBQTZCO0FBQzNCLDhDQUFxQ0Msb0VBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqRDtBQUNEOztBQUVELFNBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFBQSxrQkFDNEJDLCtDQUFRLENBQUNILGlCQUFpQixFQUFsQixDQURwQztBQUFBLE1BQ2pCSSxrQkFEaUI7QUFBQSxNQUNHQyxxQkFESDs7QUFHeEIsV0FBU0MsdUJBQVQsR0FBbUM7QUFDakNELHlCQUFxQixDQUFDTCxpQkFBaUIsRUFBbEIsQ0FBckI7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFTyxhQUFPLEVBQUU7QUFBWCxLQUFaO0FBQUEsMkJBQ0U7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1ELHVCQUF1QixFQUE3QjtBQUFBLE9BRlg7QUFHRSxXQUFLLEVBQUU7QUFDTEUsaUJBQVMsRUFBRSxRQUROO0FBRUxDLGNBQU0sRUFBRSxHQUZIO0FBR0xDLGFBQUssRUFBRSxHQUhGO0FBSUxDLGdCQUFRLEVBQUUsVUFKTDtBQUtMQyxjQUFNLEVBQUUsUUFMSDtBQU1MQyxjQUFNLEVBQUU7QUFOSCxPQUhUO0FBQUEsNkJBV0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBUyxFQUFDLFNBRFo7QUFFRSxXQUFHLEVBQUVULGtCQUZQO0FBR0UsV0FBRyxFQUFDLFdBSE47QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUtFLGlCQUFTLEVBQUMsT0FMWjtBQU1FLHNCQUFjLEVBQUMsUUFOakI7QUFPRSxlQUFPLEVBQUU7QUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7R0FoQ1FGLGM7O0tBQUFBLGM7QUFrQ1QsK0RBQWVBLGNBQWYiLCJmaWxlIjoiLi91aS9jb21wb25lbnRzL1Byb2ZpbGVQaWN0dXJlL1Byb2ZpbGVQaWN0dXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVQaWN0dXJlc1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9maWxlUGljdHVyZSgpIHtcbiAgcmV0dXJuIGAvaW1hZ2VzL2hlYWRlcl9waWN0dXJlcy9scV8ke2dldFJhbmRvbUludCgxLCA4KX0uanBnYDtcbn1cblxuZnVuY3Rpb24gUHJvZmlsZVBpY3R1cmUoKSB7XG4gIGNvbnN0IFtjdXJyZW50UGljdHVyZVBhdGgsIHNldEN1cnJlbnRQaWN0dXJlUGF0aF0gPSB1c2VTdGF0ZShnZXRQcm9maWxlUGljdHVyZSgpKTtcblxuICBmdW5jdGlvbiByYW5kb21pemVQcm9maWxlUGljdHVyZSgpIHtcbiAgICBzZXRDdXJyZW50UGljdHVyZVBhdGgoZ2V0UHJvZmlsZVBpY3R1cmUoKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwcHggMTVweFwiIH19PlxuICAgICAgPGRpdlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcmFuZG9taXplUHJvZmlsZVBpY3R1cmUoKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgIH19PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkXCJcbiAgICAgICAgICBzcmM9e2N1cnJlbnRQaWN0dXJlUGF0aH1cbiAgICAgICAgICBhbHQ9XCJMb25nLVF1YW5cIlxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgcXVhbGl0eT17NzV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBpY3R1cmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/ProfilePicture/ProfilePicture.js\n");

/***/ })

});