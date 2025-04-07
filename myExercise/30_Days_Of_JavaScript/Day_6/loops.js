//Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// console.log("-----------------------------");
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("-----------------------------");
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i >=0; i--) {
//   console.log(i);
// }
// console.log("-----------------------------");
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// console.log("-----------------------------");
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// Iterate 0 to 7 using for loop
// for(let i =0;i<=7;i++){
//     console.log(i)
// }
// Write a loop that makes the following pattern using console.log():
// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }
//  Use loop to print the following pattern:
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }
//Using loop print the following pattern
// console.log("-----------------------------");

// console.log(`i i^2 i^3`);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i * i} ${i * i * i}`);
// }
//Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }
// Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNum = 0;
for (let i = 0; i <= 100; i++) {
  sumOfNum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sumOfNum}.`);
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEven = 0;
let sumOfOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  } else {
    sumOfOdd += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}.`
);
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log([sumOfEven, sumOfOdd]);
// Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);
// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueRandomNumbers = [];
while (uniqueRandomNumbers.length < 5) {
  let randomNum = Math.floor(Math.random() * 100);
  if (!uniqueRandomNumbers.includes(randomNum)) {
    uniqueRandomNumbers.push(randomNum);
  }
}
console.log(uniqueRandomNumbers);
// Develop a small script which generate a six characters random id:
//Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let capCountries = [];
for (let i = 0; i <= countries.length - 1; i++) {
  capCountries.push(countries[i].toUpperCase());
}
console.log(capCountries);
//Using the above countries array, create an array for countries length'.
let lenCountries = [];
for (let i = 0; i <= countries.length - 1; i++) {
  lenCountries.push(countries[i].length);
}
console.log(lenCountries);
//Use the countries array to create the following array of arrays:
let result = [];
for (let i = 0; i <= countries.length - 1; i++) {
  let country = countries[i];

  let countryCode = country.slice(0, 3).toUpperCase();
  let countryLength = country.length;
  result.push(country, countryCode, countryLength);
}
console.log(result);
//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'
let countriesWithLand = [];
let countriesWithoutLand = [];
for (let i = 0; i <= countries.length - 1; i++) {
  let country = countries[i];
  if (country.includes("land")) {
    countriesWithLand.push(country);
  } else {
    countriesWithoutLand.push(country);
  }
}
console.log(countriesWithLand);
console.log(countriesWithoutLand);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countriesEndsWithIA = [];
let countriesEndsWithoutLIA = [];
for (let i = 0; i <= countries.length - 1; i++) {
  let country = countries[i];
  if (country.endsWith("ia")) {
    countriesEndsWithIA.push(country);
  } else {
    countriesEndsWithoutLIA.push(country);
  }
}
console.log(countriesEndsWithIA);
console.log(countriesEndsWithoutLIA);
//Using the above countries array, find the country containing the biggest number of characters.
let longestCountry = "";
let maxLength = 0;

for (let i = 0; i < countries.length; i++) {
  let country = countries[i];
  let countryLength = country.length;

  if (countryLength > maxLength) {
    maxLength = countryLength;
    longestCountry = country;
  }
}
console.log(longestCountry);
//Using the above countries array, find the country containing only 5 characters.
let countryLength5 = [];
for (let i = 0; i < countries.length; i++) {
  let country = countries[i];

  if (country.length <= 5) {
    countryLength5.push(country);
  }
}
console.log(countryLength5);

// Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let longestWord = "";
let wordLength = 0;
for (let i = 0; i <= webTechs.length - 1; i++) {
  let word = webTechs[i];
  let lengtofWord = word.length;
  if (word.length > wordLength) {
    wordLength = lengtofWord;
    longestWord = word;
  }
}
console.log(longestWord);
//Use the webTechs array to create the following array of arrays:
let resultArray = [];
for (let i = 0; i <= webTechs.length - 1; i++) {
  let word = webTechs[i];
  let lengthOfWebTech = word.length;
  let temp = [];
  temp.push(word, lengthOfWebTech);
  resultArray.push(temp);
}
console.log(resultArray);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = "";
for (let tech of mernStack) {
  acronym += tech[0];
}
console.log(acronym);
//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let tech of webTechs) {
  console.log(tech);
}
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
let revFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  revFruits.push(fruits[i]);
}
console.log(revFruits);
//Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    let skill = fullStack[i][j];
    console.log(skill);
  }
}
console.log(allCountry.sort());
//Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());
// Extract all the countries contain the word 'land' from the countries array and print it as array
let allCountryWithLand = [];
for (let country of allCountry) {
  if (country.includes("land")) {
    allCountryWithLand.push(country);
  }
}
console.log(allCountryWithLand);
// Find the country containing the hightest number of characters in the countries array
let longestAllCountry = [];
let countMaxLength = 0;
let longLengthCountry = "";
for (let country of allCountry) {
  if (country.length > countMaxLength) {
    countMaxLength = country.length;
    longLengthCountry = country;
  }
}
console.log(longLengthCountry);
// Extract all the countries containing only four characters from the countries array and print it as array
let countryWith4Char = [];
for (let country of allCountry) {
  if (country.length <= 4) {
    countryWith4Char.push(country);
  }
}
console.log(countryWith4Char);
// Extract all the countries containing two or more words from the countries array and print it as array
let countriesWithTwoOrMoreWords = [];
for (let country of allCountry) {
  if (country.includes(" ")) {
    countriesWithTwoOrMoreWords.push(country);
  }
}
console.log(countriesWithTwoOrMoreWords);
// Reverse the countries array and capitalize each country and stored it as an array
let reversedAndCapitalizedCountries = [];
for (let i = countries.length - 1; i >= 0; i--) {
  let country = countries[i];

  let capitalizedCountry =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  reversedAndCapitalizedCountries.push(capitalizedCountry);
}
console.log(reversedAndCapitalizedCountries);
