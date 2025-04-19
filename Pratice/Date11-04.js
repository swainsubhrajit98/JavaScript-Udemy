console.log("Hello Wolrd");

// const products = [
//   { name: "Shirt", price: 1200, inStock: true },
//   { name: "Jeans", price: 2500, inStock: false },
//   { name: "Jacket", price: 3200, inStock: true },
//   { name: "Shoes", price: 2700, inStock: true },
// ];
//   Filter only the products that are in stock
// Extract their prices
// Get the total cost
// let totalCost = products
//   .filter((prod) => prod.inStock)
//   .map((prod) => prod.price)
//   .reduce((acc, price) => acc + price, 0);

// console.log(totalCost);

// call apply bind
function greet(city) {
  return `Hi, I'm ${this.name} from ${city}`;
}

const user = { name: "Subhrajit" };

console.log(greet.call(user, "Odisha"));
console.log(greet.apply(user, ["Jajpur"]));
let boundFun = greet.bind(user, "BBSR");
console.log(boundFun());

// -------------------------------
// call
let details = {
  name: "John Smith",
  fullName: function (age, city) {
    return `Hello ${this.name} and I'm ${age} from ${city}`;
  },
};
let person1 = {
  name: "Rahul",
};
// call
console.log(details.fullName.call(person1, 26, "Odisha"));
// apply
console.log(details.fullName.apply(person1, [21, "Puri"]));
// bind
let persondDetails = details.fullName.bind(person1, 25, "Jajpur");
console.log(persondDetails());

// Find the maximum and minimum number in an array
const numbers = [4, 6, 8, 2, 3, 7, 2, 9, 1];
let maxNumInArray = numbers.reduce((cur, num) => {
  return cur > num ? cur : num;
});
console.log(maxNumInArray);

function minNum(arr) {
  let min = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  return arr[min];
}
console.log(minNum(numbers));
// Reverse an array without using reverse()
function revNumArray(arr) {
  let revArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
}
console.log(revNumArray(numbers));
// Find duplicate elements in an array
// let removeDuplicate = numbers.filter((num,index)=>{
//   return numbers.indexOf(num)!==index
// })
// console.log(removeDuplicate)

function removeDuplicate(arr) {
  return arr.filter((num, index) => arr.indexOf(num) !== index);
}
console.log(removeDuplicate(numbers));

//  Create a function named multiplyByTen that takes a number and returns it multiplied by 10.
function multipleOf10(num) {
  return num * 10;
}
console.log(multipleOf10(7));
// Write a function called greetUser that takes a name and logs:
function greet(name) {
  return `Hello ${name}! How are You ?`;
}
console.log(greet("Alok"));
// Q: Create a function called sumPositiveNumbers that takes an array of numbers and returns the sum of all positive numbers.
function sumPositiveNumbers(arr) {
  sum = 0;
  arr.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}
console.log(sumPositiveNumbers([4, 7, 8, 3, 1, 2]));
function sumOfArray(arr) {
  return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}
console.log(sumOfArray([4, 7, 8, 3, 1, 2]));

// Write a function called countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in it.
function countVowels(str) {
  count = 0;
  vowels = "aeiouAEIOU";
  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Alok kumar Majhee"));
//   Write a function called isPrime(num) that returns true if the number is prime, and false if it’s not.
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));
//   Use .map() to create a new array where each number from the original array is doubled.
let numArray = [2, 3, 4, 5, 6];
let doubledArray = numArray.map((num) => num * 2);
console.log(doubledArray);
// Use .filter() to get only even numbers from the array.
let evenArray = numArray.filter((num) => num % 2 === 0);
console.log(evenArray);
// Use .reduce() to calculate the total sum of all numbers in an array.
let totalOfArray = numArray.reduce((acc, num) => acc + num, 0);
console.log(totalOfArray);
// You have an array of user objects. Use .find() to return the user object with the name "Alok".
const users = [
  { id: 1, name: "Subhrajit" },
  { id: 2, name: "Alok" },
  { id: 3, name: "Sneha" },
];

let Alok = users.find((user) => user.name === "Alok");
console.log(Alok);

// Given an array of ages, check if anyone is under 18.
const ages = [22, 17, 34, 29];
let hasMinor = ages.some((age) => age < 18);
console.log(hasMinor);
// Check if everyone is 18 or older in the same array.
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults);

// You have an array of score objects.
// Write a function to:
// Sort the users based on their score in descending order
// Return the top 3 users
const players = [
  { name: "Subhrajit", score: 88 },
  { name: "Alok", score: 95 },
  { name: "Sneha", score: 78 },
  { name: "Riya", score: 92 },
  { name: "Ankit", score: 85 },
];

let top3Scorer = players.sort((a, b) => b.score - a.score).slice(0, 3);
console.log(top3Scorer);
const products = [
  { name: "Shirt", price: 1200, inStock: true },
  { name: "Jeans", price: 2500, inStock: false },
  { name: "Jacket", price: 3200, inStock: true },
  { name: "Shoes", price: 2700, inStock: true },
];
//   Filter only the products that are in stock
// Extract their prices
// Get the total cost
let TotalCost = products
  .filter((prod) => prod.inStock)
  .reduce((acc, prod) => acc + prod.price, 0);
console.log(TotalCost);

function greetPerson(city, age) {
  return `Hi my name is ${this.name} and ${age} year old from ${city}`;
}

let person = { name: "Subhrajit" };
console.log(greetPerson.call(person, "BBSR", 29));
console.log(greetPerson.apply(person, ["Puri", 21]));
let boundGreetCall = greetPerson.bind(person, "Odisha", 77);
console.log(boundGreetCall());
//call,apply and bind are the inbuild method in which help to change the value of this in a function with whatever value we want
//the only different is how we pass the arguments in call method we pass arguments individual and in apply we pass arguments in an array
//the bind is return a copy of method which we can call/use later
//those methods are allows an object to use the method of another object

let mName = "Subhrajit Swain";
for (let i = 0; i <= mName.length - 1; i++) {
  console.log(mName[i]);
}
// 28.use for loop to reverse a array
let myArray = [5, 4, 3, 2, 1];
let revmyArray = [];
for (let i = myArray.length - 1; i >= 0; i--) {
  revmyArray.push(myArray[i]);
}
console.log(revmyArray);

let allNum = [1, 4, 5, 6, 3, 9, 8, 7];
for (let num of allNum) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
// 29.write a while loop that logs  number from 1 to 100 divided by 5
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
// 39.sort an array of numbers [5,2,9,1] in ascending order
let norArray = [5, 2, 9, 1];
let sortAscArray = norArray.sort((a, b) => a - b);
console.log(sortAscArray);

function isEven(num) {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(5));
//43.write a function  that accepts an array and returns the sum of its element
function sumOfArray(arr) {
  let sum = 0;
  arr.forEach((val) => {
    sum = sum + val;
  });
  return sum;
  // return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumOfArray([1, 4, 5, 6, 3, 9, 8, 7]));
// 44.create function that check if a string starts with a specific  char
function checkChar(str, char) {
  return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(checkChar("amit", "a"));
// 46.write a function that takes a number and return its factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

//largest num in array
let myNewArray = [1, 4, 5, 6, 3, 9, 8, 7, 77, 11];
let maxNuminMyArray = myNewArray.reduce((num, max) => (num > max ? num : max));
console.log(maxNuminMyArray);

//Duplicatev element in Array
let myarr = [2, 4, 6, 2, 8, 7, 9, 4];
let duplicateNum = myarr.filter((ele, ind, arr) => arr.indexOf(ele) !== ind);
console.log(duplicateNum);
