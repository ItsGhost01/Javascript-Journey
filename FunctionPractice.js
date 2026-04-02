// Qs. Create a function using the "function" keyword that takes a String as an argument &returns the number of vowels in the string.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU"; // String containing all vowels (both lowercase and uppercase)
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let inputString = "Hello World";
let vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${vowelCount}`);

// Qs. Create an arrow function to perform the same task.
let countVowelsArrow = (str) => {
    let count = 0;
    let vowels = "aeiouAEIOU";  
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }   
    }
    return count;
}
let vowelCountArrow = countVowelsArrow(inputString);
console.log(`Number of vowels in "${inputString}" using arrow function: ${vowelCountArrow}`);
