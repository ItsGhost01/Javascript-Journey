// // forEach loop in Array 
// arr.forEach(Callbackfunction)

// CallbackFunction: Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.

// arr.forEach(function(val) =>{
//     console.log(val);
// })

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
    console.log(val);
});


arr.forEach((val) => {
    console.log(val);
});

// *Note: forEach loop does not return anything, it is used to perform side effects (like printing values)  rather than producing a new array.

// there are 3 parameters in forEach loop
// 1. currentValue: The current element being processed in the array.
// 2. index (optional): The index of the current element being processed in the array.
// 3. array (optional): The array that forEach is being applied to.

// interview imp
// higher order function: A higher-order function is a function that takes another function as an argument or returns a function as its result. forEach is an example of a higher-order function because it takes a callback function as an argument to execute for each element in the array.



// question: fir a given array of numbers, print the square of each number using forEach loop.

let numbers = [2, 3, 4, 5, 6];

numbers.forEach((num) => {
    console.log(num ** 2);
});

// question: Given an array of strings, print the length of each string using forEach loop.

let strings = ["Hello", "World", "JavaScript", "forEach"];

strings.forEach((str) => {
    console.log("Length of Each String:", str.length);
});





// question: Given an array of objects representing people with properties name and age, print the name of each person using forEach loop.

let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

people.forEach((person) => {
    console.log("Name of Each Person:", person.name);
});



// another way of using call back function in forEach loop
let nums = [67, 45, 23, 89, 12];

let calcSquare = (num) => {
    console.log(num ** 2);
}

nums.forEach(calcSquare);


// array Methods: map, filter, reduce, forEach, find, findIndex, some, every, etc.


