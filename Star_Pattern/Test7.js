//================================================printBinaryRightTriangle(rows)=================================================
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let n = 5;
//================================================printBinaryRightTriangle Approach 1=================================================
// function printBinaryRightTriangle(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (j % 2 == 0) str += 0;
//       else str += 1;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(printBinaryRightTriangle(n));

//================================================printBinaryRightTriangle Approach 2( Using switch approach by Namaste DSA)=================================================
function printBinaryRightTriangle(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    let Switch = 1;
    for (let j = 1; j <= i; j++) {
      str += Switch;
      if (Switch == 1) Switch = 0;
      else Switch = 1;
    }
    str += "\n";
  }
  return str;
}
console.log(printBinaryRightTriangle(n));
