//==============================================Write a function that returns the smallest number in an array.==============================================//

// let arr = [-9, 1, 91, 23, 7, -3, 5, -6, 43, 67, -98, 92];
let arr = [-9, -3, -6, -98];

function smallNumber(arr) {
  //   let min = -1;
  //   let min = arr[0];
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(smallNumber(arr));
