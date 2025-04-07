const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Explain the difference between forEach, map, filter, and reduce.
numbers.forEach((number) => console.log(number * 2));

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
// Define a callback function before you use it in forEach, map, filter or reduce.
const multiplyByTwo = (num) => {
  return num * 2;
};
const doubleTheValue = numbers.map(multiplyByTwo);
console.log(doubleTheValue);
// Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));
// Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));
// Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number));
// Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);
// Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);
// Use map to create a new array by changing each number to square in the numbers array
const sqrOfNum = numbers.map((number) => number * number);
console.log(sqrOfNum);
// Use map to change to each name to uppercase in the names array
names.map((name) => console.log(name.toUpperCase()));
// Use map to map the products array to its corresponding prices.
const productPrices = products.map((product) => product.price);
console.log(productPrices);
// Use filter to filter out countries containing land.
const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesWithLand);
// Use filter to filter out countries having six character.
const countriesHave6Letter = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHave6Letter);
// Use filter to filter out countries containing six letters and more in the country array.
const countriesHaveMoreThan6 = countries.filter(
  (country) => country.length > 6
);
console.log(countriesHaveMoreThan6);
// Use filter to filter out country start with 'E';
const countriesNameStartsWithE = countries.filter((country) =>
  country.startsWith("E")
);
console.log(countriesNameStartsWithE);
// Use filter to filter out only prices with values.
const validPrices = products.filter(
  (product) => product.price !== " " && product.price !== ""
);
console.log(validPrices);
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter((item) => typeof item === "string");
}
const mixedArray = [1, "apple", true, "banana", 42, "cherry", null, "grape"];
const stringArray = getStringLists(mixedArray);
console.log(stringArray);
// Use reduce to sum all the numbers in the numbers array.
const sumOfItems = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfItems);
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence = countries.reduce((accumulator, country, index, array) => {
  if (index === array.length - 1) {
    return `${accumulator}and ${country} are north European countries.`;
  } else {
    return `${accumulator}${country}, `;
  }
}, "");
console.log(sentence);
// Explain the difference between some and every
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber);

const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven);
// Use some to check if some names' length greater than seven in names array
const nameLength7 = names.some((name) => name.length > 7);
console.log(nameLength7);
// Use every to check if all the countries contain the word land
const containsLand = countries.every((country) => country.includes("land"));
console.log(containsLand);
// Explain the difference between find and findIndex.
const foundNumber = numbers.find((number) => number > 4);
console.log(foundNumber);

const foundIndex = numbers.findIndex((number) => number > 4);
console.log(foundIndex);
// Use find to find the first country containing only six letters in the countries array
const has6LetterCountry = countries.find((country) => country.length === 6);
console.log(has6LetterCountry);
// Use findIndex to find the position of the first country containing only six letters in the countries array
const has6LetterPosition = countries.findIndex(
  (country) => country.length === 6
);
console.log(has6LetterPosition);
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex((country) => country === "Norway");
console.log(norwayIndex);
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex((country) => country === "Russia");
console.log(russiaIndex);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalPrice = products
  .filter((product) => typeof product.price === "number" && product.price > 0)
  .map((pro) => pro.price)
  .reduce((total, price) => total + price, 0);
console.log(totalPrice);
// Find the sum of price of products using only reduce reduce(callback))
const totalPriceOfProduct = products.reduce((total, product) => {
  const price = parseFloat(product.price);
  if (!isNaN(price) && price > 0) {
    return total + price;
  }
  return total;
}, 0);
console.log(totalPriceOfProduct);
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const allCountries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Afghanistan",
  "India",
  "Iceland",
  "Pakistan",
  "Estonia",
  "United States",
  "Canada",
  "Brazil",
  "Russia",
  "China",
  "Australia",
  "Japan",
  "South Korea",
  "Germany",
  "France",
];
function categorizeCountries(patterns) {
  return allCountries.filter((country) =>
    patterns.some((pattern) => country.includes(pattern))
  );
}
const patterns = ["land", "ia", "island", "stan"];
const categorizedCountries = categorizeCountries(patterns);
console.log(categorizedCountries);
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(allCountries) {
  return allCountries.slice(0, 10);
}
const firstTenCountries = getFirstTenCountries(allCountries);
console.log(firstTenCountries);
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(allCountries) {
  return allCountries.slice(-10);
}

const lastTenCountries = getLastTenCountries(allCountries);
console.log(lastTenCountries);
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
//Use the countries information, in the data folder. Sort countries by name, by capital, by population

// Sort by Name
const sortedByName = countriess.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by Name:", sortedByName);

// Sort by Capital
const sortedByCapital = countriess.sort((a, b) =>
  a.capital.localeCompare(b.capital)
);
console.log("Sorted by Capital:", sortedByCapital);

// Sort by Population (Ascending)
const sortedByPopulation = countriess.sort(
  (a, b) => a.population - b.population
);
console.log("Sorted by Population (Ascending):", sortedByPopulation);

// Sort by Population (Descending)
const sortedByPopulationDesc = countriess.sort(
  (a, b) => b.population - a.population
);
console.log("Sorted by Population (Descending):", sortedByPopulationDesc);

// Find the 10 most spoken languages:

//Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countriess) {
  const sortContries = countriess.sort((a, b) => b.population - a.population);
  const top10PopulationCountries = sortContries.slice(0, 10);
  return top10PopulationCountries;
}
console.log(mostPopulatedCountries(countriess));
