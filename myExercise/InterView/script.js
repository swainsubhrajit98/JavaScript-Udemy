// Basic QNA
// 1. log your Name
console.log("Subhrajit swain", "Playing Cricket");
//2.perform and log the result of 45 * 2 - 10
console.log(45 * 2 - 10);
// 3. use console.log to display currect data
let date = new Date();
console.log(date.getFullYear());
// 4. create two variable and concat then in log
let firstName = "Alok";
let lastName = "Majhee";
console.log(firstName + " " + lastName);
// 5.track the value of a variable by logging it before and after updating
let a = 5;
console.log(a);
a = 10;
console.log(a);
//6. use console.log error to simulate an error
console.error("It is an error!");
// 7. log the square of number 12 to the console
console.log(12 * 12);
// 8. print the types of a variable holding the value of true
let logedIn = true;
console.log(typeof logedIn);
// 9. create a variable holding your age and log whether it's greater than 18
let myAge = 26;
if (myAge > 18) {
  console.log("It is greater than 18");
}
// 10. log the result of 10/0 and observe the output
console.log(100 / 0);

//Variables and Data types
// 11.Declare a variable using let and log its value
let name = "JavaScript";
console.log(name);
// 12. create a variable using const store the value of PI
const PI = Math.PI;
console.log(PI);
// 13.  Reassign a value to a variable declared with let and log it
console.log(myAge);
myAge = 29;
console.log(myAge);
// 14.check the type of null and log it
console.log(typeof null);
// 15. create a varibale with a number as a string and log its type
let num = "15";
console.log(typeof num);
// 16.use typeOf to check the type of a boolean variable ;
console.log(typeof logedIn);
// 17.create three variables of types string , number and boolean and log their value
let cource = "Java";
let price = 1599;
let priceHigh = true;
console.log(cource);
console.log(price);
console.log(priceHigh);
// 18.Declare a variable without assign a value and log it
let pp;
console.log(pp);
console.log(typeof pp);
// 19.create a variable with undefined and log its type
let ag = undefined;
console.log(typeof ag);
// 20.use const to create an array,try to reassigning the array and observe the error
// const arr = [1, 2, 3, 4];
// arr = [5, 6, 7];
// console.log(arr); //Uncaught TypeError: Assignment to constant variable.

//loops
// 21.Write a for loop to print numbers 1 to 50
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
// 22.use a while loop to sum the numbers from 1 to 10;
let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log(sum);
// 23.create a for loop to log each char of the string JavaScript
let str2 = "JavaScript";
for (let value of str2) {
  console.log(value);
}
// 24.write a for loop that skips even number between 1 to 20
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//   } else {
//     console.log(i);
//   }
// }
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 25.use do while loop to log number from 5 to 1;
var aa = 5;
do {
  console.log(aa);
  aa--;
} while (aa >= 1);
// 26. create a  loop that calculate factorial of 5
let fact = 1;
for (let i = 5; i >= 1; i--) {
  fact = fact * i;
}
console.log(fact);
// 27.write a nested loop to print a 3x3 grid of number
var hold = 1;
for (let i = 1; i <= 3; i++) {
  var str = "";
  for (let j = 1; j <= 3; j++) {
    str += `${hold} `;
    hold++;
  }
  console.log(str);
}
// 28.use for loop to reverse a array
let myArray = [5, 4, 3, 2, 1];
for (let i = 0; i < Math.floor(myArray.length / 2); i++) {
  let temp = myArray[i];
  myArray[i] = myArray[myArray.length - 1 - i];
  myArray[myArray.length - i - 1] = temp;
}
console.log(myArray);
// 29.write a while loop that logs  number from 1 to 100 divided by 5
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
// 30.use a for in loop to iterate over an object and log its key
let myObj = {
  name: "Alok",
  age: 26,
  job: "developer",
};
for (const key in myObj) {
  console.log(key);
}

//Array
// 31.create an array  of your top 5 favorite moive and log it
let myMoives = ["Abc", "zyyy", "uer", "asgfa", "tewut"];
myMoives.forEach((moive) => console.log(moive));
console.log(myMoives);
// 32.find and log second element f an array
console.log(myMoives[1]);
// 33.Add two new element to the start of an array using unshift()
myMoives.unshift("Amit");
myMoives.unshift("puja");
console.log(myMoives);
// 34.remove last element of an array and log the updated array
myMoives.pop();
console.log(myMoives);
//35. use slice() to extract the first three elements of an array
console.log(myMoives.slice(0, 3));
console.log(myMoives);
//36.findthe index of a specific  element in an array using indexOf()
console.log(myMoives.indexOf("zyyy"));
// 37.check if a value exists in a array using includes()
console.log(myMoives.includes("Abc"));
// 38.combine two arrays [1,2] and [3,4] using concat()
let num1 = [1, 2];
let num2 = [3, 4];
console.log(num1.concat(num2));
// 39.sort an array of numbers [5,2,9,1] in ascending order
let num4 = [5, 2, 9, 1];
console.log(num4.sort());

