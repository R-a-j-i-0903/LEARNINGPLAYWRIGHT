// Function scope means that variables declared with var are only accessible within the function they are declared in, and not outside of it.
//Function can be reusable


var a = 10;

console.log(a);

function greet() {
    console.log("Welcome");
    var a = 15; //local scope
    console.log(a);
}

greet();

a = 30;
console.log(a);


