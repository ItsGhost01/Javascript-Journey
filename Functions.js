// Functions in Js

//Block of code that performs a specific task is called a function. Functions are reusable pieces of code that can be called multiple times throughout a program. They help to break down complex problems into smaller, more manageable parts, and they promote code reusability and modularity.

// function syntax of function

// // function functionName(parameters) {
// //     // code to be executed
// // }

// example of function

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Monish"); // Output: Hello, Monish!


//fuction to calculate the sum of two numbers

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10)); // Output: 15

// return statement is used to return a value from a function. When a return statement is executed, the function stops executing and returns the specified value to the caller. The returned value can be used in other parts of the program or stored in a variable for later use.

// function parameter - they are like local variables of function. ---> block scope



// Arrow Functions in JavaScript are a more concise syntax for writing functions. 

// Syntax of arrow function
// let functionName = (param1, param2) => {
//     // code to be executed
// }


// example of arrow function
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10)); // Output: 50 

// If the function body contains only a single expression, you can omit the curly braces and the return keyword. The value of the expression will be automatically returned.
let square = a => a * a;
console.log(square(5)); // Output: 25

