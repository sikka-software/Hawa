"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/better-react-mathjax@2.0.3_react@18.2.0";
exports.ids = ["vendor-chunks/better-react-mathjax@2.0.3_react@18.2.0"];
exports.modules = {

/***/ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MathJaxBaseContext: () => (/* binding */ MathJaxBaseContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var v2Promise,v3Promise,MathJaxBaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),DEFAULT_V2_SRC=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML\",DEFAULT_V3_SRC=\"https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js\",MathJaxContext=function(e){var n=e.config,t=e.version,t=void 0===t?3:t,o=e.src,o=void 0===o?2===t?DEFAULT_V2_SRC:DEFAULT_V3_SRC:o,a=e.onStartup,r=e.onLoad,i=e.onError,s=e.typesettingOptions,h=e.renderMode,h=void 0===h?\"post\":h,d=e.hideUntilTypeset,e=e.children,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MathJaxBaseContext);if(void 0!==(null==c?void 0:c.version)&&(null==c?void 0:c.version)!==t)throw Error(\"Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.\");if(2===t&&void 0!==v3Promise||3===t&&void 0!==v2Promise)throw Error(\"Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.\");var u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(c),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((null==c?void 0:c.version)||null);if(null===c.current)c.current=t;else if(c.current!==t)throw Error(\"Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.\");var v=o||(2===t?DEFAULT_V2_SRC:DEFAULT_V3_SRC);function f(t,o){n&&(window.MathJax=n);var e=document.createElement(\"script\");e.type=\"text/javascript\",e.src=v,e.async=!1,e.addEventListener(\"load\",function(){var e=window.MathJax;a&&a(e),t(e),r&&r()}),e.addEventListener(\"error\",function(e){return o(e)}),document.getElementsByTagName(\"head\")[0].appendChild(e)}return void 0===u.current&&(c={typesettingOptions:s,renderMode:h,hideUntilTypeset:d},2===t?void 0===v2Promise&&(\"undefined\"!=typeof window?(v2Promise=new Promise(f)).catch(function(e){if(!i)throw Error(\"Failed to download MathJax version 2 from '\".concat(v,\"' due to: \").concat(e));i(e)}):(v2Promise=Promise.reject()).catch(function(e){})):void 0===v3Promise&&(\"undefined\"!=typeof window?(v3Promise=new Promise(f)).catch(function(e){if(!i)throw Error(\"Failed to download MathJax version 3 from '\".concat(v,\"' due to: \").concat(e));i(e)}):(v3Promise=Promise.reject()).catch(function(e){})),u.current=__assign(__assign({},c),2===t?{version:2,promise:v2Promise}:{version:3,promise:v3Promise})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MathJaxBaseContext.Provider,{value:u.current},e)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathJaxContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JldHRlci1yZWFjdC1tYXRoamF4QDIuMC4zX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvZXNtL01hdGhKYXhDb250ZXh0L01hdGhKYXhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxhQUFhLFNBQUksRUFBRSxTQUFJLHNCQUFzQiwyQ0FBMkMsaUNBQWlDLElBQUksdUZBQXVGLFNBQVMseUJBQW1GLDJDQUEyQyxvREFBYSx3T0FBd08sNE9BQTRPLGlEQUFVLHFCQUFxQix5VUFBeVUscUxBQXFMLHVRQUF1USxNQUFNLDZDQUFNLE1BQU0sNkNBQU0sbUNBQW1DLGdDQUFnQywwS0FBMEssK0NBQStDLGdCQUFnQixzQkFBc0IsdUNBQXVDLGlGQUFpRixxQkFBcUIsb0JBQW9CLHlDQUF5QyxZQUFZLDBEQUEwRCwrQkFBK0IscURBQXFELG9HQUFvRyxrR0FBa0csS0FBSyxrREFBa0QsZ0dBQWdHLGtHQUFrRyxLQUFLLGtEQUFrRCxpQ0FBaUMsV0FBVyw0QkFBNEIsRUFBRSw0QkFBNEIsR0FBRywwREFBbUIsOEJBQThCLGdCQUFnQixLQUFLLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXdhLWRvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JldHRlci1yZWFjdC1tYXRoamF4QDIuMC4zX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvZXNtL01hdGhKYXhDb250ZXh0L01hdGhKYXhDb250ZXh0LmpzP2NlZGIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKF9fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxvPTEsbj1hcmd1bWVudHMubGVuZ3RoO288bjtvKyspZm9yKHZhciBhIGluIHQ9YXJndW1lbnRzW29dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGEpJiYoZVthXT10W2FdKTtyZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07aW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZUNvbnRleHQsdXNlUmVmfWZyb21cInJlYWN0XCI7dmFyIHYyUHJvbWlzZSx2M1Byb21pc2UsTWF0aEpheEJhc2VDb250ZXh0PWNyZWF0ZUNvbnRleHQodm9pZCAwKSxERUZBVUxUX1YyX1NSQz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21hdGhqYXgvMi43LjkvTWF0aEpheC5qcz9jb25maWc9VGVYLU1NTC1BTV9DSFRNTFwiLERFRkFVTFRfVjNfU1JDPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWF0aGpheC8zLjIuMi9lczUvdGV4LW1tbC1jaHRtbC5qc1wiLE1hdGhKYXhDb250ZXh0PWZ1bmN0aW9uKGUpe3ZhciBuPWUuY29uZmlnLHQ9ZS52ZXJzaW9uLHQ9dm9pZCAwPT09dD8zOnQsbz1lLnNyYyxvPXZvaWQgMD09PW8/Mj09PXQ/REVGQVVMVF9WMl9TUkM6REVGQVVMVF9WM19TUkM6byxhPWUub25TdGFydHVwLHI9ZS5vbkxvYWQsaT1lLm9uRXJyb3Iscz1lLnR5cGVzZXR0aW5nT3B0aW9ucyxoPWUucmVuZGVyTW9kZSxoPXZvaWQgMD09PWg/XCJwb3N0XCI6aCxkPWUuaGlkZVVudGlsVHlwZXNldCxlPWUuY2hpbGRyZW4sYz11c2VDb250ZXh0KE1hdGhKYXhCYXNlQ29udGV4dCk7aWYodm9pZCAwIT09KG51bGw9PWM/dm9pZCAwOmMudmVyc2lvbikmJihudWxsPT1jP3ZvaWQgMDpjLnZlcnNpb24pIT09dCl0aHJvdyBFcnJvcihcIkNhbm5vdCBuZXN0IE1hdGhKYXhDb250ZXh0cyB3aXRoIGRpZmZlcmVudCB2ZXJzaW9ucy4gTWF0aEpheENvbnRleHRzIHNob3VsZCBub3QgYmUgbmVzdGVkIGF0IGFsbCBidXQgaWYgdGhleSBhcmUsIHRoZXkgY2Fubm90IGhhdmUgZGlmZmVyZW50IHZlcnNpb25zLiBTdGljayB3aXRoIG9uZSB2ZXJzaW9uIG9mIE1hdGhKYXggaW4geW91ciBhcHAgYW5kIGF2b2lkIHVzaW5nIG1vcmUgdGhhbiBvbmUgTWF0aEpheENvbnRleHQuXCIpO2lmKDI9PT10JiZ2b2lkIDAhPT12M1Byb21pc2V8fDM9PT10JiZ2b2lkIDAhPT12MlByb21pc2UpdGhyb3cgRXJyb3IoXCJDYW5ub3QgdXNlIE1hdGhKYXggdmVyc2lvbnMgMiBhbmQgMyBzaW11bHRhbmVvdXNseSBpbiB0aGUgc2FtZSBhcHAgZHVlIHRvIGhvdyBNYXRoSmF4IGlzIHNldCB1cCBpbiB0aGUgYnJvd3NlcjsgZWl0aGVyIHlvdSBoYXZlIG11bHRpcGxlIE1hdGhKYXhDb250ZXh0cyB3aXRoIGRpZmZlcmVudCB2ZXJzaW9ucyBvciB5b3UgaGF2ZSBtb3VudGVkIGFuZCB1bm1vdW50ZWQgTWF0aEpheENvbnRleHRzIHdpdGggZGlmZmVyZW50IHZlcnNpb25zLiBQbGVhc2Ugc3RpY2sgd2l0aCBvbmUgdmVyc2lvbiBvZiBNYXRoSmF4IGluIHlvdXIgYXBwLiBGaWxlIGFuIGlzc3VlIGluIHRoZSBwcm9qZWN0IEdpdGh1YiBwYWdlIGlmIHlvdSBuZWVkIHRoaXMgZmVhdHVyZS5cIik7dmFyIHU9dXNlUmVmKGMpLGM9dXNlUmVmKChudWxsPT1jP3ZvaWQgMDpjLnZlcnNpb24pfHxudWxsKTtpZihudWxsPT09Yy5jdXJyZW50KWMuY3VycmVudD10O2Vsc2UgaWYoYy5jdXJyZW50IT09dCl0aHJvdyBFcnJvcihcIkNhbm5vdCBjaGFuZ2UgdmVyc2lvbiBvZiBNYXRoSmF4IGluIGEgTWF0aEpheENvbnRleHQgYWZ0ZXIgaXQgaGFzIG1vdW50ZWQuIFJlbG9hZCB0aGUgcGFnZSB3aXRoIGEgbmV3IHZlcnNpb24gd2hlbiB0aGlzIG11c3QgaGFwcGVuLlwiKTt2YXIgdj1vfHwoMj09PXQ/REVGQVVMVF9WMl9TUkM6REVGQVVMVF9WM19TUkMpO2Z1bmN0aW9uIGYodCxvKXtuJiYod2luZG93Lk1hdGhKYXg9bik7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtlLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIixlLnNyYz12LGUuYXN5bmM9ITEsZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGU9d2luZG93Lk1hdGhKYXg7YSYmYShlKSx0KGUpLHImJnIoKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSl9KSxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoZSl9cmV0dXJuIHZvaWQgMD09PXUuY3VycmVudCYmKGM9e3R5cGVzZXR0aW5nT3B0aW9uczpzLHJlbmRlck1vZGU6aCxoaWRlVW50aWxUeXBlc2V0OmR9LDI9PT10P3ZvaWQgMD09PXYyUHJvbWlzZSYmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/KHYyUHJvbWlzZT1uZXcgUHJvbWlzZShmKSkuY2F0Y2goZnVuY3Rpb24oZSl7aWYoIWkpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZG93bmxvYWQgTWF0aEpheCB2ZXJzaW9uIDIgZnJvbSAnXCIuY29uY2F0KHYsXCInIGR1ZSB0bzogXCIpLmNvbmNhdChlKSk7aShlKX0pOih2MlByb21pc2U9UHJvbWlzZS5yZWplY3QoKSkuY2F0Y2goZnVuY3Rpb24oZSl7fSkpOnZvaWQgMD09PXYzUHJvbWlzZSYmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/KHYzUHJvbWlzZT1uZXcgUHJvbWlzZShmKSkuY2F0Y2goZnVuY3Rpb24oZSl7aWYoIWkpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZG93bmxvYWQgTWF0aEpheCB2ZXJzaW9uIDMgZnJvbSAnXCIuY29uY2F0KHYsXCInIGR1ZSB0bzogXCIpLmNvbmNhdChlKSk7aShlKX0pOih2M1Byb21pc2U9UHJvbWlzZS5yZWplY3QoKSkuY2F0Y2goZnVuY3Rpb24oZSl7fSkpLHUuY3VycmVudD1fX2Fzc2lnbihfX2Fzc2lnbih7fSxjKSwyPT09dD97dmVyc2lvbjoyLHByb21pc2U6djJQcm9taXNlfTp7dmVyc2lvbjozLHByb21pc2U6djNQcm9taXNlfSkpLFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWF0aEpheEJhc2VDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp1LmN1cnJlbnR9LGUpfTtleHBvcnQgZGVmYXVsdCBNYXRoSmF4Q29udGV4dDtleHBvcnR7TWF0aEpheEJhc2VDb250ZXh0fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js\n");

