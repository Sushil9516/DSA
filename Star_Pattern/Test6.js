//================================================printMirroredRightTriangle(columns based on rows)=================================================
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let n = 5;
let space = n - 1;
function printMirroredRightTriangle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    space--;
    str += "\n";
  }
  return str;
}
console.log(printMirroredRightTriangle(n));
