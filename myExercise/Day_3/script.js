// A function in JavaScript is a block of code designed to perform a specific task. Functions help organize code, reuse logic, and keep things modular.

function greet() {
  console.log("Hello, Good Morning");
}
greet();

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 9);

function sumOfTwo(a, b) {
  sum = a + b;
  return sum;
}
let result = sumOfTwo(3, 3);
console.log(result);

// A function declaration defines a named function using the function keyword. It can be called before it's defined due to JavaScript's hoisting mechanism.

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));

// Function Expression:
// A function expression defines a function as part of an expression, typically by assigning it to a variable. It's not hoisted, so it must be defined before it's called.


// const greet = function(name) {
//     return `Hello, ${name}!`;
// };
// console.log(greet("John"));

// Why Functions?
// Functions can be used multiple times, reducing redundancy.
// Break down complex problems into manageable pieces.
// Manage complexity by hiding implementation details.
// Can call themselves to solve problems recursively.

// Function Invocation
// The function code you have written will be executed whenever it is called.
// Triggered by an event (e.g., a button click by a user).
// When explicitly called from JavaScript code.
// Automatically executed, such as in self-invoking functions.


// Function Expression
// It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment. 
const mul = function (x, y) {
    return x * y;
};
console.log(mul(4, 5)); 


