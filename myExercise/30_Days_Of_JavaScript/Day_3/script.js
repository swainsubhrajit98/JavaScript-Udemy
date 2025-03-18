// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Subhrajit";
const lastName = "Swain";
const country = "India";
const city = "Bhubaneswar";
const age = 26;
const isMarried = false;
const year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log("10" == 10);
console.log("10" === 10);
// Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8) == 10);
console.log(parseInt(9.8) === 10);
// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));
// Write three JavaScript statement which provide falsy value.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 //true
// 4 >= 3 //true
// 4 < 3 //false
// 4 <= 3 //false
// 4 == 4 //true
// 4 === 4 //true
// 4 != 4 //false
// 4 !== 4 //false
// 4 != '4' //false
// 4 == '4' //true
// 4 === '4' //false
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
// Find the length of python and jargon and make a falsy comparison statement.
let py = "python";
let jr = "jargon";
console.log(py.length > jr.length);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 //true
// 4 > 3 && 10 > 12 // false
// 4 > 3 || 10 < 12 // true
// 4 > 3 || 10 > 12 // true
// !(4 > 3) //false
// !(4 < 3)//true
// !(false) // true
// !(4 > 3 && 10 < 12) // false
// !(4 > 3 && 10 > 12) //true
// !(4 === '4') //true
console.log("-----------------------");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));
// There is no 'on' in both dragon and python
console.log(py.includes("on"));
console.log(jr.includes("on"));
// Use the Date object to do the following activities
const date = new Date();
// What is the year today?
console.log(date.getFullYear());
// What is the month today as a number?
console.log(date.getMonth() + 1);
// What is the date today?
console.log(date.getDate());
// What is the day today as a number?
console.log(date.getDay());
// What is the hours now?
console.log(date.getHours());
// What is the minutes now?
console.log(date.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let allSecond = Date.now();
console.log(allSecond);
// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// const inputBase = parseInt(prompt("Enter base of the Triangle"));
// const inputHeight = parseInt(prompt("Enter height of the Triangle"));
// const areaOfTriangle = 0.5 * inputBase * inputHeight;
// alert(`Area of Triangle is ${areaOfTriangle}`);
// console.log(areaOfTriangle);
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// const sideA = parseInt(prompt("Enter side A of Triangle"));
// const sideB = parseInt(prompt("Enter side B of Triangle"));
// const sideC = parseInt(prompt("Enter side C of Triangle"));
// const perimeterOfTriangle = sideA + sideB + sideC
// console.log(perimeterOfTriangle)
// alert(`Perimeter of Triangle is ${perimeterOfTriangle}`);

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = parseInt(prompt("Enter length of Rectangle: "));
// let width = parseInt(prompt("Enter width of Rectangle: "));
// let recArea = length * width;
// let recParameter = 2 * (length+width);
// alert(`Area of the Rectangle is ${recArea}`);
// alert(`Parameter of the Rectangle is ${recParameter}`);
// console.log(recArea);
// console.log(recParameter);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = parseInt(prompt("Enter radius of the Circle: "));
// let cirArea = 3.14 * radius * radius;
// let circumference = 2 * 3.14 * radius;
// alert(`Area of the circle is : ${cirArea}`);
// alert(`Circumference of the circle is : ${circumference}`);
// console.log(cirArea);
// console.log(circumference);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours = parseInt(prompt("Enter hours: "));
// let rate = parseInt(prompt("Enter rate per hour: "));
// let payOfPerson = hours * rate;
// alert(`The pay of Person is: ${payOfPerson}`);
// console.log(payOfPerson);
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.
const myName = "Subhrajit";
if (myName.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is sort");
}
// Compare your first name length and your family name length and you should get this output.
let myFirstName = "Subhrajit";
let myLastName = "Swain";
if (myFirstName > myLastName) {
  console.log(
    `Your first name, ${myFirstName} is greater than your family name, ${myLastName}`
  );
} else {
  console.log(
    `Your first name, ${myFirstName} is less than your family name, ${myLastName}`
  );
}

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 26;
let yourAge = 18;
console.log(`I am ${myAge - yourAge} older than you`);

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let currentYear = new Date().getFullYear();
// let userAge = parseInt(prompt("Enter your Birth Year : "));
// let driverAge = currentYear - userAge;
// let yearToWait = 18 - driverAge;
// driverAge >= 18
//   ? alert("You are allow to drive")
//   : alert(
//       `You are ${driverAge}.You will be allowed to drive after ${yearToWait} years`
//     );
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
