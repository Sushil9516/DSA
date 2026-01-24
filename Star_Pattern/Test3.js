//================================================printRightTriangleWithNumber(columns)=================================================
// 1
// 1 2
// 1 2 3 4
// 1 2 3 4 5

let n = 5;

function printRightTriangle(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += j + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(printRightTriangle(n));
