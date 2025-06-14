let person = {
  name: "Alok",
  age: 29,
  address: {
    At: "puri",
    pin: 755002,
  },
};

console.log(person.address);

function Factorial(n) {
  if (n === 0 || n === 1) return 1;
  else {
    return n * Factorial(n - 1);
  }
}
console.log(Factorial(5));

function printNum(n) {
  if (n > 100) return;
  console.log(n);
  printNum(n + 1);
}
printNum(1);

function largestNum(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return arr[max];
}

console.log(largestNum([12, 8, 4, 11, 9]));

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));

function removeDuplicate(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 4, 2, 3, 6, 7]));

function isPalindrome(str) {
  let cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split(" ").reverse().join(" ");
}
console.log(isPalindrome("Madam"));

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("BUzz");
    else console.log(i);
  }
}
fizzBuzz(1);

const User1 = {
  name: "Smith",
  age: 21,
};
function greet(greeting, city) {
  console.log(
    `${greeting},I am ${this.name} and I am ${this.age} year old from ${city}`
  );
}

greet.call(User1, "Hello", "Odisha");
greet.apply(User1, ["Hi", "Jajpur"]);
greetUser = greet.bind(User1, "Hii buddy", "Puri");
greetUser();

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));
console.log(isPrime(7));
console.log(isPrime(9));

function capitalizeWord(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWord("hello my name is alok"));

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("JavaScript"));

function reverseWord(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWord("hello world"));

function replaceSpaces(str) {
  return str.replace(" ", "-");
}
console.log(replaceSpaces("Frontend Develover"));

let numbers = [1, 2, 3, 4, 5, 3, 7, 1, 5, 6];
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleArray(numbers));

function evenArray(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenArray(numbers));

function uniqueArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(uniqueArray(numbers));

function sumOfArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumOfArray(numbers));

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

//Printing One By One

//   for (let index = 0; index < employees.length; index++) {
//     console.log(employees[index].name);
//   }
//   employees.forEach((item)=>{
//     console.log(item.name);
//   });

// employees.forEach((item, index, array) => {
//   console.log(item.name);
// });

// employees.forEach((item) => console.log(item.name));

//LETS Filter those whose age is >30
//   let empAgeG30 = employees.filter((emp)=>emp.age>30);
//   console.log(empAgeG30);
// let empsAbove30 = [];

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].age > 30) {
//     empsAbove30.push(employees[i].age);
//   }
// }
// console.log(empsAbove30);

// let empsAbove30 = employees.filter((x) => x.age > 30);
// console.log(employees);
// console.log(empsAbove30);

//Now You woll have to get the list of Employee Names only
let empName = employees.map((emp) => emp.name);
console.log(empName);
// let empNames = [];

// for (let i = 0; i < employees.length; i++) {
//   empNames.push(employees[i].name);
// }
// console.log(empNames);

// let empNames = employees.map(function (emp, index, array) {
//   return emp.name;
// });

// let empNames = employees.map((emp) =>  emp.name);

// console.log(empNames);

// let ages = employees
//   .sort((emp1, emp2) => emp1.age - emp2.age)
//   .map((emp) => emp.age);

// console.log(ages);

//You want to get the sum of age of all the employees

let empTotalAge = employees.reduce((acc, emp) => acc + emp.age, 0);
console.log(empTotalAge);

// let age = 0;
// for (let i = 0; i < employees.length; i++) {
//   age = age + employees[i].age;
// }
// console.log("Total Age :", age);

// let age = employees.reduce(function (prevAge, emp) {
//   return prevAge + emp.age;
// }, 0);
// console.log(age);

//Sum of Age of Employees who joined after 2000
let empAgeAfter2000 = employees
  .filter((emp) => emp.joinedYear > 2000)
  .reduce((acc, emp) => acc + emp.age, 0);
console.log(empAgeAfter2000);

let TotalAge = employees
  .filter((x) => x.joinedYear > 2000)
  .map((x) => x.age)
  .reduce((prevAge, age) => prevAge + age, 0);

console.log(TotalAge);
