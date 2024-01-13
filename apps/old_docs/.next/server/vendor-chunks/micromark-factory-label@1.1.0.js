"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-label@1.1.0";
exports.ids = ["vendor-chunks/micromark-factory-label@1.1.0"];
exports.modules = {

/***/ "../../node_modules/.pnpm/micromark-factory-label@1.1.0/node_modules/micromark-factory-label/dev/index.js":
/*!****************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-factory-label@1.1.0/node_modules/micromark-factory-label/dev/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryLabel: () => (/* binding */ factoryLabel)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ \"../../node_modules/.pnpm/micromark-util-character@1.2.0/node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"../../node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"../../node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/constants.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"../../node_modules/.pnpm/micromark-util-symbol@1.1.0/node_modules/micromark-util-symbol/types.js\");\n/* harmony import */ var uvu_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uvu/assert */ \"../../node_modules/.pnpm/uvu@0.5.6/node_modules/uvu/assert/index.mjs\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */\n\n\n\n\n\n\n\n/**\n * Parse labels.\n *\n * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.\n *\n * ###### Examples\n *\n * ```markdown\n * [a]\n * [a\n * b]\n * [a\\]b]\n * ```\n *\n * @this {TokenizeContext}\n *   Tokenize context.\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole label (`[a]`).\n * @param {TokenType} markerType\n *   Type for the markers (`[` and `]`).\n * @param {TokenType} stringType\n *   Type for the identifier (`a`).\n * @returns {State}\n *   Start state.\n */\n// eslint-disable-next-line max-params\nfunction factoryLabel(effects, ok, nok, type, markerType, stringType) {\n  const self = this\n  let size = 0\n  /** @type {boolean} */\n  let seen\n\n  return start\n\n  /**\n   * Start of label.\n   *\n   * ```markdown\n   * > | [a]\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */\n  function start(code) {\n    ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, 'expected `[`')\n    effects.enter(type)\n    effects.enter(markerType)\n    effects.consume(code)\n    effects.exit(markerType)\n    effects.enter(stringType)\n    return atBreak\n  }\n\n  /**\n   * In label, at something, before something else.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function atBreak(code) {\n    if (\n      size > micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax ||\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||\n      (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket && !seen) ||\n      // To do: remove in the future once we’ve switched from\n      // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,\n      // which doesn’t need this.\n      // Hidden footnotes hook.\n      /* c8 ignore next 3 */\n      (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.caret &&\n        !size &&\n        '_hiddenFootnoteSupport' in self.parser.constructs)\n    ) {\n      return nok(code)\n    }\n\n    if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n      effects.exit(stringType)\n      effects.enter(markerType)\n      effects.consume(code)\n      effects.exit(markerType)\n      effects.exit(type)\n      return ok\n    }\n\n    // To do: indent? Link chunks and EOLs together?\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {\n      effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)\n      effects.consume(code)\n      effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding)\n      return atBreak\n    }\n\n    effects.enter(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.chunkString, {contentType: micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.contentTypeString})\n    return labelInside(code)\n  }\n\n  /**\n   * In label, in text.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */\n  function labelInside(code) {\n    if (\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.eof ||\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code) ||\n      size++ > micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax\n    ) {\n      effects.exit(micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.chunkString)\n      return atBreak(code)\n    }\n\n    effects.consume(code)\n    if (!seen) seen = !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code)\n    return code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ? labelEscape : labelInside\n  }\n\n  /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | [a\\*a]\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */\n  function labelEscape(code) {\n    if (\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket ||\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ||\n      code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket\n    ) {\n      effects.consume(code)\n      size++\n      return labelInside\n    }\n\n    return labelInside(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay1mYWN0b3J5LWxhYmVsQDEuMS4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1sYWJlbC9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLGdEQUFnRDtBQUM3RCxhQUFhLDBDQUEwQztBQUN2RDs7QUFFMEU7QUFDdEI7QUFDUTtBQUNSO0FBQ2I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLElBQUksK0NBQU0sVUFBVSxpRUFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUVBQVM7QUFDdEIsZUFBZSxpRUFBSztBQUNwQixlQUFlLGlFQUFLO0FBQ3BCLGdCQUFnQixpRUFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlFQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUIsb0JBQW9CLGlFQUFLO0FBQ3pCO0FBQ0EsbUJBQW1CLGlFQUFLO0FBQ3hCO0FBQ0E7O0FBRUEsa0JBQWtCLGlFQUFLLGVBQWUsYUFBYSx5RUFBUyxtQkFBbUI7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQUs7QUFDcEIsZUFBZSxpRUFBSztBQUNwQixlQUFlLGlFQUFLO0FBQ3BCLE1BQU0sNEVBQWtCO0FBQ3hCLGVBQWUseUVBQVM7QUFDeEI7QUFDQSxtQkFBbUIsaUVBQUs7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix1RUFBYTtBQUNwQyxvQkFBb0IsaUVBQUs7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFLO0FBQ3BCLGVBQWUsaUVBQUs7QUFDcEIsZUFBZSxpRUFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhd2EtZG9jcy8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLWZhY3RvcnktbGFiZWxAMS4xLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWxhYmVsL2Rldi9pbmRleC5qcz8zZjJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlblR5cGV9IFRva2VuVHlwZVxuICovXG5cbmltcG9ydCB7bWFya2Rvd25MaW5lRW5kaW5nLCBtYXJrZG93blNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2NvZGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29kZXMuanMnXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvbnN0YW50cy5qcydcbmltcG9ydCB7dHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC90eXBlcy5qcydcbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICd1dnUvYXNzZXJ0J1xuXG4vKipcbiAqIFBhcnNlIGxhYmVscy5cbiAqXG4gKiA+IPCfkYkgKipOb3RlKio6IGxhYmVscyBpbiBtYXJrZG93biBhcmUgY2FwcGVkIGF0IDk5OSBjaGFyYWN0ZXJzIGluIHRoZSBzdHJpbmcuXG4gKlxuICogIyMjIyMjIEV4YW1wbGVzXG4gKlxuICogYGBgbWFya2Rvd25cbiAqIFthXVxuICogW2FcbiAqIGJdXG4gKiBbYVxcXWJdXG4gKiBgYGBcbiAqXG4gKiBAdGhpcyB7VG9rZW5pemVDb250ZXh0fVxuICogICBUb2tlbml6ZSBjb250ZXh0LlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIG9mIHRoZSB3aG9sZSBsYWJlbCAoYFthXWApLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IG1hcmtlclR5cGVcbiAqICAgVHlwZSBmb3IgdGhlIG1hcmtlcnMgKGBbYCBhbmQgYF1gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBzdHJpbmdUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBpZGVudGlmaWVyIChgYWApLlxuICogQHJldHVybnMge1N0YXRlfVxuICogICBTdGFydCBzdGF0ZS5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmV4cG9ydCBmdW5jdGlvbiBmYWN0b3J5TGFiZWwoZWZmZWN0cywgb2ssIG5vaywgdHlwZSwgbWFya2VyVHlwZSwgc3RyaW5nVHlwZSkge1xuICBjb25zdCBzZWxmID0gdGhpc1xuICBsZXQgc2l6ZSA9IDBcbiAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICBsZXQgc2VlblxuXG4gIHJldHVybiBzdGFydFxuXG4gIC8qKlxuICAgKiBTdGFydCBvZiBsYWJlbC5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGFzc2VydChjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCwgJ2V4cGVjdGVkIGBbYCcpXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0QnJlYWtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBsYWJlbCwgYXQgc29tZXRoaW5nLCBiZWZvcmUgc29tZXRoaW5nIGVsc2UuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBzaXplID4gY29uc3RhbnRzLmxpbmtSZWZlcmVuY2VTaXplTWF4IHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0IHx8XG4gICAgICAoY29kZSA9PT0gY29kZXMucmlnaHRTcXVhcmVCcmFja2V0ICYmICFzZWVuKSB8fFxuICAgICAgLy8gVG8gZG86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIG9uY2Ugd2XigJl2ZSBzd2l0Y2hlZCBmcm9tXG4gICAgICAvLyBgbWljcm9tYXJrLWV4dGVuc2lvbi1mb290bm90ZWAgdG8gYG1pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWZvb3Rub3RlYCxcbiAgICAgIC8vIHdoaWNoIGRvZXNu4oCZdCBuZWVkIHRoaXMuXG4gICAgICAvLyBIaWRkZW4gZm9vdG5vdGVzIGhvb2suXG4gICAgICAvKiBjOCBpZ25vcmUgbmV4dCAzICovXG4gICAgICAoY29kZSA9PT0gY29kZXMuY2FyZXQgJiZcbiAgICAgICAgIXNpemUgJiZcbiAgICAgICAgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5leGl0KHR5cGUpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICAvLyBUbyBkbzogaW5kZW50PyBMaW5rIGNodW5rcyBhbmQgRU9McyB0b2dldGhlcj9cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmxpbmVFbmRpbmcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgcmV0dXJuIGF0QnJlYWtcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmNodW5rU3RyaW5nLCB7Y29udGVudFR5cGU6IGNvbnN0YW50cy5jb250ZW50VHlwZVN0cmluZ30pXG4gICAgcmV0dXJuIGxhYmVsSW5zaWRlKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gbGFiZWwsIGluIHRleHQuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBsYWJlbEluc2lkZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRTcXVhcmVCcmFja2V0IHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgfHxcbiAgICAgIHNpemUrKyA+IGNvbnN0YW50cy5saW5rUmVmZXJlbmNlU2l6ZU1heFxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBpZiAoIXNlZW4pIHNlZW4gPSAhbWFya2Rvd25TcGFjZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2ggPyBsYWJlbEVzY2FwZSA6IGxhYmVsSW5zaWRlXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYFxcYCwgYXQgYSBzcGVjaWFsIGNoYXJhY3Rlci5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IFthXFwqYV1cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGxhYmVsRXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuYmFja3NsYXNoIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5yaWdodFNxdWFyZUJyYWNrZXRcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gbGFiZWxJbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxJbnNpZGUoY29kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/micromark-factory-label@1.1.0/node_modules/micromark-factory-label/dev/index.js\n");

/***/ })

};
;