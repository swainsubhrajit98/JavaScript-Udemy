let classTemp = 100;

// if(classTemp === 100){
//     classTemp = classTemp -20;
//     document.write("temp is ",classTemp);
// }

// if (classTemp === 100) {
//   classTemp = classTemp - 20;
//   document.write("temp is ", classTemp);
// } else {
//   document.write("No need change ", classTemp);
// }

// if (classTemp === 100) {
//   classTemp = classTemp - 20;
//   document.write("temp is is very high ", classTemp);
// } else if (classTemp === 90) {
//   classTemp = classTemp - 10;
//   document.write("temp is too high ", classTemp);
// } else {
//   document.write("no need any changes");
// }

// let age = 17;
// if (age >= 18) {
//   document.write("You are ready to drive");
// } else {
//   document.write(`${18 - age} year you have to wait`);
// }

// let score = 50;
// if (score >= 80) {
//   document.write("Your grade is A");
// } else if (score >= 70 && score <= 79) {
//   document.write("Your grade is B");
// } else if (score >= 60 && score <= 69) {
//   document.write("Your grade is C");
// } else if (score >= 50 && score <= 59) {
//   document.write("Your grade is D");
// } else if (score >= 40 && score <= 49) {
//   document.write("Your grade is E");
// } else {
//   document.write("You are fail");
// }

// ternary operator

// let classTempStatus = (classTemp === 100) ? classTemp - 20 : classTemp;
// document.write(classTempStatus," This is current status");

// comparision operator
// logical operator

let studAge = 18;
let studGendar = "M";
// if(studAge >= 18 && studGendar =="M"){
//     document.write(`Student age is ${studAge} and gendar is ${studGendar}`)
// }else{
//     document.write("You are out of this catagory")

// }
// for && both condition to be true or the code won't be execute

// if(studAge >= 18 || studGendar =="M"){
//     document.write(`Student age is ${studAge} and gendar is ${studGendar}`)
// }else{
//     document.write("You are out of this catagory")

// }
//  for || if one of the both is true ten it will execute
// if (!(studAge > 18)) {
//   document.write("Student age is less than 18");
// } else {
//   document.write("Student age is greater than 18");
// }

// let x = 15,
//   y = 7,
//   z = 3;
// if (x > y && x > z) {
//   document.write("X is greater than Y and Z ", x);
// } else if (y > x && y > x) {
//   document.write("Y is greater than X and Z ", y);
// } else {
//   document.write("Z is greater than X and y ", z);
// }

// let studGrade = "B";

// switch (studGrade) {
//   case "A":
//     document.write("It grade A");
//     break;
//   case "B":
//     document.write("It grade B");
//     break;
//   case "C":
//     document.write("It grade C");
//     break;

//   default:
//     document.write("Not found")
//     break;
// }

// loops
// document.write("While loop <br>");
// let x = 1;
// while (x <= 5) {
//   document.write(x + "<br>");
//   x++;
// }

// document.write(" Do While loop <br>");
// let y = 6;
// do {
//   document.write(y + "<br>");
//   y++;
// } while (y <= 5);

// document.write("For loop <br>");
// for(let i =1;i<=5;i++){
//     document.write(i +"<br>")
// }
document.write("Break statement <br>");
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  document.write(i + "<br>");
}

document.write("Continue statement <br>");
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    continue;
  }
  document.write(i + "<br>");

}
