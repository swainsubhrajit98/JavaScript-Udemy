const months = ["january", "february", "march", "april", "may"];
const year = [2015, 2016, 2017];
months[5] = "june";
console.log(months);
//push()
months.push("july", "august");
console.log(months);
//pop()
// months.pop();
// console.log(months);
//shift()
// months.shift();
// console.log(months);
//unshit()
// months.unshift("year start");
// console.log(months);
//concat()
// const contVal = months.concat(year);
// console.log(contVal);
//join()
// const text = months.join(",");
// console.log(text);
// //isArray()
// const isArrayValue = Array.isArray(months);
// console.log(isArrayValue);
//forEach()
const numbers = [70, -10, 80, -20, 50];
months.forEach(myFun);
function myFun(value, index, array) {
  console.log(`${index}-${value}-${array}`);
}
let sum = 0;
numbers.forEach((v) => {
  sum = sum + v;
});
console.log(sum);
//map()
let result = numbers.map((num) => {
  return num / 10;
});
console.log(result);
//sort()
// months.sort();
// console.log(months);
// numbers.sort((a, b) => b - a);
// console.log(numbers);
//reverse()
// months.reverse();
// console.log(months);
//sorted()
// const sortMonths = months.toSorted();
// console.log(sortMonths);
// toReversed()
// const revMonts = months.toReversed();
// console.log(revMonts);
//slice()
console.log(months);
const sliceMonth = months.slice(2, 6);
console.log(sliceMonth);
//splice();
months.splice(0, 3, "January", "December");
console.log(months);
// indexOf()
console.log(months.indexOf("may"));
// lastIndexOf()
console.log(months.lastIndexOf("june"));
//keys()
// const listMonths = months.keys();
// for(let i of listMonths){
//     console.log(i)
// }
//values();
// const listMonths = months.values();
// for(let i of listMonths){
//     console.log(i)
// }
//entries()
const listMonths = months.entries();
for (let i of listMonths) {
  console.log(i);
}
//every()
const resultNum = numbers.every((value) => {
  return value > 0;
});
console.log(resultNum);
// some()
const someNum = numbers.some((value) => {
  return value < 0;
});
console.log(someNum);
// filter()
const posNum = numbers.filter((num) => num > 0);
console.log(posNum);
//Find()
const oValue = numbers.find((num) => num < 0);
console.log(oValue);
//findIndex();
const iValue = numbers.findIndex((num) => num < 0);
console.log(iValue);
//findLast()
const lValue = numbers.findLast((num) => num < 0);
console.log(lValue);
// findLastIndex()
const fLValue = numbers.findLastIndex((num) => num < 0);
console.log(fLValue);
// includes()
console.log(months.includes("may"));
//toString();
console.log(months.toString());
//from();
const str = "javascript";
console.log(Array.from(str));
//copyWithIn()
console.log(months);
months.copyWithin(0, 3);
console.log(months);
//valueOf()
console.log(months.valueOf());
//prototype()
// Array.prototype.removeAll = function () {
//   //   while (this.length != 0) {
//   //     this.pop();
//   //   }

//   this.splice(0, this.length);
// };
// console.log(months);
// months.removeAll();
// console.log(months);
//reduce()
const newNumAry = [15, 78, 16, 42];
let newSum = 0;
newNumAry.forEach((num) => {
  newSum += num;
});
console.log(newSum);

const gTotal = newNumAry.reduce((acc, num) => acc + num, 0);
console.log(gTotal);
//reduceRight();
//fill()
newNumAry.fill(0,2,3);
console.log(newNumAry);

// flat()
const arrat = [15, [78, [1,2,3],6], 42];
console.log(arrat.flat(2))

