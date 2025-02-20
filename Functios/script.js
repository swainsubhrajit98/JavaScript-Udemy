// // first function
// function greet() {
//   document.write("Hello Coder,Good Morning");
// }
// greet();

// function with parameter

// function functionWithPara(a, b) {
//     c =a * b;
//     document.write("a * b ="+ c )
// }
// functionWithPara(10, 20);

// function as para

// function paraAsFunction(func) {
//   func();
// }
// paraAsFunction(helloWorld);

// function helloWorld() {
//   alert("Good morning coder");
// }

// function with return stattement
// function returnSum(x, y) {
//   let z = x + y;
//   return z;
// }
// let result = returnSum(10, 20);
// document.write(result);

// let result = returnSum(10, 20);
// document.write("Return Value "+ returnSum(5,6));

// set function as variable
// function sum(a, b) {
//   return a + b;
// }
// let s = sum;
// let r = s(5, 6);
// document.write(r + " result");

// Anonymous function

// let isAdult = function (age) {
//   if (age >= 18) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// };
// let ageStatus = isAdult(17);
// document.write(ageStatus);

// self executing anonymous functio
// (function () {
//   alert("Auto show message 1");
// })();

// (function () {
//   alert("Auto show message 2");
// })();

// (function (a, b) {
//   alert(" a + b  is ", a + b);
// })(10, 20);

// anonymous function with retun statement

let myResult = (function (x, y) {
  return x + y;
})(10, 20);
alert(myResult);
