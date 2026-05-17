let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a); // 20 because let is block scoped, so the variable a inside the function printHello is only accessible within the function scope. When we declare let a = 30 inside the if block, it creates a new variable a that is local to the if block. Therefore, when we log "F ->", a after the if block, it will output 20 instead of 30.
}

console.log("G ->", a); // 10 because the variable a declared with let at the global scope is accessible throughout the entire script, including inside the function printHello. However, when we declare let a = 20 inside the function printHello, it creates a new variable a that is local to the function scope. This local variable a does not affect the global variable a. Therefore, when we log "G ->", a outside the function, it will output 10 instead of 20 or 30.

printHello();