//let is block scoped, which means it is only accessible within the block it is defined in (e.g., inside a loop, if statement, or function).

//let does not allow redeclaration of the same variable within the same scope, which helps prevent accidental overwriting of variables.

let retrycount = 3;
retrycount = 4; //reassignment allowed for let
retrycount = retrycount + 1; //reassignment allowed for let
console.log(retrycount);
//let retrycount = 5; // This will throw an error because redeclaration is not allowed for let


let status = "pending";
if (status == "pending") {
    let executionTime = "10:00 AM"; //executionTime is only accessible within this block    
    console.log("Execution time is: " + executionTime);
}

//console.log(executionTime); // This will throw an Reference error because executionTime is not accessible outside the block    

