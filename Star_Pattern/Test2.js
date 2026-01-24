//================================================printRightTriangle=================================================
// *
// * *
// * * *
// * * * *

let n = 5;
function printRightTriangle(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(printRightTriangle(n));
