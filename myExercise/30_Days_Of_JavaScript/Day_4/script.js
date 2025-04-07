// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let userAge = parseInt(prompt("Enter your Age : "));
// let age = 18;

// if (userAge >= age) {
//   alert("You are old enough to drive.");
// } else {
//   alert(`You are left with ${age - userAge} years to drive.`);
// }
// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let yourAge = parseInt(prompt("Enter your Age : "));
// let myAge = 26;

// if (yourAge > myAge) {
//   alert(`You are ${yourAge - myAge} years older than me`);
// } else {
//   alert(`I am ${myAge - yourAge} years older than You`);
// }
// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("'a is less than b");
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

//   4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let enterNum = parseInt(prompt("Enter a Number : "));
// if (enterNum % 2 === 0) {
//   alert(`${enterNum} is an Even Number`);
// } else {
//   alert(`${enterNum} is an odd Number`);
// }

// 5.Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let score = parseInt(prompt("Enter Score: "));
// if (score >= 90 && score <= 100) {
//   alert("Your grade is A");
// } else if (score >= 80 && score <= 89) {
//   alert("Your grade is B");
// } else if (score >= 70 && score <= 79) {
//   alert("Your grade is C");
// } else if (score >= 60 && score <= 69) {
//   alert("Your grade is D");
// } else if (score >= 50 && score <= 59) {
//   alert("Your grade is E");
// } else if (score >= 0 && score <= 49) {
//   alert("Your grade is F");
// } else {
//   alert("You enter invalid score");
// }

// 6.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let userInput = prompt("Enter a month: ");
// let month = userInput.toLowerCase();
// if (month === "september" || month === "october" || month === "November") {
//   alert("The season is Autumn");
// } else if (
//   month === "december" ||
//   month === "january" ||
//   month === "february"
// ) {
//   alert("The season is Winter");
// } else if (month === "march" || month === "april" || month === "may") {
//   alert("The season is Spring");
// } else if (month === "june" || month === "july" || month === "auguest") {
//   alert("The season is Summer");
// } else {
//   alert("You enter invalid month");
// }

// 7.Check if a day is weekend day or a working day. Your script will take day as an input.
// let userDay = prompt("What is the day Today ?  ");
// let day = userDay.toLowerCase();

// if (day === "saturday" || day === "sunday") {
//   alert(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend");
// } else if (
//   day === "monday" ||
//   day === "tuesday" ||
//   day === "wednesday" ||
//   day === "thursday" ||
//   day === "friday"
// ) {
//   alert(day.charAt(0).toUpperCase() + day.slice(1) + " is a working day");
// } else {
//   alert("You enter invalid day");
// }

// 8.Write a program which tells the number of days in a month.
// let enterMonth = prompt("Enter a month:");
// let month = enterMonth.toLowerCase();
// if (
//   month === "january" ||
//   month === "march" ||
//   month === "may" ||
//   month === "june" ||
//   month === "august" ||
//   month === "october" ||
//   month === "december"
// ) {
//   alert(month.charAt(0).toUpperCase() + month.slice(1) + " has 31 days.");
// } else if (month === "february") {
//   alert(month.charAt(0).toUpperCase() + month.slice(1) + " has 28 days.");
// } else if (
//   month === "april" ||
//   month === "july" ||
//   month === "september" ||
//   month === "november"
// ) {
//   alert(month.charAt(0).toUpperCase() + month.slice(1) + " has 30 days.");
// } else {
//   alert("You Enter Invalid Month");
// }