/***/ }),

/***/ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/index.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/index.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathJaxBaseContext: () => (/* reexport safe */ _MathJaxContext__WEBPACK_IMPORTED_MODULE_0__.MathJaxBaseContext),
/* harmony export */   MathJaxContext: () => (/* reexport safe */ _MathJaxContext__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _MathJaxContext__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MathJaxContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathJaxContext */ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js");


/***/ }),

/***/ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/MathJax.js":
/*!*********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/MathJax.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MathJaxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MathJaxContext */ \"../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/index.js\");\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&\"function\"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};var typesettingFailed=function(t){return\"Typesetting failed: \".concat(void 0!==t.message?t.message:t.toString())},MathJax=function(t){function r(){var t;\"every\"===h&&m&&\"post\"===v&&null!==f.current&&(f.current.style.visibility=null!=(t=null==(t=p.style)?void 0:t.visibility)?t:\"visible\"),_.current||(\"first\"===h&&null!==f.current&&(f.current.style.visibility=\"visible\"),n&&n(),_.current=!0),o&&o(),b.current=!1}var e=t.inline,i=void 0!==e&&e,e=t.hideUntilTypeset,n=t.onInitTypeset,o=t.onTypeset,s=t.text,u=t.dynamic,a=t.typesettingOptions,l=t.renderMode,c=t.children,p=__rest(t,[\"inline\",\"hideUntilTypeset\",\"onInitTypeset\",\"onTypeset\",\"text\",\"dynamic\",\"typesettingOptions\",\"renderMode\",\"children\"]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"\"),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MathJaxContext__WEBPACK_IMPORTED_MODULE_1__.MathJaxBaseContext),h=null!=e?e:null==d?void 0:d.hideUntilTypeset,v=null!=l?l:null==d?void 0:d.renderMode,g=null!=a?a:null==d?void 0:d.typesettingOptions,m=!1!==u&&(u||\"production\"!==\"development\"),_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!b.current&&null!==f.current&&m&&\"every\"===h&&\"post\"===v&&(f.current.style.visibility=\"hidden\"),(\"undefined\"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if((m||!_.current)&&null!==f.current){if(!d)throw Error(\"MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?\");if(\"pre\"===v){if(!(\"string\"==typeof(t=s)&&0<t.length))throw Error(\"Render mode 'pre' requires text prop to be set and non-empty, which was currently \\\"\".concat(s,'\"'));if(!a||!a.fn)throw Error(\"Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext\");if(2===d.version)throw Error(\"Render mode 'pre' only available with MathJax 3, and version 2 is currently in use\")}\"post\"!==v&&s===y.current||b.current||(b.current=!0,3===d.version?d.promise.then(function(e){var n;\"pre\"===v?(n=function(t){y.current=s,e.startup.document.clear(),e.startup.document.updateDocument(),null!==f.current&&(f.current.innerHTML=t.outerHTML),r()},a.fn.endsWith(\"Promise\")?e.startup.promise.then(function(){return e[g.fn](s,__assign(__assign({},(null==g?void 0:g.options)||{}),{display:!i}))}).then(n).catch(function(t){throw r(),Error(typesettingFailed(t))}):e.startup.promise.then(function(){var t=e[g.fn](s,__assign(__assign({},(null==g?void 0:g.options)||{}),{display:!i}));n(t)}).catch(function(t){throw r(),Error(typesettingFailed(t))})):e.startup.promise.then(function(){return e.typesetClear([f.current]),e.typesetPromise([f.current])}).then(r).catch(function(t){throw r(),Error(typesettingFailed(t))})}).catch(function(t){throw r(),Error(typesettingFailed(t))}):d.promise.then(function(t){t.Hub.Queue([\"Typeset\",t.Hub,f.current]),t.Hub.Queue(r)}).catch(function(t){throw r(),Error(typesettingFailed(t))}))}var t}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\",__assign({},p,{style:__assign(__assign({display:i?\"inline\":\"block\"},p.style),{visibility:h?\"hidden\":null==(t=p.style)?void 0:t.visibility}),ref:f}),c)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathJax);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JldHRlci1yZWFjdC1tYXRoamF4QDIuMC4zX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvZXNtL01hdGhKYXgvTWF0aEpheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsYUFBYSxTQUFJLEVBQUUsU0FBSSxzQkFBc0IsMkNBQTJDLGlDQUFpQyxJQUFJLHVGQUF1RixTQUFTLHdCQUF3QixRQUFRLFNBQUksRUFBRSxTQUFJLHVCQUF1QixTQUFTLGtGQUFrRiwwR0FBMEcsV0FBVyw2RkFBNkYsVUFBa0ksa0NBQWtDLCtFQUErRSxxQkFBcUIsYUFBYSxNQUFNLGtRQUFrUSxrU0FBa1MsNkNBQU0sT0FBTyw2Q0FBTSxTQUFTLGlEQUFVLENBQUMsK0RBQWtCLHFLQUFxSyxhQUFvQixJQUFJLDZDQUFNLE9BQU8sNkNBQU0sS0FBSyxrSUFBa0ksa0RBQWUsQ0FBQyw0Q0FBUyxhQUFhLHNDQUFzQyw0R0FBNEcsY0FBYywwSkFBMEosMEpBQTBKLG1IQUFtSCw2RkFBNkYsTUFBTSx5QkFBeUIsbUlBQW1JLDREQUE0RCxxQ0FBcUMsK0JBQStCLEdBQUcsV0FBVyxHQUFHLDRCQUE0QixzQ0FBc0Msb0NBQW9DLG9DQUFvQywrQkFBK0IsR0FBRyxXQUFXLEdBQUcsS0FBSyxvQkFBb0Isc0NBQXNDLHFDQUFxQyxpRUFBaUUsNEJBQTRCLHNDQUFzQyxFQUFFLG9CQUFvQixzQ0FBc0MsNkJBQTZCLHdEQUF3RCxvQkFBb0Isc0NBQXNDLEdBQUcsTUFBTSxFQUFFLDBEQUFtQixtQkFBbUIsSUFBSSx5QkFBeUIsMkJBQTJCLFdBQVcsNERBQTRELFFBQVEsTUFBTSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF3YS1kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iZXR0ZXItcmVhY3QtbWF0aGpheEAyLjAuM19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL2JldHRlci1yZWFjdC1tYXRoamF4L2VzbS9NYXRoSmF4L01hdGhKYXguanM/YTgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ249dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4oX19hc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIGkgaW4gZT1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxfX3Jlc3Q9dGhpcyYmdGhpcy5fX3Jlc3R8fGZ1bmN0aW9uKHQsZSl7dmFyIG49e307Zm9yKGkgaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKSYmZS5pbmRleE9mKGkpPDAmJihuW2ldPXRbaV0pO2lmKG51bGwhPXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpZm9yKHZhciByPTAsaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO3I8aS5sZW5ndGg7cisrKWUuaW5kZXhPZihpW3JdKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxpW3JdKSYmKG5baVtyXV09dFtpW3JdXSk7cmV0dXJuIG59O2ltcG9ydCBSZWFjdCx7dXNlQ29udGV4dCx1c2VFZmZlY3QsdXNlTGF5b3V0RWZmZWN0LHVzZVJlZn1mcm9tXCJyZWFjdFwiO2ltcG9ydHtNYXRoSmF4QmFzZUNvbnRleHR9ZnJvbVwiLi4vTWF0aEpheENvbnRleHRcIjt2YXIgdHlwZXNldHRpbmdGYWlsZWQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJUeXBlc2V0dGluZyBmYWlsZWQ6IFwiLmNvbmNhdCh2b2lkIDAhPT10Lm1lc3NhZ2U/dC5tZXNzYWdlOnQudG9TdHJpbmcoKSl9LE1hdGhKYXg9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcigpe3ZhciB0O1wiZXZlcnlcIj09PWgmJm0mJlwicG9zdFwiPT09diYmbnVsbCE9PWYuY3VycmVudCYmKGYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5PW51bGwhPSh0PW51bGw9PSh0PXAuc3R5bGUpP3ZvaWQgMDp0LnZpc2liaWxpdHkpP3Q6XCJ2aXNpYmxlXCIpLF8uY3VycmVudHx8KFwiZmlyc3RcIj09PWgmJm51bGwhPT1mLmN1cnJlbnQmJihmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eT1cInZpc2libGVcIiksbiYmbigpLF8uY3VycmVudD0hMCksbyYmbygpLGIuY3VycmVudD0hMX12YXIgZT10LmlubGluZSxpPXZvaWQgMCE9PWUmJmUsZT10LmhpZGVVbnRpbFR5cGVzZXQsbj10Lm9uSW5pdFR5cGVzZXQsbz10Lm9uVHlwZXNldCxzPXQudGV4dCx1PXQuZHluYW1pYyxhPXQudHlwZXNldHRpbmdPcHRpb25zLGw9dC5yZW5kZXJNb2RlLGM9dC5jaGlsZHJlbixwPV9fcmVzdCh0LFtcImlubGluZVwiLFwiaGlkZVVudGlsVHlwZXNldFwiLFwib25Jbml0VHlwZXNldFwiLFwib25UeXBlc2V0XCIsXCJ0ZXh0XCIsXCJkeW5hbWljXCIsXCJ0eXBlc2V0dGluZ09wdGlvbnNcIixcInJlbmRlck1vZGVcIixcImNoaWxkcmVuXCJdKSx5PXVzZVJlZihcIlwiKSxmPXVzZVJlZihudWxsKSxkPXVzZUNvbnRleHQoTWF0aEpheEJhc2VDb250ZXh0KSxoPW51bGwhPWU/ZTpudWxsPT1kP3ZvaWQgMDpkLmhpZGVVbnRpbFR5cGVzZXQsdj1udWxsIT1sP2w6bnVsbD09ZD92b2lkIDA6ZC5yZW5kZXJNb2RlLGc9bnVsbCE9YT9hOm51bGw9PWQ/dm9pZCAwOmQudHlwZXNldHRpbmdPcHRpb25zLG09ITEhPT11JiYodXx8XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViksXz11c2VSZWYoITEpLGI9dXNlUmVmKCExKTtyZXR1cm4hYi5jdXJyZW50JiZudWxsIT09Zi5jdXJyZW50JiZtJiZcImV2ZXJ5XCI9PT1oJiZcInBvc3RcIj09PXYmJihmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiKSwoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz91c2VMYXlvdXRFZmZlY3Q6dXNlRWZmZWN0KShmdW5jdGlvbigpe2lmKChtfHwhXy5jdXJyZW50KSYmbnVsbCE9PWYuY3VycmVudCl7aWYoIWQpdGhyb3cgRXJyb3IoXCJNYXRoSmF4IHdhcyBub3QgbG9hZGVkLCBkaWQgeW91IHVzZSB0aGUgTWF0aEpheCBjb21wb25lbnQgb3V0c2lkZSBvZiBhIE1hdGhKYXhDb250ZXh0P1wiKTtpZihcInByZVwiPT09dil7aWYoIShcInN0cmluZ1wiPT10eXBlb2YodD1zKSYmMDx0Lmxlbmd0aCkpdGhyb3cgRXJyb3IoXCJSZW5kZXIgbW9kZSAncHJlJyByZXF1aXJlcyB0ZXh0IHByb3AgdG8gYmUgc2V0IGFuZCBub24tZW1wdHksIHdoaWNoIHdhcyBjdXJyZW50bHkgXFxcIlwiLmNvbmNhdChzLCdcIicpKTtpZighYXx8IWEuZm4pdGhyb3cgRXJyb3IoXCJSZW5kZXIgbW9kZSAncHJlJyByZXF1aXJlcyAndHlwZXNldHRpbmdPcHRpb25zJyBwcm9wIHdpdGggJ2ZuJyBwcm9wZXJ0eSB0byBiZSBzZXQgb24gTWF0aEpheCBlbGVtZW50IG9yIGluIHRoZSBNYXRoSmF4Q29udGV4dFwiKTtpZigyPT09ZC52ZXJzaW9uKXRocm93IEVycm9yKFwiUmVuZGVyIG1vZGUgJ3ByZScgb25seSBhdmFpbGFibGUgd2l0aCBNYXRoSmF4IDMsIGFuZCB2ZXJzaW9uIDIgaXMgY3VycmVudGx5IGluIHVzZVwiKX1cInBvc3RcIiE9PXYmJnM9PT15LmN1cnJlbnR8fGIuY3VycmVudHx8KGIuY3VycmVudD0hMCwzPT09ZC52ZXJzaW9uP2QucHJvbWlzZS50aGVuKGZ1bmN0aW9uKGUpe3ZhciBuO1wicHJlXCI9PT12PyhuPWZ1bmN0aW9uKHQpe3kuY3VycmVudD1zLGUuc3RhcnR1cC5kb2N1bWVudC5jbGVhcigpLGUuc3RhcnR1cC5kb2N1bWVudC51cGRhdGVEb2N1bWVudCgpLG51bGwhPT1mLmN1cnJlbnQmJihmLmN1cnJlbnQuaW5uZXJIVE1MPXQub3V0ZXJIVE1MKSxyKCl9LGEuZm4uZW5kc1dpdGgoXCJQcm9taXNlXCIpP2Uuc3RhcnR1cC5wcm9taXNlLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZVtnLmZuXShzLF9fYXNzaWduKF9fYXNzaWduKHt9LChudWxsPT1nP3ZvaWQgMDpnLm9wdGlvbnMpfHx7fSkse2Rpc3BsYXk6IWl9KSl9KS50aGVuKG4pLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KTplLnN0YXJ0dXAucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCl7dmFyIHQ9ZVtnLmZuXShzLF9fYXNzaWduKF9fYXNzaWduKHt9LChudWxsPT1nP3ZvaWQgMDpnLm9wdGlvbnMpfHx7fSkse2Rpc3BsYXk6IWl9KSk7bih0KX0pLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KSk6ZS5zdGFydHVwLnByb21pc2UudGhlbihmdW5jdGlvbigpe3JldHVybiBlLnR5cGVzZXRDbGVhcihbZi5jdXJyZW50XSksZS50eXBlc2V0UHJvbWlzZShbZi5jdXJyZW50XSl9KS50aGVuKHIpLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KX0pLmNhdGNoKGZ1bmN0aW9uKHQpe3Rocm93IHIoKSxFcnJvcih0eXBlc2V0dGluZ0ZhaWxlZCh0KSl9KTpkLnByb21pc2UudGhlbihmdW5jdGlvbih0KXt0Lkh1Yi5RdWV1ZShbXCJUeXBlc2V0XCIsdC5IdWIsZi5jdXJyZW50XSksdC5IdWIuUXVldWUocil9KS5jYXRjaChmdW5jdGlvbih0KXt0aHJvdyByKCksRXJyb3IodHlwZXNldHRpbmdGYWlsZWQodCkpfSkpfXZhciB0fSksUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIixfX2Fzc2lnbih7fSxwLHtzdHlsZTpfX2Fzc2lnbihfX2Fzc2lnbih7ZGlzcGxheTppP1wiaW5saW5lXCI6XCJibG9ja1wifSxwLnN0eWxlKSx7dmlzaWJpbGl0eTpoP1wiaGlkZGVuXCI6bnVsbD09KHQ9cC5zdHlsZSk/dm9pZCAwOnQudmlzaWJpbGl0eX0pLHJlZjpmfSksYyl9O2V4cG9ydCBkZWZhdWx0IE1hdGhKYXg7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/MathJax.js\n");

