// 1. Count how many times each and every characters in the string excluding space inbetween

// const str = "hare krishna hare krishna krishna krishna krishna hare hare";
// let res = str.split(" ").join("");
// console.log("RES : ", res);
// let obj = {};

// for (let x of res) {
//   if (obj[x]) {
//     obj[x] += 1;
//   } else {
//     obj[x] = 1;
//   }
// }

// console.log("obj:", obj);

//---------------------------------------------------
// sort the array
// let array = [4, 7, 1, 5, 8];
// array.sort();
// console.log("ARRAY", array);
//------------------------------------------------

// Print 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log("i = ",i);
// }

// ------------------------------------------------

// Calculate sum of first n number
// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum : ", sum);

//--------------------------------------------------

// While loop
// let i = 1;
// while (i <= 5) {
//   console.log("i = ", i);

//   i++;
// }

// do while loop
// let i = 20;
// do {
//   console.log("Hello");
//   i++;
// } while (i <= 10);

//-----------------------------------------------

// For-of loop
// let str = "Good Morning";
// for (let i of str) {
//   console.log("i = ", i);
// }

//-----------------------------------------------

// for-in loop
// let student = {
//   name: "Shreya Sahani",
//   age: 20,
//   cgpa: 8,
//   isPass: true,
// };

// for (let key in student) {
//   console.log(student[key]);
// }

//-------------------------------------------------

// Print all numbers from 1 to 100
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// Print all even numbers from 1 to 100
// for (let i = 0; i <= 100; i = i + 2) {
//   console.log(i);
// }
// ----------------------------------------------
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("i=", i);
//   }
// }
//---------------------------------------------
// Print all odd numbers from 1 to 100
//   if (i % 2 !== 0) {
//     console.log("i=", i);
//   }
// }
//--------------------------------------------

// Small game using loop
// let gameNum = "25";
// let userNum = prompt("Guess the game number : ");
// while (userNum !== gameNum) {
//   userNum = prompt("You enetered the wrong number. Guess again:");
// }
// console.log("Congratulations, you entered the right number");

// -----------------Strings----------------------

//prompt the user to enter their full name.Generate the username for them based on the input.Start username with @, followed by their full name and ending with the fullname length

// let userInput = prompt("Enter your full name : ");
// let user = userInput.split(" ").join("");
// let length = user.length;
// let username = `@${user}${length}`;
// console.log("Your User name is ", username);
