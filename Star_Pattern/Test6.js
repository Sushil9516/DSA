//================================================printMirroredRightTriangle(columns based on rows)=================================================
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let n = 5;
function printMirroredRightTriangle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(printMirroredRightTriangle(n));
