module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/components */ \"./ui/components/index.js\");\n/* harmony import */ var _ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/hooks */ \"./ui/hooks/index.js\");\n/* harmony import */ var _ui_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/globalStyles */ \"./ui/globalStyles.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/lq/dev/long-quan/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    theme,\n    themeName,\n    setThemeName\n  } = Object(_ui_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useTheme\"])();\n  if (!theme) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: theme,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Long-Quan\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_globalStyles__WEBPACK_IMPORTED_MODULE_6__[\"GlobalStyles\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_components__WEBPACK_IMPORTED_MODULE_4__[\"Navbar\"], {\n        onChangeTheme: setThemeName,\n        currentTheme: themeName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_components__WEBPACK_IMPORTED_MODULE_4__[\"Footer\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInRoZW1lTmFtZSIsInNldFRoZW1lTmFtZSIsInVzZVRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNO0FBQUVDLFNBQUY7QUFBU0MsYUFBVDtBQUFvQkM7QUFBcEIsTUFBcUNDLDBEQUFRLEVBQW5EO0FBRUEsTUFBSSxDQUFDSCxLQUFMLEVBQVksT0FBTyxJQUFQO0FBQ1osc0JBQ0UscUVBQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVBLEtBQXRCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFDRSxZQUFJLEVBQUMsbUZBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRTtBQUFBLDhCQUNFLHFFQUFDLHFEQUFEO0FBQVEscUJBQWEsRUFBRUUsWUFBdkI7QUFBcUMsb0JBQVksRUFBRUQ7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgTmF2YmFyLCBGb290ZXIgfSBmcm9tIFwiLi4vdWkvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiLi4vdWkvaG9va3NcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlcyB9IGZyb20gXCIuLi91aS9nbG9iYWxTdHlsZXNcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB7IHRoZW1lLCB0aGVtZU5hbWUsIHNldFRoZW1lTmFtZSB9ID0gdXNlVGhlbWUoKTtcblxuICBpZiAoIXRoZW1lKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb25nLVF1YW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE5hdmJhciBvbkNoYW5nZVRoZW1lPXtzZXRUaGVtZU5hbWV9IGN1cnJlbnRUaGVtZT17dGhlbWVOYW1lfSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./ui/components/Footer/Footer.js":
/*!****************************************!*\
  !*** ./ui/components/Footer/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/lq/dev/long-quan/ui/components/Footer/Footer.js\";\n\nfunction Footer() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"This is the footer.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanM/MTAyMCJdLCJuYW1lcyI6WyJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVjQSxxRUFBZiIsImZpbGUiOiIuL3VpL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyPlxuICAgICAgPHA+VGhpcyBpcyB0aGUgZm9vdGVyLjwvcD5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/components/Footer/Footer.js\n");

/***/ }),

/***/ "./ui/components/Footer/index.js":
/*!***************************************!*\
  !*** ./ui/components/Footer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./ui/components/Footer/Footer.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcz84NjAxIl0sIm5hbWVzIjpbIkZvb3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWVBLDhHQUFmIiwiZmlsZSI6Ii4vdWkvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/Footer/index.js\n");

/***/ }),

/***/ "./ui/components/Logo/Logo.js":
/*!************************************!*\
  !*** ./ui/components/Logo/Logo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./ui/components/Logo/styles.js\");\n\nvar _jsxFileName = \"/Users/lq/dev/long-quan/ui/components/Logo/Logo.js\";\n\n\n\nfunction Logo() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"TextLogo\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"Hoang-Pham\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), \" Long-Quan\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvZ28vTG9nby5qcz82OGI0Il0sIm5hbWVzIjpbIkxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2Qsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNBLG1FQUFmIiwiZmlsZSI6Ii4vdWkvY29tcG9uZW50cy9Mb2dvL0xvZ28uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0TG9nbyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5mdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxUZXh0TG9nbz5cbiAgICAgIDxzcGFuPkhvYW5nLVBoYW08L3NwYW4+IExvbmctUXVhblxuICAgIDwvVGV4dExvZ28+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/Logo/Logo.js\n");

/***/ }),

/***/ "./ui/components/Logo/index.js":
/*!*************************************!*\
  !*** ./ui/components/Logo/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ \"./ui/components/Logo/Logo.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Logo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvZ28vaW5kZXguanM/Y2RkNSJdLCJuYW1lcyI6WyJMb2dvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZUEsNEdBQWYiLCJmaWxlIjoiLi91aS9jb21wb25lbnRzL0xvZ28vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/Logo/index.js\n");

/***/ }),

