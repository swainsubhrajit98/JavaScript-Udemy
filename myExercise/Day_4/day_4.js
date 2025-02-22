let x = 10;
let y = "2";
let c = x * y;
console.log(c);
console.log(typeof "c");

let arr = [1, 2, 3];
console.log(Array.isArray(arr));

// What are the differences between null and undefined?
// we declare a variable and explicitly declare value null
// we declare a variable but not define the value is undefined
// How do you check the type of a variable in JavaScript?
// console.log(typeof variablename)
// What is the difference between let, const, and var?
// let is a block scope, we can reassign the value but can not re declare
// const is a block scope, we can redeclare or re assign the value
// var is function scope or global scope it can be redeclare and reassign
// How can you check if a variable is an array?
// console.log(Array.isArray(arrayName))
// What will be the output of console.log(typeof NaN);?
// number

// 1.Write a function to count the number of vowels in a string.
function countVowels(str) {
  let vowel = "AEIOUaeiou";
  let count = 0;
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello Alok"));
// 2.Write a function that removes duplicate elements from an array.
// 3.Find the largest number in an array without using Math.max().
function findLargestNum(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findLargestNum([10, 5, 6, 9, 16, 2, 7]));
// 4.Write a function to check if a string is a palindrome.
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));
// 5.Sort an array of numbers in ascending order without using sort().
// ans of this

function bubbleSort(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 4, 2]));
