function reverseNumber(num) {
  let temp = num;
  let rev = 0;
  if (temp < 0) temp = -temp;
  if (temp >= 0 && temp < 10) return num;
  if (!num) return "Please give me any number";
  for (let i = temp; i > 0; i = Math.trunc(i / 10)) {
    rev = rev * 10 + (i % 10);
  }
  if (num < 0) return -rev;
  else return rev; 
}
let num = -289;
console.log(reverseNumber(num));