let arr1 = [45, 36, 11, 22, 78, 65];
for (let i = 0; i < arr1.length - 1; i++) {
  for (j = 0; j < arr1.length - i - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}
console.log(arr1);
let sortArr = arr1.sort((a, b) => a - b);
console.log(sortArr);

//40.write a progeam that creates a copy of an array without mutating the original
let arr2 = [55, 44, 99, 77, 66];
let arr3 = [...arr2];
console.log(arr3);
let arr4 = [];
arr2.forEach((val) => {
  arr4.push(val);
});
console.log(arr4);

//function
// 41.write a function to check if a number is even or not
function isEven(num) {
  //   if (num % 2 === 0) {
  //     console.log("Even Number");
  //   }else{
  //     console.log("Odd number")
  //   }
  if (num % 2 === 0) return "even";
  else return "odd";
}
// isEven(5);
console.log(isEven(12));
// 42. write a function to calculate the area of a circle with given radius
function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log(areaOfCircle(10));
//43.write a function  that accepts an array and returns the sum of its element
function sumOfArray(arr) {
  let sum = 0;
  arr.forEach((val) => {
    sum = sum + val;
  });
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6]));
// 44.create function that check if a string starts with a specific  char
function checkChar(str, char) {
  return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(checkChar("amit", "a"));
// 45.write a function to find the maximum of two numbers
function maxNum(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "equal";
  }
}
console.log(maxNum(6, 6));
// 46.write a function that takes a number and return its factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factorial(5));
// 47.write a function that accept a string and return its reverse
function revString(value) {
  return value.split("").reverse().join("");
}
console.log(revString("hello"));
// 48.create a function to find the largest number in an array
function maxNum(arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return arr[max];
}
console.log(maxNum(arr2));
// 49.write a function that convert a string to kebab case
function kebabCase(str) {
  // return str.replaceAll(" ", "-");
  return str.split(" ").join("-");
}
console.log(kebabCase("Hey people how are you"));
// 50.create a function that log "hello world" every time it call;
function greet() {
  console.log("Hello World");
}
greet();
greet();
greet();

// setTimeout(() => console.log("Hello"), 0);
// for (let i = 1; i <= 1000; i++) {
//   console.log(i);
// }
console.log("World");
console.log(
  "--------------------------------------------------------------------------------------------"
);
console.log("Interview video 2");
//Duplicatev element in Array
let myarr = [2, 4, 6, 2, 8, 7, 9, 4];
let duplicateNum = myarr.filter((ele, ind, arr) => arr.indexOf(ele) !== ind);
console.log(duplicateNum);
//max number in array
let maxFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre > cur ? pre : cur;
  });
};
console.log(maxFunction(myarr));
//min number in array
let minFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre < cur ? pre : cur;
  });
};
console.log(minFunction(myarr));
//find second largest value in Array
let largestNum = (arr) => {
  firstLargestNum = Math.max(...arr);
  index = arr.indexOf(firstLargestNum);
  arr.splice(index, 1);
  secondLargestNum = Math.max(...arr);
  return secondLargestNum;
};
console.log(largestNum(myarr));
//diff between filter and find
let employees = [
  { name: "Amit", age: 31 },
  { name: "Alok", age: 26 },
  { name: "Ayush", age: 35 },
  { name: "Pavan", age: 29 },
  { name: "Sai", age: 32 },
  { name: "Sarvam", age: 28 },
  { name: "Pankaj", age: 31 },
];
console.log(employees);
let filEmp = employees.filter((emp) => emp.age > 30);
console.log(filEmp);
let findEmp = employees.find((emp) => emp.age > 30);
console.log(findEmp);
//How to Find missing elements in a given Array 1 to 10
let nums = [1, 2, 3, 4, 5, 7, 9, 10];
let misArray = [];
let misValue = (arr) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      misArray.push(i);
    }
  }
  return misArray;
};
console.log(misValue(nums));
//how to find even or odd numbers in array
console.log(
  "Even Number",
  nums.filter((num) => num % 2 === 0)
);
console.log(
  "Odd Number",
  nums.filter((num) => num % 2 !== 0)
);
// How to find the sum of all elements in array
console.log(nums.reduce((acc, num) => acc + num));
//how to find fictorial of a given number
function factorialOfNum(n) {
  let fa = 1;
  for (let i = 1; i <= n; i++) {
    fa = fa * i;
  }
  return fa;
}
console.log(factorialOfNum(5));
//how to find vowels from string
let vowels = ["a", "e", "i", "o", "u"];
let vowelCount = (str) => {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};
console.log(vowelCount("Alok"));
//how to reverse a string
let msm = "my name is alok";
console.log(msm.split("").reverse().join(""));
//how to swap two variables without using the third
let abc = 5;
let cba = 10;
let temp = abc;
abc = cba;
cba = temp;
console.log(`${abc} and ${cba}`)