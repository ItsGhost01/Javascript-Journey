// 2. Function Expression with 'var'
try {
  sayGoodbye(); 
} catch (error) {
  console.log(error.message); // Output: "sayGoodbye is not a function"
}

var sayGoodbye = function() {
  console.log("Goodbye!");
};

// 3. Function Expression with 'let'/'const'
try {
  sayHi();
} catch (error) {
  console.log(error.message); // Output: "Cannot access 'sayHi' before initialization"
}

const sayHi = () => console.log("Hi!");

console.log(username); 
var username = "Sarah";

var displayAge = function() {
  console.log(age);
  var age = 30;
};

displayAge();

// === PHASE 1: CREATION (Hoisting happens here) ===
var username;              // Hoisted with 'undefined'
var displayAge;            // Hoisted with 'undefined'

// === PHASE 2: EXECUTION ===
console.log(username);     // Output: undefined

username = "Sarah";        // Initialization occurs here

displayAge = function() {
  // Inside a function, a new execution context is created!
  // Phase 1 (Local):
  var age;                 // Local variable hoisted with 'undefined'
  
  // Phase 2 (Local):
  console.log(age);        // Output: undefined
  age = 30;
};

displayAge();


{
  // === START OF BLOCK SCOPE ===
  // 'counter' enters the Temporal Dead Zone (TDZ) here
  
  // console.log(counter); // ❌ ReferenceError: Cannot access 'counter' before initialization
  
  let counter = 10; // === TDZ ENDS HERE ===
  
  console.log(counter); // Output: 10
} 