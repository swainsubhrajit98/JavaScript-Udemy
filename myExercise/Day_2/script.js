// Variables are the container used for store values
// variables names are should be unique name
// it can contains letter , digits  $ and _
// it can start with _ and $
// it is case sensitive (x and X both are different)
// we can declare variables using var,let and const keyword
// This things are for advance concept for function, object and array
// if we declare a variable with var we can redeclare and reassign the value (global scope or function scope)
// if we declare a variable with let we can re assign the value but connot re declare it (block level scope)
// if we declare a variable with const we can redeclare or reassign any value to it (block level scope)

var a = 5;
let num = 21;
const pi = 3.14;

// conditional statement
// JavaScript conditional statements allow you to execute specific blocks of code based on conditions. If the condition is met, a particular block of code will run; otherwise, another block of code will execute based on the condition.

//1. If statement
// The if statement is used to evaluate a particular condition. If the condition holds true, the associated code block is executed.

// let x = 20;

// if (x % 2 === 0) {
//   console.log("Even");
// }

// if (x % 2 !== 0) {
//   console.log("Odd");
// }
// 2.If-else
// The if-else statement will perform some action for a specific condition. Here we are using the else statement in which the else statement is written after the if statement and it has no condition in their code block.
// when the condition is true if block  will execute and if the condition is false then the else block will execute

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 3.else- if
// The else if statement in JavaScript allows handling multiple possible conditions and outputs, evaluating more than two options based on whether the conditions are true or false.

const y = 0;

if (y > 0) {
  console.log("Positive.");
} else if (y < 0) {
  console.log("Negative.");
} else {
  console.log("Zero.");
}

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// 4.Switch Statement
// As the number of conditions increases, you can use multiple else-if statements in JavaScript. but when we dealing with many conditions, the switch statement may be a more preferred option.
const marks = 85;
// let Branch;
// switch (true) {
//   case marks >= 90:
//     Branch = "Computer science engineering";
//     break;
//   case marks >= 80:
//     Branch = "Mechanical engineering";
//     break;
//   case marks >= 70:
//     Branch = "Chemical engineering";
//     break;
//   case marks >= 60:
//     Branch = "Electronics and communication";
//     break;
//   case marks >= 50:
//     Branch = "Civil engineering";
//     break;
//   default:
//     Branch = "Bio technology";
//     break;
// }
// console.log(`Student Branch name is : ${Branch}`);

switch (true) {
  case marks >= 90:
    console.log("Grade A");
    break;
  case marks >= 80:
    console.log("Grade B");
    break;
  case marks >= 70:
    console.log("Grade C");
    break;
  case marks >= 60:
    console.log("Grade D");
    break;
  case marks >= 50:
    console.log("Grade E");
    break;
  default:
    console.log("Grade F");
    break;
}

// 5.Ternary Operator
// The conditional operator, also referred to as the ternary operator (?:), is a shortcut for expressing conditional statements in JavaScript.
// let myAge = 21;

// const result =
//   myAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
// console.log(result);

// let speed = 80;
// let driveSafety = speed >= 80 ? "Its over Speeding" : "Your speed is normal";
// console.log(driveSafety);

// 6. Nested if…else
// Nested if…else statements in JavaScript allow us to create complex conditional logic by checking multiple conditions in a hierarchical manner. Each if statement can have an associated else block, and within each if or else block, you can nest another if…else statement. This nesting can continue to multiple levels, but it’s important to maintain readability and avoid excessive complexity.
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
  if (temperature > 30) {
    console.log("It's a hot day!");
  } else if (temperature > 20) {
    console.log("It's a warm day.");
  } else {
    console.log("It's a bit cool today.");
  }
} else if (weather === "rainy") {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Check the weather forecast!");
}

// JavaScript loops
// Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing a block of code as long as a specified condition is true. This makes code more concise and efficient.
// Suppose we want to print ‘Hello World’ five times. Instead of manually writing the print statement repeatedly, we can use a loop to automate the task and execute it based on the given condition.

// for (let i = 0; i < 5; i++) {
//   console.log("Hello World!");
// }

// 1.for loops
// The for loop repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.

// for (let i = 1; i <= 3; i++) {
//   console.log("Count:", i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log("Even ", i);
//   } else {
//     console.log("Odd ", i);
//   }
// }

// 2.While loop
// The while loop executes as long as the condition is true. It can be thought of as a repeating if statement.
// let i = 0;
// while (i < 3) {
//   console.log("Number:", i);
//   i++;
// }

// 3.  do-while Loop
// The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.
// do {
//   console.log("Iteration:", i);
//   i++;
// } while (i < 3);

// Some Examples
// You are given a number n and a limit. Use a loop to print the first limit multiples of n, separated by commas

// let n = 3;
// let limit = 5;
// let result = "";
// for (let i = 1; i <= limit; i++) {
//   result += i * n;
//   if (i < limit) {
//     result += ", ";
//   }
// }
// console.log(result);

// You are given a number x and need to check if x is positive, negative, or zero using a conditional statement. After that, print a message based on the result:

// If x is positive, print "Positive number".
// If x is negative, print "Negative number".
// If x is zero, print "Zero

// let x = 1;

// if (x > 0) {
//   console.log("Positive Number");
// } else if (x < 0) {
//   console.log("Negative Number");
// } else {
//   console.log("Zero");
// }

// You are given a number and need to print the following based on the value of number:

// If number is divisible by 3, print "Fizz".
// If number is divisible by 5, print "Buzz".
// If number is divisible by both 3 and 5, print "FizzBuzz".
// If number is not divisible by either, print "Not divisible by 3 or 5".

// let number = 15;
// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//   console.log("Fizz");
// } else if (number % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log("Not divisible by 3 or 5");
// }

// Write a loop that prints all even numbers between 1 and 20 (inclusive), separated by commas.
// let evenNum = "";
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     evenNum += i;
//     if (i < 20) {
//       evenNum += ", ";
//     }
//   }
// }
// console.log(evenNum);

// Write a program that prints all numbers from 1 to 50, but with the following rules:
// For multiples of 3, print "Fizz".
// For multiples of 5, print "Buzz".
// For multiples of both 3 and 5, print "FizzBuzz".
// For other numbers, print the number itself.

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// You are given a number x, and you need to print whether it’s a prime number or not using a loop and conditional statements.
// A prime number is a number that is only divisible by 1 and itself.
// let z = 7;
// let isPrime = true;

// if (z <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < z; i++) {
//     if (z % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log("Prime number");
// } else {
//   console.log("Not a prime number");
// }

// You are given a number x, and you need to print whether it’s a prime number or not using a loop and conditional statements.
// However, for this task:
// If x is a prime number, print "Prime number".
// If x is not a prime number, print "Not a prime number".
// If x is less than or equal to 1, print "Input is less than or equal to 1".
// let z = 0;
// let isPrime = true;
// if (z <= 1) {
//   console.log("Input is less than or equal to 1");
// } else {
//   for (let i = 2; i < z; i++) {
//     if (z % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log("Prime number");
//   } else {
//     console.log("Not a prime number");
//   }
// }

// For Loop within Another For Loop
// This is the most straightforward approach, where a for loop is placed inside another for loop. It is often used for iterating over two-dimensional arrays or creating simple patterns.

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

//nested while loop

let i = 1;
while (i <= 3) {
    let j = 1;
    while (j <= 3) {
        console.log(`i = ${i}, j = ${j}`);
        j++;
    }
    i++;
}
