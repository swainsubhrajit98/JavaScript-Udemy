const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
// create an empty set
const emptySet = new Set();
console.log(emptySet);
// Create a set containing 0 to 10 using loop
const numSet = new Set();
for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}
console.log(numSet);
// Remove an element from a set
const numbersSet = new Set([4, 5, 8, 9]);
numbersSet.delete(8);
console.log(numbersSet);
// Clear a set
const clearSet = new Set([3, 4, 5, 7]);
clearSet.clear();
console.log(clearSet);
// Create a set of 5 string elements from array
const countriesSet = new Set([
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
]);
console.log(countriesSet);
// Create a map of countries and number of characters of a country
const countriesMap = new Map();
const countriesArray = ["Finland", "Sweden", "Norway"];

countriesArray.forEach((country) => {
  countriesMap.set(country, country.length);
});
console.log(countriesMap);




