// function calculateAge(bYear, cYear) {
//   return cYear - bYear;
// }

// let result = calculateAge(1999, 2025);
// document.write(`You are ${result} years old`);

function calculateAge(birthYear, currentYear) {
  var age = currentYear - birthYear;
  document.write(
    "<h2>Your age is " + age +"</h2>"
  );
}
calculateAge(1986, 2016);
