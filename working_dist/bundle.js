/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// NAMESPACE OBJECT: ./packages/a/src/someConstants.js
var someConstants_namespaceObject = {};
__webpack_require__.r(someConstants_namespaceObject);
__webpack_require__.d(someConstants_namespaceObject, {
  A: () => (someConstants),
  someConstant: () => (someConstant),
  someFunction: () => (someFunction)
});

;// CONCATENATED MODULE: ./packages/a/src/someConstants.js
const someFunction = () => console.log("I am a function")
const someConstant = "I am a constant"

const someOtherFunction = () => { console.log("I am another function") }

/* harmony default export */ const someConstants = (someOtherFunction);

;// CONCATENATED MODULE: ./packages/a/src/index.js




;// CONCATENATED MODULE: ./packages/b/src/index.js


const { someConstant: src_someConstant, someFunction: src_someFunction } = someConstants_namespaceObject

const src_someOtherFunction = () => {
  someConstants()
  src_someFunction()
  console.log(src_someConstant)
}

;// CONCATENATED MODULE: ./src/index.js


src_someOtherFunction()

/******/ })()
;