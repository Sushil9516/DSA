//==============================================Write a function that returns the largest number in an array.==============================================//

// let arr = [-9, 1, 91, 23, 7, -3, 5, -6, 43, 67, -98, 92];
let arr = [-9, -3, -6, -98];

function largeNumber(arr) {
  //   let max = -1;
  //   let max = arr[0];
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largeNumber(arr));
