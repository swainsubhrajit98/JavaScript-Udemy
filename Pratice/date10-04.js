console.log("Hello World");
// document.write("Hello World");
let total = 150; //NUMBER
//We use the keyword called 'let' to declare a variable.
//let tells the computer to reserve some space in the memory and reference that address with the name total, and then stores 150 in that space.

// let product = 'Apple MacBooks'; //string
let isDiscounted = true; //Boolean
//You can also declare multiple varibles together.
let message = "Hello World",
  product = "Apple Mac Book",
  price2 = 100;
//   Naming a variable

// it can not be starts with a number
// Special char are not allowed except _ and $
// we can not we keyword as a variable name

// Changing Variable Values
let age = 25;

age = 65;
console.log(age);
// let vs var
var foo = "Foo";
let bar = "Bar";
console.log(foo, bar);
// {
//   let baz = "Bazz";
//   console.log(baz);
// }
// console.log(baz);

function test() {
  var x = 10;
  if (true) {
    var x = 20; // same variable!
    console.log(x); // 20
  }
  console.log(x); // 20 😱
}
test();

let x = 10;
if (true) {
  let x = 20; // totally different x
  console.log(x); // 20
}
console.log(x); // 10

let price = 20.55;
console.log(typeof price);

let name = "Swagat";
console.log(typeof name);

let num1 = 20;
// num1+=10;
// num1-=10;
// num1*=10;
// num1/=10;
// num1%=10;
console.log(num1);
//Show for all the arethmetic operators. (+, - , * , /)

//Increment Operator
let num2 = 20;
console.log(++num2); //21 pre increment

let num3 = 20;
console.log(num3++); //20 post increment
console.log(num3); //21

//Decrement operator
let num4 = 20;
console.log(--num4); //19 pre increment

let num5 = 20;
console.log(num5--); //20 post increment
console.log(num5); //19

// Number Precision

let numa = 1.1 + 1.3;
console.log(numa); //2.4000000000000004

// Escape Characters
console.log("Single quote: It's awesome"); // It's awesome
console.log('Double quote: He said "Hi"'); // He said "Hi"
console.log("Backslash: C:\\Program Files\\App"); // C:\Program Files\App

console.log("New line:\nNext line"); // Line break
console.log("Tab:\tIndented"); // Tabbed text

console.log("Backspace: abc\b_"); // ab_ (removes 'c')
console.log("Form feed:\fDemo"); // Acts like space (some)
console.log("Vertical tab:\vDemo"); // May vary

console.log("Null char: Hello\0World"); // Looks like HelloWorld, with null char

console.log("Unicode heart: \u2665"); // ♥
console.log("Hex A: \x41"); // A

// string Interpplation
let message2 = `Hello World!`;
console.log(message2);

let name2 = "Adrita";
let message3 = `Hello ${name2}!`;
console.log(message3);

// Give an example with New Line as well.

let message4 = `Hello 



${name2}!`;
console.log(message4); //Remember in HTML, they will be replaced by a single space.
// Manipulating String
let bar2 = "123";

console.log(typeof bar); //String
let bar3 = bar2 + 3;
console.log(bar3); //1233
console.log(typeof bar3);
let bar4 = 3 + bar2;
console.log(bar4); //3123
console.log(typeof bar4);
let bar5 = bar2 * 3;
console.log(bar5);
console.log(typeof bar5);
let bar6 = 3 * bar2;
console.log(bar6);
console.log(typeof bar6);
console.log(5 - "hello"); //NaN

//This is because if we have a string being operated on, the resulting answer is always a string

console.log(20 - 21); //-1
console.log(20 - "21"); //-1
console.log(5 - "hello"); //NaN

// Converting string to number and vice versa.
let amount = Number.parseFloat("22.22");
console.log(amount); //22.22

amount = Number.parseInt("22.92");
console.log(amount); //22

let amount2 = Number.parseInt("A22.92");
console.log(amount2); //NAN

amount2 = Number.parseFloat("22.92A");
console.log(amount2); //22.92

// Boolean Values
//They have either true/false value.
let saved = true;
console.log(typeof saved);

saved = !saved;
console.log(saved);

//This is one of the simplest type, but it has the highest impact on any Programming langulage.

// Null and undefined
//There are two more type in JS.

//undefined is when a variable is only declared, but not assigned any value
let bar7;
console.log(bar7);
console.log(typeof bar7);

//Now lets say you want to remove a value from a variable,
let barVal = 68;
barVal = null;
console.log(barVal); // NULL
console.log(typeof barVal); //Object

//You can still assign undefined to a variable, but that is not good practise. Mostly developers let JS assign the value of undefined to a variable, and devs assign a null when they dont
//require a value.

let barVal2 = 68;
barVal2 = undefined;
console.log(barVal2);
console.log(typeof barVal2);

