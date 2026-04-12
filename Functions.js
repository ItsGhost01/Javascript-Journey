// Functions in Js

//Block of code that performs a specific task is called a function. Functions are reusable pieces of code that can be called multiple times throughout a program. They help to break down complex problems into smaller, more manageable parts, and they promote code reusability and modularity.

// function syntax of function

// // function functionName(parameters) {
// //     // code to be executed
// // }

// example of function // Function Declartion

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
let multiply = (a, b) => { // these are poarameters 
    return a * b; 
};
console.log(multiply(5, 10)); // Output: 50 // These are arguments

// If the function body contains only a single expression, you can omit the curly braces and the return keyword. The value of the expression will be automatically returned.
let square = a => a * a;
console.log(square(5)); // Output: 25


// another way of creating function // function expression

let fnc = function(){
console.log("hellonjfhkafa");
};

fnc();


// default parameters 

function multiple(a = 0, b = 0){
    console.log(v1, v2);
}

multiple();

// Rest and Spread

function abcd(...val) {
    console.log(val);
}

abcd(1, 2, 3, 4, 5, 6);



// first class function fucntion used as or treat as values

let abcd = function(val) {
    val();
}

abcd(function() {
    console.log("hey");
});


// high order function

function abcs(val){
    val();
} // this is higher order function because it is taking parameter

abcd(function() {

})


// pure and impure functions

// for example 


let a = 12;

function pure() {
    console.log("hi i am pure");
}

function impure() {
    a++;
}

// those function which can change to values of the outside of the function are impure function and which does not change are pure function


// closures and lexical scoping

// closure is a function which return one more function and the function which is return always uses parent functions varilable

// for example 


function closure() {
    let a= 12;
    return function(){
        console.log(a);
    }
}


// lexical scoping


function abcd() {
    let a= 12;
    function defg() {
        let b =13;
        function ghij () {
            let c =14;
        }
    }
}

// IFFE (immediately invoked function expression)  

// for example

(function (){
console.log("hello i am IFFE")
}) ();


// hoisting

abcd ();


function abcd() {
    console.log("hi i am hoisting");
} // it runs when statements are created

let abcd= function abcd() {
    console.log("hi i am hoisting");
} // it does not runs when expression are created


