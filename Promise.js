
// callback Hell 
// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure
// (Pyramid of Doom)
// This style of programming becomes difficult to understand manage.

// if i have to get data one by one from a server, i have to use callbacks. If i have to get data 4 times, i have to use 4 callbacks. This leads to callback hell.
//   example of callback hell is given below:
// function getData(dataId, getNextData) {
// //2s
// setTimeout(() => {
// console.log("data", dataId);
// if (getNextData) {  
// getNextData();
// }
// }, 2000);
// }

// // callback hell // This is very difficult to understand and manage. It is not a good practice to write code like this. It is better to use Promises or async/await to avoid callback hell.
// getData(1, () => {
// console.log("getting data2...");    
// getData(2, () => {
// console.log("getting data3 .... ");
// getData(3, () => {
// console.log("getting data4 .... ");
// getData(4);
// });
// });
// });


//  { Promise }

// I is a better way to handle asynchronous operations. It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows us to write asynchronous code in a more synchronous manner, making it easier to read and manage.

// Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.
 
// let promise = new Promise((resolve, reject) => {...}) // executor function  function with 2 handlers

// resolve & reject are callbacks provided by JS engine. We can call them to change the state of the promise. resolve is called when the asynchronous operation is successful and reject is called when the asynchronous operation fails.




// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve ("Promise resolved");
//     // reject("Promise rejected");
// });

// console.log(promise); // Promise { 'Promise resolved' }


// Another example of promise  is given below:

// Then and catch are methods of the Promise object. They are used to handle the resolved and rejected states of a promise respectively. Then is called when the promise is resolved and catch is called when the promise is rejected.

const getPromise = () => {
return new Promise((resolve, reject) => {
console.log("I am a promise");
resolve("success");
});
};

let promise = getPromise();
promise.then((res) =>  {
console.log("promise fulfilled", res);
});

promise.catch((err) => {
console.log("promise rejected", err);
});