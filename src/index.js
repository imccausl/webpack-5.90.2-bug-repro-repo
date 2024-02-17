import { goodFunction, otherThings, someModuleConstants } from "package-a"
import { functions } from "package-b"

const { someOtherFunction, someNewFunction } = functions
const { moduleContant, someOtherModuleConstant } = someModuleConstants
const { someConstant } = otherThings

someOtherFunction()
someNewFunction()
goodFunction()
console.log(moduleContant)
console.log(someOtherModuleConstant)
console.log(someConstant)
