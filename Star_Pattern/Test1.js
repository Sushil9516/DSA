// let n = 4;
// function Pattern(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(Pattern(n));

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += "*";
  }
  console.log(row);
}
