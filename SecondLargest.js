//========================================Second Largest Number in an Array========================================//
//=================Corner Cases:
//1. if array is empty
//2. if array have only one element
//3. if array contains duplicates. [10,20,20]
//4. if array have negative numbers (take -Infinity)
//5. if array only two same elements [10,10]

function findSecondLargest(arr) {
  
  if (arr.length < 2) return "Array should have atleast 2 elements.";
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
      a
    }
  }
  return secondMax === -Infinity ? "No second largest found" : secondMax;
}

// let arr = [10, 50, 12, 200, 15, 7, 3, 100];
// let arr = [10, 20, 20];
let arr = [20, 20];
console.log(findSecondLargest(arr));
