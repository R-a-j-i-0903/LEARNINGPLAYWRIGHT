var browser = "chrome";
var browser = "firefox"; //redeclaration allowed for var

browser = "edge"; //reassignment allowed for var
console.log(browser);


//var is function scoped, not block scoped
var testcases = ["login", "logout", "search"];

for (var i = 0; i < testcases.length; i++) {
    console.log(testcases[i]);
}

console.log(i); // i is accessible outside the loop when declared with var


// Function scope means that variables declared with var are only accessible within the function they are declared in, and not outside of it.
//Function can be reusable

//Function scope example
// Define a function
function say() {

}