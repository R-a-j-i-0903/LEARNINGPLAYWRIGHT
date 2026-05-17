console.log(x); // ReferenceError: Cannot access 'x' before initialization

//TDZ - Temporal Dead Zone
// The TDZ is the time between the start of a block and the point where a variable declared with let or const is initialized. During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError.
// In the above code, we are trying to access the variable x before it has been initialized. Since x is declared with let, it is in the TDZ until it is initialized with a value. Therefore, when we try to log x before its initialization, we get a ReferenceError.
//let and const are hoisted to the top of their block scope, but they are not initialized until their declaration is evaluated. This means that if you try to access a let or const variable before its declaration, you will get a ReferenceError because it is in the TDZ.    

let x = 10;
console.log(x); 