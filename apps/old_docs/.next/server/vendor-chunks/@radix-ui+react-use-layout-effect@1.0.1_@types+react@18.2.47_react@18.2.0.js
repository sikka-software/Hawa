/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0"];
exports.modules = {

/***/ "../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $caHyQ$react = __webpack_require__(/*! react */ \"react\");\n\nfunction $parcel$export(e, n, v, s) {\n  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});\n}\n\n$parcel$export(module.exports, \"useLayoutEffect\", () => $ca21affb0542a8a4$export$e5c5a5f917a5871c);\n\n/**\n * On the server, React emits a warning when calling `useLayoutEffect`.\n * This is because neither `useLayoutEffect` nor `useEffect` run on the server.\n * We use this safe version which suppresses the warning by replacing it with a noop on the server.\n *\n * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect\n */ const $ca21affb0542a8a4$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? $caHyQ$react.useLayoutEffect : ()=>{};\n\n\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2UtbGF5b3V0LWVmZmVjdEAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi40N19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtbGF5b3V0LWVmZmVjdC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixtQkFBTyxDQUFDLG9CQUFPOztBQUVsQztBQUNBLCtCQUErQixxREFBcUQ7QUFDcEY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXdhLWRvY3MvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2UtbGF5b3V0LWVmZmVjdEAxLjAuMV9AdHlwZXMrcmVhY3RAMTguMi40N19yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtbGF5b3V0LWVmZmVjdC9kaXN0L2luZGV4LmpzP2Q0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRjYUh5USRyZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuZnVuY3Rpb24gJHBhcmNlbCRleHBvcnQoZSwgbiwgdiwgcykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbiwge2dldDogdiwgc2V0OiBzLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbn1cblxuJHBhcmNlbCRleHBvcnQobW9kdWxlLmV4cG9ydHMsIFwidXNlTGF5b3V0RWZmZWN0XCIsICgpID0+ICRjYTIxYWZmYjA1NDJhOGE0JGV4cG9ydCRlNWM1YTVmOTE3YTU4NzFjKTtcblxuLyoqXG4gKiBPbiB0aGUgc2VydmVyLCBSZWFjdCBlbWl0cyBhIHdhcm5pbmcgd2hlbiBjYWxsaW5nIGB1c2VMYXlvdXRFZmZlY3RgLlxuICogVGhpcyBpcyBiZWNhdXNlIG5laXRoZXIgYHVzZUxheW91dEVmZmVjdGAgbm9yIGB1c2VFZmZlY3RgIHJ1biBvbiB0aGUgc2VydmVyLlxuICogV2UgdXNlIHRoaXMgc2FmZSB2ZXJzaW9uIHdoaWNoIHN1cHByZXNzZXMgdGhlIHdhcm5pbmcgYnkgcmVwbGFjaW5nIGl0IHdpdGggYSBub29wIG9uIHRoZSBzZXJ2ZXIuXG4gKlxuICogU2VlOiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlbGF5b3V0ZWZmZWN0XG4gKi8gY29uc3QgJGNhMjFhZmZiMDU0MmE4YTQkZXhwb3J0JGU1YzVhNWY5MTdhNTg3MWMgPSBCb29sZWFuKGdsb2JhbFRoaXMgPT09IG51bGwgfHwgZ2xvYmFsVGhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsVGhpcy5kb2N1bWVudCkgPyAkY2FIeVEkcmVhY3QudXNlTGF5b3V0RWZmZWN0IDogKCk9Pnt9O1xuXG5cblxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.js\n");

/***/ })

};
;