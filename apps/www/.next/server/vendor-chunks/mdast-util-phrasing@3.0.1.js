"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-phrasing@3.0.1";
exports.ids = ["vendor-chunks/mdast-util-phrasing@3.0.1"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/mdast-util-phrasing@3.0.1/node_modules/mdast-util-phrasing/lib/index.js":
/*!********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/mdast-util-phrasing@3.0.1/node_modules/mdast-util-phrasing/lib/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   phrasing: () => (/* binding */ phrasing)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(rsc)/../../node_modules/.pnpm/unist-util-is@5.2.1/node_modules/unist-util-is/lib/index.js\");\n/**\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n * @typedef {import('unist-util-is').AssertPredicate<PhrasingContent>} AssertPredicatePhrasing\n */ \n/**\n * Check if the given value is *phrasing content*.\n *\n * @param\n *   Thing to check, typically `Node`.\n * @returns\n *   Whether `value` is phrasing content.\n */ const phrasing = /** @type {AssertPredicatePhrasing} */ (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)([\n    \"break\",\n    \"delete\",\n    \"emphasis\",\n    \"footnote\",\n    \"footnoteReference\",\n    \"image\",\n    \"imageReference\",\n    \"inlineCode\",\n    \"link\",\n    \"linkReference\",\n    \"strong\",\n    \"text\"\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21kYXN0LXV0aWwtcGhyYXNpbmdAMy4wLjEvbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtcGhyYXNpbmcvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztDQUdDLEdBRW9DO0FBRXJDOzs7Ozs7O0NBT0MsR0FDTSxNQUFNQyxXQUFXLG9DQUFvQyxHQUMxREQsc0RBQU9BLENBQUM7SUFDTjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxFQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF3YS1kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9tZGFzdC11dGlsLXBocmFzaW5nQDMuMC4xL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXBocmFzaW5nL2xpYi9pbmRleC5qcz81YzJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5QaHJhc2luZ0NvbnRlbnR9IFBocmFzaW5nQ29udGVudFxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QtdXRpbC1pcycpLkFzc2VydFByZWRpY2F0ZTxQaHJhc2luZ0NvbnRlbnQ+fSBBc3NlcnRQcmVkaWNhdGVQaHJhc2luZ1xuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgKnBocmFzaW5nIGNvbnRlbnQqLlxuICpcbiAqIEBwYXJhbVxuICogICBUaGluZyB0byBjaGVjaywgdHlwaWNhbGx5IGBOb2RlYC5cbiAqIEByZXR1cm5zXG4gKiAgIFdoZXRoZXIgYHZhbHVlYCBpcyBwaHJhc2luZyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3QgcGhyYXNpbmcgPSAvKiogQHR5cGUge0Fzc2VydFByZWRpY2F0ZVBocmFzaW5nfSAqLyAoXG4gIGNvbnZlcnQoW1xuICAgICdicmVhaycsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2VtcGhhc2lzJyxcbiAgICAnZm9vdG5vdGUnLFxuICAgICdmb290bm90ZVJlZmVyZW5jZScsXG4gICAgJ2ltYWdlJyxcbiAgICAnaW1hZ2VSZWZlcmVuY2UnLFxuICAgICdpbmxpbmVDb2RlJyxcbiAgICAnbGluaycsXG4gICAgJ2xpbmtSZWZlcmVuY2UnLFxuICAgICdzdHJvbmcnLFxuICAgICd0ZXh0J1xuICBdKVxuKVxuIl0sIm5hbWVzIjpbImNvbnZlcnQiLCJwaHJhc2luZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/mdast-util-phrasing@3.0.1/node_modules/mdast-util-phrasing/lib/index.js\n");

/***/ })

};
;