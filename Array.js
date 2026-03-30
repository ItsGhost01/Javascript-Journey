//  Arrays in JavaScript are used to store multiple values in a single variable. They are ordered collections of data, and each value in an array is called an element. Arrays can hold any type of data, including numbers, strings, objects, and even other arrays.

// Arrays are created using square brackets [] and elements are separated by commas. You can access individual elements of an array using their index, which starts at 0.


 // strings, arrays and objects in JavaScript are iterable objects, which means they can be looped through using loops like for, for...of, and for...in. This allows you to perform operations on each element of the string, array, or object.
let marks = [85, 90, 78, 92, 88];

// Accessing elements of the array
console.log(marks[0]); // Output: 85
console.log(marks[2]); // Output: 78
console.log(marks.length); // Output: 5 // Length of the array (Property)



let heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"]; 

// Looping through the array using for loop

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// for of loop is used to iterate over the elements of an iterable object such as an array, string, or set. It allows you to access each element directly without needing to use an index.

// syntax of for of loop    

// for (variable of iterable) {
//     // code to be executed
// }    


// example of for of loop

for (let hero of heroes) {
    console.log(hero);
}   

// We can use method in array to perform various operations on the array. Here are some common array methods:

// like uppercase, lowercase, length, push, pop, shift, unshift, indexOf, slice, splice, etc. These methods allow you to manipulate and work with arrays in different ways.


// example of array methods

let cities = ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Birgunj"];

for (let city of cities) {
    console.log(city.toUpperCase());
}


// Question: Avg of marks 


let marks1 = [85, 97, 44, 76, 60];
let sum = 0;

for (let mark of marks1) {
    sum += mark;
}   
let avg = sum / marks1.length;
console.log("Average marks: " + avg);


// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];

// for of loop

let i = 0;
for (let val of items) {
    let offer = val * 0.10; // Calculate 10% OFF
    items [i] = val - offer; // Update the price after applying the offer
    console.log(`Final price of item = ${items[i]}`); // Print the updated price
    i++;
}


// for loop

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10; // Calculate 10% OFF
    items[i] -= offer; // Update the price after applying the offer
    console.log(`Final price of item = ${items[i]}`); // Print the updated price
}       
console.log("Final prices after applying 10% OFF: " + items);