/***/ "./ui/components/Logo/styles.js":
/*!**************************************!*\
  !*** ./ui/components/Logo/styles.js ***!
  \**************************************/
/*! exports provided: TextLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextLogo\", function() { return TextLogo; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TextLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n  display: inline-block;\n  font-weight: 400;\n  font-size: 24px;\n  \n  span {\n    text-transform: uppercase;\n    font-weight: 800;\n    color: red;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvZ28vc3R5bGVzLmpzP2I2NGQiXSwibmFtZXMiOlsiVGV4dExvZ28iLCJzdHlsZWQiLCJoMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFFBQVEsR0FBR0Msd0RBQU0sQ0FBQ0MsRUFBRztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZPIiwiZmlsZSI6Ii4vdWkvY29tcG9uZW50cy9Mb2dvL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBUZXh0TG9nbyA9IHN0eWxlZC5oMWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIFxuICBzcGFuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/components/Logo/styles.js\n");

/***/ }),

/***/ "./ui/components/Navbar/Navbar.js":
/*!****************************************!*\
  !*** ./ui/components/Navbar/Navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ \"./ui/components/Logo/index.js\");\n/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ThemeSwitcher */ \"./ui/components/ThemeSwitcher/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./ui/components/Navbar/styles.js\");\n\nvar _jsxFileName = \"/Users/lq/dev/long-quan/ui/components/Navbar/Navbar.js\";\n\n\n\n\n\nfunction Navbar({\n  onChangeTheme,\n  currentTheme\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onChange: onChangeTheme,\n      currentTheme: currentTheme\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanM/MzFiNCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJvbkNoYW5nZVRoZW1lIiwiY3VycmVudFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxlQUFGO0FBQWlCQztBQUFqQixDQUFoQixFQUFpRDtBQUMvQyxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLHNEQUFEO0FBQWUsY0FBUSxFQUFFRCxhQUF6QjtBQUF3QyxrQkFBWSxFQUFFQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7QUFFY0YscUVBQWYiLCJmaWxlIjoiLi91aS9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tIFwiLi4vVGhlbWVTd2l0Y2hlclwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmZ1bmN0aW9uIE5hdmJhcih7IG9uQ2hhbmdlVGhlbWUsIGN1cnJlbnRUaGVtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWRlcj5cbiAgICAgIDxMb2dvIC8+XG4gICAgICA8VGhlbWVTd2l0Y2hlciBvbkNoYW5nZT17b25DaGFuZ2VUaGVtZX0gY3VycmVudFRoZW1lPXtjdXJyZW50VGhlbWV9IC8+XG4gICAgPC9IZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/components/Navbar/Navbar.js\n");

/***/ }),

/***/ "./ui/components/Navbar/index.js":
/*!***************************************!*\
  !*** ./ui/components/Navbar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ \"./ui/components/Navbar/Navbar.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcz9mYmUxIl0sIm5hbWVzIjpbIk5hdmJhciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWVBLDhHQUFmIiwiZmlsZSI6Ii4vdWkvY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/Navbar/index.js\n");

/***/ }),

/***/ "./ui/components/Navbar/styles.js":
/*!****************************************!*\
  !*** ./ui/components/Navbar/styles.js ***!
  \****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL05hdmJhci9zdHlsZXMuanM/NTg4ZCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUdDLHdEQUFNLENBQUNDLE1BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0EsQ0FKTyIsImZpbGUiOiIuL3VpL2NvbXBvbmVudHMvTmF2YmFyL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/Navbar/styles.js\n");

/***/ }),

