//================================================printRightTriangleWithNumber(rows)=================================================
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n = 5;

function printRightTriangle(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += i + 1;
    }
    str += "\n";
  }
  return str;
}
console.log(printRightTriangle(n));
