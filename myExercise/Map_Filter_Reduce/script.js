// The map(), reduce() and filter() are array functions that transform the array according to the applied function and return the updated array. They are used to write simple, short and clean codes for modifying an array instead of using the loops.

// map() method: It applies a given function on all the elements of the array and returns the updated array. It is the simpler and shorter code instead of a loop.

arr = new Array(1, 2, 3, 6, 5, 4);
console.log(arr);

function triple(n) {
  return n * 3;
}
var new_arr = arr.map(triple);
console.log(new_arr);

const newArray = arr.map((num) => num * 3);
console.log(newArray);

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const userNames = users.map((user) => user.name);
console.log(userNames);

const scores = [80, 45, 60, 30, 90];
const passOrFail = scores.map((score) => (score >= 50 ? "Pass" : "Fail"));
console.log(passOrFail); // ["Pass", "Fail", "Pass", "Fail", "Pass"]

const ages = [21, 12, 47, 14, 66, 41, 11];
const voteStatus = ages.map((age) =>
  age >= 18 ? "You can Vote" : "You can not Vote"
);
console.log(voteStatus);

const words = ["hello", "world", "javascript"];
const upperCaseArray = words.map((word) => word.toUpperCase());
console.log(upperCaseArray);
// Convert an array of temperatures from Celsius to Fahrenheit using map().
// Formula: F = (C × 9/5) + 32

const celsiusTemps = [0, 20, 30, 40];
const FahrenheitTemp = celsiusTemps.map((temp) => (temp * 9) / 5 + 32);
console.log(FahrenheitTemp);

// Doubling Numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubleArray = numbers.map((num) => num * 2);
console.log(doubleArray);

// filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition.
arr = new Array(1, 2, 3, 6, 5, 4);
var new_arr = arr.filter(function (x) {
  return x % 2 == 0;
});
console.log(new_arr);

const evenArray = arr.filter((num) => num % 2 === 0);
console.log(evenArray);

const names = ["Alice", "Bob", "Amanda", "Charlie"];
const nameStartWithA = names.filter((name) => name.startsWith("A"));
console.log(nameStartWithA);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 18 },
  { name: "David", age: 21 },
];
const adult = people.filter((person) => person.age >= 18);
console.log(adult);

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 50 },
  { name: "Monitor", price: 300 },
];

const affordableProducts = products.filter((item) => item.price < 500);
console.log(affordableProducts);

const numberss = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numberss.filter(
  (num, index, arr) => arr.indexOf(num) === index
);
console.log(uniqueNumbers);

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 45 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 35 },
];
const passStudent = students.filter((student) => student.score >= 50);
console.log(passStudent);

const employee = [
  { name: "John", age: 30, gender: "male" },
  { name: "Smith", age: 16, gender: "male" },
  { name: "Cate", age: 32, gender: "female" },
  { name: "Rose", age: 26, gender: "female" },
  { name: "Adam", age: 26, gender: "male" },
];

const filEmployee = employee.filter(
  (emp) => emp.age > 30 && emp.gender === "female"
);
console.log(filEmployee);
// reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function. It is an alternative of using a loop and updating the result for every scanned element.

function product(a, b) {
  return a * b;
}
arr = new Array(1, 2, 3, 6, 5, 4);

const product_of_arr = arr.reduce(product);
console.log(product_of_arr);

const newProduct = arr.reduce((acc, cur) => acc * cur, 1);
console.log(newProduct);

let employees = [
  { name: "Employee One", age: 30, joinedYear: 1990, department: "Computer" },
  { name: "Employee Two", age: 40, joinedYear: 2000, department: "Physics" },
  { name: "Employee Three", age: 50, joinedYear: 2010, department: "Computer" },
  {
    name: "Employee Five",
    age: 35,
    joinedYear: 1998,
    department: "Chemistry",
  },
  { name: "Employee Four", age: 20, joinedYear: 2017, department: "Physics" },
  { name: "Employee Six", age: 60, joinedYear: 2012, department: "Chemistry" },
  { name: "Employee Seven", age: 50, joinedYear: 2019, department: "Computer" },
  { name: "Employee Eight", age: 55, joinedYear: 2011, department: "Physics" },
  { name: "Employee Nine", age: 12, joinedYear: 1987, department: "Computer" },
];
//Sum of Age of Employees who joined after 2000

let totalAge = employees
  .filter((emp) => emp.joinedYear >= 2000)
  .reduce((acc, emp) => acc + emp.age, 0);
console.log(totalAge);

// max Number in the Array
const nums = [56, 48, 15, 87, 96, 14, 26, 3];
const maxNum = nums.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
});
console.log(maxNum);

const topValue = nums.reduce((max, num) => {
  return num > max ? num : max;
}, nums[0]);
console.log(topValue);

const myCart = [
  { name: "T-Shirt", price: 359 },
  { name: "Shirt", price: 890 },
  { name: "Hoodies", price: 1288 },
  { name: "Shoes", price: 1100 },
];

const totalPrice = myCart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);
