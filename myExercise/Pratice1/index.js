// console.log("hello world");
// Find the maximum and minimum number in an array
const numbers = [4, 6, 8, 2, 3, 7, 2, 9, 1];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function maxNumber(arr) {
  return arr.reduce((cur, num) => {
    return cur > num ? cur : num;
  });
}
console.log(maxNumber(numbers));

function minNumber(arr) {
  return arr.reduce((cur, num) => {
    return cur < num ? cur : num;
  });
}
console.log(minNumber(numbers));

function maxNum(arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return arr[max];
}
console.log(maxNum(numbers));

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
function reverseArray(arr) {
  reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}
console.log(reverseArray(numbers));

// Find duplicate elements in an array
function duplicateEle(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) !== index);
}
console.log(duplicateEle(numbers));

// Remove falsy values from an array (false, 0, "", null, undefined, NaN)
const arr = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];
console.log(arr.filter(Boolean));
