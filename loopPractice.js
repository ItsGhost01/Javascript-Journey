// for loop
// Syntax of for Loop

// for (Statement 1 ; Statement 2; Statement 3) {
//     // code to be executed
// }


// example of for loop

for (let i = 1; i <= 10; i++){
    console.log(i);
}


// for loop with array

const arr = [1, 2, 3, 4, 5];        
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// While loop 
// syantax of while loop

// while (condition) {
//     // code to be executed
// }


// example of While loop

let i = 1;  
while (i <= 10) {
    console.log(i);
    i++;
}


// do-While loop
// Syntax of do while loop

// do {
//     // code to be executed
// } while (condition);

// example of do-while loop
let j = 1;
do {
    console.log("Value of j: " + j);
    j++;
} while (j <= 10);


// for of loop

// for of loop is used to iterate over the elements of an iterable object such as an array, string, or set. It allows you to access each element directly without needing to use an index.

// syntax of for of loop

// for (variable of iterable) {
//     // code to be executed
// }


// example of for of loop with String

let str = "Hello World";
for (let i of str){
    console.log(i);
}


// for in loop

// for in loop is used to iterate over the properties of an object. It allows you to access each property name (key) directly without needing to use an index.
// syntax of for in loop

// for (variable in object) {
//     // code to be executed
// }

// example of for in loop with Object
let student = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in student){
    console.log("Key: " + key + ": " + "Value: " + student[key]);
}



// Practice Quesions

// Print all Numbers from 1 to 100 and then even numbers from 1 to 100


for (let i = 1; i <= 100; i++){
    console.log(i);
}

// for even numbers from 1 to 100

for ( let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log("Even number: " + i);
    }
}


// for odd numbers from 1 to 100

for ( let i = 0; i <= 100; i++){
    if (i % 2 !== 0){
        console.log("Odd number: " + i);
    }
}

