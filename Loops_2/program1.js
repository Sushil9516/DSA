//=========================================Create a function that will find the value in the array, if value found return index else return -1====================================
let arr = [3, 6, 9, 12, 15];
function findValueInArray(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(findValueInArray(arr, 12));
