let age = 14;// This is a number literal
let name = "Rajeswari"; // This is a string literal
let isStudent = true; // This is a boolean literal
let x = null; // This is a null literal
let y = undefined; // This is an undefined literal
let arr = [1, 2, 3]; // This is an array literal
let obj = { name: "Rajeswari", age: 14 }; // This is an object literal
let func = function () { console.log("Hello"); }; // This is a function literal

console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isStudent);  // boolean
console.log(typeof x); // object (this is a known quirk in JavaScript)
// Note: typeof null returns "object" due to a historical bug in JavaScript. It is important to remember that null is not actually an object, but rather a primitive value that represents the intentional absence of any object value.
console.log(typeof y); // undefined
console.log(typeof arr); // object (arrays are a type of object in JavaScript)
console.log(typeof obj); // object
console.log(typeof func); // function       