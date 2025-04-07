// Declare a function fullName and it print out your full name.
// function fullName() {
//   console.log("Subhrajit Swain");
// }
// fullName();
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("Subhrajit", "Swain"));
// Declare a function addNumbers and it takes two two parameters and it returns sum.
let sum = 0;
function addNumbers(a, b) {
  return (sum = a + b);
}
console.log(addNumbers(5, 6));
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectanle(length, width) {
  return length * width;
}
console.log(areaOfRectanle(10, 18));
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
let perimeter = 0;
function perimeterOfRectangle(length, width) {
  return (perimeter = 2 * (length + width));
}
console.log(perimeterOfRectangle(20, 30));
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
let volume = 0;
function volumeOfRectPrism(length, width, height) {
  return (volume = length * width * height);
}
console.log(volumeOfRectPrism(10, 20, 30));
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
let area = 0;
function areaOfCicle(r) {
  return (area = Math.PI * r * r);
}
console.log(areaOfCicle(10));
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
let circumference = 0;
function circumOfCircle(r) {
  return (circumference = 2 * Math.PI * r);
}
console.log(circumOfCircle(10));
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function calculateDensity(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(calculateDensity(10, 2));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calculateSpeed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(calculateSpeed(150, 3));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calculateWeight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}
console.log(calculateWeight(50, 9.81));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(42));
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return { bmi: bmi.toFixed(2), category: "Underweight" };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return { bmi: bmi.toFixed(2), category: "Normal weight" };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return { bmi: bmi.toFixed(2), category: "Overweight" };
  } else {
    return { bmi: bmi.toFixed(2), category: "Obese" };
  }
}
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(90, 1.75));
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  month = month.toLowerCase();
  if (["december", "january", "february"].includes(month)) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    return "Summer";
  } else if (["september", "october", "november"].includes(month)) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}
console.log(checkSeason("May"));
console.log(checkSeason("June"));
console.log(checkSeason("December"));
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let capitalizedArray = [];
  for (let i = 0; i < arr.length; i++) {
    capitalizedArray.push(arr[i].toUpperCase());
  }
  return capitalizedArray;
}
console.log(capitalizeArray(["Alok", "amit", "aysuh"]));
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log(addItem([1, 2, 3], 5));
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log(removeItem([1, 2, 3, 4], 2));
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(5));
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(5));
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(5));
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  console.log(`The number of odds are ${oddCount}.`);
  console.log(`The number of evens are ${evenCount}.`);
}

evensAndOdds(100);

//Write a function which takes any number of arguments and return the sum of the arguments
function sumOfNum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumOfNum(1,2,4));
//Write a function which takes any number of arguments and return the sum of the arguments
function sum(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));