let bookPrice = 11;
if (bookPrice > 10) {
  console.log("> 10");
} else if (bookPrice > 15) {
  console.log("> 15");
} else {
  console.log("< 10");
}
// -----------------------------------------------
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArray = nums.filter((num) => {
  return num % 2 === 0;
});
console.log(evenArray);

let filterArray = nums.filter((num) => num % 2 === 0);
console.log(filterArray);

let doubleOdds = nums.map((num) => (num % 2 === 0 ? num : num * 2));
console.log(doubleOdds);

let sumOfMultiplesoOf3 = nums.reduce(
  (acc, num) => (num % 3 === 0 ? acc + num : acc),
  0
);
console.log(sumOfMultiplesoOf3);
let str = "HelloWorld";

console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(5, 0));

// ============================
console.log("------------------------------------------");

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const counter = outer();
counter();
counter();

let key = 20;
let fn = function getSecretCode(code) {
  let keyGenerator = function () {
    let key = 30;
    console.log("Inside keyGenerator", key);
    return key;
  };
  let secretCode = code * keyGenerator();
  console.log("Inside getSecretCode", key);
  return secretCode;
};
let code = fn(10);
console.log(code);

(function () {
  var bar = "John Smith";
  console.log(bar);
})();

//Closer

let app = (function () {
  let firstName = "John";
  let lastName = "Smith";

  let fullname = function () {
    return firstName + " " + lastName;
  };

  return {
    fullName: fullname,
  };
})();
console.log(app.fullName());
//call and apply
// let person = {
//     name : 'John Smith',
//     fullName : function(){
//         return 'Hello '+ this.name;
//     }
// }
// console.log(person.name);
// console.log(person.fullName());

// let person2 = {
//     name : 'Rahul'
// };

// console.log(person.fullName.call(person2));

//APPLY

// let person = {
//     name : 'John Smith',
//     fullName : function(age){
//         return 'Hello '+ this.name + ' AGE - ' + age;
//     }
// }
// console.log(person.name);
// console.log(person.fullName(25));

// let person2 = {
//     name : 'Rahul'
// };

// console.log(person.fullName.apply(person2,[30]));

// Bind
// Sometimes we need to make a copy of a function and change the value of this keyword. There we use bind method.

// let person = {
//     name : 'John Smith',
//     fullName : function(){
//         return 'Hello '+ this.name ;
//     }
// }
// console.log(person.name);
// console.log(person.fullName());

// let person2 = {
//     name : 'Rahul'
// };
// let newFun =person.fullName.bind(person2);
// console.log(newFun());

//object

let ob1 = {};
console.log(typeof ob1);

let myDetails = {
  name: "Subhrajit",
  age: 26,
  partTimeUser: false,

  showInfo() {
    console.log("Inside show Info", this.name + "and age", +this.age);
  },
};
console.log(typeof myDetails);
console.log(myDetails.age);
console.log(typeof myDetails.age);
myDetails.partTimeUser = true;
console.log(myDetails);
console.log(myDetails["name"]);
console.log(myDetails.name);

myDetails.showInfo();
function incrementAge(myDetails) {
  myDetails.age++;
}
incrementAge(myDetails);
console.log(myDetails);
myDetails.showInfo();

let values = Array.of(1, 2, 3);
console.log(values);
console.log(values[0]);

// let fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// fruits.forEach(function (item, index, array) {
//   console.log(item, index);
// });

let fruits = ["Apple", "Banana", "Grapes"];
fruits.push("Mango");
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

let last = fruits.pop();
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

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

function greet(city) {
  return `Hi, I'm ${this.name} from ${city}`;
}

const user = { name: "Subhrajit" };

console.log(greet.call(user, "Kolkata"));
console.log(greet.apply(user, ["Delhi"]));
const boundGreet = greet.bind(user, "Mumbai");
console.log(boundGreet());

// let am = "Amit kumar";
// {let revAm = "";
// for (let i = am.length - 1; i >= 0; i--) {
//   revAm += am[i];
// }}
// console.log(revAm);

function reverseString(str) {
  revString = "";
  for (let i = am.length - 1; i >= 0; i--) {
    revString += am[i];
  }
  return revString;
}
let am = "Amit kumar";
let revAm = reverseString(am);
console.log(revAm);

function countVowels(str) {
  let vowelCounts = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i])) {
      vowelCounts++;
    }
  }
  return vowelCounts;
}
let amitName = "Amit Kumar";
console.log("Total vowels:", countVowels(amitName));

function removeDuplicates(arr) {
  let uniqueArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5]));

let newArray = [1, 2, 3, 2, 4, 3, 5];
let uniQueArray = newArray.filter((item, index) => newArray.indexOf(item) === index);
console.log(uniQueArray);