/***/ "./ui/components/ThemeSwitcher/ThemeSwitcher.js":
/*!******************************************************!*\
  !*** ./ui/components/ThemeSwitcher/ThemeSwitcher.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./ui/components/ThemeSwitcher/styles.js\");\n\nvar _jsxFileName = \"/Users/lq/dev/long-quan/ui/components/ThemeSwitcher/ThemeSwitcher.js\";\n\n\nconst LIGHT = \"light\";\nconst DARK = \"dark\";\nconst DARKER = \"darker\";\n\nfunction ThemeSwitcher({\n  onChange,\n  currentTheme\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"ButtonContainer\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        isSelected: currentTheme === LIGHT,\n        value: LIGHT,\n        onClick: e => onChange(e.currentTarget.value),\n        children: \"Light\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        isSelected: currentTheme === DARK,\n        value: DARK,\n        onClick: e => onChange(e.currentTarget.value),\n        children: \"Dark\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        isSelected: currentTheme === DARKER,\n        value: DARKER,\n        onClick: e => onChange(e.currentTarget.value),\n        children: \"Darker\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitcher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvVGhlbWVTd2l0Y2hlci5qcz8wMjI0Il0sIm5hbWVzIjpbIkxJR0hUIiwiREFSSyIsIkRBUktFUiIsIlRoZW1lU3dpdGNoZXIiLCJvbkNoYW5nZSIsImN1cnJlbnRUaGVtZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1BLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjs7QUFFQSxTQUFTQyxhQUFULENBQXVCO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUF2QixFQUFtRDtBQUNqRCxzQkFDRSxxRUFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UscUVBQUMsOENBQUQ7QUFDRSxrQkFBVSxFQUFFQSxZQUFZLEtBQUtMLEtBRC9CO0FBRUUsYUFBSyxFQUFFQSxLQUZUO0FBR0UsZUFBTyxFQUFFTSxDQUFDLElBQUlGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxLQUFqQixDQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFO0FBQUEsNkJBQ0UscUVBQUMsOENBQUQ7QUFDRSxrQkFBVSxFQUFFSCxZQUFZLEtBQUtKLElBRC9CO0FBRUUsYUFBSyxFQUFFQSxJQUZUO0FBR0UsZUFBTyxFQUFFSyxDQUFDLElBQUlGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxLQUFqQixDQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQW1CRTtBQUFBLDZCQUNFLHFFQUFDLDhDQUFEO0FBQ0Usa0JBQVUsRUFBRUgsWUFBWSxLQUFLSCxNQUQvQjtBQUVFLGFBQUssRUFBRUEsTUFGVDtBQUdFLGVBQU8sRUFBRUksQ0FBQyxJQUFJRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBakIsQ0FIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0JEOztBQUVjTCw0RUFBZiIsImZpbGUiOiIuL3VpL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci9UaGVtZVN3aXRjaGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCdXR0b25Db250YWluZXIsIEJ1dHRvbiB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBMSUdIVCA9IFwibGlnaHRcIjtcbmNvbnN0IERBUksgPSBcImRhcmtcIjtcbmNvbnN0IERBUktFUiA9IFwiZGFya2VyXCI7XG5cbmZ1bmN0aW9uIFRoZW1lU3dpdGNoZXIoeyBvbkNoYW5nZSwgY3VycmVudFRoZW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uQ29udGFpbmVyPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaXNTZWxlY3RlZD17Y3VycmVudFRoZW1lID09PSBMSUdIVH1cbiAgICAgICAgICB2YWx1ZT17TElHSFR9XG4gICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAgTGlnaHRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaXNTZWxlY3RlZD17Y3VycmVudFRoZW1lID09PSBEQVJLfVxuICAgICAgICAgIHZhbHVlPXtEQVJLfVxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gb25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIERhcmtcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaXNTZWxlY3RlZD17Y3VycmVudFRoZW1lID09PSBEQVJLRVJ9XG4gICAgICAgICAgdmFsdWU9e0RBUktFUn1cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IG9uQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICBEYXJrZXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2xpPlxuICAgIDwvQnV0dG9uQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVN3aXRjaGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/components/ThemeSwitcher/ThemeSwitcher.js\n");

/***/ }),

/***/ "./ui/components/ThemeSwitcher/index.js":
/*!**********************************************!*\
  !*** ./ui/components/ThemeSwitcher/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeSwitcher */ \"./ui/components/ThemeSwitcher/ThemeSwitcher.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvaW5kZXguanM/Yzg5YSJdLCJuYW1lcyI6WyJUaGVtZVN3aXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZUEscUhBQWYiLCJmaWxlIjoiLi91aS9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9UaGVtZVN3aXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/components/ThemeSwitcher/index.js\n");

/***/ }),

/***/ "./ui/components/ThemeSwitcher/styles.js":
/*!***********************************************!*\
  !*** ./ui/components/ThemeSwitcher/styles.js ***!
  \***********************************************/
