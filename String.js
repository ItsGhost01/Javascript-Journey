// String is a sequence of characters used to represent text. In JavaScript, strings are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones.


let str = "Hello, World!";
console.log(str); // Output: Hello, World!

// Strings have various methods that allow you to manipulate and work with them. Here are some common string methods:

// methods of String in JavaScript 
// defination of String in JavaScript is a sequence of characters used to represent text. In JavaScript, strings are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones.

// 1. length: Returns the length of the string.
console.log(str.length); // Output: 13
// 2. toUpperCase(): Converts the string to uppercase.
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
// 3. toLowerCase(): Converts the string to lowercase.
console.log(str.toLowerCase()); // Output: hello, world!    

// 4. indexOf(): Returns the index of the first occurrence of a specified value in the string.
console.log(str.indexOf("World")); // Output: 7

// 5. slice(): Extracts a section of the string and returns it as a new string.
console.log(str.slice(0, 5)); // Output: Hello  
// 6. replace(): Replaces a specified value with another value in the string.
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
// 7. split(): Splits the string into an array of substrings based on a specified separator.
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]
// 8. trim(): Removes whitespace from both ends of the string.
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // Output: Hello, World!
// 9. charAt(): Returns the character at a specified index in the string.
console.log(str.charAt(0)); // Output: H
// 10. includes(): Determines whether the string contains a specified value.
console.log(str.includes("World")); // Output: true
// 11. startsWith(): Determines whether the string starts with a specified value.
console.log(str.startsWith("Hello")); // Output: true
// 12. endsWith(): Determines whether the string ends with a specified value.
console.log(str.endsWith("!")); // Output: true

// concatenation of strings
let str1 = "Hello";
let str2 = "World";
let concatenatedStr = str1 + ", " + str2 + "!";
console.log(concatenatedStr); // Output: Hello, World!

// String indices
console.log(str[0]); // Output: H
console.log(str[7]); // Output: W


// Template Literals in javaScript are a way to create strings that can include embedded expressions. They are enclosed by backticks (`) instead of single or double quotes. Template literals allow for easier string interpolation and multi-line strings.

let name = "Alice";
let age = 30;   

// Using template literals to create a string with embedded expressions
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.    


// example of  template literals


 let Student ={
    name: "Bob",
    age: 25,
    grade: "A"
 }
//  How we used to create a string before template literals

console.log("Student Name: " + Student.name + ", Age: " + Student.age + ", Grade: " + Student.grade);

// Using template literals to create a string with embedded expressions

    let studentInfo = `Student Name: ${Student.name}, Age: ${Student.age}, Grade: ${Student.grade}`;
    console.log(studentInfo); // Output: Student Name: Bob, Age: 25, Grade: A


    // String interpolation is the process of embedding expressions within a string. It allows you to create dynamic strings by including variables or expressions directly within the string using template literals.

    // Escape Characters in Strings
    // Escape characters are special characters that allow you to include characters in a string that would otherwise be difficult to represent. In JavaScript, the backslash (\) is used as an escape character. Here are some common escape characters:

    // \n: New line 
    // \t: Tab
    // \\: Backslash
    // \": Double quote
    // \': Single quote



    let fullName = "MonishShrestha";
   let userName = fullName + fullName.length + "@gmail.com"; 

   console.log(userName);