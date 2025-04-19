//  Create a function named multiplyByTen that takes a number and returns it multiplied by 10.
function multiplyByTen(num) {
  return num * 10;
}
const mul10 = multiplyByTen(7);
console.log(mul10);
// Write a function called greetUser that takes a name and logs:
function greetUser(name) {
  console.log("Hello," + name + "!");
}
greetUser("Alok");
// Q: Create a function called sumPositiveNumbers that takes an array of numbers and returns the sum of all positive numbers.
// function sumPositiveNumbers(arr){
//     let sum = 0;
//     for(let num of arr){
//         if(num>0){
//             sum += num
//         }
//     }
//     return sum
// }
// const sumOfPositiveNum = sumPositiveNumbers([1,5,3,4,6]);
// console.log(sumOfPositiveNum);
function sumPositiveNumbers(arr) {
  let sum = 0;
  arr.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}
console.log(sumPositiveNumbers([3, -1, 5, -7, 8]));
// function sumPositiveNumbers(arr) {
//   return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
// }
// console.log(sumPositiveNumbers([3, -1, 5, -7, 8]));
// Write a function called countVowels that takes a string and returns the number of vowels (a, e, i, o, u) in it.

// function countVowels(str) {
//   count = 0;
//   const vowels = "aeiouAEIOU";
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("Subhrajit Swain"));
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("Subhrajit Swain"));
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
console.log(isPrime(5))

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(7));
//   Use .map() to create a new array where each number from the original array is doubled.
let array1 = [1, 2, 3, 4];
let doubledArray = array1.map((num) => num * 2);
console.log(doubledArray);
// Use .filter() to get only even numbers from the array.
let array2 = [1, 2, 3, 4, 5, 6];
let evenArray = array2.filter((num) => num % 2 === 0);
console.log(evenArray);
// Use .reduce() to calculate the total sum of all numbers in an array.
let array3 = [10, 20, 30];
let sumOfArray = array3.reduce((acc, num) => acc + num, 0);
console.log(sumOfArray);
// Q: Use .reduce() to flatten a 2D array.
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]
let array4 = [[1, 2], [3, 4], [5]];
let flatArray = array4.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatArray);
console.log([[1, 2], [3, 4], [5]].flat());

// You have an array of user objects. Use .find() to return the user object with the name "Alok".
const users = [
  { id: 1, name: "Subhrajit" },
  { id: 2, name: "Alok" },
  { id: 3, name: "Sneha" },
];
const alokUser = users.find((user) => user.name === "Alok");
console.log(alokUser);
// Given an array of ages, check if anyone is under 18.
const ages = [22, 17, 34, 29];
let hasMinor = ages.some((age) => age < 18);
console.log(hasMinor);
// Check if everyone is 18 or older in the same array.
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
// Q:
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
let top3Players = players.sort((a, b) => b.score - a.score).slice(0, 3);
console.log(top3Players);

const products = [
  { name: "Shirt", price: 1200, inStock: true },
  { name: "Jeans", price: 2500, inStock: false },
  { name: "Jacket", price: 3200, inStock: true },
  { name: "Shoes", price: 2700, inStock: true },
];
//   Filter only the products that are in stock
// Extract their prices
// Get the total cost

const priceOfStockProducts = products
  .filter((prod) => prod.inStock)
  .map((prod) => prod.price)
  .reduce((acc, price) => acc + price, 0);
console.log(priceOfStockProducts);

// Write a function that takes a string and returns it with the first letter of each word capitalized.
const str = "hello world from subhrajit";
const capitalized = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalized);

const str2 = "Hello World";
const count = str2.match(/[aeiou]/gi)?.length || 0;
console.log(count);
console.log("Hi! ".repeat(3));
const title = "Frontend Developer";
console.log(title.startsWith("Frontend"));
const sentence = "JavaScript is awesome";
console.log(sentence.split(" "));
