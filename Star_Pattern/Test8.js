//================================================printAlternatingBinaryTriangle(Toggle to Binary Number)=================================================
// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let n = 5;
function printAlternatingBinaryTriangle(n) {
  let str = "";
  let Toggle = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += Toggle;
      if (Toggle == 1) Toggle = 0;
      else Toggle = 1;
    }
    str += "\n";
  }
  return str;
}
console.log(printAlternatingBinaryTriangle(n));
