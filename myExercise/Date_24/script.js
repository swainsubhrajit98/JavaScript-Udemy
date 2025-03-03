// What is the difference between let, const, and var?
// let : block scope can not be redeclare but value can reassign
// const: block scope can not be reassign and redeclare
// var : function scope it can be reassign and redeclare

// What are primitive and non-primitive data types in JavaScript? Give examples.

// Primitive Data types
// String
// Number
// Boolean
// undefined
// null
// non primitive data types
// Object
// array
// function

let x = "5" + 3; //53
let y = "5" - 3; //2
console.log(x, y);

// What is the difference between == and === in JavaScript?
// == it will only value === will check value along with data types
// Write a program that checks whether a number is positive, negative, or zero using if-else.

let num = 0;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// What will be the output of this code?
let a = 10;
let b = "10";
if (a === b) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

//Not Equal

// What is the difference between for, while, and do-while loops?
// for loop : it is used when the number of iterations is known
// while : it will run as long as the condition is true
// do while : it will atleast once and then check condition

// Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Write a program to print the sum of all even numbers from 1 to 20 using a loop.
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// Write a function to reverse a string in JavaScript.

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("hello"));

// How do you check if a string contains a specific word using JavaScript?
// str.includes("word");

// What does the .split() method do in JavaScript? Give an example.
// it a string method used to devide a tring into an array of sub strings based on a specific separator.

let str = "I am a bad boy";
console.log(str.split(" "));

// What is the difference between map(), filter(), and reduce()?
// map() method create a new array by applying  a function to each element of the original array. it does't modify original array
//filter() methods create a new array with all the elements that pass the condition . it is also not chnage the origial array.
// reduce() methods applies a function to an accumulator and each element of the array to reduce it to a single value.

// Write a program to double each element in an array using the map() method.

let arr = [5, 6, 8, 1, 9, 3, 4];
let doubleValue = arr.map((num) => num * 2);
console.log(doubleValue);

// Use the filter() method to get only numbers greater than 5 from an array.
let filNum = arr.filter((num) => num > 5);
console.log(filNum);

// Find the sum of all numbers in an array using the reduce() method.
let total = arr.reduce((acc, num) => acc + num, 0);
console.log(total);

//every()
// The every() method checks if all elements in an array pass a given test.
// It returns true if every element satisfies the condition; otherwise, it returns false.

const numbers = [10, 20, 30, 40];
const allAbove5 = numbers.every((num) => num > 5);
console.log(allAbove5);
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

//some()
// The some() method checks if at least one element in an array passes a given test.
// It returns true if at least one element meets the condition; otherwise, it returns false.

const ages = [10, 18, 25, 30];
const hasAdults = ages.some((age) => age >= 18);
console.log(hasAdults);
const hasNegative = ages.some((age) => age < 0);
console.log(hasNegative);

//fine()
// The find() method returns the first element in an array that satisfies a given condition.
// If no element meets the condition, it returns undefined.

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 40 },
];

const foundUser = users.find((user) => user.age > 30);
console.log(foundUser);

//   indexOf()
// The indexOf() method returns the first index where a specified element is found.
// If the element is not found, it returns -1.
// It performs a strict comparison (===).

console.log(numbers.indexOf(20));
console.log(numbers.indexOf(50));

//lastIndexOf()
// The lastIndexOf() method works like indexOf(), but it searches from the end of the array.
// If the element is not found, it returns -1.
console.log(numbers.lastIndexOf(20));
console.log(numbers.lastIndexOf(50));

// reverse()
// The reverse() method modifies the original array by reversing its elements.
const arr2 = [1, 2, 3, 4, 5];

arr2.reverse();
console.log(arr2);

// scrollTo()
// The sort() method sorts elements alphabetically by default (converts elements to strings).
// For numeric sorting, you need a compare function.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const numbers2 = [100, 5, 30, 20, 200];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
numbers2.sort((a, b) => b - a);
console.log(numbers2);

/////////////////////////////////////////////////////////////////////
console.log(typeof NaN); //number
console.log(typeof []); //object
console.log(typeof null); //object
console.log(typeof function () {}); //function

// Convert "123" into a number without using parseInt() or Number().
let numStr = "123";
let strNum = +numStr;
console.log(strNum);
console.log(typeof strNum);

// let a = "5" + 2; //52
// let b = "5" - 2; //3
// console.log(a, b);

// let x = 5;
// if (x = 10) {
//     console.log("Equal");
// } else {
//     console.log("Not Equal"); //Not Equal
// }

// Using a ternary operator, check if a number is even or odd.

let chNum = 5;
let checkNum = chNum % 2 === 0 ? "Even" : "Odd";
console.log(checkNum);

// How would you rewrite this if-else statement using a switch statement?

// let fruit = "apple";
// if (fruit === "apple") console.log("Apple selected");
// else if (fruit === "banana") console.log("Banana selected");
// else console.log("Invalid fruit");

let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("Invalid fruit");
    break;
}
// Print numbers from 1 to 10 using all three loops (for, while, do-while).
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("-------------------------------------");
let z = 1;
while (z <= 10) {
  console.log(z);
  z++;
}
console.log("-------------------------------------");

z = 1;
do {
  console.log(z);
  z++;
} while (z <= 10);

console.log("-------------------------------------");
// Write a loop to print the even numbers from 1 to 20.
z = 1;
while (z <= 20) {
  if (z % 2 === 0) {
    console.log(z);
  }
  z++;
}

console.log("-------------------------------------");
// Write a program that reverses a number using a loop.
let myNum = 987456321;
let revNum = myNum.toString().split("").reverse().join("");
console.log(revNum);

// Find the factorial of a number using a for loop.
// n!=n×(n−1)×(n−2)×...×1
// let fact = 1;
// for(let i=1;i<=factorialNo;i++){
//     fact *=i;
// }

function factorialOfNum(num) {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact
}
console.log(factorialOfNum(5));
console.log(factorialOfNum(7));

