// If statement
/* let mode = 'dark';
let color;
if (mode === 'dark'){
    color = 'Black';
}
console.log(color); */


// If else statement  examples
  
/* let mode = 'dark';
let color;
if (mode === 'dark'){
    color = 'Black';
} else{
    color = 'light';
}
console.log(color);  */


let age = 24;
if (age > 18){
    console.log('you can vote');
} else {
    console.log('you cannot vote');
}

// even and odd example 
let num = 7;

if (num%2 === 0){
    console.log(num, 'is Even');
} else{
    console.log(num, 'is odd');
}


//else if statement

let mode = 'Green';
let color;
if (mode === 'dark'){
    color = 'Black';
} else if(mode === 'blue'){
    color = 'blue';
} else if(mode === 'light'){
    color = 'White';
} else if(mode === 'purple'){
    color = 'purple';
} else {
    color = 'Yellow';
}

console.log(color);


// Ternery operators

let agge = 16;
let result = agge >= 18 ? 'Adult' : 'Not adult';
console.log('Result :', result);