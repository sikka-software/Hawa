"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/decode-named-character-reference@1.0.2";
exports.ids = ["vendor-chunks/decode-named-character-reference@1.0.2"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeNamedCharacterReference: () => (/* binding */ decodeNamedCharacterReference)\n/* harmony export */ });\n/* harmony import */ var character_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! character-entities */ \"(rsc)/../../node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js\");\n\nconst own = {}.hasOwnProperty;\n/**\n * Decode a single character reference (without the `&` or `;`).\n * You probably only need this when you’re building parsers yourself that follow\n * different rules compared to HTML.\n * This is optimized to be tiny in browsers.\n *\n * @param {string} value\n *   `notin` (named), `#123` (deci), `#x123` (hexa).\n * @returns {string|false}\n *   Decoded reference.\n */ function decodeNamedCharacterReference(value) {\n    return own.call(character_entities__WEBPACK_IMPORTED_MODULE_0__.characterEntities, value) ? character_entities__WEBPACK_IMPORTED_MODULE_0__.characterEntities[value] : false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlY29kZS1uYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlQDEuMC4yL25vZGVfbW9kdWxlcy9kZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUVwRCxNQUFNQyxNQUFNLENBQUMsRUFBRUMsY0FBYztBQUU3Qjs7Ozs7Ozs7OztDQVVDLEdBQ00sU0FBU0MsOEJBQThCQyxLQUFLO0lBQ2pELE9BQU9ILElBQUlJLElBQUksQ0FBQ0wsaUVBQWlCQSxFQUFFSSxTQUFTSixpRUFBaUIsQ0FBQ0ksTUFBTSxHQUFHO0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF3YS1kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9kZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZUAxLjAuMi9ub2RlX21vZHVsZXMvZGVjb2RlLW5hbWVkLWNoYXJhY3Rlci1yZWZlcmVuY2UvaW5kZXguanM/ZmY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NoYXJhY3RlckVudGl0aWVzfSBmcm9tICdjaGFyYWN0ZXItZW50aXRpZXMnXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogRGVjb2RlIGEgc2luZ2xlIGNoYXJhY3RlciByZWZlcmVuY2UgKHdpdGhvdXQgdGhlIGAmYCBvciBgO2ApLlxuICogWW91IHByb2JhYmx5IG9ubHkgbmVlZCB0aGlzIHdoZW4geW914oCZcmUgYnVpbGRpbmcgcGFyc2VycyB5b3Vyc2VsZiB0aGF0IGZvbGxvd1xuICogZGlmZmVyZW50IHJ1bGVzIGNvbXBhcmVkIHRvIEhUTUwuXG4gKiBUaGlzIGlzIG9wdGltaXplZCB0byBiZSB0aW55IGluIGJyb3dzZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBgbm90aW5gIChuYW1lZCksIGAjMTIzYCAoZGVjaSksIGAjeDEyM2AgKGhleGEpLlxuICogQHJldHVybnMge3N0cmluZ3xmYWxzZX1cbiAqICAgRGVjb2RlZCByZWZlcmVuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZSh2YWx1ZSkge1xuICByZXR1cm4gb3duLmNhbGwoY2hhcmFjdGVyRW50aXRpZXMsIHZhbHVlKSA/IGNoYXJhY3RlckVudGl0aWVzW3ZhbHVlXSA6IGZhbHNlXG59XG4iXSwibmFtZXMiOlsiY2hhcmFjdGVyRW50aXRpZXMiLCJvd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlIiwidmFsdWUiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js\n");

/***/ })

};
;