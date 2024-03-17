function getDataType(value) {
  if (typeof value === "number") {
    return "Number";
  } else if (typeof value === "string") {
    return "String";
  } else if (typeof value === "boolean") {
    return "Boolean";
  } else if (value === undefined) {
    return "Undefined";
  } else if (value === null) {
    return "Null";
  } else if (Array.isArray(value)) {
    return "Array";
  } else if (typeof value === "object") {
    return "Object";
  } else if (typeof value === "function") {
    return "Function";
  } else {
    return "End";
  }
}

console.log(getDataType(42)); // Should output: "Number"
console.log(getDataType("hello")); // Should output: "String"
console.log(getDataType(true)); // Should output: "Boolean"
console.log(getDataType(undefined)); // Should output: "Undefined"
console.log(getDataType(null)); // Should output: "Null"
console.log(getDataType([1, 2, 3])); // Should output: "Array"
console.log(getDataType({})); // Should output: "Object"
console.log(getDataType(function () {})); // Should output: "Function"