/*! exports provided: ButtonContainer, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonContainer\", function() { return ButtonContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n  cursor: pointer;\n  background: transparent;\n  outline: transparent;\n  border: none;\n  color: ${props => props.isSelected ? \"red\" : props.theme.text};\n  font-size: inherit;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1RoZW1lU3dpdGNoZXIvc3R5bGVzLmpzP2RjMTciXSwibmFtZXMiOlsiQnV0dG9uQ29udGFpbmVyIiwic3R5bGVkIiwidWwiLCJCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImlzU2VsZWN0ZWQiLCJ0aGVtZSIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGVBQWUsR0FBR0Msd0RBQU0sQ0FBQ0MsRUFBRztBQUN6QztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTUMsTUFBTSxHQUFHRix3REFBTSxDQUFDRyxNQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBV0MsS0FBSyxJQUFLQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsS0FBbkIsR0FBMkJELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxJQUFNO0FBQ2xFO0FBQ0EsQ0FQTyIsImZpbGUiOiIuL3VpL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmlzU2VsZWN0ZWQgPyBcInJlZFwiIDogcHJvcHMudGhlbWUudGV4dCl9O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/components/ThemeSwitcher/styles.js\n");

/***/ }),

/***/ "./ui/components/index.js":
/*!********************************!*\
  !*** ./ui/components/index.js ***!
  \********************************/
/*! exports provided: Navbar, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar */ \"./ui/components/Navbar/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./ui/components/Footer/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL2luZGV4LmpzPzEzMzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3VpL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIE5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/components/index.js\n");

/***/ }),

/***/ "./ui/enums/theme.js":
/*!***************************!*\
  !*** ./ui/enums/theme.js ***!
  \***************************/
/*! exports provided: LIGHT, DARK, DARKER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIGHT\", function() { return LIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DARK\", function() { return DARK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DARKER\", function() { return DARKER; });\nconst LIGHT = \"light\";\nconst DARK = \"dark\";\nconst DARKER = \"darker\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9lbnVtcy90aGVtZS5qcz84NDA3Il0sIm5hbWVzIjpbIkxJR0hUIiwiREFSSyIsIkRBUktFUiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxLQUFLLEdBQUcsT0FBZDtBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFFBQWYiLCJmaWxlIjoiLi91aS9lbnVtcy90aGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMSUdIVCA9IFwibGlnaHRcIjtcbmV4cG9ydCBjb25zdCBEQVJLID0gXCJkYXJrXCI7XG5leHBvcnQgY29uc3QgREFSS0VSID0gXCJkYXJrZXJcIjtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/enums/theme.js\n");

/***/ }),

/***/ "./ui/globalStyles.js":
/*!****************************!*\
  !*** ./ui/globalStyles.js ***!
  \****************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  html, body {\n    background: ${({\n  theme\n}) => theme.background};\n    color: ${({\n  theme\n}) => theme.text};\n    font-family: \"JetBrains Mono\", monospace;\n    font-weight: 400;\n    min-height: 90vh;\n    margin: 0px;\n    padding: 0px;\n    height: 100%;\n    width: 100%;\n  }\n  main {\n    padding: 50px;\n  }\n  button {\n    font-family: \"JetBrains Mono\", monospace;\n  }\n  a {\n    text-decoration: none;\n    color: red;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9nbG9iYWxTdHlsZXMuanM/YjVhNyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIiwiYmFja2dyb3VuZCIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLG1FQUFrQjtBQUM5QztBQUNBLGtCQUFrQixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLFVBQVc7QUFDbEQsYUFBYSxDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNFLElBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F0Qk8iLCJmaWxlIjoiLi91aS9nbG9iYWxTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGh0bWwsIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWluLWhlaWdodDogOTB2aDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1haW4ge1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiLCBtb25vc3BhY2U7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui/globalStyles.js\n");

/***/ }),

/***/ "./ui/hooks/index.js":
/*!***************************!*\
  !*** ./ui/hooks/index.js ***!
  \***************************/
/*! exports provided: useTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ \"./ui/hooks/useTheme.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useTheme\", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9ob29rcy9pbmRleC5qcz85M2M0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vdWkvaG9va3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSBcIi4vdXNlVGhlbWVcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui/hooks/index.js\n");

/***/ }),

