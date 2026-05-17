const BaseURL = "https://www.google.com";

BaseURL = "https://www.facebook.com"; // TypeError: Assignment to constant variable.    

const BaseURL = "https://www.amazon.com"; // SyntaxError: Identifier 'BaseURL' has already been declared

//const is block scoped, which means it is only accessible within the block it is defined in (e.g., inside a loop, if statement, or function).
//const does not allow redeclaration of the same variable within the same scope, which helps prevent accidental overwriting of variables.
