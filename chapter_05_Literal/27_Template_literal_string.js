// Template Literal string

// Template literals are enclosed by backticks (`) instead of single or double quotes. They allow for multi-line strings and string interpolation (embedding expressions).
// Template literals are a powerful feature in JavaScript that provide a more flexible and readable way to work with strings. They allow you to create multi-line strings without the need for concatenation or escape characters, and they also support string interpolation, which makes it easier to embed expressions and variables directly within the string.
// This allows for easier creation of multi-line strings and the ability to include variables and expressions directly within the string using ${} syntax.

// Example of a template literal string
let name = "John";
let age = 30;
let city = "New York";

let message = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;
console.log(message);