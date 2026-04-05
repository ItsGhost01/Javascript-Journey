
// array Methods: map, filter, reduce, forEach, find, findIndex, some, every, etc.


// Map: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// arr.map(callbackfnx(Value, index, array))

// let newArr = arr.map( ( val ) => {
// return val * 2;
// })
//  example of map method

let number = [67, 45, 23, 89, 12];

let squaredNumbers = number.map((num) => {
    return num ** 2;
});

console.log("Squared Numbers:", squaredNumbers);


// Filter : The filter() method creates a new array of elements that give a true for a condition/filter provided as a callback function. It does not change the original array. 

// example of filter method
arr = [1, 2, 3, 4, 5, 6 , 7 , 8 , 9 , 10];

let filterValues = arr.filter((val) => {
    return val > 3;
});
console.log(`Filtered Values:", ${filterValues}`);

console.log(`Original Array:", ${arr}`);


// Reduce 
// Performs some operations & reduces the array to a single value. It returns that single value.

// example of reduce method

let sumofarray = arr.reduce((prev, curr) => {
    return prev + curr;
}); // here 0 is the initial value of prev, if we do not provide it then the first element of the array will be taken as the initial value of prev.

console.log("Sum of Numbers:", sumofarray);


//  Find the largest number in an array using reduce method.

let largest = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log("Largest Number:", largest);


// practice





//We are given array of marks of students. Filter out of the marks of students that are 90 or above, then calculate the average of those marks using reduce method.

Marks = [ 87, 93, 64, 99, 86, 99 , 91, 78, 85, 92 ];

let filteredMarks = Marks.filter((val) => {
    return val >= 90
    });

console.log("Filtered Marks:", filteredMarks);

let averageMarks = filteredMarks.reduce((prev, curr) => {
    return prev + curr;
}, 0) / filteredMarks.length;

console.log("Average Marks:", averageMarks);       

// Take a number n as input from user. Create an array of numbers from 1 to n.


let n = 5;

let array = [];

for (let i = 1; i <= n; i++) {
    array[i - 1] = i;
}   
console.log("Array of numbers from 1 to n:", array);





// the reduce method to calculate sum of all numbers in the array.

let sum = array.reduce((prev, curr) => {
    return prev + curr;
}); 

console.log("Sum of all numbers in the array:", sum);


// the reduce method to calculate product of all numbers in the array.


let ProductofArray = array.reduce((prev, curr) => {
    return prev * curr;
});
    console.log("Product of all numbers in the array:", ProductofArray);



