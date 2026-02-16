// Increasing (ascending): next element strictly larger → arr[i+1] > arr[i]  → [1,2,3,4,5]
// Decreasing (descending): next element strictly smaller → arr[i+1] < arr[i] → [5,4,3,2,1]
// Non-decreasing (sorted with duplicates allowed): next element same or larger → arr[i+1] >= arr[i] → [1,1,2,2,3]
// In-place operation: modify the original array without creating a new array (reuse same memory)

//===============================================MY SOLUTION===============================================
let nums = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 7];
function removeDuplicates(nums) {
  let k = 1; // Pointer for the position of the next unique element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
let result = removeDuplicates(nums);
console.log(result);

//===============================================Akshay's SOLUTION===============================================
// let nums = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 7];
function removeDuplicates2(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}
let result1 = removeDuplicates2(nums);
console.log(result1);
