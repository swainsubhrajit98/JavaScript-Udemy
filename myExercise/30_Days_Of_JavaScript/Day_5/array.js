// 1.Declare an empty array;
let arr = [];
// 2. Declare an array with more than 5 number of elements
let numArr = [1, 2, 3, 4, 5, 6];
// 3. Find the length of your array
console.log(numArr.length);
// 4.Get the first item, the middle item and the last item of the array
console.log(numArr[0]);
console.log(numArr[numArr.length - 1]);
console.log(numArr[Math.floor(numArr.length / 2)]);
// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
  "John Smith",
  "USA",
  9658754869,
  [1, 2, 3, 4],
  "Employee",
  true,
  "JavaScript",
];
console.log(mixedDataTypes.length);
// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
// 10.Print out each company
for (let i = 0; i <= itCompanies.length - 1; i++) {
  console.log(itCompanies[i]);
}
// 11.Change each company name to uppercase one by one and print them out
for (let i = 0; i <= itCompanies.length - 1; i++) {
  console.log(itCompanies[i].toUpperCase());
}
// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(", ")} are big it companies.`);
// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("IBM")) {
  console.log("Company found");
} else {
  console.log("Company is not found");
}
//14. Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  let oCount = company.split("o").length - 1;
  if (oCount > 1) {
    companiesWithMoreThanOneO.push(company);
  }
}
console.log(companiesWithMoreThanOneO);
// 15.Sort the array using sort() method
console.log(itCompanies.sort());
// 16.Reverse the array using reverse() method
console.log(itCompanies.reverse());
// 17.Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// 18.Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
// 19.Slice out the middle IT company or companies from the array
// 20.Remove the first IT company from the array
console.log(itCompanies.shift());
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
console.log(itCompanies.pop());
// Remove all IT companies

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
console.log("Countries are:", countries);
console.log("Webtechs are:", webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let cleanText = text.replace(/[^\w\s]/g, "");
let words = cleanText.split(" ");
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart);
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
const allergy = true;
if (allergy && shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);
//modify Tea to 'Green Tea'
let tea = shoppingCart.indexOf("Tea");
shoppingCart[tea] = "Green Tea";
console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sacc")) {
  console.log("Sacc is a CSS Preprocess");
} else {
  webTechs.push("Sacc");
}
console.log(webTechs);
//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
console.log(ages.sort());
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

// Find the median age(one middle item or two middle items divided by two)
let medianAge;
const middleIndexValue = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndexValue - 1] + ages[middleIndexValue]) / 2;
} else {
  medianAge = ages[middleIndexValue];
}
console.log(medianAge);
// Find the average age(all items divided by number of items)
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;
console.log(averageAge);
// Find the range of the ages(max minus min)
const ageRange = maxAge - minAge;
console.log(ageRange);
//Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));
//  1.Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));
// Find the middle country(ies) in the countries array

let myArray = [1, 2, 3, 4, 5, 6];
let middleValue;
let midIndex = Math.floor(myArray.length / 2);
console.log(midIndex);
if (myArray.length % 2 === 0) {
  middleValue = [myArray[midIndex - 1], myArray[midIndex]];
} else {
  middleValue = myArray[midIndex];
}
console.log(middleValue);
// Find the middle country(ies) in the countries array
const middleInx = Math.floor(countries.length / 2);
let middleCountries;
if (countries.length % 2 === 0) {
    middleCountries = [countries[middleInx - 1], countries[middleInx]];
} else {
    middleCountries = [countries[middleInx]];
}
console.log(middleCountries);

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, middleInx);
    secondHalf = countries.slice(middleInx);
} else {
    firstHalf = countries.slice(0, middleInx + 1);
    secondHalf = countries.slice(middleInx + 1);
}

console.log("First half of the countries:", firstHalf);
console.log("Second half of the countries:", secondHalf);