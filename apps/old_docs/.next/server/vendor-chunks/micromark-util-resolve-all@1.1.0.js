"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all@1.1.0";
exports.ids = ["vendor-chunks/micromark-util-resolve-all@1.1.0"];
exports.modules = {

/***/ "../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js":
/*!******************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Resolver} Resolver\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n */\n\n/**\n * Call all `resolveAll`s.\n *\n * @param {Array<{resolveAll?: Resolver | undefined}>} constructs\n *   List of constructs, optionally with `resolveAll`s.\n * @param {Array<Event>} events\n *   List of events.\n * @param {TokenizeContext} context\n *   Context used by `tokenize`.\n * @returns {Array<Event>}\n *   Changed events.\n */\nfunction resolveAll(constructs, events, context) {\n  /** @type {Array<Resolver>} */\n  const called = []\n  let index = -1\n\n  while (++index < constructs.length) {\n    const resolve = constructs[index].resolveAll\n\n    if (resolve && !called.includes(resolve)) {\n      events = resolve(events, context)\n      called.push(resolve)\n    }\n  }\n\n  return events\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsQDEuMS4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxhQUFhLHNDQUFzQztBQUNuRCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLGdEQUFnRDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sa0NBQWtDLEdBQUc7QUFDdkQ7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGF3YS1kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbEAxLjEuMC9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwvaW5kZXguanM/ZDQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXZlbnR9IEV2ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICovXG5cbi8qKlxuICogQ2FsbCBhbGwgYHJlc29sdmVBbGxgcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHtyZXNvbHZlQWxsPzogUmVzb2x2ZXIgfCB1bmRlZmluZWR9Pn0gY29uc3RydWN0c1xuICogICBMaXN0IG9mIGNvbnN0cnVjdHMsIG9wdGlvbmFsbHkgd2l0aCBgcmVzb2x2ZUFsbGBzLlxuICogQHBhcmFtIHtBcnJheTxFdmVudD59IGV2ZW50c1xuICogICBMaXN0IG9mIGV2ZW50cy5cbiAqIEBwYXJhbSB7VG9rZW5pemVDb250ZXh0fSBjb250ZXh0XG4gKiAgIENvbnRleHQgdXNlZCBieSBgdG9rZW5pemVgLlxuICogQHJldHVybnMge0FycmF5PEV2ZW50Pn1cbiAqICAgQ2hhbmdlZCBldmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQWxsKGNvbnN0cnVjdHMsIGV2ZW50cywgY29udGV4dCkge1xuICAvKiogQHR5cGUge0FycmF5PFJlc29sdmVyPn0gKi9cbiAgY29uc3QgY2FsbGVkID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGNvbnN0cnVjdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgcmVzb2x2ZSA9IGNvbnN0cnVjdHNbaW5kZXhdLnJlc29sdmVBbGxcblxuICAgIGlmIChyZXNvbHZlICYmICFjYWxsZWQuaW5jbHVkZXMocmVzb2x2ZSkpIHtcbiAgICAgIGV2ZW50cyA9IHJlc29sdmUoZXZlbnRzLCBjb250ZXh0KVxuICAgICAgY2FsbGVkLnB1c2gocmVzb2x2ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;