/***/ "./ui/hooks/useTheme.js":
/*!******************************!*\
  !*** ./ui/hooks/useTheme.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _enums_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/theme */ \"./ui/enums/theme.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./ui/theme.js\");\n\n\n\n\nfunction getTheme(themeName) {\n  switch (themeName) {\n    case _enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"LIGHT\"]:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"lightTheme\"];\n\n    case _enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"DARK\"]:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"darkTheme\"];\n\n    case _enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"DARKER\"]:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"darkerTheme\"];\n\n    default:\n      return _theme__WEBPACK_IMPORTED_MODULE_2__[\"lightTheme\"];\n  }\n}\n\nfunction useTheme() {\n  const {\n    0: themeName,\n    1: setThemeName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: theme,\n    1: setTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (localStorage.getItem(\"theme\")) {\n      setThemeName(localStorage.getItem(\"theme\"));\n    } else if (window.matchMedia && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n      setThemeName(_enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"DARK\"]);\n    } else {\n      setThemeName(_enums_theme__WEBPACK_IMPORTED_MODULE_1__[\"LIGHT\"]);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setTheme(getTheme(themeName));\n  }, [themeName]);\n\n  const onSetThemeName = themeName => {\n    localStorage.setItem(\"theme\", themeName);\n    setThemeName(themeName);\n  };\n\n  return {\n    theme,\n    themeName,\n    setThemeName: onSetThemeName\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9ob29rcy91c2VUaGVtZS5qcz9kZjUxIl0sIm5hbWVzIjpbImdldFRoZW1lIiwidGhlbWVOYW1lIiwiTElHSFQiLCJsaWdodFRoZW1lIiwiREFSSyIsImRhcmtUaGVtZSIsIkRBUktFUiIsImRhcmtlclRoZW1lIiwidXNlVGhlbWUiLCJzZXRUaGVtZU5hbWUiLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJvblNldFRoZW1lTmFtZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0IsVUFBUUEsU0FBUjtBQUNFLFNBQUtDLGtEQUFMO0FBQ0UsYUFBT0MsaURBQVA7O0FBQ0YsU0FBS0MsaURBQUw7QUFDRSxhQUFPQyxnREFBUDs7QUFDRixTQUFLQyxtREFBTDtBQUNFLGFBQU9DLGtEQUFQOztBQUNGO0FBQ0UsYUFBT0osaURBQVA7QUFSSjtBQVVEOztBQUVELFNBQVNLLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNQLFNBQUQ7QUFBQSxPQUFZUTtBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBSixFQUFtQztBQUNqQ04sa0JBQVksQ0FBQ0ssWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQUQsQ0FBWjtBQUNELEtBRkQsTUFFTyxJQUNMQyxNQUFNLENBQUNDLFVBQVAsSUFDQUQsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixFQUFrREMsT0FGN0MsRUFHTDtBQUNBVCxrQkFBWSxDQUFDTCxpREFBRCxDQUFaO0FBQ0QsS0FMTSxNQUtBO0FBQ0xLLGtCQUFZLENBQUNQLGtEQUFELENBQVo7QUFDRDtBQUNGLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQVcseURBQVMsQ0FBQyxNQUFNO0FBQ2RELFlBQVEsQ0FBQ1osUUFBUSxDQUFDQyxTQUFELENBQVQsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDQSxTQUFELENBRk0sQ0FBVDs7QUFJQSxRQUFNa0IsY0FBYyxHQUFHbEIsU0FBUyxJQUFJO0FBQ2xDYSxnQkFBWSxDQUFDTSxPQUFiLENBQXFCLE9BQXJCLEVBQThCbkIsU0FBOUI7QUFDQVEsZ0JBQVksQ0FBQ1IsU0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFLQSxTQUFPO0FBQUVVLFNBQUY7QUFBU1YsYUFBVDtBQUFvQlEsZ0JBQVksRUFBRVU7QUFBbEMsR0FBUDtBQUNEOztBQUVjWCx1RUFBZiIsImZpbGUiOiIuL3VpL2hvb2tzL3VzZVRoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTElHSFQsIERBUkssIERBUktFUiB9IGZyb20gXCIuLi9lbnVtcy90aGVtZVwiO1xuaW1wb3J0IHsgbGlnaHRUaGVtZSwgZGFya1RoZW1lLCBkYXJrZXJUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuXG5mdW5jdGlvbiBnZXRUaGVtZSh0aGVtZU5hbWUpIHtcbiAgc3dpdGNoICh0aGVtZU5hbWUpIHtcbiAgICBjYXNlIExJR0hUOlxuICAgICAgcmV0dXJuIGxpZ2h0VGhlbWU7XG4gICAgY2FzZSBEQVJLOlxuICAgICAgcmV0dXJuIGRhcmtUaGVtZTtcbiAgICBjYXNlIERBUktFUjpcbiAgICAgIHJldHVybiBkYXJrZXJUaGVtZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGxpZ2h0VGhlbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIGNvbnN0IFt0aGVtZU5hbWUsIHNldFRoZW1lTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSkge1xuICAgICAgc2V0VGhlbWVOYW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICApIHtcbiAgICAgIHNldFRoZW1lTmFtZShEQVJLKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGhlbWVOYW1lKExJR0hUKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRoZW1lKGdldFRoZW1lKHRoZW1lTmFtZSkpO1xuICB9LCBbdGhlbWVOYW1lXSk7XG5cbiAgY29uc3Qgb25TZXRUaGVtZU5hbWUgPSB0aGVtZU5hbWUgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWVOYW1lKTtcbiAgICBzZXRUaGVtZU5hbWUodGhlbWVOYW1lKTtcbiAgfTtcblxuICByZXR1cm4geyB0aGVtZSwgdGhlbWVOYW1lLCBzZXRUaGVtZU5hbWU6IG9uU2V0VGhlbWVOYW1lIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/hooks/useTheme.js\n");

