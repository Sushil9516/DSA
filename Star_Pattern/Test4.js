//================================================printRightTriangleWithNumber(rows)=================================================
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n = 5;
//================================================printRightTriangleWithNumber(rows) Approach 1=================================================
// function printRightTriangle(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += i + 1;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(printRightTriangle(n));

//================================================printRightTriangleWithNumber(rows) Approach 2=================================================
function printRightTriangle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
  return str;
}
console.log(printRightTriangle(n));
