console.log("Hello World");
// vowels count
function vowelsCount(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const text = "Hello, how many vowels are here?";
console.log("Vowel count:", vowelsCount(text));
//
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}
console.log("Vowel count:", countVowels("Hello, how many vowels are here?"));
//   Write a function called isPrime(num) that returns true if the number is prime, and false if it’s not.

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(7));