/***/ }),

/***/ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/index.js":
/*!*******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/index.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathJax: () => (/* reexport safe */ _MathJax__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _MathJax__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MathJax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathJax */ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/MathJax.js");


/***/ }),

/***/ "../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/index.js":
/*!*******************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/index.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},MathJax_1=(Object.defineProperty(exports,\"__esModule\",{value:!0}),exports.MathJaxBaseContext=exports.MathJaxContext=exports.MathJax=void 0,__webpack_require__(/*! ./MathJax */ \"../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJax/index.js\")),MathJaxContext_1=(Object.defineProperty(exports,\"MathJax\",{enumerable:!0,get:function(){return __importDefault(MathJax_1).default}}),__webpack_require__(/*! ./MathJaxContext */ \"../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/esm/MathJaxContext/index.js\"));Object.defineProperty(exports, \"MathJaxContext\", ({enumerable:!0,get:function(){return __importDefault(MathJaxContext_1).default}})),Object.defineProperty(exports, \"MathJaxBaseContext\", ({enumerable:!0,get:function(){return MathJaxContext_1.MathJaxBaseContext}}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JldHRlci1yZWFjdC1tYXRoamF4QDIuMC4zX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvYmV0dGVyLXJlYWN0LW1hdGhqYXgvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWEsNERBQTRELDBCQUEwQixXQUFXLHdEQUF3RCxTQUFTLEVBQUUsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxRQUFRLG1CQUFPLENBQUMsMElBQVcsOERBQThELDZCQUE2QiwyQ0FBMkMsRUFBRSxtQkFBTyxDQUFDLHdKQUFrQixHQUFHLGtEQUErQyxDQUFDLDZCQUE2QixrREFBa0QsRUFBQyxDQUFDLHNEQUFtRCxDQUFDLDZCQUE2Qiw0Q0FBNEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhd2EtZG9jcy8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmV0dGVyLXJlYWN0LW1hdGhqYXhAMi4wLjNfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9iZXR0ZXItcmVhY3QtbWF0aGpheC9pbmRleC5qcz9iOThmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfX2ltcG9ydERlZmF1bHQ9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX0sTWF0aEpheF8xPShPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxleHBvcnRzLk1hdGhKYXhCYXNlQ29udGV4dD1leHBvcnRzLk1hdGhKYXhDb250ZXh0PWV4cG9ydHMuTWF0aEpheD12b2lkIDAscmVxdWlyZShcIi4vTWF0aEpheFwiKSksTWF0aEpheENvbnRleHRfMT0oT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJNYXRoSmF4XCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIF9faW1wb3J0RGVmYXVsdChNYXRoSmF4XzEpLmRlZmF1bHR9fSkscmVxdWlyZShcIi4vTWF0aEpheENvbnRleHRcIikpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiTWF0aEpheENvbnRleHRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gX19pbXBvcnREZWZhdWx0KE1hdGhKYXhDb250ZXh0XzEpLmRlZmF1bHR9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJNYXRoSmF4QmFzZUNvbnRleHRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aEpheENvbnRleHRfMS5NYXRoSmF4QmFzZUNvbnRleHR9fSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/better-react-mathjax@2.0.3_react@18.2.0/node_modules/better-react-mathjax/index.js\n");

/***/ })

};
;