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
  Ay: () => (someConstants),
  D9: () => (someConstant)
});

// NAMESPACE OBJECT: ./packages/a/src/something/index.js
var something_namespaceObject = {};
__webpack_require__.r(something_namespaceObject);
__webpack_require__.d(something_namespaceObject, {
  Eo: () => (moduleContant),
  t: () => (someOtherModuleConstant)
});

// NAMESPACE OBJECT: ./packages/b/src/functions.js
var functions_namespaceObject = {};
__webpack_require__.r(functions_namespaceObject);
__webpack_require__.d(functions_namespaceObject, {
  d: () => (someNewFunction),
  V: () => (functions_someOtherFunction)
});

;// CONCATENATED MODULE: ./packages/a/src/someConstants.js
const someFunction = () => console.log("I am a function")
const someConstant = "I am a constant"

const someOtherFunction = () => { console.log("I am another function") }

/* harmony default export */ const someConstants = (someOtherFunction);

;// CONCATENATED MODULE: ./packages/a/src/something/index.js
const moduleContant = 'moduleConstant'
const someOtherModuleConstant = 'someOtherModuleConstant'
const someModuleFunction = () => console.log("hey there")

;// CONCATENATED MODULE: ./packages/a/src/index.js






;// CONCATENATED MODULE: ./packages/b/src/functions.js



const functions_someOtherFunction = () => {
  console.log("hey I'm another function")
}

const someNewFunction = () => {
  console.log("I'm some other function.")
}

;// CONCATENATED MODULE: ./packages/b/src/index.js


;// CONCATENATED MODULE: ./src/index.js



const { someOtherFunction: src_someOtherFunction, someNewFunction: src_someNewFunction } = functions_namespaceObject
const { moduleContant: src_moduleContant, someOtherModuleConstant: src_someOtherModuleConstant } = something_namespaceObject
const { someConstant: src_someConstant } = someConstants_namespaceObject

src_someOtherFunction()
src_someNewFunction()
someConstants()
console.log(src_moduleContant)
console.log(src_someOtherModuleConstant)
console.log(src_someConstant)

/******/ })()
;