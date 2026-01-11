//==============================================Write a function that returns the number of negative numbers in an array.==============================================//
let arr = [-9, 1, 23, 7, -3, 5, -6, 43, 67, -98];

function countNegativeNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNegativeNumber(arr));
