webpackHotUpdate_N_E("pages/_app",{

/***/ "./ui/hooks/useTheme.js":
/*!******************************!*\
  !*** ./ui/hooks/useTheme.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _enums_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/theme */ \"./ui/enums/theme.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./ui/theme.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction getTheme(themeName) {\n  switch (themeName) {\n    case _enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"LIGHT\"]:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"lightTheme\"];\n\n    case _enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"DARK\"]:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"darkTheme\"];\n\n    case _enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"DARKER\"]:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"darkerTheme\"];\n\n    default:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"lightTheme\"];\n  }\n}\n\nfunction useTheme() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      themeName = _useState[0],\n      setThemeName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      theme = _useState2[0];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useLayoutEffect\"])(function () {\n    if (localStorage.getItem(\"theme\")) {\n      console.log(\"localStorage\");\n      setThemeName(localStorage.getItem(\"theme\"));\n    } else if (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n      console.log(\"matchesMedia\");\n      setThemeName(_enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"DARK\"]);\n    } else {\n      setThemeName(_enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"LIGHT\"]);\n    }\n  }, []);\n  useEffect(function () {\n    getTheme(themeName);\n  }, [themeName]);\n\n  var onSetThemeName = function onSetThemeName(themeName) {\n    localStorage.setItem(\"theme\", themeName);\n    setThemeName(themeName);\n  };\n\n  return {\n    theme: theme,\n    themeName: themeName,\n    setThemeName: onSetThemeName\n  };\n}\n\n_s(useTheme, \"LCMiFrmQwTYhO7mv1gCAv6rr1/8=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTheme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdWkvaG9va3MvdXNlVGhlbWUuanM/ZGY1MSJdLCJuYW1lcyI6WyJnZXRUaGVtZSIsInRoZW1lTmFtZSIsIkxJR0hUIiwibGlnaHRUaGVtZSIsIkRBUksiLCJkYXJrVGhlbWUiLCJEQVJLRVIiLCJkYXJrZXJUaGVtZSIsInVzZVRoZW1lIiwidXNlU3RhdGUiLCJzZXRUaGVtZU5hbWUiLCJ0aGVtZSIsInVzZUxheW91dEVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJvblNldFRoZW1lTmFtZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0IsVUFBUUEsU0FBUjtBQUNFLFNBQUtDLGtEQUFMO0FBQ0UsYUFBT0MsaURBQVA7O0FBQ0YsU0FBS0MsaURBQUw7QUFDRSxhQUFPQyxnREFBUDs7QUFDRixTQUFLQyxtREFBTDtBQUNFLGFBQU9DLGtEQUFQOztBQUNGO0FBQ0UsYUFBT0osaURBQVA7QUFSSjtBQVVEOztBQUVELFNBQVNLLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLEVBRHhCO0FBQUEsTUFDWFIsU0FEVztBQUFBLE1BQ0FTLFlBREE7O0FBQUEsbUJBRUZELHNEQUFRLEVBRk47QUFBQSxNQUVYRSxLQUZXOztBQUlsQkMsK0RBQWUsQ0FBQyxZQUFNO0FBQ3BCLFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFKLEVBQW1DO0FBQ2pDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FOLGtCQUFZLENBQUNHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFELENBQVo7QUFDRCxLQUhELE1BR08sSUFDTEcsTUFBTSxDQUFDQyxVQUFQLElBQ0FELE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQiw4QkFBbEIsRUFBa0RDLE9BRjdDLEVBR0w7QUFDQUosYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBTixrQkFBWSxDQUFDTixpREFBRCxDQUFaO0FBQ0QsS0FOTSxNQU1BO0FBQ0xNLGtCQUFZLENBQUNSLGtEQUFELENBQVo7QUFDRDtBQUNGLEdBYmMsRUFhWixFQWJZLENBQWY7QUFlQWtCLFdBQVMsQ0FBQyxZQUFNO0FBQ2RwQixZQUFRLENBQUNDLFNBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDQSxTQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNb0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBcEIsU0FBUyxFQUFJO0FBQ2xDWSxnQkFBWSxDQUFDUyxPQUFiLENBQXFCLE9BQXJCLEVBQThCckIsU0FBOUI7QUFDQVMsZ0JBQVksQ0FBQ1QsU0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQUVVLFNBQUssRUFBTEEsS0FBRjtBQUFTVixhQUFTLEVBQVRBLFNBQVQ7QUFBb0JTLGdCQUFZLEVBQUVXO0FBQWxDLEdBQVA7QUFDRDs7R0E3QlFiLFE7O0FBK0JNQSx1RUFBZiIsImZpbGUiOiIuL3VpL2hvb2tzL3VzZVRoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTElHSFQsIERBUkssIERBUktFUiB9IGZyb20gXCIuLi9lbnVtcy90aGVtZVwiO1xuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lLCBkYXJrZXJUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuXG5mdW5jdGlvbiBnZXRUaGVtZSh0aGVtZU5hbWUpIHtcbiAgc3dpdGNoICh0aGVtZU5hbWUpIHtcbiAgICBjYXNlIExJR0hUOlxuICAgICAgcmV0dXJuIGxpZ2h0VGhlbWU7XG4gICAgY2FzZSBEQVJLOlxuICAgICAgcmV0dXJuIGRhcmtUaGVtZTtcbiAgICBjYXNlIERBUktFUjpcbiAgICAgIHJldHVybiBkYXJrZXJUaGVtZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGxpZ2h0VGhlbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIGNvbnN0IFt0aGVtZU5hbWUsIHNldFRoZW1lTmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdGhlbWVdID0gdXNlU3RhdGUoKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZVwiKTtcbiAgICAgIHNldFRoZW1lTmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoZXNNZWRpYVwiKTtcbiAgICAgIHNldFRoZW1lTmFtZShEQVJLKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGhlbWVOYW1lKExJR0hUKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRoZW1lKHRoZW1lTmFtZSk7XG4gIH0sIFt0aGVtZU5hbWVdKTtcblxuICBjb25zdCBvblNldFRoZW1lTmFtZSA9IHRoZW1lTmFtZSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZU5hbWUpO1xuICAgIHNldFRoZW1lTmFtZSh0aGVtZU5hbWUpO1xuICB9O1xuXG4gIHJldHVybiB7IHRoZW1lLCB0aGVtZU5hbWUsIHNldFRoZW1lTmFtZTogb25TZXRUaGVtZU5hbWUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/hooks/useTheme.js\n");

/***/ })

})