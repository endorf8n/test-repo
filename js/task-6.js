// TASK 1 ----------------------
// const planets = ["Mercury", "Earth", "Mars", "Jupiter"];

// for (const planet of planets) {
//   console.log(planet);
// }

// TASK 2--------------------------
// const slugify = function (title) {
//   return title.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Arrays for beginners"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// TASK 3-------------------------------
// const makeArray = function (firstArray, secondArray, maxLength) {
//   let newArray = [];
//   newArray = firstArray.concat(secondArray);

//   return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
// };

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// TASK 4---------------------------
// const filterArray = function (numbers, value) {
//   let newArray = [];
//   for (let number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76];
