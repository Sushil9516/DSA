let s = ["h", "e", "l", "l", "o"];

// ====================================================Approach 1=============================================================
// function reverseString(s) {
//   let l = 0;
//   let r = s.length - 1;
//   let temp = "";
//   while (l < r) {
//     temp = s[l];
//     s[l] = s[r];
//     s[r] = temp;
//     l++;
//     r--;
//   }
//   return s;
// }

// ====================================================Approach 2 (Best Approach)=============================================================
function reverseString(s) {
  let temp = "";
  for (let i = 0; i < Math.trunc(s.length / 2); i++) {
    temp = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }
  return s;
}

let result = reverseString(s);
console.log(result);
