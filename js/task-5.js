const getCommonElements = function (array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
};

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(
  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40, 56, 54, 33, 33])
);
