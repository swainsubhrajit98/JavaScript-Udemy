const targetNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;
let maxAttempts = 10;

// while (guess !== targetNumber) {
//   guess = parseInt(prompt("Guess number between 1 to 100"));

//   attempts++;

//   if (guess > targetNumber) {
//     console.log("Guess is High;Try again");
//   } else if (guess < targetNumber) {
//     console.log("Guess is Low;Try again");
//   } else {
//     console.log(`Congratulation correct Guess with ${attempts} attempts`);
//   }
// }



// for loop 



// for (let i = 1; i <= maxAttempts; i++) {
//   guess = parseInt(prompt(`Attempt ${i}: Guess a number between 1 and 100`));
//   attempts++;

//   if (guess > targetNumber) {
//     console.log("Guess is High;Try again");
//   } else if (guess < targetNumber) {
//     console.log("Guess is Low;Try again");
//   } else {
//     console.log(`Congratulation correct Guess with ${attempts} attempts`);
//     break;
//   }

//   if (i === maxAttempts) {
//     console.log(
//       `Sorry, you've used all ${maxAttempts} attempts! The correct number was ${targetNumber}.`
//     );
//   }
// }