/***/ }),

/***/ "./ui/theme.js":
/*!*********************!*\
  !*** ./ui/theme.js ***!
  \*********************/
/*! exports provided: lightTheme, darkTheme, darkerTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkerTheme\", function() { return darkerTheme; });\nconst lightTheme = {\n  text: \"#000\",\n  background: \"#FFF\",\n  cardBackground: \"#FFF\"\n};\nconst darkTheme = {\n  text: \"#FFF\",\n  background: \"#1c233a\",\n  cardBackground: \"#090b10\"\n};\nconst darkerTheme = {\n  text: \"#FFF\",\n  background: \"#090b10\",\n  cardBackground: \"#1c233a\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS90aGVtZS5qcz84YTQxIl0sIm5hbWVzIjpbImxpZ2h0VGhlbWUiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImNhcmRCYWNrZ3JvdW5kIiwiZGFya1RoZW1lIiwiZGFya2VyVGhlbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFHO0FBQ3hCQyxNQUFJLEVBQUUsTUFEa0I7QUFFeEJDLFlBQVUsRUFBRSxNQUZZO0FBR3hCQyxnQkFBYyxFQUFFO0FBSFEsQ0FBbkI7QUFNQSxNQUFNQyxTQUFTLEdBQUc7QUFDdkJILE1BQUksRUFBRSxNQURpQjtBQUV2QkMsWUFBVSxFQUFFLFNBRlc7QUFHdkJDLGdCQUFjLEVBQUU7QUFITyxDQUFsQjtBQU1BLE1BQU1FLFdBQVcsR0FBRztBQUN6QkosTUFBSSxFQUFFLE1BRG1CO0FBRXpCQyxZQUFVLEVBQUUsU0FGYTtBQUd6QkMsZ0JBQWMsRUFBRTtBQUhTLENBQXBCIiwiZmlsZSI6Ii4vdWkvdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbGlnaHRUaGVtZSA9IHtcbiAgdGV4dDogXCIjMDAwXCIsXG4gIGJhY2tncm91bmQ6IFwiI0ZGRlwiLFxuICBjYXJkQmFja2dyb3VuZDogXCIjRkZGXCJcbn07XG5cbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7XG4gIHRleHQ6IFwiI0ZGRlwiLFxuICBiYWNrZ3JvdW5kOiBcIiMxYzIzM2FcIixcbiAgY2FyZEJhY2tncm91bmQ6IFwiIzA5MGIxMFwiXG59O1xuXG5leHBvcnQgY29uc3QgZGFya2VyVGhlbWUgPSB7XG4gIHRleHQ6IFwiI0ZGRlwiLFxuICBiYWNrZ3JvdW5kOiBcIiMwOTBiMTBcIixcbiAgY2FyZEJhY2tncm91bmQ6IFwiIzFjMjMzYVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ui/theme.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });