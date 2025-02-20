// Variables
// In javascript : Variable are the container to store the data
// we can declare varible in three ways var,let and const

var myName = "Subhrajit";
let age = 55;
const gravity = 9.8;

console.log("My Name is ", myName);

console.log("My Name is " + myName + " and my age is " + age);

// JavaScript is a dynamic programming language, has various operators to perform operations on data and manipulate values.
// Arithmetic operators
// It is to perform mathematical operations like addition, subtraction,multiplication, and more.

let a = 10;
let b = 5;
console.log("Addition", a + b);
console.log("Substarction", a - b);
console.log("Multiplication", a * b);
console.log("Division", a / b);
console.log("Modulus", a % b);
// console.log("Pre Increment", ++a );
// console.log("Post Increment", b++);
// console.log("Pre Drecement", --a );
// console.log("Post Decrement", b--);

// Assignment Operator
// It is used to assign value to the variables

// let x = 10;
// x +=5;
// console.log(x);//15

// comparision operator
// it is compare the value and return true or false
// console.log(10==10); //true
// console.log(10=="10"); //true
// console.log(10>5); //true
// console.log(10!=5); //false

// also we can check greter than equal less than equal
// strick equality (===) it will check valu along with data types

// ternary operator
// Ternary operator is a concise way to write conditional statements,. It is also known asconditional operator. It has three parts: a condition, statement to execute if the condition is true and the statement to
// execute if the condition is false.

let personAge = 21;
let voteStatus = personAge > 18 ? "Yes,You can vote" : "No,You can not vote";
console.log(voteStatus);

// logical operator
// It used for decision making
// Logical operators are used to connect two or more expressions/conditions to make decisions based on the criteria employed.
//  ADD(&&) when all the conditions are true this logical true code will execute

// origin(||) when condition is true the code will execute
// Not(!)  it is reverse the value like if the value is true then it will return false vallue and vice versa

// let ans = (true && false && true)

// let ans = (false || false || false);
// let ans = !(false);
// console.log(ans);

// console.log(false || 7 || 11 || 18);

// Bitwise Operators
// Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers. There
// are several bitwise operators are used in JavaScript :
// (a) Bitwise AND (&)
// (b) Bitwise OR (|)
// (c) Bitwise NOT (~)
// (d) Bitwise XOR (^)
// (e) Left Shift (<<)
// (f) Right Shift (>>)
// console.log(2 & 5);
// console.log(2 | 5);
// console.log(2 ^ 2);
// console.log(10 << 1);

// conditional Statement
// Conditional statements are fundamental components of programming languages, essential for handling logic and decision-making processes. They allow us to control the flow of our code by executing specific blocks of code based on certain conditions.

// If Statement
// In JavaScript, an 'if' statement is a fundamental conditional statement that allows us to execute a block of code only if the specified condition is true. If the condition is false, the code block associated with the 'if' statement is skipped.

let speed = 70;
if (speed > 90) {
  console.log("OverSpeeding");
}

if (speed > 50 && speed <= 90) {
  console.log("Normal");
}

if (speed <= 50) {
  console.log("Slow");
}

// If-else Statement
// In JavaScript, an 'if-else' statement is a conditional statement that allows us to execute one block of code if a specified condition evaluates to true, and another block of code if the condition evaluates to false.
if (speed > 80) {
  console.log("Over speeding");
} else {
  console.log("You are on good track");
}

let myAge = 21;

if (myAge >= 18) {
  console.log("I can Drive");
} else {
  console.log("Cannot Drive");
}

//  nested if else
let number = 4;
if (number == 1) {
  console.log("A");
} else if (number == 2) {
  console.log("B");
} else if (number == 3) {
  console.log("C");
} else if (number == 4) {
  if (myAge > 18) {
    console.log("Yes, You can vote");
  }
  console.log("D");
} else {
  console.log("F");
}

// If-else-if Statement
// An if-else-if statement is a conditional statement that allows us to test multiple conditions and execute different blocks of code based on the outcome of those conditions. It is an extension of the if-else statement and provides additional flexibility for handling multiple scenarios.

let weight = 65;

if (weight > 70) {
  console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
  console.log("You are Fit");
} else {
  console.log("You are Underweight");
}

// Switch case
// The value of the expression is then compared with the values of each case in the structure. If there is a match, the associated block of code is executed

let myScore = 3;
switch (myScore) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  case 4:
    console.log("D");
    break;
  default:
    console.log("F")
    break;
}
