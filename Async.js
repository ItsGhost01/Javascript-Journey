    // Synchronous
// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous
// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructionsimmediately and doesn't block the flow.


// example 

console.log("one");
console.log("two");

setTimeout(() => {
console.log("hello");
}, 4000); //timeout ;

console.log("three");
console.log("four");



// Callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

function sum (a, b) {
    console.log(a + b);
}
function calculator (a, b, callback) {
    callback(a, b);
}

calculator(1, 4, sum); // callback function

// Anoother example of callback function using anonymous function

calculator(1, 4, (a, b) => {
    console.log(a + b);
}); // anonymous function as callback


// callback Hell 
// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure
// (Pyramid of Doom)
// This style of programming becomes difficult to understand manage.


// Nesting

let age = 19;
if(age >= 18) {
    if (age >= 60) {
        console.log(senior)
    } else {
        console.log(middle)
    }
} else {
    console.log(child);
}





// function getData(dataId, getNextData) {
// //2s
// setTimeout(() => {
// console.log("data", dataId);
// if (getNextData) {  
// getNextData();
// }
// }, 2000);
// }

// getData(1, () => {
// getData(2);
// });












// Call back hell

function getData(dataId, getNextData) {
//2s
setTimeout(() => {
console.log("data", dataId);
if (getNextData) {  
getNextData();
}
}, 2000);
}

// callback hell
getData(1, () => {
console.log("getting data2...");    
getData(2, () => {
console.log("getting data3 .... ");
getData(3, () => {
console.log("getting data4 .... ");
getData(4);
});
});
});