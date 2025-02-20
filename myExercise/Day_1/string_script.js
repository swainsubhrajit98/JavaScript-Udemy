// For loop
// The most fundamental and widely used loop is 'for' loop. The "for" loop in JavaScript allows us to execute a block of code repeatedly until a specified condition is met. It's particularly useful when we know how many times you want to iterate.

//  Initialization: This is the first thing executed before the code block execution. This part initializes the loop control variable.

//  Condition: This part specifies the condition for continuing the loop. If the condition evaluates to true, the loop continues; if it evaluates to false, the loop terminates.

//  Increment/Decrement: This part modifies the loop control variable. It is executed after each iteration of the loop.

// Iteration occurs when we want to execute code once for each item in a collection, usually elements in an array or properties of an object
// looping over a sequence of elements
// break : it a keyword which is stop the execution of code when it satisfy a condition true
// continue : its a keyword whick is skip the current itteration when satisfy a condition true

// for(let i =1;i<=10;i++){
//     console.log("Code Babbar",i);
// }

// for(let i =10;i>=1;i--){
//     console.log("Babber code",i)
// }

// for(let i=1;i<=5;i++){
//     if(i == 4){
//         break;
//     }
//     console.log(i);
// }

// for(let i=1;i<=5;i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(i);
// }

// While loop
// The "while" loop in JavaScript provides another method to execute a block of code repeatedly based on a specific condition. The primary difference between the 'for' loop and the 'while' loop lies in their syntax, also we use 'while' loop when the number of iterations is not predetermined or when we want to keep looping until a specific condition is met.

// let i = 1;
// while(i<=10){
//     console.log(i)
// }

// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// while (i <= 5) {
//   if (i == 3) {
//     i++
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let sum = 0;
// while(i <= 10){
//     sum = sum + i;
//     i++;
// }
// console.log(sum);

// Do while loop
// The 'do-while' loop in JavaScript is similar to the 'while' loop but, with one key difference : the condition is checked after the loop body executes. Due to this property if we use 'do-while' loop, the code inside the loop will execute at least once, regardless of the initial condition.

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

// why  we not use do while loop
// let i = 6;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);
// it will run atleast once because it do the execution then check the condtion what's why it run onece

// In contrast to a 'for' loop, which is generally used when the number of iterations is known beforehand, a 'while' loop is ideal for situations where the number of iterations is not predetermined

let score = 85;
let result = "";

if (score >= 90) {
  result = "A";
} else if (score >= 80) {
  result = "B";
} else if (score >= 70) {
  result = "C";
} else {
  result = "F";
}

console.log(`Your grade is: ${result}`);

let firstName = "Alice";
let lastName = "Johnson";
let age = 28;

// Concatenation with `+`
let introduction1 ="Hello, my name is " +firstName +" " +lastName +" and I am " +age +" years old.";
console.log(introduction1);

// Concatenation with Template Literals
let introduction2 = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(introduction2);

// function classifyAge(age) {
//   if (age < 13) {
//     console.log("You are a child.");
//   } else {
//     if (age >= 13 && age <= 17) {
//       console.log("You are a teenager.");
//     } else {
//       if (age >= 18 && age <= 64) {
//         console.log("You are an adult.");
//       } else {
//         console.log("You are a senior.");
//       }
//     }
//   }
// }

// classifyAge(10);
// classifyAge(15);
// classifyAge(30);
// classifyAge(70);

// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"

// function gradeScore(score) {
//   if (score <= 100 && score >= 90) {
//     console.log("Grade A");
//   } else {
//     if (score <= 89 && score >= 80) {
//       console.log("Grade B");
//     } else {
//       if (score <= 79 && score >= 70) {
//         console.log("Grade C");
//       } else {
//         if (score <= 69 && score >= 60) {
//           console.log("Grade D");
//         } else {
//           console.log("Grade F");
//         }
//       }
//     }
//   }
// }
// gradeScore(91);
// gradeScore(81);
// gradeScore(71);
// gradeScore(61);
// gradeScore(51);

// function gradeScore(score) {
//   if (score >= 90 && score <= 100) {
//     console.log("Grade A");
//   } else if (score >= 80 && score < 90) {
//     console.log("Grade B");
//   } else if (score >= 70 && score < 80) {
//     console.log("Grade C");
//   } else if (score >= 60 && score < 70) {
//     console.log("Grade D");
//   } else {
//     console.log("Grade F");
//   }
// }

// gradeScore(91);
// gradeScore(81);
// gradeScore(71);
// gradeScore(61);
// gradeScore(51);

//   Try this out! You’re building a simple ticketing system. Use logical operators and switch statements to check for a valid ticket type:

// 1: General Admission
// 2: VIP
// 3: Student
// 4: Senior
// You need to:

// If the user selects VIP or Student, they get a 10% discount.
// If the user selects Senior, they get a 20% discount.
// General Admission gets no discount.
// Let me know how it goes or if you need help with the solution!

// function getDiscount(ticketType) {
//   let discount = 0;
//   switch (ticketType) {
//     case 1:
//       discount = 0;
//       console.log("You selected General Admission. No discount.");
//       break;

//     case 2:
//     case 3:
//       discount = 0.1;
//       console.log("You selected VIP or Student. 10% discount.");
//       break;
//     case 4:
//       discount = 0.2;
//       console.log("You selected Senior. 20% discount.");
//       break;

//     default:
//       console.log("There is no dicount Available for You");
//       break;
//   }
// }
// getDiscount(1);
// getDiscount(2);
// getDiscount(3);
// getDiscount(4);
// getDiscount(5);

// print even number between 1 to 20
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// print odd number between 1 to 20
// let i = 1;
// while (i <= 20) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }
// Write a do-while loop to print numbers divisible by 3 from 1 to 30.
// let i = 1;
// do {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 30);

// Write a program that calculates the sum of all numbers from 1 to 100 using a for loop.
let sumOfNum =0;
for (let i = 1; i <= 100; i++) {
  sumOfNum += i;
}
console.log(sumOfNum);
