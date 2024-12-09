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

/*===============================================================
*                      *** TASK 4 ***                        
===============================================================*/

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

/*===============================================================
*                      *** Task ***                        
===============================================================*/

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));

// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

/*===============================================================
*                      *** Пакування товарів ***                        
===============================================================*/
// const isEnoughCapacity = function (products, containerSize) {
//   let values = Object.values(products);
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }
//   return total <= containerSize;
// };
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

/*===============================================================
*                      *** Розрахунок калорій ***                        
===============================================================*/
// const calcAverageCalories = function (days) {
//   let totalCalories = 0;
//   for (let day of days) {
//     totalCalories += day.calories;
//   }
//   return days.length !== 0 ? totalCalories / days.length : 0;
// };

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0
